import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
import Svg from 'react-native-svg';
import {
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { AppHeader, Buttons, Container, DropdownComponent, PaymentHistoryItem, Spacing, VectoreIcons } from '../../component';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';

const { width } = Dimensions.get('window');
const paymentData = [
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$29', status: 'Completed', id: 1 },
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 2 },
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 3 },
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 4 },
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 5 },
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 6 },
  { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 6 },
];
const PaymentHistorySearch: React.FC = () => {
  const navigation = useNavigation<any>();
  const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Container style={styles.container}>
      <AppHeader
        headerTitle="Search Transaction"
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => { }}
        headerStyle={styles.header}
      />

      <View style={{
        flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.bgwhite,
        paddingHorizontal: SW(15),
        borderRadius: 5,
        marginTop: SH(10),
        marginBottom: SH(20),


      }}>
        <TextInput
          allowFontScaling={false}
          style={[{
            fontSize: SF(14),
            height: SH(40),
            width: '80%',
          }]}
          placeholder="Search"

        />
        <VectoreIcons
          name="search"
          icon='Feather'
          size={SF(14)}
          color={Colors.themeColor}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        data={paymentData}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <PaymentHistoryItem item={item} onClick={() => { navigation.navigate(RouteName.PAY_INVOICE) }} />}
        keyExtractor={(item, index) => item.name + index}
        removeClippedSubviews={false}
      />


    </Container>
  );
};

export default PaymentHistorySearch;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(10),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SW(30),
  },

  flatListContent: {
    paddingBottom: SH(30),
  },
  separator: {
    height: SH(15),
  },
});
