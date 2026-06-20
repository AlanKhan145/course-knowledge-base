# Storing the Picked Image Locally

## Overview
This lecture covers permanently saving the captured image file to the app's local documents directory so it persists across app restarts. The temporary file provided by `image_picker` is copied to a permanent location using `dart:io` file operations, and the permanent file path is stored in the database rather than the temporary path. This ensures the image is still accessible the next time the app launches.

## Key Points
- Images captured by `image_picker` are stored in a temporary cache directory that may be cleared by the OS
- `path_provider`'s `getApplicationDocumentsDirectory()` returns a persistent directory safe for long-term storage
- `File.copy(newPath)` copies the temporary image file to the permanent documents directory
- Only the file path string (not the image bytes) needs to be stored in the SQLite database

## Code Example
```dart
import 'dart:io';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;

Future<String> _saveImageLocally(File image) async {
  final appDir = await getApplicationDocumentsDirectory();
  final filename = path.basename(image.path);
  final savedImage = await image.copy('${appDir.path}/$filename');
  return savedImage.path;
}

// Usage in addPlace notifier method:
final imagePath = await _saveImageLocally(image);
final newPlace = Place(
  name: name,
  image: File(imagePath),
  location: location,
);
```

## Notes
`path.basename(image.path)` extracts just the filename (e.g., `IMG_20240617_123456.jpg`) from the full temporary path, which is then used as the filename in the documents directory. The `path` package's `basename` function handles path separators correctly across platforms. Since file I/O is asynchronous, the `addPlace` method in the notifier must be changed to `async` to properly `await` the image copy operation.

## Summary
Captured images are permanently saved by copying them from the temporary cache to the app's documents directory, with only the stable file path string stored in the database for later retrieval.
