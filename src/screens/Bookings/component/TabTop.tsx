import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { AppText } from '../../../component';


type TabTopProps = {
    activeTab: number;
    changeTab:(val:number)=>void;
};
const TabTop: React.FC<TabTopProps> = ({ activeTab,changeTab }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{changeTab(1)}}  style={activeTab == 1 ? styles.tabac : styles.tab}>
                <AppText style={activeTab == 1 ? styles.textac : styles.text}>Upcoming</AppText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{changeTab(2)}} style={activeTab == 2 ? styles.tabac : styles.tab}>
                <AppText style={activeTab == 2 ? styles.textac : styles.text}>Ongoing</AppText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{changeTab(3)}} style={activeTab == 3 ? styles.tabac : styles.tab}>
                <AppText style={activeTab == 3 ? styles.textac : styles.text}>Completed</AppText>
            </TouchableOpacity>
        </View>
    );
};

export default TabTop;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgwhite,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Colors.themeColor,
        borderRadius: SW(10)
    },
    text: {
        fontFamily: Fonts.MEDIUM, 
        color: Colors.themeColor, 
        fontSize: SF(12)
    },
    textac: {
        fontFamily: Fonts.MEDIUM, 
        color: Colors.white, 
        fontSize: SF(12)
    },
    tab: { 
        borderRadius: SW(10), 
        backgroundColor: Colors.white, 
        width: '33.33%', 
        alignItems: 'center', 
        paddingVertical: SH(12) 
    },
    tabac: { 
        borderRadius: SW(10), 
        backgroundColor: Colors.themeColor, 
        width: '33.33%', 
        alignItems: 'center',
        borderWidth:1,
        borderColor:Colors.themeColor,
        paddingVertical: SH(12) 
    }
});
