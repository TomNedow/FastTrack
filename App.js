import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/screens/LoginScreen';
import MainPage from './app/screens/MainPage';
import WelcomeScreen1 from './app/screens/WelcomeScreen'
import WelcomeScreen2 from './app/screens/WelcomeScreen2';
import WelcomeScreen3 from './app/screens/WelcomeScreen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome1' component={WelcomeScreen1} />
        <Stack.Screen name="Welcome2" component={WelcomeScreen2} />
        <Stack.Screen name="Welcome3" component={WelcomeScreen3} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
