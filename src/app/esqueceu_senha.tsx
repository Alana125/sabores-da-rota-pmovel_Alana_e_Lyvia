import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function EsqueceuSenha() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/001-logotipo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Esqueceu a senha?
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Nova senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Digite novamente"
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.row}>
        <Pressable
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <Text style={styles.voltarText}>
            Voltar
          </Text>
        </Pressable>

        <Pressable
          style={styles.avancar}
          onPress={() => router.replace("/entrada_login")}
        >
          <Text style={styles.avancarText}>
            Avançar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },

  logo: {
    width: 230,
    height: 180,
  },

  title: {
    fontSize: 28,
    color: "#3D2213",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: "#D09A54",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  voltar: {
    width: "40%",
    height: 45,
    borderWidth: 1,
    borderColor: "#D09A54",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  avancar: {
    width: "40%",
    height: 45,
    borderRadius: 8,
    backgroundColor: "#2D1307",
    justifyContent: "center",
    alignItems: "center",
  },

  voltarText: {
    color: "#D09A54",
  },

  avancarText: {
    color: "#fff",
  },
});