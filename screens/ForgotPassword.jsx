import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

const ForgotPassword = ({navigation}) => {

    const [email,setEmail] = useState("")

    const loading = false;

    const submitHandler = ()=>{
        alert("Yess")
        navigation.navigate("verify")
    }

  return (

    <>
        <View
            style={defaultStyle}
        >

            <View
                style={{marginBottom: 20, }}
            >
                <Text style={formHeading} >Forgot Password</Text>
            </View>

            <View
                style={styles.container}
            >
                <TextInput
                    {...inputOptions}
                    placeholder="email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Button 
                    loading={loading}
                    style={styles.btnLogin}
                    textColor= {colors.color2}
                    disabled={email===""}
                    onPress={submitHandler}
                >
                    Send OTP
                </Button>

                <Text style={styles.orText}
                >OR</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress = {()=>navigation.navigate("login")}
                >
                    <Text style={styles.link} >Log In</Text>
                </TouchableOpacity>
            </View>
        </View>

        <Footer activeRoute='profile' />

    </>
  )
}

export default ForgotPassword