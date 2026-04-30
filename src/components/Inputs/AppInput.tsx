import {
  InputModeOptions,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';
import AppText from '../basic/AppText';
import css from '../../styles/GlobalStyle';

const AppInput = ({
  value,
  onChangeText,
  style,
  placeholder,
  placeholderTextColor = Colors.borderColor,
  title,
  maxLength,
  multiline,
  numberOfLines,
  inputMode,
  keyboardType,
  autoCapitalize,
}: AppInputPropsType) => {
  return (
    <View style={[]} >
      <AppText style={[css.mb5, css.ml5, css.fontMedium, css.fs16]}>{title}</AppText>
      <View style={[css.row,styles.inputContainerStyle,style]} >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.defaultStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          inputMode={inputMode}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />

      </View>
    </View>
  );
};

export default React.memo(AppInput);

const styles = StyleSheet.create({
  inputContainerStyle:{
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 50,
    height: 45,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
  },
  defaultStyle: {
    paddingLeft: 16,
    backgroundColor: Colors.light1,
    borderColor: Colors.borderColor,
    color: Colors.dark1,
    minHeight: 45,
    flexGrow: 1,
  },
});

export type AppInputPropsType = {
  value?: string;
  onChangeText?: (val: string) => void;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  title?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  inputMode?: InputModeOptions;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
};
