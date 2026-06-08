import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from './src/shared/context/ToastContext';
import { Provider } from 'react-redux';
import { store } from '@/store';
import AppNavigator from '@/navigation/AppNavigator';
import { useReactNavigationDevTools } from '@rozenite/react-navigation-plugin';
import { useNetworkActivityDevTools } from '@rozenite/network-activity-plugin';

function App() {
  useNetworkActivityDevTools();
  return (
    <Provider store={store} >
      <SafeAreaProvider>
        <ToastProvider>
          <StatusBar barStyle="dark-content" />
          <AppContent />
        </ToastProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

function AppContent() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools({ ref: navigationRef });

  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
