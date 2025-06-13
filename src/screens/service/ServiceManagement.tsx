import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { boxShadowlight, Fonts, imagePaths, SF, SH, SW,Colors } from '../../utils';
import { AppHeader, AppText, Container } from '../../component';
import RouteName from '../../navigation/RouteName';

// Enums & Interfaces
enum ListType {
    CATEGORY = 'category',
    NEAR_BY = 'near_by',
    RECOMMENDED = 'recommended',
}

interface CategoryItem {
    id: number | string;
    name: string;
    image: any;
}

interface NearByItem extends CategoryItem {
    rating: number;
    ratingCount: number;
    location: string;
    price: number;
}

// Sample Data
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
        id: 4,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
    {
        image: imagePaths.electrical,
        name: 'Electrical',
        id: 5,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
    {
        image: imagePaths.plumb_img,
        name: 'Plumbing',
        id: 8,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
];

const ServiceManagement: React.FC = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const renderItem = ({ item }: { item: NearByItem }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.SERVICE_DETAILS)} style={[styles.itemNearByContainer, boxShadowlight]}>
                <TouchableOpacity style={styles.editButton}>
                    <Image source={imagePaths.edit_pencil} style={styles.editIcon} />
                </TouchableOpacity>
                <Image source={item.image} style={styles.image} resizeMode="cover" />
                <View style={styles.itemContent}>
                    <AppText style={styles.nearServiceName}>{item.name}</AppText>
                    <AppText style={styles.nearbyAdd}>Ikeja, Nigeria</AppText>
                    <AppText style={styles.servicePrice}>
                        ${item.price}{' '}
                        <AppText style={styles.perHourText}>
                            Per hr.
                        </AppText>
                    </AppText>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Container statusBarColor={Colors.white}>
            <AppHeader
                headerTitle={'Service Management'}
                onPress={() => navigation.canGoBack() && navigation.goBack()}
                Iconname="arrowleft"
                rightIcon={true}
                rightOnPress={() => navigation.navigate(RouteName.SERVICE_SETUP, { prevPage: 'service_manage' })}
                headerStyle={styles.headerStyle}
                titleStyle={styles.headerTitle}
            />
            <View style={styles.topSpacing} />
            <FlatList
                data={nearByData}
                renderItem={renderItem}
                keyExtractor={item => 'ServiceManagement' + item.id.toString() + 'service'}
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
    itemContent: {
        paddingHorizontal: SW(10),
    },
    editButton: {
        position: 'absolute',
        top: SW(8),
        right: SW(8),
        zIndex: 9999,
        backgroundColor: Colors.white,
        borderRadius: SW(20),
        padding: SW(5),
    },
    editIcon: {
        width: SW(20),
        height: SW(20),
    },
    nearServiceName: {
        marginTop: SH(7),
        fontSize: SH(14),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
    },
    nearbyAdd: {
        fontSize: SH(10),
        fontFamily: Fonts.REGULAR,
        color: Colors.addressColor,
    },
    servicePrice: {
        marginTop: SH(5),
        fontSize: SH(16),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
    },
    perHourText: {
        fontSize: SH(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.addressColor,
    },
    headerStyle: {
        backgroundColor: Colors.bgwhite,
    },
    headerTitle: {
        color: Colors.textHeader,
        fontSize: SF(18),
    },
    topSpacing: {
        alignSelf: 'center',
        marginHorizontal: SW(20),
        marginTop: SH(5),
    },
});

export default ServiceManagement;
