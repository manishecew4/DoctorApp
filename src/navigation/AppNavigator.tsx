import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../shared/hooks/useRedux';
import SignupScreen from '../layout/screens/auth/SignupScreen';
import LoginScreen from '../layout/screens/auth/LoginScreen';
import DoctorHome from '../layout/screens/general/doctor/DoctorHome';
import PatientHome from '../layout/screens/general/patient/PatientHome';

// Auth screens
// import Login from '../features/auth/screens/Login';
// import Signup from '../features/auth/screens/Signup';

// // Doctor screens (placeholder)
// import DoctorHome from '../features/doctor/screens/DoctorHome';

// // Patient screens (placeholder)
// import PatientHome from '../features/patient/screens/PatientHome';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  DoctorHome: undefined;
  PatientHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const DoctorStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DoctorHome" component={DoctorHome} />
  </Stack.Navigator>
);

const PatientStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PatientHome" component={PatientHome} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <AuthStack />;
  }

  // Route based on role
  if (user?.role === 'doctor') {
    return <DoctorStack />;
  }

  return <PatientStack />;
};

export default AppNavigator;