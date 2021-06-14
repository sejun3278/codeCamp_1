import styled from '@emotion/styled';

export const GoodsCommentDiv = styled.div`
    margin-top : 70px;
    display : grid;
    grid-template-columns : 15% 70% 15%;
    min-height : 700px;

    @media (max-width : 500px) {
    grid-template-columns : 2% auto 2%;

        /* display : block; */
    }
`

export const GoodsComment = styled.div`
    border-top : solid 1px #BDBDBD;
`

export const GoodsCommentTitle = styled.div`
    height : 80px;
    line-height : 80px;

    img {
        vertical-align : middle;
    }

    b {
        margin-left : 5px;
    }
`;

export const GoodsWriteDiv = styled.div`
    min-height : 150px;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;

    textarea { 
        width : 100%;
        height : 120px;
        resize : none;
        padding : 15px;
        border : none;
    }
`;

export const GoodsTextOptionDiv = styled.div`
    border-top : solid 1px #BDBDBD;
    height : 40px;
    line-height : 40px;
    display : grid;
    grid-template-columns : auto 100px;
    padding-left : 15px;
    color : #BDBDBD;

    div input[type=button] {
        text-align : center;
        width: 100%;
        height: 100%;
        background-color : black;
        color : white;
        border : none;
        cursor: pointer;
        font-weight : bold;   
    }
`

export const GoodsQuestionDiv = styled.div`
    margin-top : 10px;
    padding-bottom : 30px;
`

export const GoodsQuestion = styled.div`
    min-height : 80px;
    border-bottom : solid 1px #bdbdbd;
    box-sizing: border-box;
`

export const GoodsQuestionGridDiv = styled.div`
    display : grid;
    grid-template-columns : 60px auto 80px;
    margin-top : 30px;
`

export const GoodsQuestionProfile = styled.img`

`

export const GoodsQuestionConents = styled.div`
    min-height : 30px;
    line-height : 30px;
    margin-right : 30px;
    color : #4F4F4F;
`

export const GoodsQuestionDate = styled.div`
    min-height : 50px;
    line-height : 4;
    color : #BDBDBD;
    font-size : 12px;
`

export const GoodsQuestionOptionDiv = styled.div`
    div img {
        cursor: pointer;
    }
`

export const MyComment = styled.div`
    text-align : right;

    img {
        margin-right : 10px;
    }

`

export const ModifyModalDiv = styled.div`
    p {
        text-align : center;
        margin : 10px 0px;
        font-size : 15px;
        font-weight : bold;
    }

    textarea {
        margin-top : 10px;
        width : 100%;
        height : 80px;
        resize : none;
        padding : 10px;
        border-color : #ababab;
    }
`

export const ModifyOptionDiv = styled.div`
    border : solid 1px #ababab;
    height : 30px;
    margin-top : -10px;
    padding : 5px;
    color : #ababab;
    text-align : right;
`

export const ModifyConfirmDiv = styled.div`
    margin-top : 20px;

    input {
        min-width : 40%;
        height : 30px;
        cursor: pointer;
        margin : 0px 16px;
        border-color : #ababab;
        background-color : white;
        font-weight : bold;
        background-color : #F2F2F2;
    }
`

export const GoodsQuestionAnswerDiv = styled.div`
    margin-left : 60px;
    display : grid;
    grid-template-columns : 40px auto;
    padding-bottom : 15px;

    img {
        vertical-align : top;
    }

    textarea {
        resize : none;
        min-height : 80px;
        width : 100%;
        padding : 10px;
        border-color : #ababab;
    }
`

export const GoodsQuestionAnswerOptionDiv = styled.div`
    height : 40px;
    line-height : 40px;
    border : solid 1px #ababab;
    margin-top : -6px;
    display : grid;
    grid-template-columns : auto 100px;

    div {
        input {
            width : 100%;
            background-color : #ababab;
            border : none;
            height : 38px;
            cursor: pointer;
        }
    }
`

export const GoodsAnswerLength = styled.div`
    font-size : 13px;
    color : #BDBDBD;
    margin-left : 10px;
`