// src/components/ToastService.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Colors, Fonts, SF, boxShadow } from '../utils';

type ToastType = 'success' | 'error' | 'info';

type CustomToastProps = {
  text1: string;
  text2: string;
  props: {
    customOnPress?: () => void;
  };
};

const ToastBox = ({ text1, text2, type, props }: CustomToastProps & { type: ToastType }) => {
  const { customOnPress } = props;

  const colorMap = {
    success: 'green',
    error: 'red',
    info: '#ffc107',
  };

  return (
    <View style={[styles.toastContainer, { borderLeftColor: colorMap[type] }, boxShadow]}>
      <Text style={styles.textTitle}>{text1}</Text>
      <Text style={styles.textMessage}>{text2}</Text>
      {customOnPress && (
        <TouchableOpacity onPress={customOnPress}>
          <Text style={styles.okButton}>OK</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const toastConfig = {
  success: ({ text1, text2, props }: any) => (
    <ToastBox text1={text1} text2={text2} props={props} type="success" />
  ),
  error: ({ text1, text2, props }: any) => (
    <ToastBox text1={text1} text2={text2} props={props} type="error" />
  ),
  info: ({ text1, text2, props }: any) => (
    <ToastBox text1={text1} text2={text2} props={props} type="info" />
  ),
};

export const showAppToast = ({
  title,
  message,
  type = 'info',
  timeout = 4000,
  onOkPress,
}: {
  title: string;
  message: string;
  type?: ToastType;
  timeout?: number;
  onOkPress?: () => void;
}) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    visibilityTime: timeout,
    autoHide: !onOkPress,
    props: {
      customOnPress: onOkPress,
    },
  });
};

// @ts-ignore
export const ToastService = () => <Toast config={toastConfig} />;

const styles = StyleSheet.create({
  toastContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderLeftWidth: 5,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 8,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTitle: {
    color: Colors.black,
    fontSize: SF(14),
    fontFamily: Fonts.PlusJakartaSans_EXTRA_BOLD,
  },
  textMessage: {
    color: Colors.textAppColor,
    fontSize: SF(10),
    fontFamily: Fonts.PlusJakartaSans_MEDIUM,
  },
  okButton: {
    color: 'blue',
    marginTop: 8,
  },
});
