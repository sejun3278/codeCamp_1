import LoginUI from './Login.presenter';
import { useState, useRef, useContext } from 'react';
import { useApolloClient, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from './Login.queries';

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
    const globalContextList = useContext(GlobalContext);
    // const { setLoginEmail } = useContext

    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const client = useApolloClient();

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

    const [ clickLogin, setClickLogin ] = useState(false);
    // const { data : userInfo } = useQuery(FETCH_USER_LOGGED_IN);

    // console.log(userInfo)

    // const [ fetchUserLazy, { data : userQuery } ] = useLazyQuery(FETCH_USER_LOGGED_IN);

    // 로그인
    const login = async (event) => {
        event.preventDefault();

        if(clickLogin) return;

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
            setClickLogin(true);

            try {
                const login = await loginUser({
                    variables : {
                        ...input
                    }
                })

                // accessToken 저장하기
                const accessToken = login.data.loginUser.accessToken;
                globalContextList.setAccessToken(accessToken);

                // 이메일 저장하기
                // globalContextList.setLoginEmail(input.email);

                // useLazyQuery 사용시
                // fetchUserLazy({
                //     context : {
                //         headers : { authorization : accessToken }
                //     }
                // })

                const userQuery = await client.query({
                    query : FETCH_USER_LOGGED_IN,
                    context : {
                        headers : { authorization : accessToken }
                    }
                });
                const userInfo = userQuery.data.fetchUserLoggedIn;

                // 유저 정보 저장하기
                globalContextList.setUserInfo(userInfo);

                if(typeof window !== 'undefined') {
                    // 로컬 스토리지에 저장하기
                    // window.localStorage.setItem('login', JSON.stringify(userInfo));
                }

                alert(input.email + ' 님 반갑습니다!');

                if(globalContextList.savePath !== "") {
                    globalContextList.setSavePath("");
                    router.push(globalContextList.savePath);
                    
                } else {
                    router.back();
                }

            } catch(error) {
                setClickLogin(false);
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