import React from 'react';
import { upcomingAppointmentsData } from '@/testData';
import AppointmentList from './AppointmentList';

const UpcomingAppointments = () => {
  return (
    <AppointmentList
      title="Upcoming Patients"
      data={upcomingAppointmentsData}
      actionTitle="View Schedule"
    />
  );
};

export default UpcomingAppointments;
