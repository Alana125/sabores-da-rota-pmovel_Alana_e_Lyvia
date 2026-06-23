import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function OpcaoEntrada() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Escolha o tipo de cadastro.</Text>

      <Pressable style={styles.button} onPress={() => router.push("/cadastro_cliente")}> 
        <Text style={styles.buttonText}>Cadastro Cliente</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push("/cadastro_comerciante")}> 
        <Text style={styles.buttonText}>Cadastro Comerciante</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2D170A",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#4A2F1D",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 24,
  },
  button: {
    width: "100%",
    backgroundColor: "#9A5A2A",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
