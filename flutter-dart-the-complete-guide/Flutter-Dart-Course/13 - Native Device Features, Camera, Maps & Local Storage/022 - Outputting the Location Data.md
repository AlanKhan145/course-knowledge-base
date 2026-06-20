# Outputting the Location Data

## Overview
This lecture updates the Place Details screen to display the location data associated with a saved place, including the human-readable address and the static map preview image. The address string is displayed in a `Text` widget below the place image, and the static map snapshot constructed from the coordinates is shown at the bottom of the detail view. This gives the user full context about where the place is located.

## Key Points
- `place.location.address` is displayed as a `Text` widget in the detail screen
- The static map preview URL is reconstructed in the detail screen using `place.location.latitude` and `place.location.longitude`
- The detail screen layout stacks the photo at the top, the address below it, and the map preview at the bottom
- Tapping the map preview will later navigate to the full interactive map screen

## Code Example
```dart
class PlaceDetailScreen extends StatelessWidget {
  const PlaceDetailScreen({super.key, required this.place});

  final Place place;

  String get locationImage {
    final lat = place.location.latitude;
    final lng = place.location.longitude;
    const apiKey = 'YOUR_API_KEY';
    return 'https://maps.googleapis.com/maps/api/staticmap'
        '?center=$lat,$lng&zoom=16&size=600x300'
        '&maptype=roadmap&markers=$lat,$lng&key=$apiKey';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(place.name)),
      body: Stack(
        children: [
          Image.file(place.image, fit: BoxFit.cover,
              width: double.infinity, height: double.infinity),
          Positioned(
            bottom: 0, left: 0, right: 0,
            child: Column(children: [
              Image.network(locationImage, width: double.infinity, height: 150,
                  fit: BoxFit.cover),
              Text(place.location.address,
                  style: Theme.of(context).textTheme.titleLarge),
            ]),
          ),
        ],
      ),
    );
  }
}
```

## Notes
Using a `Stack` with a `Positioned` widget at the bottom is a common Flutter pattern for overlaying information on top of a full-screen image. The address text should be styled with sufficient contrast against the background image — consider adding a semi-transparent overlay behind the text for readability. Extracting the static map URL construction into a getter method (`get locationImage`) keeps the `build` method clean.

## Summary
The Place Details screen is enhanced to display the address text and a static map preview, giving users complete location context for each saved place using data from the `PlaceLocation` model.
