import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, regex, SF, SH, SW } from '../../utils';
import {
  AppText,
  AuthBottomContainer,
  AuthImgComp,
  Container,
  // CustomToast,
  InputField,
  InputIcons,
  Spacing,
} from '../../component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../component/Input';
import imagePaths from '../../assets/images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../../component/Button';
import RouteName from '../../navigation/RouteName';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

type PasswordUpdateProps = {};

const PasswordUpdateScreen: React.FC<PasswordUpdateProps> = ({ }) => {
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [cpasswordVisibility, setcpasswordVisibility] = useState(true);
  const { t } = useTranslation();
  const navigation = useNavigation<any>();

  const route = useRoute<any>();
  const token = route?.params?.userToken;

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .matches(regex.PASSWORD, t('validation.passValid'))
      .required(t('validation.emptyPassword')),
    cpassword: Yup.string()
      .required(t('validation.emptyConfirmPassword'))
      .oneOf([Yup.ref('password')], t('validation.notMatchConfirmPassword')),
  });




  const btnUpdatePassword = async (values: { password: string; cpassword: string }, resetForm: any) => {
    navigation.navigate(RouteName.LOGIN);
    return false
    let data = {
      data: {
        password: values.password,
      },
      token
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
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 0 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={SH(40)}>
        <Spacing space={SH(40)} />
        <AuthImgComp icon={imagePaths.pass_update_img} />
        <AuthBottomContainer>
          <Formik
            initialValues={{ password: '', cpassword: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              btnUpdatePassword(values, resetForm);
            }}>
            {({
              handleChange,
              setFieldTouched,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.bottomInnerContainer}>
                <View>
                  <AppText style={styles.heading}>{t('updatepass.title')}</AppText>
                  <AppText style={styles.subtitile}>
                    {t('updatepass.subtitle')}
                  </AppText>
                  <InputField
                    placeholder={t('placeholders.password')}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldValue('password', values.password.trim())}
                    leftIcon={imagePaths.lock_icon}
                    errorMessage={touched.password && errors.password && errors.password ? errors.password : ''}
                    rightIcon={!passwordVisibility ? imagePaths.eye_open : imagePaths.eye_off_icon}
                    onRightIconPress={() => setpasswordVisibility(!passwordVisibility)}
                    secureTextEntry={passwordVisibility}
                    keyboardType={'visible-password'}
                  />

                  <InputField
                    placeholder={t('placeholders.confirmPassword')}
                    value={values.cpassword}
                    onChangeText={handleChange('cpassword')}
                    onBlur={() => setFieldValue('cpassword', values.cpassword.trim())}
                    leftIcon={imagePaths.lock_icon}
                    errorMessage={touched.cpassword && errors.cpassword && errors.cpassword ? errors.cpassword : ''}
                    rightIcon={!cpasswordVisibility ? imagePaths.eye_open : imagePaths.eye_off_icon}
                    onRightIconPress={() => setcpasswordVisibility(!cpasswordVisibility)}
                    secureTextEntry={cpasswordVisibility}
                    keyboardType={'visible-password'}
                  />
                </View>
                <Buttons
                  buttonStyle={styles.buttonContainer}
                  textColor={Colors.themeColor}
                  title={t('updatepass.update')}
                  onPress={() => {
                    handleSubmit();
                    Keyboard.dismiss();
                  }}
                  // isLoading={isLoading}
                />
              </View>
            )}
          </Formik>
        </AuthBottomContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default PasswordUpdateScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgwhite,
  },
  subtitile: {
    color: Colors.textWhite,
    fontFamily: Fonts.REGULAR,
    fontSize: SF(14),
    textAlign: 'center',
    margin: SH(20),
    marginBottom: SH(30),
    lineHeight: SH(22),
  },
  heading: {
    color: Colors.textWhite,
    fontFamily: Fonts.BOLD,
    fontSize: SF(20),
    textAlign: 'center',
  },
  buttonContainer: { backgroundColor: Colors.bgwhite, marginTop: SH(160) },
  bottomInnerContainer: {
    paddingVertical: SH(35),
    paddingHorizontal: SW(20),
    height: '100%',
  },
});
