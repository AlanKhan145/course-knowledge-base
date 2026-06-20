# Push Notifications Setup and First Steps

## Overview
This lecture introduces Firebase Cloud Messaging (FCM) for sending push notifications to users of the chat app. You will enable FCM in the Firebase console and add the `firebase_messaging` package to the Flutter project. The lecture explains the difference between foreground, background, and terminated app notification handling.

## Key Points
- Firebase Cloud Messaging (FCM) is Firebase's cross-platform push notification service
- Add `firebase_messaging: ^14.0.0` to `pubspec.yaml` and run `flutter pub get`
- FCM uses device tokens (registration tokens) to uniquely identify each app installation
- Push notifications can be sent to specific devices (by token), topics, or user segments
- There are three notification states: foreground (app open), background (app minimized), terminated (app closed)

## Tips
- Enable Firebase Cloud Messaging in the Firebase console — it is enabled by default for new projects
- iOS requires an APNs (Apple Push Notification service) key configured in the Firebase console under Project Settings > Cloud Messaging
- Android requires no special console setup beyond enabling FCM, but the device must have Google Play Services
- The `firebase_messaging` package handles foreground, background, and terminated notifications differently — each requires separate handling code

## Notes
FCM is free to use with no message volume limits on the Spark plan. On iOS, push notifications require explicit user permission before they can be received — this is handled by calling `requestPermission()`. Android 13+ also requires the `POST_NOTIFICATIONS` runtime permission for showing notification banners. Background message handling on Android requires a top-level Dart function annotated with `@pragma('vm:entry-point')`.

## Summary
Firebase Cloud Messaging is set up by adding the `firebase_messaging` package and enabling FCM in the Firebase console, enabling push notification delivery to all platforms.
