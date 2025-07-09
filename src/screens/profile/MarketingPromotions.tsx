import React, { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { imagePaths, SF, SH, SW, Colors, Fonts } from '../../utils';
import { AppHeader, AppText, ButtonComp, Buttons, Container, } from '../../component';
import MarketingPrommotionListItem from './component/MarketingPrommotionListItem';
import MarketingPrommotionListCopyBar from './component/MarketingPrommotionListCopyBar';
import MarketingPrommotionModal from './component/MarketingPrommotionModal';


const nearByData = [
    {
        image: imagePaths.electrical,
        name: 'Electrical',
        id: 3,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
    {
        image: imagePaths.plumb_img,
        name: 'Plumbing',
        id: 4,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
    {
        image: imagePaths.electrical,
        name: 'Electrical',
        id: 5,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
    {
        image: imagePaths.plumb_img,
        name: 'Plumbing',
        id: 8,
        rating: 4.5,
        ratingCount: 450,
        location: 'Ikeja, Nigeria',
        price: 80,
    },
];

const MarketingPromotions: React.FC = () => {
    const navigation = useNavigation<any>();
    const [visible, setVisibaleModal] = useState<any>(false);

    return (
        <Container statusBarColor={Colors.white}>
            <MarketingPrommotionModal
                visible={visible}
                closeModal={() => { setVisibaleModal(false) }}
                code={'SHARE50'}
            />
            <AppHeader
                headerTitle={'Marketing & Promotions'}
                onPress={() => navigation.canGoBack() && navigation.goBack()}
                Iconname="arrowleft"
                headerStyle={styles.headerStyle}
                titleStyle={styles.headerTitle}
            />
            <ScrollView contentContainerStyle={{ marginTop: SH(10) }} showsVerticalScrollIndicator={false}>
                <MarketingPrommotionListCopyBar />
                <AppText style={{ marginVertical: SH(15), width: "90%", alignSelf: 'center', color: Colors.black, fontFamily: Fonts.MEDIUM }}>Active Promotions</AppText>
                <FlatList
                    data={nearByData}
                    renderItem={({ item }: { item: any }) => (
                        <MarketingPrommotionListItem
                            text1={item.name}
                            text2={'New Year Special Discount'}
                            text3={'20% Off'}
                            type="maketing"
                        />
                    )}
                    keyExtractor={item => 'ServiceManagement' + item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    removeClippedSubviews={false}
                />
            </ScrollView>
            <View style={styles.ButtonContainer}>
                <Buttons
                    title="Invite Friends"
                    isBorderd={true}
                    textColor={Colors.themeColor}
                    onPress={() => { setVisibaleModal(true) }}
                    buttonStyle={styles.buttonStyle}
                />
                <Buttons
                    title="Create New Promotion"
                    onPress={() => { }}
                    buttonStyle={styles.buttonStyle}
                />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: SH(20),
    },
    headerStyle: {
        backgroundColor: Colors.bgwhite,
    },
    headerTitle: {
        color: Colors.textHeader,
        fontSize: SF(18),
    },
    topSpacing: {
        alignSelf: 'center',
        marginHorizontal: SW(20),
        marginTop: SH(5),
    },
    buttonStyle: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: SH(20),
    },
    ButtonContainer: {
        paddingTop: SH(20),
        backgroundColor: Colors.bgwhite
    }

});

export default MarketingPromotions;
