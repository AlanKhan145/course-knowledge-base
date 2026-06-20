# Working with Notification Topics

## Overview
This lecture explains FCM topics as a way to send notifications to groups of users who have subscribed to a named topic, rather than targeting individual device tokens. Topics are ideal for broadcasting messages to all chat users simultaneously. You will implement topic subscription on app startup so all users receive relevant notifications.

## Key Points
- Subscribe a device to a topic with `FirebaseMessaging.instance.subscribeToTopic('topicName')`
- Unsubscribe with `FirebaseMessaging.instance.unsubscribeFromTopic('topicName')`
- Topic names can only contain letters, numbers, hyphens, and underscores
- Send a notification to a topic from the Firebase console by specifying `/topics/topicName` as the target
- Topics are managed entirely by FCM — no Firestore or backend setup is needed to create them

## Code Example
```dart
import 'package:firebase_messaging/firebase_messaging.dart';

// Subscribe to a topic when the user enters the chat screen:
void setupPushNotifications() async {
  final fcmMessaging = FirebaseMessaging.instance;

  await fcmMessaging.requestPermission();

  // Subscribe all users to the 'chat' topic
  await fcmMessaging.subscribeToTopic('chat');

  print('Subscribed to chat topic');
}

// Unsubscribe when the user logs out:
void _logout() async {
  await FirebaseMessaging.instance.unsubscribeFromTopic('chat');
  await FirebaseAuth.instance.signOut();
}

// Send to topic via Firebase console target:
// Target: /topics/chat
// OR via FCM REST API:
// "to": "/topics/chat"
```

## Notes
Topic subscriptions are stored on the FCM server and persist across app restarts — you only need to call `subscribeToTopic()` once. However, it is safe to call it on every app launch since it is idempotent. Topics are a good fit for broadcast notifications (e.g., "new message in chat"), while individual tokens are better for user-specific notifications (e.g., "someone replied to your message").

## Summary
FCM topics allow broadcasting notifications to all subscribed devices with a single send operation, making them ideal for chat app-wide notifications without managing individual tokens.
