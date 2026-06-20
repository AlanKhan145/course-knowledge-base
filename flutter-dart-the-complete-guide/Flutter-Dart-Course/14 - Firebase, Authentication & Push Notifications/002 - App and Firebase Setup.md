# App and Firebase Setup

## Overview
This lecture covers creating a new Flutter project and setting up a Firebase project in the Firebase console. You will register your app with Firebase and understand the project structure before adding any Firebase SDKs. The goal is to have both a Flutter app scaffold and a Firebase project ready to be connected.

## Key Points
- Create a new Flutter project using `flutter create` or your IDE
- Navigate to console.firebase.google.com and create a new Firebase project
- Firebase projects support Android, iOS, and web platforms — you can register multiple apps
- The Firebase console provides a unique project ID and configuration details needed for SDK setup
- Disabling Google Analytics is optional but simplifies initial setup for learning purposes

## Tips
- Name your Firebase project clearly (e.g., `flutter-chat-app`) to avoid confusion later
- Keep the Firebase console tab open — you will return to it frequently throughout this module
- Note your Firebase project ID as it will appear in configuration files

## Notes
A single Firebase project can serve multiple Flutter apps across platforms. The Firebase console is the central dashboard for managing all Firebase services. Make sure your Flutter project compiles and runs on your target device before adding Firebase dependencies.

## Summary
Setting up both a new Flutter project and a corresponding Firebase project is the essential first step before any Firebase integration can begin.
