import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider,useQuery } from '@apollo/react-hooks';
import ExchangeRates from "./ExchangeRates"


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

const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );

  export default App