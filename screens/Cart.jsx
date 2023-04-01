import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, RUPEE } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

// export const cartItems = [
//     {
//         name: "Macbook",
//         image: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
//         product: "product1",
//         stock: 4,
//         price: 4999,
//         quantity: 2,
//     },
//     {
//         name: "Lenovo",
//         image: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
//         product: "product2",
//         stock: 4,
//         price: 4999,
//         quantity: 2,
//     },
//     {
//         name: "HP",
//         image: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
//         product: "product3",
//         stock: 4,
//         price: 4999,
//         quantity: 2,
//     },
//     {
//         name: "DELL",
//         image: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg",
//         product: "product4",
//         stock: 4,
//         price: 4999,
//         quantity: 2,
//     },
// ]

const Cart = () => {

    const navigate = useNavigation()
    const dispatch = useDispatch()

    const {cartItems} = useSelector((state)=>state.cart)

    const incrementHandler = (id, name, price, image, stock, quantity)=>{
        const newQty = quantity+1;

        if(stock<=quantity) return Toast.show({
            type: "error",
            text1: "Out Of Stock",
            text2: `${name} are out of stock`
        });

        dispatch({
            type: "addToCart",
            payload: {
                product: id,
                name,
                price,
                image,
                stock,
                quantity: newQty,
            }
        })

        Toast.show({
            type: "success",
            text1: "Item added to cart",
        })
    }
    const decrementHandler = (id, name,price,image, stock, quantity)=>{
        
        const newQty = quantity-1;

        if (1 >= quantity) return dispatch({
            type: "removeFromCart",
            payload: id,
        })

        dispatch({
            type: "addToCart",
            payload: {
                product: id,
                name,
                price,
                image,
                stock,
                quantity: newQty,
            }
        })
    }
    
  return (
    <View
        style={{
            ...defaultStyle,
            padding: 0,
        }}
    >
        <Header back={true} emptyCart={true} />
        <Heading
            text1='Shopping'
            text2='Cart'
            componentStyle={{
                paddingTop: 70,
                marginLeft: 35,
        }}
        />

        <View
            style={{
                paddingVertical: 20,
                flex: 1,
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    cartItems.length > 0 ? cartItems.map( (item,index)=>(
                        <CartItem
                            navigate={navigate}
                            key={item.product}
                            id={item.product}
                            name={item.name}
                            stock={item.stock}
                            price={item.price}
                            imgSrc={item.image}
                            index={index}
                            qty={item.quantity}
                            incrementHandler={incrementHandler}
                            decrementHandler={decrementHandler}
                        />
                    ))
                    : (
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 18,
                            }}
                        >No Items Yet</Text>
                    )
                }
            </ScrollView>
        </View>

        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 35,
            }}
        >
            <Text>{cartItems.length} Items</Text>
            <Text>
                {RUPEE} 
                {cartItems.reduce( 
                    (prev,curr) => prev + curr.quantity*curr.price,
                    0
                )}
            </Text>
        </View>
        
        <TouchableOpacity
            onPress={ cartItems.length>0 ? ()=>navigate.navigate("confirmorder") : null }
        >
            <Button
                style={{
                    backgroundColor: colors.color3,
                    borderRadius: 100,
                    padding: 5,
                    margin: 30,
                }}
                icon={"cart"}
                textColor={colors.color2}
            >
                Checkout
            </Button>
        </TouchableOpacity>

    </View>
  )
}

export default Cart