# Image Upload Setup and First Steps

## Overview
This lecture sets up the foundation for image uploading by adding the required packages and planning the upload flow. You will add `image_picker` and `firebase_storage` to the project and understand how images flow from the device camera/gallery through Flutter to Firebase Storage. The lecture also covers required platform-specific permissions for accessing the camera and photo library.

## Key Points
- Add `image_picker: ^1.0.0` and `firebase_storage: ^11.0.0` to `pubspec.yaml`
- iOS requires `NSCameraUsageDescription` and `NSPhotoLibraryUsageDescription` keys in `Info.plist`
- Android requires `READ_EXTERNAL_STORAGE` permission in `AndroidManifest.xml` for older API levels
- The upload flow: pick image from device → store as `XFile` → convert to bytes or `File` → upload to Firebase Storage
- Firebase Storage references are created with `FirebaseStorage.instance.ref().child('path/filename.jpg')`

## Code Example
```dart
// pubspec.yaml dependencies:
// image_picker: ^1.0.4
// firebase_storage: ^11.2.6

import 'package:firebase_storage/firebase_storage.dart';
import 'package:image_picker/image_picker.dart';

// Create a storage reference:
final storageRef = FirebaseStorage.instance
    .ref()
    .child('user_images')
    .child('${user.uid}.jpg');

// Upload a file:
await storageRef.putFile(imageFile);

// Get the download URL after upload:
final imageUrl = await storageRef.getDownloadURL();
```

## Notes
The `image_picker` package returns an `XFile` object, which must be converted to a `dart:io` `File` or read as bytes before uploading to Firebase Storage. iOS simulator does not support camera access — test on a real device or use the gallery picker. Always request storage/camera permissions before attempting to access device media.

## Summary
Setting up image upload requires the `image_picker` and `firebase_storage` packages along with platform-specific permission configurations.
