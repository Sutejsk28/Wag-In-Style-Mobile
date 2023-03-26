import { Platform, StatusBar, StyleSheet } from "react-native"

export const colors = {
    color1: "#ff9531",
    color1_bright: "rgba(245, 126, 5,1)",
    color1_light1: "rgba(31, 29, 28,0.8)",
    color2: "#F6F6F6",
    color3: "#5F9DF7",
    color4: "transparent",
    color5: "#f2f2f2",
    color6: "#f7f7f7",
    color7: "#edfaf9"
}

export const defaultStyle = StyleSheet.create({
    padding: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2
})

export const inputStyle = StyleSheet.create({
    height: 50,
    backgroundColor: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20,
})

export const formHeading = {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color3,
    color: colors.color2,
    margin: 25,
    padding: 5,
    borderRadius: 5,
}

export const inputOptions = {   
    style: {inputStyle} ,
    mode: "outlined",
    activeOutlineColor : colors.color1,
}

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10, 
    },
    forgotPassText: {
        color: colors.color2,
        marginHorizontal: 20,
        marginVertical: 10,
        alignSelf: "flex-end",
        fontWeight: "200",
    }, 
    btnLogin: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 5,
    },
    orText : {
        alignSelf:"center",
        fontSize: 18,
        fontWeight: "100",
        color: colors.color2,
    },
    link: {
        alignSelf: "center",
        color: colors.color2,
        fontSize: 18,
        textTransform: "uppercase",
        marginVertical: 10,
        marginHorizontal: 20,
    },
})

export const defaultImg = "https://cdn-icons-png.flaticon.com/512/147/147144.png?w=360"

export const RUPEE = "₹"

