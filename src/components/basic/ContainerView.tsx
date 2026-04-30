import {
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  useColorScheme,
} from 'react-native';
import React, { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ContainerViewProps } from '../../dataTypes/dataTypes';
import { Colors } from '../../constants/colors';

const ContainerView = ({ children, style }: ContainerViewProps) => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';

  const containerStyle = useMemo(() => {
    return {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    };
  }, [insets, isDarkMode]);

  return (
    <View style={[styles.container, containerStyle, style]}>{children}</View>
  );
};

export default ContainerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
