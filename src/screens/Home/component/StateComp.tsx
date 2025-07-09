import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


import imagePaths from "../../../assets/images";
import { Colors, Fonts, SF, SH, SW } from "../../../utils";
import { AppText } from "../../../component";

interface StatItemProps {
    number: string;
    label: string;
    icon?: any;
}

const StatItem: FC<StatItemProps> = ({ number, label, icon }) => (
    <View style={styles.statItem}>
        <View style={styles.statHeader}>
            <AppText style={styles.statNumber}>{number}</AppText>
            <Image style={styles.icon} source={icon} />
        </View>
        <AppText style={styles.statLabel}>{label}</AppText>
    </View>
);

const StatsComponent: FC = () => {
    return (
        <View style={styles.stats}>
            <StatItem
                number="40"
                label="Total Booking"
                icon={imagePaths.totalbooking}
            />
            <StatItem number="22" label="Total Service" icon={imagePaths.totalservices} />
            <StatItem number="$40" label="Total Earning" icon={imagePaths.totalearning} />
        </View>
    );
};

export default StatsComponent;

const styles = StyleSheet.create({
    stats: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: SH(15),
    },
    statItem: {
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingVertical: SF(15),
        borderRadius: SF(10),
        width: "32%",
        borderWidth: 1,
        borderColor: Colors.borderColor2 + 50
    },
    statNumber: {
        fontSize: SF(20),
        fontFamily: Fonts.REGULAR,
        color: Colors.themeColor
    },
    statLabel: {
        fontSize: SF(12),
        color: "#6C757D",
        fontFamily: Fonts.MEDIUM
    },
    icon: {
        height: SF(24),
        width: SF(25),
    },
    statHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SH(8),
        width: "100%",
        paddingHorizontal: SW(14),
    },
});