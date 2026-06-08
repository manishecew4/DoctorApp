import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import ContainerView from '@/components/basic/ContainerView';
import AppText from '@/components/basic/AppText';
import { MaterialCommunityIcons } from '@/constants/vectorIcons';
import { Colors } from '@/constants/colors';
import FONTS from '@/constants/fonts';

type PatientHomeViewProps = {
  onPressMenu?: () => void;
};

const PatientHomeView = ({ onPressMenu }: PatientHomeViewProps) => {
  return (
    <ContainerView>
      <View style={styles.header}>
        <View>
          <AppText style={styles.title}>Patient Home</AppText>
          <AppText style={styles.subtitle}>Manage your care</AppText>
        </View>
        <Pressable style={styles.menuButton} onPress={onPressMenu}>
          <MaterialCommunityIcons name="menu" size={28} color={Colors.black} />
        </Pressable>
      </View>

      <View style={styles.body}>
        <AppText style={styles.bodyText}>Patient dashboard coming soon</AppText>
      </View>
    </ContainerView>
  );
};

export default PatientHomeView;

const styles = StyleSheet.create({
  header: {
    height: 72,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: Colors.black,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: '#5F6368',
  },
  menuButton: {
    width: 44,
    height: 44,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  bodyText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: '#5F6368',
  },
});
