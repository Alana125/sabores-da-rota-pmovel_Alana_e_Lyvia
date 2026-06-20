import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >

      {/* Tela inicial */}
      <Stack.Screen name="index" />


      {/* Login único */}
      <Stack.Screen name="login" />


      {/* Home depois do login */}
      <Stack.Screen name="home" />


      {/* Escolha do tipo de cadastro */}
      <Stack.Screen name="opcao_entrada" />


      {/* Cadastros */}
      <Stack.Screen name="cadastro_cliente" />
      <Stack.Screen name="cadastro_comerciante" />


      {/* Recuperação */}
      <Stack.Screen name="esqueceu_senha" />


      {/* História do app */}
      <Stack.Screen name="sobre" />


    </Stack>
  );
}