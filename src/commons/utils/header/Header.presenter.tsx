import {
    HeaderDiv, HeaderLogoDiv, HeaderLogo, HeaderLoginDiv, HeaderLogoImg, HeaderLogin, HeaderSignup, CarouselDiv,
    CaruselImage, HeaderCategoryDiv, HeaderCategory, CaruselImage1, CaruselImage2, CaruselImage3
} from './Header.style';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow : true
};

export default function HeaderPage({
    moveUrl,
    router,
    logoDiv,
    accessToken
}) {
    return(
        <HeaderDiv>
            <HeaderLogoDiv ref={logoDiv}>
                <HeaderLogo>
                    <HeaderLogoImg src="/images/logo.png" onClick={() => moveUrl('/')}/>
                </HeaderLogo>

                <HeaderLoginDiv>
                    {!accessToken
                    &&
                        <div>
                            <HeaderLogin type='button' value='로그인' onClick={() => moveUrl('/login')} />
                            <HeaderSignup type='button' value='회원가입' onClick={() => moveUrl('/signup')} />
                        </div>
                    }
                </HeaderLoginDiv>
            </HeaderLogoDiv>

            <CarouselDiv>
                <Slider {...sliderSettings} >
                    <CaruselImage>
                        <CaruselImage1 />
                    </CaruselImage>

                    <CaruselImage>
                        <CaruselImage2 />
                    </CaruselImage>

                    <CaruselImage>
                        <CaruselImage3 />
                    </CaruselImage>
                </Slider>
            </CarouselDiv>

            <HeaderCategoryDiv>
                <HeaderCategory 
                    style={(router.route.includes('/board') || router.route === "/") ? { 'color' : 'black' } : undefined}
                    onClick={() => moveUrl('/')}
                > 
                    자유게시판 
                </HeaderCategory>
                <HeaderCategory
                    style={router.route.includes('/market') ? { 'color' : 'black' } : undefined}
                    onClick={() => moveUrl('/market')}
                > 
                    중고마켓 
                </HeaderCategory>
                <HeaderCategory style={{ 'border' : 'none' }}> 마이페이지 </HeaderCategory>
            </HeaderCategoryDiv>
        </HeaderDiv>
    )
}