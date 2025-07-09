import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppHeader, AppText, Container, VectoreIcons } from '../../component';
import { Colors, Fonts, imagePaths, SF, SW } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import QRCode from 'react-native-qrcode-svg';

const ShareProfile: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();

  const appUrl = 'https://example.com/install-app'; // Replace with your install URL

  return (
    <Container>
      <AppHeader
        headerTitle={'Share Profile'}
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => {}}
        headerStyle={styles.headerStyle}
      />

      <View style={styles.content}>
        <View style={styles.qrCard}>
          <AppText style={styles.qrTitle}>Profile QR</AppText>

          <QRCode value={appUrl} size={170} color="black" backgroundColor="white" />

          <View style={styles.iconRow}>
            <IconButton icon="MaterialCommunityIcons" name="download" />
            <IconButton icon="Fontisto" name="share-a" size={14} />
          </View>
        </View>

        <RowItem text="kabdbfwrfib74.hdfjbnw.com/sde/" backgroundColor="#F7F7F7" centerText />

        <RowItem
          text="Copy link"
          icon={imagePaths.copy_icon}
          backgroundColor={Colors.themelight}
        />

        <RowItem
          text="Send Link Via SMS"
          icon={imagePaths.email_icon}
          backgroundColor={Colors.themelight}
          tint
          iconSize={20}
        />

        <RowItem
          text="Share Link"
          icon={imagePaths.upload_icon}
          backgroundColor={Colors.themelight}
          tint
        />
      </View>
    </Container>
  );
};

export default ShareProfile;

const IconButton = ({
  icon,
  name,
  size = 25,
}: {
  icon: any;
  name: string;
  size?: number;
}) => (
  <View style={styles.iconButton}>
    <VectoreIcons icon={icon} name={name} size={size} color={Colors.themeColor} />
  </View>
);

const RowItem = ({
  text,
  icon,
  centerText = false,
  backgroundColor,
  tint = false,
  iconSize = 24,
}: {
  text: string;
  icon?: any;
  centerText?: boolean;
  backgroundColor: string;
  tint?: boolean;
  iconSize?: number;
}) => (
  <View style={[styles.rowItem, { backgroundColor, justifyContent: centerText ? 'center' : 'space-between' }]}>
    <AppText style={styles.rowItemText}>{text}</AppText>
    {!centerText && icon && (
      <Image
        source={icon}
        style={[
          styles.rowItemIcon,
          { height: SW(iconSize), width: SW(iconSize), tintColor: tint ? Colors.themeColor : undefined },
        ]}
        resizeMode="contain"
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  headerStyle: {
    paddingHorizontal: 25,
    backgroundColor: Colors.bgwhite,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  qrCard: {
    backgroundColor: '#EEF6F9',
    height: 328,
    alignItems: 'center',
    borderRadius: 10,
    padding: SW(20),
  },
  qrTitle: {
    fontSize: SF(16),
    color: Colors.black,
    fontFamily: Fonts.SEMI_BOLD,
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  iconButton: {
    width: SW(40),
    height: SW(40),
    backgroundColor: Colors.bgwhite,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SW(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowItem: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  rowItemText: {
    fontSize: SF(14),
    color: Colors.themeColor,
    fontFamily: Fonts.MEDIUM,
  },
  rowItemIcon: {
    marginLeft: 10,
  },
});
