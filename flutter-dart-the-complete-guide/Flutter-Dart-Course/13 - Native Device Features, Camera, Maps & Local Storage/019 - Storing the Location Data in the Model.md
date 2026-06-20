# Storing the Location Data in the Model

## Overview
This lecture updates the `Place` model to include a `PlaceLocation` field so that each saved place stores its full geographic context (latitude, longitude, and address). The `UserPlacesNotifier.addPlace` method is updated to accept and store the location. This change ensures the complete place data — name, image, and location — is persisted together in the app's state.

## Key Points
- The `Place` constructor gains a `required PlaceLocation location` parameter
- The `PlaceLocation` class holds `latitude`, `longitude`, and `address` fields
- The `addPlace` method in `UserPlacesNotifier` is updated to accept the `PlaceLocation` object
- The `AddPlaceScreen` collects and validates the location before calling `addPlace`

## Code Example
```dart
// Complete Place model
import 'dart:io';
import 'package:uuid/uuid.dart';

const uuid = Uuid();

class PlaceLocation {
  const PlaceLocation({
    required this.latitude,
    required this.longitude,
    required this.address,
  });

  final double latitude;
  final double longitude;
  final String address;
}

class Place {
  Place({
    required this.name,
    required this.image,
    required this.location,
  }) : id = uuid.v4();

  final String id;
  final String name;
  final File image;
  final PlaceLocation location;
}

// Updated addPlace in notifier
void addPlace(String name, File image, PlaceLocation location) {
  final newPlace = Place(name: name, image: image, location: location);
  state = [...state, newPlace];
}
```

## Notes
Defining `PlaceLocation` as a separate class (rather than storing latitude, longitude, and address as separate fields on `Place`) groups related geographic data together and makes the model more organized and readable. When updating model constructors to add required fields, compile errors will guide you to every location in the codebase that creates a `Place` and needs to be updated. This incremental model expansion is a common pattern in iterative app development.

## Summary
The `Place` model is completed by adding a required `PlaceLocation` field, and the provider's `addPlace` method is updated to accept and store the full location data alongside name and image.
