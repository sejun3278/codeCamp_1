import { 
    Wrapper, TitleDiv, HalfGrid, DivGrid, InputDiv,
    InputTitle, InputContents, TextAreaContents, HostDiv, HostNumberDiv,
    HostNumberInput, HostNumberButton, SetMainDiv, SetMain, SelectMain, SelectLabel, SubmitDiv, Sumbit,
    ImageAddDiv, ImageDiv, AddImageShowDiv, ImageRemoveBtn

} from './BoardWrite.style';
import imageList from '../../../../../image.json'

export default function BoardWritePage({
    setState,
    addBoard,
    addAble,
    addImage,
    data,
    showImage,
    removeImage,
    editMode,
    boardInfo
}) {

    return <Wrapper>
        <DivGrid>
            <div> </div>
            <div>
                <TitleDiv>
                    {editMode === false ? '게시물 등록' : '게시물 수정'}
                </TitleDiv>

                <div>
                    <form onSubmit={addBoard} name='inputs'>
                        <HalfGrid>
                            <InputDiv style={{ 'marginRight' : '15px' }}> 
                                <InputTitle> 작성자 * </InputTitle>
                                <InputContents
                                    type="text"
                                    maxLength={30}
                                    placeholder="이름을 적어주세요."
                                    name="writer"
                                    onChange={setState}
                                    defaultValue={data.writer}
                                    disabled={editMode === true}
                                    readOnly={editMode === true}
                                />
                            </InputDiv>

                            <InputDiv> 
                                <InputTitle> 비밀번호 * </InputTitle>
                                <InputContents 
                                    type="password"
                                    maxLength={20}
                                    placeholder="비밀번호를 적어주세요."
                                    name="password"
                                    onChange={setState}
                                    // defaultValue={password}
                                />
                            </InputDiv>
                        </HalfGrid>

                        <InputDiv> 
                            <InputTitle> 제목 * </InputTitle>
                            <InputContents 
                                type="text"
                                maxLength={100}
                                placeholder="제목을 적어주세요."
                                name="title"
                                onChange={setState}
                                defaultValue={data.title}
                                // defaultValue={title}
                                    // onChange={(event) => setState(event, 'title')}
                            />
                        </InputDiv>

                        <InputDiv> 
                            <InputTitle> 내용 * </InputTitle>
                            <TextAreaContents
                                placeholder="내용을 적어주세요."
                                name="contents"
                                onChange={setState}
                                // onChange={(event) => setState(event, 'contents')}
                                // defaultValue={contents}
                                maxLength={500}
                                defaultValue={data.contents}

                            ></TextAreaContents>
                        </InputDiv>

                        <InputDiv style={{ 'marginTop' : '30px' }}>
                            <InputTitle> 주소 </InputTitle>
                            <HostDiv>
                                <div>
                                    <HostNumberDiv> 
                                        <HostNumberInput 
                                            type="text"
                                            name="zipcode"
                                            onChange={setState}
                                            maxLength={5}
                                        /> 
                                    </HostNumberDiv>

                                    <HostNumberDiv> 
                                        <HostNumberButton 
                                            type='button'
                                            value='우편번호 검색'
                                            style={{ 'width' : '110px' }}
                                        /> 
                                     </HostNumberDiv>
                                </div>

                                    <InputContents 
                                        style={{ 'marginTop' : '10px' }}
                                        type="text"
                                        maxLength={40}
                                        name="host"
                                        onChange={setState}
                                    />

                                    <InputContents 
                                        style={{ 'marginTop' : '8px' }}
                                        type="text"
                                        maxLength={40}
                                        name="host_detail"
                                        onChange={setState}
                                        // defaultValue={hostDetail}
                                        // onChange={(event) => setState(event, 'hostDetail')}
                                    />
                            </HostDiv>
                        </InputDiv>

                        <InputDiv style={{ 'marginTop' : '50px' }}>
                            <InputTitle> 유튜브 </InputTitle>
                            <InputContents 
                                type="text"
                                maxLength={100}
                                placeholder="링크를 복사해주세요."
                                name="youtubeUrl"
                                onChange={setState}
                                defaultValue={data.youtubeUrl}
                                // onChange={(event) => setState(event, 'youtube')}
                            />
                        </InputDiv>

                        <InputDiv style={{ 'marginTop' : '10px' }}>
                            <InputTitle> 사진 첨부 <b> ( {showImage.length} / 3 ) </b> </InputTitle>
                            <ImageAddDiv>
                                {showImage.map( (images, key) => {
                                    return(
                                        <ImageDiv key={key}
                                            style={{ 'backgroundImage' : `url(${images})`  }}
                                        >
                                            <ImageRemoveBtn onClick={() => removeImage(key)} alt='' src={imageList.imgRemove} />
                                        </ImageDiv>
                                    )
                                })}

                                {new Array(3 - showImage.length).fill(null).map( (_, key) => {
                                    return( 
                                        <ImageDiv key={key}>
                                            <label htmlFor={`file_${key}`}>
                                                <AddImageShowDiv>
                                                    <div> + </div>
                                                    <div> Upload </div>
                                                </AddImageShowDiv>
                                            </label>
                                            <input 
                                                accept='.png'
                                                type='file' 
                                                id={`file_${key}`}
                                                onChange={addImage}
                                                multiple
                                            />
                                        </ImageDiv>
                                    )
                                })}

                            </ImageAddDiv>
                        </InputDiv>

                        <InputDiv style={{ 'marginTop' : '40px' }}>
                            <InputTitle> 메인 설정 </InputTitle>
                            <SetMainDiv>
                                <SetMain> 
                                    <SelectMain 
                                        type='radio'
                                        name="main"
                                        id="youtube"
                                        defaultChecked
                                    />
                                    <SelectLabel htmlFor="youtube">유튜브</SelectLabel>
                                </SetMain>

                                <SetMain> 
                                    <SelectMain 
                                        type='radio'
                                        name="main"
                                        id="photo"
                                    />
                                    <SelectLabel htmlFor="photo">사진</SelectLabel>
                                </SetMain>
                            </SetMainDiv>
                        </InputDiv>

                        <SubmitDiv>
                            <Sumbit type='submit' value={editMode === true ? '수정하기' : '등록하기'}
                                style={addAble === true ? { 'cursor' : 'pointer' } : { 'cursor' : 'not-allowed' } }
                                color={addAble === true ? "#FFD600" : "#bbb"}
                            />
                        </SubmitDiv>
                    </form>
                </div>
            </div>
            <div> </div>
        </DivGrid>
    </Wrapper>
}