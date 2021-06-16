import HeaderUI from './Header.presenter';
import {
      useContext,
      useEffect,
      useRef,
      useState,
} from "react";
import { fromPromise, useMutation, useQuery } from '@apollo/client';

import { useRouter } from 'next/router';
import { GlobalContext } from "../../../../pages/_app";

export default function HeaderPage () {
    const [ScrollY, setScrollY] = useState(0);
    const logoDiv= useRef<HTMLHeadingElement>();
    const router = useRouter();

    const { setAccessToken, accessToken, setSavePath, userInfo, setUserInfo, chargeModal, setChargeModal } = useContext(GlobalContext);

    const handleFollow = () => {
        setScrollY(Math.trunc(window.pageYOffset)); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
        if(ScrollY >= 100) {
            logoDiv.current.classList.add('FixedLogo');

        } else {
            logoDiv.current.classList.remove('FixedLogo');
        }

    }, [ScrollY])

    useEffect(() => {
        const watch = () => {
          window.addEventListener('scroll', handleFollow);
        }

        watch(); // addEventListener 함수를 실행
        return () => {
          window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    // 홈으로 이동
    const moveUrl = (url : string) => {
        router.push(url);
    }

    // 로그인 후 되돌아갈 경로 저장하기
    const moveLogin = (url) => {
        // 현재 경로 저장하기
        const nowPage = router.asPath;
        setSavePath(nowPage);

        router.push(url);
    }

    const [ clickProfile, setclickProfile ] = useState(false);

    // 로그아웃
    const logout = () => {
        if(window.confirm('로그아웃 하시겠습니까?')) {
            alert('로그아웃 되었습니다.');

            // accessToken 과 유저정보 삭제하기
            setAccessToken("");
            setUserInfo({});

            return router.push('/');
        }
    }

    const loginProfile = useRef<HTMLDivElement>();
    useEffect( () => {
        if(clickProfile === true) {
            loginProfile.current.style.display = 'block';
        }

    }, [clickProfile])

    // 충전창 띄우기
    // const [chargeModal, setChargeModal] = useState(false);
    useEffect( () => {
        if(chargeModal) setclickProfile(false);
    }, [chargeModal])

    return(
        <HeaderUI
            moveUrl={moveUrl}
            router={router}
            logoDiv={logoDiv}
            accessToken={accessToken}
            moveLogin={moveLogin}
            setclickProfile={setclickProfile}
            clickProfile={clickProfile}
            userInfo={userInfo}
            logout={logout}
            loginProfile={loginProfile}
            chargeModal={chargeModal}
            setChargeModal={setChargeModal}
        />
    )
}