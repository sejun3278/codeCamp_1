import styled from '@emotion/styled';

export const SignupMoveDiv = styled.div`
    height : 80px;
    text-align : right;

    img {
        width : 18px;
        margin : 50px 70px;
        cursor: pointer;
    }
`
export const SignupContentsDiv = styled.div`
    opacity : 1.4 !important;
    z-index : 1000;
    display : grid;
    grid-template-columns : 40% 20% 40%;
    margin-top : 10px;
    text-align : center;

    @media (max-width : 1400px) {
        grid-template-columns : 35% 30% 35%;
    }

    @media (max-width : 1000px) {
        grid-template-columns : 30% 40% 30%;
    }

    @media (max-width : 600px) {
        grid-template-columns : 20% 60% 20%;
    }
`

export const SignupContents = styled.div`
    h2 {
        height : 60px;
    }
`

export const Title = styled.div`
    font-weight : bold;
`

export const SignupInputDiv = styled.div`
    text-align : left;
    margin : 18px 0px;

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

    input[type=submit] {
        margin-top : 25px;
        background-color : #4F4F4F;
        cursor: pointer;
        font-weight : bold;
    }
`

export const SignupError = styled.div`
    position : absolute;
    color : #FF0000;
    font-size : 13px;
    font-weight : bold;
    margin-top : -10px;
    margin-left : 10px;
`

export const SignupComplateDiv = styled.div`

`

export const SignupComplateCloseDiv = styled.div`
    text-align : right;

    img {
        width : 16px;
        cursor: pointer;
    }
`

export const SignupLogoDiv = styled.div`
    text-align : center;
    /* height : 50px; */
    margin-top : 30px;

    img {
        height : 36px;
    }
`

export const SignupComplateConfirmDiv = styled.div`
    margin-top : 20px;
    text-align : center;
    height : 130px;

    div {
        margin-top : 40px;
        input[type=button] {
            width : 100%;
            height : 64px;
            cursor: pointer;
            background-color : #FFD600;
            border-radius : 16px;
            font-weight : bold;
        }
    }
`