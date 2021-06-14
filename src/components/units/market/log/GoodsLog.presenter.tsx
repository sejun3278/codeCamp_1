import { 
    GoodsLogDiv, GoodsLogListDiv, GoodsListEmpty, GoodsLogList, GoodsLogLikeDiv, GoodsLogInfoDiv, GoodsLogImage, GoodsLogInfo, GoodsLogName,
    GoodsLogRemark, GoodsLogPrice, GoodsLogImageDiv

} from './GoodsLog.style';
import { setComma } from '../../../../commons/libraries/validations';

const GoodsLogUI = function({
    logList
}) {
    return(
            <GoodsLogDiv>
                <GoodsLogListDiv>
                    <p> 오늘 본 상품 ({logList?.length}) </p>

                    {logList?.length === 0
                        ? <GoodsListEmpty>
                            오늘 본 상품 정보가 없습니다.
                          </GoodsListEmpty>

                        : 
                        logList?.reverse().map( (el, key) => {
                            return(
                                <GoodsLogList key={key}>
                                    <GoodsLogLikeDiv>
                                        <img alt='' src='/images/like_yellow.png' /> 0
                                    </GoodsLogLikeDiv>
        
                                    <GoodsLogInfoDiv>
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
                </GoodsLogDiv>
    )
}

export default GoodsLogUI;