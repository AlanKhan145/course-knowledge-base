# Adding a Map Screen

## Overview
This lecture creates the `MapScreen` widget, which displays an interactive Google Map using the `GoogleMap` widget from `google_maps_flutter`. The screen is used for two purposes: viewing a place's location on a full map, and manually selecting a location by tapping on the map. The initial camera position and optional existing location marker are configured as constructor parameters.

## Key Points
- The `MapScreen` accepts an optional `location` parameter to center the map on an existing location
- `GoogleMap` requires a `CameraPosition` with a `LatLng` coordinate and a `zoom` level
- A `Marker` set is added to the `GoogleMap` to visually pin the selected or viewed location
- An `AppBar` action button returns the picked location back to the calling screen via `Navigator.pop`

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import '../models/place.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({
    super.key,
    this.location = const PlaceLocation(
      latitude: 37.422,
      longitude: -122.084,
      address: '',
    ),
    this.isSelecting = true,
  });

  final PlaceLocation location;
  final bool isSelecting;

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  LatLng? _pickedLocation;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.isSelecting ? 'Pick your Location' : 'Your Location'),
        actions: [
          if (widget.isSelecting)
            IconButton(
              icon: const Icon(Icons.save),
              onPressed: _pickedLocation == null
                  ? null
                  : () => Navigator.of(context).pop(_pickedLocation),
            ),
        ],
      ),
      body: GoogleMap(
        onTap: widget.isSelecting ? _selectLocation : null,
        initialCameraPosition: CameraPosition(
          target: LatLng(widget.location.latitude, widget.location.longitude),
          zoom: 16,
        ),
        markers: (_pickedLocation == null && widget.isSelecting)
            ? {}
            : {
                Marker(
                  markerId: const MarkerId('m1'),
                  position: _pickedLocation ??
                      LatLng(widget.location.latitude, widget.location.longitude),
                ),
              },
      ),
    );
  }

  void _selectLocation(LatLng position) {
    setState(() => _pickedLocation = position);
  }
}
```

## Notes
The `isSelecting` boolean makes `MapScreen` dual-purpose — used for selection (in Add Place) and for viewing (in Place Details). Using `Navigator.of(context).pop(_pickedLocation)` passes the selected `LatLng` back to the calling screen when the save button is pressed. The `Marker.markerId` must be unique within the set; using a constant string `'m1'` is fine when only one marker is shown at a time.

## Summary
The `MapScreen` is a dual-purpose screen that uses the `GoogleMap` widget for both displaying a place's location and allowing interactive tap-to-select location picking, returning the chosen `LatLng` to the caller via `Navigator.pop`.
