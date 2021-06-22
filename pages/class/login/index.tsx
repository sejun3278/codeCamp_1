// import { gql, useMutation } from '@apollo/client';
// import { useRouter } from 'next/router';
// import { useState, useContext } from 'react';
// import { GlobalContext } from '../_app';

// import Login from '../../src/components/units/login/login.container';

// const LOGIN_USER_EXAMPLE = gql`
//     mutation loginUserExample($email : String!, $password : String!) {
//         loginUserExample(email : $email, password : $password) {
//             accessToken
//         }
//     }
// `;

// export default function LoginPage() {
//     // const router = useRouter();
//     // const { setAccessToken } = useContext(GlobalContext);

//     // const [ loginUserExample ] = useMutation(LOGIN_USER_EXAMPLE);

//     // const Login = async () => {
//     //     const { data } = await loginUserExample({
//     //         variables : {
//     //             email : "sejun3278@naver.com",
//     //             password : "123"
//     //         }
//     //     })

//     //     const accessToken = data?.loginUserExample.accessToken;

//     //     setAccessToken(accessToken);

//     //     router.push('/');
//     // }
//     return (
//         <Login />
//     )
//         // <div>
//         //     <button onClick={Login}> 로그인 </button>
//         // </div>
// }

// import LoginPage from '../../src/components/units/login/Login.container';
import LoginPage from '../../../src/components/commons/login/Login.container';

export default function BoardWritePage() {
    return <LoginPage />
}