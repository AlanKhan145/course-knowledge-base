# Sending a POST Request to the Backend

## Overview
This lecture demonstrates how to send a POST request from a Flutter app to the Firebase backend to save new data. It covers constructing the request URL, encoding a Dart map as a JSON body, and setting the appropriate content-type header. Sending a POST request is the standard way to create new resources on a REST backend.

## Key Points
- `http.post()` is used to send data to the backend and create a new resource
- The request body must be a JSON-encoded string, created using `json.encode()` from `dart:convert`
- The `Content-Type: application/json` header tells the server how to interpret the body
- Firebase returns a JSON object with a generated `name` key as the unique ID for the new record
- The function should be `async` and `await` the `http.post()` call since it returns a `Future`

## Code Example
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> addMeal(Map<String, dynamic> mealData) async {
  final url = Uri.parse(
    'https://my-project-default-rtdb.firebaseio.com/meals.json',
  );

  final response = await http.post(
    url,
    headers: {'Content-Type': 'application/json'},
    body: json.encode(mealData),
  );

  // Firebase returns the generated ID in the response
  final responseData = json.decode(response.body);
  print(responseData['name']); // e.g., "-NxT8abc123"
}
```

## Notes
Firebase automatically generates a unique key (like a push ID) for each record created via POST. In a standard REST API, the server might instead return the full created object or just a 201 status. Always ensure the data you encode matches the expected schema on the backend to avoid silent data errors.

## Summary
A POST request sends JSON-encoded data to the backend to create a new record, using `http.post()` with a body and Content-Type header.
