import { gql } from '@apollo/client';

export const FETCH_USEDITEM_OF_THE_BEST = gql`
    query fetchUseditemsOfTheBest {
        fetchUseditemsOfTheBest {
            _id
            name
            price
            remarks
        }
    }
`

export const FETCH_USEDITEMS = gql`
    query fetchUseditems($search : String, $page : Int) {
        fetchUseditems(search : $search, page : $page) {
            _id
            remarks
            name
            price
            seller {
                name
            }
            tags
        }
    }
`