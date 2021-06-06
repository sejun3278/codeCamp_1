import BoardWriteUI from './BoardWrite.presenter';
// import { TEST_BOARD } from './BoardWrite.queries';
import { CREATE_BOARD, UPLOAD_FILE } from './BoardWrite.queries'
// import { useRouter } from "next/router";
import {
//   ChangeEvent,
//   ChangeEventHandler,
//   RefObject,
//   useEffect,
  useRef,
  useState,
} from "react";
import { fromPromise, useMutation, useQuery, ApolloError } from '@apollo/client';

import { useRouter } from 'next/router';
import { checkImage } from '../../../commons/libraries/validations';
import { getStorageUrl } from '../../../commons/libraries/utils';
import next from 'next';

const dataInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl : "",
  images : [null, null, null],
  showImages : [null, null, null]
};

export default function BoardWritePage() {
    const [dataList, setData] = useState(dataInit);
    const [addAble, setAble] = useState(false);
    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ uploadFile ] = useMutation(UPLOAD_FILE);

    const router = useRouter();
    // const addImageBtn = useRef<HTMLInputElement>();

    const setState = (event) => {
        let value = event.target.value;
        if(event.target.name === 'contents') {
            // 내용 줄바꿈
            value = value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        }

        dataList[event.target.name] = event.target.value;
        setData(dataList)

        const able =
            (
                dataList.writer.length > 0 &&
                dataList.password.length > 0 &&
                dataList.title.length > 0 &&
                dataList.contents.length > 0
            )

        setAble(able);
    }

    const addBoard = async (event) => {
        event.preventDefault()

        try{
            if(addAble === false) {
                // 등록 불가일 때
                return alert('비어있는 항목을 모두 채워주세요.');

            } else {
                // 이미지 배열에서 null 값 제외하기
                const images = dataList.images.filter( (el) => { return el !== null })

                const add = await createBoard({
                    variables : {
                        createBoardInput : {
                            writer : dataList.writer,
                            password : dataList.password,
                            title : dataList.title,
                            contents : dataList.contents,
                            youtubeUrl : dataList.youtubeUrl,
                            images : images
                        }
                    }
                });

                alert('게시물 등록이 완료되었습니다.');
                router.push(`/board/${add.data?.createBoard._id}`)
            }

        } catch(error) {
            return alert("게시물 등록에 실패했습니다.");
        }
    }

    // 이미지 등록하기
    const addImage = async (event) => {
        // 현재 이미지 파일 리스트
        const imageList = dataInit;

        // 이미지 순서 구하기
        const imageidx = Number(event.target.name);

        if(imageList.showImages[imageidx] !== null) {

        }

        // 파일 정보 구하기
        const file = event.target.files[0];

        if(file !== undefined) {
            // 이미지 사이즈 및 파일 검증하기
            if (!checkImage(file)) return;
            
            let selectInx = null;
            let list = { ...dataInit };

            for(let i = 0; i < dataInit.images.length; i++) {
                if(dataInit.images[i] === null) {
                    selectInx = i;
                    break;
                }
            }

            let url = '';
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                // 미리보기용 사진 만들기
                url = String(event.target.result);
                list.showImages[selectInx] = url;

                setData(dataList);
            }

            try {
                const { data } = await uploadFile({ variables : { file } });

                url = getStorageUrl(data.uploadFile.url);
                list.images[selectInx] = url;

                setData(dataList);

            } catch(err) {
                return alert(err)
            }
        }
    }

    // 등록한 이미지 삭제하기
    const removeImage = (idx) => {
        // 현재 이미지 파일 리스트
        const imageList = { ...dataList };

        imageList.images[idx] = null;
        imageList.showImages[idx] = null;

        // 파일 순서 땡기기
        for(let i = 0; i <= 1; i++) {
            let nextIdx = null;
            
            if(imageList.showImages[i] === null) {
                nextIdx = i + 1;
                
                imageList.showImages[i] = imageList.showImages[nextIdx];
                imageList.showImages[nextIdx] = null;

                imageList.images[i] = imageList.images[nextIdx];
                imageList.images[nextIdx] = null;
            }
        }
        setData(imageList);
    }

    const onClickUpload = () => {
        // addImageBtn.current.click();
    }

    return (
        <BoardWriteUI 
            setState={setState}
            addBoard={addBoard}
            addAble={addAble}
            addImage={addImage}
            data={dataList}
            removeImage={removeImage}
        />
    )
}