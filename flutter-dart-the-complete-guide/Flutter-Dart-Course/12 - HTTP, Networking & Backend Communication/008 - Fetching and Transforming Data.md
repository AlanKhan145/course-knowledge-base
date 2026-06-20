# Fetching and Transforming Data

## Overview
This lecture covers how to send a GET request to retrieve data from the Firebase backend and transform the raw JSON response into a list of strongly-typed Dart model objects. It shows how to decode a nested JSON structure returned by Firebase and map each entry to an instance of a custom class. Data transformation is a key skill for building clean, maintainable Flutter apps.

## Key Points
- `http.get()` is used to fetch data from the backend without sending a body
- Firebase returns data as a JSON object where each key is a unique ID and the value is the record
- `json.decode(response.body)` returns a `Map<String, dynamic>` that must be iterated to extract records
- Each entry in the map can be converted to a model object using a factory constructor or named constructor
- The resulting list of model objects can be stored in state and used to build the UI

## Code Example
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class Meal {
  final String id;
  final String title;
  final int calories;

  Meal({required this.id, required this.title, required this.calories});
}

Future<List<Meal>> fetchMeals() async {
  final url = Uri.parse(
    'https://my-project-default-rtdb.firebaseio.com/meals.json',
  );

  final response = await http.get(url);

  // Firebase returns: { "-NxT8abc": { "title": "Pizza", "calories": 800 }, ... }
  final Map<String, dynamic> data = json.decode(response.body);

  final List<Meal> meals = [];
  data.forEach((id, mealData) {
    meals.add(Meal(
      id: id,
      title: mealData['title'] as String,
      calories: mealData['calories'] as int,
    ));
  });

  return meals;
}
```

## Notes
Firebase's JSON structure uses auto-generated string keys as IDs, so iterating with `forEach` on the decoded map is the standard approach. In production APIs, the response is often a JSON array instead, which decodes to a `List<dynamic>`. Always cast individual fields to their expected types to avoid runtime type errors.

## Summary
Fetching data with `http.get()` returns raw JSON that must be decoded and mapped into typed Dart model objects before being used in the Flutter UI.
