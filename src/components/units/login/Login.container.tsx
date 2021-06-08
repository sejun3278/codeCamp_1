import LoginUI from './Login.presenter';
import { useState } from 'react';

const initinal = {
    "email" : "",
    "password" : ""
}

export default function LoginPage () {
    const [ input, setInput ] = useState(initinal);
    const [ able, setAble ] = useState(false);

    if (typeof window !== "undefined") {
        // 코드 작성
        const _next : any = window.document.querySelector('#__next');
        _next.style.height = '100%';
    }

    const onChangeInput = (event) => {
        const changeInput = { ...input };
        changeInput[event.target.name] = event.target.value;

        setInput(changeInput);

        let ables = false;
        if(changeInput['email'].length > 0 && changeInput['password'].length > 0) {
            ables = true;
        }
        setAble(ables)
    }

    return(
        <LoginUI 
            input={input}
            onChangeInput={onChangeInput}
            able={able}
        />
    )
}