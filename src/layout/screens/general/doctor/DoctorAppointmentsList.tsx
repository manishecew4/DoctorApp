import React from 'react';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/AppNavigator';
import {
  cancelledAppointmentsData,
  completedAppointmentsData,
  todayAppointmentsData,
  upcomingAppointmentsData,
} from '@/testData';
import { DoctorAppointmentItem } from '@/components/appointmentsDoc/AppointmentList';
import DoctorAppointmentsListView from '@/layout/views/doctor/DoctorAppointmentsListView';

type AppointmentListRouteProp = RouteProp<
  RootStackParamList,
  'DoctorAppointmentsList'
>;

const appointmentDataMap: Record<string, DoctorAppointmentItem[]> = {
  today: todayAppointmentsData,
  upcoming: upcomingAppointmentsData,
  completed: completedAppointmentsData,
  cancelled: cancelledAppointmentsData,
};

const DoctorAppointmentsList = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<AppointmentListRouteProp>();
  const { listType, title } = route.params;

  const appointments = appointmentDataMap[listType] || [];

  const handleBack = React.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.navigate('DoctorHomeDrawer');
  }, [navigation]);

  const handlePressAppointment = React.useCallback((appointment: DoctorAppointmentItem) => {
    console.log('appointment pressed', appointment);
  }, []);

  return (
    <DoctorAppointmentsListView
      title={title}
      appointments={appointments}
      onPressBack={handleBack}
      onPressAppointment={handlePressAppointment}
    />
  );
};

export default DoctorAppointmentsList;
