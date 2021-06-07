import { useRouter } from "next/router"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";

const TokenText2Page = () => {
    const router = useRouter();
    const { accessToken } = useContext(GlobalContext) ;

    useEffect( () => {
        if(!accessToken) router.push('/login');

    }, []);

    const move = () => {
        router.push('/tokentest1');
    }

    if(!accessToken) return <></>;
    return <button onClick={move}> 전체공개 페이지로 이동하기 </button>
}

export default TokenText2Page;