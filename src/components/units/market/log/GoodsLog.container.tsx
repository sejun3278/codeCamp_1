import GoodsLogUI from './GoodsLog.presenter';
import { useRouter } from 'next/router';
import { useState } from 'react';

const GoodsLogPage = function() {
    const router = useRouter();

    // 오늘 본 상품 가져오기
    let logList = [];
    if(typeof window !== 'undefined') {
        if(window.localStorage.getItem('goodsLog')) {
            logList = JSON.parse(window.localStorage.getItem('goodsLog'))
        }
    }

    const [ list, setList ] = useState( logList.reverse() );

    // 상품 리스트 제거하기
    const removeGoodsLog = (idx) => {
        if(typeof window !== 'undefined') {
            let logList = [...list];

            logList[idx] = null;
            logList = logList.filter( el => el !== null);

            window.localStorage.setItem('goodsLog', JSON.stringify( logList.reverse() ));
            setList( logList.reverse() );
        }
    }

    return(
        <GoodsLogUI 
            logList={list.reverse()}
            router={router}
            removeGoodsLog={removeGoodsLog}
        />
    )
}

export default GoodsLogPage;