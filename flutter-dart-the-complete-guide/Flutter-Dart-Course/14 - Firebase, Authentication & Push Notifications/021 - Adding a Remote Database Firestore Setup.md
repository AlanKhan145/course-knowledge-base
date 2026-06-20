# Adding a Remote Database Firestore Setup

## Overview
This lecture introduces Cloud Firestore as the real-time NoSQL database for storing chat messages and user data. You will enable Firestore in the Firebase console, understand its document-collection data model, and add the `cloud_firestore` package to the Flutter project. Firestore differs from Firebase Realtime Database in its richer querying capabilities and offline support.

## Key Points
- Enable Cloud Firestore in the Firebase console and choose "Start in test mode" for development
- Firestore uses a document-collection hierarchy: databases contain collections, which contain documents
- Documents are key-value stores similar to JSON objects, supporting strings, numbers, booleans, arrays, maps, and timestamps
- Add `cloud_firestore: ^4.0.0` to `pubspec.yaml` and run `flutter pub get`
- Access Firestore via `FirebaseFirestore.instance` from the `cloud_firestore` package

## Tips
- Firestore "test mode" security rules allow all reads and writes for 30 days — tighten rules before production
- Collections and documents are created implicitly when you write data — no schema setup required
- Plan your data structure carefully: Firestore charges per read/write operation, so efficient modeling matters
- Use the Firebase console's Firestore data viewer to inspect and manually edit documents during development

## Notes
Firestore supports real-time listeners via `snapshots()` streams, making it ideal for chat applications where data changes frequently. Unlike SQL databases, Firestore has no joins — data that is queried together should be stored together. The `cloud_firestore` package provides both one-time reads (`get()`) and real-time stream listeners (`snapshots()`).

## Summary
Cloud Firestore is set up by enabling it in the Firebase console and adding the `cloud_firestore` package, providing a real-time NoSQL database for the chat app.
