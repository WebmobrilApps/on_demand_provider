import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppText, UserprofileView } from "../../../component";
import imagePaths from "../../../assets/images";
import { Colors, Fonts, SF, SH, SW } from "../../../utils";
import RouteName from "../../../navigation/RouteName";
import { navigate } from "../../../utils/NavigationService";
import { useNavigation } from "@react-navigation/native";

interface HomeHeaderProps {
    data?: any
}

const HomeHeader: FC<HomeHeaderProps> = ({ data }) => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <UserprofileView imageSource={imagePaths.user4} />
                <View style={styles.userInfo}>
                    <AppText style={styles.userName}>Marie Rogahn</AppText>
                    <AppText style={styles.userEmail}>Service provider</AppText>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        // onPress={() =>  navigate(RouteName.BOOK_APPOINT, { bookingType: 'immediate' })} 
                        style={styles.iconButton}>
                        <Image source={imagePaths.calender_icon} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => {
                            navigation.navigate(RouteName.NOTIFICATION)
                        }}
                    >
                        <Image source={imagePaths.notification_icon} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.themelight,
        paddingVertical: SH(10),
        paddingHorizontal: SF(25),
        justifyContent: "space-between"
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userInfo: {
        flex: 1,
        marginLeft: SW(12)
    },
    userName: {
        color: Colors.textAppColor,
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: SF(16)
    },
    userEmail: {
        color: Colors.textAppColor,
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(12),
        marginTop: 1.5
    },
    iconContainer: {
        flexDirection: 'row'
    },
    iconButton: {
        paddingHorizontal: SW(5)
    },
    icon: {
        height: SF(27),
        width: SF(27),
        tintColor: Colors.themeColor,
        resizeMode: 'contain'
    }
});