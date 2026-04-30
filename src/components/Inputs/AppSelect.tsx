import { Pressable, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import AppText from '../basic/AppText';
import css from '../../styles/GlobalStyle';
import { Colors } from '@/constants/colors';
import { AntDesign } from '@/constants/vectorIcons';
import BottomSheet from '../modals/BottomSheet';

export type AppSelectOption = {
  label: string;
  value: string;
};

export type AppSelectPropsType = {
  title?: string;
  options: AppSelectOption[];
  value?: string;
  placeholder?: string;
  modalTitle?: string;
  onChange?: (value: string, option: AppSelectOption) => void;
  style?: ViewStyle | ViewStyle[];
};

const AppSelect = ({
  title,
  options,
  value,
  placeholder = 'Select an option',
  modalTitle,
  onChange,
  style,
}: AppSelectPropsType) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState('');

  const selectedValue = value ?? internalValue;
  const selectedOption = React.useMemo(
    () => options.find(option => option.value === selectedValue),
    [options, selectedValue],
  );

  const closeModal = React.useCallback(() => setIsOpen(false), []);
  const onSelectOption = React.useCallback(
    (option: AppSelectOption) => {
      setInternalValue(option.value);
      onChange?.(option.value, option);
      setIsOpen(false);
    },
    [onChange],
  );

  return (
    <View style={[styles.container,style]}>
      {title && (
        <AppText style={[css.mb5, css.ml5, css.fontMedium]}>{title}</AppText>
      )}
      <Pressable style={styles.trigger} onPress={() => setIsOpen(true)}>
        <AppText
          style={selectedOption ? styles.selectedText : styles.placeholder}
        >
          {selectedOption?.label || placeholder}
        </AppText>
        <AntDesign name="caret-down" size={25} style={styles.chevron} />
      </Pressable>

      <BottomSheet isVisible={isOpen} onBackdropPress={closeModal}>
        <View style={css.f1}>
          <AppText style={[css.fontSemiBold, styles.modalTitle]}>
            {modalTitle || placeholder}
          </AppText>
          <ScrollView showsVerticalScrollIndicator={false}>
            {options.map(option => (
              <Pressable
                key={option.value}
                style={styles.option}
                onPress={() => onSelectOption(option)}
              >
                <AppText
                  style={
                    selectedValue === option.value
                      ? [styles.optionText, styles.activeOptionText]
                      : styles.optionText
                  }
                >
                  {option.label}
                </AppText>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default React.memo(AppSelect);

const styles = StyleSheet.create({
  container: {
    // marginBottom: 20,
  },
  trigger: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.light1,
    minHeight: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedText: {
    color: Colors.dark1,
  },
  placeholder: {
    color: Colors.borderColor,
  },
  chevron: {
    color: Colors.dark3,
    fontSize: 11,
  },
  modalTitle: {
    marginHorizontal: 16,
    marginBottom: 12,
    color: Colors.dark1,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    color: Colors.dark2,
  },
  activeOptionText: {
    color: Colors.cyan,
  },
});
