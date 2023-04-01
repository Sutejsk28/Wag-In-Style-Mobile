import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyle } from '../../styles/styles'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import { Avatar, Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'
import { useMessageAndErrorOther, useSetCategories } from '../../utils/hooks'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import mime from 'mime'
import { addProduct } from '../../redux/actions/otherActions'

const NewProduct = ({navigation , route}) => {

    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const [visible,setVisible] = useState(false)

    const [image,setImage] = useState("")
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")
    const [category,setCategory] = useState("Choose Category")
    const [categoryID,setCategoryID] = useState(undefined)
    const [categories,setCategories] = useState([])

    useSetCategories(setCategories,isFocused)

    const disableCondition = !name || !description || !price || !stock || !image;

    const submitHandler = ()=> {
        const newProductForm = new FormData()
        newProductForm.append("name", name)
        newProductForm.append("description", description)
        newProductForm.append("price", price)
        newProductForm.append("stock", stock)
        newProductForm.append("file", {
            uri: image,
            type: mime.getType(image),
            name: image.split("/").pop()
        })

        if(categoryID) newProductForm.append("category", categoryID)

        dispatch(addProduct(newProductForm))
    }

    const loading = useMessageAndErrorOther(dispatch,navigation,"adminpanel")

    useEffect(()=>{
        if(route.params?.image)
            setImage(route.params.image)
    },[route.params])

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
                <Text style={formHeading} >New Product</Text>
            </View>
            
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

                    <View
                        style={{
                            width: 80,
                            height: 80,
                            alignSelf: "center",
                            marginBottom: 20,
                        }}
                    >
                        <Avatar.Image
                            size={80}
                            style={{
                                backgroundColor: colors.color1
                            }}
                            source={{
                                uri: image ? image: null 
                            }}
                        />
                        <TouchableOpacity
                            onPress={()=> navigation.navigate("camera", {newProduct: true})}
                        >
                            <Avatar.Icon
                                icon={"camera"}
                                size={30}
                                color={colors.color3}
                                style={{
                                    backgroundColor: colors.color2,
                                    position: "absolute",
                                    bottom: 0,
                                    right: -5,
                                }}
                            />
                        </TouchableOpacity>
                    </View>

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
                        keyboardType="number-pad"
                        value={price}
                        onChangeText={setPrice}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="Stock"
                        keyboardType= "number-pad"
                        value={stock}
                        onChangeText={setStock}
                    />

                    <Text
                        style={{
                            ...inputStyle,
                            textAlign: "center",
                            borderRadius: 3,
                            textAlignVertical: "center",
                        }}
                        onPress={()=>setVisible(true)}
                    >
                        {category}
                    </Text>

                    <Button
                        textColor={colors.color2}
                        style={{
                            backgroundColor: colors.color1,
                            margin: 20,
                            padding: 5,
                        }}
                        onPress={submitHandler}
                        loading={loading}
                        disabled={disableCondition || loading}
                    >
                        Create
                    </Button>

                </View>
            </ScrollView>
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

export default NewProduct