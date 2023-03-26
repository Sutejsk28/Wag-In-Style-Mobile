import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors, RUPEE } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { iconOptions } from '../screens/ProductDetails'

const CartItem = ({id,
    name,
    stock,
    price,
    imgSrc,
    index,
    qty,
    incrementHandler,
    decrementHandler,
    navigate
}) => {
  return (
    <View
        style={{
            flexDirection: "row",
            height: 100,
            marginVertical: 20,
        }}
    >
        <View
            style={{
                width: "40%",
                backgroundColor: index%2===0 ? colors.color1 : colors.color3,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
            }}
        >
            <Image
                source={{
                    uri: imgSrc
                }}
                style={style.img}
            />
        </View>

        <View
            style={{
                width: "40%",
                paddingHorizontal: 45,
            }}
        >
            <Text
                style={{
                    fontSize: 17,
                }}
                numberOfLines={1}
                onPress={()=>navigate.navigate("productdetails" , {id: id})}
            >
                {name}
            </Text>
            <Text
                style={{
                    fontSize: 17,
                    fontWeight: '900',
                }}
                numberOfLines={1}
            >
                {RUPEE}{price}
            </Text>
        </View>

        <View
            style={style.qtyContainer}
        >
            <TouchableOpacity onPress={()=>decrementHandler(id, qty)} >
                <Avatar.Icon 
                    icon={"minus"} 
                    {...iconOptions}
                />
            </TouchableOpacity>

            <Text
                style={style.qtyText}
            >
                {qty}
            </Text>

            <TouchableOpacity onPress={()=>incrementHandler(id, qty, stock)} >
                <Avatar.Icon 
                    icon={"plus"} 
                    {...iconOptions}
                />
            </TouchableOpacity>

        </View>

      
    </View>
  )
}

const style = StyleSheet.create({
    img: {
        width: 200,
        height: "100%",
        resizeMode: "contain",
        top: "-20%",
        left: "10%",
    },
    qtyText: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: "center",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color3,
    },
    qtyContainer: {
        alignItems: "center",
        width: "20%",
        height: 80,
        justifyContent: "space-between",
        alignSelf: "center"
    }
})

export default CartItem