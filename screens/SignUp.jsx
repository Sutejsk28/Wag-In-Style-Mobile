import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles, defaultImg } from '../styles/styles'
import { Avatar, Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

const SignUp = ({navigation,route}) => {

    const [avatar,setAvatar] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")
    const [pinCode,setPinCOde] = useState("")
    
    

    const loading = false;

    const submitHandler = ()=>{
        alert("Yess")
    }

    const disableBtn = !name || !email || !password || !city || !address || !country || !pinCode

    useEffect(()=>{
        if(route.params?.image){
            setAvatar(route.params.image)
        }         
    },[route.params])

  return (

    <>
        <View
            style={defaultStyle}
        >

            <View
                style={{marginBottom: 20, }}
            >
                <Text style={formHeading} >Sign Up</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    padding: 20,
                    elevation: 10,
                    borderRadius: 10,
                    backgroundColor: colors.color3,
                }}
            >
                <View
                    style={{minHeight: 900}}
                >
                    <Avatar.Image
                        style={{
                            alignSelf: "center",
                            backgroundColor: colors.color1,
                        }}
                        size={80}
                        source={{
                            uri: avatar?avatar:defaultImg
                        }}
                    />
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("camera")}
                    >
                        <Button
                            textColor={colors.color2}
                        >Change Photo</Button>
                    </TouchableOpacity>
                    <TextInput
                        {...inputOptions}
                        placeholder="name"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="address"
                        value={address}
                        onChangeText={setAddress}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="city"
                        value={city}
                        onChangeText={setCity}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="country"
                        value={country}
                        onChangeText={setCountry}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="pincode"
                        value={pinCode}
                        onChangeText={setPinCOde}
                    />

                    <Button 
                        loading={loading}
                        style={styles.btnLogin}
                        textColor= {colors.color2}
                        disabled={disableBtn}
                        onPress={submitHandler}
                    >
                        Sign Up
                    </Button>

                    <Text 
                        style={styles.orText}
                    >
                        OR
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress = {()=>navigation.navigate("signup")}
                    >
                        <Text style={styles.link} >Log In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>

        <Footer activeRoute='profile' />

    </>
  )
}

export default SignUp