import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Heading from '../components/Heading'


const categories = [
    {category: "Football", _id: "1"},
    {category: "baseBall", _id: "2"},
    {category: "cricket", _id: "3"},
    {category: "Basketball", _id: "4"},        
    {category: "badminton", _id: "5"},
];

export const products = [
    {
        name: "product1", 
        price: 250, 
        stock: 23,
        _id: "1",
        images:[{
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg"
        }],
        category: "c1",
    },
    {
        name: "product2", 
        price: 250, 
        stock: 23,
        _id: "2",
        images:[{
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg"
        }],
        category: "c1",
    },
    {
        name: "product3", 
        price: 250, 
        stock: 23,
        _id: "3",
        images:[{
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg"
        }],
        category: "c1",
    },
    {
        name: "product4", 
        price: 250, 
        stock: 23,
        _id: "4",
        images:[{
            url: "https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg"
        }],
        category: "c1",
    },
]

const Home = () => {

    const [category, setCategory] = useState("1")
    const [activeSearch, setActiveSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigation()

    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

    const addToCartHandler = ()=>{
        console.log("add to cart");
    }

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
                                stock={product.stocks}
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