import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface Props {
  title: string;
}
export default function NavLink({ title }: Props) {
  return <Text style={styles.link}>{title}</Text>;
}

const styles = StyleSheet.create({
  link: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
  },
});
