# Publishing iOS and Android Apps

## Overview
This lecture walks through the end-to-end process of preparing and publishing a Flutter application to both the Google Play Store and the Apple App Store. It covers the required configurations, signing credentials, and submission steps unique to each platform. Understanding this process is essential for taking a Flutter app from development to production.

## Key Points
- Android publishing requires a signed APK or AAB (Android App Bundle) built with a keystore file
- iOS publishing requires an Apple Developer account, provisioning profiles, and code signing certificates
- The `flutter build appbundle` and `flutter build ipa` commands are used for release builds
- App metadata (icons, splash screens, bundle ID / package name) must be configured before submission
- Both stores require compliance with their content policies and review processes before an app goes live

## Code Example
```dart
// Example: Setting the app version in pubspec.yaml
// version: major.minor.patch+buildNumber
// version: 1.0.0+1

// Build a release Android App Bundle
// Run in terminal: flutter build appbundle --release

// Build a release iOS IPA
// Run in terminal: flutter build ipa --release

// Example: Updating the package name in AndroidManifest.xml
// Located at: android/app/src/main/AndroidManifest.xml
// <manifest xmlns:android="..." package="com.yourcompany.yourapp">

// Example: Updating the bundle identifier for iOS
// Located in: ios/Runner.xcodeproj or via Xcode
// PRODUCT_BUNDLE_IDENTIFIER = com.yourcompany.yourapp;
```

## Notes
Android signing requires generating a keystore with `keytool` and referencing it in `android/key.properties` — losing the keystore means you cannot publish updates to the same app listing. iOS publishing is more complex due to Apple's certificate and provisioning profile system, which is managed through Xcode and the Apple Developer portal. Both platforms require app icons at multiple resolutions, which can be generated using the `flutter_launcher_icons` package.

## Summary
Publishing a Flutter app to the Play Store and App Store requires platform-specific signing, configuration, and submission steps that must be completed before any users can download your app.
