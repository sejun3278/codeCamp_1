import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPLOAD_FILE, FETCH_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';

import { useRouter } from 'next/router';
import { checkImage } from '../../../../commons/libraries/validations';
import { getStorageUrl } from '../../../../commons/libraries/utils';

let dataInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl : "",
  images : [],
  showImages : []
};

export default function BoardWritePage() {
    const router = useRouter();
    const boardId = router.query.id;

    // 수정 모드인지 확인한다.
    const editMode = router.pathname.includes('edit');

    const { data : boardInfo, loading } = useQuery(FETCH_BOARD, {
        variables : {
            boardId : boardId
        }
    })

    if(loading === false) {
        const info = boardInfo?.fetchBoard;

        if(info) {
            dataInit['writer'] = info?.writer;
            dataInit['title'] = info?.title;
            dataInit['contents'] = info?.contents;
            dataInit['youtubeUrl'] = info?.youtubeUrl;
            dataInit['images'] = info?.images;
            dataInit['showImages'] = info?.images;
        }
    }

    const [dataList, setData] = useState(dataInit);
    const [addAble, setAble] = useState(false);
    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ uploadFile ] = useMutation(UPLOAD_FILE);
    const [ updateBoard ] = useMutation(UPDATE_BOARD);

    const setState = (event) => {
        const input = { ...dataList };

        let value = event.target.value.trim();
        if(event.target.name === 'contents') {
            // 내용 줄바꿈
            value = value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        }

        input[event.target.name] = value;
        setData(input)

        const able =
            (
                input?.writer?.length > 0 &&
                input?.password?.length > 0 &&
                input?.title?.length > 0 &&
                input?.contents?.length > 0
            )
        setAble(able);
    }

    const addBoard = async (event) => {
        event.preventDefault();

        try{
            if(addAble === false) {
                // 등록 불가일 때
                return alert('비어있는 항목을 모두 채워주세요.');

            } else {
                // 이미지 배열에서 null 값 제외하기
                // const images = dataList.images.filter( (el) => { return el !== null })

                if(editMode === false) {
                    const add = await createBoard({
                        variables : {
                            createBoardInput : {
                                writer : dataList.writer,
                                password : dataList.password,
                                title : dataList.title,
                                contents : dataList.contents,
                                youtubeUrl : dataList.youtubeUrl,
                                images : dataList.images
                            }
                        }
                    });

                    alert('게시물 등록이 완료되었습니다.');
                    router.push(`/board/${add.data?.createBoard._id}`);

                } else {
                    const update = await updateBoard({
                        variables : {
                            updateBoardInput : {
                                title : dataList.title,
                                contents : dataList.contents,
                                youtubeUrl : dataList.youtubeUrl,
                                images : dataList.images
                            },
                            paasword : dataList.password,
                            boardId : boardId
                        }
                    })

                    alert('게시물 수정이 완료되었습니다.');
                    router.push(`/board/${update.data?.updateBoard._id}`);
                }
            }

        } catch(error) {
            console.log(error)
            return alert("게시물 등록에 실패했습니다.");
        }
    }

    // 이미지 등록하기
    const addImage = async (event) => {
        // 파일 정보(들) 구하기
        const fileList = event.target.files;

        // 파일을 저장할 배열 가져오기
        const inputList = { ...dataList };

        if(editMode === true) {
            // 수정을 위해 기존의 배열을 복사한다.
            inputList.showImages = inputList.showImages.slice(0);
            inputList.images = inputList.images.slice(0);
        }
        
        if((inputList.showImages + fileList.length) > 3) {
            alert('총 3 개의 이미지만 업로드 할 수 있습니다.');
            return;
        }

        let url = '';
        for(let i = 0; i < 3; i++) {
            const fileInfo = fileList[i];

            if(fileInfo !== undefined) {
                if (!checkImage(fileInfo)) return;

                const reader = new FileReader();
                reader.readAsDataURL(fileInfo);

                reader.onload = async (event) => {
                    // 미리보기용 사진 만들기
                    url = String(event.target.result); 
                                
                    inputList.showImages.push(url);
                }

                try {
                    const { data } = await uploadFile({ variables : { file : fileInfo } });

                    url = getStorageUrl(data.uploadFile.url);
                    inputList.images.push(url);
    
                } catch(err) {
                    return alert(err)
                }
            }
        }

        // 사진 미리보기 출력하기
        window.setTimeout( () => {
            setData(inputList);
        }, 100)
    }

    // 등록한 이미지 삭제하기
    const removeImage = (idx) => {
        // 현재 이미지 파일 리스트
        const inputList = { ...dataList };

        if(editMode === true) {
            // 수정을 위해 기존의 배열을 복사한다.
            inputList.showImages = inputList.showImages.slice(0);
            inputList.images = inputList.images.slice(0);
        }

        inputList.showImages[idx] = null;
        inputList.showImages = inputList.showImages.filter( (el) => {
            return el !== null;
        })

        inputList.images[idx] = null;
        inputList.images = inputList.images.filter( (el) => {
            return el !== null;
        })
        setData(inputList);
    }

    console.log(dataList)

    return (
        <BoardWriteUI 
            setState={setState}
            addBoard={addBoard}
            addAble={addAble}
            addImage={addImage}
            data={dataList}
            showImage={dataList.showImages}
            removeImage={removeImage}
            editMode={editMode}
            boardInfo={boardInfo}
        />
    )
}