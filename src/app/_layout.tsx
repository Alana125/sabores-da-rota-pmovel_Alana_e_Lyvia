import { Stack } from "expo-router";
import { ImageBackground, View, Image, StyleSheet, StatusBar } from "react-native";

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
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.logoContainer} pointerEvents="none">
        <Image
          source={require("../assets/logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.stackContainer}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
            },
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

 background: StyleSheet.absoluteFillObject,
 backgroundImage: {
  width: undefined,
  height: undefined,
  resizeMode: "cover",
 },

  logoContainer: {
    position: "absolute",
    top: 36,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
    paddingHorizontal: 24,
  },

  logo: {
    width: 210,
    height: 110,
  },

  stackContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 170,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});