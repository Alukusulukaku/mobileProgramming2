import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { LoginScreen } from "./screens/login.component";
import { DetailsScreen } from "./screens/detail.component";
import { HomeScreen } from "./screens/home.component";
import { useBottomNavBar } from "./context/BottomNavBarContext";
import CartScreen from "./screens/cart.component";
import ContactScreen from "./screens/contact.component";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 30, height: 30 }]}
    name="home"
    pack="material"
  />
);

const CartIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 30, height: 30 }]}
    name="shopping-cart-outline"
    pack="eva"
  />
);

const UserIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 30, height: 30 }]}
    name="person"
    pack="material"
  />
);

const MapIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 30, height: 30 }]}
    name="map"
    pack="fa5"
  />
);

function BottomTabBar({ navigation, state }) {
  const { tabBarVisible } = useBottomNavBar();

  return (
    <BottomNavigation
      selectedIndex={state.index}
      appearance="noIndicator"
      style={{
        elevation: 20,
        shadowColor: "#000",
        display: `${tabBarVisible != true ? "none" : ""}`,
      }}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title={"Home"} icon={HomeIcon} />
      <BottomNavigationTab title={"Cart"} icon={CartIcon} />
      <BottomNavigationTab title={"User"} icon={UserIcon} />
      <BottomNavigationTab title={"Location"} icon={MapIcon} />
    </BottomNavigation>
  );
}

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Cart" component={CartScreen} />
    <Screen name="Users" component={LoginScreen} />
    <Screen name="Location" component={ContactScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
