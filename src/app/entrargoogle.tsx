import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function EntrarGoogle() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/001-logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Entrar com o Google</Text>

        <Text style={styles.subtitle}>
          Escolha uma conta para continuar
        </Text>

        <Pressable style={styles.account}>
          <Text style={styles.accountName}>Fulano da Silva</Text>
          <Text style={styles.accountEmail}>usuario@gmail.com</Text>
        </Pressable>

        <Pressable style={styles.account}>
          <Text style={styles.accountName}>Usar outra conta</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/home")}
        >
          <Text style={styles.buttonText}>Continuar</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 280,
    height: 220,
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    color: "#3D2213",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#3D2213",
    textAlign: "center",
    marginBottom: 26,
    paddingHorizontal: 10,
  },

  account: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D09A54",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  accountName: {
    fontSize: 16,
    marginBottom: 4,
    color: "#3D2213",
  },

  accountEmail: {
    color: "#3D2213",
    opacity: 0.8,
  },

  button: {
    width: "100%",
    height: 52,
    borderRadius: 8,
    backgroundColor: "#2D1307",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});