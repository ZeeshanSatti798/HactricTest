import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'
import themeStyles from '../styles/themeStyles'

const CustomText = ({children, style, numberOfLines, heading, black, white, primary, secondary }) => {

    const textColor = black ? themeStyles.BLACK 
    : white ? themeStyles.WHITE 
    : primary ? themeStyles.PRIMARY 
    : secondary ? themeStyles.SECONDARY 
    : themeStyles.LIGHT_GREY;

  return (
    <Text 
        style={[styles.txt, style, { color: textColor }, heading && {fontWeight:'bold', fontSize:18} ]} 
        numberOfLines={numberOfLines}>
        {children}
    </Text>
  )
}

export default CustomText

const styles = StyleSheet.create({
    txt:{...globalStyles.h6R}
})