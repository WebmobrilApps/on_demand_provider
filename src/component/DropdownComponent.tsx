import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, TextStyle, Image, ViewStyle } from 'react-native';
import { Dropdown, } from 'react-native-element-dropdown';
import { Colors, Fonts, imagePaths, SF, SH, SW } from '../utils';
import AppText from './AppText';

interface DropdownComponentProps {
  data: any;
  dropdown?: ViewStyle;
  placeholderStyle?: TextStyle;
  placeholderText?: string;
  renderRightIcon?: any;
  isDisable?: boolean;
  selectedvalue?: Object | null;
  selectedTextStyle?: TextStyle
}

const DropdownComponent: FC<DropdownComponentProps> = ({ data, dropdown = {}, placeholderStyle = {}, selectedTextStyle = {}, placeholderText = "Select value", renderRightIcon, isDisable = false, selectedvalue = null }) => {
  const [value, setValue] = useState(null);

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <AppText style={[styles.textItem]}>{item.label}</AppText>
      </View>
    );
  };

  return (
    <Dropdown
      style={[styles.dropdown, dropdown]}
      placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
      selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      containerStyle={styles.dropdownContainer}
      //@ts-ignore
      selectedTextStyle={placeholderStyle}
      iconColor={Colors.themeColor}
      renderRightIcon={() => (
        renderRightIcon ? renderRightIcon : <Image source={imagePaths.down_icon} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
      )}
      data={data}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholderText}
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: SH(43),
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.textAppColor,
    paddingLeft: SF(20),
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: SF(12),
    fontFamily: Fonts.REGULAR,
    color: Colors.textAppColor
  },
  placeholderStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.REGULAR,
    color: '#7F7F7F'
  },
  selectedTextStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.REGULAR,
    color: Colors.textAppColor
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: SH(42),
    fontSize: SF(16),
    color: Colors.textAppColor
  },
  dropdownContainer: {
    borderRadius: SW(10),
    marginTop: SH(6),
  }
});