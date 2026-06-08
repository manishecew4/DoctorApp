import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';
import DoctorHome from '@/layout/screens/general/doctor/DoctorHome';
import DoctorAppointmentsList from '@/layout/screens/general/doctor/DoctorAppointmentsList';
import PlaceholderScreen from '@/layout/screens/general/PlaceholderScreen';

const Tab = createBottomTabNavigator();

const DoctorBottomTabs = () => {

  const customTabBar = (props: any) => (<BottomTabBar {...props} />)

  return (
    <Tab.Navigator
      tabBar={customTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent'
        },
      }}
    >
      <Tab.Screen
        name="DoctorHomeTab"
        component={DoctorHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home-outline' as any,
        }}
      />
      <Tab.Screen
        name="DoctorAppointmentsTab"
        component={DoctorAppointmentsList}
        initialParams={{ listType: 'today', title: "Today's Patients" }}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: 'calendar-clock-outline' as any,
        }}
      />
      <Tab.Screen
        name="DoctorPatientsTab"
        component={PlaceholderScreen}
        initialParams={{ title: 'My Patients' }}
        options={{
          tabBarLabel: 'Patients',
          tabBarIcon: 'account-group-outline' as any,
        }}
      />
      <Tab.Screen
        name="DoctorProfileTab"
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

export default DoctorBottomTabs;
