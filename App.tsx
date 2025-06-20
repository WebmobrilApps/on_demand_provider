import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppRoute from './src/navigation/AppRoute';
import './src/services/langauage/i18n';
import { ChatProvider } from './src/screens/ChatProvider';
import { notificationListener, requestUserPermission } from './src/services';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <View style={styles.safeArea}>
          <AppRoute />
        </View>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
