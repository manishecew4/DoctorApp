import React from 'react';
import AppointmentList, { DoctorAppointmentItem } from './AppointmentList';

type UpcomingAppointmentsProps = {
  data: DoctorAppointmentItem[];
  onPressViewMore?: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
};

const UpcomingAppointments = ({
  data,
  onPressViewMore,
  onPressAppointment,
}: UpcomingAppointmentsProps) => {
  return (
    <AppointmentList
      title="Upcoming Patients"
      data={data}
      actionTitle="View More"
      onPressAction={onPressViewMore}
      onPressItem={onPressAppointment}
    />
  );
};

export default UpcomingAppointments;
