import {
    HeaderLogoDiv, HeaderLogo, HeaderLoginDiv, HeaderLogoImg, HeaderLogin, HeaderSignup, CarouselDiv,
    CaruselImage, CaruselImage1, CaruselImage2, CaruselImage3, LoginProfileImg, LoginUserProfileDiv, ProfileInfoDiv, 
    ProfileImageDiv, ProfileInfo, ProfileChangeImg, LoginOptionalDiv
} from './LayoutHeader.style';

import { setComma } from '../../../../commons/libraries/validations';
import ChargePage from '../../../../components/units/charge/Charge.container'; 

import Modal from 'react-modal';
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

export default function LayoutHeaderUI({
    logoDiv,
    moveUrl,
    accessToken,
    moveLogin,
    setClickProfile,
    clickProfile,
    loginProfile,
    userInfo,
    logout,
    setChargeModal,
    chargeModal
}) {
    return(
        <>
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

                        : <div onClick={() => setClickProfile(prev => !prev)}>
                            <LoginProfileImg alt='' src='/images/profile.png'/>
                            <img alt='' src='/images/more.png'
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
                                             onClick={() => chargeModal === false ? setChargeModal(true) : undefined}
                                        >
                                            <img alt='' src='/images/charge.png' />
                                            <b> 충전하기 </b>
                                        </div>
                                        <div onClick={() => chargeModal === false ? logout() : undefined}>
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
        </>
    )
}