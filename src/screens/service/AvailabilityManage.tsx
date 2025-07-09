import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Modal,
    FlatList,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { Colors, Fonts, imagePaths, SF, SH, SW } from '../../utils';
import LabelBarAvail from './component/LabelBarAvail';
import { AppHeader, AppText, Buttons, VectoreIcons } from '../../component';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import RouteName from '../../navigation/RouteName';

const AvailabilityScreen = () => {
    const [daysArray, setDaysArray] = useState([
        { day: 'Monday', time: '10:00 am - 07:00 pm', status: true },
        { day: 'Tuesday', time: '10:00 am - 07:00 pm', status: true },
        { day: 'Wednesday', time: '10:00 am - 07:00 pm', status: true },
        { day: 'Thursday', time: '10:00 am - 07:00 pm', status: true },
        { day: 'Friday', time: '10:00 am - 07:00 pm', status: true },
        { day: 'Saturday', time: 'Close', status: false },
        { day: 'Sunday', time: 'Close', status: false },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [pickerMode, setPickerMode] = useState<'start' | 'end' | null>(null);
    const { t } = useTranslation();
    const navigation = useNavigation<any>();

    const openModal = (index: number) => {
        setSelectedIndex(index);
        const current = daysArray[index];
        if (!current.status || current.time === 'Close') {
            setStartTime(new Date());
            setEndTime(new Date());
        } else {
            const [startStr, endStr] = current.time.split('-').map(s => s.trim());
            setStartTime(moment(startStr, 'h:mm a').toDate());
            setEndTime(moment(endStr, 'h:mm a').toDate());
        }
        setModalVisible(true);
    };

    const handleConfirm = () => {
        if (selectedIndex === null) return;

        const updated = [...daysArray];

        if (!updated[selectedIndex].status) {
            updated[selectedIndex].time = 'Close';
        } else {
            if (endTime <= startTime) {
                Alert.alert('Validation Error', 'End time must be after start time');
                return;
            }
            updated[selectedIndex].time = `${moment(startTime).format('h:mm a')} - ${moment(endTime).format('h:mm a')}`;
        }

        setDaysArray(updated);
        setModalVisible(false);
        setPickerMode(null);
    };

    const renderItem = ({ item, index }: any) => (
        <LabelBarAvail
            verticalSpace={4}
            key={index}
            day={item.day}
            time={item.time}
            onClick={() => openModal(index)}
        />
    );

    return (
        <View style={styles.container}>
            <AppHeader
                headerTitle={"Availability"}
                onPress={() => navigation.goBack()}
                Iconname="arrowleft"
                headerStyle={styles.header}
            />

            <FlatList
                data={daysArray}
                renderItem={renderItem}
                keyExtractor={(_, idx) => idx.toString() + 'availbility'}
            />

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.popupContainer}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.crossIcon}>
                            <VectoreIcons
                                icon='MaterialCommunityIcons'
                                name='close'
                                color={Colors.themeColor}
                                size={SF(24)}
                            />
                        </TouchableOpacity>

                        <AppText style={styles.modalTitle}>Select Time</AppText>

                        {selectedIndex !== null && (
                            <View style={[styles.timeRow, { marginBottom: 19 }]}>
                                <AppText style={styles.timeLabel}>
                                    {/* {daysArray[selectedIndex].day} Open */}
                                    Availability
                                </AppText>
                                <TouchableOpacity
                                    onPress={() => {
                                        const updated = [...daysArray];
                                        const newValue = !updated[selectedIndex].status;
                                        updated[selectedIndex].status = newValue;
                                        updated[selectedIndex].time = newValue
                                            ? `${moment(startTime).format('h:mm a')} - ${moment(endTime).format('h:mm a')}`
                                            : 'Close';
                                        if (!newValue) setPickerMode(null);
                                        setDaysArray(updated);
                                    }}
                                >
                                    <Image
                                        source={
                                            daysArray[selectedIndex].status
                                                ? imagePaths.switch_on
                                                : imagePaths.switch_off
                                        }
                                        style={{ width: SF(50), height: SF(28), resizeMode: 'contain' }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}

                        {selectedIndex !== null && daysArray[selectedIndex].status && (
                            <>
                                <TouchableOpacity style={styles.timeRow} onPress={() => setPickerMode('start')}>
                                    <AppText style={styles.timeLabel}>Start Time</AppText>
                                    <View style={styles.timeBox}>
                                        <AppText style={styles.timeValue}>
                                            {moment(startTime).format('h:mm a')}
                                        </AppText>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.timeRow} onPress={() => setPickerMode('end')}>
                                    <AppText style={styles.timeLabel}>End Time</AppText>
                                    <View style={styles.timeBox}>
                                        <AppText style={styles.timeValue}>
                                            {moment(endTime).format('h:mm a')}
                                        </AppText>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}

                        {/* {pickerMode && (
                            <DatePicker
                                date={pickerMode === 'start' ? startTime : endTime}
                                onDateChange={(date) =>
                                    pickerMode === 'start'
                                        ? setStartTime(date)
                                        : setEndTime(date)
                                }
                                mode="time"
                                locale="en"
                                is24hourSource="device"
                            />
                        )} */}

                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                            <AppText style={styles.confirmText}>Confirm</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Buttons
                buttonStyle={styles.submitButton}
                textColor={Colors.textWhite}
                title={t('placeholders.save')}
                onPress={() => navigation.navigate(RouteName.SERVICE_SETUP)}
            />
        </View>
    );
};

export default AvailabilityScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: SH(20),
        paddingHorizontal: SW(25),
    },
    header: {
        fontSize: SF(20),
        fontFamily: Fonts.BOLD,
        textAlign: 'center',
        marginBottom: SH(20),
        paddingHorizontal: SW(10),
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: SF(16),
        padding: SH(20),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        position: 'relative',
    },
    crossIcon: {
        position: 'absolute',
        right: SW(20),
        top: SH(20),
    },
    modalTitle: {
        fontSize: SF(16),
        fontFamily: Fonts.SEMI_BOLD,
        marginBottom: SH(20),
        color: '#404040',
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "88%",
        marginVertical: 5,
        marginBottom: SH(10),
    },
    timeBox: {
        backgroundColor: '#F1F8FB',
        borderRadius: SF(10),
        paddingVertical: SH(12),
        paddingHorizontal: SW(20),
        alignItems: 'center',
    },
    timeLabel: {
        fontSize: SF(16),
        fontFamily: Fonts.SEMI_BOLD,
        color: '#404040',
    },
    timeValue: {
        fontSize: SF(16),
        fontFamily: Fonts.MEDIUM,
        color: Colors.textAppColor,
    },
    confirmButton: {
        backgroundColor: '#2A92AD',
        paddingVertical: SH(12),
        paddingHorizontal: SW(40),
        borderRadius: SF(12),
        marginTop: SH(20),
    },
    confirmText: {
        color: '#fff',
        fontSize: SF(16),
        fontFamily: Fonts.BOLD,
    },
    submitButton: {
        backgroundColor: Colors.themeColor,
        marginBottom: SH(30),
    },
});
