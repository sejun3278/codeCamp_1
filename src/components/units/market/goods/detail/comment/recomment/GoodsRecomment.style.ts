import styled from '@emotion/styled';

export const GoodsRecommentDiv = styled.div`

`

export const GoodsRecommentArrow = styled.img`
    /* vertical-align : -webkit-baseline-middle; */
`

export const GoodsRecomment = styled.div`
    margin-left : 60px;
    display : grid;
    grid-template-columns : 35px auto 100px;
    min-height : 60px;
`

export const GoodsRecommentInfo = styled.div`
    img {
        vertical-align : top;
        width : 35px;
    }
`

export const GoodsRecommentWriterInfo = styled.div`
    display : inline-block;
    margin-left : 10px;
    line-height : 1.2;
    margin-top : -2px;
    cursor : default;
    
    div {
        /* width : 90%; */
        overflow:hidden; 
        text-overflow:ellipsis; 
        white-space:nowrap;
    }
`

export const GoodsAnswerIconDiv = styled.div`
    text-align : right;
`

export const GoodsAnswerOption = styled.div`
    img {
        width : 20px;
        margin : 0px 5px;
        cursor: pointer;
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