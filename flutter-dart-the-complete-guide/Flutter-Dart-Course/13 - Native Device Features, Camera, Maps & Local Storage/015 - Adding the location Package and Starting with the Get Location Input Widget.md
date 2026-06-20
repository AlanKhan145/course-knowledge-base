# Adding the location Package and Starting with the Get Location Input Widget

## Overview
This lecture covers installing the `location` package and beginning to build the `LocationInput` widget that will allow users to capture their current GPS coordinates or manually select a location on a map. The widget is designed similarly to `ImageInput` with a tappable container that triggers location fetching. Both the package installation and the widget scaffold are covered.

## Key Points
- Add `location: ^5.0.0` (or latest) to `pubspec.yaml` and run `flutter pub get`
- On Android, add `ACCESS_FINE_LOCATION` and `ACCESS_COARSE_LOCATION` permissions to `AndroidManifest.xml`
- On iOS, add `NSLocationWhenInUseUsageDescription` to `ios/Runner/Info.plist`
- The `LocationInput` widget starts as a `StatefulWidget` with a placeholder UI and an `onSelectLocation` callback

## Code Example
```dart
import 'package:flutter/material.dart';
import '../models/place.dart';

class LocationInput extends StatefulWidget {
  const LocationInput({super.key, required this.onSelectLocation});

  final void Function(PlaceLocation location) onSelectLocation;

  @override
  State<LocationInput> createState() => _LocationInputState();
}

class _LocationInputState extends State<LocationInput> {
  PlaceLocation? _pickedLocation;
  bool _isGettingLocation = false;

  @override
  Widget build(BuildContext context) {
    Widget previewContent = const Text('No location chosen');

    return Column(
      children: [
        Container(
          height: 170,
          width: double.infinity,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            border: Border.all(
              width: 1,
              color: Theme.of(context).colorScheme.primary.withOpacity(0.2),
            ),
          ),
          child: previewContent,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            TextButton.icon(
              onPressed: _getCurrentLocation,
              icon: const Icon(Icons.location_on),
              label: const Text('Get Current Location'),
            ),
            TextButton.icon(
              onPressed: _selectOnMap,
              icon: const Icon(Icons.map),
              label: const Text('Select on Map'),
            ),
          ],
        ),
      ],
    );
  }
}
```

## Notes
The `LocationInput` widget uses a two-button layout: one to fetch the current GPS location automatically, and one to open a map for manual selection. This dual approach accommodates both use cases common in location-aware apps. The `_isGettingLocation` boolean flag is used to show a loading indicator while the asynchronous location fetch is in progress.

## Summary
The `location` package is installed with platform permissions configured, and the `LocationInput` widget scaffold is created with placeholders for both automatic GPS and manual map-based location selection.
