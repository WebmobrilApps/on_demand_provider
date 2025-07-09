import React from 'react';
import { StyleSheet, View, FlatList, ScrollView, SafeAreaView, StatusBar, } from 'react-native';
import { bookingData, serviceArr, SF, SH, SW, useDisableGestures } from '../../utils';
import { BottomBar, Buttons, Container, ServiceItem, Spacing, SubHeading } from '../../component';
import imagePaths from '../../assets/images';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BookingItem, HomeHeader, StatsComponent } from './component';
import RouteName from '../../navigation/RouteName';
const seperatorComponent = () => <View style={{ width: 10 }} />;
const HomeScreen = () => {
    const navigation = useNavigation<any>();
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBackgroundColor('#ffffff'); // Black color
            StatusBar.setBarStyle('dark-content'); // Light content for dark background
            return () => {
                StatusBar.setBackgroundColor('#ffffff'); // Black color
                StatusBar.setBarStyle('dark-content'); // Dark content for light background
            };
        }, []),
    );
      useDisableGestures();
    return (
        <Container >
            <>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <HomeHeader />
                    <View style={{ paddingHorizontal: SF(25) }}>
                        <Spacing space={SH(15)} />
                        <StatsComponent />
                        <SubHeading
                            marginHori={0}
                            rightText="View All"
                            leftText="Services"
                            onClick={() => { navigation.navigate(RouteName.SERVICE_MANAG),{title:''} }}
                        />
                        <Spacing space={SH(15)} />
                        <FlatList
                            data={serviceArr}
                            renderItem={({ item, index }) => {
                                return <ServiceItem
                                    name={item.name}
                                    id={item.id.toString() + item.name}
                                    image={item.image}
                                    price={20}
                                />

                            }}
                            ItemSeparatorComponent={seperatorComponent}
                            keyExtractor={item => item.id.toString() + item.name+'serviceArr'}
                            horizontal
                        />
                        <Spacing space={SH(15)} />
                        <SubHeading
                            marginHori={0}
                            rightText=""
                            leftText="Bookings"
                            onClick={() => { }}
                        />
                        <Spacing space={SH(13)} />
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
                                    onCallPress={() => console.log(`Call pressed for booking #${item.id}`)}
                                    onChatPress={() => console.log(`Chat pressed for booking #${item.id}`)}
                                />
                            )}
                            keyExtractor={(item) => item.id+'Bookings'}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <Buttons
                        buttonStyle={styles.buttonViewAll}
                        buttonTextStyle={styles.viewalltext}
                        title="View All"
                    />
                </ScrollView>
                <BottomBar
                    activeTab={RouteName.HOME}
                />
            </>
        </Container>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, paddingBottom: SH(90)
    },
    container: {
        flex: 1,
        paddingVertical: SH(10),
    },
    mHorizontal: {
        paddingHorizontal: '7%',
    },
    row: {
        justifyContent: 'space-between',
    },

    bottomView: {
        width: '100%',
        paddingHorizontal: SW(25),
        borderRadius: SW(10),
    },

    buttonViewAll: { 
        height: SH(30), 
        borderRadius: 5, 
        width: '22%', 
        alignSelf: "center", 
        marginTop: 10 
    },
    viewalltext: { 
        fontSize: SF(12) 
    }
});
