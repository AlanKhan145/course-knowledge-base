# Uploading Images To Firebase

## Overview
This lecture implements the actual image upload to Firebase Storage after a user signs up. Using the newly created user's UID as part of the storage path ensures each user's image is stored uniquely. The `putFile()` method uploads the `File` to Firebase Storage and `getDownloadURL()` retrieves a public URL for later use.

## Key Points
- Use `FirebaseStorage.instance.ref().child('user_images/${userCredential.user!.uid}.jpg')` as the storage path
- Call `await storageRef.putFile(_selectedImage!)` to upload the file to Firebase Storage
- After upload, call `await storageRef.getDownloadURL()` to get the publicly accessible download URL
- The download URL can then be stored in Firestore alongside other user data
- Wrap upload logic in the existing try-catch block to handle upload errors

## Code Example
```dart
import 'package:firebase_storage/firebase_storage.dart';

// Inside _submit(), after successful createUserWithEmailAndPassword:
void _submit() async {
  // ... validation and auth ...

  try {
    final userCredentials = await _firebase.createUserWithEmailAndPassword(
      email: _enteredEmail,
      password: _enteredPassword,
    );

    // Upload profile image to Firebase Storage
    final storageRef = FirebaseStorage.instance
        .ref()
        .child('user_images')
        .child('${userCredentials.user!.uid}.jpg');

    await storageRef.putFile(_selectedImage!);

    final imageUrl = await storageRef.getDownloadURL();
    print('Image URL: $imageUrl');
    // Store imageUrl in Firestore in the next step

  } on FirebaseAuthException catch (error) {
    // handle auth errors
  } catch (error) {
    // handle storage errors
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Image upload failed. Please try again.')),
    );
  }
}
```

## Notes
`putFile()` returns a `TaskSnapshot` on completion — you can use this for upload progress tracking if needed. The download URL returned by `getDownloadURL()` is a permanent HTTPS URL that can be used in `Image.network()` or `NetworkImage`. Firebase Storage security rules must allow write access for authenticated users — update them in the Firebase console if uploads are rejected.

## Summary
After creating a user account, upload their profile image to Firebase Storage using their UID as the filename, then retrieve the download URL for later storage.
