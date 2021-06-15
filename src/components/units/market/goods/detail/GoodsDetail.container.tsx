import GoodsDetailUI from './GoodsDetail.presenter';
import GoodsCommnetUI from './comment/GoodsComment.container';

import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM } from './GoodsDetail.queries';
import { useState, useContext, useEffect } from 'react';

import { GlobalContext } from '../../../../../../pages/_app';
import { GoodsContext } from "../../../../../../pages/market/goods/[id]/index";

export default function GoodsDetailPage() {
    const router = useRouter();
    const goodsId = router.query.id;

    const { loginEmail } = useContext(GlobalContext);
    const { setSellerEmail } = useContext(GoodsContext);

    const [ thumb, setThumb ] = useState(0);

    const { data : goodsInfo, loading } = useQuery(FETCH_USED_ITEM, {
        variables : {
            useditemId : goodsId
        }
    });

    useEffect( () => {
        // 상품 판매자 이메일 저장하기
        setSellerEmail(goodsInfo?.fetchUseditem?.seller?.email);
    }, [loading])

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

    // 이미 본 상품 구성하기
    if(typeof window !== 'undefined') {
        const localStorage = window.localStorage;

        if(localStorage.goodsLog === undefined) {
            window.localStorage.setItem('goodsLog', JSON.stringify([]));
        }

        let logList = JSON.parse(localStorage.getItem('goodsLog'));
        const goods = goodsInfo?.fetchUseditem;

        if(goods) {
            // 중복 여부 체크하기
            for(let i = 0; i < logList.length; i++) {
                if(logList[i]) {
                    if(logList[i]._id === goodsId) {
                        logList[i] = null;
                    }
                }
            }

            logList = logList.filter( (el) => {
                return el !== null;
            })
            logList.push(goods);

            window.localStorage.setItem('goodsLog', JSON.stringify(logList));
        }
    }

    return(
        <>
            <GoodsDetailUI 
                goodsInfo={goodsInfo?.fetchUseditem}
                selectImage={selectImage}
                thumb={thumb}
                loginEmail={loginEmail}
                router={router}
            />

            <GoodsCommnetUI 
                goodsInfo={goodsInfo?.fetchUseditem}
                loginEmail={loginEmail}
            />
        </>
    )
}