import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function EsqueceuSenha() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logotipo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Esqueceu a senha?</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={22} color="#2D170A"/>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#2D170A"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={22} color="#2D170A" />
        <TextInput
          placeholder="Nova senha"
          placeholderTextColor="#2D170A"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={22} color="#2D170A" />
        <TextInput
          placeholder="Digite novamente"
          placeholderTextColor="#2D170A"
          value={confirmar}
          onChangeText={setConfirmar}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.row}>
        <Pressable
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <Text style={styles.voltarText}>Voltar</Text>
        </Pressable>

        <Pressable
          style={styles.avancar}
          onPress={() => router.replace("/entrada_login")}
        >
          <Text style={styles.avancarText}>Avançar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },

  title: {
    fontSize: 28,
    color: "#3D2213",
    marginBottom: 25,
    fontWeight: "600",
    textAlign: "center",
  },

  inputContainer: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: "#D09A54",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    color: "#3D2213",
    fontSize: 15,
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
    fontWeight: "500",
  },

  avancarText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
}); 
