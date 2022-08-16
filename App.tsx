import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Images/background.jpg")}
        style={styles.background}
      >
        <RegistrationScreen></RegistrationScreen>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    fontFamily: "Roboto",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
