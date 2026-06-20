# Installing Packages for Local On-Device Data Storage

## Overview
This lecture introduces the packages needed for persisting app data locally on the device so that places survive app restarts. Two packages are installed: `sqflite` for SQLite relational database access, and `path_provider` for finding the correct directory paths on the device's file system. Together these packages provide the complete infrastructure for on-device structured data storage in Flutter.

## Key Points
- `sqflite: ^2.0.0` provides a Dart API for creating and querying SQLite databases on Android and iOS
- `path_provider: ^2.0.0` provides platform-specific paths like the app's documents directory
- `path` package (usually already available) is used to join directory paths safely across platforms
- No native permission configuration is required for local storage using `sqflite`

## Tips
- SQLite is a serverless, file-based relational database that stores data in a single `.db` file on the device
- The `path_provider` package is needed because the correct path for storing app data varies between Android and iOS
- Both packages are well-maintained and widely used — prefer them over manual file I/O for structured data

## Notes
Persistent local storage is essential for any app that needs to work offline or retain user data across sessions. `sqflite` is the most common Flutter package for structured data storage, offering full SQL query support. For simpler key-value storage (settings, preferences), `shared_preferences` is a lighter alternative, but for the Favorite Places app with multiple fields per record, SQLite is the appropriate choice.

## Summary
The `sqflite` and `path_provider` packages are installed to enable persistent SQLite database storage on-device, allowing the app's places data to survive between sessions without requiring a backend server.
