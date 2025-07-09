// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import { Calendar } from 'react-native-big-calendar';
// import moment from 'moment';
// import { SF, SH, SW } from '../../utils';

// // Dummy utils — replace with your real utils if needed
// // const SF = (size: number) => size;
// // const SH = (size: number) => size;
// // const SW = (size: number) => size;

// const CalenderView = () => {
//   const [viewMode, setViewMode] = useState<'day' | 'week' | '3days' | 'month'>('week');

//   // Using moment to build times
//   const now = moment();
//   const events = [
//     {
//       title: 'Morning Meeting',
//       start: moment(now).hour(9).minute(0).toDate(),
//       end: moment(now).hour(10).minute(0).toDate(),
//     },
//     {
//       title: 'Design Review',
//       start: moment(now).hour(11).minute(30).toDate(),
//       end: moment(now).hour(12).minute(30).toDate(),
//     },
//     {
//       title: 'Lunch Break',
//       start: moment(now).hour(13).minute(0).toDate(),
//       end: moment(now).hour(14).minute(0).toDate(),
//     },
//     {
//       title: 'Client Call',
//       start: moment(now).hour(15).minute(0).toDate(),
//       end: moment(now).hour(15).minute(45).toDate(),
//     },
//     {
//       title: 'Team Sync Tomorrow',
//       start: moment(now).add(1, 'day').hour(10).minute(0).toDate(),
//       end: moment(now).add(1, 'day').hour(11).minute(0).toDate(),
//     },
//     {
//       title: 'Project Deadline',
//       start: moment(now).add(3, 'days').startOf('day').toDate(),
//       end: moment(now).add(3, 'days').endOf('day').toDate(),
//     },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <View style={styles.container}>
//         <View style={styles.tabContainer}>
//           {['day', 'week', '3days', 'month'].map((mode) => (
//             <TouchableOpacity key={mode} onPress={() => setViewMode(mode as any)}>
//               <Text style={[styles.tab, viewMode === mode && styles.activeTab]}>
//                 {mode.toUpperCase()}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <Calendar
//           events={events}
//           height={600}
//           mode={viewMode}
//           swipeEnabled
//           showTime
//           scrollOffsetMinutes={moment().hour() * 60}
//           eventCellStyle={{ backgroundColor: '#5A8DEE', borderRadius: 8 }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CalenderView;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: SH(20),
//     backgroundColor: '#fff',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: SH(10),
//   },
//   tab: {
//     paddingVertical: SH(6),
//     paddingHorizontal: SW(12),
//     fontSize: SF(14),
//     color: '#666',
//     borderBottomWidth: 2,
//     borderBottomColor: 'transparent',
//   },
//   activeTab: {
//     color: '#000',
//     fontWeight: 'bold',
//     borderBottomColor: '#5A8DEE',
//   },
// });
import { View, Text } from 'react-native'
import React from 'react'

export default function CalenderView() {
  return (
    <View>
      <Text>CalenderView</Text>
    </View>
  )
}