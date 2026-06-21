import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sabores da Rota</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          O Sabores da Rota nasceu com o propósito de conectar
          turistas e moradores aos sabores e histórias por trás
          da gastronomia local.

          {"\n\n"}

          Nossa plataforma valoriza pequenos negócios,
          restaurantes e empreendedores, tornando mais fácil
          descobrir novos lugares e experiências.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "Playfair Display",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#2D170A",
  },
  card: {
    backgroundColor: "rgba(244,225,200,0.85)",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    color: "#2D170A",
  },
});
