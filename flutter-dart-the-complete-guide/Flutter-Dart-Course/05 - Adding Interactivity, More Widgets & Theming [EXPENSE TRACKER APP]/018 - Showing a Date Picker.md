# Showing a Date Picker

## Overview
This lecture covers how to display Flutter's built-in date picker dialog using `showDatePicker`, allowing users to select a date for their expense. The function returns a `Future<DateTime?>` that resolves to the selected date or `null` if the user cancels. You will wire the result to a state variable that stores the chosen date.

## Key Points
- `showDatePicker` is a Flutter built-in that shows a calendar dialog
- It returns `Future<DateTime?>` — always handle the nullable result
- Required parameters: `context`, `initialDate`, `firstDate`, and `lastDate`
- Store the selected date in a nullable `DateTime?` state variable

## Code Example
```dart
DateTime? _selectedDate;

void _presentDatePicker() async {
  final now = DateTime.now();
  final firstDate = DateTime(now.year - 1, now.month, now.day);

  final pickedDate = await showDatePicker(
    context: context,
    initialDate: now,
    firstDate: firstDate,
    lastDate: now,
  );

  setState(() {
    _selectedDate = pickedDate; // may be null if user cancelled
  });
}

// Trigger from a button
IconButton(
  onPressed: _presentDatePicker,
  icon: const Icon(Icons.calendar_month),
)
```

## Notes
`showDatePicker` is an async function, so it must be awaited inside an `async` method. Setting `lastDate` to `DateTime.now()` prevents users from selecting future dates for past expenses. Display the selected date using a formatted string in the UI, showing a placeholder text if no date has been chosen yet.

## Summary
`showDatePicker` provides a polished built-in date selection dialog, and its `Future<DateTime?>` return value is stored in state to record the chosen expense date.
