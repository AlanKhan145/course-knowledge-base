# Adding the http Package

## Overview
This lecture covers how to add the official `http` package to a Flutter project to enable HTTP networking. The package is published by the Dart team and provides a straightforward API for making HTTP requests. It is the most commonly recommended package for basic REST communication in Flutter apps.

## Key Points
- The `http` package is added as a dependency in `pubspec.yaml`
- Run `flutter pub get` to download and install the package after editing `pubspec.yaml`
- Import the package with `import 'package:http/http.dart' as http;` — using `as http` avoids naming conflicts
- The package provides top-level functions like `http.get()`, `http.post()`, and `http.delete()`
- All request functions return a `Future<http.Response>` that must be awaited

## Code Example
```dart
// pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0

// In your Dart file
import 'package:http/http.dart' as http;

void fetchData() async {
  final url = Uri.parse('https://my-project-default-rtdb.firebaseio.com/meals.json');
  final response = await http.get(url);
  print(response.body); // Raw JSON string
}
```

## Notes
Always use `Uri.parse()` to construct URLs rather than passing raw strings, as the `http` package requires a `Uri` object. The `as http` alias is a strong convention in the Flutter community and prevents conflicts with Dart's built-in `Response` or other types. Keep the package version up to date by checking pub.dev.

## Summary
The `http` package is added via `pubspec.yaml` and provides simple async functions to send HTTP requests and receive responses in Flutter.
