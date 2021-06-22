import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink  } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import Layout from '../src/commons/utils/layout/index';
import { createContext, useState } from 'react';

import { useRouter } from 'next/router';
import axios from 'axios';

import { onError } from "@apollo/client/link/error";
import getAccessToken from '../src/commons/libraries/getAccessToken';

// import Head from 'next/head';

interface userInfoType {
  _id : String,
  email : String,
  name : String,
  userPoint : {
    amount : Number
  }
}

const userInit : userInfoType = {
  _id : "",
  email : "",
  name : "",
  userPoint : {
    amount : 0
  }
}

export const GlobalContext = createContext({
  accessToken : "",
  setAccessToken : (_ : any) => {},
  userInfo : userInit ,
  setUserInfo : (_ : any) => {},
  savePath : "",
  setSavePath : (_ : any) => {},
  chargeModal : false,
  setChargeModal :  (_ : any) => {},
})

// const Layout = styled.div`
//   min-width : 360px;
// `

// const url = 'http://backend.codebootcamp.co.kr/graphql';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [ accessToken, setAccessToken ] = useState("");
  const [ userInfo, setUserInfo ] = useState(userInit);
  const [ savePath, setSavePath ] = useState("");
  const [ chargeModal, setChargeModal ] = useState(false);

  const uploadLink = createUploadLink({
    // uri : 'http://example.codebootcamp.co.kr/graphql',
    uri: "https://backend.codebootcamp.co.kr/graphql",
    // https 로 변경해야만 Refresh Token 가능
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  })
  console.log(accessToken)

  // @ts-ignore
  // async, await 삭제 (비동기 형태로 가져온다.)
  const errorLink = onError(( { graphQLErrors, operation, forward } ) => {
    if(graphQLErrors) {
      for(let err of graphQLErrors) {
        if(err.extensions.code === 'UNAUTHENTICATED') {
          // const newAccessToken = getAccessToken({ setAccessToken });

          // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
          operation.setContext({
            headers : {
              ...operation.getContext().headers,
              // 스프레드로 기존의 헤더 부분을 가져온 후
              authorization : `bearer ${ getAccessToken({ setAccessToken }) }`
              // 새로 가져온 AccessToken 을 넣어준다.
            }
          })

          return forward(operation)
        }
      }
    }
  })

  // 아폴로 클라이언트 설정 부분
  const client = new ApolloClient({
    // uri : 'http://backend.codebootcamp.co.kr/graphql',
    link : ApolloLink.from([ errorLink, uploadLink ]),
    cache : new InMemoryCache()
  })
  
  return (
    <>
      <GlobalContext.Provider value={{ 
        accessToken, setAccessToken, userInfo, setUserInfo, savePath, setSavePath,
        chargeModal, setChargeModal
      }}>
        
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=52c079a2821b29491ec6470e2b957f3e&autoload=false">    
        </script>
        
        <ApolloProvider client={client}>
          <Layout>
            {/* {
            // (router.pathname.includes('board') === true || router.pathname === '/')
            (router.pathname !== '/login' && router.pathname !== '/signup')
              &&
              <Header />
            } */}

            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp
