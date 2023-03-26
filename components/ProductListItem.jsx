import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { colors, RUPEE } from '../styles/styles'
import AdminModal from './AdminModal'

const ProductListItem = ({
    product,
    deleteHandler,
    i,
    navigate,
}) => {

    const { 
    _id,
    price,
    stock,
    name,
    category,
    images,
    } = product

    const [openModal,setOpenModal] = useState(false)

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.9}
                onLongPress={()=>setOpenModal(prev => !prev)}
                onPress={()=>navigate.navigate("productdetails", {id : _id})}
            >
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: i%2===0 ? colors.color1: colors.color3, 
                        
                    }}
                >
                    <Image
                        source={{
                            uri: images[0].url
                        }}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: "contain"
                        }}
                    />
                    <Text
                        style={{
                            width: 60,
                            color: colors.color2
                        }}
                        numberOfLines={1}
                    >
                        {RUPEE}{price}
                    </Text>
                    <Text
                        style={{
                            maxWidth: 120,
                            color: colors.color2
                        }}
                        numberOfLines={1}
                    >
                        {name}
                    </Text>
                    <Text
                        style={{
                            width: 60,
                            color: colors.color2
                        }}
                        numberOfLines={1}
                    >
                        {category}
                    </Text>
                    <Text
                        style={{
                            width: 60,
                            color: colors.color2
                        }}
                        numberOfLines={1}
                    >
                        {stock}
                    </Text>

                </View>
            </TouchableOpacity>

            {
                openModal && (
                    <AdminModal 
                        id={_id} 
                        deleteHandler={deleteHandler} 
                        navigate={navigate}
                        setOpenModal={setOpenModal}
                    />
                )
            }

        </>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10, 
    }
})

export default ProductListItem