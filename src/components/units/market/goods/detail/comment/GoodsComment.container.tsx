import { useState, useRef, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import GoodsCommentUI from './GoodsComment.presenter';
import { CREATE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTIONS } from './GoodsComment.queries';
import { useRouter } from 'next/router';

export default function GoodsCommentPage(
    loginEmail
) {
    const router = useRouter();
    const goodsId = router.query.id;

    const [ comment, setComment ] = useState("");
    const [ page, setPage ] = useState(1);
    const [ createUseditemQuestion ] = useMutation(CREATE_USEDITEM_QUESTION);


    const commentRef = useRef<HTMLInputElement>();

    // 문의글 데이터 가져오기
    const { data : questionData, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
        variables : {
            page : page,
            useditemId : goodsId
        }
    })

    // 문의글 등록하기
    const addQuestion = (event) => {
        event.preventDefault();

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

    return(
        <GoodsCommentUI 
            comment={comment}
            setComment={setComment}
            addQuestion={addQuestion}
            commentRef={commentRef}
            questionData={questionData}
            loginEmail={loginEmail?.loginEmail}
            onloadMore={onloadMore}
        />
    )
}