import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StackParamList } from "./interfaces/StackParamList";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import HistoryScreen from "./screens/History";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Merriweather: require("./assets/fonts/Merriweather-Regular.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return undefined;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor: "white",
                
              },
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Start"
              component={StartGameScreen}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="History"
              component={HistoryScreen}
              options={{
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
