# Using the Device Camera For Taking Pictures

## Overview
This lecture implements the actual camera functionality inside the `ImageInput` widget using the `image_picker` package. The `ImagePicker` class is instantiated and its `pickImage` method is called with `ImageSource.camera` to launch the native camera app. The returned `XFile` object is then converted to a `dart:io` `File` for use in the Flutter widget tree.

## Key Points
- `ImagePicker().pickImage(source: ImageSource.camera)` opens the native camera interface
- The method returns a nullable `XFile?`, so null-safety checks are required before using the result
- `XFile` is converted to a `File` using `File(pickedImage.path)` from the `dart:io` library
- The `_takePicture` method must be `async` because `pickImage` is an asynchronous operation returning a `Future`

## Code Example
```dart
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class _ImageInputState extends State<ImageInput> {
  File? _selectedImage;

  void _takePicture() async {
    final imagePicker = ImagePicker();
    final pickedImage = await imagePicker.pickImage(
      source: ImageSource.camera,
      maxWidth: 600,
    );

    if (pickedImage == null) return; // User cancelled

    final imageFile = File(pickedImage.path);

    setState(() {
      _selectedImage = imageFile;
    });

    widget.onPickImage(imageFile);
  }

  @override
  Widget build(BuildContext context) {
    // Widget build code from previous lecture
    return const Placeholder();
  }
}
```

## Notes
The `maxWidth` parameter on `pickImage` compresses the image before it is returned, which reduces file size and improves performance when displaying or storing the image. When the user cancels the camera without taking a photo, `pickImage` returns `null` — always handle this case with an early return. Using `setState` updates the widget's local state to display the newly captured image immediately in the UI.

## Summary
Camera access is implemented by calling `ImagePicker().pickImage(source: ImageSource.camera)`, handling the nullable result, and converting the `XFile` to a `File` for display and storage.
