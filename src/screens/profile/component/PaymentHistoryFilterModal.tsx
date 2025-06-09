import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SF, SH, SW, Colors, Fonts } from '../../../utils';
import { Checkbox, Divider, VectoreIcons } from '../../../component';

const PaymentHistoryFilterModal = ({ visible, onClose }: any) => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const options = ['Service Payment', 'Withdrawal', 'Refund Processed'];

    const toggleCheckbox = (label: string) => {
        setCheckedItems((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label]
        );
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalBackdrop}>
                <View style={styles.modalContainer}>
                    {/* Top Bar */}
                    <View style={styles.dragBar} />
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <VectoreIcons
                            icon='Ionicons'
                            name="close"
                            size={SW(24)}
                            color={Colors.themeColor}
                        />
                    </TouchableOpacity>

                    {/* Option List */}
                    <ScrollView contentContainerStyle={styles.listContainer}>
                        {options.map((label, index) => (
                            <>
                                <TouchableOpacity
                                    key={index}
                                    style={styles.optionItem}
                                    onPress={() => toggleCheckbox(label)}
                                >
                                    <Checkbox
                                        checked={checkedItems.includes(label)}
                                        onChange={() => toggleCheckbox(label)}
                                        label={label}
                                    />
                                </TouchableOpacity>
                                {index!=options.length-1 && <Divider height={1} color='#B7B7B730'/>}
                            </>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default PaymentHistoryFilterModal;

const styles = StyleSheet.create({
    modalBackdrop: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: SW(20),
        borderTopRightRadius: SW(20),
        paddingTop: SH(15),
        paddingBottom: SH(30),
        maxHeight: '60%',
    },
    dragBar: {
        width: SW(60),
        height: SH(6),
        backgroundColor: '#DFE2EB',
        borderRadius: SW(3),
        alignSelf: 'center',
        marginBottom: SH(20),
    },
    closeIcon: {
        position: 'absolute',
        top: SH(20),
        right: SW(18),
        zIndex: 999999,
    },
    listContainer: {
        paddingTop: SH(20),
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SH(18),
        borderBottomColor: '#f0f0f0',
        paddingHorizontal: SW(30),
    },
    checkbox: {
        width: SW(22),
        height: SW(22),
        borderWidth: 1.5,
        borderColor: Colors.themeColor,
        borderRadius: 4,
        marginRight: SW(12),
    },
    checkedBox: {
        backgroundColor: Colors.themeColor,
    },
    optionText: {
        fontSize: SF(16),
        color: Colors.black,
        fontFamily: Fonts.REGULAR,
    },
});
