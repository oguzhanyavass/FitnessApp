import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet,Alert} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

function MemberSign({navigation}) {
  const [Name,setName] = useState(null);
  const [Surname,setSurname] = useState(null);
  const [Mail,setMail] = useState(null);
  const [Age,setAge] = useState(null);
  const [Weight,setWeight] = useState(null);
  const [Height,setHeight] = useState(null);

  function handleSubmit(){
    if(!Name || !Surname ||!Height || !Weight || !Age || !Mail){
      Alert.alert('X - Fit','Bilgiler eksik bırakılamaz!');
      return;
    }
      const  user = {  
        Name,
        Surname,
        Age,
        Height,
        Weight,
        Mail
    };

    navigation.navigate("MemberResultScreen",{user});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>X - Fit Ailesine Kaydol</Text>
      <Input label='Adı'
      pleaceholder='Üye İsmini Giriniz...'
      onChangeText={setName}/>
      <Input label='Soyadı'
      pleaceholder='Üye Soyadını Giriniz...'
      onChangeText={setSurname}/>
      <Input label='Yaşı'
      pleaceholder='Üye Yaşını Giriniz...'
      onChangeText={setAge}/>
      <Input label='Kilo'
      pleaceholder='Üye Kilosunu Giriniz...'
      onChangeText={setWeight}/>
      <Input label='Boy'
      pleaceholder='Üye Boyunu Giriniz...'
      onChangeText={setHeight}/>
      <Input label='E-Posta'
      pleaceholder='Üye E-Posta adresini Giriniz...'
      onChangeText={setMail}/>
      <Button text='Kaydı Tamamla' 
      onPress={handleSubmit}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center",
    backgroundColor:'#0A070D'
  },
  text:{ 
    fontSize: 35, 
    color:'#EFE9E7',
    marginLeft:15,
    marginBottom:15,
    fontFamily:'sans-serif-thin',
},
});

export default MemberSign;
