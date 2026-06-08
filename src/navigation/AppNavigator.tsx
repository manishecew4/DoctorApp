import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAppSelector } from '../shared/hooks/useRedux';
import SignupScreen from '../layout/screens/auth/SignupScreen';
import LoginScreen from '../layout/screens/auth/LoginScreen';
import DoctorAppointmentsList from '../layout/screens/general/doctor/DoctorAppointmentsList';
import PlaceholderScreen from '../layout/screens/general/PlaceholderScreen';
import AppDrawerContent, { DrawerMenuItem } from '@/navigation/drawer/AppDrawerContent';
import Routes from './navigationList';
import Splash from '../layout/screens/Splash';
import { DoctorBottomTabs, PatientBottomTabs } from '@/navigation/bottomTabs';

const RootStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Login.id} component={LoginScreen} />
    <Stack.Screen name={Routes.Signup.id} component={SignupScreen} />
  </Stack.Navigator>
);

const DoctorStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.DoctorDashboard.id} component={DoctorBottomTabs} />
    <Stack.Screen
      name={Routes.DoctorAppointmentsList.id}
      component={DoctorAppointmentsList}
    />
  </Stack.Navigator>
);

const PatientStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.PatientDashboard.id} component={PatientBottomTabs} />
  </Stack.Navigator>
);

const doctorMenuItems: DrawerMenuItem[] = [
  {
    label: 'Dashboard',
    routeName: 'DoctorHomeDrawer',
    icon: 'view-dashboard-outline',
  },
  {
    label: "Today's Appointments",
    routeName: 'DoctorTodayAppointments',
    icon: 'calendar-today',
    params: {
      listType: 'today',
      title: "Today's Patients",
    },
  },
  {
    label: 'Upcoming Appointments',
    routeName: 'DoctorUpcomingAppointments',
    icon: 'calendar-clock',
    params: {
      listType: 'upcoming',
      title: 'Upcoming Patients',
    },
  },
  {
    label: 'Completed Appointments',
    routeName: 'DoctorCompletedAppointments',
    icon: 'calendar-check',
    params: {
      listType: 'completed',
      title: 'Completed Patients',
    },
  },
  {
    label: 'Cancelled Appointments',
    routeName: 'DoctorCancelledAppointments',
    icon: 'calendar-remove',
    params: {
      listType: 'cancelled',
      title: 'Cancelled Patients',
    },
  },
];

const patientMenuItems: DrawerMenuItem[] = [
  {
    label: 'Dashboard',
    routeName: 'PatientHomeDrawer',
    icon: 'view-dashboard-outline',
  },
  {
    label: 'My Appointments',
    routeName: 'PatientAppointments',
    icon: 'calendar-account',
    params: {
      title: 'My Appointments',
    },
  },
  {
    label: 'Find Doctors',
    routeName: 'PatientDoctors',
    icon: 'doctor',
    params: {
      title: 'Find Doctors',
    },
  },
  {
    label: 'Profile',
    routeName: 'PatientProfile',
    icon: 'account-outline',
    params: {
      title: 'Profile',
    },
  },
];

const customDrawerContent = (props: any) => {
  return <AppDrawerContent {...props} menuItems={doctorMenuItems} />;
};  

const DoctorDrawer = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={customDrawerContent}
  >
    <Drawer.Screen name="DoctorHomeDrawer" component={DoctorStack} />
    <Drawer.Screen
      name="DoctorTodayAppointments"
      component={DoctorAppointmentsList}
      initialParams={{
        listType: 'today',
        title: "Today's Patients",
      }}
    />
    <Drawer.Screen
      name="DoctorUpcomingAppointments"
      component={DoctorAppointmentsList}
      initialParams={{
        listType: 'upcoming',
        title: 'Upcoming Patients',
      }}
    />
    <Drawer.Screen
      name="DoctorCompletedAppointments"
      component={DoctorAppointmentsList}
      initialParams={{
        listType: 'completed',
        title: 'Completed Patients',
      }}
    />
    <Drawer.Screen
      name="DoctorCancelledAppointments"
      component={DoctorAppointmentsList}
      initialParams={{
        listType: 'cancelled',
        title: 'Cancelled Patients',
      }}
    />
  </Drawer.Navigator>
);

const customDrawerContentPatient = (props: any) => {
  return <AppDrawerContent {...props} menuItems={patientMenuItems} />;
};  

const PatientDrawer = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={customDrawerContentPatient}
  >
    <Drawer.Screen name="PatientHomeDrawer" component={PatientStack} />
    <Drawer.Screen
      name={Routes.PatientAppointments.id}
      component={PlaceholderScreen}
      initialParams={{ title: 'My Appointments' }}
    />
    {/* <Drawer.Screen
      name={Routes.PatientDoctors.id}
      component={PlaceholderScreen}
      initialParams={{ title: 'Find Doctors' }}
    /> */}
    <Drawer.Screen
      name={Routes.PatientProfile.id}
      component={PlaceholderScreen}
      initialParams={{ title: 'Profile' }}
    />
  </Drawer.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      {/* <RootStack.Screen name={Routes.Splash.id} component={Splash} /> */}
      {showSplash ? (
        <RootStack.Screen name={Routes.Splash.id} component={Splash} />
      ) : !isAuthenticated ? (
        <RootStack.Screen name="Auth" component={AuthStack} />
      ) : user?.role === 'doctor' ? (
        <RootStack.Screen name="Doctor" component={DoctorDrawer} />
      ) : (
        <RootStack.Screen name="Patient" component={PatientDrawer} />
      )}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
