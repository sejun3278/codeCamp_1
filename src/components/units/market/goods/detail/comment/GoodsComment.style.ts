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