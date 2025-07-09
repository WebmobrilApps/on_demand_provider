import React from 'react';
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, SH, SW, Fonts, SF, boxShadowlight} from '../utils';
import imagePaths from '../assets/images';
import {AppHeader, AppText, Container} from '../component';
import {useNavigation, useRoute} from '@react-navigation/native';

// Define Enum for List Types
enum ListType {
  CATEGORY = 'category',
  NEAR_BY = 'near_by',
  RECOMMENDED = 'recommended',
}

// Define Item Props for Each List Type
interface CategoryItem {
  id: number | string;
  name: string;
  image: any; // Change type based on actual assets
}

interface NearByItem extends CategoryItem {
  rating: number;
  ratingCount: number;
  location: string;
  price: number;
}

interface RecommendedItem extends CategoryItem {
  rating: number;
}

// Union Type for Different Item Types
type ItemProps = CategoryItem | NearByItem | RecommendedItem;

 

const nearByData: NearByItem[] = [
  {
    
    image: imagePaths.electrical,
    name: 'Electrical',
    id: 3,
    rating: 4.5,
    ratingCount: 450,
    location: 'Ikeja, Nigeria',
    price: 80,
  },
  {
    image: imagePaths.plumb_img,
    name: 'Plumbing',
    id: 3,
    rating: 4.5,
    ratingCount: 450,
    location: 'Ikeja, Nigeria',
    price: 80,
  },
   {
    
    image: imagePaths.electrical,
    name: 'Electrical',
    id: 3,
    rating: 4.5,
    ratingCount: 450,
    location: 'Ikeja, Nigeria',
    price: 80,
  },
  {
    image: imagePaths.plumb_img,
    name: 'Plumbing',
    id: 3,
    rating: 4.5,
    ratingCount: 450,
    location: 'Ikeja, Nigeria',
    price: 80,
  },
];



const TwoColumnList: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {title, type} = route.params;

  const renderItem = ({item}: {item: NearByItem}) => {
      return (
        <View style={[styles.itemNearByContainer,boxShadowlight]}>
          <TouchableOpacity style={{position: 'absolute', top: SW(8), right: SW(8),zIndex:9999,backgroundColor:Colors.white,borderRadius:SW(20),padding:SW(5)}}>
            <Image
            source={imagePaths.edit_pencil}
            style={{width: SW(20), height: SW(20)}}
 
            />
          </TouchableOpacity>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={{paddingHorizontal: SW(10)}}>
            {/* <View style={styles.ratingContainer}>
              <Image
                source={imagePaths.star_filled}
                tintColor={Colors.ratingColor}
                resizeMode="contain"
                style={styles.nearverifiedIcon}
              />
              <AppText style={styles.nearratingtext}>{'4.5'}</AppText>
              <AppText style={styles.nearratingtextcount}>(450)</AppText>
            </View> */}
            <AppText style={styles.nearSearvicename}>{item.name}</AppText>
            <AppText style={styles.nearbyadd}>Ikeja, Nigeria</AppText>
            <AppText style={styles.servicePrice}>
              $80{' '}
              <AppText style={[styles.nearbyadd, {fontSize: SH(12)}]}>
                Per hr.
              </AppText>
            </AppText>
          </View>
        </View>
      );
   
  };

  return (
    <Container statusBarColor={Colors.white}>
      <AppHeader
        headerTitle={title}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
        Iconname="arrowleft"
        rightOnPress={() => {}}
        headerStyle={{backgroundColor:Colors.bgwhite}}
        titleStyle={{color: Colors.textHeader, fontSize: SF(18)}}
      />
      <View
        style={{
          alignSelf: 'center',
          marginHorizontal: SW(20),
          marginTop: SH(5),
        }}>
      </View>
      <FlatList
        data={nearByData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString() + title}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        removeClippedSubviews={false}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: SH(20),
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%', // Adjust to fit within two columns
    alignItems: 'center',
    marginBottom: SH(20),
    backgroundColor: Colors.themelight,
    borderRadius: SW(10),
    paddingBottom: SH(10),
 
  },
  itemNearByContainer: {
    width: '48.8%',
    marginBottom: SH(10),
    backgroundColor: Colors.themelight,
    borderRadius: SW(10),
    paddingBottom: SH(10),
    shadowColor: '#000',
  },
  image: {
    width: '100%',
    height: SW(120),
    borderRadius: SW(10),
  },
  text: {
    marginTop: SH(10),
    fontSize: SH(14),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nearSearvicename: {
    marginTop: SH(7),
    fontSize: SH(14),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
  },
  servicePrice: {
    marginTop: SH(5),
    fontSize: SH(16),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
  },
  nearbyadd: {
    // marginTop: SH(2),
    fontSize: SH(10),
    fontFamily: Fonts.REGULAR,
    color: Colors.addressColor,
  },
  nearratingtext: {
    color: Colors.ratingColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(12),
    marginLeft: 5,
  },
  nearratingtextcount: {
    color: Colors.searchBarPlac,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(12),
    marginLeft: 5,
  },
  nearverifiedIcon: {
    width: SW(14),
    height: SW(14),
    tintColor: Colors.ratingColor,
    marginTop: -2,
  },
  verifiedIcon: {
    width: SW(14),
    height: SW(14),
    marginTop: -2,
  },
  ratingtext: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SH(12),
    marginLeft: 5,
  },
});

export default TwoColumnList;
