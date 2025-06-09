import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { Fonts, imagePaths, SH, SW, Colors, } from '../../../utils';

type MarketingPrommotionListCopyBarProps = {
    item?: any
}
export const CopyBar = () => {
    return <View style={styles.referralContainer}>
        <Text style={styles.referralText}>
            Referral Code: <Text style={styles.summaryBold}>SHARE50</Text>
        </Text>
        <Image source={imagePaths.copy_icon} style={styles.copyIcon} />
    </View>
}
const MarketingPrommotionListCopyBar: React.FC<MarketingPrommotionListCopyBarProps> = ({ item }) => {
    return (
        <View style={styles.summaryCard}>
            <Text style={styles.summaryText}>
                Total Active Promotions: <Text style={styles.summaryBold}>3</Text>
            </Text>
            <Text style={styles.summaryText}>
                Total Discount Given: <Text style={styles.summaryBold}>₹10,000</Text>
            </Text>
            <CopyBar />
        </View>
    );
};



const styles = StyleSheet.create({
    summaryCard: {
        backgroundColor: Colors.themelight,
        padding: SH(20),
        marginHorizontal: SW(20),
        marginTop: SH(10),
    },
    summaryText: {
        fontSize: SH(14),
        fontFamily: Fonts.REGULAR,
        color: Colors.black,
        marginTop: SH(10),
    },
    summaryBold: {
        fontFamily: Fonts.SEMI_BOLD,
    },
    referralContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SH(10),
        width: '100%',
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        borderRadius: SW(7),
        marginTop: SH(20),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    referralText: {
        fontSize: SH(14),
        fontFamily: Fonts.REGULAR,
        color: Colors.black,
    },
    copyIcon: {
        width: SW(25),
        height: SW(25),
        marginLeft: SW(10),
    },
});

export default MarketingPrommotionListCopyBar;
