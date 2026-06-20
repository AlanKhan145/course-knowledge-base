# Using the Map Screen in the Add Place Form

## Overview
This lecture wires the `MapScreen` into the `LocationInput` widget's "Select on Map" button, allowing users to pick their location manually by navigating to the interactive map rather than using the GPS. The `LatLng` returned from `MapScreen` is then passed through the Geocoding API to resolve the address, and the `PlaceLocation` object is constructed and reported back to the `AddPlaceScreen` via the `onSelectLocation` callback.

## Key Points
- `Navigator.of(context).push(...)` with `await` is used to capture the `LatLng?` returned by `MapScreen.pop`
- If the user presses back without saving (`LatLng` is null), the method returns early without updating state
- The returned `LatLng` coordinates are geocoded to get a human-readable address using the same `_getAddressFromCoords` method
- A new `PlaceLocation` is constructed and passed to `widget.onSelectLocation`

## Code Example
```dart
void _selectOnMap() async {
  final pickedLocation = await Navigator.of(context).push<LatLng>(
    MaterialPageRoute(
      builder: (ctx) => const MapScreen(),
    ),
  );

  if (pickedLocation == null) return;

  final address = await _getAddressFromCoords(
    pickedLocation.latitude,
    pickedLocation.longitude,
  );

  setState(() {
    _pickedLocation = PlaceLocation(
      latitude: pickedLocation.latitude,
      longitude: pickedLocation.longitude,
      address: address,
    );
    _isGettingLocation = false;
  });

  widget.onSelectLocation(_pickedLocation!);
}
```

## Notes
The generic type on `Navigator.of(context).push<LatLng>(...)` tells Dart the expected return type, enabling type-safe access to the result without casting. Both the current-location button and the select-on-map button end up creating a `PlaceLocation` and calling the same `widget.onSelectLocation` callback, keeping the parent form's interface consistent. This is a good example of the Flutter navigation pattern where screens communicate by returning values through `Navigator.pop`.

## Summary
The "Select on Map" button navigates to `MapScreen`, awaits a `LatLng` result, geocodes it to an address, and reports the complete `PlaceLocation` back to the Add Place form through the `onSelectLocation` callback.
