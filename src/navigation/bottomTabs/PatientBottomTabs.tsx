import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';
import PatientHome from '@/layout/screens/general/patient/PatientHome';
import PlaceholderScreen from '@/layout/screens/general/PlaceholderScreen';

const Tab = createBottomTabNavigator();

const PatientBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="PatientHomeTab"
        component={PatientHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home-outline' as any,
        }}
      />
      <Tab.Screen
        name="PatientAppointmentsTab"
        component={PlaceholderScreen}
        initialParams={{ title: 'My Appointments' }}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: 'calendar-clock-outline' as any,
        }}
      />
      <Tab.Screen
        name="PatientDoctorsTab"
        component={PlaceholderScreen}
        initialParams={{ title: 'Find Doctors' }}
        options={{
          tabBarLabel: 'Doctors',
          tabBarIcon: 'stethoscope' as any,
        }}
      />
      <Tab.Screen
        name="PatientProfileTab"
        component={PlaceholderScreen}
        initialParams={{ title: 'Profile' }}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'account-circle-outline' as any,
        }}
      />
    </Tab.Navigator>
  );
};

export default PatientBottomTabs;
