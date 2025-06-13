import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { AppText, Buttons, Spacing, UserprofileView, VectoreIcons } from '../../../component';
import BookingServiceItem from './BookingServiceItem';

// Interface for ChangeServiceProfiderConfirmModal props
type ChangeServiceProfiderConfirmModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
  onSubmitButton: () => void;
};

// Interface for DateSelection props
interface DateSelectionProps {
  value: string;
}

// Interface for ModalHeader props
interface ModalHeaderProps {
  onClose: () => void;
}

// Common component for date selection
const DateSelection: React.FC<DateSelectionProps> = ({ value }) => (
  <View style={styles.valuesubContainer}>
    <AppText style={styles.valuetxt}>{value}</AppText>
  </View>
);

// Common component for modal header (bar and close icon)
const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => (
  <View>
    <View style={styles.modalBar} />
    <TouchableOpacity onPress={onClose} style={styles.crossIcon}>
      <VectoreIcons
        icon="MaterialCommunityIcons"
        name="close"
        color={Colors.themeColor}
        size={SF(24)}
      />
    </TouchableOpacity>
  </View>
);

// ChangeServiceProfiderConfirmModal Component
const ChangeServiceProfiderConfirmModal: React.FC<ChangeServiceProfiderConfirmModalProps> = ({
  modalVisible = true,
  closeModal,
  onSubmitButton
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => closeModal()}
    >
      <View style={styles.modalView}>
        <View style={styles.mainView}>
          <ModalHeader onClose={closeModal} />
          <View style={styles.profileContainer}>
            <UserprofileView height={SF(98)} width={SF(98)} />
          </View>
          <Spacing space={SH(25)} />
          <View style={styles.valueContainer}>
            <DateSelection value="Ashutosh Pandey" />
            <DateSelection value="House Cleaning" />
          </View>
          <Spacing space={SH(30)} />
          <Buttons
            onPress={() => onSubmitButton()}
            title="Change Service Provider"
          />
          <Spacing space={SH(20)} />
        </View>
      </View>
    </Modal>
  );
};

export default ChangeServiceProfiderConfirmModal;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#00000050',
    justifyContent: 'flex-end',
  },
  mainView: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: SF(20),
    borderTopRightRadius: SF(20),
    paddingHorizontal: SW(25),
    paddingBottom: SW(20),
  },
  modalBar: {
    backgroundColor: Colors.modalBar,
    height: SF(6),
    width: SW(60),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  crossIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
    padding: 10,
  },
  profileContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  valueContainer: {
    paddingHorizontal: SW(12),
    paddingVertical: SH(15),
    backgroundColor: Colors.themelight,
    borderRadius: SF(10),
  },
  valuesubContainer: {
    paddingHorizontal: SW(15),
    paddingVertical: SH(18),
    backgroundColor: Colors.white,
    borderRadius: SF(10),
    marginTop: SH(20),
  },
  valuetxt: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(14),
  },
});