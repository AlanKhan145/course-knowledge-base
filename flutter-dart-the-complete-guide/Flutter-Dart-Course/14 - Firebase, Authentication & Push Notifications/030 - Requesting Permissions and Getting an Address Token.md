# Requesting Permissions and Getting an Address Token

## Overview
This lecture implements permission requests for push notifications and retrieves the FCM device token that uniquely identifies the app installation. On iOS, calling `requestPermission()` triggers the native system dialog asking the user to allow notifications. The FCM token is essential for sending targeted push notifications to specific devices.

## Key Points
- Call `FirebaseMessaging.instance.requestPermission()` to request notification permissions (required on iOS, optional on Android 13+)
- `requestPermission()` returns a `NotificationSettings` object with the `authorizationStatus` field
- Get the device's FCM token with `await FirebaseMessaging.instance.getToken()`
- The token is a long string that uniquely identifies the app on a specific device
- Tokens can change (e.g., app reinstall) — use `onTokenRefresh` stream to handle token updates

## Code Example
```dart
import 'package:firebase_messaging/firebase_messaging.dart';

class _ChatScreenState extends State<ChatScreen> {
  void setupPushNotifications() async {
    final fcmMessaging = FirebaseMessaging.instance;

    // Request permission (required on iOS)
    final settings = await fcmMessaging.requestPermission();

    if (settings.authorizationStatus == AuthorizationStatus.granted) {
      print('User granted permission');
    } else if (settings.authorizationStatus == AuthorizationStatus.provisional) {
      print('User granted provisional permission');
    } else {
      print('User declined or has not accepted permission');
      return;
    }

    // Get FCM token
    final token = await fcmMessaging.getToken();
    print('FCM Token: $token');

    // Optional: store token in Firestore for server-side targeting
    // await FirebaseFirestore.instance
    //     .collection('users')
    //     .doc(FirebaseAuth.instance.currentUser!.uid)
    //     .update({'fcmToken': token});
  }

  @override
  void initState() {
    super.initState();
    setupPushNotifications();
  }
}
```

## Notes
The FCM token is per-device, per-app-installation — uninstalling and reinstalling the app generates a new token. `AuthorizationStatus.provisional` (iOS only) means notifications are delivered quietly to the notification center without alerts or sounds. Storing the FCM token in Firestore alongside user data enables sending targeted notifications to specific users from your server or Cloud Functions.

## Summary
Push notifications require requesting user permission via `requestPermission()` and obtaining a unique device token via `getToken()` from Firebase Messaging.
