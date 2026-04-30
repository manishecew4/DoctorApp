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

const DoctorHomeView = () => {
  return (
    <ContainerView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <HeaderDoctor userInfo={userInfo} />
        <DoctorsAppointmentStatus />
        <TodayAppointments />
        <UpcomingAppointments />
        <CompletedAppointments />
        <CancelledAppointments />
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
