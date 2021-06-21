import {
    MainBoardDiv, MainContentsDiv, BestContentsDiv, BestItemListDiv, BestItems, BestThumb, BestTextDiv,
    BestBoardTitle, BestOtherInfoDiv, BestProfile, BestLike, BestBoardWriter, BestCreateDate, BestLikeImg, SearchDiv, SearchBar,
    SeacrhBtnDiv, BoardsListDiv, EmptyPage, BoardListDivs, BoardsCount, BoardListContentsDiv, BoardContents, BoardContentsLimit, BoardsContentDiv,
    BoardListPageDiv, BoardListOptionalDiv, BoardWriteDiv
} from './Main.style';

import imageList from '../../../../image.json';
import React, { memo } from 'react';
import { setComma } from '../../../commons/libraries/validations';

const MainPage = ({
    bestBoards,
    router,
    searchBtn,
    searchInput,
    search,
    boards,
    boardsCount,
    currentPage,
    pageArr,
    movePage,
    moveBlock,
    nextBlock,
    prevBlcok
    // prevBlock
}) => {
    return(
        <MainBoardDiv>
            <div />
            <MainContentsDiv>
                <BestContentsDiv>
                    <h2> 베스트 게시글 </h2>
                    <BestItemListDiv>
                        {bestBoards?.fetchBoardsOfTheBest?.map( (bestBoard, key) => {
                            return(
                                <BestItems key={key}
                                    onClick={() => router.push(`/board/${bestBoard._id}`)}
                                >
                                    <BestThumb style={{ 'backgroundImage' : `url(/images/bestThumb_${key + 1}.png)` }} />
                                    <BestTextDiv>
                                        <BestBoardTitle> {bestBoard.title} </BestBoardTitle>
                                        <BestOtherInfoDiv>
                                            <BestProfile>
                                                <img alt='' src={imageList.thumbnail} />
                                                <BestBoardWriter> {bestBoard.writer} </BestBoardWriter>
                                                <BestCreateDate> Date : {bestBoard.createdAt.slice(0, 10)} </BestCreateDate>
                                            </BestProfile>

                                            <BestLike>
                                                <BestLikeImg> <img alt='' src={imageList.likeOn} /></BestLikeImg>
                                                <div> {bestBoard.likeCount} </div>
                                            </BestLike>
                                        </BestOtherInfoDiv>
                                    </BestTextDiv>
                                </BestItems>
                            )
                        })}
                    </BestItemListDiv>
                </BestContentsDiv>
                
                <form onSubmit={searchBtn}>
                <SearchDiv>
                    <SearchBar>
                        <img alt='' src="./images/search.png" />
                        <input ref={searchInput} type='text' defaultValue={search} maxLength={20} placeholder='제목을 입력해주세요.' />
                    </SearchBar>

                    <SeacrhBtnDiv>
                        <input type='submit' onClick={searchBtn} value='검색하기' />
                    </SeacrhBtnDiv>
                </SearchDiv>
                </form>

                <BoardsListDiv>
                    {boards !== undefined
                        && <BoardListDivs>
                            <BoardsCount> 총 {setComma(boardsCount?.fetchBoardsCount)} 개의 게시물이 조회되었습니다. </BoardsCount>
                          
                            <BoardListContentsDiv>
                                <BoardContents style={{ 'fontWeight' : 'bold' }}>
                                    <div> 번호 </div>
                                    <div> 제목 </div>
                                    <div> 작성자 </div>
                                    <div> 날짜 </div>
                                </BoardContents>
                                
                                <BoardsContentDiv>
                                {boards?.fetchBoards.map( (el, key) => {
                                    
                                    let title = el.title;
                                    if(search !== "") {
                                        const originTitle = title;
                                        const start = originTitle.indexOf(search);

                                        title = title.slice(0, start);
                                        title += `<b class='searchFont'> ${originTitle.slice(start, start + search.length)} </b>`;
                                        title += originTitle.slice(start + search.length, originTitle.length);
                                    }

                                    return(
                                        <BoardContents key={key}
                                            onClick={() => router.push(`/board/${el._id}`)}
                                        >
                                            <div> {(currentPage * 10) - key } </div>
                                            <BoardContentsLimit dangerouslySetInnerHTML={{ __html : title }} />
                                            <BoardContentsLimit> {el.writer} </BoardContentsLimit>
                                            <div> {el.createdAt.slice(0, 10)} </div>
                                        </BoardContents>
                                    )
                                })}
                                </BoardsContentDiv>
                            </BoardListContentsDiv>
                          </BoardListDivs>
                    }
                </BoardsListDiv>

                <BoardListOptionalDiv>
                    <BoardListPageDiv>
                        {prevBlcok &&
                            <div onClick={() => moveBlock(false)}> 
                                <img alt='' src="./images/prev.png" /> 
                            </div>
                        }

                        {pageArr.map( (page, key) => {
                            return(
                                <div key={key}
                                    onClick={() => currentPage !== page ? movePage(page) : undefined}
                                    // onClick={currentPage !== page && () => movePage(page)}
                                    style={currentPage === page ? { 'color' : '#FFD600', 'fontWeight' : 'bold' } : undefined}
                                >
                                    {page}
                                </div>
                            )
                        })}
                        {nextBlock && 
                            <div onClick={() => moveBlock(true)}> 
                                <img alt='' src="./images/next.png" /> 
                            </div>
                        }

                    </BoardListPageDiv>

                    <BoardWriteDiv onClick={() => router.push('/board/write')}>
                        <img alt='' src='./images/write.png'/>
                        게시물 등록하기
                    </BoardWriteDiv>
                </BoardListOptionalDiv>

            </MainContentsDiv>
            <div />
        </MainBoardDiv>
    )
}

export default memo(MainPage);