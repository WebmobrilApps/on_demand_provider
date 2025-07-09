import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppText, Buttons, ImageLoader } from '../../../component';
import { Fonts, imagePaths, SF, SH, SW, Colors, boxShadow } from '../../../utils';

type MarketingPrommotionListItemProps = {
    type?: string;
    text1?: string;
    text2?: string;
    text3?: string;
}

const MarketingPrommotionListItem: React.FC<MarketingPrommotionListItemProps> = ({ type = 'maketing', text1 = '', text2 = '', text3 = '' }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => { }} style={styles.itemWrapper}>
            <View style={styles.itemContainer}>
                <View style={[styles.leftContainer, boxShadow]}>
                    <ImageLoader
                        source={imagePaths.makup1}
                        resizeMode="cover"
                        mainImageStyle={styles.leftImage}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <AppText style={styles.text}>{text1}</AppText>
                    <AppText style={styles.text2}>{text2}</AppText>
                    <AppText style={styles.text3}>{text3}</AppText>
                </View>
            </View>

            <TouchableOpacity style={styles.sirenIcon}>
                <Image source={imagePaths.siren} style={styles.sirenImage} />
            </TouchableOpacity>
            {
                type === 'maketing' && <View style={styles.validityContainer}>
                    <View style={styles.validityHeader}>
                        <AppText style={styles.validityText}>
                            Validity: 10 Feb - 20 Feb 2025
                        </AppText>
                        <View style={styles.iconGroup}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Image style={styles.iconImage} source={imagePaths.Edit_gray} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Image style={styles.iconImage} source={imagePaths.Delete_gray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <AppText style={styles.statusText}>
                        Status: <AppText style={styles.activeStatus}>Active</AppText>
                    </AppText>
                </View>
            }
            {
                type === 'onsite' && <Buttons
                    title='Paid'
                    buttonStyle={{ width: '96%',alignSelf:'center', marginTop: SH(20),height:SH(40) }}
                />
            }
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    itemWrapper: {
        backgroundColor: Colors.themelight,
        paddingHorizontal: SW(10),
        borderRadius: SF(10),
        paddingVertical: SH(15),
        marginVertical: SH(5),
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        width: SF(107),
        height: SF(80),
        overflow: 'hidden',
        borderRadius: SF(15),
    },
    leftImage: {
        width: '100%',
        height: '100%',
    },
    textWrapper: {
        marginLeft: SF(10),
        width: '60%',
    },
    text: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: SF(16),
        color: Colors.textAppColor,
    },
    text2: {
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(12),
        color: Colors.textAppColor,
        marginTop: SH(4),
    },
    text3: {
        fontFamily: Fonts.SEMI_BOLD,
        fontSize: SF(16),
        color: Colors.themeColor,
        marginTop: SH(4),
    },
    sirenIcon: {
        padding: 6,
        position: 'absolute',
        zIndex: 99,
        right: 10,
        top: 10,
    },
    sirenImage: {
        width: SW(12),
        height: SW(12),
    },
    validityContainer: {
        backgroundColor: Colors.bgwhite,
        width: '94%',
        alignSelf: 'center',
        marginTop: SH(25),
        padding: SH(10),
        borderRadius: SW(10),
        paddingVertical: SH(15),
        paddingHorizontal: SW(15),
    },
    validityHeader: {
        borderRadius: SW(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    validityText: {
        fontSize: SH(14),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SW(10),
    },
    iconButton: {
        height: SF(25),
        width: SF(25),
        paddingVertical: 5,
    },
    iconImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    statusText: {
        fontSize: SH(14),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
        marginTop: 10,
    },
    activeStatus: {
        fontFamily: Fonts.SEMI_BOLD,
        color: '#37A468',
    },
});

export default MarketingPrommotionListItem;
