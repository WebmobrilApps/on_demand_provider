import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Fonts, SF, SH, SW, Colors, imagePaths } from '../../utils';
import { AppHeader, AppText, Buttons, Container } from '../../component';
import RouteName from '../../navigation/RouteName';
import { Dropdown } from 'react-native-element-dropdown';
import { navigate } from '../../utils/NavigationService';

type Item = {
    label: string;
    value: string;
    index: number;
    price: number | string;
};

const rawData = [
    { label: 'Owner only', value: '1', price: '2000' },
    { label: 'Owner + 2 staff Members', value: '2', price: '2500' },
    { label: 'Owner + 4 staff Members', value: '3', price: '3000' },
    { label: 'Owner + 6 staff Members', value: '4', price: '3500' },
    { label: 'Owner + 8 staff Members', value: '5', price: '4000' },
];

const data: Item[] = rawData.map((item, index) => ({ ...item, index }));

const SubscriptionManage: React.FC = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const [value, setValue] = useState<Item>({ label: 'Owner only', value: '1', price: '2000', index: 1 });

    const renderItem = (item: Item) => {
        const isLastItem = item.index === data.length - 1;
        return (
            <View style={[styles.item, !isLastItem && styles.itemBorder]}>
                <AppText style={styles.textItem}>{item.label}</AppText>
            </View>
        );
    };

    return (
        <Container statusBarColor={Colors.white} style={styles.container}>
            <View style={styles.innerContainer}>
                <AppHeader
                    headerTitle={'Choose Your Plan'}
                    onPress={() => navigation.canGoBack() && navigation.goBack()}
                    Iconname="arrowleft"
                    headerStyle={styles.headerStyle}
                    titleStyle={styles.headerTitle}
                />
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    containerStyle={styles.dropdownContainer}
                    data={data}
                    iconColor={Colors.themeColor}
                    renderRightIcon={() => (
                        <Image source={imagePaths.down_icon} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                    )}
                    labelField="label"
                    valueField="value"
                    placeholder={'Select item'}
                    value={value}
                    renderItem={renderItem}
                    onChange={(item: Item) => {
                        setValue(item);
                    }}
                />
            </View>
            <View style={styles.bottomContainer}>
                <AppText style={styles.totalLabel}>Total</AppText>
                <AppText style={styles.totalValue}>$ {value.price}/ mo</AppText>
                <Buttons title="Subscribe" onPress={() => { navigate(RouteName.HOME) }} />
                {/* <AppText onPress={() => { navigate(RouteName.HOME) }} style={styles.skipText}>Skip</AppText> */}
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SW(25),
        flex: 1,
        justifyContent: 'space-between',
    },
    innerContainer: {
        flex: 1,
    },
    headerStyle: {
        backgroundColor: Colors.bgwhite,
        marginTop: 10,
    },
    headerTitle: {
        color: Colors.textHeader,
        fontSize: SF(18),
    },
    dropdown: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 0,
        borderRadius: 8,
        paddingHorizontal: SW(20),
        backgroundColor: Colors.themelight,
        marginTop: 20,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#aaa',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#000',
    },
    itemTextStyle: {
        fontSize: 14,
    },
    itemContainerStyle: {
        backgroundColor: '#EEF6F9',
    },
    dropdownContainer: {
        backgroundColor: '#EEF6F9',
        paddingHorizontal: SW(20),
        borderRadius: SW(10),
        marginTop: SH(10),
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: SF(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.textAppColor,
    },
    itemBorder: {
        borderBottomWidth: 1,
        borderColor: '#378CA450',
    },
    bottomContainer: {
        alignItems: 'center',
        paddingBottom: 15
    },
    totalLabel: {
        fontSize: SF(14),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
    },
    totalValue: {
        fontSize: SF(16),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
        marginBottom: 20,
    },
    skipText: {
        fontSize: SF(14),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.themeColor,
        marginTop: 20,
    },
});

export default SubscriptionManage;
