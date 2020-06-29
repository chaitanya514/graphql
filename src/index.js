import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider} from '@apollo/react-hooks';
import App from "./App"


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
 

ReactDOM.render(
<ApolloProvider client={client}>
<App />
</ApolloProvider>

  ,
  document.getElementById('root')
);

