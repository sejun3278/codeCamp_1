import { 
    GoodsMainDiv, GoodsMainContentsDiv, GoodsBestListDiv, GoodsBestList, GoodsBest, GoodsBestImage, GoodsBestInfoDiv, GoodsBestName, GoodsBestImageDiv,
    GoodsBestInfoGridDiv, GoodsBestRemarks, GoodsBestPrice, GoodsBestLikeDiv, GoodsListOptionDiv, GoodsListFilterDiv, GoodsListSearchDiv, GoostListSearchStyle, GoodsSearchBtn,
    GoodsListContentsDiv, GoodsMainGridDiv, GoodsListContents, GoodsInfo, GoodsInfoImage, GoodsInfoDiv, GoodsInfoName, GoodsRemarks, GoodsOptionDiv, GoodsTagInfo,
    GoodsSellerInfoDiv, GoodsSellerName, GoodsLikeInfo, GoodsSellerInfo, GoodsPriceDiv, GoodsWriteDiv, GoodsWriteBtn
} from './GoodsList.style';
import { setComma } from '../../../commons/libraries/validations';
// import InfiniteScroll from 'react-infinite-scroller';
import LogList from './log/GoodsLog.container';

export default function GoodsListlUI({
    bestGoods,
    router,
    search,
    searchRef,
    goodsSearch,
    goodsList,
    onloadMore,
    logList,
    ref,
    inView
}) {
    return(
        <GoodsMainDiv>
            <GoodsMainGridDiv>
                <div> </div>
                <GoodsMainContentsDiv> 
                    <GoodsBestListDiv>
                        <h2> 베스트 상품 </h2>

                        <div style={{ 'height' : '300px', 'overflowY' : 'auto' }} ref={ref}>
                            <p> {inView} </p>
                            <div style={{ 'height' : '250px' }}> 1 </div>
                            <div style={{ 'height' : '250px' }}> 2 </div>
                            <div style={{ 'height' : '250px' }}> 3 </div>
                        </div>

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
                <div>
                </div>

                <div >
                    <div style={{ 'borderTop' : 'solid 1px #ababab'}}>

                    <div id='mobileGoodsLogDiv'>
                        <LogList />
                    </div>

                    <div >
                    {goodsList?.fetchUseditems &&
                        // <InfiniteScroll
                        //     // loadMore={onloadMore}
                        //     hasMore={true || false}
                        // >
                        <GoodsListContents onScroll={onloadMore}>
                            {goodsList?.fetchUseditems?.map( (item, key) => {

                                let name = item.name;
                                if(search !== "") {
                                    const originTitle = name;
                                    const start = originTitle.indexOf(search);

                                    name = name.slice(0, start);
                                    name += `<b class='searchFont'> ${originTitle.slice(start, start + search.length)} </b>`;
                                    name += originTitle.slice(start + search.length, originTitle.length);
                                }

                                return(
                                    <GoodsInfo key={key}
                                            onClick={() => router.push('/market/goods/' + item._id)}
                                    >
                                        <div>
                                            <GoodsInfoImage alt='' src={`/images/bestGoods_0.png` } />
                                        </div>
                                        <GoodsInfoDiv>
                                            <GoodsInfoName dangerouslySetInnerHTML={{ __html : name }} />
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
                    </GoodsListContents>

                    // </InfiniteScroll>
                }
                </div>

                </div>
                    {/* } */}

                    <GoodsWriteDiv>
                        <GoodsWriteBtn type='button' value='상품 등록하기' 
                                    onClick={() => router.push('/market/write')}
                        />
                    </GoodsWriteDiv>
                </div>
                
                <div id='webGoodsLogDiv'>
                    <LogList />
                </div>

            </GoodsListContentsDiv>
        </GoodsMainDiv>
    )
}