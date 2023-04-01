import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, RUPEE } from '../styles/styles'
import Heading from '../components/Heading'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const ConfirmOrder = () => {

    const navigate = useNavigation()


    const {cartItems} = useSelector((state)=>state.cart)

    const [itemsPrice] = useState(
        cartItems.reduce( (prev,curr) => prev + curr.quantity*curr.price, 0 )
    )
    const [shippingCharges] = useState(itemsPrice>10000 ? 0: 200)
    const [tax] = useState( Number((0.18 * itemsPrice).toFixed()) )

    const [totalAmount] = useState(itemsPrice+shippingCharges+tax)

  return (
    <View
        style={defaultStyle}
    >
        <Heading 
            text1='Confirm' 
            text2='Order'
            componentStyle={{
                paddingTop: 70,
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
                    cartItems.map((item)=>(
                        <ConfirmOrderItem
                            key={item.product}
                            image={item.image}
                            quantity={item.quantity}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </ScrollView>
      </View>

        <PriceTag heading={"Subtotal"} value={itemsPrice} />
        <PriceTag heading={"Shipping"} value={shippingCharges} />
        <PriceTag heading={"Tax"} value={tax} />
        <PriceTag heading={"Total"} value={totalAmount} />

        <TouchableOpacity onPress={()=>navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
        })}>
            <Button
                style={{
                    backgroundColor: colors.color3,
                    borderRadius: 100,
                    padd: 5,
                    margin: 10,
                }}
                textColor= {colors.color2}
                icon = {"chevron-right"}
            >
                Payment
            </Button>
        </TouchableOpacity>

    </View>
  )
}

const PriceTag = ({heading,value}) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5,
        }}
    >
        <Text
            style={{
                fontWeight: "800",
            }}
        >
            {heading}
        </Text>
        <Text>
            {RUPEE}{value}
        </Text>
    </View>
)

export default ConfirmOrder