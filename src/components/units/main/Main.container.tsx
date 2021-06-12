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
    const { data : bestBoards } = useQuery(FETCH_BOARDS_OF_THE_BEST);
    
    // 전체 게시글 가져오기
    const { data : boards } = useQuery(FETCH_BOARDS, {
        variables : {
            search : search,
            page : page
        }
    }); 

    // 전체 게시글 수 가져오기
    const { data : boardsCount } = useQuery(FETCH_BOARDS_COUNT, {
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

        setPage(1);
        setBlock(1);

        setSearch(value);
    }

    // 화면에 표시되는 페이지를 담는 값
    const [block, setBlock] = useState(1);

    // 페이지 이동하기
    const movePage = (page) => {
        setPage(page);
    }

    // 블럭 이동하기
    const moveBlock = (add) => {
        const moveBlock = add ? block + 1 : block - 1;
        let movePage = add ? (moveBlock * 10) - 9 : (moveBlock * 10);

        add ? setBlock(moveBlock) : setBlock(moveBlock);

        // 페이지 변환
        // const movePage = (moveBlock * 10) - 9;
        setPage(movePage);
    }

        const allCount = boardsCount !== undefined && boardsCount?.fetchBoardsCount
        const allPage = Math.ceil(allCount / 10);
        // ( 1423 / 10 ) 을 올림한 값인 143 을 받는다. == 총 143 개의 페이지가 있음
        const allBlock = Math.ceil(allPage / 10);
        // 15 개의 블럭이 있음

        const pageArr = [];
        const startPage = (block * 10) - 9;
        let endPage = block * 10;
        if(endPage > allPage) {
            endPage = allPage;
        }

        for(let i = startPage; i <= endPage; i++) {
            pageArr.push(i);
        }

        // 다음 또는 이전 블록 출력 
        let prevBlcok : boolean = block > 1 && allCount > 0 ? true : false;
        let nextBlock : boolean = block === allBlock ? false : true;

        if(allCount === 0) {
            nextBlock = false;
        }

        return(
            <MainUI 
                bestBoards={bestBoards}
                router={router}
                searchBtn={searchBtn}
                searchInput={searchInput}
                search={search}
                boards={boards}
                currentPage={page}
                boardsCount={boardsCount}
                pageArr={pageArr}
                movePage={movePage}
                moveBlock={moveBlock}
                nextBlock={nextBlock}
                prevBlcok={prevBlcok}
                // prevBlcok={prevBlcok}
            />
        )
    }