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
              size={20}
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
              size={20}
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
              size={18}
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
              onPress={() => router.push("/criacao_conta")}
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
  paddingHorizontal: 20,
  paddingBottom: 80,
},


  card: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },


logo: {
  width: 280,
  height: 280,
  resizeMode: "contain",
  marginBottom: 10,
},

  title: {
    fontSize: 27,
    fontFamily: "serif",
    color: "#2D170A",
    textAlign: "center",
    marginBottom: 6,
  },


  subtitle: {
    fontSize: 16,
    color: "#4A2F1D",
    textAlign: "center",
    marginBottom: 22,
  },


  inputContainer: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: "#C48138",
    borderRadius: 9,
    backgroundColor: "#F4E1C8",
    paddingHorizontal: 14,
    marginBottom: 14,
  },


  icon: {
    marginRight: 10,
  },


  input: {
    flex: 1,
    fontSize: 16,
    color: "#2D170A",
  },


  buttonPrimary: {
    width: "100%",
    height: 55,
    backgroundColor: "#2D170A",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 22,
  },


  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },


  separatorContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },


  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#C48138",
    opacity: 0.5,
  },


  separatorText: {
    marginHorizontal: 10,
    fontSize: 13,
    color: "#4A2F1D",
  },


  buttonGoogle: {
    width: "100%",
    height: 55,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#2D170A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },


  googleIcon: {
    marginRight: 10,
  },


  buttonGoogleText: {
    color: "#2D170A",
    fontSize: 17,
    fontWeight: "500",
  },


  forgotPassword: {
    color: "#C48138",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 12,
  },


  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },


  signupText: {
    color: "#4A2F1D",
    fontSize: 13,
  },


  signupLink: {
    color: "#C48138",
    fontSize: 13,
    fontWeight: "600",
  },

});