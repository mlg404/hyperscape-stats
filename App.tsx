import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'

import AppStack from './src/routes/AppStack'

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Orbitron_400Regular, Orbitron_700Bold } from '@expo-google-fonts/orbitron'

export default function App() {
  let [fontsLoaded] = useFonts({
    ArchivoR: Archivo_400Regular, 
    ArchivoB: Archivo_700Bold,
    OrbitronR: Orbitron_400Regular, 
    OrbitronB: Orbitron_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }

}