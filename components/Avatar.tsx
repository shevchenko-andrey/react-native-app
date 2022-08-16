import { StyleSheet, Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Avatar() {
  return (
    <View style={styles.tumb}>
      {/* <Image
        source={require("../assets/icon.png")}
        style={styles.avatar}
      ></Image> */}
      <Ionicons
        name="add-circle-outline"
        size={30}
        style={styles.addIcon}
        color="#FF6C00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tumb: {
    position: "relative",
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    width: 120,
    height: 120,
    zIndex: 1,
    top: 60,
  },
  avatar: {
    overflow: "hidden",
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
  addIcon: {
    position: "absolute",
    bottom: 10,
    right: -15,
  },
});
