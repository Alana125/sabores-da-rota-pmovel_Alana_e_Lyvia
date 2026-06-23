import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/001-logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bem-vindo(a)!</Text>

        <Text style={styles.subtitle}>
          Entre ou crie sua conta para explorar{"\n"}
          os melhores sabores da rota.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/entrada_login")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Pressable
          style={styles.buttonSecondary}
          onPress={() => router.push("/criacao_conta")}
        >
          <Text style={styles.buttonTextSecondary}>
            Cadastre-se
          </Text>
        </Pressable>

        <Pressable
          style={styles.link}
          onPress={() => router.push("/sobre")}
        >
          <Text style={styles.linkText}>
            Saiba quem somos!
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  logo: {
    width: 380,
    height: 240,
    marginBottom: -10,
  },

  title: {
    fontSize: 26,
    color: "#2D170A",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#2D170A",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 36,
    paddingHorizontal: 12,
  },

  button: {
    width: "100%",
    height: 55,
    borderRadius: 8,
    backgroundColor: "#2D170A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  buttonSecondary: {
    width: "100%",
    height: 55,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#C48138",
    backgroundColor: "rgba(244,225,200,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  buttonTextSecondary: {
    color: "#C48138",
    fontSize: 16,
    fontWeight: "600",
  },

  link: {
    paddingVertical: 4,
  },

  linkText: {
    color: "#C48138",
    fontSize: 13,
    fontWeight: "600",
  },
});