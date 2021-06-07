import { gql } from "@apollo/client";

export const FETCH_BOARDS_OF_THE_BEST = gql`
    query fetchBoardsOfTheBest {
        fetchBoardsOfTheBest {
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            images
            createdAt
        }
    }
`;

export const FETCH_BOARDS = gql`
    query fetchBoards($search : String, $page : Int) {
        fetchBoards(search : $search, page : $page) {
            _id
            writer
            title
            createdAt
        }
    }
`

export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount($search : String) {
        fetchBoardsCount(search : $search)
    }
` 