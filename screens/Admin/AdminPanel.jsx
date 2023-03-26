import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading, formStyles } from '../../styles/styles'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
import { products } from '../Home'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'

const AdminPanel = ({navigation}) => {

    const loading=false

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
        console.log("Deleting product with ID: ", id);
    }

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

                    <Chart inStock={12} outOfStock={2} />

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
                            {
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