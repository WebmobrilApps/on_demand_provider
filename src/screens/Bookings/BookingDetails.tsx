import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, SH, SW, Fonts, SF } from '../../utils';
import { AppHeader, AppText, Buttons, Container, Spacing, UserprofileView, VectoreIcons } from '../../component';
import { useNavigation } from '@react-navigation/native';
import { ChangeServiceProfiderConfirmModal, ChangeServiceProvider, RescheduleBooking, SucessBookingModal, } from './component';

// Interface for info row props
interface InfoRowProps {
  label: string;
  value: string;
}

// Interface for action button props
interface ActionButtonProps {
  title: string;
  onPress: () => void;
  isBordered?: boolean;
  textColor?: string;
}

// Common component for info rows (Service, Date & Time, Address)
const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <View style={styles.infoRow}>
    <AppText style={styles.label}>{label}</AppText>
    <AppText style={styles.value}>{value}</AppText>
  </View>
);

// Common component for action buttons (Initiate Service, Reschedule, Cancel)
const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress, isBordered, textColor }) => (
  <Buttons
    onPress={onPress}
    title={title}
    buttonStyle={styles.bottonsContainer}
    isBorderd={isBordered}
    textColor={textColor}
  />
);

// Booking Details Component
const BookingDetails: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false)
  const [isServiceProvModal, setIsServiceProvModal] = useState(false)
  const [isServiceProvConfirmModal, setIsServiceProvConfirmModal] = useState(false)
  const [isSuccessModal, setIsSuccessModal] = useState(false)
  return (
    <Container statusBarColor={Colors.white}>
      <AppHeader
        headerTitle=""
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        headerStyle={styles.headerStyle}
        titleStyle={styles.headerTitleStyle}
      />
      <ScrollView style={styles.scrollView} bounces={false}>
        <TouchableOpacity onPress={() => setIsServiceProvConfirmModal(true)} style={styles.headerRow}>
          <UserprofileView height={SF(72)} width={SF(72)} />
          <AppText style={styles.userName}>Ashutosh Pandey</AppText>
          <View style={styles.bookingActions}>
            <Buttons
              icon={<VectoreIcons name="phone" icon="FontAwesome" size={SF(12)} color={Colors.themeColor} />}
              buttonStyle={styles.callButton}
              buttonTextStyle={styles.callButtonText}
              title="Call"
            />
            <Buttons
              icon={<VectoreIcons name="chatbubble-ellipses-sharp" color={Colors.white} icon="Ionicons" size={SF(12)} />}
              buttonStyle={styles.chatButton}
              buttonTextStyle={styles.chatButtonText}
              title="Chat"
            />
          </View>
        </TouchableOpacity>
        <AppText style={styles.bookingId}>#210</AppText>
        <Spacing space={SH(10)} />
        <InfoRow label="Service :" value="House Cleaning" />
        <InfoRow label="Date & Time :" value="02 Febuary, 2022 at 8:30 AM" />
        <InfoRow label="Address :" value="8747 Tremaine Run, Waldostad 61708-4614" />
      </ScrollView>

      <ActionButton title="Initiate Service" onPress={() => { }} />

      <ActionButton title="Reschedule" onPress={() => { setIsRescheduleModalOpen(true) }} isBordered={true} textColor={Colors.themeColor} />

      <ActionButton title="Cancel" onPress={() => { }} />

      <ChangeServiceProfiderConfirmModal
        modalVisible={isServiceProvConfirmModal}
        closeModal={() => { setIsServiceProvConfirmModal(false) }}
        onSubmitButton={() => {
          setIsServiceProvConfirmModal(false)
          setIsServiceProvModal(true)
        }}
      />
      <ChangeServiceProvider
        modalVisible={isServiceProvModal}
        closeModal={() => { setIsServiceProvModal(false) }}
      />

      <RescheduleBooking
        onSubmitButton={() => {
          setIsRescheduleModalOpen(false)
          setIsSuccessModal(true)
        }}
        closeModal={() => { setIsRescheduleModalOpen(false) }}
        modalVisible={isRescheduleModalOpen}
      />

      <SucessBookingModal
        closeModal={() => { setIsSuccessModal(false) }}
        modalVisible={isSuccessModal}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.bgwhite,
    marginVertical: SH(10),
    marginBottom: SF(20),
    paddingHorizontal: SW(30),
  },
  headerTitleStyle: {
    color: Colors.textHeader,
    fontSize: SF(18),
  },
  scrollView: {
    paddingHorizontal: SW(25),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    flex: 1,
    color: Colors.black,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(16),
    marginLeft: SW(7),
  },
  bookingActions: {
    width: "25%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bookingId: {
    flex: 1,
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(20),
    marginLeft: SW(7),
    marginTop: SH(15),
  },
  infoRow: {
    flexDirection: "row",
    marginTop: SH(16),
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(14),
    marginLeft: SW(7),
    color: Colors.themeColor,
  },
  value: {
    flex: 1,
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(14),
    marginLeft: SW(7),
  },
  callButton: {
    height: SH(22),
    borderRadius: SW(5),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.themeColor,
    marginBottom: 4,
  },
  callButtonText: {
    fontSize: SF(10),
    color: Colors.themeColor,
    marginLeft: 6,
  },
  chatButton: {
    height: SH(22),
    borderRadius: SW(5),
    marginTop: 4,
  },
  chatButtonText: {
    fontSize: 10,
    color: Colors.white,
    marginLeft: 6,
  },
  bottonsContainer: {
    width: '84%',
    alignSelf: "center",
    marginBottom: SH(20),
    height: SF(44),
  },
});

export default BookingDetails;