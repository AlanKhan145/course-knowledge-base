# Sending Data to Firestore

## Overview
This lecture covers writing data to Cloud Firestore by calling `set()` or `add()` on a Firestore collection or document reference. You will learn the difference between these two methods and when to use each. The focus is on storing user data (username and image URL) to Firestore immediately after successful signup.

## Key Points
- `FirebaseFirestore.instance.collection('collectionName')` returns a `CollectionReference`
- `.doc('documentId').set({...})` writes data to a specific document, creating or overwriting it
- `.add({...})` adds a new document with an auto-generated ID to a collection
- Both `set()` and `add()` return `Future<void>` and should be awaited
- Data is passed as a `Map<String, dynamic>` matching Firestore's key-value document structure

## Code Example
```dart
import 'package:cloud_firestore/cloud_firestore.dart';

// After successful signup and image upload:
await FirebaseFirestore.instance
    .collection('users')
    .doc(userCredentials.user!.uid)
    .set({
  'username': _enteredUsername,
  'email': _enteredEmail,
  'image_url': imageUrl,
});

// Alternative: auto-generated document ID
await FirebaseFirestore.instance
    .collection('messages')
    .add({
  'text': 'Hello world',
  'createdAt': Timestamp.now(),
  'userId': FirebaseAuth.instance.currentUser!.uid,
});
```

## Notes
Using the user's UID as the document ID in the `users` collection allows efficient lookups without querying by field value. Firestore `Timestamp.now()` stores server-side timestamps correctly across time zones; prefer it over Dart's `DateTime.now()` for consistency. After calling `set()`, the data is immediately visible in the Firebase console under Firestore Database.

## Summary
Writing to Firestore is done via `.collection().doc().set()` for known IDs or `.collection().add()` for auto-generated IDs, passing data as a `Map<String, dynamic>`.
