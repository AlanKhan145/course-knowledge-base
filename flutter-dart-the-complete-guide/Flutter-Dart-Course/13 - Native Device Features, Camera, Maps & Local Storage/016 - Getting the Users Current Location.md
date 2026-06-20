# Getting the Users Current Location

## Overview
This lecture implements the `_getCurrentLocation` method inside the `LocationInput` widget using the `location` package to request GPS coordinates from the device. The method handles the permission request flow, shows a loading state while the location is being fetched, and stores the resulting latitude and longitude. Proper async/await usage and permission handling are key focuses.

## Key Points
- `Location().requestPermission()` must be called before `Location().getLocation()` to handle runtime permissions
- If permission is denied, the method returns early without updating state
- A `CircularProgressIndicator` is shown during the async location fetch using the `_isGettingLocation` flag
- The retrieved `LocationData` object provides `latitude` and `longitude` double values

## Code Example
```dart
import 'package:location/location.dart' as loc;

void _getCurrentLocation() async {
  final locationService = loc.Location();

  bool serviceEnabled = await locationService.serviceEnabled();
  if (!serviceEnabled) {
    serviceEnabled = await locationService.requestService();
    if (!serviceEnabled) return;
  }

  loc.PermissionStatus permissionGranted =
      await locationService.hasPermission();
  if (permissionGranted == loc.PermissionStatus.denied) {
    permissionGranted = await locationService.requestPermission();
    if (permissionGranted != loc.PermissionStatus.granted) return;
  }

  setState(() => _isGettingLocation = true);

  final locationData = await locationService.getLocation();
  final lat = locationData.latitude;
  final lng = locationData.longitude;

  if (lat == null || lng == null) return;

  setState(() {
    _pickedLocation = PlaceLocation(latitude: lat, longitude: lng);
    _isGettingLocation = false;
  });

  widget.onSelectLocation(_pickedLocation!);
}
```

## Notes
The `location` package uses the `loc` alias import to avoid naming conflicts with the `PlaceLocation` model class. Always check if location services are enabled (GPS turned on) in addition to app permissions — they are separate concerns. Fetching GPS coordinates is asynchronous and can take several seconds on a real device, so the loading indicator significantly improves user experience.

## Summary
GPS location fetching is implemented by requesting service and permission, using `Location().getLocation()` asynchronously, and managing a loading state to give the user visual feedback during the operation.
