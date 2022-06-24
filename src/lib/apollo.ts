import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: import.meta.env.APOLO_API_KEY,
  cache: new InMemoryCache()
})