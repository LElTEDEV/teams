import { Routes } from "@/routes";
import { Loading } from "@/components/Loading";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <>
      {fontLoaded ? <Routes /> : <Loading />}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
