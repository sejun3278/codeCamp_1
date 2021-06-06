import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './BoardDetail.queries';
import {
    //   ChangeEvent,
    //   ChangeEventHandler,
    //   RefObject,
      useEffect,
    //   useRef,
      useState,
} from "react";
import { fromPromise, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function BoardDetailPage () {
    const boardId = useRouter().query.id;
    const imageList = require('../../../../image.json');

    const { data, loading, refetch } = useQuery(FETCH_BOARD, {
        variables : { boardId : boardId }
    });

    const [ likeBoard ] = useMutation(LIKE_BOARD);
    const [ dislikeBoard ] = useMutation(DISLIKE_BOARD);

    if(loading === false) {
        const contents = (data.fetchBoard.contents).replaceAll("\n\n", "<br/>");

        // 라이크 및 싫어요 누르기
        const ToggleLikeOrdisLike = async (type) => {
            if(type === true) {
                // 좋아요 클릭
                await likeBoard({
                    variables : {
                        boardId : boardId
                    }
                })

                refetch()

            } else if(type === false) {
                // 싫어요 클릭
                await dislikeBoard({
                    variables : {
                        boardId : boardId
                    }
                  
                })
                refetch()
            }
        }

        return(
            <BoardDetailUI 
                boardInfo={data.fetchBoard}
                imageList={imageList}
                contents={contents}
                // replyCount={replyCount}
                // checkReplyCount={checkReplyCount}
                // saveReplyWriterInfo={saveReplyWriterInfo}
                ToggleLikeOrdisLike={ToggleLikeOrdisLike}
                // likeCount={likeCount}
                // dislikeCount={dislikeCount}
                // addReply={addReply}
                // replyAble={replyAble}
                // initRating={initRating}
                // rating={rating}
            />
        )

    } 
    else {
        return null;
    }
}