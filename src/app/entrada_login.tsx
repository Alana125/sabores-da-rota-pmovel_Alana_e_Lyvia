import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  StatusBar,
  ScrollView,
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

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.title}>
            Bem-vindo de volta!
          </Text>
          <Text style={styles.subtitle}>
            Faça login para continuar
          </Text>
          <View style={styles.accentLine} />

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={20}
              color="#C48138"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#96918D"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock-outline"
              size={22}
              color="#C48138"
              style={styles.icon}
            />
            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor="#96918D"
              style={styles.input}
            />
          </View>

          <Pressable
            style={styles.forgotAction}
            onPress={() => router.push("/esqueceu_senha")}
          >
            <Text style={styles.forgotPassword}>
              Esqueceu a senha?
            </Text>
          </Pressable>

          <Pressable
            style={styles.buttonPrimary}
            onPress={() => router.replace("/home")}
          >
            <Text style={styles.buttonPrimaryText}>
              Entrar
            </Text>
          </Pressable>

          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>
              ou continue com
            </Text>
            <View style={styles.line} />
          </View>

          <Pressable
            style={styles.buttonGoogle}
            onPress={() => router.push("/entrargoogle")}
          >

            <FontAwesome
              name="google"
              size={18}
              color="#4285F4"
              style={styles.googleIcon}
            />
            <Text style={styles.buttonGoogleText}>
              Entrar com Google
            </Text>
          </Pressable>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Ainda não tem conta?
            </Text>
            <Pressable
              onPress={() => router.push("/criacao_conta")}
            >
              <Text style={styles.signupLink}>
                {" "}Criar Conta
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 24,
  },

  card: {
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontFamily: "serif",
    color: "#2D170A",
    textAlign: "center",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 15,
    color: "#938A85",
    textAlign: "center",
    marginBottom: 8,
  },

  accentLine: {
    width: 54,
    height: 2,
    backgroundColor: "#C48138",
    marginBottom: 26,
  },

  inputContainer: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C48138",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: "#2D170A",
  },

  forgotAction: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: -4,
    marginBottom: 18,
  },

  buttonPrimary: {
    width: "100%",
    height: 60,
    backgroundColor: "#35170A",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  separatorContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DED8D3",
  },

  separatorText: {
    marginHorizontal: 10,
    fontSize: 13,
    color: "#A39A95",
  },

  buttonGoogle: {
    width: "100%",
    height: 58,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#C48138",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  googleIcon: {
    marginRight: 10,
  },

  buttonGoogleText: {
    color: "#2D170A",
    fontSize: 16,
    fontWeight: "600",
  },

  forgotPassword: {
    color: "#C48138",
    fontSize: 13,
  },

  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  signupText: {
    color: "#817873",
    fontSize: 14,
  },

  signupLink: {
    color: "#C48138",
    fontSize: 14,
    fontWeight: "600",
  },
});