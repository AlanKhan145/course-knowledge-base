# Combining Conditions with AND and OR Operators

## Overview
This lecture explains how to combine multiple boolean conditions using the `&&` (AND) and `||` (OR) operators in Dart, specifically in the context of validating expense form inputs. Complex validation logic often requires checking several conditions together before deciding whether to accept or reject user input. Understanding operator precedence and short-circuit evaluation is important here.

## Key Points
- `&&` (AND) returns `true` only if both operands are `true`; short-circuits on the first `false`
- `||` (OR) returns `true` if at least one operand is `true`; short-circuits on the first `true`
- Conditions can be grouped with parentheses to control evaluation order
- Use combined conditions in `if` statements to perform multi-field validation

## Code Example
```dart
void _submitExpenseData() {
  final enteredAmount = double.tryParse(_amountController.text);
  final amountIsInvalid = enteredAmount == null || enteredAmount <= 0;

  // Combine multiple validation conditions
  if (_titleController.text.trim().isEmpty ||
      amountIsInvalid ||
      _selectedDate == null) {
    // Show error dialog — one or more fields are invalid
    showDialog(/* ... */);
    return;
  }

  // All inputs are valid — proceed
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
Short-circuit evaluation means Dart stops checking conditions as soon as the result is determined — the second operand of `&&` is not evaluated if the first is `false`. This is useful for null safety: check for `null` before accessing a property with `&&`. Combining conditions into a well-named boolean variable (like `amountIsInvalid`) improves readability.

## Summary
Combining `&&` and `||` operators allows comprehensive multi-field form validation in a single readable `if` statement before submitting expense data.
