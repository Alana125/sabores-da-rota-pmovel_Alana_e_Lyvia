import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CadastroComerciante1() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logotipo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Cadastro Comerciante</Text>

      <Text style={styles.subtitle}>
        Crie sua conta para continuar
      </Text>

      {/* Nome */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={22} color="#2D1307" />
        <TextInput
          placeholder="Nome do comerciante"
          placeholderTextColor="#2D1307"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={22} color="#2D1307" />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#2D1307"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
      </View>

      {/* Telefone */}
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={22} color="#2D1307" />
        <TextInput
          placeholder="Telefone para contato"
          placeholderTextColor="#2D1307"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      {/* Senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={22} color="#2D1307" />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#2D1307"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Confirmar senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={22} color="#2D1307" />
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#2D1307"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/cadastro_comerciante2")}
      >
        <Text style={styles.buttonText}>Avançar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2D170A",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#6D4B32",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4E1C8",
    borderWidth: 1,
    borderColor: "#D9A25F",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    height: 55,
    fontSize: 16,
    color: "#2D170A",
  },

  button: {
    backgroundColor: "#2D170A",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});