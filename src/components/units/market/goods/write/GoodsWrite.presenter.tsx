import {
    MarketWriteDiv, MarketWriteWinodwDiv, MarketWriteTitle, MarketContentsGridDiv, MarketWriteContentsDiv, MarketWriteContents, Title,
    MarketMapGridDiv, MarketMapDiv, MarketMapOptionalDiv, MarketHostDiv, MarketMainThumbSelect, MarketWriteBtn, MarketWriteBtnDiv,
    MarketThumbDiv, MarketThumbShowDiv, MarketThumb, MarketThumbnailShow, RemoveThumbnail, SelectMainThumbDiv

} from './GoodsWrite.style';
import React from 'react';
import imageList from '../../../../../../image.json';

import 'react-quill/dist/quill.snow.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Map from '../map/Map.presenter';

export default function MarketWrite({
    changeInput,
    addGoods,
    able,
    nameRef,
    showImages,
    addFile,
    removeFile,
    formRef,
    remarksRef,
    contentsRef,
    priceRef,
}) {
    return(
        <MarketWriteDiv>
            <div></div>
            <MarketWriteWinodwDiv>
                <MarketWriteTitle>
                    상품 등록하기
                </MarketWriteTitle>

                <MarketContentsGridDiv>
                    <div></div>
                    <form onSubmit={addGoods} ref={formRef}>
                        <MarketWriteContentsDiv>

                            <MarketWriteContents>
                                <Title> 상품명 * </Title>
                                <input ref={nameRef} type='text' name='name' placeholder='상품명을 작성해주세요.' maxLength={50} onChange={changeInput} />
                            </MarketWriteContents>

                            <MarketWriteContents>
                                <Title> 한줄요약 * </Title>
                                <input ref={remarksRef} type='text' name='remarks' placeholder='한줄로 설명할 문구를 작성해주세요.' maxLength={50} onChange={changeInput} />
                            </MarketWriteContents>

                            <MarketWriteContents style={{ 'minHeight' : '250px' }}>
                                <Title> 상품 설명 * </Title>
                                {/* <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p></p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={(event, data ) => changeInput(event, true, data)}
                                /> */}
                                {/* <textarea ref={contentsRef} name='contents' placeholder='상품 설명을 입력해주세요.' onChange={changeInput}></textarea> */}
                            </MarketWriteContents>

                            <MarketWriteContents style={{ 'marginTop' : '50px' }}>
                                <Title> 판매가격 * </Title>
                                <input ref={priceRef} type='number' name='price' placeholder='판매 가격을 입력해주세요.' min={0} onChange={changeInput}/>
                            </MarketWriteContents>

                            <MarketWriteContents>
                                <Title> 태그 입력 </Title>
                                <input type='text' name='tags' placeholder='#태그 #태그 #태그' maxLength={100} onChange={changeInput}/>
                            </MarketWriteContents>

                            <MarketWriteContents>
                                <MarketMapGridDiv>
                                    <MarketMapDiv>
                                        <Title> 거래 위치 </Title>
                                        <div>
                                            <Map />
                                        </div>
                                    </MarketMapDiv>

                                    <div>
                                        <MarketMapOptionalDiv>
                                            <Title> GPS </Title>
                                            <input type='text' maxLength={5} placeholder='위도' />
                                            <img alt='' src='/images/map_marker.png' />
                                            <input type='text' maxLength={5} placeholder='경도' />
                                        </MarketMapOptionalDiv>

                                        <MarketHostDiv>
                                            <Title> 주소 </Title>
                                            <input type='text' name='host' maxLength={60} />
                                            <input type='text' name='detailHost' maxLength={60} />
                                        </MarketHostDiv>
                                    </div>
                                </MarketMapGridDiv>
                            </MarketWriteContents>

                            <MarketWriteContents style={{ 'marginTop' : '65px' }}>
                                <Title> 사진 첨부 <b> ( {showImages.length} / 2 ) </b></Title>
                                {showImages.map( (image, key) => {

                                    return(
                                        <MarketThumbDiv key={key} style={{ 'backgroundImage' : `url(${image})` }}>
                                            <MarketThumb style={{ 'textAlign' : 'right' }}>
                                                <RemoveThumbnail alt='' src={imageList.imgRemove} onClick={() => removeFile(key)}/>
                                            </MarketThumb>
                                        </MarketThumbDiv>
                                    )
                                })}

                                {new Array(2 - showImages.length).fill(null).map( (_, key) => {
                                    return(
                                        <MarketThumbDiv key={key}>
                                            <MarketThumb>
                                                <label htmlFor={`thumb_${key}`}>
                                                    <MarketThumbShowDiv>
                                                        <div>
                                                            <div> + </div>
                                                            <div> Upload </div>
                                                        </div>
                                                    </MarketThumbShowDiv>
                                                </label>
                                                <input accept=".png" type='file' id={`thumb_${key}`} onChange={addFile} multiple />
                                            </MarketThumb>
                                        </MarketThumbDiv>
                                    )
                                })}
                            </MarketWriteContents>

                            <MarketWriteContents style={{ 'marginTop' : '85px' }}>
                                <SelectMainThumbDiv>
                                    <Title> 메인 사진 설정 </Title>
                                    <MarketMainThumbSelect>
                                        <div> 
                                            <input type='radio' name='mainThumb' defaultChecked id='mainThumb_1'/>
                                            <label htmlFor='mainThumb_1'> 사진 1</label>
                                        </div>

                                        <div> 
                                            <input type='radio' name='mainThumb' id='mainThumb_2'/>
                                            <label htmlFor='mainThumb_2'> 사진 2</label>
                                        </div>
                                    </MarketMainThumbSelect>
                                </SelectMainThumbDiv>
                            </MarketWriteContents>
                            
                            <MarketWriteBtnDiv>
                                <MarketWriteBtn type='submit' value='등록하기'
                                    style={able === true ? { 'backgroundColor' : '#FFD600' } : undefined}
                                />
                            </MarketWriteBtnDiv>

                        </MarketWriteContentsDiv>
                    </form>
                    <div></div>
                </MarketContentsGridDiv>

            </MarketWriteWinodwDiv>
            <div></div>
        </MarketWriteDiv>
    )
}