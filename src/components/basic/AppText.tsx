import {
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
} from 'react-native';
import React, { useMemo } from 'react';
import { Colors } from '../../constants/colors';
import FONTS from '../../constants/fonts';

const AppText = ({ children, style }: AppTextTypes) => {
  return <Text style={[styles.defaultStyle, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  defaultStyle: {
    color: Colors.dark1,
    fontFamily: FONTS.regular,
  },
});

interface AppTextTypes {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}
