# Adding a User Image Picker Widget

## Overview
This lecture creates a reusable `UserImagePicker` widget that displays a circular avatar preview and a button to trigger image selection. The widget is designed to be embedded in the signup form and communicates the selected image back to the parent via a callback function. It shows a default icon when no image is selected and a preview once one is chosen.

## Key Points
- Create a `UserImagePicker` `StatefulWidget` that accepts an `onPickImage` callback of type `Function(File pickedImage)`
- Use a `CircleAvatar` widget to display either a default icon or the selected image preview
- Add a `TextButton` labeled "Add Image" to trigger the image picker
- Store the picked `File?` in local state and call `setState()` to update the preview
- Pass the selected `File` to the parent via the callback so it can be uploaded later

## Code Example
```dart
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class UserImagePicker extends StatefulWidget {
  const UserImagePicker({super.key, required this.onPickImage});

  final void Function(File pickedImage) onPickImage;

  @override
  State<UserImagePicker> createState() => _UserImagePickerState();
}

class _UserImagePickerState extends State<UserImagePicker> {
  File? _pickedImageFile;

  void _pickImage() async {
    final pickedImage = await ImagePicker().pickImage(
      source: ImageSource.gallery,
      imageQuality: 50,
      maxWidth: 150,
    );
    if (pickedImage == null) return;

    setState(() {
      _pickedImageFile = File(pickedImage.path);
    });
    widget.onPickImage(_pickedImageFile!);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CircleAvatar(
          radius: 40,
          backgroundColor: Colors.grey,
          foregroundImage: _pickedImageFile != null
              ? FileImage(_pickedImageFile!)
              : null,
          child: _pickedImageFile == null
              ? const Icon(Icons.person, size: 40)
              : null,
        ),
        TextButton.icon(
          onPressed: _pickImage,
          icon: const Icon(Icons.image),
          label: const Text('Add Image'),
        ),
      ],
    );
  }
}
```

## Notes
Setting `imageQuality: 50` and `maxWidth: 150` reduces the file size before upload, saving Firebase Storage bandwidth and speeding up the upload. The `FileImage` provider loads an image from a local file path, suitable for previewing before upload. This widget follows good component design by being self-contained and communicating via a callback rather than shared state.

## Summary
The `UserImagePicker` widget encapsulates image selection logic and provides a circular preview, communicating the result to its parent via a callback.
