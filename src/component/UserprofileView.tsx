import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageLoader from './ImageLoader'; // adjust import path as needed
import VectoreIcons from './VectoreIcons'; // adjust import path as needed
import { Colors, Fonts, SF, SH, SW } from '../utils';
import imagePaths from '../assets/images';
import AppText from './AppText';

const UserprofileView = ({ title = '', imageSource = imagePaths.user0,height=SF(50),width=SF(50)  }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imgContainer,{height,width,borderRadius:height/2}]}>
        <ImageLoader
          source={imageSource}
          resizeMode="cover"
          mainImageStyle={styles.img}
        />
      </View>
      {title && <AppText numberOfLines={2} style={styles.serviceTitle}>
        {title}
      </AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: SW(80),
  },
  imgContainer: {
    height: SW(50),
    width: SW(50),
    borderRadius: SW(25),
    overflow: "hidden"
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: SW(25),
  },
  serviceTitle: {
    fontSize: SF(9),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textHeader,
  },
  tickIcon: { position: "absolute", top: -8, right: 16 }
});

export default UserprofileView;
