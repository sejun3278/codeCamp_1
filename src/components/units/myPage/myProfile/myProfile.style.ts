import styled from '@emotion/styled';

export const MyProfileDiv = styled.div`
    text-align : center;
    border-right : solid 2px #F2F2F2;

    h4 {
        letter-spacing : -0.3px;
        font-family : Noto Sans CJK KR;
    }

    @media (max-width : 700px) {
        border-right : none;
        display : grid;
        grid-template-columns : 30% auto;
    }
`

export const MyProfileInfoDiv = styled.div`
    @media (max-width : 700px) {
        border-right : solid 2px #F2F2F2;
        
    }
`

export const MyProfileNameDiv = styled.div`
    font-size : 14px;
    font-weight : bold;
    height : 30px;
    line-height : 30px;
    font-family : 'Noto Sans CJK KR';
`

export const MyPointDiv = styled.div`
    /* margin-top : 10px; */
    
    img {
        width : 22px;
        vertical-align : middle;
    }

    span {
        margin-left : 10px;
        font-size : 13px;
        color : #4F4F4F;
    }
`

export const MyPageOptionDiv = styled.div`
    padding-top : 80px;

    @media (max-width : 700px) {
        padding-top : 25px;
    }
`

export const MyPageGridDiv = styled.div`
    margin : 20px 0px;

    div {
        display : inline-block;
        width : 50px;
    }

    img {
        width : 22px;
        height : 22px;
        vertical-align : middle;
    }

    span {
        font-size : 13px;
        color : #828282;
        font-weight : bold;
    }
        /* display : grid; */
        /* grid-template-columns : 45% auto; */
`

export const MyPageOptionNameDiv = styled.div`
    width : 70px !important;
    text-align :left;
`