import React from 'react'
import { View, Text, StyleSheet, Image} from "react-native"
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://randomuser.me/api/portraits/men/1.jpg"
        }}
        style={styles.profileImage}
      />
      <Text style={styles.text}>ShopVira</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(255, 115, 106)",
    paddingLeft: 15,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 15,
    position: "relative"
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    flex: 1,
    position: "absolute",
    width: "100%"
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
})

export default Header