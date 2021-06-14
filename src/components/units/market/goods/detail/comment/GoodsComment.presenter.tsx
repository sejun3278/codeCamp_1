import { 
    GoodsCommentDiv, GoodsComment, GoodsCommentTitle, GoodsWriteDiv, GoodsTextOptionDiv, GoodsQuestionDiv, GoodsQuestion, GoodsQuestionGridDiv,
    GoodsQuestionProfile, GoodsQuestionConents, GoodsQuestionDate, MyComment, GoodsQuestionOptionDiv, ModifyModalDiv, ModifyOptionDiv,
    ModifyConfirmDiv, GoodsQuestionAnswerDiv, GoodsQuestionAnswerOptionDiv, GoodsAnswerLength
} 
from './GoodsComment.style';
import InfiniteScroll from 'react-infinite-scroller';
import Modal from 'react-modal';
import GoodsRecommentUI from './recomment/GoodsRecomment.container';

const modalStyles = {
    content : {
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth              : '380px'
    }
};
Modal.setAppElement('body');

export default function GoodsCommentPage({
    comment,
    setComment,
    addQuestion,
    commentRef,
    questionData,
    loginEmail,
    onloadMore,
    removeQuestion,
    modifyModal,
    setModifyModal,
    setModifyContent,
    modifyContent,
    modifyText,
    modifyQuestion,
    goodsInfo,
    setRecomment,
    recomment,
    answer,
    setAnswer,
    addAnswer,
    answerRef
}) {
    return(
        <GoodsCommentDiv>
            <div> </div>
            <GoodsComment>
                <Modal
                    isOpen={modifyModal !== null}
                    style={modalStyles}
                    contentLabel="Example Modal"
                >
                    <ModifyModalDiv>
                        <p> 문의글 수정 </p>
                        <textarea ref={modifyText} maxLength={100} onChange={(event) => setModifyContent(event.target.value.trim())}>{modifyContent}</textarea>
                        <ModifyOptionDiv>
                            {modifyContent.length} / 100
                        </ModifyOptionDiv>

                        <ModifyConfirmDiv>
                            <input type='button' value='취소' onClick={() => setModifyModal(null)} />
                            <input type='button' value='수정' onClick={modifyQuestion}
                                   style={modifyContent.length > 0 && modifyContent !== modifyModal?.contents ? { 'backgroundColor' : '#FFD600' } : undefined}
                            />
                        </ModifyConfirmDiv>
                    </ModifyModalDiv>
                </Modal>

                <GoodsCommentTitle>
                    <img alt='' src='/images/questionIcon.png'/>
                    <b> 문의하기 </b>
                </GoodsCommentTitle>

                <GoodsWriteDiv>
                    <textarea ref={commentRef} disabled={goodsInfo?.seller?.email === loginEmail} maxLength={100} value={comment} onChange={(event) => setComment(event.target.value.trim())} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'></textarea>
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
                                            <div> <b> {question.user.name} </b> </div>
                                            <GoodsQuestionConents> {question.contents} </GoodsQuestionConents>
                                            <GoodsQuestionDate> {question.createdAt.slice(0, 10)} </GoodsQuestionDate>
                                        </div>
                                        <GoodsQuestionOptionDiv> 
                                            {question?.user?.email === loginEmail
                                                // 내가 작성한 문의글인 경우, 삭제 및 수정 가능
                                                && <MyComment>
                                                        <img alt='' src='/images/comment_modify.png' title='수정하기' 
                                                                    onClick={() => setModifyModal(question)}
                                                        />
                                                        <img alt='' src='/images/comment_remove.png' title='삭제하기' 
                                                                    onClick={() => removeQuestion(question._id)}
                                                        />
                                                    </MyComment>
                                            }
                                            
                                            {goodsInfo?.seller?.email === loginEmail
                                                && question?.user?.email !== loginEmail
                                                    && <MyComment>
                                                            <img alt='' src='/images/answer.png' title='답변하기' 
                                                                        onClick={() => setRecomment(question)}
                                                            />
                                                       </MyComment>
                                            }

                                        </GoodsQuestionOptionDiv>
                                    </GoodsQuestionGridDiv>

                                    <GoodsRecommentUI 
                                        commentId={question?._id}
                                    />
                                    {recomment !== null &&
                                        <GoodsQuestionAnswerDiv>
                                            <div> <img alt='' src='/images/answer_arrow.png'/> </div>
                                            <div> 
                                                <textarea ref={answerRef} maxLength={100} placeholder='답글을 등록해주세요.' onChange={(event) => setAnswer(event.target.value.trim())}></textarea>
                                                <GoodsQuestionAnswerOptionDiv>
                                                    <GoodsAnswerLength> {answer.length} / 100 </GoodsAnswerLength>
                                                    <div> <input onClick={addAnswer} type='button' value='답글등록' style={answer.length > 0 ? { 'backgroundColor' : '#FFD600', 'fontWeight' : 'bold' } : undefined} /> </div>
                                                </GoodsQuestionAnswerOptionDiv>
                                            </div>
                                        </GoodsQuestionAnswerDiv>
                                   }
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