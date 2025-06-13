import React from "react";
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    View,
} from "react-native";
import { Colors, Fonts, imagePaths, SF } from "../../../utils";
import { AppText } from "../../../component";

type LabelBarAvailProps = {
    day: string;
    time: string;
    key: number;
    onClick: () => void;
    verticalSpace?: number;
};

function LabelBarAvail({ key, day, time, onClick, verticalSpace }: LabelBarAvailProps) {
    return (
        <TouchableOpacity key={key + 'avail_time'} onPress={onClick} style={[styles.container, { marginVertical: verticalSpace || 0 }]}>
            <AppText style={styles.dayText}>{day}</AppText>
            <View style={{ flexDirection: 'row', alignItems: 'center' ,width: '55%',justifyContent: 'space-between' }}>
                <AppText style={styles.timeText}>{time}</AppText>
                <Image source={imagePaths.right_icon} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
}

export default LabelBarAvail;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Platform.OS === "ios" ? SF(15.6) : SF(15.6),
        justifyContent: 'space-between',
        paddingLeft: SF(22),
        paddingRight: SF(12),
        backgroundColor: Colors.themelight,
        borderRadius: SF(10),
    },
    dayText: {
        color: Colors.textAppColor,
        fontSize: SF(14),
        fontFamily: Fonts.MEDIUM
    },
    timeText: {
        color: Colors.textAppColor,
        fontSize: SF(12),
        fontFamily: Fonts.MEDIUM,
        textAlign: 'left',
    },
    icon: {
        height: 14,
        width: 14,
        resizeMode: 'contain',
        tintColor: Colors.textAppColor,
    },
});
