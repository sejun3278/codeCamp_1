import GoodsPage from '../../../../src/components/units/market/goods/detail/GoodsDetail.container';
import { createContext, useState } from 'react';

export const GoodsContext = createContext({
    answerRefresh : false,
    setAnswerRefresh : (_ : any) => {},
    sellerEmail : "",
    setSellerEmail : (_ : any) => {}
})

export default function home () {
    const [ answerRefresh, setAnswerRefresh ] = useState(false);
    const [ sellerEmail, setSellerEmail ] = useState("");

    return(
        <GoodsContext.Provider value={{ answerRefresh, setAnswerRefresh, sellerEmail, setSellerEmail }}>
            <GoodsPage />
        </GoodsContext.Provider>
    )
}