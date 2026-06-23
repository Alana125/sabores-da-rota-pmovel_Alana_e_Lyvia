import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function EntradaLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>

        <View style={styles.card}>

          <Image
            source={require("../assets/logotipo.png")}
            style={styles.logo}
            resizeMode="cover"
          />


          <Text style={styles.title}>
            Bem-vindo de volta!
          </Text>

          <Text style={styles.subtitle}>
            Faça login para continuar
          </Text>

          <View style={styles.inputContainer}>

            <MaterialIcons
              name="email"
              size={18}
              color="#2D170A"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#8B6F47"
              style={styles.input}
            />

          </View>

          <View style={styles.inputContainer}>

            <MaterialIcons
              name="lock"
              size={18}
              color="#2D170A"
              style={styles.icon}
            />

            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor="#8B6F47"
              style={styles.input}
            />

          </View>

          <Pressable
            style={styles.buttonPrimary}
            onPress={() => router.replace("/home")}
          >

            <Text style={styles.buttonPrimaryText}>
              Entrar
            </Text>

          </Pressable>

          <View style={styles.separatorContainer}>

            <View style={styles.line}/>

            <Text style={styles.separatorText}>
              ou continue com
            </Text>

            <View style={styles.line}/>

          </View>

          <Pressable
            style={styles.buttonGoogle}
            onPress={() => router.push("/entrargoogle")}
          >

            <FontAwesome
              name="google"
              size={16}
              color="#2D170A"
              style={styles.googleIcon}
            />

            <Text style={styles.buttonGoogleText}>
              Entrar com Google
            </Text>

          </Pressable>

          <Pressable
            onPress={() => router.push("/esqueceu_senha")}
          >

            <Text style={styles.forgotPassword}>
              Esqueceu sua senha?
            </Text>

          </Pressable>

          <View style={styles.signupContainer}>

            <Text style={styles.signupText}>
              Ainda não tem conta?
            </Text>

            <Pressable
              onPress={() => router.push("/opcao_entrada")}
            >
              <Text style={styles.signupLink}>
                {" "}Criar Conta
              </Text>

            </Pressable>

          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
  },

  logo: {
    width: 300,
    height: 180,
    marginBottom: -10,
    marginTop: -30,
  },

  title: {
    fontSize: 27,
    fontFamily: "serif",
    color: "#2D170A",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#4A2F1D",
    textAlign: "center",
    marginBottom: 20,
  },

  inputContainer: {
    width: "77%",
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: "#C48138",
    borderRadius: 9,
    backgroundColor: "#F4E1C8",
    paddingHorizontal: 12,
    marginBottom: 11,
  },

  icon: {
    marginRight: 9,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#2D170A",
  },

  buttonPrimary: {
    width: "77%",
    height: 46,
    backgroundColor: "#2D170A",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 16,
  },

  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  separatorContainer: {
    width: "77%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#C48138",
    opacity: 0.5,
  },

  separatorText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#4A2F1D",
  },

  buttonGoogle: {
    width: "77%",
    height: 46,
    borderRadius: 9,
    borderWidth: 0.8,
    borderColor: "#C48138",
    backgroundColor: "#F4E1C8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  googleIcon: {
    marginRight: 8,
  },

  buttonGoogleText: {
    color: "#2D170A",
    fontSize: 15,
    fontWeight: "500",
  },

  forgotPassword: {
    color: "#C48138",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 10,
  },

  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  signupText: {
    color: "#4A2F1D",
    fontSize: 12,
  },

  signupLink: {
    color: "#C48138",
    fontSize: 12,
    fontWeight: "600",
  },
});