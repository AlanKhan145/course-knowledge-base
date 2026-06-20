# Module Introduction

## Overview
This module covers advanced Flutter features that interact directly with native device hardware and services, including the camera, GPS location, and on-device storage. You will learn how to integrate Google Maps, use device sensors, and persist data locally using SQLite. By the end of the module, you will have built a fully functional "Favorite Places" app.

## Key Points
- The module project is a "Favorite Places" app that lets users save locations with photos
- Topics include camera access, location services, Google Maps API integration, and local SQL storage
- You will use several third-party packages such as `image_picker`, `location`, `google_maps_flutter`, and `sqflite`
- Native device features require special platform-level permissions on both Android and iOS

## Tips
- Ensure your development environment targets a real device or an emulator with camera and location support
- Review the previous Riverpod module since state management patterns are reused here
- Google Maps API requires billing to be enabled on a Google Cloud project, even for free-tier usage

## Notes
This module bridges the gap between pure Flutter UI work and real-world app requirements. Accessing hardware like the camera involves both Dart-level package APIs and platform-level permission configurations. Understanding how to handle async permission requests is essential throughout the module.

## Summary
This module introduces native device feature integration in Flutter, covering camera, location, maps, and local storage through the construction of a complete Favorite Places app.
