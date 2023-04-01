import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../redux/actions/otherActions'
import { useMessageAndErrorOther } from '../utils/hooks'

const ForgotPassword = ({navigation}) => {

    const [email,setEmail] = useState("")


    const dispatch = useDispatch()

    const loading = useMessageAndErrorOther(dispatch,navigation,"verify")

    const submitHandler = ()=>{
        dispatch(forgotPassword(email))
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