import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { AppHeader, AppText, Buttons } from '../../component';
import { Colors, Fonts, SF } from '../../utils';

const PaymentInvoice = () => {
  const navigation = useNavigation
    <any>();
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <AppHeader
        headerTitle="Invoice"
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => { }}
        headerStyle={styles.header}
      />
      <ScrollView contentContainerStyle={styles.container}>

        {/* Invoice Info */}
        <View style={styles.section}>
          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Invoice To: </AppText>
            Customer Name
          </AppText>
          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Email Id: </AppText>
            example@gmail.com
          </AppText>
          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Invoice Date: </AppText>
            01/02/2025
          </AppText>
        </View>

        {/* Service Details */}
        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Service Details:</AppText>

          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Service Name: </AppText>
            Home Cleaning
          </AppText>
          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Price: </AppText>
            ₹1,500
          </AppText>
          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Tax (if applicable): </AppText>
            ₹150
          </AppText>
          <AppText style={styles.label}>
            <AppText style={styles.labelHighlight}>Total: </AppText>
            ₹1,650
          </AppText>
        </View>

      </ScrollView>
      <Buttons
        buttonStyle={styles.downloadButton}
        title="Download Invoice"
        onPress={() => {
          // Logic to download invoice
          console.log('Download Invoice Pressed');
        }} />
    </SafeAreaView>
  );
};

export default PaymentInvoice;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: SF(14),
    marginBottom: 20,
  },
  label: {
    fontSize: SF(16),
    color: Colors.black,
    marginBottom: 10,
  },
  labelHighlight: {
    color: Colors.themeColor,
    fontFamily: Fonts.SEMI_BOLD,
  },
  downloadButton: {
    marginBottom: 40,
    alignSelf: 'center',
    elevation: 3,
    width: '90%',
  },

});
