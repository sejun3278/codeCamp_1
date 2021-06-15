import { 
    GoodsLogDiv, GoodsLogListDiv, GoodsListEmpty, GoodsLogList, GoodsLogLikeDiv, GoodsLogInfoDiv, GoodsLogImage, GoodsLogInfo, GoodsLogName,
    GoodsLogRemark, GoodsLogPrice, GoodsLogImageDiv

} from './GoodsLog.style';
import { setComma } from '../../../../commons/libraries/validations';

const GoodsLogUI = function({
    logList,
    router,
    removeGoodsLog
}) {
    return(
            <GoodsLogDiv>
                {logList &&
                    logList.length > 0 &&
                    <GoodsLogListDiv>
                        <p> 오늘 본 상품 ({logList?.length}) </p>

                        {logList?.reverse().map( (el, key) => {
                                return(
                                    <GoodsLogList key={key}>
                                        <GoodsLogLikeDiv>
                                            <div style={{ 'textAlign' : 'left', 'marginLeft' : '10px' }}> <img onClick={() => removeGoodsLog(key)} alt='' src='/images/close.png' /> </div>
                                            <div style={{ 'textAlign' : 'right' }}> <img alt='' src='/images/like_yellow.png' /> 0 </div>
                                        </GoodsLogLikeDiv>
            
                                        <GoodsLogInfoDiv onClick={() => router.push(`/market/goods/${el._id}`)}>
                                            <GoodsLogImageDiv>
                                                <GoodsLogImage alt='' src='/images/bestGoods_0.png' />
                                            </GoodsLogImageDiv>

                                            <GoodsLogInfo>
                                                <GoodsLogName> {el?.name} </GoodsLogName>
                                                <GoodsLogRemark> {el?.remarks} </GoodsLogRemark>
                                                <GoodsLogPrice> {setComma(el.price)} 원 </GoodsLogPrice>
                                            </GoodsLogInfo>
                                        </GoodsLogInfoDiv>
                                    </GoodsLogList>
                                )
                            })
                        }
                    </GoodsLogListDiv>
                }
                </GoodsLogDiv>
    )
}

export default GoodsLogUI;