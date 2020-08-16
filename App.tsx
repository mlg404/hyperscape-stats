import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'

import AppStack from './src/routes/AppStack'

import { Archivo_400Regular, Archivo_700Bold, Archivo_500Medium, useFonts } from '@expo-google-fonts/archivo'
import { Orbitron_400Regular, Orbitron_700Bold } from '@expo-google-fonts/orbitron'
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded] = useFonts({
    ArchivoR: Archivo_400Regular, 
    ArchivoM: Archivo_500Medium, 
    ArchivoB: Archivo_700Bold,
    PoppinsR: Poppins_400Regular, 
    PoppinsM: Poppins_500Medium, 
    PoppinsB: Poppins_700Bold,
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