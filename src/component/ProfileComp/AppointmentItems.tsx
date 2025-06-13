import React from 'react';
import { Pressable, StyleSheet, Text, View, Keyboard } from 'react-native';
import { Colors, Fonts, SF, SH, SW, boxShadow, commonStyles } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import { AppText, Buttons, ImageLoader } from '..';

type Props = {
  item: any;
};

const AppointmentItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => navigation.navigate(RouteName.BOOK_DETAILS)}
      style={styles.serviceContainer}
    >
      <View style={styles.row}>
        <View style={[styles.imageWrapper, boxShadow]}>
          <ImageLoader source={{ uri: item.image }} resizeMode="cover" mainImageStyle={styles.logo} />
        </View>
        <View style={styles.infoContainer}>
          <AppText style={styles.text}>
            Haircut + Beard{' '}
            <AppText style={styles.subText}>With Juana</AppText>
          </AppText>
          <AppText style={styles.dateTime}>{`06-March-2025 \n8:00 am - 8:30 am`}</AppText>
          <AppText style={styles.dateTime}>WM Barbershop</AppText>
          <AppText style={styles.dateTime}>1893 Cheshire Bridge Rd Ne, 30325</AppText>
          <View style={styles.footer}>
            <AppText  allowFontScaling={false} style={styles.price}>$1893</AppText>
            <Buttons
              buttonStyle={styles.bookAgain}
              textColor={Colors.textWhite}
              buttonTextStyle={styles.bookAgainText}
              title={'Book Again'}
              onPress={Keyboard.dismiss}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default AppointmentItem;

const styles = StyleSheet.create({
  serviceContainer: {
    marginHorizontal: SW(25),
    backgroundColor: Colors.themelight,
    borderRadius: SF(10),
    padding: SW(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: SF(82),
    height: SF(113),
    borderRadius: SF(10) / 2,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: SF(10),
  },
  text: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    maxWidth: '80%',
  },
  subText: {
    color: Colors.lightGraytext,
  },
  dateTime: {
    color: Colors.lightGraytext,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(8),
    maxWidth: '80%',
    marginTop: SH(3),
  },
  footer: {
    ...commonStyles.rowSpaceBetweenCss,
    marginTop: SF(7),
  },
  price: {
    color: Colors.themeColor,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(16),
    maxWidth: '80%',
    marginTop: SH(3),
  },
  bookAgain: {
    backgroundColor: Colors.themeColor,
    height: SF(22),
    width: SW(75),
    alignSelf: 'flex-end',
    borderRadius: SF(6),
  },
  bookAgainText: {
    fontSize: SF(10),
    fontFamily: Fonts.SEMI_BOLD,
  },
});
