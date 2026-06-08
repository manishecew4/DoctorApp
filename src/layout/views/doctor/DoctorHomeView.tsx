import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ContainerView from '@/components/basic/ContainerView'
import HeaderDoctor from '@/components/headers/HeaderDoctor'
import { userInfo } from '@/testData'
import DoctorsAppointmentStatus from '@/components/scrollables/DoctorsAppointmentStatus'
import TodayAppointments from '@/components/appointmentsDoc/TodayAppointments'
import UpcomingAppointments from '@/components/appointmentsDoc/UpcomingAppointments'
import CompletedAppointments from '@/components/appointmentsDoc/CompletedAppointments'
import CancelledAppointments from '@/components/appointmentsDoc/CancelledAppointments'
import { DoctorAppointmentItem } from '@/components/appointmentsDoc/AppointmentList'

type DoctorHomeViewProps = {
  todayAppointments: DoctorAppointmentItem[];
  upcomingAppointments: DoctorAppointmentItem[];
  completedAppointments: DoctorAppointmentItem[];
  cancelledAppointments: DoctorAppointmentItem[];
  onPressTodayViewMore: () => void;
  onPressUpcomingViewMore: () => void;
  onPressCompletedViewMore: () => void;
  onPressCancelledViewMore: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
  onPressMenu?: () => void;
};

const DoctorHomeView = ({
  todayAppointments,
  upcomingAppointments,
  completedAppointments,
  cancelledAppointments,
  onPressTodayViewMore,
  onPressUpcomingViewMore,
  onPressCompletedViewMore,
  onPressCancelledViewMore,
  onPressAppointment,
  onPressMenu,
}: DoctorHomeViewProps) => {
  return (
    <ContainerView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <HeaderDoctor userInfo={userInfo} onPressMenu={onPressMenu} />
        <DoctorsAppointmentStatus />
        <TodayAppointments
          data={todayAppointments}
          onPressViewMore={onPressTodayViewMore}
          onPressAppointment={onPressAppointment}
        />
        <UpcomingAppointments
          data={upcomingAppointments}
          onPressViewMore={onPressUpcomingViewMore}
          onPressAppointment={onPressAppointment}
        />
        <CompletedAppointments
          data={completedAppointments}
          onPressViewMore={onPressCompletedViewMore}
          onPressAppointment={onPressAppointment}
        />
        <CancelledAppointments
          data={cancelledAppointments}
          onPressViewMore={onPressCancelledViewMore}
          onPressAppointment={onPressAppointment}
        />
      </ScrollView>
    </ContainerView>
  )
}

export default DoctorHomeView

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 24,
  },
})
