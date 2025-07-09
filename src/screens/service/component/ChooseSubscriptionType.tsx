import React, { useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SF, SH, SW, Colors, Fonts } from '../../../utils';
import {
  AppText,
  Buttons,
  Checkbox,
  VectoreIcons,
} from '../../../component';

const ChooseSubscriptionType = ({ visible = false, onClose,setSelectedSubscriptionOption,selectedSubscriptionOption }: any) => {

  const options = ['Subscription-Based', 'Commission-Based'];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={onClose}>
              <VectoreIcons
                icon="Feather"
                name="chevron-left"
                size={SW(28)}
                color={Colors.themeColor}
              />
            </TouchableOpacity>
            <AppText style={styles.title}>Choose Your Plan</AppText>
            <View style={{ width: 40 }} />
          </View>

          <ScrollView contentContainerStyle={styles.listContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionWrapper}
                onPress={() => setSelectedSubscriptionOption(option)}
              >
                <Checkbox
                  checked={selectedSubscriptionOption === option}
                  size={SW(23)}
                  onChange={() => setSelectedSubscriptionOption(option)}
                />
                <AppText style={styles.optionLabel}>{option}</AppText>
              </TouchableOpacity>
            ))}

            <Buttons
              buttonStyle={styles.confirmButton}
              title="Confirm"
              onPress={() => {
                console.log('Selected Plan:', selectedSubscriptionOption);
                onClose();
              }}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseSubscriptionType;

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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20),
  },
  title: {
    color: Colors.textAppColor,
    fontSize: SF(16),
    fontFamily: Fonts.SEMI_BOLD,
  },
  listContainer: {
    paddingTop: SH(20),
    paddingHorizontal: SW(30),
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
  },
  optionLabel: {
    fontSize: SF(13),
    color: Colors.textAppColor,
    fontFamily: Fonts.REGULAR,
    marginLeft: SW(20),
  },
  confirmButton: {
    marginTop: SH(45),
  },
});
