import React from 'react';
import { NavigatinScreens } from './NavigationScreens';
import { View } from 'react-native';
import { NoInternet, ToastService } from '../component';
const AppRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigatinScreens />
      <ToastService />
      <NoInternet />
    </View>
  );
};

export default AppRoute;
