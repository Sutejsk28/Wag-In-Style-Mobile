import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { colors } from '../styles/styles'

const screenWidth = Dimensions.get("screen").width - 60

const Chart = ({inStock,outOfStock}) => {

    const data = [
        {
            name: "Out Of Stock",
            population: outOfStock,
            color: colors.color1_light1,
            legendFontColor: colors.color2,
        },
        {
            name: "In Stock",
            population: inStock,
            color: colors.color1_bright,
            legendFontColor: colors.color2,
        },
    ]

const chartConfig = {
    color: (opacity=1) => `rgba(26,255,146,${opacity})`
};

  return (
    <View>
        <PieChart
            data={data}
            width={screenWidth}
            height={150}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={colors.color3}
            absolute
            style={{
                borderRadius: 20,
            }}
        />
    </View>
  )
}

export default Chart