import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import Avatar from "../components/Avatar";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Avatar />
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
    width: "100%",
    minHeight: 549,
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
  },
});
