import {
    MainBoardDiv, MainContentsDiv, BestContentsDiv, BestItemListDiv, BestItems, BestThumb, BestTextDiv,
    BestBoardTitle, BestOtherInfoDiv, BestProfile, BestLike, BestBoardWriter, BestCreateDate, BestLikeImg, SearchDiv, SearchBar,
    SeacrhBtnDiv, BoardsListDiv, EmptyPage, BoardListDivs, BoardsCount, BoardListContentsDiv, BoardContents, BoardContentsLimit, BoardsContentDiv

} from './Main.style';

import imageList from '../../../../image.json';
export default function MainPage({
    bestBoards,
    router,
    searchBtn,
    searchInput,
    search,
    boards,
    boardsCount,
    page
}) {
    return(
        <MainBoardDiv>
            <div />
            <MainContentsDiv>
                <BestContentsDiv>
                    <h2> 베스트 게시글 </h2>
                    <BestItemListDiv>
                        {bestBoards.map( (bestBoard, key) => {
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
                    {boards === undefined
                        ? <EmptyPage>
                            <h2> 게시물을 찾을 수 없습니다. </h2>
                          </EmptyPage>

                        : <BoardListDivs>
                            <BoardsCount> 총 {boardsCount.fetchBoardsCount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 개의 게시물이 조회되었습니다. </BoardsCount>
                          
                            <BoardListContentsDiv>
                                <BoardContents style={{ 'fontWeight' : 'bold' }}>
                                    <div> 번호 </div>
                                    <div> 제목 </div>
                                    <div> 작성자 </div>
                                    <div> 날짜 </div>
                                </BoardContents>
                                
                                <BoardsContentDiv>
                                {boards.fetchBoards.map( (el, key) => {
                                    

                                    return(
                                        <BoardContents key={key}>
                                            <div> {} </div>
                                            <BoardContentsLimit> {el.title} </BoardContentsLimit>
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

            </MainContentsDiv>
            <div />
        </MainBoardDiv>
    )
}