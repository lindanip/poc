import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const TextBox = ({label, handleTextChange, secureTextEntry}) => {
    return (
        <View>
            <Text style={style.label}>{label}</Text>
            <TextInput
                style={style.textInput}
                onChangeText={value => handleTextChange(label, value)}
                secureTextEntry={secureTextEntry ? true : false}
            />
        </View>
    )
}

const style = StyleSheet.create({
  label:{
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  },
  textInput: {
      borderWidth: 1,
  }
});

export default TextBox;
