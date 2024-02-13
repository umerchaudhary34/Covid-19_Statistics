import React from 'react';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { themeContext } from './src/config/themeContext';
import { useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from './src/routers/RootStack';
import theme from './src/config/theme';

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  return (
    <themeContext.Provider value={isDarkMode ? theme.dark : theme.light}>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <RootStack />
          </QueryClientProvider>
          <Toast />
        </GestureHandlerRootView>
      </NavigationContainer>
    </themeContext.Provider>
  );
};
export default App;
