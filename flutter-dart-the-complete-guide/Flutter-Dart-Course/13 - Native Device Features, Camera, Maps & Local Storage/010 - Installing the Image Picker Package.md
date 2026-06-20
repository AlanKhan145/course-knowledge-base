# Installing the Image Picker Package

## Overview
This lecture covers the installation and configuration of the `image_picker` Flutter package, which provides a cross-platform API for picking images from the gallery or taking new photos with the camera. Proper installation requires adding the dependency to `pubspec.yaml` and configuring native platform permissions on both Android and iOS. Without the permission configurations, the app will crash when attempting to access the camera or gallery.

## Key Points
- Add `image_picker: ^1.0.0` (or latest) to the `dependencies` section of `pubspec.yaml`
- On iOS, add `NSCameraUsageDescription` and `NSPhotoLibraryUsageDescription` keys to `ios/Runner/Info.plist`
- On Android, the package handles permissions internally for modern versions, but targeting SDK 33+ may require explicit `READ_MEDIA_IMAGES` permission in `AndroidManifest.xml`
- Run `flutter pub get` after modifying `pubspec.yaml` to download the package

## Tips
- Always check the `image_picker` package page on pub.dev for the latest setup instructions as they change between versions
- The iOS `Info.plist` permission strings are user-facing messages shown in the system permission dialog, so write them clearly
- Test camera and gallery features on a real physical device since emulators have limited camera simulation

## Notes
The `image_picker` package is a federated plugin, meaning it has separate implementations for Android, iOS, web, etc., all unified under a single Dart API. Native permission configuration is a common source of app crashes for Flutter beginners — always consult the package README carefully. Running on an iOS simulator requires Xcode to be installed and configured even if you are primarily developing on Windows via a Mac build machine.

## Summary
Installing the `image_picker` package requires both adding the Dart dependency and configuring native platform permissions on Android and iOS before the camera and gallery APIs can be used.
