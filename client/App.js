import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegistrationForm from './src/components/RegisterForm';

const App = () => {
  return (
    <View>
      <Text style={style.heading}>Registration</Text>
      <RegistrationForm />
    </View>
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
