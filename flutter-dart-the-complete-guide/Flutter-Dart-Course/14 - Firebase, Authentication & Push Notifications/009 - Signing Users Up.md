# Signing Users Up

## Overview
This lecture implements user registration by connecting the signup form submission to Firebase Authentication's `createUserWithEmailAndPassword` method. You will add the `firebase_auth` package, call the Firebase Auth API in the `_submit` method, and handle any errors thrown during the process. Newly created users appear in the Firebase console under Authentication.

## Key Points
- Add `firebase_auth` to `pubspec.yaml` and run `flutter pub get`
- Get the `FirebaseAuth` instance via `FirebaseAuth.instance`
- Call `await FirebaseAuth.instance.createUserWithEmailAndPassword(email: ..., password: ...)` to register
- This method returns a `UserCredential` object containing the newly created `User`
- Wrap the call in a `try-catch` block to handle `FirebaseAuthException` errors gracefully

## Code Example
```dart
import 'package:firebase_auth/firebase_auth.dart';

// Inside _AuthScreenState:
final _firebase = FirebaseAuth.instance;
bool _isAuthenticating = false;

void _submit() async {
  final isValid = _formKey.currentState!.validate();
  if (!isValid) return;
  _formKey.currentState!.save();

  setState(() => _isAuthenticating = true);

  try {
    if (_isLogin) {
      // handled in next lecture
    } else {
      final userCredentials = await _firebase.createUserWithEmailAndPassword(
        email: _enteredEmail,
        password: _enteredPassword,
      );
      print(userCredentials); // User created successfully
    }
  } on FirebaseAuthException catch (error) {
    ScaffoldMessenger.of(context).clearSnackBars();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(error.message ?? 'Authentication failed.')),
    );
  } finally {
    setState(() => _isAuthenticating = false);
  }
}
```

## Notes
`FirebaseAuthException` provides an error `code` (e.g., `'email-already-in-use'`) and a human-readable `message`. Always enable Email/Password sign-in in the Firebase console under Authentication > Sign-in method before testing. The returned `UserCredential.user` gives access to the user's UID, email, and other profile data.

## Summary
User registration is achieved by calling `createUserWithEmailAndPassword()` from `firebase_auth` and wrapping it in error handling to provide user feedback.
