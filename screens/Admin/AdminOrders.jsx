import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import { Headline } from 'react-native-paper'
import OrderItem from '../../components/OrderItem'
import { useGetOrders, useMessageAndErrorOther } from '../../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { processOrder } from '../../redux/actions/otherActions'

const AdminOrders = ({navigation}) => {

   
    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    const {loading, orders} = useGetOrders(isFocused, true)

    const processOrderLoading = useMessageAndErrorOther(dispatch,navigation,"adminpanel");

    const updateHandler = (id)=> {
        dispatch(processOrder(id))
    }

  return (
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
            <Text style={formHeading} >All Orders</Text>
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
                                    admin={true}
                                    updateHandler={updateHandler}
                                    loading={processOrderLoading}
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

export default AdminOrders