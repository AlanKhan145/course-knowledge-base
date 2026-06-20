# Firebase CLI and SDK Setup 1 of 2

## Overview
This lecture walks through installing the Firebase CLI and the FlutterFire CLI tools needed to configure Firebase for your Flutter project. These command-line tools automate the process of registering your app with Firebase and generating the required configuration files. This is part one of a two-part setup process.

## Key Points
- Install the Firebase CLI via npm: `npm install -g firebase-tools`
- Authenticate the Firebase CLI with your Google account using `firebase login`
- Install the FlutterFire CLI as a Dart global package: `dart pub global activate flutterfire_cli`
- Add `firebase_core` as the first Firebase dependency in `pubspec.yaml`
- Ensure the Firebase CLI and FlutterFire CLI are accessible from your terminal PATH

## Tips
- You must have Node.js installed before installing the Firebase CLI via npm
- Run `firebase --version` and `flutterfire --version` to confirm successful installation
- If `flutterfire` is not found after activation, add the Dart pub cache bin directory to your PATH
- On Windows, the pub cache path is typically `%APPDATA%\Pub\Cache\bin`

## Notes
The Firebase CLI is a general-purpose tool for all Firebase projects, while the FlutterFire CLI is specifically designed to integrate Firebase with Flutter apps. These tools must be installed once per development machine and can be reused across multiple Flutter projects. Always run `firebase login` again if your session expires.

## Summary
Installing the Firebase CLI and FlutterFire CLI are prerequisite steps that enable automated Firebase configuration for Flutter projects.
