# Adding a Splash Screen Loading Screen

## Overview
This lecture adds a loading/splash screen that displays while the `authStateChanges` stream is waiting for its first emission from Firebase. Without this, the app briefly flashes the auth screen even for already-logged-in users before the session is restored. A simple `CircularProgressIndicator` on a colored scaffold provides a smooth loading experience.

## Key Points
- Check `snapshot.connectionState == ConnectionState.waiting` to detect the loading state
- Show a loading scaffold while the stream has not yet emitted its first value
- The splash screen prevents a jarring flash of the wrong screen during app startup
- `ConnectionState.waiting` indicates the stream is active but no data has been received yet
- This is distinct from `snapshot.hasData` — you should check `connectionState` first

## Code Example
```dart
home: StreamBuilder(
  stream: FirebaseAuth.instance.authStateChanges(),
  builder: (ctx, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const SplashScreen();
    }
    if (snapshot.hasData) {
      return const ChatScreen();
    }
    return const AuthScreen();
  },
),

// splash_screen.dart
class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: const Center(
        child: CircularProgressIndicator(color: Colors.white),
      ),
    );
  }
}
```

## Notes
Native splash screens (shown before Flutter initializes) are configured separately using the `flutter_native_splash` package or platform-specific assets. This Flutter-level splash screen only handles the brief period after Flutter starts but before Firebase confirms auth state. For production apps, consider matching the native splash screen's appearance to avoid visual discontinuity.

## Summary
A splash screen shown during `ConnectionState.waiting` prevents the auth screen from flashing briefly on startup for already-authenticated users.
