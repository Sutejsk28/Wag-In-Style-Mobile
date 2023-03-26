import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles, defaultImg } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Header from '../components/Header'

const UpdateProfile = ({navigation}) => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")
    const [pinCode,setPinCOde] = useState("")
    
    

    const loading = false;

    const submitHandler = ()=>{
        alert("Yess")

    }

    const disableBtn = !name || !email || !city || !address || !country || !pinCode

  return (

        <View
            style={defaultStyle}
        >

            <Header back={true} />

            <View
                style={{marginBottom: 20, paddingTop: 70 }}
            >
                <Text style={formHeading} >Edit Profile</Text>
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
                    style={{
                        paddingVertical: 50,
                        flex: 0,
                    }}
                >
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
                        Update
                    </Button>
                </View>
            </ScrollView>

        </View>
  )
}

export default UpdateProfile