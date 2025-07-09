import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import AppText from '../AppText';


type TabTopCalenderProps = {
    activeTab: number;
    changeTab:(val:number)=>void;
};
const TabTopCalender: React.FC<TabTopCalenderProps> = ({ activeTab,changeTab }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{changeTab(1)}}  style={activeTab == 1 ? styles.tabac : styles.tab}>
                <AppText style={activeTab == 1 ? styles.textac : styles.text}>My Booking</AppText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{changeTab(2)}} style={activeTab == 2 ? styles.tabac : styles.tab}>
                <AppText style={activeTab == 2 ? styles.textac : styles.text}>Other Booking</AppText>
            </TouchableOpacity>
            
        </View>
    );
};

export default TabTopCalender;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgwhite,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: SW(10)
    },
    text: {
        fontFamily: Fonts.MEDIUM, 
        color: Colors.textAppColor, 
        fontSize: SF(12)
    },
    textac: {
        fontFamily: Fonts.MEDIUM, 
        color: Colors.white, 
        fontSize: SF(12)
    },
    tab: { 
        borderRadius: SW(9.5), 
        backgroundColor: Colors.white, 
        width: '50%', 
        alignItems: 'center', 
        paddingVertical: SH(12) ,
        
    },
    tabac: { 
        borderRadius: SW(9.5), 
        backgroundColor: Colors.themeColor, 
        width: '50%', 
        alignItems: 'center',
        borderColor:Colors.themeColor,
        paddingVertical: SH(12) 
    }
});
