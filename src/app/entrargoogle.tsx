
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function EntrarGoogle() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Entrar com o Google
        </Text>

        <Text style={styles.subtitle}>
          Escolha uma conta para continuar
        </Text>

        <Pressable
          style={styles.account}
          onPress={() => router.push("/home")}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>F</Text>
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

        <Pressable
          style={styles.account}
          onPress={() => router.push("/entrada_login")}
        >
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  content: {
    width: "100%",
    alignItems: "center",
    marginTop: -30,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 0,
  },

  title: {
    fontSize: 28,
    color: "#3D2213",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 16,
    color: "#3D2213",
    textAlign: "center",
    marginBottom: 25,
  },

  account: {
    width: "100%",
    minHeight: 70,
    backgroundColor: "#F4E1C8",
    borderWidth: 1,
    borderColor: "#D09A54",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  accountName: {
    fontSize: 16,
    color: "#3D2213",
    fontWeight: "500",
  },

  accountEmail: {
    fontSize: 14,
    color: "#6B4B32",
    marginTop: 3,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#4B32E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  userAvatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#2D170A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  buttonback: {
    width: "100%",
    height: 50,
    backgroundColor: "#2D1307",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

});
