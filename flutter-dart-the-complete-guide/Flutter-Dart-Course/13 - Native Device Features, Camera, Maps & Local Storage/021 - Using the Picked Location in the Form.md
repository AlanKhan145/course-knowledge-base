# Using the Picked Location in the Form

## Overview
This lecture connects the `LocationInput` widget to the `AddPlaceScreen` form so that the selected location is collected, validated, and passed to the provider when saving a new place. The `onSelectLocation` callback is used to update the form's `_selectedLocation` state variable. Validation logic ensures users must provide both an image and a location before the form can be submitted.

## Key Points
- The `AddPlaceScreen` stores a `PlaceLocation? _selectedLocation` variable to receive location data from `LocationInput`
- The `onSelectLocation` callback updates `_selectedLocation` in the parent screen's state via `setState`
- The `_savePlace` method validates that `_selectedLocation` is not null before proceeding
- The `LocationInput` widget is added to the form's `Column` between the `ImageInput` and the submit button

## Code Example
```dart
// In _AddPlaceScreenState
PlaceLocation? _selectedLocation;

void _savePlace() {
  final enteredTitle = _titleController.text;

  if (enteredTitle.isEmpty ||
      _selectedImage == null ||
      _selectedLocation == null) {
    return; // Show a snackbar or validation message here
  }

  ref.read(userPlacesProvider.notifier).addPlace(
    enteredTitle,
    _selectedImage!,
    _selectedLocation!,
  );

  Navigator.of(context).pop();
}

// In the build Column
LocationInput(
  onSelectLocation: (location) {
    setState(() {
      _selectedLocation = location;
    });
  },
),
```

## Notes
The `setState` call inside the `onSelectLocation` callback is necessary to trigger a rebuild in the parent screen, though in this case it only updates the internal `_selectedLocation` variable without changing any visible UI directly on the form itself. A more user-friendly implementation would show a `SnackBar` explaining what is missing when validation fails. The order of widgets in the `Column` (image, location, submit) matches the natural top-to-bottom flow of filling out the form.

## Summary
The `LocationInput` widget is wired into the `AddPlaceScreen` form via a callback, with validation ensuring both image and location are provided before a new place can be saved to the Riverpod provider.
