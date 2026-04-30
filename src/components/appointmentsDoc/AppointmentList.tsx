import { FlatList, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import React, { useCallback } from 'react';
import AppText from '../basic/AppText';
import css from '@/styles/GlobalStyle';
import { AntDesign, MaterialCommunityIcons } from '@/constants/vectorIcons';
import { Colors } from '@/constants/colors';
import FONTS from '@/constants/fonts';

export type DoctorAppointmentItem = {
  id: string;
  patientName: string;
  appointmentTime: string;
  concern: string;
  visitType: string;
  status: string;
  tagBackgroundColor?: string;
  tagTextColor?: string;
  timeBackgroundColor?: string;
};

type AppointmentListProps = {
  title: string;
  data: DoctorAppointmentItem[];
  actionTitle?: string;
  onPressAction?: () => void;
  onPressItem?: (item: DoctorAppointmentItem) => void;
};

const AppointmentList = ({
  title,
  data,
  actionTitle = '',
  onPressAction,
  onPressItem,
}: AppointmentListProps) => {
  const renderAppointment = useCallback(
    ({ item, index }: { item: DoctorAppointmentItem; index: number }) => {

      const containerStyle = {
        marginBottom: index === data.length - 1 ? 0 : 8,
      }
      const _dividerStyle: ViewStyle = index === data.length - 1 ? { display: 'none' } : styles.dividerStyle

      return (
        <Pressable
          style={[containerStyle, styles.cardStyle]}
          onPress={() => onPressItem?.(item)}
        >
          <View>
            <View style={styles.detailWrap}>
              <AppText style={styles.patientName}>{item?.patientName}</AppText>
              <AppText style={styles.concernText}>{item?.concern}</AppText>
            </View>
            <View
              style={[
                styles.timeCircle,
                css.row,
              ]}
            >
              <AppText
                style={[
                  styles.tagText,
                  css.mr10,
                  { color: item?.tagTextColor || '#068D7D' },
                ]}
              >
                {item?.visitType}:
              </AppText>
              <AppText style={styles.timeText}>{item?.appointmentTime}</AppText>
            </View>
          </View>

          <MaterialCommunityIcons name="arrow-right" size={20} color="#075E54" />
          <View style={_dividerStyle} />
        </Pressable>
      );
    },
    [data.length, onPressItem],
  );

  if (!data?.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.titleStyle}>{title}</AppText>
        <Pressable style={styles.actionWrap} onPress={onPressAction}>
          <AppText style={[css.mr5,css.fontMedium]}>
            View More
          </AppText>
          <AntDesign name="caret-right" size={20} color="#000" />
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={renderAppointment}
        keyExtractor={item => item?.id}
        scrollEnabled={false}

      />
    </View>
  );
};

export default AppointmentList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: Colors.dark1,
  },
  actionWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStyle: {
    minHeight: 112,
    borderRadius: 8,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // overflow: 'hidden',
  },
  timeCircle: {
    // width: 66,
    // height: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
    alignSelf: 'flex-start',
    // paddingHorizontal: 14,
    paddingVertical: 5,
  },
  timeText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#075E54',
  },
  detailWrap: {
    flex: 1,
    paddingRight: 10,
  },
  patientName: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: Colors.black,
  },
  concernText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#5F6368',
    marginTop: 2,
  },
  tagText: {
    fontSize: 15,
    fontWeight: '700',
  },
  dividerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  viewMoreWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '48%',
    bottom: -30,
    zIndex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
