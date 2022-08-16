import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={styles.avatar}
      ></Image>
      <View style={styles.form}>
        <Text style={styles.title}>Регистрация</Text>
        <TextInput style={styles.input} placeholder="Логин"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Адрес электронной почты"
        ></TextInput>
        <TextInput style={styles.input} placeholder="Пароль"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    zIndex: 1,
    top: 190,
    width: 120,
    height: 120,
  },

  title: {
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 33,
    color: "#212121",
  },

  form: {
    backgroundColor: "#fff",
    minWidth: 375,
    height: 549,
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,

    // border: 1px solid #E8E8E8;
    // border-radius: 8px;
  },
});
