import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { RootStackParamList } from "../../App";
import { db } from "../firebase";

type IAddChatScreen = StackNavigationProp<RootStackParamList, "AddChatScreen">;

const AddChatScreen = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation<IAddChatScreen>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({ chatName: text })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => alert(err));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={text}
        onChangeText={(res) => setText(res)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button disabled={!text} title="Create new Chat" onPress={createChat} />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
