import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import React from "react";
import Home from "../FrontEnd/Screens/Home";
import Booking from "../FrontEnd/Screens/Booking";
import Saved from "../FrontEnd/Screens/Saved";
import Profile from "../FrontEnd/Screens/Profile";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={22} color="black" />
            ) : (
              <AntDesign name="home" size={22} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: "Booking",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications" size={22} color="black" />
            ) : (
              <Ionicons name="notifications-outline" size={22} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={22} color="black" />
            ) : (
              <AntDesign name="hearto" size={22} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={22} color="black" />
            ) : (
              <Ionicons name="person-add-outline" size={22} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
