import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../layout/screens/auth/SignupScreen';
import LoginScreen from '../layout/screens/auth/LoginScreen';
import appScreens from './navigationList';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={appScreens.Signup}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={appScreens.Login} component={LoginScreen} />
      <Stack.Screen name={appScreens.Signup} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
