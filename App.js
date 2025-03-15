import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./app/screens/Login";
import MainPage from "./app/screens/MainPage";
import WelcomeScreen from "./app/screens/Welcome";
import SetupScreen from "./app/screens/Setup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to Fast Track" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Setup" component={SetupScreen} />
        <Stack.Screen name="Main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
