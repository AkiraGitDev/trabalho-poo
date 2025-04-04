import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manrope: require("../assets/fonts/Anton_SC,Manrope/Manrope/Manrope-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen 
          name="cadastro" 
          options={{ 
            headerShown: true,
            title: "Cadastro de Paciente"
          }} 
        />
        <Stack.Screen 
          name="avaliacao" 
          options={{ 
            headerShown: true,
            title: "Avaliação da Consulta"
          }} 
        />
        <Stack.Screen 
          name="finalizacao" 
          options={{ 
            headerShown: true,
            title: "Finalização"
          }} 
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
