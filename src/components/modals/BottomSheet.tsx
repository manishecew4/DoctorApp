import { Colors } from '@/constants/colors';
import css, { deviceHeight, deviceWidth } from '@/styles/GlobalStyle';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

type BottomSheetProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isVisible: boolean;
  onBackdropPress?: () => void;
};

const BottomSheet = ({
  children,
  style,
  isVisible,
  onBackdropPress,
}: BottomSheetProps) => {
  return (
    <Modal
      isVisible={isVisible}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      style={[css.m0]}
      onBackdropPress={onBackdropPress}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      statusBarTranslucent
    >
      <SafeAreaView style={[styles.defaultStyle, style]}>
        <View style={styles.topDividerStyle} />
        {children}
      </SafeAreaView>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: '50%',
    overflow: 'hidden',
  },
  topDividerStyle: {
    height: 5,
    width: 50,
    backgroundColor: Colors.borderColor,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
