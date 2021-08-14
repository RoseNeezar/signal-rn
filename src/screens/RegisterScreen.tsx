import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />

      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
      </View>
      <Button title="Login" containerStyle={styles.button} />
      <Button title="Register" type="outline" containerStyle={styles.button} />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
