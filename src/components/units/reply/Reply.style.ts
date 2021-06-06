import styled from '@emotion/styled';

export const ReplyListDiv = styled.div`
    margin-top : 60px;
    border-top : solid 1px #ababab;
    box-sizing: border-box;
`

export const ReplyTitle = styled.div`
    height : 80px;
    line-height : 80px;

    b {
        padding-left : 10px;
    }
`

export const ReplyWriteIcon = styled.img`
    width : 20px;
    height : 20px;
`

export const ReplyWriterInfoDiv = styled.div`

    div {
        float : left;
        margin-right : 15px;

        @media (max-width : 520px) {
            display : block;
            float : none;
            margin-right : 0px;
        }
    }
`

export const ReplyWriteDiv = styled.div`
    min-height : 200px;
`

export const ReplyWriterGrid = styled.div`
    display : grid;
    grid-template-columns : 80% auto;
`

export const ReplyWriterInfo = styled.input`
    height : 35px;
    line-height : 35px;
    margin-right : 5%;
    box-sizing: border-box;
    border : solid 1px #ababab;
    width : 130px;
    padding-left : 10px;

    @media (max-width : 520px) {
        width : 100%;
    }
`

export const ReplyWriterRatingDiv = styled.div`
    margin-left : 10px;
    line-height : 30px;

    @media (max-width : 520px) {
        text-align : right;
        height : 50px;
    }
`

export const ReplyWriterRating = styled.span`
    display : inline-block;
    margin-right : 0px !important;
    cursor: pointer;
    margin-left : 2.5px;

    img {
        width : 15px;
        height : 15px;
    }
`

export const ReplyWriteContentsDiv = styled.div`
    width : 100%;

    textarea {
        width : 100%;
        margin-top : 20px;
        resize : none;
        height : 80px;
        padding : 10px;
        box-sizing: border-box;
        border : solid 1px #ababab;
        border-bottom-width : 0px;
    }
`

export const ReplyOptionaryDiv = styled.div`
    height : 40px;
    border : solid 1px #ababab;
    border-top-color : #eee;
    margin-top : -4px;
`

export const ReplyLimit = styled.div`
    float : left;
    margin : 7px 12px;
    color: #ababab;
    word-spacing : -2px;
`

export const ReplyWriteSumbit = styled.input`
    float : right;
    height : 40px;
    width : 90px;
    background-color : black;
    color : white;
    font-size : 13.5px;
    font-weight : bold;
    cursor: pointer;
`

export const ReplyListContents = styled.div`
    min-height : 80px;
    margin-top : 40px;
`

export const ReplyList = styled.div`
    min-height : 70px;
    margin-top : 25px;
    border-bottom : solid 1px #ababab;
    box-sizing: border-box;
`

export const ReplyListInfoDiv = styled.div`
    display : grid;
    grid-template-columns : 50px auto;
`

export const ReplyListThumbDiv = styled.div`
    img {
        width : 35px;
        height : 35px;
    }
`

export const ReplyWriteListInfoDiv = styled.div`

`

export const ReplyWriterListInfo = styled.div`
    div {
        display : inline-block;
    }
`

export const ReplyWriterName = styled.div`
    min-width : 40px;
    max-width : 60%;
    font-size : 14px;
    font-weight : bold;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;

    @media (max-width : 520px) {
        max-width : 30%;
    }
`

export const ReplyListRating = styled.div`
    width : 90px;
    margin-left : 25px;

    div img {
        width : 15px;

    }
`

export const ReplyListOption = styled.div`
    float : right;
    text-align : right;
    max-width : 60px;

    img {
        width : 14px;
        height : 14px;
        margin-left : 11px;
        cursor: pointer;
    }
`

export const ReplyListContent = styled.div`
    font-size : 13px;
    /* min-height : 40px; */
    margin-top : 0px;
    max-width : 95%;
    /* overflow:hidden;  */
    vertical-align:top; 
    text-overflow: ellipsis; 
    word-break:break-all; 
    -webkit-box-orient:vertical; 
    -webkit-line-clamp:3;
`

export const ReplyDate = styled.div`
    font-size : 13px;
    color : #ababab;
    height : 50px;
    line-height : 40px;
`

export const ModalDiv = styled.div`
`

export const ModalTypeName = styled.div`
    text-align : center;
    font-size : 16px;
    font-weight : bold;
    height : 30px;
    line-height : 30px;
`

export const ModalPasswordDiv = styled.div`
    margin-top : 35px;
    div {
        font-weight : bold;
        font-size : 14px;
        color : #ababab;
    }
`

export const ModalPasswordInput = styled.input`
    width : 100%;
    height : 40px;
    margin-top : 14px;
    padding-left : 8px;
    border-bottom : solid 1px #ababab;
    box-sizing: border-box;
`

export const ModalPasswordSubmit = styled.input`
    width : 100%;
    cursor: pointer;
    height : 35px;
    color : #aaaaaa;
`