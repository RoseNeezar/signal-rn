import React, { useEffect, useState } from "react";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { db } from "../firebase";

interface ICustomListItem {
  id: number;
  chatName: string;
  enterChat: any;
}

const CustomListItem: FC<ICustomListItem> = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(String(id))
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setChatMessages(snap.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, []);
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoUrl ||
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
