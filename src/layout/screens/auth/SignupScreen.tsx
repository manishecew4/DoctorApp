import React from 'react';
import SignupView from '../../views/auth/SignupView';
import { useNavigation } from '@react-navigation/native';
import { useToast } from '../../../shared/context/ToastContext';
import { useAppDispatch } from '@/shared/hooks/useRedux';
import { signupAction } from '@/store/actions/authAction';
import Routes from '@/navigation/navigationList'

const SignupScreen = () => {
  const { showToast } = useToast();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();


  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    confirmPassword: '',
  });



  const userDataRef = React.useRef(userData);
  userDataRef.current = userData;

  const handleTextChange = React.useCallback(
    ({ name, value }: { name: string; value: string }) => {
      setUserData(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleSignup = React.useCallback(async () => {
    try {
      await dispatch(signupAction(userData)).unwrap();
      console.log("chdhdbddf---userInfo", userDataRef.current);
      showToast('Signup successful! Please login.', 'success');
      navigation.navigate(Routes.Login.id);
    } catch (error) {
      console.log("chdhdbddf--handleSignup-error", error);
      showToast(`${error}` || 'Signup failed', 'error');
    }
  }, [navigation, showToast, userData, dispatch]);

  const onPressLogin = React.useCallback(() => {
    navigation.navigate(Routes.Login.id);
  }, [navigation]);

  return (
    <SignupView
      userName={userData.name}
      userEmail={userData.email}
      userPhone={userData.phone}
      userRole={userData.role}
      userPassword={userData.password}
      confirmUserPassword={userData.confirmPassword}
      handleTextChange={handleTextChange}
      handleSignup={handleSignup}
      onPressLogin={onPressLogin}
    />
  );
};

export default SignupScreen;
