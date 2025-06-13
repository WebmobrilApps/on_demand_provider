import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, SF, SH, SW } from "../../../utils";
import { AppText, Buttons, UserprofileView, VectoreIcons } from "../../../component";
import { useNavigation } from "@react-navigation/native";
import RouteName from "../../../navigation/RouteName";
import imagePaths from "../../../assets/images";

// Interface for booking item props
interface BookingItemProps {
  image: any;
  name: string;
  job: string;
  location: string;
  date: string;
  id: string;
  onCallPress: () => void;
  onChatPress: () => void;
  showButtons?: boolean;
}

// Interface for info row props (location and date)
interface InfoRowProps {
  icon: any;
  text: string;
}

// Common component for location and date rows
const InfoRow: FC<InfoRowProps> = ({ icon, text }) => (
  <View style={styles.infoRow}>
    <Image source={icon} style={styles.infoIcon} resizeMode="contain" />
    <AppText numberOfLines={1} style={styles.infoText}>{text}</AppText>
  </View>
);

// Booking Item Component
const BookingItem: FC<BookingItemProps> = ({
  image,
  name,
  job,
  location,
  date,
  id,
  onCallPress,
  onChatPress,
  showButtons = true,
}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RouteName.BOOK_DETAILS)}
      style={styles.bookingCard}
    >
      <UserprofileView />
      <View style={styles.bookingInfo}>
        <View style={styles.nameIdContainer}>
          <AppText style={styles.bookingName}>{name}</AppText>
          <AppText style={styles.bookingId}>#{id}</AppText>
        </View>
        <AppText style={styles.bookingJob}>{job}</AppText>
        <InfoRow icon={imagePaths.location_pin} text={location} />
        <InfoRow icon={imagePaths.calender_icon1} text={date} />
      </View>
      {showButtons && (
        <View style={styles.bookingActions}>
          <Buttons
            icon={
              <VectoreIcons
                name="phone"
                icon="FontAwesome"
                size={SF(12)}
                color={Colors.themeColor}
              />
            }
            buttonStyle={styles.callButton}
            buttonTextStyle={styles.callButtonText}
            title="Call"
          />
          <Buttons
            icon={
              <VectoreIcons
                name="chatbubble-ellipses-sharp"
                color={Colors.white}
                icon="Ionicons"
                size={SF(12)}
              />
            }
            buttonStyle={styles.chatButton}
            buttonTextStyle={styles.chatButtonText}
            title="Chat"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BookingItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SW(8),
    marginTop: SH(10),
  },
  sectionTitle: {
    fontSize: SF(18),
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: SH(10),
  },
  flatListContent: {
    paddingBottom: SH(20),
  },
  bookingCard: {
    flexDirection: "row",
    backgroundColor: Colors.themelight,
    borderRadius: 10,
    padding: SF(10),
    marginBottom: SH(10),
    alignItems: "center",
  },
  bookingInfo: {
    flex: 1,
    marginLeft: SF(8),
    marginRight: SF(10),
  },
  nameIdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  bookingName: {
    fontSize: SF(10),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
    width: "75%",
  },
  bookingId: {
    fontSize: SF(12),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
  },
  bookingJob: {
    fontSize: SF(8),
    fontFamily: Fonts.MEDIUM,
    color: Colors.textAppColor,
    marginTop: SH(1.2),
  },
  bookingActions: {
    width: "27%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  callButton: {
    height: SH(25),
    borderRadius: SW(5),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.themeColor,
    marginBottom: 2.5,
  },
  callButtonText: {
    fontSize: SF(10),
    color: Colors.themeColor,
    marginLeft: 6,
  },
  chatButton: {
    height: SH(25),
    borderRadius: SW(5),
    marginTop: 2.5,
  },
  chatButtonText: {
    fontSize: SF(10),
    color: Colors.white,
    marginLeft: 6,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SH(5.4),
    paddingRight: SW(10),
  },
  infoIcon: {
    height: SF(12),
    width: SF(12),
  },
  infoText: {
    fontSize: SF(8),
    color: Colors.textAppColor,
    fontFamily: Fonts.MEDIUM,
    marginLeft: SW(4),
  },
});