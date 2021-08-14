import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const gloablScreenOptions: StackNavigationOptions = {
  headerStyle: { backgroundColor: "#2c6bed" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={gloablScreenOptions}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
