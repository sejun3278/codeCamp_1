import styled from '@emotion/styled';

export const HeaderDiv = styled.div`

`

export const HeaderLogoDiv = styled.div`
    min-height : 80px;
    line-height : 5;
    display : grid;
    grid-template-columns : 50% 50%;
    text-align : center;

    @media (max-width : 555px) {
        display : block;
        line-height : 0;
    }
`

export const HeaderLogo = styled.div`
`

export const HeaderLogoImg= styled.img`
    margin-top : 20px;
    cursor: pointer;
`

export const HeaderLoginDiv = styled.div`
    @media (max-width : 555px) {
        text-align : right;
        margin-right : 10px;
        margin-top : 15px;
    }

    input {
        min-width : 80px;
        height : 35px;
        cursor: pointer;
        font-weight : 900;
    }
`

export const HeaderLogin = styled.input`
    background-color : white;
    border : none;
    
`
export const HeaderSignup = styled.input`
    margin-left : 15px;
    border-radius : 10px;
    border-color : #FFD600;
    background-color : #FFD600;
`

export const CarouselDiv = styled.div`
    min-height : 300px;
    margin-bottom : 30px;
    width : 100%;
`

export const CaruselImage = styled.div`

`