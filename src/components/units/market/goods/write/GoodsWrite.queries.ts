import { gql } from "@apollo/client";

export const USED_ITEM = gql`
    mutation createUseditem($createUseditemInput : CreateUseditemInput!) {
        createUseditem(createUseditemInput : $createUseditemInput) {
            _id
            name
        }
    }
`