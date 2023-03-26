import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, RUPEE } from '../styles/styles'
import { Button } from 'react-native-paper'

const OrderItem = ({order,admin=false,updateHandler, loading, i=0}) => {
    const {_id,
        totalAmount, 
        shippingInfo,
        createdAt, 
        orderStatus, 
        paymentMethod,
    } = order
    const {address} = shippingInfo
    const orderedOn = createdAt.split("T")[0]
  return (
    <View
        style={{
            ...styles.container,
            backgroundColor: i%2===0 ? colors.color2 : colors.color3
        }}
    >
      <Text
        style={{
            ...styles.text,
            backgroundColor: i%2===0 ? colors.color3 : colors.color1
        }}
      >
        ID - #{_id}
      </Text>

        <TextBox title="Address" value={address} i={i} />
        <TextBox title="Ordered On" value={orderedOn} i={i} />
        <TextBox title="Price" value={totalAmount} i={i} />
        <TextBox title="Status" value={orderStatus} i={i} />
        <TextBox title="Payment method" value={paymentMethod} i={i} />

        {
            admin && (
                <Button
                    icon={"update"}
                    mode={"elevated"}
                    textColor={colors.color1}
                    style={{
                        width: 200,
                        alignSelf: "center",
                        marginTop: 10,
                    }}
                    onPress={()=>updateHandler(_id)}
                    loading={loading}
                    disabled={loading}
                >
                    Update
                </Button>
            )
        }

    </View>
  )
}

const TextBox = ({title,value,i})=>(
        <Text
            style={{
                marginVertical: 6,
                color: i%2===0 ? colors.color3 : colors.color2
            }}
        >
            <Text style={{fontWeight: "900"}} >{title} - </Text>
            {title==="Price" && RUPEE}
            {value}
        </Text>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
    },
    text: {
        color: colors.color2,
        fontSize: 16,
        fontWeight: "900",
        marginHorizontal: -20,
        marginTop: -20,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
})

export default OrderItem