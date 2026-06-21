import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vinda ao Sabores da Rota</Text>
      <Text style={styles.subtitle}>
        Descubra lugares, sabores e pequenos negócios da sua rota.
      </Text>

      <Pressable style={styles.button} onPress={() => router.push("/sobre")}>
        <Text style={styles.buttonText}>Conhecer o projeto</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => router.replace("/")}>
        <Text style={styles.linkText}>Sair</Text>
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
  link: {
    alignItems: "center",
  },
  linkText: {
    color: "#4A2F1D",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
