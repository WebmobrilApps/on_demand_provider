import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import {Platform, Alert} from 'react-native';

export const requestCameraAccess = async (): Promise<boolean> => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.CAMERA
      : PERMISSIONS.ANDROID.CAMERA;

  let result = await check(permission);

  if (result === RESULTS.GRANTED) return true;

  // Ask the user if not already granted
  result = await request(permission);

  if (result === RESULTS.GRANTED) {
    return true;
  } else if (result === RESULTS.BLOCKED) {
    Alert.alert(
      'Permission Blocked',
      'Camera permission is blocked. Please enable it from settings.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Open Settings', onPress: () => openSettings()},
      ],
    );
  } else {
    Alert.alert(
      'Permission Denied',
      'Camera access is required to take pictures.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Try Again', onPress: () => requestCameraAccess()},
      ],
    );
  }

  return false;
};
