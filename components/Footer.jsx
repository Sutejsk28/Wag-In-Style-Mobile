import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { useSelector } from 'react-redux'

const Footer = ({activeRoute="home"}) => {

    const navigate = useNavigation()

    const {loading, isAuthenticated} = useSelector((store)=>store.user)

    const avatarOptions = {
        color: colors.color2,
        size: 50 ,
        style: {
            backgroundColor: colors.color1
        }
    }

    const navigationHandler = (key) => {
        switch (key) {
            case 0:
                navigate.navigate("home")
                break;
            case 1:
                navigate.navigate("cart")
                break;
            case 2:
                isAuthenticated ? navigate.navigate("profile") : navigate.navigate("login")
                break;
            default:
                navigate.navigate("home")
        }
    }

    return (
        <View 
            style={{
                backgroundColor: colors.color1,
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={ ()=> navigationHandler(1) }
                >
                    <Avatar.Icon 
                        {...avatarOptions}
                        icon = {activeRoute === "cart" ? "shopping": "shopping-outline"}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={ ()=> navigationHandler(2) }
                >
                    <Avatar.Icon 
                        {...avatarOptions}
                        icon = {
                            isAuthenticated=== true
                                ?activeRoute === "profile" 
                                    ? "account"
                                    : "account-outline"
                                : "login"
                            }
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    position: "absolute",
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    backgroundColor: colors.color2,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    top: -50,
                    // elevation: 2,
                }}
            >
                <View
                    style={{
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={ ()=> navigationHandler(0) }
                    >
                        <Avatar.Icon 
                            {...avatarOptions}
                            icon = {activeRoute === "home" ? "home": "home-outline"}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Footer