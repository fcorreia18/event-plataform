import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl5piau1128wo01t84y79gcu3/master',
    cache: new InMemoryCache(),
  });