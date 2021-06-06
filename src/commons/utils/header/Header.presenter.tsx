import {
    HeaderDiv, HeaderLogoDiv, HeaderLogo, HeaderLoginDiv, HeaderLogoImg, HeaderLogin, HeaderSignup, CarouselDiv,
    CaruselImage
} from './Header.style';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function HeaderPage({
    moveHome,
    carouselList
}) {
    return(
        <HeaderDiv>
            <HeaderLogoDiv>
                <HeaderLogo>
                    <HeaderLogoImg src="/images/logo.png" onClick={moveHome}/>
                </HeaderLogo>

                <HeaderLoginDiv>
                    <HeaderLogin type='button' value='로그인' />
                    <HeaderSignup type='button' value='회원가입' />
                </HeaderLoginDiv>
            </HeaderLogoDiv>

            <CarouselDiv>
                <Slider {...sliderSettings} >
                    {carouselList.map( (img, key) => {
                        return(
                            <CaruselImage key={key} 
                                style={{ 'backgroundImage' : `url('/images/mainBanner_${key + 1}')` }}
                            />
                        )
                    })}
                </Slider>
                    
            </CarouselDiv>
        </HeaderDiv>
    )
}