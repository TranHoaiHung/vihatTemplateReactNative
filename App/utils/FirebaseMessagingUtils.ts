import messaging from '@react-native-firebase/messaging';
import { onMessageReceived } from './PushNotificationUtils';
import notifee, { EventType } from '@notifee/react-native';

const FirebaseMessagingUtils = {

    unsubscribe: () => {
        return messaging().onMessage(async remoteMessage => {
            console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
            onMessageReceived(remoteMessage);
        })
    },
    subscribeMessageEvent: () => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('[FCM] Notification caused app to open from background state:', remoteMessage.notification);
        });

        // Check whether an initial notification is available
        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if(remoteMessage) {
                console.log('[FCM] Notification caused app to open from quit stae', remoteMessage.notification);
            }
        });

        // Local notifee notification
        notifee.onForegroundEvent(({type, detail}) => {
            if (type === EventType.PRESS) {
                console.log('[FCM] Pressed notification', detail.notification);
            }
        });
    }
};

export default FirebaseMessagingUtils;