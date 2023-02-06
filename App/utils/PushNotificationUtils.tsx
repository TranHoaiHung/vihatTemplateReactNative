import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import { Platform } from "react-native";
import notifee, { AndroidImportance, AndroidStyle, AndroidVisibility } from '@notifee/react-native';

export const onMessageReceived = async (
    message: FirebaseMessagingTypes.RemoteMessage
) => {

    // Request permissions (required for iOS)
    if (Platform.OS === 'ios') {
        await notifee.requestPermission();
    }

    // Create a channel (required for Android)
    if (Platform.OS === 'android') {
        await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            lights: false,
            vibration: true,
            importance: AndroidImportance.HIGH,
            badge: true,
            visibility: AndroidVisibility.PRIVATE,
        });
    }

    // Display a notification
    await notifee.displayNotification({
        title: message.notification?.title,
        body: message.notification?.body,
        android: {
            channelId: 'default',
            visibility: AndroidVisibility.PRIVATE,
            largeIcon: message.notification?.android?.imageUrl,
            style: message.notification?.android?.imageUrl
                ? {
                    type: AndroidStyle.BIGPICTURE,
                    picture: message.notification?.android?.imageUrl,
                    largeIcon: null,
                }
                : undefined,
        },
        ios: {
            categoryId: 'default',
            foregroundPresentationOptions: {
                alert: true,
                badge: true,
                sound: true,
            },
            critical: true,
        },
        data: message.data,
    });
};