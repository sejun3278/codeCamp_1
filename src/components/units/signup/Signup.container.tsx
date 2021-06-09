import SignupUI from './Signup.presenter';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_USER_INPUT } from './Signup.queries';

import { checkEmail } from '../../../commons/libraries/validations';

const initinal = {
    "name" : "",
    "email" : "",
    "password" : "",
    "passwordConfirm" : ""
}

interface errorType {
    name : Boolean | String,
    email : Boolean | String,
    password : Boolean | String,
    passwordConfirm : Boolean | String
}

const errorInitinal : errorType = {
    "name" : false || "",
    "email" : false || "",
    "password" : false || "",
    "passwordConfirm" : false || ""
}

export default function SignupPage () {
    const router = useRouter();
    const [ input, setInput ] = useState(initinal);
    const [ errors, setErrors ] = useState(errorInitinal);
    const [ able, setAble ] = useState(false);

    // 회원가입이 완료될 때 중복 실행 방지
    const [ complate, setComplate ] = useState(false);

    const [ modal, setModal ] = useState(false);
    const [ createUser ] = useMutation(CREATE_USER_INPUT);

    if (typeof window !== "undefined") {
        // 코드 작성
        const _next : any = window.document.querySelector('#__next');
        _next.style.height = '100%';
    }

    // 인풋값 삽입
    const changeInput = (event) => {
        const inputs = { 
            ...input,
            [event.target.name] : event.target.value.trim()
        };

        const error = { 
            ...errors,
            [event.target.name] : false
        };

        if(event.target.name === 'passwordConfirm') {
            if(error['password'] === '비밀번호와 비밀번호 확인이 일치하지 않습니다.') {
                error['password'] = false;
            }
        }

        setInput(inputs);
        setErrors(error);

        let ables = false;
        if(
            inputs['email'].trim().length > 0 &&
            inputs['name'].trim().length > 0 &&
            inputs['password'].trim().length > 0 &&
            inputs['passwordConfirm'].trim().length > 0
        ) {
            if(checkEmail(inputs['email']) !== null && inputs['password'] === inputs['passwordConfirm']) {
                ables = true;
            }
        }
        setAble(ables);
    }

    // 회원가입
    const signup = async (event) => {
        event.preventDefault();

        if(able === false) {
            const error = { ...errors };

            if(input['email'].length === 0) {
                error['email'] = '이메일은 필수 입력입니다.';

            } else {
                if(checkEmail(input['email']) === null) {
                    error['email'] = '이메일 형식이 일치하지 않습니다.';
                }
            }

            if(input['name'].length === 0) {
                error['name'] = '이름은 필수 입력입니다.';
            }

            if(input['password'].length === 0) {
                error['password'] = '비밀번호는 필수 입력입니다.';
            }

            if(input['passwordConfirm'].length === 0) {
                error['passwordConfirm'] = '비밀번호 확인은 필수 입력입니다.';
            }

            if(input['password'].length > 0 && input['passwordConfirm'].length > 0) {
                if(input['password'] !== input['passwordConfirm']) {
                    error['password'] = '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
                }
            }

            setErrors(error);
            return

        } else {
            // 회원가입

            // 중복 클릭 방지하기
            setComplate(true);

            try {
                const result = await createUser({
                    variables : {
                        createUserInput : {
                            email : input.email,
                            name : input.name,
                            password : input.password
                        }
                    }
                })

                if(result.data.createUser._id) {
                    // 모달창 띄우기
                    setModal(true);
                }

            } catch(error) {
                setComplate(false);

                alert(error.message);
                return;
            }
        }
    }

    // 로그인 화면으로 이동하기
    const moveLogin = () => {
        router.push('/login');

        window.setTimeout( () => {
            setModal(false);
        }, 200)
    }

    return(
        <SignupUI 
            router={router}
            input={input}
            changeInput={changeInput}
            signup={signup}
            able={able}
            errors={errors}
            complate={complate}
            modal={modal}
            moveLogin={moveLogin}
        />
    )
}