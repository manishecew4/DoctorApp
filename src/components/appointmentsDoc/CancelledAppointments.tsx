import React from 'react';
import { cancelledAppointmentsData } from '@/testData';
import AppointmentList from './AppointmentList';

const CancelledAppointments = () => {
  return (
    <AppointmentList
      title="Cancelled Patients"
      data={cancelledAppointmentsData}
      actionTitle="View All"
    />
  );
};

export default CancelledAppointments;
