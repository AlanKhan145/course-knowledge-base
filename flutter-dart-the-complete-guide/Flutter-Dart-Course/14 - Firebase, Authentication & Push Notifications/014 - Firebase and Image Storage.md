# Firebase and Image Storage

## Overview
This lecture introduces Firebase Storage as the solution for storing user-uploaded images, such as profile pictures. You will enable Firebase Storage in the Firebase console and understand how files are organized in storage buckets. The lecture explains the relationship between Firebase Storage and the `firebase_storage` Dart package.

## Key Points
- Firebase Storage is a cloud object storage service backed by Google Cloud Storage
- Files are organized in a hierarchical structure of buckets and folders (similar to a filesystem)
- Enable Firebase Storage in the Firebase console and choose a storage bucket location
- The default security rules must be updated to allow authenticated users to read/write
- The `firebase_storage` package (`flutter pub add firebase_storage`) is required to interact with Storage from Flutter

## Tips
- Choose a storage bucket region close to your users for lower latency
- Default Storage security rules deny all access — update them to: `allow read, write: if request.auth != null;` for auth-only access
- Firebase Storage charges are based on storage used and download bandwidth — the free Spark plan has generous limits for development
- Use organized paths like `user_images/{uid}.jpg` to keep the bucket structured

## Notes
Firebase Storage integrates with Firebase Authentication — security rules can reference `request.auth.uid` to ensure users can only access their own files. The `firebase_storage` package uses `FirebaseStorage.instance` to get a reference to your default storage bucket. Unlike Firestore (document-based), Storage is designed for binary data like images, videos, and audio files.

## Summary
Firebase Storage provides scalable cloud file storage for Flutter apps, with security rules that integrate directly with Firebase Authentication.
