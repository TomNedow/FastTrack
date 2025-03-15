import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/screens/LoginScreen';
import MainPage from './app/screens/MainPage';
import WelcomeScreen1 from './app/screens/WelcomeScreen';
import WelcomeScreen2 from './app/screens/WelcomeScreen2';
import WelcomeScreen3 from './app/screens/WelcomeScreen3';
import Settings from './app/screens/Settings';
import Profile from './app/screens/Profile';

import { SvgUri } from 'react-native-svg'; // Import for handling SVGs
import Homepage from './app/assets/homepage.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainPage} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome1" component={WelcomeScreen1} />
        <Stack.Screen name="Welcome2" component={WelcomeScreen2} />
        <Stack.Screen name="Welcome3" component={WelcomeScreen3} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
