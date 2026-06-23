import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require("../assets/logotipo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Sobre Nós</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          O sistema denominado Sabores da Rota consiste em um aplicativo
          inteligente que conecta turistas a restaurantes e comércios locais de
          alimentação, transformando a experiência gastronômica por meio de
          recomendações personalizadas.
        </Text>

        <Text style={styles.text}>
          Seu principal objetivo é oferecer sugestões com base no gosto do
          usuário, localização, clima e orçamento, proporcionando experiências
          mais adequadas para cada perfil.
        </Text>

        <Text style={styles.text}>
          A plataforma permite realizar reservas, comprar produtos regionais,
          colaborar para a visibilidade de pequenos negócios e enriquecer a
          experiência cultural e gastronômica de turistas e moradores locais.
        </Text>

        <Text style={styles.text}>
          A interface foi desenvolvida com foco na acessibilidade, contando com
          recursos multilíngues para tradução de cardápios, avaliações e
          informações dos estabelecimentos.
        </Text>

        <Text style={styles.text}>
          O sistema utiliza inteligência de dados para gerar recomendações mais
          precisas e auxiliar comerciantes na otimização de seus serviços,
          promoções e cardápios.
        </Text>

        <Text style={styles.text}>
          Para os pequenos negócios, representa uma oportunidade de ampliar sua
          presença digital, fidelizar clientes e aumentar a visibilidade de
          forma sustentável.
        </Text>

        <Text style={styles.text}>
          O modelo de negócio inclui planos de destaque para estabelecimentos,
          comissões sobre vendas realizadas na plataforma e parcerias com
          agências de turismo, hotéis e órgãos públicos.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2D170A",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#F4E1C8",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#D7B28A",
  },

  text: {
    fontSize: 14,
    lineHeight: 22,
    color: "#2D170A",
    textAlign: "justify",
    marginBottom: 12,
  },
});