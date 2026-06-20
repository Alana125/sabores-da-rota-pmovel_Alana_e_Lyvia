import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground,
  Image
} from "react-native";


export default function Sobre() {
  return (

    <ImageBackground
      source={require("../../assets/saboresgeral.png")}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.container}>

        <Image
          source={require("../../assets/logotipo.png")}
          style={styles.logo}
          resizeMode="contain"
        />


        <Text style={styles.title}>
          Sabores da Rota
        </Text>


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

    </ImageBackground>

  );
}



const styles = StyleSheet.create({

background:{
  flex:1,
},


container:{
  flex:1,
  padding:30,
  justifyContent:"center",
  alignItems:"center",
},


logo:{
  width:180,
  height:140,
  marginBottom:10,
},


title:{
  fontSize:28,
  fontFamily:"Playfair Display",
  fontWeight:"700",
  textAlign:"center",
  marginBottom:20,
  color:"#2D170A",
},


card:{
  backgroundColor:"rgba(244,225,200,0.85)",
  padding:20,
  borderRadius:20,
},


text:{
  fontSize:16,
  lineHeight:24,
  textAlign:"justify",
  color:"#2D170A",
}

});