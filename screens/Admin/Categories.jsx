import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions } from '../../styles/styles'
import Header from '../../components/Header'
import CategoryCard from '../../components/CategoryCard'
import { Button, TextInput } from 'react-native-paper'

const categories = [
  {
    name: "Tie",
    _id: "1"
  },
  {
    name: "Tie",
    _id: "2"
  },
  {
    name: "Tie",
    _id: "3"
  },
]

const Categories = () => {

  const [category, setCategory] = useState("")

  const loading = false

  const deleteHandler = (id)=>{
      console.log("Deleting category with id: ", id);
  }

  const submitHandler = () => {
      
  }

  return (
    <View
            style={{
              ...defaultStyle,
              backgroundColor: colors.color5
            }}
        >

            <Header back={true} />

            <View
                style={{marginBottom: 20, paddingTop: 70 }}
            >
                <Text style={formHeading} >Categories</Text>
            </View>

            <ScrollView
              style={{
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.color2,
                  padding: 20,
                  minHeight: 400,
                }}
              >
                {
                  categories.map((item)=>(
                    <CategoryCard
                      name={item.name}
                      id={item._id}
                      key={item._id}
                      deleteHandler={deleteHandler}
                      styles={styles}
                    />
                  ))
                }
              </View>
            </ScrollView>
            <View
              style={styles.container}
            >
              <TextInput
                {...inputOptions}
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
              />
              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 5,
                }} 
                disabled={!category}
                onPress={submitHandler}
              >
                Add
              </Button>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
      backgroundColor: colors.color2,
      elevation: 5,
      margin: 10,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  }, 
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
})

export default Categories