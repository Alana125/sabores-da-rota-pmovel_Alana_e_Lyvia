import { Stack } from "expo-router";
import {
  ImageBackground,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ImageBackground
        source={require("../assets/saboresgeral.png")}
        style={styles.background}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(244,225,200,0.08)",
  },

  stackContainer: {
    flex: 1,
    width: "100%",
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 20,
  },
});