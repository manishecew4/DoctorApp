import React from 'react';
import AppointmentList, { DoctorAppointmentItem } from './AppointmentList';

type CancelledAppointmentsProps = {
  data: DoctorAppointmentItem[];
  onPressViewMore?: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
};

const CancelledAppointments = ({
  data,
  onPressViewMore,
  onPressAppointment,
}: CancelledAppointmentsProps) => {
  return (
    <AppointmentList
      title="Cancelled Patients"
      data={data}
      actionTitle="View More"
      onPressAction={onPressViewMore}
      onPressItem={onPressAppointment}
    />
  );
};

export default CancelledAppointments;
