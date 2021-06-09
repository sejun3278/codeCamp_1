import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink  } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import { onError } from "@apollo/client/link/error";
import Header from '../src/commons/utils/header/Header.container';
import { createContext, useState } from 'react';
import styled from '@emotion/styled';

import axios from 'axios';
import { useRouter } from 'next/router';

export const GlobalContext = createContext({
  accessToken : "",
  setAccessToken : (_ : any) => {}
})

const Wrapper = styled.div`
  min-width : 360px;
`

// const url = 'http://backend.codebootcamp.co.kr/graphql';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [ accessToken, setAccessToken ] = useState("");

  const uploadLink = createUploadLink({
    // uri : 'http://example.codebootcamp.co.kr/graphql',
    uri : 'http://backend.codebootcamp.co.kr/graphql',
    Headers : { authorization : `Bearer ${accessToken}` },
    credentials : 'include'
  })

  // @ts-ignore
  // const errorLink = onError( async( { graphQLErrors, operation, forward } ) => {
  //   if(graphQLErrors) {
  //     for(let err of graphQLErrors) {
  //       if(err.extensions.code === 'UNAUTHENTICATED') {
  //         // 만료된 토큰을 재발급 받기
  //         const response = await axios.post(
  //           "http://backend.codebootcamp.co.kr/graphql",
  //           {
  //             query : `
  //               mutation restoreAccessToken {
  //                 restoreAccessToken {
  //                   accessToken
  //                 }
  //               }
  //             `
  //           },
  //           { 
  //             headers : { "Content-Type" : "application/json" },
  //             withCredentials : true
  //           }
  //         )

  //         const newAccessToken = response.data.data.restoreAccessToken.accessToken;
  //         setAccessToken(newAccessToken);

  //         // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
  //         operation.setContext({
  //           headers : {
  //             ...operation.getContext().headers,
  //             authorization : `bearer ${newAccessToken}`
  //           }
  //         })

  //         return forward(operation)
  //       }
  //     }
  //   }
  // })

  const client = new ApolloClient({
    // uri : 'http://backend.codebootcamp.co.kr/graphql',
    link : ApolloLink.from([ uploadLink ]),
    cache : new InMemoryCache(),
  })
  
  return (
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
      <ApolloProvider client={client}>
        <Wrapper style={{ 'height' : '100%' }}>
          {
          // (router.pathname.includes('board') === true || router.pathname === '/')
          (router.pathname !== '/login' && router.pathname !== '/signup')
            && 
            <Header />
          }

          <Component {...pageProps} />
        </Wrapper>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
