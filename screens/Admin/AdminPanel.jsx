import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading, formStyles } from '../../styles/styles'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'
import { useAdminProducts, useMessageAndErrorOther } from '../../utils/hooks'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { deleteProduct } from '../../redux/actions/otherActions'
import { getAdminProducts } from '../../redux/actions/productActions'

const AdminPanel = ({navigation}) => {
    
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const {loading, products, inStock, outOfStock}= useAdminProducts(dispatch,isFocused)
    
    const navigationHandler = (text)=>{
        switch (text) {
            case "Category":
                navigation.navigate("categories")
                break;
            case "All Orders":
                navigation.navigate("adminorders")
                break;
            case "Product":
                navigation.navigate("newproduct")
                break;
            default:
                navigation.navigate("adminorders")
        }
    }

    const deleteProductHandler = (id)=>{
        dispatch(deleteProduct(id))
    }

    const loadingDelete = useMessageAndErrorOther(dispatch,null,null,getAdminProducts)

  return (
    <View
        style={defaultStyle}
    >
        <Header back={true} />
        <View
            style={{
                marginBottom: 20,
                paddingTop: 70
            }}
        >
            <Text style={formHeading} >Admin Panel</Text>
        </View>

        {
            loading ? <Loading/> : (
                <>
                    <View
                        style={{
                            backgroundColor: colors.color3,
                            borderRadius: 20,
                            alignItems: "center",
                        }}
                    >

                    <Chart inStock={inStock} outOfStock={outOfStock} />

                    </View>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                                justifyContent: "space-between",
                            }}
                        >
                            <ButtonBox 
                                icon={"plus"} 
                                text={"Product"}
                                handler={navigationHandler}
                            />
                            <ButtonBox 
                                icon={"format-list-bulleted-square"} 
                                text={"All Orders"}
                                handler={navigationHandler}
                                reverse={true}
                            />
                            <ButtonBox 
                                icon={"plus"} 
                                text={"Category"}
                                handler={navigationHandler}
                            />
                        </View>
                    </View>

                    <ProductListHeading />
                    
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View>
                            { !loadingDelete &&
                                products.map((item,index)=>(
                                    <ProductListItem
                                        navigate={navigation}
                                        deleteHandler={deleteProductHandler}
                                        key={item._id}
                                        i = {index}
                                        product = {item}
                                    />
                                ))
                            }
                        </View>
                    </ScrollView>

                </>
            )
        }

    </View>
  )
}

export default AdminPanel