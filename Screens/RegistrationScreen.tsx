import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import NavLink from "../components/NavLink";

export default function RegistrationScreen() {
  const [keyboardIsOpen, setKeyboardISOpen] = useState(false);
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardISOpen(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardISOpen(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });

  const handleSubmit = () => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Avatar />
      <View style={styles.form}>
        <Text style={styles.title}>Регистрация</Text>
        <TextInput
          style={styles.input}
          textAlign="left"
          placeholder="Логин"
        ></TextInput>
        <TextInput
          style={styles.input}
          textAlign="left"
          placeholder="Адрес электронной почты"
        ></TextInput>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            textAlign="left"
            secureTextEntry={isHiddenPassword}
            placeholder="Пароль"
            maxLength={26}
          ></TextInput>

          <Text
            onPress={() => setIsHiddenPassword((prev) => !prev)}
            style={styles.showPasword}
          >
            {isHiddenPassword ? "Показать" : "Скрыть"}
          </Text>
        </View>

        {!keyboardIsOpen && (
          <View style={{ marginBottom: 50, alignItems: "center" }}>
            <Button handlePress={handleSubmit} title="Зарегистрироваться" />
            <NavLink title="Уже есть аккаунт? Войти" />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
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
    alignItems: "center",
  },
  showPasword: {
    position: "absolute",
    zIndex: 1,
    color: "#1B4371",
    fontSize: 16,
    bottom: 30,
    right: 16,
  },
  input: {
    textAlign: "center",
    paddingLeft: 16,
    width: 343,
    minHeight: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
});
