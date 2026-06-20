# Handling Map Taps for Selecting a Location Manually

## Overview
This lecture implements the tap-to-select location feature on the `MapScreen`, allowing users to manually pin a location by tapping anywhere on the interactive Google Map. The tapped `LatLng` coordinates are stored in the screen's state and displayed with a `Marker`. When the user confirms their selection by pressing the save button, the `LatLng` is returned to the calling screen via `Navigator.pop`.

## Key Points
- The `GoogleMap` widget's `onTap` callback receives a `LatLng` argument representing the tapped coordinate
- `setState` updates `_pickedLocation` with the new `LatLng`, causing the marker to appear or move
- The `Marker` set is rebuilt on every `setState` call, showing the marker only after the first tap
- The save `IconButton` is disabled (`onPressed: null`) until `_pickedLocation` is set

## Code Example
```dart
void _selectLocation(LatLng position) {
  setState(() {
    _pickedLocation = position;
  });
}

// GoogleMap widget with onTap and markers
GoogleMap(
  onTap: widget.isSelecting ? _selectLocation : null,
  initialCameraPosition: CameraPosition(
    target: LatLng(widget.location.latitude, widget.location.longitude),
    zoom: 16,
  ),
  markers: _pickedLocation == null
      ? {}
      : {
          Marker(
            markerId: const MarkerId('m1'),
            position: _pickedLocation!,
          ),
        },
),

// AppBar save button
IconButton(
  icon: const Icon(Icons.save),
  onPressed: _pickedLocation == null
      ? null
      : () => Navigator.of(context).pop(_pickedLocation),
),
```

## Notes
Setting `onPressed: null` on the `IconButton` automatically disables it and visually grays it out — this provides clear feedback that the user needs to tap the map first. Each subsequent tap on the map moves the marker to the new position, allowing the user to refine their selection. The returned `LatLng` object from `Navigator.pop` is then used in the calling screen to run geocoding and get the address string.

## Summary
Map tap handling is implemented by connecting `GoogleMap`'s `onTap` callback to update a `_pickedLocation` state variable, which drives marker placement and enables the save button to return the selected coordinates via `Navigator.pop`.
