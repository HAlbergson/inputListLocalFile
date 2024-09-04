// screens/AddItemScreen.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";

export default function AddItemScreen() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);

  const addItem = () => {
    if (text) {
      setList([...list, text]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add a new item to your list</Text>
      <TextInput placeholder="Enter item name" value={text} onChangeText={setText} />
      <Button title="Add Item" onPress={addItem} />
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
});
