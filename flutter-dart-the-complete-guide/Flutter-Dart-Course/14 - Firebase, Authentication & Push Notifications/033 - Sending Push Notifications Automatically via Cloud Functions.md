# Sending Push Notifications Automatically via Cloud Functions

## Overview
This lecture implements automatic push notifications using Firebase Cloud Functions, which trigger a notification send whenever a new message document is created in Firestore. Cloud Functions run server-side Node.js code in response to Firebase events, eliminating the need for a custom backend server. This creates a fully automated notification pipeline without any client-side notification logic.

## Key Points
- Firebase Cloud Functions are server-side functions triggered by Firebase events (Firestore writes, Auth events, HTTP requests, etc.)
- Use the `functions.firestore.document('chat/{messageId}').onCreate()` trigger to react to new messages
- Send notifications via the Firebase Admin SDK's `messaging().send()` method inside the Cloud Function
- Deploy functions with `firebase deploy --only functions` from the terminal
- The Blaze (pay-as-you-go) plan is required for Cloud Functions that make external network requests

## Code Example
```javascript
// functions/index.js (Node.js — not Dart)
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendChatNotification = functions.firestore
  .document('chat/{messageId}')
  .onCreate(async (snapshot, context) => {
    const newMessage = snapshot.data();

    const notificationPayload = {
      notification: {
        title: newMessage['username'],
        body: newMessage['text'],
      },
      topic: 'chat',
    };

    try {
      await admin.messaging().send(notificationPayload);
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }

    return null;
  });
```

## Notes
Cloud Functions for Firebase use Node.js (JavaScript/TypeScript), not Dart — this is one of the few parts of a Flutter/Firebase project that requires JavaScript knowledge. The `admin.messaging().send()` call sends to the `chat` topic, which all subscribed devices receive. The function automatically scales and runs in Google's cloud without any server management. Remember to run `npm install` in the `functions/` directory before deploying.

## Summary
Firebase Cloud Functions enable automatic push notifications on new Firestore messages by triggering server-side Node.js code that sends FCM topic notifications via the Admin SDK.
