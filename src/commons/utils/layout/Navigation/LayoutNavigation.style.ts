import styled from '@emotion/styled';

export const HeaderCategoryDiv = styled.div`
    height : 50px;
    line-height : 50px;
    background-color : #FFD600;
    margin-top : -35px;
    text-align : center;
    color: #AB9000;
    font-weight : bold;
    font-size : 14px;
`;

export const HeaderCategory = styled.div` 
    display : inline-block;
    width : 120px;
    border-right : solid 1px white;
    height : 20px;
    line-height : 20px;
    cursor: pointer;

    @media (max-width : 375px) {
        width : 30%;
    }
`