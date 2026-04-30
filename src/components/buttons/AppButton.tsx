import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { Colors } from '../../constants/colors';

const AppButton = ({
  title,
  style,
  onPress,
  disabled,
  ripple_radius,
  ripple_color,
}: any) => {
  const rippleConfig = useMemo(() => {
    return {
      color: ripple_color ?? Colors.cyan,
      radius: ripple_radius ?? 200,
      borderless: false,
    };
  }, [ripple_radius, ripple_color]);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      android_ripple={rippleConfig}
      style={[styles.defaultStyle, style]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: Colors.cyanLight,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
