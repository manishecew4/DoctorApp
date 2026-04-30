import React from 'react';
import { todayAppointmentsData } from '@/testData';
import AppointmentList from './AppointmentList';

const TodayAppointments = () => {
  return (
    <AppointmentList
      title="Today's Patients"
      data={todayAppointmentsData}
      actionTitle="View Schedule"
    />
  );
};

export default TodayAppointments;
