import styled from '@emotion/styled';

export const LoginDiv = styled.div`
    background-image : url('/images/login_backImg.png');
    height : 100%;
`

export const LoginBackDiv = styled.div`
    background-color : black;
    opacity : 0.8;
    color : #FFFFFF;
    height : 100%;
`

export const LoginContentsDiv = styled.div`
    opacity : 1.4 !important;
    z-index : 1000;
    display : grid;
    grid-template-columns : 25% 50% 25%;
    margin-top : 40px;
    text-align : center;

    @media (max-width : 1000px) {
        grid-template-columns : 10% 80% 10%;
    }

    @media (max-width : 600px) {
        grid-template-columns : 5% 90% 5%;

    }
`

export const LoginMoveDiv = styled.div`
    height : 120px;
    text-align : right;

    img {
        width : 18px;
        margin : 50px 70px;
        cursor: pointer;
    }
`

export const LoginContents = styled.div`

`

export const Logo = styled.img`

    @media (max-width : 600px) {
        width : 70%;
    }
`

export const LoginInputDiv = styled.div`
    margin-top : 60px;
    display: grid;
    grid-template-columns : 25% 50% 25%;

    input {
        width : 100%;
        height : 48px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 7px;
        color : white;
        padding-left : 10px;
        margin : 10px 0px;
    }

    @media (max-width : 1250px) {
        grid-template-columns : 15% 70% 15%;
    }

    /* input {
        width : 40%;
        height : 48px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 7px;
        color : white;
        padding-left : 10px;
        margin : 10px 0px;

        @media (max-width : 1440px) {
            width : 65%;
        }

        @media (max-width : 1000px) {
            width : 60%;
        }

        @media (max-width : 700px) {
            width : 70%;
        }
    } */
`

export const LoginContent = styled.div`

`

export const LogingDiv = styled.div`
    text-align : left;
    margin-top : 0px;
    font-size : 13px;
    height : 40px;
    line-height : 40px;

    img {
        vertical-align : sub;
        margin-right : 10px;
        cursor: pointer;
    }
`

export const LoginSubmitDiv = styled.div`
    margin-top : 35px;
`

export const LoginSubmit = styled.input`
    background-color : #4f4f4f !important;
    cursor: pointer;
    font-size : 15px;
    font-weight : bold;
`

export const LoginOtherDiv = styled.div`
    border-top : solid 1px white;
    margin-top : 35px;
    display : grid;
    grid-template-columns : 33% 34% 33%;
    font-size : 13px;

    div {
        margin-top : 10px;
        height : 15px;
        border-right : solid 1px white;

        span {
            cursor: pointer;
        }
    }

    @media (max-width : 500px) {
        display : block;

        div {
            border-right : none;
            height : 30px;
            line-height : 30px;
        }
    }
`

// export const LoginBackDiv = styled.div`
//     height : 100px;

//     background-image : url('/images/login_backImg.png');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// `