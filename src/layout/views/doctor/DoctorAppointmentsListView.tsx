import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import ContainerView from '@/components/basic/ContainerView';
import AppText from '@/components/basic/AppText';
import AppointmentList, {
  DoctorAppointmentItem,
} from '@/components/appointmentsDoc/AppointmentList';
import { MaterialCommunityIcons } from '@/constants/vectorIcons';
import { Colors } from '@/constants/colors';
import FONTS from '@/constants/fonts';

type DoctorAppointmentsListViewProps = {
  title: string;
  appointments: DoctorAppointmentItem[];
  onPressBack: () => void;
  onPressAppointment?: (appointment: DoctorAppointmentItem) => void;
};

const DoctorAppointmentsListView = ({
  title,
  appointments,
  onPressBack,
  onPressAppointment,
}: DoctorAppointmentsListViewProps) => {
  return (
    <ContainerView>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={onPressBack}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.black} />
        </Pressable>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <AppointmentList
          title={title}
          data={appointments}
          onPressItem={onPressAppointment}
        />
      </ScrollView>
    </ContainerView>
  );
};

export default DoctorAppointmentsListView;

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: Colors.black,
  },
  headerSpacer: {
    width: 40,
  },
  contentContainerStyle: {
    paddingBottom: 24,
  },
});
