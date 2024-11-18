import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export interface PostProps {
  name?: string;
  likes?: number;
  id?: number;
}

export default function Post(props: PostProps) {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.likes}</Text>
      <Image source={require("../../assets/images/post-img.png")} />
    </View>
  );
}
