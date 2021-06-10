import { useState } from 'react';
import { useMutation } from '@apollo/client';

import GoodsCommentUI from './GoodsComment.presenter';
import { CREATE_USEDITEM_QUESTION } from './GoodsComment.queries';
import { useRouter } from 'next/router';

export default function GoodsCommentPage() {
    const router = useRouter();
    const goodsId = router.query.id;

    const [ comment, setComment ] = useState("");
    const [ createUseditemQuestion ] = useMutation(CREATE_USEDITEM_QUESTION);

    // 문의글 등록하기
    const addQuestion = (event) => {
        event.preventDefault();

        
    }


    return(
        <GoodsCommentUI 
            comment={comment}
            setComment={setComment}
            addQuestion={addQuestion}
        />
    )
}