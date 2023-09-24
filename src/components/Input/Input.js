import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./Input.style";

function Input({ label,onChangeText,pleaceholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput 
        placeholder={pleaceholder}
        placeholderTextColor={'#2A313C'}
        selectionColor={'#DB1D1A'}
        color={'#EFE9E7'}
        onChangeText={onChangeText}/>
      </View>
    </View>
  );
};

export default Input;

