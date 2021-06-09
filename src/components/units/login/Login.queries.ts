import { gql } from "@apollo/client";

export const LOGIN_USER_EXAMPLE = gql`
    mutation loginUserExample($email : String!, $password : String!) {
        loginUserExample(email : $email, password : $password) {
            accessToken
        }
    }
`;

export const LOGIN_USER = gql`
    mutation loginUser($password : String!, $email : String!) {
        loginUser(password : $password, email : $email) {
            accessToken
        }
    }
`