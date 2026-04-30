import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from './src/shared/context/ToastContext';
import { Provider } from 'react-redux';
import { store } from '@/store';
import AppNavigator from '@/navigation/AppNavigator';

function App() {
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
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
