import React from "react";
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
} from "react-native";
import { Colors, SF } from "../../../utils";
import { AppText } from "../../../component";

type labelBarProps = {
    label: string;
    icon: ImageSourcePropType;
    onClick: () => void;
};

function LabelBar({ label, icon, onClick }: labelBarProps) {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <AppText style={styles.labelText}>{label}</AppText>
            <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
    );
}

export default LabelBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Platform.OS === "ios" ? SF(13.6) : SF(11.6),
        justifyContent: 'space-between',
        paddingLeft: SF(20),
        paddingRight: SF(11),
        backgroundColor: Colors.bgwhite,
        borderRadius: SF(10),
    },
    labelText: {
        color: Colors.textAppColor,
        fontSize: SF(14.5),
    },
    icon: {
        height: 12,
        width: 14,
        resizeMode: 'contain',
    },
});
