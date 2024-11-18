import { View, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.box}>
      <TextInput style={styles.input} placeholder="User"></TextInput>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Confirm password"
      ></TextInput>
      <Button title="Logar" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: "flex",
    gap: 10,
  },
  input: {
    padding: 12,
    borderColor: "#000",
    borderWidth: 1,
  },
});
