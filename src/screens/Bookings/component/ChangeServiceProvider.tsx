import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Colors, Fonts, SF, SH, SW } from '../../../utils';
import { AppText, Buttons, Divider, Spacing, UserprofileView, VectoreIcons } from '../../../component';
import { useNavigation } from '@react-navigation/native';
import imagePaths from '../../../assets/images';

// Interface for service provider item props
interface ServiceProviderItemProps {
  image: any;
  name: string;
  job: string;
  onSelect: () => void;
  isSelected: boolean;
}

// Common component for service provider item
const ServiceProviderItem: React.FC<ServiceProviderItemProps> = ({ image, name, job, onSelect, isSelected }) => (
  <>
    <TouchableOpacity style={styles.itemContainer} onPress={onSelect}>
      <VectoreIcons
        name={isSelected ? 'radio-button-on' : 'radio-button-off'}
        icon="Ionicons"
        size={SF(22)}
        color={Colors.themeColor}
        style={styles.checkbox}
      />
      <Spacing space={SW(7)} horizontal />
      <UserprofileView imageSource={image} height={SF(67)} width={SF(67)} />
      <View style={styles.textContainer}>
        <AppText style={styles.nameText}>{name}</AppText>
        <AppText style={styles.jobText}>{job}</AppText>
      </View>
    </TouchableOpacity>
    <Divider color='#DCDCDC' contStyle={{ marginTop: SH(10), marginBottom: SH(8) }} />
  </>
);

// Interface for ChangeServiceProvider props
type ChangeServiceProviderProps = {
  modalVisible: boolean;
  closeModal: () => void;
};

// Change Service Provider Component
const ChangeServiceProvider: React.FC<ChangeServiceProviderProps> = ({ modalVisible, closeModal }) => {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);

  const serviceProviders = [
    {
      id: 1, image: imagePaths.user, name: 'Dinesh D', job: 'House Cleaning'
    },
    { id: 2, image: imagePaths.user0, name: 'Karthick G', job: 'House Cleaning' },
    { id: 3, image: imagePaths.user1, name: 'Dinesh D', job: 'House Cleaning' },
    { id: 4, image: imagePaths.user2, name: 'Ninesh D', job: 'House Cleaning' },
  ];

  

  const renderItem = ({ item, index }: { item: typeof serviceProviders[0]; index: number }) => (
    <ServiceProviderItem
      image={item.image}
      name={item.name}
      job={item.job}
      onSelect={() => setSelectedIndex(index === selectedIndex ? null : index)}
      isSelected={index === selectedIndex}
    />
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalView}>
        <View style={styles.mainView}>
          <View style={styles.modalBar} />
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <VectoreIcons
              icon="MaterialCommunityIcons"
              name="close"
              color={Colors.themeColor}
              size={SF(24)}
            />
          </TouchableOpacity>
          <FlatList
            data={serviceProviders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
          <Buttons
            onPress={closeModal}
            title="Change"
            buttonStyle={styles.changeButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ChangeServiceProvider;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#00000050',
    justifyContent: 'center',
    paddingTop: '60%'
  },
  mainView: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: SF(20),
    borderTopRightRadius: SF(20),
    paddingVertical: SH(10),
    flex: 1,
  },
  modalBar: {
    backgroundColor: '#D3D3D3',
    height: SF(6),
    width: SW(60),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: SH(7)
  },
  closeButton: {
    padding: 10,
    alignSelf: 'flex-end',
    marginRight: 15
  },
  list: {
    flexGrow: 0,
  },
  listContent: {
    paddingHorizontal: SW(20),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SH(10),
  },
  checkbox: {
    marginRight: SW(10),
  },
  textContainer: {
    flex: 1,
    marginLeft: SW(15)
  },
  nameText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(16),
    color: Colors.textAppColor,
  },
  jobText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: SF(14),
    color: Colors.textAppColor,
    marginTop: 4
  },
  changeButton: {
    backgroundColor: Colors.themeColor,
    borderRadius: SF(10),
    paddingVertical: SH(12),
    marginTop: SH(20),
    alignSelf: 'center',
    height: SF(44),
    width: '82%'
  },
});