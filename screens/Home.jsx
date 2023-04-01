import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/actions/productActions'
import { useSetCategories } from '../utils/hooks'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Home = () => {

    const [category, setCategory] = useState()
    const [activeSearch, setActiveSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [categories, setCategories] = useState([])

    const navigate = useNavigation()
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const { products } = useSelector((state)=> state.product)

    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

    const addToCartHandler = (id, name, price, image, stock)=>{
        if (stock===0) return Toast.show({
            type: "error",
            text1: "Out Of Stock",
            text2: `${name} are out of stock`
        })
        dispatch({
            type: "addToCart",
            payload: {
                product: id,
                name,
                price,
                image,
                stock,
                quantity: 1,
            }
        })
        Toast.show({
            type: "success",
            text1: "Item added to cart"
        })
    }

    useSetCategories(setCategories, isFocused)

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            dispatch(getAllProducts(searchQuery, category))
        }, 500)

        return ()=>{
            clearTimeout(timeOutId)
        }

    },[dispatch,searchQuery,category, isFocused])

  return (

    <>

        {
            activeSearch && (
                <SearchModal 
                    setActiveSearch={setActiveSearch} 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    products={products}
                />
            )
        }

        <View style={defaultStyle} >
            <Header/>

            <View style={{
                paddingTop: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }} >
                <View>
                    <Heading />
                </View>

                <View>
                    <TouchableOpacity
                        onPress={()=> setActiveSearch((prev)=>!prev)}
                    >
                        <Avatar.Icon 
                            icon={"magnify"}
                            color={"gray"}
                            style={{
                                backgroundColor: colors.color2,
                                elevation: 12,
                            }}
                            size={50}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    height: 80,
                }}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator= {false}
                    contentContainerStyle={{
                        alignItems: "center",
                    }}
                >
                    {
                        categories.map((item,index)=>(
                            <Button
                                key={item._id}
                                style={{
                                    backgroundColor: item._id===category ? colors.color1 : colors.color5,
                                    borderRadius: 100,
                                    margin: 5,
                                }}
                                onPress={ () => categoryButtonHandler(item._id) }
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: item._id===category ? colors.color2 : "gray",
                                    }}
                                >
                                    {item.category}
                                </Text>
                            </Button>
                        ))
                    }
                </ScrollView>

                

            </View>

            <View
                style={{
                    flex: 1
                }}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        products.map((product,index)=>(
                            <ProductCard
                                stock={product.stock}
                                name={product.name}
                                price={product.price}
                                image={product.images[0].url}
                                addToCartHandler={addToCartHandler}
                                id={product._id}
                                key={product._id}
                                i={index}
                                navigate={navigate}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>

        <Footer activeRoute='home' />

    </>
  )
}

export default Home