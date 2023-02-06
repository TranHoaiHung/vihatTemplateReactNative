import messaging from '@react-native-firebase/messaging';
import moment from 'moment';

export const RequestFCMToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('[FCM] Token', fcmToken);
}

export const formatDateNow = (valueDate: string | number | Date) => {
    if (!valueDate) {
      return '';
    }
    return moment(valueDate).fromNow();
  };

