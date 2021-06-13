import styled from '@emotion/styled';

export const GoodsMainDiv = styled.div``;

export const GoodsMainGridDiv = styled.div`
    display : grid;
    grid-template-columns : 15% 70% 15%;
    padding-top : 60px;

    @media (max-width : 1100px) {
        grid-template-columns : 10% 80% 10%;
    }

    @media (max-width : 800px) {
        display : block;
    }
`

export const GoodsMainContentsDiv = styled.div`

`

export const GoodsBestListDiv = styled.div`

    h2 {
        text-align : center;
        font-weight : 700;
        font-family : "Roboto";
        letter-spacing : -0.7px;
    }
`

export const GoodsBestList = styled.div`
    margin-top : 40px;
    display : grid;
    grid-template-columns : repeat(4, 25%);

    @media (max-width : 600px) {
        display : block;
    }
`

export const GoodsBest = styled.div`
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    margin : 0px 10px;
    /* min-height : 300px; */
    padding : 5px;
    cursor: pointer;

    @media (max-width : 800px) {
        margin : 0px 8px;
    }

    @media (max-width : 600px) {
        display : grid;
        grid-template-columns : 50% 50%;
        margin : 10px 10px;
    }
`

export const GoodsBestImageDiv = styled.div`
    @media (max-width : 600px) {
        border-right : solid 1px #ababab;
    }
`

export const GoodsBestImage = styled.img`
    width : 100%;
    max-height : 200px;

    @media (max-width : 600px) {
        width : 95%;
    }
`;

export const GoodsBestInfoDiv = styled.div`
    min-height : 50px;
    padding : 10px;
`

export const GoodsBestName = styled.div`
    font-family : Noto Sans CJK KR;
    font-weight : bold;
`

export const GoodsBestInfoGridDiv = styled.div`
    display : grid;
    grid-template-columns : 85% auto;

    @media (max-width : 600px) {
        margin-top : 40%;
    }
`

export const GoodsBestRemarks = styled.div`
    margin-top : 5px;
    font-size : 12px;
    color : #4F4F4F;
`

export const GoodsBestPrice = styled.div`
    margin-top : 10px;
    font-weight : bold;
    
`

export const GoodsBestLikeDiv = styled.div`
    img {
        width : 20px;
    }
`

export const GoodsListOptionDiv = styled.div`
    margin : 60px 10px;
    display :grid;
    grid-template-columns : 40% auto;

    @media (max-width : 535px) {
        grid-template-columns : 25% auto;
    }
`

export const GoodsListFilterDiv = styled.div`
    div {
        display : inline-block;
        width : 100px;
        height : 30px;

        @media (max-width : 535px) {
            display : block;
        }

        input {
            border : none;
            cursor: pointer;
            background-color : white;
            color : #4F4F4F;
            font-size : 12px;
            cursor: pointer;
            vertical-align : sub;
        }

        #selectFilter {
            font-weight : bold;
            border-bottom : solid 3px #FFD600;
        }
    }
`

export const GoodsListSearchDiv = styled.div`
    display : grid;
    grid-template-columns : 80% auto;
`

export const GoostListSearchStyle = styled.div`
    display: grid;
    grid-template-columns : 20px auto;
    background-color : #F2F2F2;
    height : 40px;
    /* max-width : 300px; */
    width : 100%;
    padding : 0px 10px;

    @media (max-width : 535px) {
        margin-top : 12px;
    }

    img {
        vertical-align : -webkit-baseline-middle;
    }

    input[type=text] {
        margin-left : 10px;
        border : none;
        background-color : #F2F2F2;
        width : 100%; 
        height : 40px;
        padding-left : 10px;
    }
`

export const GoodsSearchBtn = styled.input`
    background-color : black;
    cursor: pointer;
    height : 40px;
    color : white;
    font-weight : bold;
    width : 80%;

    @media (max-width : 535px) {
        margin-top : 12px;
    }
`

export const GoodsListContentsDiv = styled.div`
    margin : 0px 10px;
    display : grid;
    grid-template-columns : 15% 70% 15%;
    height : 100%;

    @media (max-width : 1100px) {
        grid-template-columns : 10% 80% 10%;
    }

    @media (max-width : 800px) {
        display : block;
    }
`

export const GoodsInfo = styled.div`
    min-height : 150px;
    border-bottom : solid 1px #BDBDBD;
    border-top : none !important;
    margin-right : 0px !important;
    display : grid;
    grid-template-columns : 170px auto;
    cursor: pointer;

    div {
        border-top : none;
        margin-right : 0px;
    }
`

export const GoodsListContents = styled.div`
    height : 1000px;
    overflow-y : auto;
    margin-bottom : 40px;
    padding-bottom : 10px;

    div {
        border-top : solid 1px #BDBDBD;
        margin-right : 15px;
    }

    ::-webkit-scrollbar {
        width: 6px;
        background-color: #F2F2F2;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #FFD600;
        height : 10px;
        border-radius: 4px;
        cursor: pointer;
    }
`

export const GoodsInfoImage = styled.img`
    width : 145px;
    height : 155px;
    padding : 5px;
`

export const GoodsInfoDiv = styled.div`
    padding : 10px;
`

export const GoodsInfoName = styled.div`
    font-weight : bold;
    font-size : 18px;
    height : 40px;
    line-height : 50px;
    width : 97%;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
`

export const GoodsOptionDiv = styled.div`
    display : grid;
    grid-template-columns : 60% auto;

    @media (max-width : 600px) {
        display : block;
    }
`

export const GoodsPriceDiv = styled.div`
    text-align : right;

    div {
        float : right;
        margin-left : 10px;
        font-weight : bold;

        img {
            vertical-align : bottom;
        }
    }
`

export const GoodsRemarks = styled.span`
    font-size : 14px;
    color : #4F4F4F;
`

export const GoodsTagInfo = styled.div`
    width : 97%;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
    font-size : 13px;
    color : #BDBDBD;
    height : 30px;
    line-height : 30px;
`

export const GoodsSellerInfoDiv = styled.div`
    /* height : 30px; */
    margin-top : 15px;
    /* line-height : 1.8; */
    img {
        width : 25px;
        vertical-align : bottom;
    }
`

export const GoodsSellerName = styled.span`
    max-width : 60px;
    /* vertical-align : super; */
    margin-left : 5px;
    color : #4F4F4F;
    font-size : 13px;
`

export const GoodsSellerInfo = styled.span`
    line-height : 1.8;
`

export const GoodsLikeInfo = styled.span`
    margin-left : 15px;

    img {
        width : 18px;
        vertical-align : middle;
    }

    span {
        font-size : 13px;
    }
`

export const GoodsWriteDiv = styled.div`
    text-align : right;
    height : 70px;
`

export const GoodsWriteBtn = styled.input`
    margin-right : 30px;
    height : 42px;
    padding : 0px 10px;
    background-color : white;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    font-size : 13px;
    cursor: pointer;
`

export const GoodsLogDiv = styled.div`
    text-align : center;

`

export const GoodsLogListDiv = styled.div`
    width : 70%;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    margin-left : 30px;

    p {
        text-align: center;
        font-size : 14px;
        font-weight : bold;
    }
`