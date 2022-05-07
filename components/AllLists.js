import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItem from './ListItem'

const AllLists = ({data, deleteItem}) => {
  return (
    <FlatList
      style={styles.container} 
      data={data}
      renderItem={({item})=> <ListItem text={item.text} id={item.id} deleteItem={deleteItem} />} 
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0, 0, 0)"
  }
})

export default AllLists