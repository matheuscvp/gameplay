import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes/index';

export default function App() {
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fonstLoaded) {
    return <AppLoading/>
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </Background>
  );
}