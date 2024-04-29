import { TouchableOpacity } from "react-native";
import { CustomIcon, ICON_TYPES } from "../../components/CustomIcon";


export const HomeIcon =({color, size})=>(
    <CustomIcon type={ICON_TYPES.AntDesign} name="home" color={color} size={size}/>
);
export const ProfileIcon =({color, size})=>(
    <CustomIcon type={ICON_TYPES.Feather} name="user" color={color} size={size} />
);
export const ShopIcon =({color, size})=>(
    <CustomIcon type={ICON_TYPES.FontAwesome6} name="shop" color={color} size={size} />
);