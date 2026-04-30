import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import ContainerView from '../../../components/basic/ContainerView';
import css from '../../../styles/GlobalStyle';
import AppInput from '../../../components/Inputs/AppInput';
import FastImage from '@d11/react-native-fast-image';
import { Images } from '../../../constants/images';
import AppButton from '../../../components/buttons/AppButton';
import AppText from '../../../components/basic/AppText';
// import AppSelect from '@/src/components/Inputs/AppSelect';
import AppSelect from '../../../components/Inputs/AppSelect';

const roleOptions = [
  { label: 'Doctor', value: 'doctor' },
  { label: 'Patient', value: 'patient' },
];

export type SignupViewPropsType = {
  userName: string;
  userEmail: string;
  userPhone: string;
  userRole: string;
  userPassword: string;
  confirmUserPassword: string;
  handleTextChange: (data: any) => void;
  handleSignup: () => void;
  onPressLogin: () => void;
};

const SignupView = (SignupProps: SignupViewPropsType) => {
  const {
    userName,
    userEmail,
    userPhone,
    userRole,
    userPassword,
    confirmUserPassword,
    handleTextChange,
    handleSignup,
    onPressLogin,
  } = SignupProps;

  const onNameChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'name', value: val }),
    [handleTextChange],
  );
  const onEmailChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'email', value: val }),
    [handleTextChange],
  );
  const onPhoneChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'phone', value: val }),
    [handleTextChange],
  );
  const onRoleChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'role', value: val }),
    [handleTextChange],
  );
  const onPasswordChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'password', value: val }),
    [handleTextChange],
  );
  const onConfirmPasswordChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'confirmPassword', value: val }),
    [handleTextChange],
  );

  return (
    <ContainerView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={css.f1}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={css.f1}>
              <FastImage
                source={Images.login}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.formContainer}>
                <AppInput
                  title="Name"
                  value={userName}
                  style={styles.inputStyle}
                  onChangeText={onNameChange}
                  placeholder="Name"
                  inputMode="text"
                  keyboardType="default"
                />
                <AppInput
                  title="Email"
                  value={userEmail}
                  style={styles.inputStyle}
                  onChangeText={onEmailChange}
                  placeholder="Email"
                  inputMode="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <AppInput
                  title="Phone"
                  value={userPhone}
                  style={styles.inputStyle}
                  onChangeText={onPhoneChange}
                  placeholder="Phone"
                  inputMode="numeric"
                  keyboardType="phone-pad"
                />
                <AppSelect
                  title="What you are?"
                  value={userRole}
                  placeholder="Select your role"
                  modalTitle="Select your role"
                  options={roleOptions}
                  onChange={onRoleChange}
                  style={styles.inputStyle}
                />
                <AppInput
                  title="Password"
                  value={userPassword}
                  style={styles.inputStyle}
                  onChangeText={onPasswordChange}
                  placeholder="Password"
                  inputMode="text"
                  keyboardType="default"
                />
                <AppInput
                  title="Confirm Password"
                  value={confirmUserPassword}
                  style={styles.inputStyle}
                  onChangeText={onConfirmPasswordChange}
                  placeholder="Confirm Password"
                  inputMode="text"
                  keyboardType="default"
                />
                <AppButton
                  title="Signup"
                  onPress={handleSignup}
                  style={styles.buttonStyle}
                />
                <AppText style={[css.mt20, css.tac, css.fontMedium]}>
                  Already have an account?
                </AppText>
                <Pressable onPress={onPressLogin}>
                  <AppText style={[css.tac, css.fontBold, css.mb20]}>
                    Login
                  </AppText>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ContainerView>
  );
};

export default React.memo(SignupView);

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  buttonStyle: {},
});
