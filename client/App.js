import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegistrationForm from './src/components/RegisterForm';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://127.0.0.1/graphql',
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Text style={style.heading}>Registration</Text>
      <RegistrationForm />
    </ApolloProvider>
  )
}

const style = StyleSheet.create({
  heading:{
    fontSize: 20,
    textAlign: 'center',
    padding: 30
  }
});

export default App;
