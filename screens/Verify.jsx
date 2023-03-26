import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

const Verify = ({navigation}) => {

    const [otp,setOtp] = useState("")
    const [password,setPassword] = useState("")

    const loading = false;

    const submitHandler = ()=>{
        alert("Yess")
        navigation.navigate("login")
    }

  return (

    <>
        <View
            style={defaultStyle}
        >

            <View
                style={{marginBottom: 20, }}
            >
                <Text style={formHeading} >Reset Password</Text>
            </View>

            <View
                style={styles.container}
            >
                <TextInput
                    {...inputOptions}
                    placeholder="otp"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                />

                <TextInput
                    {...inputOptions}
                    placeholder="new password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <Button 
                    loading={loading}
                    style={styles.btnLogin}
                    textColor= {colors.color2}
                    disabled={otp==="" || password===""}
                    onPress={submitHandler}
                >
                    Reset
                </Button>

                <Text style={styles.orText}
                >OR</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress = {()=>navigation.navigate("forgotpassword")}
                >
                    <Text style={styles.link} >Resend OTP</Text>
                </TouchableOpacity>
            </View>
        </View>

        <Footer activeRoute='profile' />

    </>
  )
}


export default Verify