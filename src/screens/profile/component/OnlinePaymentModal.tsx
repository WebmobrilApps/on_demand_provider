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
import {
  AppText,
  Buttons,
  Checkbox,
  InputField,
  VectoreIcons,
} from '../../../component';

const OnlinePaymentModal = ({ visible = false, onClose }: any) => {
  const [checkedItems, setCheckedItems] = useState('');
  const [amount, setAmount] = useState('');
  const options = [
    'Bank Transfer (HDFC ****1234)',
    'UPI (example@upi)',
    'PayPal',
  ];

  const toggleCheckbox = (label: string) => {
    setCheckedItems(label);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <View style={styles.dragBar} />
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <VectoreIcons
              icon="Ionicons"
              name="close"
              size={SW(24)}
              color={Colors.themeColor}
            />
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.listContainer}>
            <AppText style={styles.title}>Withdrawal Methods</AppText>

            {options.map((label, index) => (
              <View style={styles.optionWrapper} key={index}>
                <AppText style={styles.optionLabel}>{label}</AppText>
                <Checkbox
                  checked={checkedItems === label}
                  size={SW(22)}
                  onChange={() => toggleCheckbox(label)}
                />
              </View>
            ))}

            <InputField
              label="Enter Withdrawal Amount"
              color={Colors.textAppColor}
              textColor={Colors.textAppColor}
              onChangeText={setAmount}
              value={amount}
            />

            <AppText style={styles.noteText}>
              Withdrawals take 1-2 business days.
            </AppText>

            <Buttons
              buttonStyle={styles.withdrawButton}
              title="Withdraw Now"
              onPress={() => {
                console.log('Withdrawal initiated for amount:', amount);
                onClose();
              }}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default OnlinePaymentModal;

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    paddingTop: SH(15),
    paddingBottom: SH(30),
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
    paddingHorizontal: SW(30),
  },
  title: {
    color: Colors.textAppColor,
    fontSize: SF(16),
    fontFamily: Fonts.SEMI_BOLD,
    marginBottom: SH(10),
  },
  optionWrapper: {
    height: SH(50),
    marginVertical: SH(10),
    borderRadius: SW(10),
    borderColor: '#3D3D3D50',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SW(10),
    justifyContent: 'space-between',
  },
  optionLabel: {
    fontSize: SF(13),
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
  },
  noteText: {
    fontSize: SF(13),
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
    marginTop: SH(10),
  },
  withdrawButton: {
    marginTop: SH(20),
  },
});
