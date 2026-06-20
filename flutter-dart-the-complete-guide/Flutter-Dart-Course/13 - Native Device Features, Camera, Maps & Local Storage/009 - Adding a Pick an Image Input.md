# Adding a Pick an Image Input

## Overview
This lecture introduces the image-picking feature by creating a custom `ImageInput` widget that will be embedded in the Add Place form. The widget shows a placeholder that the user can tap to trigger the image-picking process and, once an image is selected, previews it. This is the UI foundation before connecting to the actual device camera in the next lecture.

## Key Points
- A new widget file `lib/widgets/image_input.dart` is created for the `ImageInput` widget
- The widget uses a `GestureDetector` wrapping a `Container` to make the placeholder tappable
- The widget is designed to be a `StatefulWidget` because it holds the currently picked image in local state
- A callback function (`onPickImage`) is passed to the widget so the parent form can receive the selected image

## Code Example
```dart
import 'dart:io';
import 'package:flutter/material.dart';

class ImageInput extends StatefulWidget {
  const ImageInput({super.key, required this.onPickImage});

  final void Function(File image) onPickImage;

  @override
  State<ImageInput> createState() => _ImageInputState();
}

class _ImageInputState extends State<ImageInput> {
  File? _selectedImage;

  void _takePicture() async {
    // Camera logic will be added in the next lecture
  }

  @override
  Widget build(BuildContext context) {
    Widget content = GestureDetector(
      onTap: _takePicture,
      child: Container(
        decoration: BoxDecoration(
          border: Border.all(
            width: 1,
            color: Theme.of(context).colorScheme.primary.withOpacity(0.2),
          ),
        ),
        height: 250,
        width: double.infinity,
        alignment: Alignment.center,
        child: const Text('No image selected'),
      ),
    );

    if (_selectedImage != null) {
      content = GestureDetector(
        onTap: _takePicture,
        child: Image.file(
          _selectedImage!,
          fit: BoxFit.cover,
          width: double.infinity,
          height: double.infinity,
        ),
      );
    }

    return content;
  }
}
```

## Notes
Using `File?` (nullable) for `_selectedImage` allows the widget to clearly distinguish between the "no image chosen yet" and "image selected" states. The `onPickImage` callback pattern is a clean way to pass data from a child widget up to its parent without using a state management library for simple local interactions. The `GestureDetector` is retained on the image preview so the user can re-take the photo.

## Summary
This lecture builds the reusable `ImageInput` widget with a tappable placeholder and image preview state, preparing the UI for camera integration in the next step.
