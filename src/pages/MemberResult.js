import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import Button from "../components/Button";

function MemberResult({ route,navigation }) {
  const { user } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.message}>KAYIT TAMAMLANDI</Text>
      <View style={styles.userInfo}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Ad:</Text>
            <Text style={styles.tableCellValue}>{user.Name}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Soyad:</Text>
            <Text style={styles.tableCellValue}>{user.Surname}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Yaş:</Text>
            <Text style={styles.tableCellValue}>{user.Age}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Boy:</Text>
            <Text style={styles.tableCellValue}>{user.Height}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Kilo:</Text>
            <Text style={styles.tableCellValue}>{user.Weight}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>E-Posta:</Text>
            <Text style={styles.tableCellValue}>{user.Mail}</Text>
          </View>
        </View>
      </View>
      <Button text={'Ana Sayfaya Dön'} onPress={() => navigation.goBack("Welcome")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#0A070D",
  },
  userInfo: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#EFE9E7",
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  tableCellLabel: {
    fontWeight: "bold",
    width: 100,
    fontSize: 18,
    color: "#EFE9E7",
  },
  tableCellValue: {
    fontSize: 18,
    color: "#EFE9E7",
  },
  message: {
    fontSize: 30,
    margin: 5,
    marginLeft: 20,
    color: "#70e000",
    fontFamily: "sans-serif-thin",
  },
});

export default MemberResult;
