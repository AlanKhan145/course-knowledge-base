# Using Googles Geocoding API

## Overview
This lecture demonstrates how to use the Google Geocoding API via HTTP requests to convert raw GPS latitude and longitude coordinates into a human-readable address string. The `http` package is used to make a GET request to the Geocoding API endpoint, and the JSON response is parsed to extract the formatted address. This address is then stored alongside the coordinates in the `PlaceLocation` model.

## Key Points
- The Geocoding API endpoint is `https://maps.googleapis.com/maps/api/geocode/json?latlng=LAT,LNG&key=API_KEY`
- The `http` package's `get` method returns a `Response` with a `body` that is decoded using `dart:convert`'s `json.decode`
- The formatted address is found at `data['results'][0]['formatted_address']` in the JSON response
- The `PlaceLocation` model is updated to include an `address` String field

## Code Example
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<String> _getAddressFromCoords(double lat, double lng) async {
  const apiKey = 'YOUR_API_KEY';
  final url = Uri.parse(
    'https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=$apiKey',
  );

  final response = await http.get(url);
  final resData = json.decode(response.body);
  final address = resData['results'][0]['formatted_address'] as String;
  return address;
}

// Updated PlaceLocation model
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
```

## Notes
The Geocoding API may return multiple results ordered by relevance; using index `[0]` gets the best match. Always handle possible network errors and empty result arrays in production code to avoid runtime exceptions. The `address` field enriches the `PlaceLocation` model, enabling the app to display a meaningful location description to the user without requiring them to interpret raw coordinates.

## Summary
Google's Geocoding API is used with an HTTP GET request to convert GPS coordinates into a formatted human-readable address, which is then stored in the `PlaceLocation` model alongside latitude and longitude.
