import { StatusBar, View } from "react-native";

import OneSignal from 'react-native-onesignal';

import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { AuthContextProvider } from "@contexts/AuthContext";

import { THEME } from "./src/theme";

import { Loading } from "@components/Loading";

import { Routes } from "@routes/index";

OneSignal.setAppId("deab7f33-7872-406c-8f8d-9668d0c4b8c7");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
