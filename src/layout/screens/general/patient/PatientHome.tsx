import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import PatientHomeView from '@/layout/views/patient/PatientHomeView';

const PatientHome = () => {
  const navigation = useNavigation<any>();

  const handleOpenDrawer = React.useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  return <PatientHomeView onPressMenu={handleOpenDrawer} />;
};

export default PatientHome;
