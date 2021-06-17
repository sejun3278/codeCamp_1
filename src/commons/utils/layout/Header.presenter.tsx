import {
    HeaderDiv, HeaderLogoDiv, HeaderLogo, HeaderLoginDiv, HeaderLogoImg, HeaderLogin, HeaderSignup, CarouselDiv,
    CaruselImage, HeaderCategoryDiv, HeaderCategory, CaruselImage1, CaruselImage2, CaruselImage3, LoginProfileImg,
    LoginUserProfileDiv, ProfileInfoDiv, ProfileImageDiv, ProfileInfo, ProfileChangeImg, LoginOptionalDiv
} from './Header.style';
import Slider from "react-slick";
import Modal from 'react-modal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { setComma } from '../../../commons/libraries/validations';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow : true
};

const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth              : '420px'
    }
};
Modal.setAppElement('body');

import ChargePage from '../../../components/units/charge/Charge.container'; 

export default function HeaderPage({
    moveUrl,
    router,
    logoDiv,
    accessToken,
    moveLogin,
    setclickProfile,
    clickProfile,
    userInfo,
    logout,
    loginProfile,
    chargeModal,
    setChargeModal
}) {
    return(
        <HeaderDiv>
            <Modal
                isOpen={chargeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <ChargePage />
            </Modal>

            <HeaderLogoDiv ref={logoDiv}>
                <HeaderLogo>
                    <HeaderLogoImg src="/images/logo.png" onClick={() => moveUrl('/')}/>
                </HeaderLogo>

                <HeaderLoginDiv>
                    {!accessToken
                        
                        ? <div>
                            <HeaderLogin type='button' value='로그인' onClick={() => moveLogin('/login')} />
                            <HeaderSignup type='button' value='회원가입' onClick={() => moveLogin('/signup')} />
                          </div>

                        : <div>
                            <LoginProfileImg alt='' src='/images/profile.png' onClick={() => setclickProfile(prev => !prev)}/>
                            <img alt='' src='/images/more.png' onClick={() => setclickProfile(prev => !prev)}
                                style={clickProfile === true ? { 'transform' : 'rotate(180deg)' } : undefined}
                            />
                          
                            { (accessToken && clickProfile === true)
                                &&
                                <LoginUserProfileDiv ref={loginProfile}>
                                    <ProfileInfoDiv>
                                        <ProfileImageDiv>
                                            <img alt='' src='/images/profile.png' />
                                            <ProfileChangeImg alt='' src='/images/profileChange.png'/>
                                        </ProfileImageDiv>

                                        <ProfileInfo>
                                            <div> {userInfo?.name} </div>
                                            <div style={ userInfo?.userPoint?.amount === 0 ? { 'color' : '#ababab' } : undefined}> 
                                                {setComma(userInfo?.userPoint?.amount)} P 
                                            </div>
                                        </ProfileInfo>
                                    </ProfileInfoDiv>

                                    <LoginOptionalDiv>
                                        <div style={{ 'borderBottom' : 'solid 1px #EFEFEF' }}
                                             onClick={() => setChargeModal(true)}
                                        >
                                            <img alt='' src='/images/charge.png' />
                                            <b> 충전하기 </b>
                                        </div>
                                        <div onClick={logout}>
                                            <img alt='' src='/images/logout.png' />
                                            <b> 로그아웃 </b>
                                        </div>
                                    </LoginOptionalDiv>
                                </LoginUserProfileDiv>
                            }
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