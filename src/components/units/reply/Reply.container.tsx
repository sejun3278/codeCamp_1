import ReplyUI from './Reply.presenter';
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './Reply.queries';
import {
    //   ChangeEvent,
    //   ChangeEventHandler,
    //   RefObject,
      useEffect,
      useRef,
      useState,
} from "react";
import { fromPromise, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const initionl = {
    writer : "",
    password : "",
    contents : "",
    rating : 0
};

export default function ReplyPage () {
    const boardId = useRouter().query.id;

    const [ input, setInput ] = useState(initionl)
    const [ page, setPage ] = useState(1);
    const [ modal, toggleModal ] = useState(false);

    const [ confirmPassword, setConfirm ] = useState("");
    const [ removeTarget, setRemoveTarget ] = useState({});

    const [ modifyTarget, setModifyTarget ] = useState(null);
    const [ modfiyReply, setModfiyReply ] = useState(input);

    const [ replyAble, setReplyAble ] = useState(false);
    const [ replyModifyAble, setReplyModifyAble ] = useState(false);
    const imageList = require('../../../../image.json');

    const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT);
    const [ deleteBoardComment ] = useMutation(DELETE_BOARD_COMMENT);
    const [ updateBoardComment ] = useMutation(UPDATE_BOARD_COMMENT);
    
    // 댓글 리스트 조회하기
    const { loading, data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
        variables : {
            page : page,
            boardId : boardId
        }
    })

    // 댓글 작성 정보 저장하기
    const saveReplyWriterInfo = (event, score, modify) => {
        const newInput = !modify ? { ...input } : { ...modfiyReply };

        if(!score) {
            const typeNames = event.target.name;
            newInput[typeNames] = event.target.value.trim();

        } else {
            newInput['rating'] = score;
        }
        modify ? setModfiyReply(newInput) : setInput(newInput);

        let able = false;
        if(
            newInput.writer.length > 0 &&
            newInput.password.length > 0 &&
            newInput.contents.length > 0 &&
            newInput.rating > 0
        ) {
            able = true;
        }

        modify ? setReplyModifyAble(able) : setReplyAble(able);
    }

    // 댓글 등록하기
    const addReply = async () => {
        if(input.writer.length === 0) {
            document.getElementsByName('writer')[0].focus();
            return alert('작성자를 입력해주세요.');
            
        } else if(input.password.length === 0) {
            document.getElementsByName('password')[0].focus();
            return alert('비밀번호를 입력해주세요.');
        
        } else if(input.rating === 0) { 
            return alert('게시물의 평점을 선택해주세요.');

        } else if(input.contents.trim().length === 0) {
            document.getElementsByName('contents')[0].focus();
            return alert('내용을 1 글자 이상 입력해주세요.');

        } else {
            if(replyAble === true) {
                try {
                    await createBoardComment({
                        variables : {
                            createBoardCommentInput : {
                                writer : input.writer,
                                contents : input.contents,
                                password : input.password,
                                rating : input.rating
                            },
                            boardId : boardId
                        },
                            refetchQueries : [{ 
                                query : FETCH_BOARD_COMMENTS,
                                variables : {
                                    page : page,
                                    boardId : boardId
                                }
                            }]
                    })

                    alert('댓글 등록이 완료되었습니다.');

                    // state 초기화
                    setInput(initionl);

                    // 등록버튼 off
                    setReplyAble(false);


                } catch(error) {
                    alert('댓글 등록에 실패했습니다.');
                    console.log(error)
                    return;
                }
            }
        }
    }

    // 평점 등록을 위한 배열 구성
    const initRating = new Array(5).fill(null);

    const onloadMore = () => {
        if( (data?.fetchBoardComments.length % 10) !== 0) { return };
        fetchMore({
            variables : { 
                // page : page + 1
                page : Math.floor(data?.fetchBoardComments.length / 10) + 1 
        },
            updateQuery : (prev, { fetchMoreResult }) => ( {
                fetchBoardComments : [ 
                    ...prev.fetchBoardComments, 
                    ...fetchMoreResult.fetchBoardComments 
                ]
            })
        })
    }

    // Modal on / off
    const toggleModals = (idx) => {
        toggleModal(!modal)

        if(modal) {
            // 창 닫기
            setConfirm("");

        } else setRemoveTarget(data?.fetchBoardComments[idx]);
    }

    // 삭제 또는 수정 패스워드 저장하기
    const setConfirmPassword = (event) => {
        const confirmPassword = event.target.value.trim();
        setConfirm(confirmPassword);
    }

    const passInput = useRef<HTMLInputElement>();
    // 댓글 삭제하기
    const removeReply = async (event) => {
        event.preventDefault();

        if(confirmPassword.length === 0) { 
            passInput.current.focus();
            return alert('비밀번호를 입력해주세요.');

        } else {
            try {
                await deleteBoardComment({
                    variables : {
                        password : confirmPassword,
                        boardCommentId : removeTarget['_id']
                    },

                    refetchQueries : [{ 
                        query : FETCH_BOARD_COMMENTS,
                        variables : {
                            page : page,
                            boardId : boardId
                        }
                    }]
                })

                alert('댓글이 삭제되었습니다.');
                toggleModals(null);
                setModifyTarget(null);

            } catch(error) {
                alert(error);
                return console.log(error);
            }
        }
    }

    // 댓글 수정 대상 저장하기
    const initModifyTarget = (idx) => {
        if(modifyTarget !== idx) {
            setModifyTarget(idx);

            const saveData = { ...data?.fetchBoardComments[idx] };

            // 비밀번호 추가
            saveData['password'] = '';

            setModfiyReply(saveData);

        } else {
            setModifyTarget(null);
            setModfiyReply(input);
        }
    }

    // 댓글 수정하기
    const modifyReplyFn = async () => {
        if(replyModifyAble === false) {
            return alert('빈칸을 모두 입력해주세요.');
        }

        console.log(boardId, page)

        try {
            await updateBoardComment({
                variables : {
                    password : modfiyReply.password,
                    boardCommentId : modfiyReply['_id'],
                    updateBoardCommentInput : {
                        contents : modfiyReply.contents,
                        rating : modfiyReply.rating
                    }
                },

                refetchQueries : [{ 
                    query : FETCH_BOARD_COMMENTS,
                    variables : {
                        page : page,
                        boardId : boardId
                    }
                }]
            })

            alert('수정이 완료되었습니다.');

            setModifyTarget(null);
            setModfiyReply(input);

        } catch(error) {
            alert(error);
            return console.log(error);
        }
    }

    if(loading === false) {    
        return( 
            <ReplyUI 
                imageList={imageList}
                addReply={addReply}
                replyAble={replyAble}
                initRating={initRating}
                saveReplyWriterInfo={saveReplyWriterInfo}
                replyList={data.fetchBoardComments}
                onloadMore={onloadMore}
                input={input}
                modal={modal}
                toggleModals={toggleModals}
                setConfirmPassword={setConfirmPassword}
                confirmPassword={confirmPassword}
                removeReply={removeReply}
                passInput={passInput}
                initModifyTarget={initModifyTarget}
                modifyTarget={modifyTarget}
                modfiyReplyInput={modfiyReply}
                replyModifyAble={replyModifyAble}
                modifyReply={modifyReplyFn}
            />
        )

    } else {
        return(
            <div />
        )
    }
}