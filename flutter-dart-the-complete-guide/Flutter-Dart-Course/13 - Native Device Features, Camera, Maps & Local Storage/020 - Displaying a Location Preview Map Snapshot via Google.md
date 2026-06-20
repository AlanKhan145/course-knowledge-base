# Displaying a Location Preview Map Snapshot via Google

## Overview
This lecture shows how to display a static map image preview of the picked location inside the `LocationInput` widget using the Google Maps Static API. Instead of embedding a full interactive map widget (which comes later), a lightweight URL-based map snapshot image is fetched and displayed using Flutter's `Image.network` widget. This gives users a visual confirmation of the selected location without the overhead of an interactive map.

## Key Points
- The Google Maps Static API returns a PNG image for a given lat/lng coordinate via a URL
- The URL format is: `https://maps.googleapis.com/maps/api/staticmap?center=LAT,LNG&zoom=16&size=600x300&maptype=roadmap&markers=LAT,LNG&key=API_KEY`
- `Image.network(url)` renders the static map image fetched from the constructed URL
- The preview is shown inside the `LocationInput` widget's container once `_pickedLocation` is set

## Code Example
```dart
String get _locationPreviewImageUrl {
  if (_pickedLocation == null) return '';
  final lat = _pickedLocation!.latitude;
  final lng = _pickedLocation!.longitude;
  const apiKey = 'YOUR_API_KEY';
  return 'https://maps.googleapis.com/maps/api/staticmap'
      '?center=$lat,$lng'
      '&zoom=16'
      '&size=600x300'
      '&maptype=roadmap'
      '&markers=color:red%7Clabel:A%7C$lat,$lng'
      '&key=$apiKey';
}

// In the build method
Widget previewContent = const Text('No location chosen');

if (_pickedLocation != null) {
  previewContent = Image.network(
    _locationPreviewImageUrl,
    fit: BoxFit.cover,
    width: double.infinity,
    height: double.infinity,
  );
}
```

## Notes
The Maps Static API is a REST-based API that returns an image file rather than JSON, making it trivial to use with `Image.network`. The `zoom` parameter (0-21) controls the map scale — 16 is a good default for street-level detail. Adding a `markers` parameter places a visible pin on the map at the target location, making it immediately clear where the selected place is.

## Summary
A static map preview image is displayed using the Google Maps Static API URL with `Image.network`, providing a visual location confirmation inside the `LocationInput` widget without requiring a full interactive map.
