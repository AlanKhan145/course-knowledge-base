# Closing The Modal Manually

## Overview
This lecture shows how to programmatically close a modal bottom sheet from within the modal itself, rather than relying solely on the user swiping it away. Using `Navigator.pop(context)` or the modal's own context allows you to close the overlay after the user submits the form or taps a cancel button. This is a fundamental navigation pattern in Flutter.

## Key Points
- `Navigator.pop(context)` dismisses the top-most route, including modal bottom sheets
- Call `pop` after successful form submission or when the user cancels
- The context used must be the one belonging to the modal widget
- A Cancel button should call `Navigator.pop` without saving any data

## Code Example
```dart
void _submitExpenseData() {
  // validate input first...
  final enteredTitle = _titleController.text.trim();
  final enteredAmount = double.tryParse(_amountController.text);

  if (enteredTitle.isEmpty || enteredAmount == null || enteredAmount <= 0) {
    // show error — do NOT close modal
    return;
  }

  // If valid, close the modal
  Navigator.pop(context);
}

// Cancel button
TextButton(
  onPressed: () {
    Navigator.pop(context); // closes without saving
  },
  child: const Text('Cancel'),
),
```

## Notes
`Navigator.pop` can optionally return a value to the caller: `Navigator.pop(context, result)`. The caller can capture this with `await showModalBottomSheet(...)`. Always validate data before closing so users are not left with incomplete entries.

## Summary
`Navigator.pop(context)` provides programmatic control over closing modal sheets, enabling a smooth user experience after form submission or cancellation.
