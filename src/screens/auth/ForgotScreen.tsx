import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, Fonts, regex, SF, SH, SW } from '../../utils';
import {
  AppText,
  AuthBottomContainer,
  AuthImgComp,
  Container,
  InputField,

  Spacing,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import imagePaths from '../../assets/images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import RouteName from '../../navigation/RouteName';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

type ForgotProps = {};

const ForgotScreen: React.FC<ForgotProps> = ({ }) => {

  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(regex.EMAIL_REGEX_WITH_EMPTY, t('validation.validEmail'))
      .required(t('validation.emptyEmail')),
  });

  const btnForgot = async (values: { email: string }, resetForm: any) => {
    navigation.navigate(RouteName.OTP_VERIFY, { fromScreen: 'forgotpass', userToken: 'response.ResponseBody.token', email: 'email@mailinator.com' });
    return
    let userData = {
      email: values.email,
    };
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
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 0 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />
        <AuthImgComp icon={imagePaths.forgot_img} />
        <AuthBottomContainer>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              btnForgot(values, resetForm);
            }}>
            {({
              handleChange,
              setFieldValue,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.bottomInnerContainer}>
                <View>
                  <AppText style={styles.heading}>{t('forgotpass.forgotPassword')}</AppText>
                  <AppText style={styles.subtitile}>
                    {t('forgotpass.subtitle')}
                  </AppText>
                  <InputField
                    placeholder={t('placeholders.email')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldValue('email', values.email.trim())}
                    leftIcon={imagePaths.email_icon}
                    errorMessage={touched.email && errors.email && errors.email ? errors.email : ''}
                    keyboardType={'email-address'}
                  />
                </View>

                <Buttons
                  buttonStyle={styles.brnContainer}
                  textColor={Colors.themeColor}
                  title={t('forgotpass.sendotp')}
                  onPress={() => {
                    handleSubmit();
                    Keyboard.dismiss();
                  }}
                  // isLoading={otpLoader}
                />
              </View>
            )}
          </Formik>
        </AuthBottomContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgwhite,
  },
  brnContainer: { backgroundColor: Colors.bgwhite, marginTop: SH(200) },
  subtitile: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'center',
    margin: SH(20),
    marginBottom: SH(30),
  },
  heading: {
    color: Colors.textWhite,
    fontFamily: Fonts.BOLD,
    fontSize: SF(20),
    textAlign: 'center',
  },
  bottomInnerContainer: {
    paddingVertical: SH(35),
    paddingHorizontal: SW(20),
    height: '100%',
  },
});
