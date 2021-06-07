import {
    ReplyListDiv, ReplyTitle, ReplyWriteIcon, ReplyWriteDiv,
    ReplyWriterInfo, ReplyWriterRatingDiv, ReplyWriteContentsDiv, ReplyWriterInfoDiv, ReplyOptionaryDiv, ReplyLimit, ReplyWriteSumbit, ReplyWriterRating,
    ReplyListContents, ReplyList, ReplyListInfoDiv, ReplyListThumbDiv, ReplyWriteListInfoDiv, ReplyWriterName,
    ReplyWriterListInfo, ReplyListRating, ReplyListOption, ReplyListContent, ReplyDate, ModalDiv, ModalTypeName,
    ModalPasswordDiv, ModalPasswordInput, ModalPasswordSubmit
} from './Reply.style';
import InfiniteScroll from 'react-infinite-scroller';
import Modal from 'react-modal';

const modalStyles = {
    content : {
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth              : '380px'
    }
};
Modal.setAppElement('body');

export default function BoardReplyPage({
    imageList,
    initRating,
    saveReplyWriterInfo,
    addReply,
    replyAble,
    replyList,
    onloadMore,
    input,
    modal,
    toggleModals,
    setConfirmPassword,
    confirmPassword,
    removeReply,
    passInput,
    initModifyTarget,
    modifyTarget,
    modfiyReplyInput,
    replyModifyAble,
    modifyReply
}) {
    return(
        <ReplyListDiv>
            <ReplyTitle>
                <ReplyWriteIcon alt='' src={imageList.replyWrite} />
                <b> 댓글 </b>
            </ReplyTitle>

            <ReplyWriteDiv>
                <ReplyWriterInfoDiv>
                    <div> <ReplyWriterInfo value={input.writer} type='text' maxLength={15} placeholder='작성자' name='writer' onChange={(event) => saveReplyWriterInfo(event)} /> </div>
                    <div> <ReplyWriterInfo value={input.password} type='password' maxLength={15} placeholder='비밀번호' name='password' onChange={(event) => saveReplyWriterInfo(event)} /> </div>
                    <ReplyWriterRatingDiv>
                        {initRating.map( (_, key) => {
                            return(
                                <ReplyWriterRating key={key} onClick={(event) => saveReplyWriterInfo(event, key + 1)}
                                    style={key + 1 <= input.rating ? { 'color' : '#FFD600' }  : undefined}
                                >
                                    <img alt='' src={key + 1 <= input.rating ? imageList.star : imageList.emptyStar} />
                                    {/* {key + 1 <= rating ? '★' : '☆'} */}
                                </ReplyWriterRating>
                            )
                        })}
                    </ReplyWriterRatingDiv>
                </ReplyWriterInfoDiv>

                <ReplyWriteContentsDiv>
                    <textarea maxLength={100} value={input.contents} name='contents' placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={(event) => saveReplyWriterInfo(event)}></textarea>
                    <ReplyOptionaryDiv>
                        <ReplyLimit> {input.contents.length} / 100 </ReplyLimit>
                        <ReplyWriteSumbit type='button' value='등록하기' onClick={addReply}  
                            style={replyAble === true ? { 'backgroundColor' : '#FFD600', 'color' : 'black' } : undefined}
                        />
                    </ReplyOptionaryDiv>
                </ReplyWriteContentsDiv>
            </ReplyWriteDiv>

            <ReplyListContents>
                <InfiniteScroll
                    loadMore={onloadMore}
                    hasMore={true}
                    // height={600}
                >
                {replyList.map( (el, key) => {
                    const ratingArr = new Array(5).fill(key + 1);
                    const replyRating = el.rating;

                    return(
                        <ReplyList key={key}>

                            {key !== modifyTarget
                            ?
                                <ReplyListInfoDiv>
                                    <ReplyListThumbDiv>
                                        <img alt='' src={imageList.thumbnail} />
                                    </ReplyListThumbDiv>

                                    <ReplyWriteListInfoDiv>
                                        <ReplyWriterListInfo>
                                            <ReplyWriterName> {el.writer} </ReplyWriterName>
                                            <ReplyListRating>  
                                                {ratingArr.map( (_, key2) => {
                                                    return(
                                                        <div key={key2}>
                                                            <img alt='' src={key2 + 1 <= replyRating ? imageList.star : imageList.emptyStar } />
                                                        </div>
                                                    )
                                                })}
                                            </ReplyListRating>
                                            <ReplyListOption>
                                                <img alt='' src={modifyTarget !== key ? imageList.modify : imageList.modifyOn} title='수정하기' onClick={() => initModifyTarget(key)} />
                                                <img alt='' src={imageList.remove} title='삭제하기' onClick={() => toggleModals(key)} />
                                            </ReplyListOption>
                                        </ReplyWriterListInfo>
                                        
                                        <ReplyListContent dangerouslySetInnerHTML={{ __html : el.contents }}/>
                                        <ReplyDate dangerouslySetInnerHTML={{ __html : el.createdAt.slice(0, 10) }} />
                                    </ReplyWriteListInfoDiv>
                                </ReplyListInfoDiv>

                            : 
                            /* 수정하기 */
                            <ReplyWriteDiv>
                                <ReplyWriterInfoDiv>
                                    <div> <ReplyWriterInfo readOnly disabled value={modfiyReplyInput.writer} type='text' maxLength={15} placeholder='작성자' name='writer' /> </div>
                                    <div> <ReplyWriterInfo type='password' maxLength={15} placeholder='비밀번호' name='password' onChange={(event) => saveReplyWriterInfo(event, false, true)} /> </div>
                                    <ReplyWriterRatingDiv>
                                        {initRating.map( (_, key) => {
                                            return(
                                                <ReplyWriterRating key={key} onClick={(event) => saveReplyWriterInfo(event, key + 1, true)}
                                                    style={key + 1 <= modfiyReplyInput.rating ? { 'color' : '#FFD600' }  : undefined}
                                                >
                                                    <img alt='' src={key + 1 <= modfiyReplyInput.rating ? imageList.star : imageList.emptyStar} />
                                                    {/* {key + 1 <= rating ? '★' : '☆'} */}
                                                </ReplyWriterRating>
                                            )
                                        })}
                                    </ReplyWriterRatingDiv>
                                </ReplyWriterInfoDiv>
                
                                <ReplyWriteContentsDiv>
                                    <textarea maxLength={100} defaultValue={modfiyReplyInput.contents} name='contents' placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={(event) => saveReplyWriterInfo(event, false, true)}></textarea>
                                    <ReplyOptionaryDiv>
                                        <ReplyLimit> {modfiyReplyInput.contents.length} / 100 </ReplyLimit>

                                        <ReplyWriteSumbit type='button' value='수정하기' onClick={modifyReply}
                                            style={replyModifyAble === true ? { 'backgroundColor' : '#FFD600', 'color' : 'black' } : undefined}
                                        />
                                        <ReplyWriteSumbit type='button' value='취소' onClick={() => modifyReply(true)} />
                                    </ReplyOptionaryDiv>
                                </ReplyWriteContentsDiv>
                            </ReplyWriteDiv>

                        }

                        </ReplyList>
                    )
                })}
                </InfiniteScroll>

                <Modal
                    isOpen={modal}
                    onRequestClose={() => toggleModals()}
                    style={modalStyles}
                    contentLabel="Example Modal"
                >
                    <ModalDiv>
                        <ModalTypeName> 
                            댓글 삭제
                        </ModalTypeName>

                        <form onSubmit={removeReply}>
                            <ModalPasswordDiv>
                                <div >비밀번호 입력 </div> 
                                <ModalPasswordInput ref={passInput} onChange={(event) => setConfirmPassword(event)} type='password' maxLength={20} placeholder='비밀번호를 입력해주세요.'/>
                            </ModalPasswordDiv>

                            <ModalPasswordSubmit type='submit' value='삭제 확인' style={confirmPassword.length > 0 ? { 'backgroundColor' : 'black', 'color' : 'white' } : undefined} />
                        </form>
                    </ModalDiv>
                </Modal>
            </ReplyListContents>

        </ReplyListDiv>
    )
}