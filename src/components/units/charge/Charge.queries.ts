import { gql } from '@apollo/client';

export const CREATE_POINT = gql`
    mutation createPointTransactionOfLoading($impUid : ID!) {
        createPointTransactionOfLoading(impUid : $impUid) {
            _id
            status
        }
    }
`

export const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn {
        _id
        email
        name
        userPoint {
            amount
        }
    }
}
`