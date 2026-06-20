# Storing a Username

## Overview
This lecture adds a username field to the signup form and stores it alongside the user's email and image URL in Firestore. A new `TextFormField` for the username is conditionally shown in signup mode, and its value is captured via the `onSaved` callback. This completes the user profile data stored in Firestore upon registration.

## Key Points
- Add a `String _enteredUsername = ''` state variable to store the username from the form
- Add a `TextFormField` with `labelText: 'Username'` visible only when `!_isLogin`
- Validate that the username is at least 4 characters long
- Save the username in `onSaved` and include it in the Firestore `set()` call under the `'username'` key
- The username is stored in Firestore rather than Firebase Auth (Auth only natively supports email, password, and display name)

## Code Example
```dart
String _enteredUsername = '';

// In the Form widget (signup mode only):
if (!_isLogin)
  TextFormField(
    decoration: const InputDecoration(labelText: 'Username'),
    enableSuggestions: false,
    validator: (value) {
      if (value == null || value.isEmpty || value.trim().length < 4) {
        return 'Please enter at least 4 characters.';
      }
      return null;
    },
    onSaved: (value) {
      _enteredUsername = value!;
    },
  ),

// In _submit(), after image upload:
await FirebaseFirestore.instance
    .collection('users')
    .doc(userCredentials.user!.uid)
    .set({
  'username': _enteredUsername,
  'email': _enteredEmail,
  'image_url': imageUrl,
});
```

## Notes
Firebase Auth does have a `displayName` field on the `User` object, but it requires a separate `updateDisplayName()` call and is limited to a single string. Storing user data in Firestore gives you full flexibility to add more fields (bio, location, etc.) without Firebase Auth limitations. When reading chat messages, you can join the sender's username and image from the `users` collection using their UID.

## Summary
Adding a username field to the signup form and storing it in Firestore under the user's UID completes the user profile creation flow.
