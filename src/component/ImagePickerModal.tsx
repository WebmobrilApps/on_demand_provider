import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Divider from './Divider';
import { Fonts, requestCameraAccess } from '../utils';
import AppText from './AppText';

type Props = {
  visible: boolean;
  onClose: () => void;
  onImageSelected: (image: any) => void;
};

const ImagePickerModal: React.FC<Props> = async({ visible, onClose, onImageSelected }) => {
  const openCamera = async () => {

    const hasPermission = await requestCameraAccess();
console.log('hasPermissionhasPermissionhasPermission',hasPermission);

    if (!hasPermission) return;

    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      onImageSelected(image);
    } catch (error) {
      console.warn('Camera error:', error);
    } finally {
      onClose();
    }
  };

  const openGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      onImageSelected(image);
    } catch (error) {
      console.warn('Gallery error:', error);
    } finally {
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View style={styles.modalContent}>
          <AppText style={styles.title}>Select Image</AppText>
          <Divider height={0.5} color='#7F7F7F' />
          <TouchableOpacity style={styles.button} onPress={openCamera}>
            <AppText style={styles.buttonText}>📷 Capture Image</AppText>
          </TouchableOpacity>
          <Divider height={0.5} color='#7F7F7F' />
          <TouchableOpacity style={[styles.button, { marginBottom: 8 }]} onPress={openGallery}>
            <AppText style={styles.buttonText}>🖼️ Upload from Gallery</AppText>
          </TouchableOpacity>
          <Divider height={0.5} color='#7F7F7F' />
        </View>
        <View style={styles.cancelButtonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <AppText style={styles.cancelText}>Cancel</AppText>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cancelButtonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 12,
    fontFamily: Fonts.MEDIUM,
    marginBottom: 15,
    color: '#7F7F7F'
  },
  button: {
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.MEDIUM
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    color: 'red',
    fontFamily: Fonts.MEDIUM
  },
});

export default ImagePickerModal;
