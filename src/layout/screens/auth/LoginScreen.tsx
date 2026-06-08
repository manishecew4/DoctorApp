/* trunk-ignore-all(prettier) */
import { StyleSheet } from 'react-native';
import React from 'react';
import LoginView from '../../views/auth/LoginView';
import { useNavigation } from '@react-navigation/native';
import { storageService } from '../../../shared/utils/storage';
import { useToast } from '../../../shared/context/ToastContext';
import { loginAction } from '@/store/actions/authAction';
import { useAppDispatch } from '@/shared/hooks/useRedux';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const existingUserRef = React.useRef(null);
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

  const getUserData = React.useCallback(async () => {
    const userData = await storageService.getUser();
    existingUserRef.current = userData;
  }, []);

  React.useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleTextChange = React.useCallback(
    ({ name, value }: { name: string; value: string }) => {
      setLoginData(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleLogin = React.useCallback(async () => {
    try {
      /* trunk-ignore(eslint/@typescript-eslint/no-unused-vars) */
      const response = await dispatch(loginAction(loginData)).unwrap();
      showToast('Login successful', 'success');
      // const userRole: any = response?.user?.role;
      // console.log("dhfbdhbfhd---response", userRole);
    } catch (error: any) {
      showToast(error || 'Login failed', 'error');
    }
  }, [dispatch, loginData, showToast]);


  return (
    <LoginView
      userEmail={loginData.email}
      userPassword={loginData.password}
      handleTextChange={handleTextChange}
      handleLogin={handleLogin}
      navigation={navigation}
    />
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
