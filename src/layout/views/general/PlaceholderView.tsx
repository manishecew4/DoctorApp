import { StyleSheet, View } from 'react-native';
import React from 'react';
import ContainerView from '@/components/basic/ContainerView';
import AppText from '@/components/basic/AppText';
import { Colors } from '@/constants/colors';
import FONTS from '@/constants/fonts';

type PlaceholderViewProps = {
  title: string;
};

const PlaceholderView = ({ title }: PlaceholderViewProps) => {
  return (
    <ContainerView>
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </ContainerView>
  );
};

export default PlaceholderView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: Colors.black,
  },
});
