import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function OpcaoEntrada() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.line} />

      <Text style={styles.title}>Vamos começar!</Text>

      <Text style={styles.subtitle}>
        Escolha como você deseja se cadastrar
      </Text>

      {/* CLIENTE */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={34} color="#3B2414" />
          </View>

          <View style={styles.content}>
            <Text style={styles.cardTitle}>Sou Cliente</Text>
            <Text style={styles.cardDescription}>
              Quero fazer pedidos e aproveitar os sabores da rota
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/cadastro_cliente")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </View>

      {/* COMERCIANTE */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="storefront-outline"
              size={34}
              color="#3B2414"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.cardTitle}>Sou comerciante</Text>
            <Text style={styles.cardDescription}>
              Quero cadastrar meu estabelecimento e alcançar mais clientes
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/cadastro_comerciante")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </View>

      {/* LOGIN */}
      <Text style={styles.loginText}>
        Já tem uma conta?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => router.push("/entrada_login")}
        >
          Entrar
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 40,
  },

logoContainer: {
  alignItems: "center",
  marginBottom: 10,
  marginTop: 5,
},
 logo: {
  width: 220,
  height: 120,
},

  line: {
    width: 70,
    height: 2,
    backgroundColor: "#D88A28",
    alignSelf: "center",
    marginTop: 18,
    marginBottom: 24,
  },

  title: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "700",
    color: "#2D1B10",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#6E5645",
    marginTop: 10,
    marginBottom: 35,
  },

  card: {
    backgroundColor:  "#F4E1C8",
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,

    borderWidth: 1,
    borderColor: "rgba(216, 138, 40, 0.5)",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
   backgroundColor: "#F4E1C8", 
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D1B10",
  },

  cardDescription: {
    fontSize: 13,
    color: "#6E5645",
    marginTop: 5,
    lineHeight: 18,
  },

  button: {
    alignSelf: "flex-end",
    marginTop: 15,
    backgroundColor: "#2D1B10",
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  buttonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },

  loginText: {
    textAlign: "center",
    marginTop: 10,
    color: "#4A3526",
    fontSize: 15,
  },

  loginLink: {
    color: "#D88A28",
    fontWeight: "700",
  },
});