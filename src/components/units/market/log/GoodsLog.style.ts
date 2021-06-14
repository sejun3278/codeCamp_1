import styled from '@emotion/styled';

export const GoodsLogDiv = styled.div`
    text-align : center;
    /* min-width : 600px;
    width : 80%; */

    #webGoodsLogDiv {
        @media (max-width : 1200px) {
            display : none !important;
        }
    }

    #mobileGoodsLogDiv { 
        display : none;

        @media (max-width : 1200px) {
            display : block !important;
        }
    }
`

export const GoodsLogListDiv = styled.div`
    width : 80%;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    margin-left : 20px;
    max-height : 800px;
    overflow-y : auto;

    @media (max-width : 1200px) {
        margin-left : 10px;
        width : 99%;
        margin-bottom : 20px;
        text-align : left;
    }

    p {
        text-align: center;
        font-size : 14px;
        font-weight : bold;
        padding-bottom : 10px;
        border-bottom : solid 2px #ababab;

        @media (max-width : 1200px) {
            border-bottom : none;
            text-align : left;
            margin-left : 20px;
        }
    }
`

export const GoodsListEmpty = styled.div`
    padding : 10px;
    font-size : 13px;
    color : #ababab;
`

export const GoodsLogList = styled.div`
    /* border : solid 1px #ababab; */
    border : solid 1px #ababab;
    margin : 10px;
    min-height : 100px;
    padding-bottom : 10px;
    cursor: pointer;

    @media (max-width : 1200px) {
        display : inline-block;
        min-width : 120px;
    }
`

export const GoodsLogLikeDiv = styled.div`
    text-align : right;
    margin-right : 10px;

    img {
        width : 15px;
        vertical-align : middle;
    }
`

export const GoodsLogInfoDiv = styled.div`

`

export const GoodsLogImage = styled.img`
    width : 60px;
`

export const GoodsLogInfo = styled.div`
    text-align : left;
    margin : 0px 10px;

    div {
        width : 97%;
        overflow:hidden; 
        text-overflow:ellipsis; 
        white-space:nowrap;
    }
`

export const GoodsLogName = styled.div`
    font-size : 14px;
    height : 23px;
    font-weight : bold;
`

export const GoodsLogRemark = styled.div`
    font-size : 12px;
    color : #4F4F4F;
`

export const GoodsLogPrice = styled.div`
    height : 30px;
    line-height : 30px;
    font-weight : bold;
`

export const GoodsLogImageDiv = styled.div`
    text-align : center;
`