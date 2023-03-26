import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

const ProductCard = ({
    stocks,
    name,
    price,
    image,
    id,
    addToCartHandler,
    i,
    navigate,
}) => {
  return (
    <TouchableOpacity 
        onPress={()=> navigate.navigate("productdetails", {id}) }
        activeOpacity={1}
    >
        <View
            style={{
                elevation: 5,
                width: 220,
                alignItems: "center",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 20,
                height: 400,
                backgroundColor: i%2===0 ? colors.color1 : colors.color3,
            }}
        >
            <Image
                source={{
                    uri: image,
                }}
                style={{
                    width: "100%",
                    height: 200,
                    resizeMode: "contain",
                    position: "absolute",
                    left: 30,
                    top: 105,
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    padding: 20,
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Text 
                    numberOfLines={2}
                    style={{
                        color: i%2===0 ? colors.color2 : colors.color2,
                        fontSize: 25,
                        fontWeight: "300"
                    }}
                >
                    {name}
                </Text>

                <Text 
                    numberOfLines={2}
                    style={{
                        color: i%2===0 ? colors.color2 : colors.color2,
                        fontSize: 20,
                        fontWeight: "700",

                    }}
                >
                    ₹{price}
                </Text>

            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: i%2===0 ? colors.color3 : colors.color2,
                    borderRadius: 0,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    width: "100%",
                    borderColor: i%2===0 ? colors.color3 : colors.color3
                }}
            >
                <Button 
                    textColor={i%2===0 ? colors.color2 : colors.color3} 
                    onPress={()=>addToCartHandler(id,stocks)}
                >
                    Add to Cart
                </Button>
            </TouchableOpacity>

        </View>
    </TouchableOpacity>
  )
}

export default ProductCard