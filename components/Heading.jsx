import { View, Text } from 'react-native'
import React from 'react'

const Heading = ({text1="Our", text2="Products", componentStyle}) => {
  return (
    <View style={componentStyle} >
      <Text
            style={{
                fontSize: 25,
            }}
        >
            {text1}
        </Text>
        <Text
            style={{
                fontSize: 25,
                fontWeight: "900",
            }}
        >
            {text2}
        </Text>
    </View>
  )
}

export default Heading