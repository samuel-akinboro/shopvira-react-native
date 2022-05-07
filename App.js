import React, { useState } from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import AllLists from './components/AllLists'
import Header from './components/Header'
import uuid from 'uuidv4';

const App = () => {
  const [ lists, setList ] = useState([
    {
      id: uuid(),
      text: "Playstation 5"
    },
    {
      id: uuid(),
      text: "Macbook M1 chip"
    },
    {
      id: uuid(),
      text: "Curved monitor"
    },
    {
      id: uuid(),
      text: "Playstation 5"
    },
    {
      id: uuid(),
      text: "Macbook M1 chip"
    },
    {
      id: uuid(),
      text: "Curved monitor"
    },
    {
      id: uuid(),
      text: "Playstation 5"
    },
    {
      id: uuid(),
      text: "Macbook M1 chip"
    },
    {
      id: uuid(),
      text: "Curved monitor"
    },
    {
      id: uuid(),
      text: "Playstation 5"
    },
    {
      id: uuid(),
      text: "Macbook M1 chip"
    },
    {
      id: uuid(),
      text: "Curved monitor"
    },
  ])

  const deleteItem = (id) => {
    setList((prevState) => prevState.filter((item) => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header />
      <AllLists 
        data={lists} 
        deleteItem={deleteItem} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App