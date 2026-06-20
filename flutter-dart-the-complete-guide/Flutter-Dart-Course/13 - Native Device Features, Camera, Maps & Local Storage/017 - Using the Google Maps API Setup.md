# Using the Google Maps API Setup

## Overview
This lecture walks through the process of setting up a Google Maps API key in the Google Cloud Console, which is required for both the Geocoding API (converting coordinates to addresses) and the Maps Static API (generating map preview images). The API key must be restricted and embedded in the native platform configuration files for Android and iOS. This setup is a prerequisite for all map-related features in the module.

## Key Points
- Create a project in the Google Cloud Console at console.cloud.google.com
- Enable the "Maps SDK for Android", "Maps SDK for iOS", "Geocoding API", and "Maps Static API" services
- Generate an API key and optionally restrict it to specific APIs and app identifiers for security
- Add the API key to `android/app/src/main/AndroidManifest.xml` and `ios/Runner/AppDelegate.swift`

## Tips
- Google requires a billing account to be set up even for free-tier usage — the free tier is generous for development purposes
- Never commit your API key directly to a public Git repository; use environment variables or a secrets manager in production
- Use the Google Cloud Console's API restriction settings to limit the key to only the APIs your app needs

## Notes
The Google Maps API setup is a one-time configuration step per project. On Android, the API key is added as a `<meta-data>` tag inside the `<application>` element in `AndroidManifest.xml`. On iOS, the key is passed to `GMSServices.provideAPIKey(...)` in the `AppDelegate.swift` file. Without this setup, any attempt to use Google Maps features will result in a blank map or API error responses.

## Summary
Setting up the Google Maps API requires creating a Cloud Console project, enabling the necessary APIs, generating a restricted key, and embedding it into both the Android and iOS native configuration files.
