import { useRef, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import HeaderUI from './LayoutHeader.presenter';

import { GlobalContext } from "../../../../../pages/_app";

export default function LayoutHeaderPage({ moveUrl, logoDiv }) {
    const router = useRouter();
    // const logoDiv = useRef<HTMLHeadingElement>();
    const loginProfile = useRef<HTMLDivElement>();

    const [ clickProfile, setClickProfile ] = useState(false);

    const { 
        setAccessToken, accessToken, setSavePath, userInfo, setUserInfo, chargeModal, setChargeModal 
    } = useContext(GlobalContext);

    // 로그인 후 되돌아갈 경로 저장하기
    const moveLogin = (url) => {
        // 현재 경로 저장하기
        const nowPage = router.asPath;
        setSavePath(nowPage);

        router.push(url);
    }

    // 로그아웃
    const logout = () => {
        if(window.confirm('로그아웃 하시겠습니까?')) {
            alert('로그아웃 되었습니다.');

            // accessToken 과 유저정보 삭제하기
            setAccessToken("");
            setUserInfo({});

            // if(typeof window !== 'undefined') {
            //     window.localStorage.removeItem('login');
            // }

            return router.push('/');
        }
    }

    useEffect( () => {
        setClickProfile(false)
    }, [chargeModal]);
    
    return(
        <HeaderUI 
            logoDiv={logoDiv}
            moveUrl={moveUrl}
            accessToken={accessToken}
            moveLogin={moveLogin}
            clickProfile={clickProfile}
            setClickProfile={setClickProfile}
            loginProfile={loginProfile}
            userInfo={userInfo}
            logout={logout}
            setChargeModal={setChargeModal}
            chargeModal={chargeModal}
        />
    )
}