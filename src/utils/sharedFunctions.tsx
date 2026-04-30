type AppointmentStatusItem = {
  status: string;
  count: number;
};

export const getAppointmentStatusCount = (
  appointmentStatusData: AppointmentStatusItem[],
) => {
  return appointmentStatusData.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = item.count;
    return acc;
  }, {});
};
