import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink  } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import Header from '../src/commons/utils/header/Header.container';

function MyApp({ Component, pageProps }) {

  const uploadLink = createUploadLink({
    uri : 'http://backend.codebootcamp.co.kr/graphql'
  })

  const client = new ApolloClient({
    // uri : 'http://backend.codebootcamp.co.kr/graphql',
    link : ApolloLink.from([ uploadLink as unknown as ApolloLink ]),
    cache : new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>

  )
}

export default MyApp
