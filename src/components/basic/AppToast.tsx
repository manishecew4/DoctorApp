import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';
import AppText from './AppText';
import { Colors } from '../../constants/colors';
import FONTS from '../../constants/fonts';
import css from '../../styles/GlobalStyle';

const { width } = Dimensions.get('window');

interface AppToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onHide: () => void;
}

const AppToast = ({ message, type, onHide }: AppToastProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-100);

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1, { duration: 300 }),
      withTiming(1, { duration: 2500 }),
      withTiming(0, { duration: 300 }, () => {
        runOnJS(onHide)();
      }),
    );
    translateY.value = withSequence(
      withTiming(50, { duration: 300 }), // Slide down to 50
      withTiming(50, { duration: 2500 }),
      withTiming(-100, { duration: 300 }), // Slide back up
    );
  }, [onHide, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return Colors.success;
      case 'error':
        return Colors.error;
      default:
        return Colors.dark2;
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        { backgroundColor: getBackgroundColor() },
      ]}
    >
      <AppText style={styles.text}>{message}</AppText>
    </Animated.View>
  );
};

export default AppToast;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: width * 0.9,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    zIndex: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
});
