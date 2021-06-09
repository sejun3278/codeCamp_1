import HeaderUI from './Header.presenter';
// import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './Main.queries';
import {
    //   ChangeEvent,
    //   ChangeEventHandler,
    //   RefObject,
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

    const { accessToken } = useContext(GlobalContext);

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

    return(
        <HeaderUI
            moveUrl={moveUrl}
            router={router}
            logoDiv={logoDiv}
            accessToken={accessToken}
        />
    )
}