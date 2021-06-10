import MarketGoodsUI from './GoodsWrite.presenter';
import withAuth from '../../../../commons/hocs/widthAtuth';
import { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router'

import { checkImage } from '../../../../../commons/libraries/validations'
import { USED_ITEM } from './GoodsWrite.queries';

const initinal = {
    "name" : "",
    "remarks" : "",
    "contents" : "",
    "price" : 0,
    "tags" : [],
}

const fileInit = [ null, null ]

export default function MarketGoodsPage () {
    const [ input, setInput ] = useState(initinal);
    const [ able, setAble ] = useState(false);
    const [ file, setFile ] = useState(fileInit);

    const [ usedItem ] = useMutation(USED_ITEM);
    const router = useRouter();

    const formRef = useRef<HTMLFormElement>();
    const nameRef = useRef<HTMLInputElement>();
    const remarksRef = useRef<HTMLInputElement>();
    const contentsRef = useRef<HTMLTextAreaElement>();
    const priceRef = useRef<HTMLInputElement>();

    const kakaoKey = "52c079a2821b29491ec6470e2b957f3e";

    // input 값 저장하기
    const changeInput = (event) => {
        const inputs = { ...input };
        const type = event.target.name;

        let value = event.target.value.trim();
        if(type === 'tags') {
            // 태그인 경우 배열화 시켜서 배열에 저장한다.
            value = (value).trim().slice(1, value.length + 1).split('#');

        } else if(type === 'price') {
            value = Number(value);
        }

        inputs[type] = value;

        setInput(inputs);

        let ables = false;
        if(
            inputs['name'].length > 0 &&
            inputs['remarks'].length > 0 &&
            inputs['contents'].length > 0 &&
            inputs['price'] > 0
        ) {
            ables = true;
        }
        setAble(ables);
    }

    // 상품 등록하기
    const addGoods = async (event) => {
        event.preventDefault();

        if(able === false) {
            if(input['name'].length === 0) {
                alert('상품명을 입력해주세요.');
                return nameRef.current.focus();

            } else if(input['remarks'].length === 0) {
                alert('한줄요약을 입력해주세요.');
                return remarksRef.current.focus();

            } else if(input['contents'].length === 0) {
                alert('상품 설명을 입력해주세요.');
                return contentsRef.current.focus();

            } else if(input['price'] <= 0) {
                alert('판매가격을 입력해주세요.');
                return priceRef.current.focus();
            }

        } else {
            try { 
                const addItem = await usedItem({
                    variables : {
                        createUseditemInput : input
                    }
                })

                if(addItem.data.createUseditem._id) {
                    alert('상품이 등록되었습니다.');
                    return router.push(`/market/goods/${addItem.data.createUseditem._id}`)
                }

            } catch (err) {
                alert(err.message);
                return;
            }
        }
    }

    // 파일 추가하기
    const addFile = (event) => {
        // 파일 정보 구하기
        const fileInfo = event.target.files[0];

        if(fileInfo !== undefined) {
            // 이미지 사이즈 및 파일 검증하기
            if (!checkImage(fileInfo)) return;
            
            let selectInx = null;
            let list = [ ...file ];

            for(let i = 0; i < list.length; i++) {
                if(list[i] === null) {
                    selectInx = i;
                    break;
                }
            }

            let url = '';
            const reader = new FileReader();
            reader.readAsDataURL(fileInfo);
            reader.onload = (event) => {
                // 미리보기용 사진 만들기
                url = String(event.target.result);
                list[selectInx] = url;

                setFile(list);
            }
        }
    }

    // 파일 삭제하기
    const removeFile = (idx) => {
        const list = [ ...file ];
        list[idx] = null;

        if(idx === 0) {
            if(list[1] !== null) {
                list[0] = list[1];
                list[1] = null;
            }
        }
        
        setFile(list);
    }

    return(
        <MarketGoodsUI
            changeInput={changeInput}
            addGoods={addGoods}
            able={able}
            nameRef={nameRef}
            file={file}
            addFile={addFile}
            formRef={formRef}
            removeFile={removeFile}
            remarksRef={remarksRef}
            contentsRef={contentsRef}
            priceRef={priceRef}
        />
    )

}

// export default withAuth(MarketGoodsPage);