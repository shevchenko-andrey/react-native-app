import { StyleSheet, TextInput, Text, View, Keyboard } from "react-native";
import React from "react";
import { Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import Button from "./Button";
import NavLink from "./NavLink";
import { AuthCredentials } from "../interfaces/AutnCredentials";

interface Props {
  initialValues: AuthCredentials;
  type: "register" | "login";
  onSubmit: (
    values: AuthCredentials,
    { resetForm }: FormikHelpers<AuthCredentials>
  ) => void;
}
export default function AuthForm({ onSubmit, type, initialValues }: Props) {
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
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.form}>
          <Text
            style={{
              ...styles.title,
              marginTop: type === "register" ? 92 : 32,
            }}
          >
            {type === "register" ? "Регистрация" : "Войти"}
          </Text>
          {type === "register" && (
            <TextInput
              style={styles.input}
              textAlign="left"
              placeholder="Логин"
              onChangeText={handleChange("login")}
              value={values.login}
            ></TextInput>
          )}
          <TextInput
            style={styles.input}
            textAlign="left"
            placeholder="Адрес электронной почты"
            onChangeText={handleChange("email")}
            value={values.email}
          ></TextInput>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              textAlign="left"
              secureTextEntry={isHiddenPassword}
              placeholder="Пароль"
              maxLength={26}
              onChangeText={handleChange("password")}
              value={values.password}
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
              <NavLink
                title={
                  type === "register"
                    ? "Уже есть аккаунт? Войти"
                    : "Нет аккаунта? Зарегистрироваться"
                }
              />
            </View>
          )}
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "Roboto",
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",

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
    fontFamily: "Roboto",
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
