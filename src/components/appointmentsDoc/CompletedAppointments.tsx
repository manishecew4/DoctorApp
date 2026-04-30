import React from 'react';
import { completedAppointmentsData } from '@/testData';
import AppointmentList, { DoctorAppointmentItem } from './AppointmentList';

type CompletedAppointmentsProps = {
  data?: DoctorAppointmentItem[];
  onPressViewAll?: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
};

const CompletedAppointments = ({
  data = completedAppointmentsData,
  onPressViewAll,
  onPressAppointment,
}: CompletedAppointmentsProps) => {
  return (
    <AppointmentList
      title="Completed Patients"
      data={data}
      actionTitle="View All"
      onPressAction={onPressViewAll}
      onPressItem={onPressAppointment}
    />
  );
};

export default CompletedAppointments;
