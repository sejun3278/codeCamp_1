import { useRouter } from "next/router"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";
import WithAuth from '../../src/components/commons/hocs/widthAtuth';
import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client';


const FETCH_USEDITEMS = gql`
    query fetchUseditems {
        fetchUseditems {
            _id
            name
        }
    }
`


const TokenText2Page = () => {
    const router = useRouter();

    const { data } = useQuery(FETCH_USEDITEMS);
    console.log("data", data);

    const onClickMore = () => {
        router.push("/tokentest/tokentest1");
    }
    // if(!accessToken) return <></>;
    return <button onClick={onClickMore}> 전체공개 페이지로 이동하기 </button>
}

export default WithAuth(TokenText2Page);