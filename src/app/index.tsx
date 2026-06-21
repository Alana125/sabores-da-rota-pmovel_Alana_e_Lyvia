import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.subtitle}>
          Entre ou crie sua conta para explorar os melhores sabores da rota.
        </Text>

        <Pressable style={styles.button} onPress={() => router.push("/login")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Pressable
          style={styles.buttonSecondary}
          onPress={() => router.push("/opcao_entrada")}
        >
          <Text style={styles.buttonTextSecondary}>Cadastre-se</Text>
        </Pressable>

        <Pressable style={styles.link} onPress={() => router.push("/sobre")}>
          <Text style={styles.linkText}>Saiba quem somos!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingVertical: 24,
  },
  content: {
    width: "100%",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontFamily: "serif",
    fontWeight: "400",
    color: "#2D170A",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#2D170A",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 23,
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#2D1307",
    marginBottom: 22,
    alignItems: "center",
  },
  buttonSecondary: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#C96E22",
    backgroundColor: "rgba(255, 248, 238, 0.66)",
    marginBottom: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonTextSecondary: {
    color: "#C96E22",
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    paddingVertical: 4,
  },
  linkText: {
    color: "#C96E22",
    fontSize: 12,
    fontWeight: "600",
  },
});
