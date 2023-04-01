import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading, defaultImg } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../redux/actions/userActions'
import { useMessageAndErrorOther, useMessageAndErrorUser } from '../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import mime from 'mime'
import { updatePicture } from '../redux/actions/otherActions'

const Profile = ({navigation, route}) => {

    const {user} = useSelector( (state)=>state.user )
    
    const [avatar, setAvatar] = useState(defaultImg)
 
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const loading = useMessageAndErrorUser(navigation,dispatch,"login")

    const logoutHandler = () => {
        dispatch(logout())
    }

    const navigationHandler = (text) => {
        switch (text) {
            case "Admin": 
                navigation.navigate("adminpanel");
                break;
            case "Orders": 
                navigation.navigate("orders");
                break;
            case "Profile": 
                navigation.navigate("updateprofile");
                break;
            case "Password": 
                navigation.navigate("changepassword");
                break;
            case "Sign Out": 
                logoutHandler();
                break;
            default: 
                navigation.navigate("orders");
        }
    }

    const loadingPicture = useMessageAndErrorOther(dispatch,null,null,loadUser)

    useEffect(()=>{
        if(route.params?.image){
            setAvatar(route.params.image)
            const imageForm = new FormData()
            imageForm.append("file",{
                uri: route.params.image,
                type: mime.getType(route.params.image),
                name: route.params.image.split("/").pop()
            })
            dispatch(updatePicture(imageForm))
        }
        dispatch(loadUser())   
    },[route.params, dispatch, isFocused])

    useEffect(()=>{
        if(user?.avatar){
            setAvatar(user.avatar?.url) 
        }
    },[user])

  return (
    <>
            <View
                style={defaultStyle}
            >

            <View
                style={{marginBottom: 20, }}
            >
                <Text style={formHeading} >Profile</Text>
            </View>

            {
                loading ? <Loading /> : (
                    <>
                        <View
                            style={styles.container}
                        >
                            <Avatar.Image
                                size={100}
                                style={{
                                    backgroundColor: colors.color2,
                                }}
                                source= {{
                                    uri: avatar
                                }}
                            />
                            <TouchableOpacity
                                disabled={loadingPicture} 
                                onPress={()=>navigation.navigate("camera", {updateProfile: true})} >
                                    <Button 
                                        disabled={loadingPicture} 
                                        loading={loadingPicture}
                                        textColor={colors.color2} 
                                    >
                                        Change Photo
                                    </Button>
                            </TouchableOpacity>

                            <Text style={styles.nameText} >
                                {user?.name}
                            </Text>
                            <Text style={{
                                fontWeight: "300",
                                color: colors.color2
                            }} >
                                {user?.email}
                            </Text>
                        </View>
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    margin: 10,
                                    marginTop: 40,
                                    paddingTop: 40,
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <ButtonBox 
                                    handler={navigationHandler}
                                    text={"Orders"}
                                    icon={"format-list-bulleted-square"}
                                />
                                {
                                    user?.role === "admin" && (
                                        <ButtonBox
                                            handler={navigationHandler}
                                            text={"Admin"}
                                            icon={"view-dashboard"}
                                            reverse={true}
                                        />
                                    )
                                }
                                <ButtonBox
                                    handler={navigationHandler}
                                    text={"Profile"}
                                    icon={"pencil"}
                                />
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    margin: 10,
                                    justifyContent:"space-evenly",
                                }}
                            >
                                <ButtonBox
                                    handler={navigationHandler}
                                    text={"Password"}
                                    icon={"pencil"}
                                />
                                <ButtonBox
                                    handler={navigationHandler}
                                    text={"Sign Out"}
                                    icon={"exit-to-app"}
                                />
                            </View>

                        </View>
                    </>
                )
            }
        </View>

        <Footer activeRoute='profile' />

    </>
  )
}

const styles = StyleSheet.create({
    container: {
        elevation: 7,
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        alignItems: "center", 
    }, 
    nameText: {
        fontSize: 20,
        fontWeight: "500",
        margin: 10,
        color: colors.color2
    },
})

export default Profile