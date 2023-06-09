import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import { changePassword } from '../redux/actions/otherActions'
import { useMessageAndErrorOther } from '../utils/hooks'

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const dispatch = useDispatch()
    const loading = useMessageAndErrorOther(dispatch)

    const submitHandler = ()=>{
        dispatch(changePassword(oldPassword,newPassword))
        setOldPassword("")
        setNewPassword("")
    }

  return (

        <View
            style={defaultStyle}
        >
            <Header back={true} />
            <View
                style={{marginBottom: 20, paddingTop: 70}}
            >
                <Text style={formHeading} >Change Password</Text>
            </View>

            <View
                style={styles.container}
            >
                <TextInput
                    {...inputOptions}
                    placeholder="old password"
                    secureTextEntry={true}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                />
                <TextInput
                    {...inputOptions}
                    placeholder="new password"
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <Button 
                    loading={loading}
                    style={styles.btnLogin}
                    textColor= {colors.color2}
                    disabled={oldPassword==="" || newPassword===""}
                    onPress={submitHandler}
                >
                    Change Password
                </Button>
            </View>
        </View>
  )
}

export default ChangePassword