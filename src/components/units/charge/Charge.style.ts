import styled from '@emotion/styled';

export const ChargeMainDiv = styled.div`

`

export const ChargeCloseDiv = styled.div`
    text-align : right;
    height : 40px;

    img {
        width : 10px;
        cursor : pointer;
    }
`

export const ChargeTitle = styled.h3`
    text-align : center;
    margin : 5px 0px;
    font-size : 19px;
    /* height : 50px; */
    /* border-bottom : solid 2px black; */

    img {
        vertical-align : text-bottom;
        margin-right : 5px;
    }

    p {
        margin-top : 25px;
        font-weight : 700;
        font-family : Noto Sans CJK KR;
        letter-spacing : -0.3px;
    }
`

export const ChargeBillDiv = styled.div`
    margin : 5px;
    margin-top : 40px;
`

export const ChargeSelectPriceDiv = styled.div`
    border-bottom : solid 1px #000000;
    height : 35px;
    padding : 0px 10px;
    font-size : 13px;
    color : #828282;
    cursor : pointer;
`

export const ChargeSelectListDiv = styled.div`
    margin-top : 30px;
    border : solid 1px #C4C4C4;
    border-radius : 10px;
    min-height : 212px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

    #selectPoint {
        color : black !important;
        font-weight : bold;
    }
`

export const ChargeSelect = styled.div`
    height : 53px;
    border-bottom : solid 1px #C4C4C4;
    color : #E0E0E0;
    line-height : 53px;
    padding-left : 15px;
    cursor : pointer;
`;

export const ChargeSubmit = styled.input`
    margin-top : 30px;
    height : 52px;
    width : 100%;
    font-weight : bold;
    border : none;
    cursor : pointer;
    border-radius : 10px;
    color : white;
`

/////

export const ChargeBillGridDiv = styled.div`
    display : grid;
    grid-template-columns : 120px auto;
    height : 30px;
    line-height : 30px;
    margin : 15px 0px;
`

export const ChargeBillTitleDiv = styled.div`
    border-right : solid 1px #ababab;
    font-size : 14px;
    font-weight : 600;   
`

export const ChargeBillPrice = styled.div`
    text-align : right;
`

export const ChargeBillInput = styled.input`
    width : 50%;
    border-color : #ababab;
    text-align : right;
    padding : 3px;
`

