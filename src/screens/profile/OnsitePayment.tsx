import React, { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { imagePaths, SF, SH, SW, Colors, Fonts } from '../../utils';
import { AppHeader, ButtonComp, Buttons, Container, } from '../../component';
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
                headerTitle={'Onsite Payments'}
                onPress={() => navigation.canGoBack() && navigation.goBack()}
                Iconname="arrowleft"
                headerStyle={styles.headerStyle}
                titleStyle={styles.headerTitle}
            />
            <ScrollView contentContainerStyle={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={nearByData}
                    renderItem={({ item }: { item: any }) => (
                        <MarketingPrommotionListItem
                            text1={item.name}
                            text2={item.name}
                            text3={item.name}
                            type="onsite"
                        />
                    )}
                    keyExtractor={item => 'ServiceManagement' + item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    removeClippedSubviews={false}
                />
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        marginTop: SH(10), paddingBottom: SH(40)
    },
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
