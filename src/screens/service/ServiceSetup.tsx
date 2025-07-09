import { Image, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppHeader, AppText, Buttons, Checkbox, Container, DropdownComponent, InputField, Spacing, VectoreIcons } from '../../component';
import { Colors, Fonts, imagePaths, SF, SH, SW } from '../../utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LabelBar from './component/LabelBar';
import RouteName from '../../navigation/RouteName';
import ChooseSubscriptionType from './component/ChooseSubscriptionType';

interface imgArrInterface {
    img: string,
    type: string
}

const data = [
    { label: 'Cat 1', value: '1' },
    { label: 'Cat 2', value: '2' },
    { label: 'Cat 3', value: '3' },
    { label: 'Cat 4', value: '4' },
    { label: 'Cat 5', value: '5' },
    { label: 'Cat 6', value: '6' },
    { label: 'Cat 7', value: '7' },
];

const teamSizeData = [
    { label: 'Self', value: '1' },
    { label: '2 members', value: '2' },
    { label: '3 members', value: '3' },
    { label: '4 members', value: '4' },
    { label: '5 members', value: '5' },
    { label: '6 members', value: '6' },
    { label: '7 members', value: '7' },
];

const priceData = [
    { label: '$ 20', value: '1' },
    { label: '$ 30', value: '2' },
    { label: '$ 40', value: '3' },
    { label: '$ 50', value: '4' },
    { label: '$ 60', value: '5' },
    { label: '$ 70', value: '6' },
    { label: '$ 80', value: '7' },
];

const ServiceSetup = () => {
    const [imgArr, setImgArr] = useState<imgArrInterface[]>([
        { img: 'https://example.com/image1.jpg', type: 'image/jpeg' },
        { img: 'https://example.com/image2.jpg', type: 'image/png' },
        { img: 'https://example.com/image1.jpg', type: 'image/jpeg' },
        { img: 'https://example.com/image2.jpg', type: 'Upload to Gallery' }
    ])

    const { t } = useTranslation();
    const navigation = useNavigation<any>();
    const [serviceName, setServiceName] = useState('')
    const [chooseSubscriotnToggle, setChooseSubscriotnToggle] = useState(false)
    const [selectedSubscriptionOption, setSelectedSubscriptionOption] = useState('Subscription-Based');
    const [description, setDescription] = useState('')
    const route = useRoute<any>();
    const { prevPage } = route.params;
    return (
        <Container isPadding={false}>
            <AppHeader
                headerTitle={"Service Setup"}
                onPress={() => navigation.goBack()}
                Iconname="arrowleft"
                headerStyle={styles.header}
            />
            <KeyboardAwareScrollView
                style={styles.scrollStyle}
                contentContainerStyle={styles.container}
                enableOnAndroid={true}
                extraScrollHeight={50}
                keyboardShouldPersistTaps="handled"
                resetScrollToCoords={{ x: 0, y: 0 }}
            >
                <AppText style={styles.galleryText}>Gallery</AppText>
                <View style={styles.galleryWrapper}>
                    {imgArr.map((item, index) => (
                        <View key={index} style={styles.galleryItem}>
                            {index === 3 ? (
                                <AppText style={styles.uploadText}>{item.type}</AppText>
                            ) : (
                                <Image
                                    source={imagePaths.placeholder_img}
                                    resizeMode="cover"
                                    style={styles.galleryImage}
                                />
                            )}
                        </View>
                    ))}
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        placeholder={'Service Name'}
                        value={serviceName}
                        onChangeText={setServiceName}
                        placeholderTextColor={Colors.textAppColor}
                        keyboardType={'email-address'}
                        textColor={Colors.textAppColor}
                        withBackground={true}
                    />
                    <Spacing space={SH(18)} />

                    <DropdownComponent
                        placeholderText='Select Category'
                        placeholderStyle={styles.dropdownPlaceholder}
                        dropdown={styles.dropdown}
                        data={data}
                    />
                    <Spacing space={SH(25)} />

                    <DropdownComponent
                        placeholderText='Team Size'
                        placeholderStyle={styles.dropdownPlaceholder}
                        dropdown={styles.dropdown}
                        data={teamSizeData}
                    />
                    <Spacing space={SH(25)} />

                    <LabelBar
                        label="Availability"
                        icon={imagePaths.right_icon}
                        onClick={() => navigation.navigate(RouteName.AVAILBILITY_MANAGE)}
                    />
                    <Spacing space={SH(25)} />

                    <View style={styles.dropdownRow}>
                        <DropdownComponent
                            placeholderText='Price'
                            placeholderStyle={styles.dropdownPlaceholder}
                            dropdown={styles.dropdownHalf}
                            data={priceData}
                        />
                        <DropdownComponent
                            placeholderText='Price Type'
                            placeholderStyle={styles.dropdownPlaceholder}
                            dropdown={styles.dropdownHalf}
                            data={teamSizeData}
                        />
                    </View>
                    <Spacing space={SH(18)} />

                    <InputField
                        value={description}
                        multiline
                        onChangeText={setDescription}
                        errorMessage={''}
                        placeholder='Description of service'
                        keyboardType="default"
                        placeholderTextColor={Colors.textAppColor}
                        textColor={Colors.textAppColor}
                        withBackground={true}
                        inputContainer={styles.descriptionInputContainer}
                    />
                </View>

                <View style={styles.saveFilterContainer}>
                    <VectoreIcons
                        icon='Entypo'
                        name="squared-plus"
                        size={SF(14)}
                        color={Colors.themeColor} />
                    <AppText style={styles.saveFilterText}>Add More Service</AppText>
                </View>

                <Buttons
                    buttonStyle={styles.submitButton}
                    textColor={Colors.textWhite}
                    title={t('placeholders.save')}
                    onPress={() => {
                        Keyboard.dismiss();
                        {
                            prevPage === 'service_manage' ? navigation.goBack() : setChooseSubscriotnToggle(true);
                        }
                    }}
                />
            </KeyboardAwareScrollView>

            <ChooseSubscriptionType
                visible={chooseSubscriotnToggle}
                onClose={() => {
                    selectedSubscriptionOption == 'Subscription-Based' ? navigation.navigate(RouteName.SUBSCRIPTION_MANAGE) : navigation.navigate(RouteName.HOME);
                    setChooseSubscriotnToggle(false)
                }}
                selectedSubscriptionOption={selectedSubscriptionOption}
                setSelectedSubscriptionOption={setSelectedSubscriptionOption}
            />

        </Container>
    );
};

export default ServiceSetup;

const styles = StyleSheet.create({
    scrollStyle: {
        flexGrow: 1
    },
    container: {
        paddingHorizontal: SW(25),
        flexGrow: 1
    },
    header: {
        backgroundColor: Colors.bgwhite,
        paddingHorizontal: SW(30),
        marginTop: SH(10)
    },
    galleryText: {
        fontSize: SF(16),
        fontFamily: Fonts.SEMI_BOLD,
        color: Colors.textAppColor,
        marginTop: SH(20),
    },
    galleryWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: SH(10),
    },
    galleryItem: {
        width: '24%',
        height: SF(78),
        backgroundColor: '#EAEAEA',
        borderRadius: SF(7),
        justifyContent: 'center',
        alignItems: 'center',
    },
    galleryImage: {
        height: SF(58),
        width: SF(58),
    },
    uploadText: {
        fontSize: SF(10),
        fontFamily: Fonts.SEMI_BOLD,
        color: "#BEB6B6",
        textAlign: 'center',
    },
    inputWrapper: {
        backgroundColor: Colors.themelight,
        marginTop: SH(20),
        borderRadius: SF(10),
        paddingHorizontal: SW(10),
        paddingTop: SH(10),
        paddingBottom: SH(20),
    },
    dropdownPlaceholder: {
        color: Colors.textAppColor,
        fontSize: SF(14.5)
    },
    dropdown: {
        borderWidth: 0
    },
    dropdownRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropdownHalf: {
        borderWidth: 0,
        width: '48%'
    },
    descriptionInputContainer: {
        height: SH(100),
    },
    saveFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SH(20),
        marginBottom: SH(10),
    },
    saveFilterText: {
        marginLeft: SW(10),
        color: '#6C757D',
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(12),
    },
    submitButton: {
        backgroundColor: Colors.themeColor,
        marginVertical: SH(10),
    },
});
