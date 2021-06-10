import { 
    GoodsCommentDiv, GoodsComment, GoodsCommentTitle, GoodsWriteDiv, GoodsTextOptionDiv
} 
from './GoodsComment.style';

export default function GoodsCommentPage({
    comment,
    setComment,
    addQuestion
}) {
    return(
        <GoodsCommentDiv>
            <div> </div>
            <GoodsComment>
                <GoodsCommentTitle>
                    <img alt='' src='/images/questionIcon.png'/>
                    <b> 문의하기 </b>
                </GoodsCommentTitle>

                <GoodsWriteDiv>
                    <form onSubmit={addQuestion}>
                        <textarea maxLength={100} onChange={(event) => setComment(event.target.value.trim())} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'></textarea>
                        <GoodsTextOptionDiv>
                            <div> {comment.length} / 100 </div>
                            <div> <input type='sumbit' defaultValue='문의하기' style={comment.length > 0 ? { 'backgroundColor' : '#FFD600', 'color' : 'black' } : undefined} /> </div>
                        </GoodsTextOptionDiv>
                    </form>
                </GoodsWriteDiv>
            </GoodsComment>
            <div> </div>
        </GoodsCommentDiv>
    )
}