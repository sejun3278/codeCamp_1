import LoginUI from './Login.presenter';
import { useState, useRef, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { LOGIN_USER } from './Login.queries';

import { GlobalContext } from '../../../../pages/_app';

const initinal = {
    "email" : "",
    "password" : ""
}

const errorInitinal = {
    "email" : false,
    "password" : false
}

export default function LoginPage () {
    const router = useRouter();

    const [ input, setInput ] = useState(initinal);
    const [ errors, setErrors ] = useState(errorInitinal);
    const [ able, setAble ] = useState(false);
    
    const [ loginUser ] = useMutation(LOGIN_USER);
    const { setAccessToken } = useContext(GlobalContext);

    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    // if (typeof window !== "undefined") {
    //     // 코드 작성
    //     const _next : any = window.document.querySelector('#__next');
    //     _next.style.height = '100%';
    // }

    const onChangeInput = (event) => {
        const changeInput = { ...input };
        changeInput[event.target.name] = event.target.value;

        const error = { ...errors };
        error[event.target.name] = false;

        setInput(changeInput);

        let ables = false;
        if(changeInput['email'].length > 0 && changeInput['password'].length > 0) {
            ables = true;
        }
        setAble(ables);
        setErrors(error)
    }

    // 로그인
    const login = async (event) => {
        event.preventDefault();

        if(able === false) {
            const error = { ...errors }
            if(input.email.length === 0) {
                emailRef.current.focus();
                error['email'] = true;

            } 
            
            if(input.password.length === 0) {
                passwordRef.current.focus();
                error['password'] = true;
            }

            setErrors(error);
            return; 

        } else {
            try {
                const login = await loginUser({
                    variables : {
                        ...input
                    }
                })

                // accessToken 저장하기
                const accessToken = login.data.loginUser.accessToken;
                setAccessToken(accessToken);

                alert(input.email + ' 님 반갑습니다!');
                router.push('/');

            } catch(error) {
                alert(error.message);
                return;
            }
        }
    }

    return(
        <LoginUI 
            input={input}
            onChangeInput={onChangeInput}
            able={able}
            router={router}
            login={login}
            emailRef={emailRef}
            passwordRef={passwordRef}
            errors={errors}
        />
    )
}