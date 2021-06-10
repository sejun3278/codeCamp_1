import { gql } from "@apollo/client";

export const CREATE_USER_INPUT = gql`
    mutation createUser($createUserInput : CreateUserInput!) {
        createUser(createUserInput : $createUserInput) {
            _id
            email
            name
        }
    }
`