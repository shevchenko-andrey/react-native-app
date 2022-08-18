import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FormikHelpers } from "formik";
import { AuthCredentials } from "../interfaces/AutnCredentials";
import AuthForm from "../components/AuthForm";
const initialValues = { email: "", password: "" };
export default function LoginScreen() {
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
        <AuthForm
          onSubmit={onSubmit}
          initialValues={initialValues}
          type="login"
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
