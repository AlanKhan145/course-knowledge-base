# Using the ImagePicker Package

## Overview
This lecture dives deeper into the `image_picker` package API, covering how to pick images from the gallery or camera and handle the result. You will learn the difference between `pickImage()` options and how to handle the case where the user cancels the picker without selecting an image. The `XFile` type returned by the picker is also explained.

## Key Points
- `ImagePicker().pickImage(source: ImageSource.gallery)` opens the device photo gallery
- `ImagePicker().pickImage(source: ImageSource.camera)` opens the device camera
- The method returns `Future<XFile?>` — it is nullable because the user may cancel
- `XFile` is a cross-platform file abstraction; use `XFile.path` to get the file path
- Convert `XFile` to `dart:io` `File` using `File(xfile.path)` for Firebase Storage upload

## Code Example
```dart
import 'dart:io';
import 'package:image_picker/image_picker.dart';

Future<void> _pickImage() async {
  final ImagePicker picker = ImagePicker();

  // Pick from gallery
  final XFile? pickedImage = await picker.pickImage(
    source: ImageSource.gallery,
    imageQuality: 50,   // Compress to 50% quality
    maxWidth: 150,      // Resize to max 150px wide
  );

  if (pickedImage == null) {
    // User cancelled — do nothing
    return;
  }

  // Convert XFile to dart:io File
  final File imageFile = File(pickedImage.path);

  // Use imageFile for preview or upload
  setState(() {
    _pickedImageFile = imageFile;
  });
}
```

## Notes
`ImageSource.camera` is not available on iOS simulators or Android emulators by default — always test camera functionality on a physical device. The `imageQuality` parameter accepts values from 0 (most compressed) to 100 (original quality). On Android, newer versions (API 33+) use the `READ_MEDIA_IMAGES` permission instead of `READ_EXTERNAL_STORAGE`.

## Summary
The `image_picker` package provides a straightforward API to access device gallery or camera, returning an `XFile?` that can be null-checked and converted to a `File`.
