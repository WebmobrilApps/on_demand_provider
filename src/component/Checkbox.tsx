import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';

import { AppText, VectoreIcons } from '.';
import { Colors, SF, SW } from '../utils';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: number;
  color?: string;
  labelStyle?: TextStyle;
  lebelFontSize?: any,
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  size = 24,
  color = Colors.themeColor,
  lebelFontSize = SF(12),
  labelStyle = {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onChange(!checked)} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={[styles.container, { height: size, width: size, borderColor: color, borderRadius: 4, backgroundColor: checked ? Colors.themeColor : Colors.white }, styles.checkbox]}

      >
        {checked && <VectoreIcons
          icon='Feather'
          size={size - 6}
          color={Colors.bgwhite}
          name={'check'}
        />}
      </View>
      {label && <AppText style={[styles.label, labelStyle]}>{label}</AppText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    justifyContent: 'center',
  },
  checkbox: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginLeft: SW(15)
  },
});

export default Checkbox;
