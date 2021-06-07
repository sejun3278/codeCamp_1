import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { GlobalContext } from '../_app';

const LOGIN_USER_EXAMPLE = gql`
    mutation loginUserExample($email : String!, $password : String!) {
        loginUserExample(email : $email, password : $password) {
            accessToken
        }
    }
`;

const LoginPage = () => {
    const router = useRouter();
    const { setAccessToken } = useContext(GlobalContext);

    const [ loginUserExample ] = useMutation(LOGIN_USER_EXAMPLE);

    const Login = async () => {
        const { data } = await loginUserExample({
            variables : {
                email : "sejun3278@naver.com",
                password : "123"
            }
        })

        const accessToken = data?.loginUserExample.accessToken;

        setAccessToken(accessToken);

        router.push('/');
    }
    return(
        <div>
            {/* <form> */}
                {/* <div>
                    이메일 <input type='text' onChange={(event) => setEmail(event.target.value.trim())} />
                </div>

                <div>
                    비밀번호 <input type='password' onChange={(event) => setPassword(event.target.value.trim())} />
                </div> */}

                <button onClick={Login}> 로그인 </button>
            {/* </form> */}
        </div>
    )
}

export default LoginPage;