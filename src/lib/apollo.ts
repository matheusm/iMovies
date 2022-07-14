import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_APOLO_API_KEY,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})