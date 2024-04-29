import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import themeStyles from '../styles/themeStyles'

export const ICON_TYPES = {
    FontAwesome: 'FontAwesome',
    FontAwesome5: 'FontAwesome5',
    FontAwesome6: 'FontAwesome6',
    FontAwesome5Brands: 'FontAwesome5Brands',
    Feather: 'Feather',
    SimpleLineIcons: 'SimpleLineIcons',
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    Ionicons: 'Ionicons',
    Foundation: 'Foundation',
    EvilIcons: 'EvilIcons',
    MaterialIcons : 'MaterialIcons'
}

export function CustomIcon({ type = 'Ionicons', color = themeStyles.SECONDARY_COLOR, size = 25, name = 'search' }) {
    switch (type) {
        case 'Ionicons':
            return <Ionicons name={name} size={size} color={color} />
        case 'FontAwesome':
            return <FontAwesome name={name} size={size} color={color} />
        case 'FontAwesome5':
            return <FontAwesome5 name={name} size={size} color={color} />
        case 'FontAwesome6':
            return <FontAwesome6 name={name} size={size} color={color} />
        case 'Feather':
            return <Feather name={name} size={size} color={color} />
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={name} size={size} color={color} />
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} size={size} color={color} />
        case 'AntDesign':
            return <AntDesign name={name} size={size} color={color} />
        case 'Entypo':
            return <Entypo name={name} size={size} color={color} />
        case 'Foundation':
            return <Foundation name={name} size={size} color={color} />
        case 'MaterialIcons':
            return <MaterialIcons name={name} size={size} color={color} />
        case 'EvilIcons':
            return <EvilIcons name={name} size={size} color={color} />
        default:
            return <Ionicons name={name} size={size} color={color} />
    }
}