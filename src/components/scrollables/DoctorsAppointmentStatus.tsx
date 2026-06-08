import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import {
    cancelledAppointmentsData,
    completedAppointmentsData,
    doctorsAppointmentStatusData,
    todayAppointmentsData,
    upcomingAppointmentsData,
} from '@/testData';
import css from '@/styles/GlobalStyle';
import AppText from '../basic/AppText';
import { getAppointmentStatusCardsWithCount } from '@/utils/sharedFunctions';

const DoctorsAppointmentStatus = () => {
    const statusData = useMemo(() => {
        return getAppointmentStatusCardsWithCount(doctorsAppointmentStatusData, {
            approved: todayAppointmentsData,
            pending: todayAppointmentsData,
            cancelled: cancelledAppointmentsData,
            completed: completedAppointmentsData,
            upcoming: upcomingAppointmentsData,
        });
    }, []);

    const renderStatus = useCallback(({ item }: any) => {

        let textColor = { color: item?.textColor };
        let defaultStyle = [
            css.shadowsm,
            styles.cardStyle,
            css.asfs,
            {
                backgroundColor: item.backgroundColor,
            },
        ]

        return (
            <View style={defaultStyle}>
                <AppText style={[styles.statusText, css.fontSemiBold, textColor]}>
                    {item.title}
                </AppText>
                <AppText style={[styles.countText, textColor]}>
                    {item.count}
                </AppText>
            </View>
        );
    }, []);

    return (
        <View style={styles.containerStyle}>
            <FlatList
                data={statusData}
                renderItem={renderStatus}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </View>
    );
};

export default DoctorsAppointmentStatus;

const styles = StyleSheet.create({
    containerStyle: {
        height: 116,
    },
    contentContainerStyle: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    cardStyle: {
        width: 150,
        height: 92,
        borderRadius: 8,
        // borderWidth: 1,
        overflow: 'hidden',
        padding: 12,
        marginRight: 12,
        justifyContent: 'space-between',
    },
    statusText: {
        fontSize: 14,
        fontWeight: '600',
    },
    countText: {
        fontSize: 28,
        fontWeight: '700',
    },
});
