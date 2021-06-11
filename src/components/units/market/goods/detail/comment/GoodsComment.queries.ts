import { gql } from '@apollo/client';

export const CREATE_USEDITEM_QUESTION = gql`
    mutation createUseditemQuestion($createUseditemQuestionInput : CreateUseditemQuestionInput!, $useditemId : ID!) {
        createUseditemQuestion(createUseditemQuestionInput : $createUseditemQuestionInput, useditemId : $useditemId) {
            _id
            contents
        }
    }
`;

export const FETCH_USEDITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($page : Int, $useditemId : ID!) {
        fetchUseditemQuestions(page : $page, useditemId : $useditemId) {
            _id
            contents
            createdAt
            user {
                email
            }
        }
    }
`;


// export const FETCH_BOARD_COMMENTS = gql`
//   query fetchBoardComments($page : Int, $boardId : ID!) {
//       fetchBoardComments(page : $page, boardId : $boardId) {
//         _id
//         writer
//         contents
//         rating
//         createdAt
//     }
//   }
// `