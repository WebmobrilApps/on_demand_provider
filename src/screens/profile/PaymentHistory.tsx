import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppHeader,
  AppText,
  Buttons,
  Container,
  PaymentHistoryItem,
} from '../../component';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import VectorIcon from '../../component/VectoreIcons';
import imagePaths from '../../assets/images';
import RouteName from '../../navigation/RouteName';
import PaymentHistoryFilterModal from './component/PaymentHistoryFilterModal';
import OnlinePaymentModal from './component/OnlinePaymentModal';

const ChangePassword: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [payModal, setPayModal] = useState(false);

  const paymentData = [
    { name: 'House Cleaning', datetime: '10-Feb-25', price: '$29', status: 'Completed', id: 1 },
    { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 2 },
    { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 3 },
    { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 4 },
    { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 5 },
    { name: 'House Cleaning', datetime: '10-Feb-25', price: '$290', status: 'Pending', id: 6 },
  ];

  return (
    <Container isPadding={true}>
      <OnlinePaymentModal
        visible={payModal}
        onClose={() => setPayModal(false)}
      />
      <AppHeader
        headerTitle={t('profile.paymentHistory')}
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => {}}
        headerStyle={styles.header}
      />
      <PaymentHistoryFilterModal
        onClose={() => setIsVisibleModal(false)}
        visible={isVisibleModal}
      />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate(RouteName.PAY_HISTORY_GRAPH)}
          style={styles.totalSpentContainer}
        >
          <View>
            <AppText style={styles.totalSpentText}>
              Total Earnings :{' '}
              <AppText style={styles.totalSpentAmount}>$5000</AppText>
            </AppText>
            <AppText style={styles.currentBalanceText}>
              Current Balance :{' '}
              <AppText style={styles.currentBalanceAmount}>$5000</AppText>
            </AppText>
            <Buttons
              buttonStyle={styles.withdrawButton}
              title="Withdraw"
              buttonTextStyle={styles.withdrawButtonText}
              onPress={() => { setPayModal(true) }}
            />
          </View>
          <VectorIcon
            name="right"
            icon="AntDesign"
            color={Colors.textAppColor}
            size={SF(18)}
          />
        </TouchableOpacity>

        <View style={styles.transactionHistoryContainer}>
          <AppText style={styles.transactionHistoryText}>Transaction History</AppText>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.PAY_HISTORY_SEARCH)}
              style={styles.iconSpacing}
            >
              <Image source={imagePaths.search_h} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsVisibleModal(true)}
              style={styles.iconSpacing}
            >
              <Image source={imagePaths.filter_h} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          data={paymentData}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <PaymentHistoryItem item={item} />}
          keyExtractor={(item, index) => item.name + index}
          removeClippedSubviews={false}
        />
      </View>
    </Container>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(30),
  },
  container: {
    paddingHorizontal: SW(25),
    paddingTop: SH(20),
  },
  totalSpentContainer: {
    backgroundColor: Colors.themelight,
    flexDirection: 'row',
    padding: SW(12),
    justifyContent: 'space-between',
    marginBottom: SH(30),
    borderRadius: SW(10),
    alignItems: 'center',
  },
  totalSpentText: {
    fontFamily: Fonts.REGULAR,
    fontSize: SF(16),
    color: Colors.textAppColor,
  },
  totalSpentAmount: {
    color: Colors.themeColor,
    fontFamily: Fonts.BOLD,
    fontSize: SF(16),
  },
  currentBalanceText: {
    fontFamily: Fonts.REGULAR,
    fontSize: SF(16),
    color: Colors.textAppColor,
    marginTop: SH(10),
  },
  currentBalanceAmount: {
    color: Colors.black,
    fontFamily: Fonts.BOLD,
    fontSize: SF(16),
  },
  withdrawButton: {
    width: '65%',
    height: SH(34),
    marginTop: SH(15),
    borderRadius: SW(7),
  },
  withdrawButtonText: {
    fontSize: SF(16),
  },
  transactionHistoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: SW(12),
    justifyContent: 'space-between',
    marginBottom: SH(25),
    borderRadius: SW(10),
  },
  transactionHistoryText: {
    color: Colors.textAppColor,
    fontFamily: Fonts.BOLD,
    fontSize: SF(16),
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: SW(10),
  },
  icon: {
    width: SW(35),
    height: SW(35),
  },
  separator: {
    height: SH(15),
  },
  flatListContent: {
    paddingBottom: SH(230),
  },
});
