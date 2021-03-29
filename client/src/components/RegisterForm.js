import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import TextBox from './TextBox';
import useFormData from '../Hooks/useFormData';


const RegistrationForm = () => {
  
    const [ formValues, handleTextChange,setFromValues ] = useFormData({
        username: '',
        email: '',
        age: '',
        password: '',
        vPassword: ''
    });

    const submitForm = () => {
        console.log('form submitted');
        
        setFromValues({
            username: '',
            email: '',
            age: '',
            password: '',
            vPassword: '' 
        })
    }

    console.log(formValues);

    return (
        <View style={style.formView}>
            <TextBox 
                label={'username'}
                handleTextChange={handleTextChange}
            />
            <TextBox
                label={'email'}
                handleTextChange={handleTextChange}
            />
            <TextBox
                label={'age'}
                handleTextChange={handleTextChange}
            />
            <TextBox
                label={'password'}
                secureTextEntry={true}
                handleTextChange={handleTextChange}
            />
            <Pressable style={style.registerBtn} onPress={submitForm}>
                <Text style={style.btnText}>Register</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
  formView: {
    margin: 30
  },
  registerBtn: {
      marginTop: 30,
      backgroundColor: 'rgb(0, 150, 0)',
      padding: 20,
      borderWidth: 3,
  },
  btnText: {
      textAlign: 'center',
      fontSize: 17,
      color: 'black'
  }
});

export default RegistrationForm;
