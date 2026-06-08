import React from 'react';
import AppointmentList, { DoctorAppointmentItem } from './AppointmentList';

type TodayAppointmentsProps = {
  data: DoctorAppointmentItem[];
  onPressViewMore?: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
};

const TodayAppointments = ({
  data,
  onPressViewMore,
  onPressAppointment,
}: TodayAppointmentsProps) => {
  return (
    <AppointmentList
      title="Today's Patients"
      data={data}
      actionTitle="View More"
      onPressAction={onPressViewMore}
      onPressItem={onPressAppointment}
    />
  );
};

export default TodayAppointments;
