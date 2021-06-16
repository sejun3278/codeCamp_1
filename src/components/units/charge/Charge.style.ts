import styled from '@emotion/styled';

export const ChargeMainDiv = styled.div`

`

export const ChargeCloseDiv = styled.div`
    text-align : right;
    height : 40px;

    img {
        cursor : pointer;
    }
`

export const ChargeTitle = styled.h3`
    text-align : center;
    margin : 5px 0px;
    font-size : 19px;
    height : 50px;
    border-bottom : solid 2px black;

    img {
        vertical-align : text-bottom;
        margin-right : 5px;
    }
`

export const ChargeBillDiv = styled.div`
    margin : 5px;
    border-bottom : solid 2px black;
`

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

export const ChargeSubmit = styled.input`
    margin-top : 20px;
    height : 40px;
    width : 100%;
    font-weight : bold;
    border : none;
    cursor : pointer;
`