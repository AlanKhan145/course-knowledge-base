# Adding an Add Place Screen Challenge Solution 3 of 6

## Overview
This lecture presents the solution for creating the Add Place screen, which contains a form where users can enter a place name and eventually upload an image and location. The screen collects user input and, upon submission, creates a new `Place` object and passes it back to the provider. This screen is the primary data-entry interface of the app.

## Key Points
- The `AddPlaceScreen` uses a `TextEditingController` to capture the place name input
- Input validation prevents submission of empty or whitespace-only names
- The form uses a standard `TextField` within a `Padding` widget for clean layout
- A submit button triggers provider method to add the new place to the state list

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/place.dart';
import '../providers/user_places.dart';

class AddPlaceScreen extends ConsumerStatefulWidget {
  const AddPlaceScreen({super.key});

  @override
  ConsumerState<AddPlaceScreen> createState() => _AddPlaceScreenState();
}

class _AddPlaceScreenState extends ConsumerState<AddPlaceScreen> {
  final _titleController = TextEditingController();

  @override
  void dispose() {
    _titleController.dispose();
    super.dispose();
  }

  void _savePlace() {
    final enteredTitle = _titleController.text;
    if (enteredTitle.isEmpty) return;

    ref.read(userPlacesProvider.notifier).addPlace(enteredTitle);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Add New Place')),
      body: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          children: [
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(labelText: 'Title'),
            ),
            const Spacer(),
            ElevatedButton.icon(
              onPressed: _savePlace,
              icon: const Icon(Icons.add),
              label: const Text('Add Place'),
            ),
          ],
        ),
      ),
    );
  }
}
```

## Notes
`ConsumerStatefulWidget` is used instead of `StatefulWidget` because this screen needs both local mutable state (the text controller) and access to the Riverpod provider. Always call `dispose()` on `TextEditingController` to free memory when the widget is removed from the tree. The `Navigator.of(context).pop()` call after saving returns the user to the Places screen.

## Summary
The third challenge solution creates the Add Place form screen with a text input, validation, and Riverpod provider integration to add new places to the app state.
