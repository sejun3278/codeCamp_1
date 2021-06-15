import { useState, useRef, useContext, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import GoodsCommentUI from './GoodsComment.presenter';
import { 
    CREATE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTIONS, DELETE_QUESTION, UPDATE_USEDITEM_QUESTION,
    CREATE_USEDITEM_ANSWER
} from './GoodsComment.queries';
import { useRouter } from 'next/router';
import { GoodsContext } from "../../../../../../../pages/market/goods/[id]/index";

export default function GoodsCommentPage({
    loginEmail,
    goodsInfo
}) {
    const router = useRouter();
    const goodsId = router.query.id;

    const { setAnswerRefresh, sellerEmail } = useContext(GoodsContext);

    const [ comment, setComment ] = useState("");
    const [ page, _ ] = useState(1);
    const [ createUseditemQuestion ] = useMutation(CREATE_USEDITEM_QUESTION);
    const [ deletUseditemQuestion ] = useMutation(DELETE_QUESTION);
    const [ updateUseditemQuestion ] = useMutation(UPDATE_USEDITEM_QUESTION);
    const [ createUseditemQuestionAnswer ] = useMutation(CREATE_USEDITEM_ANSWER);

    const commentRef = useRef<HTMLInputElement>();

    // 문의글 데이터 가져오기
    const { data : questionData, loading, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
        variables : {
            page : page,
            useditemId : goodsId
        }
    })

    // 문의글 등록하기
    const addQuestion = (event) => {
        event.preventDefault();

        if(goodsInfo?.seller?.email === loginEmail) {
            alert('자신이 등록한 글에는 문의글을 등록할 수 없습니다.');
            return;
        }

        if(comment.length === 0) {
            alert('문의 내용을 입력해주세요.');
            commentRef.current.focus();
            return;
        }
        
        try {
            createUseditemQuestion({
                variables : {
                    createUseditemQuestionInput : { contents : comment },
                    useditemId : goodsId
                },

                refetchQueries : [{ 
                    query : FETCH_USEDITEM_QUESTIONS,
                    variables : {
                        page : page,
                        useditemId : goodsId
                    }
                }]
            })
            alert('문의 등록이 완료되었습니다.');
            return setComment("");

        } catch(error) {
            alert(error.message);
            return;
        }    
    }

    // 인피니트 스크롤 적용하기
    const onloadMore = () => {
        if(questionData?.fetchUseditemQuestions.length % 10 !== 0) { return };
        fetchMore({
            variables : { 
                // page : page + 1
                page : Math.floor(questionData?.fetchUseditemQuestions.length / 10) + 1 
        },
            updateQuery : (prev, { fetchMoreResult }) => ( {
                fetchUseditemQuestions : [ 
                    ...prev.fetchUseditemQuestions, 
                    ...fetchMoreResult.fetchUseditemQuestions 
                ]
            })
        })
    }

    // 문의글 삭제하기
    const removeQuestion = async (id) => {
        try {
            if(window.confirm('해당 문의글을 삭제하시겠습니까?')) {
                await deletUseditemQuestion({
                    variables : {
                        useditemQuestionId : id
                    },

                    refetchQueries : [{ 
                        query : FETCH_USEDITEM_QUESTIONS,
                        variables : {
                            page : page,
                            useditemId : goodsId
                        }
                    }]
                })

                alert('문의글이 삭제되었습니다.')
            }

        } catch(error) {
            alert(error.message)
        }
    }

    // 문의글 수정하기
    const [ modifyModal, setModifyModal ] = useState(null);
    const [ modifyContent, setModifyContent ] = useState("");

    useEffect( () => {
        if(modifyModal !== null) {
            setModifyContent(modifyModal.contents)
        }

    }, [modifyModal])

    const modifyText = useRef<HTMLTextAreaElement>();

    const modifyQuestion = async () => {
        if(modifyContent.trim().length === 0) {
            modifyText.current.focus();
            return alert('1 글자 이상 입력해주세요.');

        } else if(modifyContent.trim() === modifyModal?.contents) {
            modifyText.current.focus();
            return alert('수정된 사항이 없습니다.');
        }

        try {
            await updateUseditemQuestion({
                variables : {
                    updateUseditemQuestionInput : { 
                        contents : modifyContent 
                    },
                    useditemQuestionId : modifyModal?._id,
                },

                refetchQueries : [{ 
                    query : FETCH_USEDITEM_QUESTIONS,
                    variables : {
                        page : page,
                        useditemId : goodsId
                    }
                }]
            })

            alert('문의글이 수정되었습니다.')
            setModifyModal(null);

        } catch(error) {
            alert(error.message);
            return;
        }
    }

    // 대댓글 달기
    const [ recomment, setRecomment ] = useState(null);
    const [ answer, setAnswer ] = useState("");
    const answerRef = useRef<HTMLTextAreaElement>();

    // 대댓글 등록
    const addAnswer = async () => {
        if(recomment === null) {
            return alert('올바른 경로가 아닙니다.')

        } else {
            if(answer.length === 0) {
                answerRef.current.focus();
                alert('답글을 1 글자 이상 입력해주세요.');
                return;
            }

            try {
                await createUseditemQuestionAnswer({
                    variables : {
                        createUseditemQuestionAnswerInput : { contents : answer },
                        useditemQuestionId : recomment?._id
                    }
                })

                alert('답글이 등록되었습니다.');
                setAnswer("");
                setRecomment(null);

                setAnswerRefresh(true);

            } catch(error) {
                alert(error.message);
                return;
            }
        }
    }
    
    return(
        <GoodsCommentUI 
            comment={comment}
            goodsInfo={goodsInfo}
            setComment={setComment}
            addQuestion={addQuestion}
            commentRef={commentRef}
            questionData={questionData}
            loginEmail={loginEmail}
            onloadMore={onloadMore}
            removeQuestion={removeQuestion}
            modifyModal={modifyModal}
            setModifyModal={setModifyModal}
            setModifyContent={setModifyContent}
            modifyContent={modifyContent}
            modifyText={modifyText}
            modifyQuestion={modifyQuestion}
            setRecomment={setRecomment}
            recomment={recomment}
            answer={answer}
            setAnswer={setAnswer}
            addAnswer={addAnswer}
            answerRef={answerRef}
            sellerEmail={sellerEmail}
        />
    )
}