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

    img {
        vertical-align : middle;
        cursor : pointer;

    }
`

export const LoginProfileImg = styled.img`
    width : 30px;
    margin-right : 15px;
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

export const LoginUserProfileDiv = styled.div`
    position : absolute;
    z-index : 9999;
    width : 258px;
    height : 231px !important;
    margin-top : -10px;
    right : 20%;
    background-color : #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
    border-radius : 10px;

    @media (max-width : 555px) {
        right : 0%;
        margin-top : 10px;
        text-align : center;
        padding-top : 10px;
    }
`

export const ProfileInfoDiv = styled.div`
    display : grid;
    grid-template-columns : 100px auto;
    line-height : 4;
    height : 85px !important;
    border-bottom : solid 2px black;

    div {
        height : 20px;
    }

    @media (max-width : 555px) {
        line-height : 0 !important;
        height : 70px !important;
    }
`

export const ProfileImageDiv = styled.div`
    img {
        vertical-align : bottom !important;
        margin-top : 15px;

        @media (max-width : 555px) {
            margin-top : 5px;
        }
    }

`

export const ProfileInfo = styled.div`
    text-align : left;
    font-weight : bold;

    @media (max-width : 555px) {
        padding-top : 20px;
    }
`

export const ProfileChangeImg = styled.img`
    position : absolute;
    margin-top : 45px !important;
    margin-left : -15px;

    @media (max-width : 555px) {
        margin-top : 35px !important;
    }
`

export const LoginOptionalDiv = styled.div`
    color : #EFEFEF;
    text-align : left;
    /* padding : 0px 35px; */

    div {
        height : 73px !important;
        cursor : pointer;
        padding-left : 50px;

        @media (max-width : 555px) {
            height : 76px !important;
            line-height : 4.7;
        }
    }

    img {
        vertical-align : text-bottom;
    }

    b {
        color : #BDBDBD;
        margin-left : 10px;
    }
`