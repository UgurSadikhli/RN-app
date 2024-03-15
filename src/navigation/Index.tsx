import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import Product from "../pages/Product";
import BottomTabs from "./TabsNavigation";

export type RootStackParams = {
  Home: any;
  Login: any;
  SignUp: any;
  Categories: any;
  Products: any;
  Product: any;
  Profile: any;
  AddressChange: any;
  Tabs: any;
  CardChange: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const BodyNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <RootStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <RootStack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <RootStack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{
            header: () => null,
          }}
        />
      </RootStack.Navigator>
    </SafeAreaView>
  );
};

export default BodyNavigation;
