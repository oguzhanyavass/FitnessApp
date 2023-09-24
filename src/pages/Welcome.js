import React from "react";
import { SafeAreaView, StyleSheet,Text } from "react-native";
import Button from "../components/Button";

function Welcome({navigation}) {
  function goToMemberSign(){
    navigation.navigate('MemberSignScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>X - Fit</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#0A070D'
  },
  header: {
    textAlign:'center',
    fontFamily:'sans-serif-thin',
    fontSize: 45,
    color:'#EFE9E7'
  }
});

export default Welcome;
