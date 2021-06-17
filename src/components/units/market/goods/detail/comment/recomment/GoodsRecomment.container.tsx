import { useState, useContext, useEffect, useRef } from 'react';
import { FETCH_USEDITEM_QUESTION_ANSWERS, DELETE_USEDITEM_QUESTION_ANSWER, UPDATE_USEDITEM_QUESTION_ANSWER } from './GoodsRecomment.queries';
import GoodsRecommentUI from './GoodsRecomment.presenter';
import { useQuery, useMutation } from '@apollo/client';

import { GoodsContext } from "../../../../../../../../pages/market/goods/[id]/index";

const GoodsRecommentPage = function({ 
    commentId, goodsInfo, userInfo, question, setRecomment, setModifyModal, setModifyType
}) {
    const [ page, _ ] = useState(0);
    const { answerRefresh, setAnswerRefresh, sellerEmail } = useContext(GoodsContext);
    const [ deleteAnswer ] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER);
    const [ updateAnswer ] = useMutation(UPDATE_USEDITEM_QUESTION_ANSWER);

    const { data : answerData, refetch } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
        variables : {
            page : page,
            useditemQuestionId : commentId
        }
    })

    useEffect( () => {
        setAnswerRefresh(false);
        refetch();

    }, [answerRefresh])

    const removeAnswer = async (answerId) => {
        if(window.confirm('해당 답변글을 삭제하시겠습니까?') === true) {
        
            // 답변글 삭제하기
            try {
                await deleteAnswer({
                    variables : {
                        useditemQuestionAnswerId : answerId
                    },

                    refetchQueries : [{ 
                        query : FETCH_USEDITEM_QUESTION_ANSWERS,
                        variables : {
                            page : page,
                            useditemQuestionId : commentId
                        }
                    }]
                })
                alert('삭제가 완료되었습니다.')

            } catch(error) {
                alert(error.message)
                return;
            }
        }
    }

    const [ modifyModal, setModal ] = useState(null);
    const [ modifyContent, setModifyContent ] = useState("");
    const modifyText = useRef<HTMLTextAreaElement>();

    useEffect( () => {
        if(modifyModal !== null) {
            setModifyContent(modifyModal.contents)
        }

    }, [modifyModal]);

    const modifyQuestion = async () => {
        if(modifyContent.trim().length === 0) {
            modifyText.current.focus();
            return alert('1 글자 이상 입력해주세요.');

        } else if(modifyContent.trim() === modifyModal?.contents) {
            modifyText.current.focus();
            return alert('수정된 사항이 없습니다.');
        }

        try {
            await updateAnswer({
                variables : {
                    updateUseditemQuestionAnswerInput : { 
                        contents : modifyContent 
                    },
                    useditemQuestionAnswerId : modifyModal?._id,
                },

                refetchQueries : [{ 
                    query : FETCH_USEDITEM_QUESTION_ANSWERS,
                    variables : {
                        page : page,
                        useditemQuestionId : commentId
                    }
                }]
            })

            alert('답변글이 수정되었습니다.')
            setModal(null);

        } catch(error) {
            alert(error.message);
            return;
        }
    }

    // 수정창 열기
    const clickOpenModify = (info) => {
        setModifyModal(info);
        setModifyType('answer');
    }
    
    if(answerData?.fetchUseditemQuestionAnswers) {
        return(
            <GoodsRecommentUI 
                answerData={answerData}
                sellerEmail={sellerEmail}
                goodsInfo={goodsInfo}
                userInfo={userInfo}
                removeAnswer={removeAnswer}
                setModal={setModal}
                modifyModal={modifyModal}
                modifyContent={modifyContent}
                setModifyContent={setModifyContent}
                modifyText={modifyText}
                modifyQuestion={modifyQuestion}
                question={question}
                setRecomment={setRecomment}
                clickOpenModify={clickOpenModify}
                // setRecomment=
            />
        )

    } else {
        return null;
    }
    
}

export default GoodsRecommentPage;