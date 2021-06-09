import MarketGoodsUI from './Write.presenter';
import withAuth from '../../../../components/commons/hocs/widthAtuth';
import { useState } from 'react';

const initinal = {
    "name" : "",
    "summary" : "",
    "content" : "",
    "price" : 0,
    "tag" : [],
}

export default function MarketGoodsPage () {
    const [ input, setInput ] = useState(initinal);

    // input 값 저장하기
    const changeInput = (event) => {
        const inputs = { ...input };
        const type = event.target.name;

        if(type !== 'tag') {
            // 태그가 아닌 경우 바로 input 에 저장한다.
            inputs[type] = event.target.value;
        
        } else {
            const val = event.target.value;
            // 태그인 경우 배열화 시켜서 배열에 저장한다.
            const tagArr = (val).trim().slice(1, val.length + 1).split('#');
            
            console.log(tagArr)
        }
    }

    return(
        <MarketGoodsUI
            changeInput={changeInput}
        />
    )

}

// export default withAuth(MarketGoodsPage);