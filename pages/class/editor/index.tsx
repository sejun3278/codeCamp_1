// import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// import ReactQuill from 'react-quill';
const ReactQuill = dynamic( () => import('react-quill'), {
    // import 옵션 주기
    ssr : false
    // 주소창에 url 을 입력하고 이동하는 경우
    // 서버사이드 렌더링의 경우에는 적용하지 않는다.
})

// DynamicImport
const EditorPage = () => {
    const [ content, setContent ] = useState("");

    const onChangeEditor = (contents) => {
        setContent(contents);
    }


    // if(typeof window === undefined) return <div></div>;
    return (
        <>
           <ReactQuill onChange={onChangeEditor} /> 
           {content}
        </>
    )
}

export default EditorPage;