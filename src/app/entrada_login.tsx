import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function EntradaLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bem-vindo de volta!</Text>

        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={16} color="#2D170A" style={styles.icon} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor="#8B6F47"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={16} color="#2D170A" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#8B6F47"
          />
        </View>

        <Pressable
          style={styles.buttonPrimary}
          onPress={() => router.replace("/home")}
        >
          <Text style={styles.buttonPrimaryText}>Entrar</Text>
        </Pressable>

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>ou continue com</Text>
          <View style={styles.line} />
        </View>

        <Pressable
          style={styles.buttonGoogle}
          onPress={() => router.push("/entrargoogle")}
        >
          <FontAwesome name="google" size={15} color="#C48138" style={styles.googleIcon} />
          <Text style={styles.buttonGoogleText}>Entrar com Google</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/esqueceu_senha")}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </Pressable>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Ainda não tem conta? </Text>
          <Pressable onPress={() => router.push("/opcao_entrada")}>
            <Text style={styles.signupLink}>Criar Conta</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  card: {
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
  width: 420,
  height: 300,
  marginBottom: 0,
},

  title: {
    fontSize: 28,
    fontFamily: "serif",
    color: "#2D170A",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#4A2F1D",
    textAlign: "center",
    marginBottom: 22,
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C48138",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#F4E1C8",
    height: 50,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 15,
    color: "#2D170A",
  },

  buttonPrimary: {
    width: "100%",
    backgroundColor: "#2D170A",
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
  },

  buttonPrimaryText: {
    color: "#F4E1C8",
    fontSize: 18,
    fontWeight: "600",
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    width: "100%",
  },

  line: {
    flex: 1,
    height: 0.6,
    backgroundColor: "#C48138",
    opacity: 0.4,
  },

  separatorText: {
    marginHorizontal: 8,
    fontSize: 13,
    color: "#4A2F1D",
    textAlign: "center",
  },

  buttonGoogle: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#C48138",
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4E1C8",
    flexDirection: "row",
    height: 50,
    marginBottom: 14,
  },

  googleIcon: {
    marginRight: 8,
  },

  buttonGoogleText: {
    color: "#C48138",
    fontSize: 17,
    fontWeight: "600",
  },

  forgotPassword: {
    color: "#C48138",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12,
    textDecorationLine: "underline",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  signupText: {
    fontSize: 14,
    color: "#4A2F1D",
  },

  signupLink: {
    fontSize: 14,
    color: "#C48138",
    fontWeight: "600",
  },
});
