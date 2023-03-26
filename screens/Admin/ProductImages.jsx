import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import ImageCard from '../../components/ImageCard'
import { Avatar, Button } from 'react-native-paper'

const ProductImages = ({navigation, route}) => {

    const [images] = useState(route.params.images)
    const [productId] = useState(route.params.id)

    const [image,setImage] = useState(null) 
    const [imageChanged,setImageChanged] = useState(false)

    const loading = false

    const submitHandler = ()=>{}

    useEffect(()=>{
        if(route.params?.image){
            setImage(route.params.image)
            setImageChanged(true)
        }         
    },[route.params])

    const deleteHandler = (id)=>{
        console.log("Image id", id);
        console.log("Product Id", productId);
    }

  return (
    <View
        style={{
            ...defaultStyle,
            backgroundColor: colors.color5,
        }}
    >

        <Header />

        <View
            style={{marginBottom: 20, paddingTop: 70 }}
        >
            <Text style={formHeading} >Images</Text>
        </View>

        <ScrollView
            style={{
                marginBottom: 20,
            }}
        >
            <View
                style={{
                    backgroundColor: colors.color2,
                    padding: 40,
                    minHeight: 400,
                }}
            >
                {
                    images.map((item)=>(
                        <ImageCard
                            key={item._id}
                            src={item.url}
                            id = {item._id}
                            deleteHandler={deleteHandler}
                        />
                    ))
                }
            </View>
        </ScrollView>

        <View
            style={{
                padding: 20,
                borderRadius: 10,
                backgroundColor: colors.color3,
            }}
        >
            <Image
                style={{
                    backgroundColor: colors.color2,
                    width: 100,
                    height: 100,
                    alignSelf: "center",
                    resizeMode: "contain",
                }}
                source={{
                    uri: image
                }}
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center", 
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("camera",{
                        updateProduct: true,
                    })}
                >
                    <Avatar.Icon
                        icon={"camera"}
                        size={30}
                        color={colors.color3}
                        style={{
                            backgroundColor: colors.color2,
                            margin: 10,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <Button
                style={{
                    backgroundColor: colors.color1,
                    padding: 5,
                }}
                textColor={colors.color2}
                loading={loading}
                onPress={submitHandler}
                disabled={!imageChanged}
            >
                Add
            </Button>

        </View>
    </View>
  )
}

export default ProductImages