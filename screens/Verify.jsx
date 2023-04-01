import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useMessageAndErrorOther } from '../utils/hooks'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../redux/actions/otherActions'

const Verify = ({navigation}) => {

    const [otp,setOtp] = useState("")
    const [password,setPassword] = useState("")


    const dispatch = useDispatch()

    const loading = useMessageAndErrorOther(dispatch,navigation,"login");

    const submitHandler = ()=>{
        dispatch(resetPassword(otp,password))
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
                    secureTextEntry={true}
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