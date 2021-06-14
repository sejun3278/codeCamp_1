import {  
    GoodsRecommentDiv, GoodsRecomment, GoodsRecommentInfo, GoodsRecommentWriterInfo, GoodsRecommentArrow,
    GoodsAnswerIconDiv
} from './GoodsRecomment.style';

const GoodsRecommentUI = function({
    answerData
}) {
    return(
        <GoodsRecommentDiv>
            {answerData?.fetchUseditemQuestionAnswers
                && answerData?.fetchUseditemQuestionAnswers.map( (el, key) => {
                    console.log(el)
                    return(
                        <GoodsRecomment key={key}>
                            <div> <GoodsRecommentArrow alt='' src='/images/answer_arrow.png' /> </div>
                            <GoodsRecommentInfo>
                                <img alt='' src='/images/profile.png'/>
                                <GoodsRecommentWriterInfo> 
                                    <div> <b> {el.user.name} </b> </div>
                                    <div> <b> 2 </b> {el.contents} </div>
                                </GoodsRecommentWriterInfo>
                            </GoodsRecommentInfo>

                            <GoodsAnswerIconDiv>
                                <img alt='' src='/images/answer.png'/>
                            </GoodsAnswerIconDiv>
                        </GoodsRecomment>
                    )
                })
            }
        </GoodsRecommentDiv>
    )
} 

export default GoodsRecommentUI;