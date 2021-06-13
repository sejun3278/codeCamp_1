import { 
    GoodsMainDiv, GoodsMainContentsDiv, GoodsBestListDiv, GoodsBestList, GoodsBest, GoodsBestImage, GoodsBestInfoDiv, GoodsBestName, GoodsBestImageDiv,
    GoodsBestInfoGridDiv, GoodsBestRemarks, GoodsBestPrice, GoodsBestLikeDiv, GoodsListOptionDiv, GoodsListFilterDiv, GoodsListSearchDiv, GoostListSearchStyle, GoodsSearchBtn,
    GoodsListContentsDiv, GoodsMainGridDiv, GoodsListContents, GoodsInfo, GoodsInfoImage, GoodsInfoDiv, GoodsInfoName, GoodsRemarks, GoodsOptionDiv, GoodsTagInfo,
    GoodsSellerInfoDiv, GoodsSellerName, GoodsLikeInfo, GoodsSellerInfo, GoodsPriceDiv, GoodsWriteDiv, GoodsWriteBtn, GoodsLogDiv, GoodsLogListDiv
} from './GoodsList.style';
import { setComma } from '../../../commons/libraries/validations';
import InfiniteScroll from 'react-infinite-scroller';

export default function GoodsListlUI({
    bestGoods,
    router,
    search,
    searchRef,
    goodsSearch,
    goodsList,
    onloadMore
}) {
    return(
        <GoodsMainDiv>
            <GoodsMainGridDiv>
                <div> </div>
                <GoodsMainContentsDiv> 
                    <GoodsBestListDiv>
                        <h2> 베스트 상품 </h2>

                        <GoodsBestList>
                            {bestGoods?.fetchUseditemsOfTheBest?.map( (best, key) => {
                                return(
                                    <GoodsBest key={key} onClick={() => router.push(`/market/goods/${best._id}`)}>
                                        <GoodsBestImageDiv>
                                            <GoodsBestImage
                                                src={`/images/bestGoods_${key}.png`}
                                                alt=''
                                            />
                                        </GoodsBestImageDiv>

                                        <GoodsBestInfoDiv>
                                            <GoodsBestName> {best.name} </GoodsBestName> 

                                            <GoodsBestInfoGridDiv>
                                                <div> 
                                                    <GoodsBestRemarks> {best.remarks} </GoodsBestRemarks>
                                                    <GoodsBestPrice> {setComma(best.price)} 원 </GoodsBestPrice>
                                                </div>
                                                <div style={{ 'textAlign' : 'center' }}> 
                                                    <GoodsBestLikeDiv>
                                                        <img alt='' src='/images/like_yellow.png' />
                                                    </GoodsBestLikeDiv>
                                                    <div style={{ 'marginTop' : '5px' }}>
                                                        0
                                                    </div>
                                                </div>
                                            </GoodsBestInfoGridDiv>
                                        </GoodsBestInfoDiv>
                                    </GoodsBest>
                                )
                            })}
                        </GoodsBestList>
                    </GoodsBestListDiv>

                    <form onSubmit={goodsSearch}>
                        <GoodsListOptionDiv>
                            <GoodsListFilterDiv>
                                <div> <input id='selectFilter' type='button' value='판매중 상품'/> </div>
                                <div> <input type='button' value='판매된 상품'/> </div>
                            </GoodsListFilterDiv>

                            <GoodsListSearchDiv>
                                <GoostListSearchStyle>
                                    <div> <img alt='' src='/images/search.png' /> </div>
                                    <div> 
                                        <input type='text' placeholder='제품을 검색해주세요.' maxLength={20} name='search'
                                            ref={searchRef} defaultValue={search}
                                        /> 
                                    </div>
                                </GoostListSearchStyle>

                                <div style={{ 'textAlign' : 'right' }}> 
                                    <GoodsSearchBtn type='submit' value='검색' />
                                </div>
                            </GoodsListSearchDiv>
                        </GoodsListOptionDiv>
                    </form>

                </GoodsMainContentsDiv>
                <div> </div>
            </GoodsMainGridDiv>

            <GoodsListContentsDiv>
                <div> </div>
                <div>
                <GoodsListContents>
                    {goodsList?.fetchUseditems &&
                        <InfiniteScroll
                            loadMore={onloadMore}
                            hasMore={true}
                        >
                            {goodsList?.fetchUseditems?.map( (item, key) => {

                                return(
                                    <GoodsInfo key={key}>
                                        <div>
                                            <GoodsInfoImage alt='' src={`/images/bestGoods_0.png` } />
                                        </div>
                                        <GoodsInfoDiv>
                                            <GoodsInfoName> {item.name} </GoodsInfoName>
                                            <GoodsOptionDiv>
                                                <div>
                                                    <GoodsRemarks> {item.remarks} </GoodsRemarks>
                                                    <GoodsTagInfo>
                                                        {item.tags.map( (tag, key2) => {
                                                            return(
                                                                <span key={key2}>
                                                                    # {tag}
                                                                </span>
                                                            )
                                                        })}
                                                    </GoodsTagInfo>
                                                </div>

                                                <GoodsPriceDiv>
                                                    <div> {setComma(item.price)} 원 </div>
                                                    <div> <img alt='' src='/images/price.png'/> </div>
                                                </GoodsPriceDiv>
                                            </GoodsOptionDiv>

                                            <GoodsSellerInfoDiv>
                                                <GoodsSellerInfo>
                                                    <img alt='' src='/images/profile.png' />
                                                    <GoodsSellerName> {item.seller.name} </GoodsSellerName>
                                                </GoodsSellerInfo>

                                                <GoodsLikeInfo>
                                                    <img alt='' src='/images/like_yellow.png' />
                                                    <span> 20 </span>
                                                </GoodsLikeInfo>
                                            </GoodsSellerInfoDiv>
                                        </GoodsInfoDiv>
                                    </GoodsInfo>
                                )
                            })}
                        </InfiniteScroll>
                    }
                </GoodsListContents>
                <GoodsWriteDiv>
                    <GoodsWriteBtn type='button' value='상품 등록하기' 
                                   onClick={() => router.push('/market/write')}
                    />
                </GoodsWriteDiv>
                </div>

                <GoodsLogDiv>
                    <GoodsLogListDiv>
                        <p> 오늘 본 상품</p>
                        
                    </GoodsLogListDiv>
                </GoodsLogDiv>
            </GoodsListContentsDiv>
        </GoodsMainDiv>
    )
}