# Installing and Configuring the Google Maps Package

## Overview
This lecture covers the installation and native configuration of the `google_maps_flutter` package, which provides an interactive `GoogleMap` widget for embedding live, pannable, and zoomable maps directly inside Flutter screens. Like the `location` package, this requires both a `pubspec.yaml` dependency entry and Android/iOS native configuration. The same Google API key used for the Static Maps and Geocoding APIs is reused here.

## Key Points
- Add `google_maps_flutter: ^2.0.0` (or latest) to `pubspec.yaml`
- On Android, the API key must be in `AndroidManifest.xml` as a `<meta-data>` tag with `com.google.android.geo.API_KEY`
- On iOS, the API key is passed to `GMSServices.provideAPIKey("YOUR_KEY")` in `AppDelegate.swift`
- The Android minimum SDK version must be set to at least 20 in `android/app/build.gradle`

## Tips
- The `google_maps_flutter` package renders using native platform views, so it may have minor rendering quirks with Flutter overlays on some devices
- On Android emulators, ensure "Google Play" is enabled on the emulator image for maps to render correctly
- Use the same API key as configured for Static Maps and Geocoding to minimize Cloud Console management overhead

## Notes
The `google_maps_flutter` package embeds a native Android `MapView` or iOS `MKMapView` (with Google Maps SDK) inside the Flutter widget tree via platform channels. This makes it highly performant but also more complex to configure than pure-Dart packages. The iOS setup additionally requires CocoaPods to be installed and `pod install` to be run in the `ios/` directory after adding the dependency.

## Summary
`google_maps_flutter` is installed and configured with the API key in both Android and iOS native files, enabling the use of the interactive `GoogleMap` widget in Flutter screens.
