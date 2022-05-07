import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const ListItem = ({text, id, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Icon style={styles.text} name='remove' onClick={()=> deleteItem(id)} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#fff"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgb(53, 53, 53)",
    marginBottom: 5
  }
})
export default ListItem