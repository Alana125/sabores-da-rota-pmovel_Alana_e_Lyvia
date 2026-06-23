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

export default function CadastroComerciante2() {
  const router = useRouter();

  const [nomeEstabelecimento, setNomeEstabelecimento] = useState("");
  const [tipo, setTipo] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logotipo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Cadastro do Estabelecimento</Text>

      <Text style={styles.subtitle}>
        Complete os dados da sua empresa
      </Text>

      {/* Nome estabelecimento */}
      <View style={styles.inputContainer}>
        <Ionicons name="storefront-outline" size={22} color="#9A5A2A" />
        <TextInput
          placeholder="Nome do estabelecimento"
          placeholderTextColor="#6D4B32"
          value={nomeEstabelecimento}
          onChangeText={setNomeEstabelecimento}
          style={styles.input}
        />
      </View>

      {/* Tipo */}
      <View style={styles.inputContainer}>
        <Ionicons name="pricetag-outline" size={22} color="#9A5A2A" />
        <TextInput
          placeholder="Tipo de estabelecimento"
          placeholderTextColor="#6D4B32"
          value={tipo}
          onChangeText={setTipo}
          style={styles.input}
        />
      </View>

      {/* CNPJ */}
      <View style={styles.inputContainer}>
        <Ionicons name="business-outline" size={22} color="#9A5A2A" />
        <TextInput
          placeholder="CNPJ"
          placeholderTextColor="#6D4B32"
          value={cnpj}
          onChangeText={setCnpj}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      {/* CEP */}
      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={22} color="#9A5A2A" />
        <TextInput
          placeholder="CEP"
          placeholderTextColor="#6D4B32"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      {/* Endereço */}
      <View style={styles.inputContainer}>
        <Ionicons name="home-outline" size={22} color="#9A5A2A" />
        <TextInput
          placeholder="Endereço completo"
          placeholderTextColor="#6D4B32"
          value={endereco}
          onChangeText={setEndereco}
          style={styles.input}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Finalizar Cadastro</Text>
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