import { Stack } from "expo-router";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import {
  ImageBackground,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function Layout() {
  return (
    <ImageBackground
      source={require("../../img/bg-landscape.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.overlay} />

      <ThemeProvider value={theme}>
        <View style={styles.stackContainer}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "transparent",
              },
              animation: "fade",
            }}
          />
        </View>
      </ThemeProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(65, 35, 18, 0.38)",
    pointerEvents: "none",
  },

  stackContainer: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    paddingTop: StatusBar.currentHeight || 0,
  },
});