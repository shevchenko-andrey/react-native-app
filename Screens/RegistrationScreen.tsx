import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FormikHelpers } from "formik";
import Avatar from "../components/Avatar";
import AuthForm from "../components/AuthForm";
import { AuthCredentials } from "../interfaces/AutnCredentials";
const initialValues = { login: "", email: "", password: "" };
export default function RegistrationScreen() {
  const onSubmit = (
    values: AuthCredentials,
    { resetForm }: FormikHelpers<AuthCredentials>
  ) => {
    console.log("Values: ", values);
    resetForm();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Avatar />
        <AuthForm
          onSubmit={onSubmit}
          initialValues={initialValues}
          type="register"
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",

    alignItems: "center",
  },
});
