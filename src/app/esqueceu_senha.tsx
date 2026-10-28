import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function EsqueceuSenha() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../img/hero-bg.png")}
        style={styles.header}
        resizeMode="cover"
      >
        <View style={styles.headerShade} />
        <View style={styles.brand}>
          <Text style={styles.brandTitle}>Sabores</Text>
          <Text style={styles.brandAccent}>da Rota</Text>
          <Text style={styles.brandTagline}>DA ESTRADA PARA SUA MESA</Text>
        </View>
      </ImageBackground>

      <View style={styles.form}>
        <View style={styles.accentLine} />
        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.subtitle}>
          Redefina sua senha com segurança
        </Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="mail-outline" size={26} color="#C48138" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#96918D"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={26} color="#C48138" />
          <TextInput
            placeholder="Nova Senha"
            placeholderTextColor="#96918D"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={26} color="#C48138" />
          <TextInput
            placeholder="Digite novamente"
            placeholderTextColor="#96918D"
            value={confirmar}
            onChangeText={setConfirmar}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Text style={styles.helperText}>
          A senha deve ter no mínimo 8 caracteres
        </Text>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  header: {
    width: "100%",
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  headerShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(45, 23, 10, 0.76)",
  },

  brand: {
    alignItems: "center",
  },

  brandTitle: {
    color: "#FFF9F0",
    fontFamily: "serif",
    fontSize: 52,
    fontWeight: "700",
  },

  brandAccent: {
    color: "#D09A54",
    fontFamily: "serif",
    fontSize: 30,
    fontStyle: "italic",
    marginTop: -8,
  },

  brandTagline: {
    color: "#FFF9F0",
    fontSize: 9,
    letterSpacing: 3,
    marginTop: 10,
  },

  form: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 8,
    alignItems: "center",
  },

  accentLine: {
    width: 80,
    height: 3,
    backgroundColor: "#D09A54",
    marginBottom: 24,
  },

  title: {
    fontSize: 34,
    color: "#2D170A",
    marginBottom: 6,
    fontFamily: "serif",
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#8B8580",
    marginBottom: 28,
    textAlign: "center",
  },

  inputContainer: {
    width: "100%",
    height: 58,
    borderWidth: 1,
    borderColor: "#C48138",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    color: "#3D2213",
    fontSize: 17,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 58,
  },

  voltar: {
    width: "48%",
    height: 58,
    borderWidth: 1.5,
    borderColor: "#35170A",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCF7",
  },

  avancar: {
    width: "48%",
    height: 58,
    borderRadius: 30,
    backgroundColor: "#C48138",
    justifyContent: "center",
    alignItems: "center",
  },

  voltarText: {
    color: "#35170A",
    fontWeight: "600",
    fontSize: 17,
  },

  avancarText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 17,
  },

  helperText: {
    fontSize: 13,
    color: "#A39A95",
    textAlign: "center",
  },
}); 
