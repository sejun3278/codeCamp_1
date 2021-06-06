import HeaderUI from './Header.presenter';
// import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './Main.queries';
import {
    //   ChangeEvent,
    //   ChangeEventHandler,
    //   RefObject,
      useEffect,
    //   useRef,
      useState,
} from "react";
import { fromPromise, useMutation, useQuery } from '@apollo/client';

import { useRouter } from 'next/router';

export default function HeaderPage () {
    const router = useRouter();

    // 홈으로 이동
    const moveHome = () => {
        router.push('/');
    }


    const carouselList = new Array(4).fill(null);
    return(
        <HeaderUI
            moveHome={moveHome}
            carouselList={carouselList}
        />
    )
}