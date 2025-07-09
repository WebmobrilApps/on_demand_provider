import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg from 'react-native-svg';
import {
  VictoryArea,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { AppHeader, AppText, Buttons, Container, DropdownComponent, Spacing, VectoreIcons } from '../../component';
import { useNavigation } from '@react-navigation/native';
import OnlinePaymentModal from './component/OnlinePaymentModal';

const { width } = Dimensions.get('window');

interface ChartDataPoint {
  x: string;
  y: number;
}

const data: ChartDataPoint[] = [
  { x: 'Jan', y: 7 },
  { x: 'Feb', y: 20 },
  { x: 'Mar', y: 31 },
  { x: 'Apr', y: 5 },
  { x: 'May', y: 54 },
  { x: 'Jun', y: 12 },
  { x: 'Jul', y: 0 },
  { x: 'Aug', y: 0 },
];

const data1 = [
  { label: 'This week 1', value: '1' },
  { label: 'This week 2', value: '2' },
  { label: 'This week 3', value: '3' },
  { label: 'This week 4', value: '4' },
];

const VictoryChartExample: React.FC = () => {
  const navigation = useNavigation<any>();
  const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [payModal, setPayModal] = useState(false);
  return (
    <Container style={styles.container}>
      <OnlinePaymentModal
        visible={payModal}
        onClose={() => { setPayModal(false) }}
      />
      <AppHeader
        headerTitle="Payments"
        onPress={() => navigation.goBack()}
        Iconname="arrowleft"
        rightOnPress={() => { }}
        headerStyle={styles.header}
      />

      <View style={styles.balanceContainer}>
        <View>
          <AppText style={styles.currentbal}>Current Balance :</AppText>
          <AppText style={styles.currentbal1}>₹25,000</AppText>
        </View>
        <Buttons buttonStyle={styles.withdrawButton} title="Withdraw" onPress={() => { setPayModal(true) }}/>
      </View>

      <Spacing space={SH(40)} />
      <AppText style={styles.weeklytext}>This Week Earnings</AppText>
      <AppText style={styles.weekprice}>₹15,000</AppText>

      <Svg width={width} height={350}>
        <VictoryChart
          width={width - 40}
          height={350}
          theme={VictoryTheme.material}
          domainPadding={{ x: 0, y: 5 }}
          padding={{ top: 40, bottom: 60, left: 50, right: 20 }}
          standalone={false}
        >
          <VictoryAxis
            //@ts-ignore
            style={styles.axisStyle}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x, index) => daysArray[index] || ''}
            tickValues={[0, 10, 20, 30, 40, 50, 60]}
            //@ts-ignore
            style={styles.axisStyle}
          />
          <VictoryArea
            interpolation="natural"
            data={data}
            style={{
              data: {
                fill: '#ffc0c1',
                stroke: '#f78fb3',
                strokeWidth: 0,
              },
            }}
          />
        </VictoryChart>
      </Svg>

      <DropdownComponent
        dropdown={styles.dropdown}
        data={data1}
        placeholderText="Select Report"
        renderRightIcon={
          <VectoreIcons icon="Feather" name="chevron-down" size={SW(20)} />
        }
      />
    </Container>
  );
};

export default VictoryChartExample;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.bgwhite,
    paddingHorizontal: SW(10),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SW(20),
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SH(30),
    marginHorizontal: SW(10),
  },
  currentbal: {
    fontSize: SF(16),
    fontFamily: Fonts.REGULAR,
  },
  currentbal1: {
    fontSize: SF(16),
    fontFamily: Fonts.BOLD,
  },
  withdrawButton: {
    width: '45%',
    borderRadius: 7,
  },
  weeklytext: {
    fontSize: SF(16),
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
  },
  weekprice: {
    fontSize: SF(32),
    fontFamily: Fonts.BOLD,
    color: Colors.themeColor,
    textAlign: 'center',
    marginTop: SH(10),
  },
  axisStyle: {
    //@ts-ignore
    axis: { stroke: '#ccc' },
    axisLabel: { stroke: 'none' },
    grid: { stroke: 'transparent' },
    ticks: { stroke: 'transparent' },
    tickLabels: { fontSize: 12 },
  },
  dropdown: {
    width: '50%',
    alignSelf: 'center',
    marginTop: SH(10),
  },
});
