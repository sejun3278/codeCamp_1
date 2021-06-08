import { gql } from "@apollo/client";

const LOGIN_USER_EXAMPLE = gql`
    mutation loginUserExample($email : String!, $password : String!) {
        loginUserExample(email : $email, password : $password) {
            accessToken
        }
    }
`;