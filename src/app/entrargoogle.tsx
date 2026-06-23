import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

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

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          F
        </Text>
      </View>

      <View>
        <Text style={styles.accountName}>
          Fulano da Silva
        </Text>

        <Text style={styles.accountEmail}>
          usuario@gmail.com
        </Text>
      </View>

    </Pressable>

          <Pressable style={styles.account}>

      <View style={styles.userAvatar}>
        <MaterialIcons 
          name="person-outline"
          size={22}
          color="#2D170A"
        />
      </View>

      <Text style={styles.accountName}>
        Usar outra conta
      </Text>

    </Pressable>
            <Pressable
              style={styles.buttonback}
              onPress={() => router.back()}
            >
              <Text style={styles.buttonText}>
                Voltar
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
  padding: 12,
  marginBottom: 16,
  backgroundColor: "rgba(255,255,255,0.2)",
  flexDirection: "row",
  alignItems: "center",
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
  avatar: {
  width: 32,
  height: 32,
  borderRadius: 50,
  backgroundColor: "#4B32E8",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
},

avatarText: {
  color: "#fff",
  fontSize: 15,
  fontWeight: "600",
},
userAvatar: {
  width: 32,
  height: 32,
  borderRadius: 50,
  borderWidth: 1.5,
  borderColor: "#2D170A",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
},
buttonback: {
  width: "100%",
  height: 48,
  borderRadius: 8,
  backgroundColor: "#2D1307",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
},
});