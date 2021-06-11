import { 
    GoodsCommentDiv, GoodsComment, GoodsCommentTitle, GoodsWriteDiv, GoodsTextOptionDiv, GoodsQuestionDiv, GoodsQuestion, GoodsQuestionGridDiv,
    GoodsQuestionProfile, GoodsQuestionConents, GoodsQuestionDate, MyComment, GoodsQuestionOptionDiv

} 
from './GoodsComment.style';
import InfiniteScroll from 'react-infinite-scroller';

export default function GoodsCommentPage({
    comment,
    setComment,
    addQuestion,
    commentRef,
    questionData,
    loginEmail,
    onloadMore
}) {
    return(
        <GoodsCommentDiv>
            <div> </div>
            <GoodsComment>
                <GoodsCommentTitle>
                    <img alt='' src='/images/questionIcon.png'/>
                    <b> 문의하기 </b>
                </GoodsCommentTitle>

                <GoodsWriteDiv>
                    <textarea ref={commentRef} maxLength={100} value={comment} onChange={(event) => setComment(event.target.value.trim())} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'></textarea>
                    <GoodsTextOptionDiv>
                        <div> {comment.length} / 100 </div>
                        <div> <input onClick={addQuestion} type='button' value='문의하기' style={comment.length > 0 ? { 'backgroundColor' : '#FFD600', 'color' : 'black' } : undefined} /> </div>
                    </GoodsTextOptionDiv>
                </GoodsWriteDiv>

                <GoodsQuestionDiv>
                    <InfiniteScroll
                        loadMore={onloadMore}
                        hasMore={true}
                    >
                        {questionData?.fetchUseditemQuestions.map( (question, key) => {

                            return(
                                <GoodsQuestion key={key}>
                                    <GoodsQuestionGridDiv>
                                        <div>  
                                            <GoodsQuestionProfile alt='' src='/images/profile.png'/>
                                        </div>
                                        <div> 
                                            <div> <b> 노원두 </b> </div>
                                            <GoodsQuestionConents> {question.contents} </GoodsQuestionConents>
                                            <GoodsQuestionDate> {question.createdAt.slice(0, 10)} </GoodsQuestionDate>
                                        </div>
                                        <GoodsQuestionOptionDiv> 
                                            {question?.user?.email === loginEmail
                                                // 내가 작성한 문의글인 경우, 삭제 및 수정 가능
                                                && <MyComment>
                                                        <img alt='' src='/images/comment_modify.png' title='수정하기' />
                                                        <img alt='' src='/images/comment_remove.png' title='삭제하기'/>
                                                    </MyComment>
                                            }

                                        </GoodsQuestionOptionDiv>
                                    </GoodsQuestionGridDiv>
                                </GoodsQuestion>
                            )
                        })}
                    </InfiniteScroll>
                </GoodsQuestionDiv>

            </GoodsComment>
            <div> </div>
        </GoodsCommentDiv>
    )
}