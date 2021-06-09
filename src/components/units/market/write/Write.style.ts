import styled from '@emotion/styled';


export const MarketWriteDiv = styled.div`
    margin-top : 80px;
    display : grid;
    grid-template-columns : 15% 70% 15%;

    @media (max-width : 700px) {
        grid-template-columns : 10% 80% 10%;
    }

    @media (max-width : 555px) {
        display : block;
    }
`

export const MarketWriteWinodwDiv = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    min-height : 300px;
`

export const MarketWriteTitle = styled.h2`
    height : 120px;
    line-height : 120px;
    text-align : center;
    font-family: Noto Sans CJK KR;
`

export const MarketContentsGridDiv = styled.div`
    display : grid;
    grid-template-columns : 10% 80% 10%;

    @media (max-width : 400px) {
        grid-template-columns : 5% 90% 5%;
    }
`

export const MarketWriteContentsDiv = styled.div`
`

export const MarketWriteContents= styled.div`
    min-height : 160px;

    input[type=text], input[type=number] {
        width : 100%;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        padding-left : 10px;
        height : 45px;
    }

    textarea {
        width : 100%;
        min-height : 100px;
        resize : none;
        margin-bottom : 80px;
        padding : 10px;
    }
`

export const Title = styled.div`
    font-weight : bold;
    height : 35px;
`

export const MarketMapGridDiv = styled.div`
    display : grid;
    grid-template-columns : 45% auto;
`

export const MarketMapDiv = styled.div`
    img {
        width : 90%;
        /* max-width : 384px; */
        height : 220px;
        /* height : 100%; */
    }

`

export const MarketMapOptionalDiv = styled.div`
    img {
        margin : 0px 10px;
        vertical-align: bottom;
    }

    input[type=text], input[type=number] {
        padding-left : 0px;
        text-align : center;
        max-width : 70px;
        width : 50%;
        height : 40px;

        @media (max-width : 480px) {
            width : 36% !important;
        }
    }
`

export const MarketHostDiv = styled.div`
    margin-top : 40px;

    input {
        margin: 5px 0px;
    }
`

export const MarketMainThumbSelect = styled.div`
    div {
        display : inline-block;
        min-width : 120px;
        font-size : 14px;
        font-weight : bold;

        input[type=radio], label {
            cursor: pointer;
        }
    }
`
export const MarketWriteBtnDiv = styled.div`
    text-align : center;
    min-height : 90px;
    margin-top : 30px;
`

export const MarketWriteBtn = styled.input`
    height : 52px;
    min-width : 179px;
    cursor: pointer;
    background-color : #BDBDBD;
    border : none;
    font-size : 13px;
    font-weight : bold;
`

export const MarketThumbDiv = styled.div`
    display : inline-block;
    width : 160px;
    font-size : 14px;

    @media (max-width : 425px) {
        width : 100%;
        margin : 10px 0px;
    }

    label {
        text-align : center;
        display: inline-block; 
        /* padding: .5em .75em;  */
        height : 148px;
        width : 148px;
        /* line-height: normal;  */
        vertical-align: middle; 
        background-color: #BDBDBD; 
        cursor: pointer; 
        border: 1px solid #ebebeb; 
        border-bottom-color: #e2e2e2; 
        border-radius: .25em;
        
        @media (max-width : 425px) {
            width : 100%;
        }
    }

    input[type=file] { 
        /* 파일 필드 숨기기 */ 
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip:rect(0,0,0,0);
        border: 0;
    }
`
export const MarketThumbShowDiv = styled.div`
    margin : 35% 0px;
    font-size : 14px;
    line-height : 20px;

    @media (max-width : 425px) {
        margin : 60px;
    }
`