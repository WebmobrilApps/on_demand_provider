import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppRoute from './src/navigation/AppRoute';
import './src/utils/langauage/i18n';
import { ChatProvider } from './src/screens/ChatProvider';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { notificationListener, requestUserPermission } from './src/utils';
import { store } from './src/redux';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <SafeAreaProvider>
      <ChatProvider>
        <Provider store={store}>
          <View style={styles.safeArea}>
            <AppRoute />
          </View>
        </Provider>
      </ChatProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
