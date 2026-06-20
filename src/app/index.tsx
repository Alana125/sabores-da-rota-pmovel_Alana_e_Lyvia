import React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function Entrada() {
  return (
    <ImageBackground
      source={require("../../assets/saboresgeral.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo!</Text>

          <Text style={styles.subtitle}>
            Entre ou crie sua conta para descobrir sabores incríveis.
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.about}>Sobre nós</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 background:{
 flex:1,
 backgroundColor:"#F4E1C8"
},
 container: {
  flex: 1,
  alignItems: "center",
  paddingHorizontal: 24,
  paddingVertical: 25,
},
  logo:{
  width: 420,
  height: 460,
  marginTop: 0,
},
 content: {
  alignItems: "center",
  paddingHorizontal: 20,
  marginTop: -20,
},
 title: {
  fontSize: 22,
  fontWeight: "700",
  color:"#2D170A",
  marginBottom: 8,
},
  subtitle: {
  fontSize: 16,
  color: "#2D170A",
  textAlign: "center",
  lineHeight: 24,
},
  buttons:{
 width:"100%",
 alignItems:"center",
 marginTop:40,
},
  primaryButton: {
    width: "85%",
    backgroundColor: "#2D170A",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 14,
  },
  primaryButtonText: {
    color: "#F4E1C8",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    width: "85%",
    borderWidth: 1.5,
    borderColor: "#C48138",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 16,
  },
  secondaryButtonText: {
    color: "#C48138",
    fontSize: 16,
  },
  about: {
    color: "#C48138",
    fontSize: 15,
  },
});