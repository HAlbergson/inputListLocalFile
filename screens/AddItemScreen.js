// screens/AddItemScreen.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddItemScreen() {
  return (
    <View style={styles.container}>
      <Text>Add a new item to your list</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 100,
  },
  textinput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200,
  },
});
