import GoodsLogUI from './GoodsLog.presenter';

const GoodsLogPage = function() {
    // 오늘 본 상품 가져오기
    let logList = [];
    if(typeof window !== 'undefined') {
        if(window.localStorage.getItem('goodsLog')) {
            logList = JSON.parse(window.localStorage.getItem('goodsLog'))
        }
    }

    return(
        <GoodsLogUI 
            logList={logList}
        />
    )
}

export default GoodsLogPage;