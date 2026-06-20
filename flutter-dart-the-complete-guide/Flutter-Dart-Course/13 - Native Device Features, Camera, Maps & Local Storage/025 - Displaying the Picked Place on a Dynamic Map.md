# Displaying the Picked Place on a Dynamic Map

## Overview
This lecture connects the Place Details screen to the `MapScreen` to allow users to view a saved place's location on an interactive, pannable Google Map. The static map preview image in the detail screen becomes tappable, navigating the user to the `MapScreen` with `isSelecting: false` and the place's stored location. This provides the full map viewing experience for each saved place.

## Key Points
- The `MapScreen` is navigated to from `PlaceDetailScreen` with `isSelecting: false` to disable tap-to-select
- The existing `PlaceLocation` is passed as the `location` parameter to center and mark the map
- A `GestureDetector` wrapping the static map preview triggers the navigation when tapped
- No return value is needed from this navigation since it is view-only

## Code Example
```dart
// In PlaceDetailScreen
void _openMap() {
  Navigator.of(context).push(
    MaterialPageRoute(
      builder: (ctx) => MapScreen(
        location: place.location,
        isSelecting: false,
      ),
    ),
  );
}

// Wrap the static map image with a GestureDetector
GestureDetector(
  onTap: _openMap,
  child: Image.network(
    locationImage,
    width: double.infinity,
    height: 150,
    fit: BoxFit.cover,
  ),
),
```

## Notes
Passing `isSelecting: false` disables the `GoogleMap`'s `onTap` handler and hides the save button in the `AppBar`, making the map purely for viewing. This approach of reusing a single `MapScreen` for both selection and viewing reduces code duplication significantly. The map will automatically center on the stored coordinates and place a marker at that position when the screen opens.

## Summary
The Place Details screen is enhanced to navigate to the full interactive `MapScreen` when the map preview is tapped, allowing users to explore the saved location on a dynamic, pannable Google Map.
