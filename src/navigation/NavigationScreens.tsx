//@ts-nocheck
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {
  ForgotScreen,
  LoginScreen,
  OtpVerifyScreen,
  PasswordUpdateScreen,
  PrivacyPolicy,
  SignupScreen,
} from '../screens/auth';
import Bottomtab from './BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  AvailabilityManage,
  BookAppointment,
  BookingDetails,
  BookingPrivacyPolicy,
  ChangePassword,
  FilterScreen,
  HomeScreen,
  InboxScreen,
  LanguageAndCurrency,
  MessageScreen,
  MyBookingScreen,
  MyCalender,
  NotificationAndAlert,
  NotificationScreen,
  PaymentHistory,
  ProfileScreen,
  ProfileSetup,
  RatingRiview,
  ReportShop,
  ServiceDetails,
  ServiceList,
  ServiceManagement,
  ServiceSetup,
  ShopDetails,
  ShopList,
  SplashScreen,
  ViewAll,
  MarketingPromotions,
  OnsitePayment,
  PaymentHistoryGraph,
  PaymentHistorySearch,
  PaymentInvoice,
  ShareProfile,
  PaymentScreen,
  AddOtherPersonDetail,
  CustomerSupport,
  SubscriptionManage
} from '../screens';

import AllUsersList from '../screens/AllUsersList';
import ChatScreen from '../screens/ChatScreen';
import { navigationRef } from '../utils/NavigationService';


const Stack = createNativeStackNavigator();

export const NavigatinScreens = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={RouteName.SERVICE_SETUP} component={ServiceSetup} />
        {/* ============bottom tabs screen========= */}
        <Stack.Screen name={RouteName.HOME} component={HomeScreen} />
        <Stack.Screen name={RouteName.MY_BOOKING} component={MyBookingScreen} />
        <Stack.Screen name={RouteName.INBOX_SCREEN} component={InboxScreen} />
        <Stack.Screen name={RouteName.PROFILE} component={ProfileScreen} />



        <Stack.Screen name={RouteName.SHOP_LIST} component={ShopList} />
        <Stack.Screen name={RouteName.SHOP_DETAILS} component={ShopDetails} />
        {/* auth-====== */}
        <Stack.Screen name={RouteName.LOGIN} component={LoginScreen} />
        <Stack.Screen name={RouteName.SIGNUP} component={SignupScreen} />
        {/* learning--------- */}
        <Stack.Screen name={'AllUsersList'} component={AllUsersList} />
        <Stack.Screen name={'ChatScreen'} component={ChatScreen} />
        {/* profile--------- */}
        <Stack.Screen name={RouteName.PROFILE_SETUP} options={{ headerShown: false }} component={ProfileSetup} />
        <Stack.Screen name={RouteName.CHANGE_PASSWORD} component={ChangePassword} />


        <Stack.Screen name={RouteName.VIEW_ALL} component={ViewAll} />
        <Stack.Screen name={RouteName.PRIVACY_POLICY} component={PrivacyPolicy} />
        <Stack.Screen name={RouteName.PASS_UPDATE} component={PasswordUpdateScreen} />
        <Stack.Screen name={RouteName.NOTIFICATION} component={NotificationScreen} />

        <Stack.Screen name={RouteName.FORGOT_PASS} component={ForgotScreen} />
        <Stack.Screen name={RouteName.SERVICE_LIST} component={ServiceList} />
        <Stack.Screen name={RouteName.SERVICE_DETAILS} component={ServiceDetails} />
        <Stack.Screen name={RouteName.OTP_VERIFY} component={OtpVerifyScreen} />
        <Stack.Screen name={RouteName.MY_CALENDER} component={MyCalender} />
        <Stack.Screen name={RouteName.PAYMENT_HISTORY} component={PaymentHistory} />
        <Stack.Screen name={RouteName.RATING_REVIEW} component={RatingRiview} />
        <Stack.Screen name={RouteName.NOTIFICATION_ALERT} component={NotificationAndAlert} />
        <Stack.Screen name={RouteName.LANG_CURRENCY} component={LanguageAndCurrency} />
        <Stack.Screen name={RouteName.BOOKING_PRI_POLI} component={BookingPrivacyPolicy} />
        <Stack.Screen name={RouteName.REPORT_SHOP} component={ReportShop} />
        <Stack.Screen name={RouteName.BOOK_APPOINT} component={BookAppointment} />
        <Stack.Screen name={RouteName.BOOK_DETAILS} component={BookingDetails} />
        <Stack.Screen name={RouteName.FILTER_SCREEN} component={FilterScreen} />
        <Stack.Screen name={RouteName.MESSAGE_SCREEN} component={MessageScreen} />
        <Stack.Screen name={RouteName.AVAILBILITY_MANAGE} component={AvailabilityManage} />
        <Stack.Screen name={RouteName.SERVICE_MANAG} component={ServiceManagement} />
        <Stack.Screen name={RouteName.MARKETING_PERMOTION} component={MarketingPromotions} />
        <Stack.Screen name={RouteName.ON_SITE_PAYMENT} component={OnsitePayment} />
        <Stack.Screen name={RouteName.PAY_HISTORY_GRAPH} component={PaymentHistoryGraph} />
        <Stack.Screen name={RouteName.PAY_HISTORY_SEARCH} component={PaymentHistorySearch} />
        <Stack.Screen name={RouteName.PAY_INVOICE} component={PaymentInvoice} />
        <Stack.Screen name={RouteName.SHARE_PROFILE} component={ShareProfile} />
        <Stack.Screen name={RouteName.PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen name={RouteName.ADD_OTHER_PERSON_DETAIL} component={AddOtherPersonDetail} />
        <Stack.Screen name={RouteName.CUSTOMER_SUPPORT} component={CustomerSupport} />
        <Stack.Screen name={RouteName.SUBSCRIPTION_MANAGE} component={SubscriptionManage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
