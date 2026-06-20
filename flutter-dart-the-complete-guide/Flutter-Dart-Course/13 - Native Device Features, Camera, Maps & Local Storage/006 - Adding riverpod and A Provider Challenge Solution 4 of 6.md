# Adding riverpod and A Provider Challenge Solution 4 of 6

## Overview
This lecture shows the solution for setting up the Riverpod state management provider that will hold and manage the list of places throughout the app. A `StateNotifier` with a `StateNotifierProvider` is created to centralize all mutations to the places list. This provider becomes the single source of truth for the app's data.

## Key Points
- `UserPlacesNotifier` extends `StateNotifier<List<Place>>` and initializes with an empty list
- An `addPlace` method on the notifier creates a new `Place` and adds it to the state
- The `userPlacesProvider` is a `StateNotifierProvider` that exposes the notifier and its state
- Riverpod must be set up with `ProviderScope` wrapping the root `MaterialApp` in `main.dart`

## Code Example
```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/place.dart';

class UserPlacesNotifier extends StateNotifier<List<Place>> {
  UserPlacesNotifier() : super([]);

  void addPlace(String name) {
    final newPlace = Place(name: name);
    state = [...state, newPlace];
  }
}

final userPlacesProvider =
    StateNotifierProvider<UserPlacesNotifier, List<Place>>(
  (ref) => UserPlacesNotifier(),
);
```

## Notes
The immutable state update pattern (`state = [...state, newPlace]`) is required by `StateNotifier` — you must assign a new list object rather than mutating the existing one. This triggers Riverpod to notify all watching widgets and cause a rebuild. Wrapping the app with `ProviderScope` in `main.dart` is mandatory for Riverpod to function at all.

## Summary
The fourth challenge solution establishes the Riverpod `StateNotifier` provider that manages the list of saved places as immutable state, enabling reactive UI updates across the app.
