import { Alert, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { AppText, Container } from '../component';
import imagePaths from '../assets/images';
import { Colors, Fonts, SF, SH } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import RouteName from '../navigation/RouteName';
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import * as Keychain from 'react-native-keychain';
const SplashScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
    });
    setTimeout(() => {
      // navigation.navigate(RouteName.LOGIN);
      biometricLogin();
    }, 1500);
  }, []);


  const rnBiometrics = new ReactNativeBiometrics();
  // const saveCredentials = async (email:any, password:any) => {
  //   await Keychain.setGenericPassword(email, password, {
  //     service: 'biometric_login',
  //   });
  // };
  const biometricLogin = async () => {
    // navigation.navigate(RouteName.PROFILE_SETUP);
    navigation.navigate(RouteName.LOGIN);
    return false;
  try {
    const { available } = await rnBiometrics.isSensorAvailable();
    if (!available) {
      Alert.alert('Biomatric not available')
      return;
    }
    const { success } = await rnBiometrics.simplePrompt({
      promptMessage: 'Authenticate to log in',
    });
  } catch (error) {
    console.log('errorerror',error);
    
  }

    
    // if (success) {
    //   const credentials = await Keychain.getGenericPassword({
    //     service: 'biometric_login',
    //   });

    //   if (credentials) {
    //     console.log('Auto Login:', credentials.username, credentials.password);
    //     // Call your API with stored credentials to log in
    //   } else {
    //     console.log('No saved credentials found');
    //   }
    // } else {
    //   console.log('Biometric authentication failed');
    // }
  }







  return (
    <Container isAuth={true} statusBarStyle="light-content" statusBarColor={Colors.themeDarkColor}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}
        colors={[Colors.themeDarkColor, Colors.themeColor]}>
        <Image
          source={imagePaths.splash_logo}
          resizeMode="contain"
          style={styles.logo}
        />
        {/* <AppText style={styles.appTitle}>Ssnap</AppText>
        <AppText style={styles.subtitle}>All in One Service App</AppText> */}
      </LinearGradient>
    </Container>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: SF(246),
    width: SF(196),
  },
  appTitle: {
    fontFamily: Fonts.EXTRA_BOLD,
    fontSize: SF(34),
    marginTop: 10,
    color: Colors.white,
  },
  subtitle: {
    fontFamily: Fonts.BOLD,
    fontSize: SF(20),
    marginTop: 10,
    color: Colors.white,
  },
});
