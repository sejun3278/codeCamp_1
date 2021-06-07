import styled from '@emotion/styled';

export const HeaderDiv = styled.div`
    .FixedLogo {
        position : fixed !important;
        z-index : 2000;
        width : 100%;
        background-color : white;
        /* border-bottom : solid 1px black; */
        box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.2);
    }
`

export const HeaderLogoDiv = styled.div`
    height : 80px;
    line-height : 5;
    display : grid;
    grid-template-columns : 50% 50%;
    text-align : center;

    div {
        height : 80px;
    }

    @media (max-width : 555px) {
        display : block;
        line-height : 0;
        height : 130px;

        div {
            height : 60px;
        }
    }
`

export const HeaderLogo = styled.div`
`

export const HeaderLogoImg= styled.img`
    margin-top : 25px;
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
    /* margin-top : 10px; */
    
    div {
        .slick-dots {
            bottom : 15px;

            .slick-active {
                button:before {
                    color : #FFD600 !important;
                    opacity : 1.4;
                }
            }
            
            button:before {
                color : white !important;
                opacity : 0.45;
            }
        }

        .slick-next {
            right : 20%;

            @media (max-width : 1000px) {
                right : 5%;
            }
        }

        .slick-prev {
            left : 20%;
            z-index : 100;

            @media (max-width : 1000px) {
                left : 5%;
            }
        }

        .slick-arrow {
            :before {
                font-size : 28px;
                line-height : 0;
            }
        }
    }
`

export const CaruselImage = styled.div`
    div {
        background-position-x : center;
        height : 300px;

        @media (max-width : 1000px) {
            background-size : cover;
        }
    }
`;

export const CaruselImage1 = styled.div`
    background-image : url('/images/mainBanner_4.png');
`

export const CaruselImage2 = styled.div`
    background-image : url('/images/mainBanner_2.png');
`

export const CaruselImage3 = styled.div`
    background-image : url('/images/mainBanner_1.png');
`

export const Slider = styled.div`
    /* width : 90%; */
`;

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