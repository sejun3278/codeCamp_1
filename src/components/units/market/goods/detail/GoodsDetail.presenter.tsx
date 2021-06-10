import { 
    GoodsDetailGridDiv, GoodsDetailInfoDiv, GoodsSellerInfoDiv, GoodsSellerInfo, GoodsSellerName, GoodsSellerDate, GoodsInfoDiv,
    GoodsNameAndLikeDiv, GoodsLikeDiv, GoodsRemarks, GoodsName, GoodsPrice, GoodsImageDiv, GoodsThumbnailDiv, GoodsThumbMoveDiv,
    GoodsThumb, GoodsDotsDiv, GoodsDots, GoodsThumbListDiv, GoodsThumbListGridDiv, GoodsSelectImage, GoodsContentsDiv, GoodsTagsDiv, GoodsTag,
    GoodsMapDiv, GoodsOptionDiv
} from './GoodsDetail.style';
import { setComma } from '../../../../../commons/libraries/validations';
// import Slider from 'react-slick';
// import styled from '@emotion/styled';

// // slick 스타일 지정하기 //
// const GoodsImageSlider = styled(Slider) `

// `;
//////////////////////////

// const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrow : true
// };

export default function GoodsDetailUI({
    goodsInfo,
    selectImage,
    thumb
}) {
    return(
        <>
            <GoodsDetailGridDiv>
                <div></div>
                <GoodsDetailInfoDiv>
                    <GoodsSellerInfoDiv>
                        <div> 
                            <img alt='' src='/images/profile.png'/>
                            <GoodsSellerInfo>
                                <GoodsSellerName> { goodsInfo?.seller.name } </GoodsSellerName>
                                <GoodsSellerDate> Date : { goodsInfo?.createdAt.slice(0, 10) } </GoodsSellerDate>
                            </GoodsSellerInfo>
                        </div>
                        {/* <div> 345 </div> */}
                    </GoodsSellerInfoDiv>

                    <GoodsInfoDiv>
                        <GoodsNameAndLikeDiv>
                            <div>
                                <GoodsRemarks> {goodsInfo?.remarks} </GoodsRemarks>
                                <GoodsName> {goodsInfo?.name} </GoodsName>
                            </div>

                            <GoodsLikeDiv>
                                <img alt='' src='/images/like_yellow.png'/>
                                <div> 20 </div>
                            </GoodsLikeDiv>
                        </GoodsNameAndLikeDiv>

                        <GoodsPrice>
                            {goodsInfo?.price && setComma(goodsInfo?.price)} 원
                        </GoodsPrice>

                        <GoodsImageDiv>
                            <GoodsThumbnailDiv>
                                <GoodsThumbMoveDiv> <img alt='' src='/images/goodsThumb_prev.png' onClick={() => selectImage('prev', false)} /> </GoodsThumbMoveDiv>
                                <GoodsThumb> <img alt='' src={`/images/goodsThumb_${thumb}.png`} /></GoodsThumb>
                                <GoodsThumbMoveDiv> <img alt='' src='/images/goodsThumb_next.png' onClick={() => selectImage('next', false)}/> </GoodsThumbMoveDiv>
                            </GoodsThumbnailDiv>

                            <GoodsDotsDiv>
                                {new Array(4).fill(0).map( (_, key) => {
                                    return(
                                        <GoodsDots key={key}>
                                            <img alt='' src={key === thumb ? '/images/dot_on.png' : '/images/dot_off.png' }
                                                 onClick={() => selectImage('change', key)}
                                            />

                                            {/* <img alt='' src='/images/dot_off.png' /> */}
                                        </GoodsDots>
                                    )
                                })}
                            </GoodsDotsDiv>
                            
                            <GoodsThumbListGridDiv>
                                <div> </div>
                                <GoodsThumbListDiv>
                                    {new Array(4).fill(0).map( (_, key) => {
                                        return(
                                            <div key={key}>
                                                {thumb === key &&
                                                    <GoodsSelectImage src='/images/selectThumb.png' />
                                                }
                                                <img alt='' src={`/images/goodsThumb_${key}.png`} 
                                                     onClick={() => selectImage('change', key)}
                                                />
                                            </div>
                                        )
                                    })}
                                </GoodsThumbListDiv>
                                <div> </div>
                            </GoodsThumbListGridDiv>
                        </GoodsImageDiv>

                        <GoodsContentsDiv 
                            dangerouslySetInnerHTML={{ __html : goodsInfo?.contents }}
                        />

                        <GoodsTagsDiv>
                            {goodsInfo?.tags &&
                                goodsInfo.tags.map( (tag, key) => {
                                    return(
                                        <GoodsTag key={key}>
                                            # {tag}
                                        </GoodsTag>
                                    )
                                })
                            }
                        </GoodsTagsDiv>

                        <GoodsMapDiv>
                            <img alt='' src='/images/map.png' />
                        </GoodsMapDiv>
                    </GoodsInfoDiv>

                    <GoodsOptionDiv>
                        <input type='button' value='목록으로' />
                        <input type='button' value='수정하기' />
                    </GoodsOptionDiv>
                </GoodsDetailInfoDiv>
                <div></div>
            </GoodsDetailGridDiv>
        </>
    )
}