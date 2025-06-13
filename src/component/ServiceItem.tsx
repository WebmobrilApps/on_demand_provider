import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Colors, SH, SW, Fonts, SF, boxShadowlight } from '../utils';
import imagePaths from '../assets/images';
import { AppText, VectoreIcons } from '../component';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../navigation/RouteName';

// Define Enum for List Types
enum ListType {
    CATEGORY = 'category',
    NEAR_BY = 'near_by',
    RECOMMENDED = 'recommended',
}

interface ServiceItemProps {
    id: number | string;
    name: string;
    image: any;
    location?: string;
    price: number;
    withEditButton?: boolean;
}

const screenWidth = Dimensions.get("window").width;

const ServiceItem: React.FC<ServiceItemProps> = ({ image, name, withEditButton = false }) => {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate(RouteName.SERVICE_DETAILS)}}>
            {withEditButton && (
                <TouchableOpacity style={styles.editButton}>
                    <VectoreIcons
                        icon='Octicons'
                        name='pencil'
                        size={SF(14)}
                        color={Colors.themeColor}
                    />
                </TouchableOpacity>
            )}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.textContainer}>
                <AppText style={styles.name}>{name}</AppText>
                <AppText style={styles.nearbyadd}>Chestnut StreetRome, NY</AppText>
                <AppText style={styles.servicePrice}>
                    $80{' '}
                    <AppText style={styles.perHourText}>
                        Per hr.
                    </AppText>
                </AppText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.themelight,
        borderRadius: SW(10),
        paddingBottom: SH(10),
        shadowColor: '#000',
        width: screenWidth / 2 - SW(30), // Adjust for padding
    },
    editButton: {
        height: SF(26),
        width: SF(26),
        borderRadius: SF(13),
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 999999,
        right: 6,
        top: 6,
    },
    imageContainer: {
        borderRadius: SF(10),
        height: SH(119),
        width: "100%",
        overflow: "hidden",
        ...boxShadowlight,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: SW(10),
    },
    textContainer: {
        paddingHorizontal: SW(10),
    },
    text: {
        marginTop: SH(10),
        fontSize: SH(14),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
    },
    name: {
        marginTop: SH(7),
        fontSize: SH(12),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
    },
    servicePrice: {
        marginTop: SH(6),
        fontSize: SF(14),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
    },
    nearbyadd: {
        marginTop: SH(2),
        fontSize: SF(8),
        fontFamily: Fonts.MEDIUM,
        color: Colors.addressColor,
    },
    perHourText: {
        fontSize: SF(10),
        fontFamily: Fonts.REGULAR,
        color: Colors.addressColor,
    },
    listContainer: {
        padding: SH(20),
    },
});

export default ServiceItem;