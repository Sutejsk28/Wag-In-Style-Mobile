import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../styles/styles'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'

export const orders = [
    {
    _id: "1",
    shippingInfo: {
        address: "217/18A Ganesh Marg",
        city: "Belagavi",
        country: "India",
        pinCode: 590006
    },
    createdAt: "12-2-2023T245",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 2000,
    },
    {
        _id: "2",
        shippingInfo: {
            address: "217/18A Ganesh Marg",
            city: "Belagavi",
            country: "India",
            pinCode: 590006
        },
        createdAt: "12-2-2023T245",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 2000,
    },
    {
        _id: "3",
        shippingInfo: {
            address: "217/18A Ganesh Marg",
            city: "Belagavi",
            country: "India",
            pinCode: 590006
        },
        createdAt: "12-2-2023T245",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 2000,
    },
]

const Orders = () => {

    const loading = false

  return (
    <View
        style={{
            ...defaultStyle,
            backgroundColor: colors.color5,
        }}
    >

        <Header back={true} />

        <View
            style={{marginBottom: 20, paddingTop: 70 }}
        >
            <Text style={formHeading} >Orders</Text>
        </View>

        {
            loading ? <Loading/> : (
                <View
                    style={{
                        padding: 10,
                        flex: 1,
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            orders.length>0 ? orders.map((item,index)=>(
                                <OrderItem
                                    key={index}
                                    order = {item}
                                    i= {index}
                                />
                            ))
                            : <Headline
                                    style={{textAlign: "center"}}
                                >No Orders Yet</Headline>
                        }
                    </ScrollView>
                </View>
            )
        }

    </View>
  )
}

export default Orders