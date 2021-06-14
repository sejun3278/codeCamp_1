import styled from '@emotion/styled';

export const GoodsDetailGridDiv = styled.div`
    display :grid;
    grid-template-columns : 25% 50% 25%;
    min-height : 1200px;

    @media (max-width : 900px) {
        grid-template-columns : 20% 60% 20%;
    }

    @media (max-width : 700px) {
        grid-template-columns : 15% 70% 15%;
    }

    @media (max-width : 500px) {
        grid-template-columns : 10% 80% 10%;
    }

    @media (max-width : 425px) {
        grid-template-columns : 5% 90% 5%;
    }
`

export const GoodsDetailInfoDiv = styled.div`

`

export const GoodsSellerInfoDiv = styled.div`
    /* min-height : 100px; */
    margin-top : 70px;
    height : 70px;
    border-bottom : solid 1px #BDBDBD;
    /* display :grid; */
    /* grid-template-columns : 80% auto; */

    img {
        vertical-align : bottom;
    }
`

export const GoodsSellerInfo = styled.div`
    display : inline-block;
    margin-left : 15px;

    div {
        height : 22.5px;
    }
`

export const GoodsSellerName = styled.div`
    font-weight : bold;
`

export const GoodsSellerDate = styled.div`
    font-size : 13px;
    color : #828282;
`

export const GoodsInfoDiv = styled.div`
    min-height : 60px;
    margin-top : 20px;
`

export const GoodsNameAndLikeDiv = styled.div`
    display : grid;
    grid-template-columns : auto 35px;
`

export const GoodsLikeDiv = styled.div`
    text-align : center;
    font-weight : bold;
`

export const GoodsRemarks = styled.div`
    font-size : 14px;
    color : #BDBDBD;
`

export const GoodsName = styled.div`
    font-size : 24px;
    font-weight : bold;
    margin-top : 5px;
`

export const GoodsPrice = styled.h2`
    margin : 10px 0px;
    font-size : 28px;
`;

export const GoodsThumbnailDiv = styled.div`
    display : grid;
    grid-template-columns : 25% 50% 25%;
    text-align : center;
    /* min-height : 300px; */
`

export const GoodsImageDiv = styled.div`
    /* min-height : 200px;
    vertical-align : center;*/
    margin-top : 80px; 
    vertical-align : center;
`
export const GoodsImage = styled.div`
    /* height : 200px; */
`

export const GoodsThumbMoveDiv = styled.div`
    line-height : 18;

    img {
        cursor: pointer;
    }
`

export const GoodsThumb = styled.div`
    text-align : center;
    width : 100%;
    height : 300px;
    background-repeat : no-repeat;
    background-size : contain;
    background-position-x : center;

    img {
        max-width : 300px;
        min-width : 250px;
    }
`

export const GoodsDotsDiv = styled.div`
    /* height : 60px; */
    /* line-height : 60px; */
    text-align : center;
    margin-top : 5px;
`

export const GoodsDots = styled.div`
    display: inline-block;
    width : 20px;

    img {
        cursor: pointer;
    }
`

export const GoodsThumbListDiv = styled.div`
    margin-top : 40px;
    display :grid;
    grid-template-columns : repeat(4, 25%);

    div {

    }
`;

export const GoodsThumbListGridDiv = styled.div`
    display : grid;
    grid-template-columns : 25% 50% 25%;

    img {
        cursor: pointer;
    }

    @media (max-width : 1200px) {
        grid-template-columns : 20% 60% 20%;
    }

    @media (max-width : 700px) {
        grid-template-columns : 10% 80% 10%;
    }

`;

export const GoodsSelectImage = styled.img`
    position : absolute;

`;

export const GoodsContentsDiv = styled.div`
    margin-top : 80px;
    width : 100%;
    color : #4F4F4F;
    font-size : 18px;
    font-weight : bold;
`
export const GoodsTagsDiv = styled.div`
    margin-top : 50px;
    text-align : left;
    color : #BDBDBD;
    min-height : 60px;
    font-weight : bold;
`

export const GoodsTag = styled.span`
    margin-right : 10px;
`

export const GoodsMapDiv = styled.div`
    min-height : 300px;
    border-top : solid 1px #BDBDBD;
    border-bottom : solid 1px #BDBDBD;

    img {
        width : 100%;
        height : 360px;
        margin : 70px 0px;
    }

    div {
        width : 100%;
    }

`

export const GoodsOptionDiv = styled.div`
    text-align : center;
    margin-top : 80px;
    color : #4F4F4F;

    input[type=button] {
        background-color : #BDBDBD;
        display : inline-block;
        height : 52px;
        line-height : 52px;
        min-width : 150px;
        margin : 0px 15px;
        font-weight : bold;
        border : none;
        cursor: pointer;

        @media (max-width : 540px) {
            width : 90%;
            margin : 10px 0px;
        }
    }
`