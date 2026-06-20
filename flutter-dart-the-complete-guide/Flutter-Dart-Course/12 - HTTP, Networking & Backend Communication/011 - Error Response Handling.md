# Error Response Handling

## Overview
This lecture covers how to detect and handle error responses from the backend, specifically checking HTTP status codes to identify failed requests. It shows how to throw exceptions when a bad status code is received and how to catch those exceptions in the UI layer to display an error message to the user. Proper error handling prevents silent failures and improves app reliability.

## Key Points
- HTTP status codes in the 4xx and 5xx ranges indicate errors that should be handled explicitly
- Check `response.statusCode` after every request and throw an exception if it indicates failure
- Use Dart's `try/catch` block to catch exceptions thrown during HTTP calls
- Store an error message string in state and display it in the UI when an error occurs
- Always reset the loading state to `false` in the `catch` block to stop the spinner on error

## Code Example
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

// Throw on bad status code
Future<List<Meal>> fetchMeals() async {
  final url = Uri.parse(
    'https://my-project-default-rtdb.firebaseio.com/meals.json',
  );
  final response = await http.get(url);

  if (response.statusCode >= 400) {
    throw Exception('Failed to fetch meals. Please try again later.');
  }

  final Map<String, dynamic> data = json.decode(response.body);
  // ... transform data ...
  return [];
}

// Catch in the widget
Future<void> _loadMeals() async {
  setState(() => _isLoading = true);
  try {
    final meals = await fetchMeals();
    setState(() {
      _meals = meals;
      _isLoading = false;
    });
  } catch (error) {
    setState(() {
      _errorMessage = 'Something went wrong. Please try again.';
      _isLoading = false;
    });
  }
}
```

## Notes
Status code `>= 400` is a reliable threshold — codes 400-499 are client errors (bad request, unauthorized) and 500-599 are server errors. Always show a user-friendly error message rather than exposing raw exception details. For network connectivity issues (no internet), Dart will throw a `SocketException` which must also be caught.

## Summary
Error response handling involves checking status codes after each request, throwing exceptions for failures, and catching them in the UI to display meaningful error messages.
