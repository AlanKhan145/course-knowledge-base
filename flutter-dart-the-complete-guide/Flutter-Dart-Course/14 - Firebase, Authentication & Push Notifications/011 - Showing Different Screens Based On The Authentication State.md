# Showing Different Screens Based On The Authentication State

## Overview
This lecture implements reactive screen switching based on Firebase Authentication state using a `StreamBuilder` that listens to `FirebaseAuth.instance.authStateChanges()`. When the auth state stream emits a non-null `User`, the app shows the chat screen; otherwise it shows the auth screen. This approach automatically handles login, logout, and session restoration on app restart.

## Key Points
- `FirebaseAuth.instance.authStateChanges()` returns a `Stream<User?>` that emits on auth state changes
- Use a `StreamBuilder<User?>` as the `home` of your `MaterialApp` to reactively switch screens
- Check `snapshot.hasData` to determine if a user is currently logged in
- This stream-based approach automatically restores session state when the app is restarted
- No manual navigation calls are needed — the UI rebuilds automatically when auth state changes

## Code Example
```dart
import 'package:firebase_auth/firebase_auth.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FlutterChat',
      theme: ThemeData().copyWith(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 63, 17, 177),
        ),
      ),
      home: StreamBuilder(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (ctx, snapshot) {
          if (snapshot.hasData) {
            return const ChatScreen();
          }
          return const AuthScreen();
        },
      ),
    );
  }
}
```

## Notes
The `authStateChanges()` stream also emits when the app first loads, allowing Firebase to restore a previously authenticated session from secure storage. The `snapshot.connectionState` can be checked to show a loading indicator while the stream awaits its first emission. This reactive pattern is preferred over manually navigating with `Navigator.push` after login.

## Summary
Using `StreamBuilder` with `authStateChanges()` provides a clean, reactive way to display different screens based on whether a user is authenticated.
