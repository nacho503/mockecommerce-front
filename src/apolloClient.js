import { ApolloClient, InMemoryCache,ApolloLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { onError } from "@apollo/client/link/error";


// Set up RestLink with your endpoint
const restLink = new RestLink({
  uri: 'https://fakestoreapi.com/',
  fetchOptions: {
    method: 'GET', 
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
// Setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink,errorLink]),
  typePolicies: {
    Query: {
      fields: {
        products: {
          // Optionally specify merge policy if needed
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});



export default client;
