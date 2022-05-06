import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/dist/FontAwesome"

function AddItemForm({ addItem }) {
  const [text, setText] = useState("");

  const handlePress = () => {
    addItem(text);
    setText("")
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput} 
        placeholder="Item name"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Icon name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    borderColor: "#e8e8e8",
    borderWidth: 1,
    flex: 1,
    padding: 10,
    fontSize: 18
  },
  button: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: "rgb(255, 115, 106)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  }
})

export default AddItemForm