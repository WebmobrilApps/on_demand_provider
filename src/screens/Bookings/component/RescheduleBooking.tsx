import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { AppText, Buttons, Divider, Spacing, UserprofileView, VectoreIcons } from '../../../component';
import BookingServiceItem from './BookingServiceItem';
import imagePaths from '../../../assets/images';

// Interface for RescheduleBooking props
type RescheduleBookingProps = {
  modalVisible: boolean;
  closeModal: () => void;
  onSubmitButton: () => void;
};

// Interface for date and time items
interface DateItem {
  day: string;
  date: string;
}

interface TimeItem {
  time: string;
}

const dateData: DateItem[] = [
  { day: "Tue", date: "01" },
  { day: "Wed", date: "02" },
  { day: "Thu", date: "03" },
  { day: "Fri", date: "04" },
  { day: "Sat", date: "05" },
  { day: "Sun", date: "06" },
  { day: "Mon", date: "07" },
  { day: "Tue", date: "08" },
  { day: "Wed", date: "09" },
  { day: "Thu", date: "10" },
  { day: "Fri", date: "11" },
  { day: "Sat", date: "12" },
  { day: "Sun", date: "13" },
  { day: "Mon", date: "14" },
  { day: "Tue", date: "15" },
  { day: "Wed", date: "16" },
  { day: "Thu", date: "17" },
  { day: "Fri", date: "18" },
  { day: "Sat", date: "19" },
  { day: "Sun", date: "20" },
  { day: "Mon", date: "21" },
  { day: "Tue", date: "22" },
  { day: "Wed", date: "23" },
  { day: "Thu", date: "24" },
  { day: "Fri", date: "25" },
  { day: "Sat", date: "26" },
  { day: "Sun", date: "27" },
  { day: "Mon", date: "28" },
  { day: "Tue", date: "29" },
  { day: "Wed", date: "30" },
];

const timeData: TimeItem[] = [
  { time: "06:30 PM" },
  { time: "07:00 PM" },
  { time: "07:30 PM" },
  { time: "08:00 PM" },
  { time: "08:30 PM" },
  { time: "09:00 PM" },
  { time: "09:30 PM" },
  { time: "10:00 PM" },
];

const separatorComponent = () => <View style={{ width: 5 }} />;
const separatorComponent1 = () => <View style={{ width: SW(15) }} />;

// RescheduleBooking Component
const RescheduleBooking: React.FC<RescheduleBookingProps> = ({
  modalVisible = true,
  closeModal,
  onSubmitButton,
}) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number | null>(null);

  const renderDateItem = ({ item, index }: { item: DateItem; index: number }) => (
    <TouchableOpacity
      style={[
        styles.dateItem,
        selectedDateIndex === index && styles.selectedDateItem,
      ]}
      onPress={() => setSelectedDateIndex(selectedDateIndex === index ? null : index)}
    >
      <AppText style={[styles.dateDayText, selectedDateIndex === index && { color: Colors.textWhite }]}>{item.day}</AppText>
      <AppText style={[styles.dateNumberText, selectedDateIndex === index && { color: Colors.textWhite }]}>{item.date}</AppText>
    </TouchableOpacity>
  );

  const renderTimeItem = ({ item, index }: { item: TimeItem; index: number }) => (
    <TouchableOpacity
      style={[
        styles.timeItem,
        selectedTimeIndex === index && styles.selectedTimeItem,
      ]}
      onPress={() => setSelectedTimeIndex(selectedTimeIndex === index ? null : index)}
    >
      <AppText style={[styles.timeText,selectedTimeIndex === index && { color: Colors.textWhite }]}>{item.time}</AppText>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => closeModal()}
    >
      <View style={styles.modalView}>
        <View style={styles.mainView}>
          <View style={styles.modalBar} />
          <TouchableOpacity style={styles.crossIcon} onPress={closeModal}>
            <VectoreIcons
              icon="MaterialCommunityIcons"
              name="close"
              color={Colors.themeColor}
              size={SF(24)}
            />
          </TouchableOpacity>
          <AppText style={styles.subHeading}>Select date and time</AppText>
          <Divider
            color={Colors.textAppColor + 50}
            height={0.5}
            contStyle={{ marginTop: SH(20) }}
          />
          <View style={styles.headerRow}>
            <Image source={imagePaths.calender_icon} style={styles.icon} />
            <AppText style={styles.headerText}>Select date</AppText>
          </View>
          <FlatList
            data={dateData}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderDateItem}
            ItemSeparatorComponent={separatorComponent}
            keyExtractor={(item, index) => index.toString()}
          />
      
          <View style={styles.headerRow}>
            <Image source={imagePaths.timer_icon} style={styles.icon} />
            <AppText style={styles.headerText}>Select time</AppText>
          </View>
     
          <FlatList
            data={timeData}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderTimeItem}
            ItemSeparatorComponent={separatorComponent1}
            keyExtractor={(item, index) => index.toString()}
          />
          <Spacing space={SH(35)} />
          <Buttons
            onPress={() => onSubmitButton()}
            title="Save"
          />
          <Spacing space={SH(20)} />
        </View>
      </View>
    </Modal>
  );
};

export default RescheduleBooking;

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
    paddingBottom: SW(20),
    paddingHorizontal: SW(20),
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
    alignSelf: 'flex-end',
    padding: 10,
  },
  subHeading: {
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(16),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SH(20),
  },
  icon: {
    width: SF(20),
    height: SF(20),
  },
  headerText: {
    marginTop: 0,
    marginLeft: SW(15),
    fontSize: SF(16),
    color: Colors.textAppColor,
    fontFamily: Fonts.SEMI_BOLD,
  },
  dateItem: {
    height: SF(40),
    width: SF(40),
    borderRadius: SF(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.themeColor,
    marginVertical: 5,
  },
  selectedDateItem: {
    backgroundColor: Colors.themeColor,
  },
  dateDayText: {
    color: Colors.themeColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(9.6),
  },
  dateNumberText: {
    color: Colors.themeColor,
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(12),
    marginTop: 1.2,
  },
  timeItem: {
    height: SF(40),
    paddingHorizontal: SW(20),
    borderRadius: SF(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.themeColor,
    marginVertical: 5,
  },
  selectedTimeItem: {
    backgroundColor: Colors.themeColor,
  },
  timeText: {
    color: Colors.themeColor,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(12),
  },
});