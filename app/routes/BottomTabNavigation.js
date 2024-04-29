import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Shop from "../screens/Shop";
import { ROUTES } from "./RouteConstants";
import { HomeIcon, ProfileIcon, ShopIcon } from "../assets/icons/Icons";
import themeStyles from "../styles/themeStyles";

const Tab = createBottomTabNavigator();

const ViewTab = ({ routeName, focused }) => {
    return (
        routeName == ROUTES.screenHome ? <HomeIcon color={focused && themeStyles.SECONDARY} />
        : routeName == ROUTES.screenProfile ? <ProfileIcon color={focused && themeStyles.SECONDARY} />
        : <ShopIcon color={focused && themeStyles.SECONDARY} size={20} />
    )
}

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon : ({focused, color}) =>{
                    return <ViewTab routeName={route.name} color={color} focused={focused}/>
                }
            })}
        >
            <Tab.Screen name={ROUTES.screenHome} component={HomeScreen}  />
            <Tab.Screen name={ROUTES.screenProfile} component={ProfileScreen}  />
            <Tab.Screen name={ROUTES.screenShop} component={Shop} />
        </Tab.Navigator>
    );
}