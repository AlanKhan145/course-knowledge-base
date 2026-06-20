# Adding User Logout

## Overview
This lecture implements user logout functionality by calling `FirebaseAuth.instance.signOut()` from the chat screen's app bar. Since the auth state stream is already being observed, signing out automatically triggers the `StreamBuilder` to rebuild and show the auth screen — no manual navigation is needed.

## Key Points
- Call `FirebaseAuth.instance.signOut()` to log out the current user
- The `authStateChanges()` stream emits `null` after sign-out, automatically showing the auth screen
- Add a logout `IconButton` to the `AppBar` of the chat screen for easy access
- `signOut()` is a synchronous-style async method — it can be awaited but rarely needs to be
- Firebase clears the locally stored auth token upon sign-out

## Code Example
```dart
// chat_screen.dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatelessWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('FlutterChat'),
        actions: [
          IconButton(
            onPressed: () {
              FirebaseAuth.instance.signOut();
            },
            icon: Icon(
              Icons.exit_to_app,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
        ],
      ),
      body: const Center(child: Text('Logged in!')),
    );
  }
}
```

## Notes
Because the `StreamBuilder` in `main.dart` observes auth state changes, there is no need to call `Navigator.pop()` or navigate manually after sign-out — the widget tree updates automatically. Firebase also invalidates the ID token on sign-out, preventing further authenticated API calls. For multi-provider setups, `signOut()` works the same way regardless of the sign-in method used.

## Summary
Calling `FirebaseAuth.instance.signOut()` is all that is needed to log out — the reactive `StreamBuilder` handles the UI transition back to the auth screen automatically.
