type AppointmentStatusItem = {
  status: string;
  count: number;
};

type AppointmentItem = {
  status: string;
};

export const getAppointmentStatusCount = (
  appointmentStatusData: AppointmentStatusItem[],
) => {
  return appointmentStatusData.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = item.count;
    return acc;
  }, {});
};

export const getAppointmentStatusCardsWithCount = <
  T extends AppointmentStatusItem,
>(
  statusCards: T[],
  appointmentGroups: Record<string, AppointmentItem[]>,
) => {
  return statusCards.map(item => ({
    ...item,
    count: appointmentGroups[item.status]?.length ?? item.count,
  }));
};
