# Better Error Handling

## Overview
This lecture refines the error handling approach by introducing more robust techniques such as custom exception classes, displaying error messages directly in the UI via a dedicated error widget, and using `ScaffoldMessenger` to show error snack bars. It moves beyond simply printing errors and ensures the user is always informed when something goes wrong. Better error handling makes the app feel professional and trustworthy.

## Key Points
- Replace generic `Exception` throws with custom exception classes for more descriptive error types
- Use `ScaffoldMessenger.of(context).showSnackBar()` to display transient error messages in a snack bar
- Show a persistent error widget in the body when data cannot be loaded at all
- Always distinguish between "could not load data" (show error widget) and "action failed" (show snack bar)
- Combine `try/catch/finally` to ensure cleanup code (like resetting loading state) always runs

## Code Example
```dart
// Custom exception class
class HttpException implements Exception {
  final String message;
  HttpException(this.message);

  @override
  String toString() => message;
}

// Throw custom exception
if (response.statusCode >= 400) {
  throw HttpException('Failed to fetch data (${response.statusCode}).');
}

// Show snack bar on action error
Future<void> _removeMeal(Meal meal) async {
  try {
    await deleteMeal(meal.id);
    setState(() => _meals.remove(meal));
  } on HttpException catch (e) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(e.message),
        backgroundColor: Theme.of(context).colorScheme.error,
      ),
    );
  }
}

// Show error widget when loading fails
Widget content = _error != null
    ? Center(child: Text(_error!, style: const TextStyle(color: Colors.red)))
    : ListView.builder(/* ... */);
```

## Notes
Using `on HttpException catch (e)` instead of a generic `catch (error)` allows you to handle specific error types differently. Snack bars are ideal for transient feedback on user-initiated actions, while a full-page error widget is better for critical failures that prevent the screen from loading. The `finally` block is useful for resetting `_isLoading` whether the request succeeded or failed.

## Summary
Better error handling uses custom exceptions, context-appropriate UI feedback (snack bars vs. error widgets), and `try/catch/finally` to ensure the app always responds gracefully to network failures.
