import { useState } from 'react';
import { FETCH_USEDITEM_QUESTION_ANSWERS } from './GoodsRecomment.queries';
import GoodsRecommentUI from './GoodsRecomment.presenter';
import { useQuery } from '@apollo/client';

const GoodsRecommentPage = function({ commentId }) {
    const [ page, setPage ] = useState(0);
    
    const { data : answerData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
        variables : {
            page : page,
            useditemQuestionId : commentId
        }
    })

    if(answerData?.fetchUseditemQuestionAnswers) {
        return(
            <GoodsRecommentUI 
                answerData={answerData}
            />
        )
        
    } else {
        return null;
    }
    
}

export default GoodsRecommentPage;