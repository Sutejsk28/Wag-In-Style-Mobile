import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

const Login = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loading = false;

    const submitHandler = ()=>{
        alert("Yess")
    }

  return (

    <>
        <View
            style={defaultStyle}
        >

            <View
                style={{marginBottom: 20, }}
            >
                <Text style={formHeading} >Login</Text>
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
                <TextInput
                    {...inputOptions}
                    placeholder="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity 
                    onPress={()=>navigation.navigate("forgotpassword")}
                    activeOpacity= {0.8}
                >
                    <Text
                        style={styles.forgotPassText}
                    >Forgot Password?</Text>
                </TouchableOpacity>

                <Button 
                    loading={loading}
                    style={styles.btnLogin}
                    textColor= {colors.color2}
                    disabled={email==="" || password===""}
                    onPress={submitHandler}
                >
                    Log In
                </Button>

                <Text style={styles.orText}
                >OR</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress = {()=>navigation.navigate("signup")}
                >
                    <Text style={styles.link} >Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

        <Footer activeRoute='profile' />

    </>
  )
}

export default Login