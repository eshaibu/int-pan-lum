import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

/* eslint-disable no-console */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
/* eslint-enable no-console */

const httpLink = new HttpLink({ uri: 'https://pangaea-interviews.now.sh/api/graphql' });
const link = errorLink.concat(httpLink);

const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

export default client;
