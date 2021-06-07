import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink  } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import Header from '../src/commons/utils/header/Header.container';
import { createContext, useState } from 'react';
import styled from '@emotion/styled';

export const GlobalContext = createContext({
  accessToken : "",
  setAccessToken : (_ : any) => {}
})

const Wrapper = styled.div`
  min-width : 360px;
`


function MyApp({ Component, pageProps }) {
  const [ accessToken, setAccessToken ] = useState("");

  const uploadLink = createUploadLink({
    // uri : 'http://example.codebootcamp.co.kr/graphql'
    uri : 'http://backend.codebootcamp.co.kr/graphql',
    Headers : { authorization : `Bearer ${accessToken}` }
  })

  const client = new ApolloClient({
    // uri : 'http://backend.codebootcamp.co.kr/graphql',
    link : ApolloLink.from([ uploadLink as unknown as ApolloLink ]),
    cache : new InMemoryCache(),
  })

  return (
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
      <ApolloProvider client={client}>
        <Wrapper>
        {/* <Layout /> */}
          <Header />
          <Component {...pageProps} />
        </Wrapper>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
