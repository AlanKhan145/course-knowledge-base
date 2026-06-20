# Testing Push Notifications

## Overview
This lecture demonstrates how to send test push notifications using the Firebase console's Cloud Messaging composer. You will use the device's FCM token obtained in the previous lecture to target a specific device and verify that notifications are received in all three app states. This validates the FCM setup before implementing automated notification logic.

## Key Points
- Navigate to Firebase console > Engage > Messaging > "Send your first message" to use the notification composer
- Paste the device FCM token into the "Send test message" dialog to target a specific device
- Test notifications in all three states: foreground (app open), background (app minimized), terminated (app closed)
- Foreground notifications require `FirebaseMessaging.onMessage` listener to handle and display them
- Background and terminated notifications are handled by the system and shown automatically as banners

## Tips
- Background and terminated notification taps can be handled with `FirebaseMessaging.onMessageOpenedApp` and `FirebaseMessaging.instance.getInitialMessage()`
- Use the `flutter_local_notifications` package to show custom notification banners for foreground messages
- FCM notifications may take 10-30 seconds to arrive on the device — be patient when testing
- Emulators may not receive FCM notifications — always test on a real device

## Notes
When the app is in the foreground, FCM does not automatically display a notification banner — you must listen to `FirebaseMessaging.onMessage` and show a local notification manually. The Firebase console's test message tool is only for development — production notifications are sent programmatically via the FCM REST API or Cloud Functions. Always test on both Android and iOS as notification behavior differs between platforms.

## Summary
Test push notifications using the Firebase console's messaging composer with the device FCM token, verifying delivery in foreground, background, and terminated app states.
