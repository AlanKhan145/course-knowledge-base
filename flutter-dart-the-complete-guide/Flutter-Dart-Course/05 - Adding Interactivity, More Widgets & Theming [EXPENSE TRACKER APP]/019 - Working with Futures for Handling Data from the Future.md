# Working with Futures for Handling Data from the Future

## Overview
This lecture dives deeper into Dart's `Future` type and the `async`/`await` syntax used to handle asynchronous operations such as date picker results. Understanding Futures is essential for any Flutter app that deals with user interactions, API calls, or file I/O. You will see how `await` pauses execution until the Future completes without blocking the UI thread.

## Key Points
- A `Future<T>` represents a value that will be available at some point in the future
- `async` marks a function as asynchronous, allowing use of `await` inside it
- `await` pauses the function until the `Future` resolves, then provides the value
- Futures can complete with a value or with an error, and with `null` if nullable

## Code Example
```dart
// Async method that awaits the date picker future
void _presentDatePicker() async {
  final pickedDate = await showDatePicker(
    context: context,
    initialDate: DateTime.now(),
    firstDate: DateTime(2020),
    lastDate: DateTime.now(),
  );

  // Execution resumes here after the user closes the picker
  if (pickedDate == null) {
    return; // user cancelled
  }

  setState(() {
    _selectedDate = pickedDate;
  });
}

// Using .then() as an alternative to async/await
showDatePicker(
  context: context,
  initialDate: DateTime.now(),
  firstDate: DateTime(2020),
  lastDate: DateTime.now(),
).then((pickedDate) {
  if (pickedDate == null) return;
  setState(() => _selectedDate = pickedDate);
});
```

## Notes
`async`/`await` is syntactic sugar over `.then()` callbacks, making asynchronous code look and feel synchronous. Using `context` after `await` can trigger a "context used after widget was unmounted" warning — guard with `mounted` check when needed. Dart Futures are single-subscription by default and can only be awaited or listened to once.

## Summary
Dart Futures with `async`/`await` enable clean, readable handling of asynchronous events like date picker results without blocking the UI thread.
