import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles, defaultImg } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../redux/actions/otherActions'
import { useMessageAndErrorOther } from '../utils/hooks'

const UpdateProfile = ({navigation}) => {

    const {user} = useSelector((state)=> state.user)

    const [name,setName] = useState(user?.name)
    const [email,setEmail] = useState(user?.email)
    const [address,setAddress] = useState(user?.address)
    const [city,setCity] = useState(user?.city)
    const [country,setCountry] = useState(user?.country)
    const [pinCode,setPinCOde] = useState(user?.pinCode.toString())
    
    const dispatch = useDispatch()

    const loading = useMessageAndErrorOther(dispatch,navigation,"profile");

    const submitHandler = ()=>{
        dispatch(updateProfile(name, email, address, city, country, pinCode))

    }

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