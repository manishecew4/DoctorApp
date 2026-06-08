import React from 'react'
import DoctorHomeView from '@/layout/views/doctor/DoctorHomeView'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import {
    cancelledAppointmentsData,
    completedAppointmentsData,
    todayAppointmentsData,
    upcomingAppointmentsData,
} from '@/testData'
import appScreens from '@/navigation/navigationList'
import { DoctorAppointmentItem } from '@/components/appointmentsDoc/AppointmentList'
import Routes from '@/navigation/navigationList'

const DoctorHome = () => {
    const navigation = useNavigation<any>()

    const getPreviewData = React.useCallback((data: DoctorAppointmentItem[]) => {
        return data.slice(0, 3)
    }, [])

    const navigateToAppointmentList = React.useCallback(
        (listType: string, title: string) => {
            navigation.navigate(Routes.DoctorAppointmentsList, {
                listType,
                title,
            })
        },
        [navigation],
    )

    const handlePressAppointment = React.useCallback((appointment: DoctorAppointmentItem) => {
        console.log('appointment pressed', appointment)
    }, [])

    const handleOpenDrawer = React.useCallback(() => {
        navigation.dispatch(DrawerActions.openDrawer())
    }, [navigation])

    return (
        <DoctorHomeView
            todayAppointments={getPreviewData(todayAppointmentsData)}
            upcomingAppointments={getPreviewData(upcomingAppointmentsData)}
            completedAppointments={getPreviewData(completedAppointmentsData)}
            cancelledAppointments={getPreviewData(cancelledAppointmentsData)}
            onPressTodayViewMore={() =>
                navigateToAppointmentList('today', "Today's Patients")
            }
            onPressUpcomingViewMore={() =>
                navigateToAppointmentList('upcoming', 'Upcoming Patients')
            }
            onPressCompletedViewMore={() =>
                navigateToAppointmentList('completed', 'Completed Patients')
            }
            onPressCancelledViewMore={() =>
                navigateToAppointmentList('cancelled', 'Cancelled Patients')
            }
            onPressAppointment={handlePressAppointment}
            onPressMenu={handleOpenDrawer}
        />
    )
}

export default DoctorHome
