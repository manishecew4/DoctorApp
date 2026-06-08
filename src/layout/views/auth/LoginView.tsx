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
import { IMAGES } from '../../../constants/images';
import AppButton from '../../../components/buttons/AppButton';
import AppText from '@/components/basic/AppText';
import Routes from '@/navigation/navigationList';

export type LoginViewPropsType = {
  userEmail?: string;
  userPhone?: string;
  userPassword?: string;
  confirmUserPassword?: string;
  handleTextChange: (data: any) => void;
  handleLogin: () => void;
  navigation: any;
};

const LoginView = (LoginProps: LoginViewPropsType) => {
  const { userEmail, userPassword, handleTextChange, handleLogin, navigation } = LoginProps;

  const onEmailChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'email', value: val }),
    [handleTextChange],
  );
  const onPasswordChange = React.useCallback(
    (val: string) => handleTextChange({ name: 'password', value: val }),
    [handleTextChange],
  );

  const onPressSignupText = React.useCallback(() => {
    navigation.navigate(Routes.Signup.id);
  }, [navigation]);

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
            <View style={[css.f1, css.pt30]}>
              <FastImage
                source={IMAGES.login}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={[styles.formContainer]}>
                <AppInput
                  title="Email"
                  value={userEmail}
                  style={styles.inputStyle}
                  onChangeText={onEmailChange}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <AppInput
                  title="Password"
                  value={userPassword}
                  style={styles.inputStyle}
                  onChangeText={onPasswordChange}
                  placeholder="Password"
                />
                <AppButton
                  title="Login"
                  onPress={handleLogin}
                  style={styles.buttonStyle}
                />
                <AppText style={[css.mt20, css.tac, css.fontMedium]}>
                  Don't have an account?
                </AppText>
                <Pressable onPress={onPressSignupText}>
                  <AppText style={[css.tac, css.fontBold, css.mb20]}>
                    Signup
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

export default React.memo(LoginView);

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
    // flex: 1,
  },
  buttonStyle: {},
});
