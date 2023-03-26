import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyle, RUPEE } from '../styles/styles'
import Heading from '../components/Heading'
import { cartItems } from './Cart'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const ConfirmOrder = () => {

    const navigate = useNavigation()

    const itemsPrice = 4000
    const shippingCharges = 200
    const tax = 0.18 * itemsPrice

    const totalAmount = itemsPrice+shippingCharges+tax

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