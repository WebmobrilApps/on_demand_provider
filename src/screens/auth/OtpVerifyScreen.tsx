import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, SF, SH, SW, useCountdown, useProfileUpdate } from '../../utils';
import { AppText, AuthBottomContainer, AuthImgComp, Container, showAppToast, Spacing } from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import imagePaths from '../../assets/images';
import Buttons from '../../component/Button';
import RouteName from '../../navigation/RouteName';
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useResendOtpMutation, useVerifyOtpMutation } from '../../services';
import { setToken } from '../../redux';
import { useDispatch } from 'react-redux';

type OtpVerifyScreenProps = {};

const OtpVerifyScreen: React.FC<OtpVerifyScreenProps> = () => {
  const input = useRef<any>(null);
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const route = useRoute<any>();
  let fromScreen = route?.params?.fromScreen;
  let email = route?.params?.email;

  const [otp, setOtp] = useState<string | number>('');
  const [userToken, setUserToken] = useState<string>(route?.params?.userToken);

  const [resendOtp, { isLoading: otpLoader }] = useResendOtpMutation();
  const [verifyOtp, { isLoading: otpVerifyLoader }] = useVerifyOtpMutation();
  const dispatch = useDispatch();

  const { time, startCountdown, resetCountdown, status, formatTime } = useCountdown();

  useEffect(() => {
    startCountdown(60);
  }, [startCountdown]);

  useProfileUpdate();

  const btnResendOtp = async () => {
    showAppToast({
      title: 'Session Expired',
      message: 'Your session has expired. Please log in again.',
      type: 'error',
      timeout: 4000,
      onOkPress: () => console.log('User clicked OK'),
    });
    return false
    let userData = {
      email,
    };

    try {
      const response = await resendOtp(userData).unwrap();
      console.log('resendOtp res--', response);
      if (response.succeeded) {
        // CustomToast({ message: 'Your OTP', description: response.ResponseBody.otp, position: 'top', type: 'success' });
        setUserToken(response.ResponseBody.token);
        resetCountdown();
        startCountdown(60);
      } else {
        let mess = response?.ResponseMessage || response.error?.ResponseMessage || 'Something went wrong. Please try again.';
        // CustomToast({ message: 'Error', description: mess, position: 'top', type: 'danger' });
      }
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  const btnVerifyOtp = async () => {
    if (fromScreen === 'signup') {
      // CustomToast({ message: 'Success', description: response.ResponseMessage, position: 'top', type: 'success' });
      dispatch(setToken({ token: 'response.ResponseBody.token' }));
      navigation.navigate(RouteName.PROFILE_SETUP);
    }
    if (fromScreen === 'forgotpass') {
      // CustomToast({ message: 'Success', description: response.ResponseMessage, position: 'top', type: 'success' });
      navigation.navigate(RouteName.PASS_UPDATE, { userToken: 'response.ResponseBody.token' });
    }
    return false
    if (!otp) {
      // CustomToast({ message: 'Error', description: 'Please Enter OTP', position: 'top', type: 'danger' });
      return;
    }

    let userData = { otp };

    try {

      const response = await verifyOtp({ otpData: userData, token: userToken }).unwrap();
      console.log('btnVerifyOtp response', response);

      if (response.succeeded) {
        if (fromScreen === 'signup') {
          // CustomToast({ message: 'Success', description: response.ResponseMessage, position: 'top', type: 'success' });
          dispatch(setToken({ token: response.ResponseBody.token }));
          navigation.navigate(RouteName.HOME);
        }
        if (fromScreen === 'forgotpass') {
          // CustomToast({ message: 'Success', description: response.ResponseMessage, position: 'top', type: 'success' });
          navigation.navigate(RouteName.PASS_UPDATE, { userToken: response.ResponseBody.token });
        }
        resetCountdown();
      } else {
        let mess = response?.ResponseMessage || response.error?.ResponseMessage || 'Something went wrong. Please try again.';
        // CustomToast({ message: 'Error', description: mess, position: 'top', type: 'danger' });
      }
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  return (
    <Container
      isAuth={true}
      isBackButton={true}
      onBackPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scropllViewContainer}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />
        <AuthImgComp icon={imagePaths.otp_verify_img} />
        <AuthBottomContainer>
          <View style={styles.bottomInnerContainer}>
            <View>
              <AppText style={styles.heading}> {t('otpverify.title')}</AppText>
              <AppText style={styles.subtitile}>{t('otpverify.subtitle')}</AppText>

              <OTPTextView
                ref={input}
                textInputStyle={styles.textInputContainer}
                handleTextChange={val => {
                  setOtp(val);
                }}
                inputCount={4}
                keyboardType="numeric"
                tintColor={Colors.white}
                autoFocus
              />

              <View
                style={styles.resteTextCont}>
                {/* {otpLoader ? (
                  <ActivityIndicator color={'#ffffff'} style={styles.activeIndigator} />
                ) : ( */}
                  <AppText
                    onPress={() => {
                      status !== 'running' && btnResendOtp();
                    }}
                    style={styles.resteText}>
                    {/* {status === 'running' ? formatTime(time) : 'Resend OTP'} */}
                    {'Resend OTP'}
                  </AppText>
                {/* )} */}
              </View>
            </View>

            <Buttons
              buttonStyle={styles.burronContainer}
              textColor={Colors.themeColor}
              title={t('otpverify.verify')}
              onPress={() => {
                btnVerifyOtp();
                Keyboard.dismiss();
              }}
              isLoading={otpVerifyLoader}
            />
          </View>
        </AuthBottomContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default OtpVerifyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgwhite,
  },
  scropllViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 0,
  },
  subtitile: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'center',
    marginTop: SH(20),
    marginBottom: SH(30),
    lineHeight: SH(22),
  },
  heading: {
    color: Colors.textWhite,
    fontFamily: Fonts.BOLD,
    fontSize: SF(20),
    textAlign: 'center',
  },
  burronContainer: { backgroundColor: Colors.bgwhite, marginTop: SH(180) },
  bottomInnerContainer: {
    paddingVertical: SH(35),
    paddingHorizontal: SW(20),
    height: '100%',
  },
  textInputContainer: {
    height: SH(45),
    width: SW(65),
    borderWidth: 1,
    borderRadius: SW(10),
    borderBottomWidth: 1.2,
    fontSize: SF(14),
    color: Colors.white,
    backgroundColor: 'transparent',
  },
  resteTextCont: {
    paddingRight: 7,
    alignItems: 'flex-end',
  },
  resteText: {
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'right',
    marginTop: 8,
    color: Colors.textWhite
  },
  activeIndigator: { marginTop: 8 },
});
