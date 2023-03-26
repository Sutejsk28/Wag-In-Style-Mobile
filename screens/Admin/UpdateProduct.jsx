import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyle } from '../../styles/styles'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import { Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'

const UpdateProduct = ({navigation , route}) => {

    const loading = false
    const loadingUpdate = false


    const [id] = useState(route.params.id)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")
    const [category,setCategory] = useState("Tie")
    const [categoryID,setCategoryID] = useState("")
    const [categories,setCategories] = useState([
        {_id: "1", category: "Tie"},
        {_id: "2", category: "Hat"},
        {_id: "3", category: "Shoes"},
    ])
    const [visible,setVisible] = useState(false)

    const submitHandler = ()=> {
        console.log(name,description,price,stock,categoryID);
    }

    const images = [
        {
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
            _id: "1"
        },
        {
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
            _id: "2"
        },
        {
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
            _id: "3"
        },
    ]

  return (

    <>
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
                <Text style={formHeading} >Update Product</Text>
            </View>

            {
                loading ? <Loading /> : (
                    <ScrollView
                        style={{
                            padding: 20,
                            elevation: 10,
                            borderRadius: 10,
                            backgroundColor: colors.color3,
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                height: 650,
                            }}
                        >
                            <Button
                                textColor={colors.color2}
                                onPress={()=>navigation.navigate("productimages", {
                                    id,
                                    images: images,
                                })}
                            >
                                Manage Images
                            </Button>

                            <TextInput
                                {...inputOptions}
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                            />

                            <TextInput
                                {...inputOptions}
                                placeholder="Description"
                                value={description}
                                onChangeText={setDescription}
                            />
                            <TextInput
                                {...inputOptions}
                                placeholder="Price"
                                keyboardType= "number-pad"
                                value={price}
                                onChangeText={setPrice}
                            />
                            <TextInput
                                {...inputOptions}
                                placeholder="Stock"
                                keyboardType= "number-pad"
                                value={stock}
                                onChangeText={setName}
                            />

                            <Text
                                style={{
                                    ...inputStyle,
                                    textAlign: "center",
                                    borderRadius: 3,
                                    textAlignVertical: "center",
                                }}
                                onPress={()=>setVisible(true)}
                            >{category}</Text>

                            <Button
                                textColor={colors.color2}
                                style={{
                                    backgroundColor: colors.color1,
                                    margin: 20,
                                    padding: 5,
                                }}
                                onPress={submitHandler}
                                loading={loadingUpdate}
                                disabled={loadingUpdate}
                            >
                                Update
                            </Button>

                        </View>
                    </ScrollView>
                )
            }
        </View>

        <SelectComponent
            visible={visible}
            setVisible = {setVisible}
            setCategory = {setCategory}
            setCategoryID = {setCategoryID}
            categories = {categories}
        />

    </>
  )
}

export default UpdateProduct