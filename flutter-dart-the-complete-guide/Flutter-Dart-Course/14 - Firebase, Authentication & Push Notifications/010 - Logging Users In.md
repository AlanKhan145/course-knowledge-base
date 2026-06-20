# Logging Users In

## Overview
This lecture implements user login by calling Firebase Authentication's `signInWithEmailAndPassword` method when the form is in login mode. The logic is added to the existing `_submit` method alongside the signup branch, completing the dual-mode authentication flow. Successful login transitions the user to the main app screen.

## Key Points
- Use `FirebaseAuth.instance.signInWithEmailAndPassword(email: ..., password: ...)` for login
- The method also returns a `UserCredential` on success
- Common `FirebaseAuthException` codes for login: `'user-not-found'`, `'wrong-password'`, `'invalid-email'`
- The `_isLogin` boolean determines which Firebase Auth method is called in the `_submit` handler
- Display error messages via `SnackBar` to inform the user of failed login attempts

## Code Example
```dart
void _submit() async {
  final isValid = _formKey.currentState!.validate();
  if (!isValid) return;
  _formKey.currentState!.save();

  setState(() => _isAuthenticating = true);

  try {
    if (_isLogin) {
      final userCredentials = await _firebase.signInWithEmailAndPassword(
        email: _enteredEmail,
        password: _enteredPassword,
      );
      print('Logged in: ${userCredentials.user?.email}');
    } else {
      final userCredentials = await _firebase.createUserWithEmailAndPassword(
        email: _enteredEmail,
        password: _enteredPassword,
      );
      print('Signed up: ${userCredentials.user?.email}');
    }
  } on FirebaseAuthException catch (error) {
    ScaffoldMessenger.of(context).clearSnackBars();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(error.message ?? 'Authentication failed.'),
      ),
    );
    setState(() => _isAuthenticating = false);
  }
}
```

## Notes
Firebase Authentication automatically manages the user session — once logged in, the user remains authenticated across app restarts until they explicitly sign out. The `signInWithEmailAndPassword` method throws a `FirebaseAuthException` with descriptive codes that you can map to user-friendly error messages. Navigation away from the auth screen is handled by listening to the auth state stream, covered in the next lecture.

## Summary
Login is implemented by branching on `_isLogin` within `_submit` and calling `signInWithEmailAndPassword`, completing the full authentication flow.
