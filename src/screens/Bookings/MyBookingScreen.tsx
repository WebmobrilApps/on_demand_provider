import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Colors, SH, SW, SF, bookingData, useDisableGestures } from '../../utils';
import { AppHeader, BottomBar, Container, Spacing } from '../../component';
import { useNavigation } from '@react-navigation/native';
import { TabTop } from './component';
import { BookingItem } from '../Home/component';
import RouteName from '../../navigation/RouteName';


const MyBookingScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTabs] = useState<number>(1);
  useDisableGestures();
  return (
    <Container statusBarColor={Colors.white}>
      <AppHeader
        headerTitle='Bookings'
        onPress={() => { }}
        Iconname=''
        headerStyle={styles.headerStyle}
        titleStyle={styles.headerTitleStyle}
      />
      <View style={styles.tabView}>
        <TabTop activeTab={activeTab} changeTab={(val) => setActiveTabs(val)} />
        <Spacing space={SF(15)} />
        <FlatList
          data={bookingData}
          renderItem={({ item }) => (
            <BookingItem
              image={item.image}
              name={item.name}
              job={item.job}
              location={item.location}
              date={item.date}
              id={item.id}
              showButtons={activeTab != 2}
              onCallPress={() => console.log(`Call pressed for booking #${item.id}`)}
              onChatPress={() => console.log(`Chat pressed for booking #${item.id}`)}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomBar
        activeTab={RouteName.MY_BOOKING}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.bgwhite,
    marginBottom: SH(10),
    marginHorizontal: 10,
  },
  headerTitleStyle: {
    color: Colors.textHeader,
    fontSize: SF(18),
  },

  tabView: { paddingHorizontal: SW(20), marginBottom: SH(30) }
});

export default MyBookingScreen;