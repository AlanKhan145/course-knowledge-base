# Working with the Request and Waiting for the Response

## Overview
This lecture dives deeper into how to properly handle asynchronous HTTP requests in Flutter using async/await and Futures. It covers how to wait for a response before continuing execution and how to extract useful information from the `http.Response` object. Correctly awaiting and processing responses is fundamental to writing reliable networking code.

## Key Points
- HTTP requests are asynchronous — they return a `Future` that resolves when the server responds
- The `await` keyword pauses execution inside an `async` function until the `Future` completes
- The `http.Response` object contains `statusCode`, `body`, `headers`, and other metadata
- `response.body` is a raw JSON string that must be decoded with `json.decode()` to get a usable Dart map
- The response should be inspected before being used to ensure the request succeeded

## Code Example
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> sendAndHandleRequest() async {
  final url = Uri.parse(
    'https://my-project-default-rtdb.firebaseio.com/meals.json',
  );

  // Await the Future — execution pauses here until the response arrives
  final http.Response response = await http.post(
    url,
    headers: {'Content-Type': 'application/json'},
    body: json.encode({'title': 'Pizza', 'calories': 800}),
  );

  print('Status code: ${response.statusCode}'); // e.g., 200
  print('Response body: ${response.body}');      // Raw JSON string

  // Decode the JSON body into a Dart Map
  final Map<String, dynamic> responseData = json.decode(response.body);
  print(responseData); // {name: -NxT8abc123}
}
```

## Notes
Without `await`, the code continues running before the response arrives, leading to null values or race conditions. The `http.Response` object is rich — besides `body` and `statusCode`, you can inspect `headers` for content-type information. Always decode the body as the appropriate Dart type (Map, List, etc.) based on the expected JSON structure.

## Summary
Using `async`/`await` with `http.Response` allows Flutter to pause execution until the server responds and then extract status codes and decoded JSON data from the response.
