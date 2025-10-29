// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}