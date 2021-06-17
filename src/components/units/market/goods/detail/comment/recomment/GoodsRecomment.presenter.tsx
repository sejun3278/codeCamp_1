import {  
    GoodsRecommentDiv, GoodsRecomment, GoodsRecommentInfo, GoodsRecommentWriterInfo, GoodsRecommentArrow,
    GoodsAnswerIconDiv, GoodsAnswerOption, ModifyOptionDiv, ModifyConfirmDiv, ModifyModalDiv
} from './GoodsRecomment.style';
import Modal from 'react-modal';

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

const GoodsRecommentUI = function({
    answerData,
    sellerEmail,
    goodsInfo,
    userInfo,
    removeAnswer,
    modifyModal,
    setModal,
    setModifyContent,
    modifyContent,
    modifyText,
    modifyQuestion,
    question,
    setRecomment,
    clickOpenModify
}) {
    return(
        <GoodsRecommentDiv>
            {answerData?.fetchUseditemQuestionAnswers
                && answerData?.fetchUseditemQuestionAnswers.map( (el, key) => {

                    let name = el.user.name;
                    if(goodsInfo?.seller?.email === el.user.email) {
                        name = '판매자';
                    }

                    return(
                        <GoodsRecomment key={key}>
                            { (modifyModal !== null && modifyModal._id === el._id)
                            &&
                                <Modal
                                    isOpen={modifyModal !== null}
                                    style={modalStyles}
                                    contentLabel="Example Modal"
                                >
                                    <ModifyModalDiv>
                                        <p> 답변글 수정 </p>
                                        <textarea ref={modifyText} defaultValue={modifyContent} maxLength={100} onChange={(event) => setModifyContent(event.target.value.trim())}></textarea>
                                        <ModifyOptionDiv>
                                            {modifyContent.length} / 100
                                        </ModifyOptionDiv>

                                        <ModifyConfirmDiv>
                                            <input type='button' value='취소' onClick={() => setModal(null)} />
                                            <input type='button' value='수정' onClick={modifyQuestion}
                                                style={modifyContent.length > 0 && modifyContent !== modifyModal?.contents ? { 'backgroundColor' : '#FFD600' } : undefined}
                                            />
                                        </ModifyConfirmDiv>
                                    </ModifyModalDiv>
                                </Modal>
                            }

                            <div> <GoodsRecommentArrow alt='' src='/images/answer_arrow.png' /> </div>
                            <GoodsRecommentInfo>
                                <img alt='' src='/images/profile.png'/>
                                <GoodsRecommentWriterInfo> 
                                    <div> <b style={goodsInfo?.seller?.email === el.user.email ? { 'color' : '#3C8DAD' } : undefined}> {name} </b> </div>
                                    <div> {el.contents} </div>
                                </GoodsRecommentWriterInfo>
                            </GoodsRecommentInfo>

                            <GoodsAnswerIconDiv>
                                { (el.user.email === userInfo.email)
                                    && <GoodsAnswerOption>
                                            <img alt='' src='/images/comment_modify.png' title='수정하기'
                                                 onClick={() => setModal(el)}
                                            />
                                            <img alt='' src='/images/comment_remove.png' title='삭제하기'
                                                 onClick={() => removeAnswer(el._id)}
                                            />
                                       </GoodsAnswerOption>
                                }
                                
                                
                                { (el.user.email !== userInfo.email) && userInfo.email
                                    && <GoodsAnswerOption>
                                            <img alt='' src='/images/answer.png' title='답변하기' 
                                                        onClick={() => setRecomment(question)}
                                                        // onClick={() => setRecomment(question)}
                                            />
                                        </GoodsAnswerOption>
                                }
                                {/* {question?.user?.email !== loginEmail
                                        && <GoodsAnswerOption>
                                                <img alt='' src='/images/answer.png' title='답변하기' 
                                                            onClick={() => setRecomment(question)}
                                                            // onClick={() => setRecomment(question)}
                                                />
                                            </GoodsAnswerOption>
                                } */}
                                
                                {/* <img alt='' src='/images/answer.png'/> */}
                            </GoodsAnswerIconDiv>
                        </GoodsRecomment>
                    )
                })
            }
        </GoodsRecommentDiv>
    )
} 

export default GoodsRecommentUI;