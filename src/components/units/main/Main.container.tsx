import MainUI from './Main.presenter';
import { FETCH_BOARDS_OF_THE_BEST, FETCH_BOARDS, FETCH_BOARDS_COUNT } from './Main.queries';
import {
    useRef,
    useState,
} from "react";
import { fromPromise, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function MainPage () {
    const router = useRouter();
    const searchInput = useRef<HTMLInputElement>();

    const [ search, setSearch ] = useState("");
    const [ page, setPage ] = useState(1);

    // 베스트 게시글 가져오기
    const { data : bestBoards, loading : bestBoardsLoading } = useQuery(FETCH_BOARDS_OF_THE_BEST);
    
    // 전체 게시글 가져오기
    const { data : boards, loading : boardsLoading } = useQuery(FETCH_BOARDS, {
        variables : {
            search : search,
            page : page
        }
    }); 

    // 전체 게시글 수 가져오기
    const { data : boardsCount, loading : boardsCountLoading } = useQuery(FETCH_BOARDS_COUNT, {
        variables : {
            search : search
        }
    })

    // 검색 버튼 클릭
    const searchBtn = (event) => {
        event.preventDefault();
        const value = searchInput.current.value.trim();

        if(search.length === 0) {
            if(value.length === 0) {
                searchInput.current.focus();
                return alert('검색어를 입력해주세요.');
            }
        }
        setSearch(value);
    }

    if(bestBoardsLoading === false && boardsLoading === false && boardsCountLoading === false) {
        
        return(
            <MainUI 
                bestBoards={bestBoards.fetchBoardsOfTheBest}
                router={router}
                searchBtn={searchBtn}
                searchInput={searchInput}
                search={search}
                boards={boards}
                page={page}
                boardsCount={boardsCount}
            />
        )
    } else {
        return (
            <div />
        )
    }
}