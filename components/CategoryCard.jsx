import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'

const CategoryCard = ({name, id, deleteHandler, styles}) => {
    return (
        <View
            style={styles.cardContainer}
        >
        <Text
            style={styles.cardText}
        >
            {name}
        </Text>

        <TouchableOpacity
            onPress={()=>deleteHandler(id)}
        >
            <Avatar.Icon
                icon={"delete"}
                size={30}
                style={{
                    backgroundColor: colors.color1,
                }}
            />
        </TouchableOpacity>

        </View>
    )
}

export default CategoryCard