import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AppHeader,
  Container,
  ImageLoader,
  Buttons,
  InputField
} from '../../component';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import imagePaths from '../../assets/images';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RouteName from '../../navigation/RouteName';

type ProfileSetupProps = {};



const ProfileSetup: React.FC<ProfileSetupProps> = ({ }) => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();

  const [bussinessName, setBussinessName] = useState('')
  const [serviceArea, setServiceArea] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Container isPadding={false}>
      <AppHeader
        headerTitle={t('profile.profileSetup')}
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        headerStyle={styles.header}
      />

      <KeyboardAwareScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.userConImage}>
              <ImageLoader
                source={imagePaths.user_img}
                resizeMode="cover"
                mainImageStyle={styles.userImage}
              />
            </View>
            <Buttons
              buttonStyle={styles.uploadButton}
              textColor={Colors.textWhite}
              buttonTextStyle={styles.uploadTxt}
              title={'Upload'}
              onPress={() => Keyboard.dismiss()}
            />
          </View>

          <View style={styles.imagePickerBox}>
            <Image
              source={imagePaths.empty_image}
              resizeMode="cover"
              style={styles.imageIcon}
            />
            <Text style={styles.chooseImageText}>Choose Image</Text>
          </View>
          <Text style={styles.imageSupportText}>Support : JPG , PNG, JPEG</Text>
          <Text style={styles.personalDetailText}>Personal Details</Text>

          <InputField
            label={'Business Name'}
            value={bussinessName}
            onChangeText={setBussinessName}
            errorMessage={''}
            keyboardType="default"
            color={Colors.textAppColor}
            textColor={Colors.textAppColor}
          />

          <InputField
            label={'Service Areas'}
            value={serviceArea}
            onChangeText={setServiceArea}
            errorMessage={''}
            keyboardType="default"
            color={Colors.textAppColor}
            textColor={Colors.textAppColor}
            isDisabled
            rightIcon={imagePaths.location_filled}
          />

          <InputField
            label={'Description'}
            value={description}
            multiline
            onChangeText={setDescription}
            errorMessage={''}
            keyboardType="default"
            color={Colors.textAppColor}
            textColor={Colors.textAppColor}
            inputContainer={styles.descriptionInputContainer}
          />

          <Buttons
            buttonStyle={styles.submitButton}
            textColor={Colors.textWhite}
            title={t('placeholders.save')}
            onPress={() =>{Keyboard.dismiss();navigation.navigate(RouteName.SERVICE_SETUP)}}
          />
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(25),
  },
  container: {
    paddingHorizontal: SW(25),
    paddingVertical: SH(20),
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SH(20),
  },
  userConImage: {
    width: SF(65),
    height: SF(65),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.borderColor,
    borderRadius: SF(62.5),
  },
  userImage: {
    width: SF(60),
    height: SF(60),
    borderRadius: SF(30),
  },
  uploadButton: {
    backgroundColor: Colors.themeColor,
    height: SH(25),
    width: '25%',
    marginTop: SH(10),
    alignSelf: 'center',
    borderRadius: SF(6),
    paddingHorizontal: 5,
  },
  uploadTxt: {
    fontSize: SF(12),
    fontFamily: Fonts.SEMI_BOLD,
  },
  imagePickerBox: {
    height: SH(150),
    width: '100%',
    borderRadius: SF(10),
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  imageIcon: {
    height: SF(34),
    width: SF(34),
  },
  chooseImageText: {
    fontSize: SF(16),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
    marginTop: SH(10),
    textAlign: 'center',
  },
  imageSupportText: {
    fontSize: SF(12),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
    marginTop: SH(10),
    textAlign: 'center',
  },
  personalDetailText: {
    fontSize: SF(16),
    fontFamily: Fonts.SEMI_BOLD,
    color: Colors.textAppColor,
    marginTop: SH(50),
  },
  descriptionInputContainer: {
    height: SH(100),
  },
  submitButton: {
    backgroundColor: Colors.themeColor,
    marginTop: SH(10),
  },
});
