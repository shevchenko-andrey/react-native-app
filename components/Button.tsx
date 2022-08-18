import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
interface Props {
  title: string;
  handlePress: () => void;
}
export default function Button({ title, handlePress }: Props) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      style={styles.btn}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto",
  },
  btn: {
    alignItems: "center",
    minWidth: 343,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginTop: 43,
  },
});
