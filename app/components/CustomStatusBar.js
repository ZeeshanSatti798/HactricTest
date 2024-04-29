import { StatusBar } from 'react-native'
import React from 'react'

const CustomStatusBar = ({ hideStatusBar = true, backgroundColor, barStyle }) => {
    return (
        <StatusBar
            translucent={hideStatusBar ? true : false}
            backgroundColor={backgroundColor ?? 'transparent'}
            barStyle={barStyle}
        />
    )
};

export default CustomStatusBar;