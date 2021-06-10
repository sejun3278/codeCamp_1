import styled from '@emotion/styled';

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
    cursor: pointer;

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
    margin-top : 20px;
`

export const LoginSubmit = styled.input`
    background-color : #4f4f4f;
    cursor: pointer;
    font-size : 15px;
    font-weight : bold;
`

export const LoginOtherDiv = styled.div`
    border-top : solid 1px white;
    margin-top : 25px;
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

export const ErrorAlert = styled.div`
    text-align : left;
    color : #FF0000;
    font-size : 13px;
    font-weight : bold;
    height : 30px;

    @media (max-width : 600px) {
        height : 15px;
        margin-bottom : 10px;
    }
`

// export const LoginBackDiv = styled.div`
//     height : 100px;

//     background-image : url('/images/login_backImg.png');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// `