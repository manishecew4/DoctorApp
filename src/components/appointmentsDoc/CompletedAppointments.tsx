import React from 'react';
import AppointmentList, { DoctorAppointmentItem } from './AppointmentList';

type CompletedAppointmentsProps = {
  data: DoctorAppointmentItem[];
  onPressViewMore?: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
};

const CompletedAppointments = ({
  data,
  onPressViewMore,
  onPressAppointment,
}: CompletedAppointmentsProps) => {
  return (
    <AppointmentList
      title="Completed Patients"
      data={data}
      actionTitle="View More"
      onPressAction={onPressViewMore}
      onPressItem={onPressAppointment}
    />
  );
};

export default CompletedAppointments;
