import {
    Wrapper, DivGrid, MainDiv, WriterInfoDiv, WriterInfo, WriterThumbnailDiv, WriterThumbnail, WriterNameDiv, WriterName, WriterDate,
    BoardContentsDiv, BoardTitle, BoardImagesDiv, BoardContents, BoardYoutubeDiv, BoardYoutube, BoardLikeAndDislikeDiv, BoardLikeDiv, BoardDislikeDiv,
    BoardLikeAndDislikeIcon, BoardLikeAndDislikeCount, PageWrapper, PageWrapperGrid, BoradOptionDiv, BoardImage
} from './BoardDetail.style';
import ReplyUI from '../reply/Reply.container';
import LazyLoad from 'react-lazy-load';

export default function BoardWritePage({
    boardInfo,
    imageList,
    contents,
    // replyCount,
    ToggleLikeOrdisLike,
    router
    // addReply,
    // saveReplyWriterInfo,
    // replyAble,
    // initRating,
    // rating
}) {
    return <Wrapper>
        <DivGrid>
            <div> </div>

            <PageWrapper>
                <PageWrapperGrid>
                    <div></div>
                    <div>
                        <MainDiv>
                            <WriterInfoDiv color="#BDBDBD">
                                <WriterInfo>
                                    <WriterThumbnailDiv> 
                                        <WriterThumbnail alt='' src={imageList.thumbnail} />
                                    </WriterThumbnailDiv>

                                    <WriterNameDiv>
                                        <WriterName> {boardInfo.writer} </WriterName>
                                        <WriterDate color="#828282"> Date : {boardInfo.createdAt.slice(0, 10)} </WriterDate>
                                    </WriterNameDiv>
                                </WriterInfo>
                            </WriterInfoDiv>

                            <BoardContentsDiv>
                                <BoardTitle>
                                    {boardInfo.title}
                                </BoardTitle>

                                {boardInfo.images.length > 0
                                    &&  <BoardImagesDiv>
                                            {/* 이미지 들어갈 부분 */}
                                            {boardInfo.images.map( (el, key) => {
                                                return(
                                                    <LazyLoad key={key}>
                                                        <BoardImage>
                                                            <img alt='' src={el} />
                                                        </BoardImage>
                                                    </LazyLoad>
                                                )
                                            })}
                                        </BoardImagesDiv>
                                }


                                {/* 게시물 내용 */}
                                <BoardContents dangerouslySetInnerHTML={{ __html : contents }} />

                                {/* 유튜브 연결 */}
                                {boardInfo.youtubeUrl !== null && boardInfo.youtubeUrl.length > 0
                                    &&  <BoardYoutubeDiv>
                                            <BoardYoutube src={boardInfo.youtubeUrl} frameBorder='0' encrypted-media />
                                        </BoardYoutubeDiv>
                                }

                                {/* 좋아요 및 싫어요 */}
                                <BoardLikeAndDislikeDiv>
                                    <BoardLikeDiv title='좋아요'>
                                        <BoardLikeAndDislikeIcon alt='' src={imageList.like} onClick={() => ToggleLikeOrdisLike(true)} />
                                        <BoardLikeAndDislikeCount color="#828282"> {boardInfo.likeCount} </BoardLikeAndDislikeCount>
                                    </BoardLikeDiv>

                                    <BoardDislikeDiv title='싫어요'>
                                        <BoardLikeAndDislikeIcon alt='' src={imageList.dislike} onClick={() => ToggleLikeOrdisLike(false)} />
                                        <BoardLikeAndDislikeCount color="#828282"> {boardInfo.dislikeCount} </BoardLikeAndDislikeCount>
                                    </BoardDislikeDiv>

                                </BoardLikeAndDislikeDiv>

                            </BoardContentsDiv>
                        </MainDiv>
                    </div>
                    <div></div>
                </PageWrapperGrid>

                <BoradOptionDiv>
                    <input type='button' value='목록으로' onClick={() => router.push('/')}/>
                    <input type='button' value='수정하기'/>
                </BoradOptionDiv>

                {/* 댓글 컴포넌트 추가 */}
                <ReplyUI />
            </PageWrapper>
            <div> </div>
        </DivGrid>
    </Wrapper>
}