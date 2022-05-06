import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"

const ListItem = ({text, id, deleteItem}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Icon style={styles.text} name='remove' onPress={()=> deleteItem(id)} />
      </View>
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