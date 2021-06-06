import MainUI from './Main.presenter';
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
// import { useRouter } from 'next/router';

export default function MainPage () {
    return(
        <MainUI />
    )
}