import styled from '@emotion/styled';

export const MainBoardDiv = styled.div`
    display: grid;
    grid-template-columns : 15% 70% 15%;

    
    @media (max-width : 1400px) {
        grid-template-columns : 10% 80% 10%;
    }

    @media (max-width : 1100px) {
        grid-template-columns : 5% 90% 5%;
    }
`;

export const MainContentsDiv = styled.div`

`;

export const BestContentsDiv = styled.div`
    margin-top : 90px;

    h2 {
        text-align : center;
    }
`

export const BestItemListDiv = styled.div`
    display : grid;
    grid-template-columns : repeat(4, 25%);
    margin-top : 40px;

    @media (max-width : 1000px) {
        display : block;
    }
`

export const BestItems = styled.div`
    /* border : solid 1px #aaaaaa; */
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    margin : 0px 15px;
    border-radius : 10px;
    cursor: pointer;
    min-height : 200px;

    @media (max-width : 1000px) {
        min-height : 300px;
        margin : 25px 0px;
    }
`

export const BestThumb = styled.div`
    height : 120px;
    background-position-x : 50%;
    background-size : cover;
    background-repeat : no-repeat;
    border-top-left-radius : 10px;
    border-top-right-radius : 10px;
    border-bottom : solid 1px #ababab;

    @media (max-width : 1000px) {
        height : 180px;
    }
`

export const BestTextDiv = styled.div`
    margin : 10px 20px;
`

export const BestBoardTitle = styled.div`
    font-weight : bold;
    width : 97%;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
    height : 40px;
    line-height : 40px;
`

export const BestOtherInfoDiv = styled.div`
    display : grid;
    grid-template-columns : 80% auto;
    margin-top : 10px;
`

export const BestProfile = styled.div`
    img {
        width : 20px;
        vertical-align : bottom;
    }
`

export const BestLike = styled.div`
    text-align : center;

    @media (max-width : 1000px) {
        text-align : right;
    }
`

export const BestBoardWriter = styled.div`
    display : inline-block;
    line-height : 0;
    margin-left : 5px;
    font-size : 14px;
`
export const BestCreateDate = styled.div`
    margin-top : 5px;
    font-size: 13px;
    color : #828282;
`;

export const BestLikeImg = styled.div`

    img {
        width : 15px;
        height : 15px;
        /* margin-right : 5px; */
    }
`

export const SearchDiv = styled.div`
    margin : 0px 15px;
    margin-top : 70px;
    min-height : 100px;
    display : grid;
    grid-template-columns : 70% auto;

    @media (max-width : 1000px) {
        margin-left : 0px;
    }
`

export const SearchBar = styled.div`
    display : inline-block;
    /* width : %; */


    img {
        width : 18px;
        vertical-align : text-bottom;
        margin-left : 15px;
        position : absolute;
        margin-top : 17px;
    }

    input {
        width : auto;
        width : 80%;
        padding-left : 40px;
        background-color : #F2F2F2;
        border : none;
        border-radius : 15px;
        height : 52px;
        line-height : 48px;

        @media (max-width : 1000px) {
            width : 100%;
        }
    }
`

export const SeacrhBtnDiv = styled.div`
    text-align : right;

    input {
        background-color : black;
        color : white;
        border : none;
        border-radius : 5px;
        height : 52px;
        width : 94px;
        cursor: pointer;
    }
`;

export const BoardsListDiv = styled.div`
    min-height : 80px;
    margin : 20px 15px;

    @media (max-width : 500px) {
        margin : 20px 0px;
    }
`

export const EmptyPage = styled.div`
`

export const BoardsCount = styled.div`
    font-size : 13px;
    height : 30px;
    line-height : 20px;
`

export const BoardListDivs = styled.div`

`

export const BoardListContentsDiv = styled.div`
    border-top : solid 1px black;
    border-bottom : solid 1px black;
    min-height : 100px;
`

export const BoardContents = styled.div`
    display : grid;
    grid-template-columns : 10% 50% 20% 20%;
    height : 40px;
    line-height : 40px;
    border-bottom : solid 1px #ababab;
    text-align : center;
    cursor : default;
    
`

export const BoardContentsLimit = styled.div`
    width : 100%;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
    padding : 0px 20px;
`

export const BoardsContentDiv = styled.div`
    color : #4F4F4F;
    font-size : 13px;
`

export const BoardListOptionalDiv = styled.div`
    margin : 40px 15px;
    /* display : grid; */
    /* grid-template-columns : 70% auto; */
    text-align : center;

`
export const BoardListPageDiv = styled.div`
    /* min-width : 450px; */

    div {
        display : inline-block;
        margin : 0px 10px;
        cursor : pointer;
        color : #4F4F4F;
        font-size : 14px;
    }
`
export const BoardWriteDiv = styled.div`
    border : solid 1px #ababab;
    border-radius : 5px;
    font-size : 13px;
    width : 171px;
    height : 42px;
    line-height : 42px;
    text-align : center;
    font-weight : bold;
    float : right;
    margin-top : -30px;
    cursor : pointer;

    img {
        width : 15px;
        margin-right : 5px;
    }

    @media (max-width : 1000px) {
        display : block;
        float : none;
        margin-top : 15px;
    }
`