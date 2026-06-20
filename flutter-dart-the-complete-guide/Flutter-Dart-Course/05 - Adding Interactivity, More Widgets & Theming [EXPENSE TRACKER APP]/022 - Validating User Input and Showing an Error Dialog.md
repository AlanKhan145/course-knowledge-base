# Validating User Input and Showing an Error Dialog

## Overview
This lecture covers implementing input validation for the expense form and displaying an `AlertDialog` when the user submits invalid data. Validation ensures the app does not create malformed expense entries. The `showDialog` function is used to present a blocking dialog that requires user acknowledgment before they can continue.

## Key Points
- Validate all required fields before creating an `Expense` object
- `showDialog` displays a modal dialog that blocks interaction with the background
- `AlertDialog` provides title, content, and action buttons in a standard dialog format
- Return early from the submit function if validation fails to prevent bad data

## Code Example
```dart
void _submitExpenseData() {
  final enteredAmount = double.tryParse(_amountController.text);
  final amountIsInvalid = enteredAmount == null || enteredAmount <= 0;

  if (_titleController.text.trim().isEmpty ||
      amountIsInvalid ||
      _selectedDate == null) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Invalid input'),
        content: const Text(
          'Please make sure a valid title, amount, date and category was entered.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx),
            child: const Text('Okay'),
          ),
        ],
      ),
    );
    return;
  }

  widget.onAddExpense(
    Expense(
      title: _titleController.text.trim(),
      amount: enteredAmount,
      date: _selectedDate!,
      category: _selectedCategory,
    ),
  );
  Navigator.pop(context);
}
```

## Notes
`AlertDialog` automatically handles accessibility and focus trapping within the dialog. Use `Navigator.pop(ctx)` inside the dialog's action to close only the dialog without closing the underlying modal. Client-side validation is fast and improves UX, but always pair it with server-side validation in production apps.

## Summary
Form validation with combined conditions and `AlertDialog` feedback prevents bad expense data from being saved and guides users toward correcting their input.
