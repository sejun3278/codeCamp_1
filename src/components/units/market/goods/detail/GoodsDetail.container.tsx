import GoodsDetailUI from './GoodsDetail.presenter';
import GoodsCommnetUI from './comment/GoodsComment.container';

import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM } from './GoodsDetail.queries';
import { useState } from 'react';

export default function GoodsDetailPage() {
    const router = useRouter();
    const goodsId = router.query.id;

    const [ thumb, setThumb ] = useState(0);

    const { data : goodsInfo } = useQuery(FETCH_USED_ITEM, {
        variables : {
            useditemId : goodsId
        }
    });

    const selectImage = (type, idx) => {
        let copyThumb = thumb;

        if(type !== 'change') {
            if(type === 'next') {
                copyThumb = (copyThumb + 1) > 3 ? 0 : copyThumb + 1;

            } else if(type === 'prev') {
                copyThumb = (copyThumb - 1) < 0 ? 3 : copyThumb - 1
            }

        } else {
            copyThumb = idx;
        }

        setThumb(copyThumb);
    }

    console.log(goodsInfo)

    return(
        <>
            <GoodsDetailUI 
                goodsInfo={goodsInfo?.fetchUseditem}
                selectImage={selectImage}
                thumb={thumb}
            />

            <GoodsCommnetUI />
        </>
    )
}