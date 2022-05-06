import React, { useState } from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import AllLists from './components/AllLists'
import Header from './components/Header'
import uuid from 'uuidv4';
import AddItemForm from './components/AddItemForm';

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

  const addItem = (text) => {
    if(text){
      setList((prevState) => {
        return [{id: uuid(), text}, ...prevState]
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItemForm
        addItem={addItem}
      />
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