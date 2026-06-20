# Adding a Places Screen Challenge Solution 2 of 6

## Overview
This lecture covers the solution for creating the main Places screen, which serves as the home screen of the app and displays the list of saved places. The screen uses a `ListView` to render each place and shows an instructional message when no places have been saved yet. This is the primary UI entry point for the entire application.

## Key Points
- The `PlacesScreen` is a `StatelessWidget` that gets its data from a Riverpod provider
- An empty state message is shown when the places list is empty, guiding the user to add their first place
- Each item in the list will eventually display a thumbnail image and the place name
- A `FloatingActionButton` on this screen navigates the user to the Add Place screen

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/user_places.dart';
import 'add_place.dart';

class PlacesScreen extends ConsumerWidget {
  const PlacesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userPlaces = ref.watch(userPlacesProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Your Places')),
      body: userPlaces.isEmpty
          ? const Center(child: Text('No places added yet.'))
          : ListView.builder(
              itemCount: userPlaces.length,
              itemBuilder: (ctx, index) =>
                  Text(userPlaces[index].name),
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(
            MaterialPageRoute(builder: (ctx) => const AddPlaceScreen()),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## Notes
Using `ConsumerWidget` from Riverpod allows the screen to reactively rebuild whenever the list of places changes in the provider. The empty state check (`userPlaces.isEmpty`) provides a better user experience than showing a blank list. The `FloatingActionButton` follows Material Design conventions for primary actions on a screen.

## Summary
The second challenge solution builds the main Places screen with empty-state handling, a reactive list view powered by Riverpod, and navigation to the Add Place screen.
