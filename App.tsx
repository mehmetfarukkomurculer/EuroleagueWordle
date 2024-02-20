import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StackParamList } from "./interfaces/StackParamList";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
    <StatusBar style="dark"/>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          }
        }}>
          <Stack.Screen name="Start" component={StartGameScreen}/>
          <Stack.Screen name="Game" component={GameScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
    
  );
}
