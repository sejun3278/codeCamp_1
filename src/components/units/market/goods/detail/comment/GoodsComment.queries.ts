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
                name
            }
        }
    }
`;

export const DELETE_QUESTION = gql`
    mutation deleteUseditemQuestion($useditemQuestionId : ID!) {
        deleteUseditemQuestion(useditemQuestionId : $useditemQuestionId) 
    }
`;

export const UPDATE_USEDITEM_QUESTION = gql`
    mutation updateUseditemQuestion($updateUseditemQuestionInput : UpdateUseditemQuestionInput!, $useditemQuestionId : ID!) {
        updateUseditemQuestion(updateUseditemQuestionInput : $updateUseditemQuestionInput, useditemQuestionId : $useditemQuestionId) {
            _id
        }
    }
`

export const CREATE_USEDITEM_ANSWER = gql`
    mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput : CreateUseditemQuestionAnswerInput!, $useditemQuestionId : ID!) {
        createUseditemQuestionAnswer(createUseditemQuestionAnswerInput : $createUseditemQuestionAnswerInput, useditemQuestionId : $useditemQuestionId) {
            _id
            contents
        }
    }
`