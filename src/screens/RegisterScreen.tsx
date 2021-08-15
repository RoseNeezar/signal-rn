import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { RootStackParamList } from "../../App";
import { auth } from "../firebase";

type IRegisterScreen = StackNavigationProp<
  RootStackParamList,
  "RegisterScreen"
>;

const RegisterScreen = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [passsword, setPasssword] = useState<string | undefined>();
  const [imageUrl, setImageUrl] = useState("");
  const navigation = useNavigation<IRegisterScreen>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const register = () => {
    if (email && passsword && name) {
      auth.createUserWithEmailAndPassword(email, passsword).then((authUser) => {
        authUser.user?.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create Signal clone account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          value={name}
          onChangeText={(res) => setName(res)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(res) => setEmail(res)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={passsword}
          onChangeText={(res) => setPasssword(res)}
        />
        <Input
          placeholder="Profile Picture"
          value={imageUrl}
          onChangeText={(res) => setImageUrl(res)}
        />
      </View>
      <Button
        title="Register"
        containerStyle={styles.button}
        raised
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
