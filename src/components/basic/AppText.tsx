import {
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import React, { memo } from 'react';
import { Colors } from '../../constants/colors';
import FONTS from '../../constants/fonts';

const AppText = ({ children, style, numberOfLines }: AppTextTypes) => {
  return <Text style={[styles.defaultStyle, style]} numberOfLines={numberOfLines}>{children}</Text>;
};

export default memo(AppText);

const styles = StyleSheet.create({
  defaultStyle: {
    color: Colors.dark1,
    fontFamily: FONTS.regular,
  },
});

interface AppTextTypes {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
}
