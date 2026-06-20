# Adding the Picked Image to the Model and Add Place Form

## Overview
This lecture updates the `Place` model to include an `image` field of type `File` and modifies the Add Place form to collect and pass the image alongside the place name. The `ImageInput` widget is embedded in the form, and its `onPickImage` callback stores the selected image in the form's local state. The provider's `addPlace` method is also updated to accept the image parameter.

## Key Points
- The `Place` model gains a `final File image` field, requiring it in the constructor
- The `AddPlaceScreen` stores a `File? _selectedImage` in its state to hold the image from the `ImageInput` callback
- Validation is added to ensure both a name and an image are provided before saving
- The `UserPlacesNotifier.addPlace` method signature is updated to accept both `name` and `image` parameters

## Code Example
```dart
// Updated Place model
import 'dart:io';
import 'package:uuid/uuid.dart';

const uuid = Uuid();

class Place {
  Place({required this.name, required this.image})
      : id = uuid.v4();

  final String id;
  final String name;
  final File image;
}

// In AddPlaceScreen state
File? _selectedImage;

void _savePlace() {
  if (_titleController.text.isEmpty || _selectedImage == null) return;

  ref.read(userPlacesProvider.notifier).addPlace(
    _titleController.text,
    _selectedImage!,
  );
  Navigator.of(context).pop();
}
```

## Notes
Making `image` a required field on `Place` enforces data integrity — a place without an image cannot be created accidentally. Storing the image as a `File` path reference (not the raw bytes) in the model is memory-efficient, as the actual file data is only loaded when displayed. Remember to update any existing `Place` instantiation calls throughout the codebase after adding the new required field.

## Summary
The `Place` model is extended with a required `File image` field, and the form and provider are updated to collect, validate, and pass the image when creating a new place.
