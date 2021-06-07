import { 
    Wrapper, TitleDiv, HalfGrid, DivGrid, InputDiv,
    InputTitle, InputContents, TextAreaContents, HostDiv, HostNumberDiv,
    HostNumberInput, HostNumberButton, ImageDiv, ImageContents, SetMainDiv, SetMain,
    SelectMain, SelectLabel, ImageDivs, SubmitDiv, Sumbit, ImageAdd, ImageShowDiv, ImageRemoveBtn
} from './BoardWrite.style';
import imageList from '../../../../image.json'

export default function BoardWritePage({
    setState,
    addBoard,
    addAble,
    addImage,
    data,
    removeImage
}) {

    return <Wrapper>
        <DivGrid>
            <div> </div>
            <div>
                <TitleDiv>
                    게시물 등록
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
                                    // defaultValue={inputs.writer}
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
                            ></TextAreaContents>
                        </InputDiv>

                        <InputDiv>
                            <InputTitle> 주소 * </InputTitle>
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

                        <InputDiv style={{ 'marginTop' : '40px' }}>
                            <InputTitle> 유튜브 </InputTitle>
                            <InputContents 
                                type="text"
                                maxLength={100}
                                placeholder="링크를 복사해주세요."
                                name="youtubeUrl"
                                onChange={setState}
                                // defaultValue={youtube}
                                // onChange={(event) => setState(event, 'youtube')}
                            />
                        </InputDiv>

                        <InputDiv style={{ 'marginTop' : '20px' }}>
                            <InputTitle> 사진 첨부 </InputTitle>
                            <ImageDiv>
                                {data.showImages.map( (el : string | null, key : number) => {
                                    return(
                                        <ImageDivs key={key}>
                                            <ImageContents>
                                                <div>
                                                    {/* <button onClick={onClickUpload}> 업로드 !! </button> */}
                                                    <ImageAdd 
                                                        // ref={addImageBtn} 
                                                        type='file' name={String(key)} onChange={addImage} accept=".png"
                                                    />

                                                    {el === null
                                                        ?   <ImageShowDiv>
                                                                <div> + </div>
                                                                <div> Upload </div>
                                                            </ImageShowDiv>

                                                        :   <ImageShowDiv>
                                                                <ImageRemoveBtn alt='' src={imageList.imgRemove} onClick={() => removeImage(key)} />
                                                                <img alt='' src={el} />
                                                            </ImageShowDiv>
                                                    }
                                                </div>
                                            </ImageContents>
                                        </ImageDivs>
                                    )
                                })}
                            </ImageDiv>
                        </InputDiv>

                        <InputDiv style={{ 'marginTop' : '20px' }}>
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
                            <Sumbit type='submit' value="등록하기"
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