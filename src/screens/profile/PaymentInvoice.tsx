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
import { AppHeader, Buttons } from '../../component';
import { Colors, Fonts, SF } from '../../utils';

const PaymentInvoice = () => {
  const navigation = useNavigation
    <any>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <AppHeader
          headerTitle="Invoice"
          onPress={() => navigation.goBack()}
          Iconname="arrowleft"
          rightOnPress={() => { }}
          headerStyle={styles.header}
        />

        {/* Invoice Info */}
        <View style={styles.section}>
          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Invoice To: </Text>
            Customer Name
          </Text>
          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Email Id: </Text>
            example@gmail.com
          </Text>
          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Invoice Date: </Text>
            01/02/2025
          </Text>
        </View>

        {/* Service Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Details:</Text>

          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Service Name: </Text>
            Home Cleaning
          </Text>
          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Price: </Text>
            ₹1,500
          </Text>
          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Tax (if applicable): </Text>
            ₹150
          </Text>
          <Text style={styles.label}>
            <Text style={styles.labelHighlight}>Total: </Text>
            ₹1,650
          </Text>
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
    marginTop: 20,
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
    fontFamily:Fonts.SEMI_BOLD,
  },
  downloadButton: {
    marginBottom: 40,
    alignSelf: 'center',
    elevation: 3,
    width: '90%',
  },
 
});
