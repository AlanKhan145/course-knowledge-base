# Exercise Solution

## Overview
This lecture reveals the solution to the previous practice exercise, walking through how to correctly add the new input field to the expense form. The instructor explains the reasoning behind each design decision and highlights common mistakes made during the exercise. Comparing your solution to the reference implementation helps identify gaps in understanding.

## Key Points
- The solution adds the amount `TextField` with a `TextEditingController`
- `InputDecoration` is configured with a `prefixText` of `'\$ '` and a label
- `keyboardType` is set to `TextInputType.numberWithOptions(decimal: true)` for numeric input
- The controller is properly disposed in the `dispose()` override

## Code Example
```dart
// Solution: adding the amount input
final _amountController = TextEditingController();

@override
void dispose() {
  _amountController.dispose();
  super.dispose();
}

// In build():
TextField(
  controller: _amountController,
  keyboardType: const TextInputType.numberWithOptions(decimal: true),
  decoration: const InputDecoration(
    prefixText: '\$ ',
    label: Text('Amount'),
  ),
),
```

## Notes
Comparing your own solution to the instructor's version reveals subtle differences in approach. Even if your solution works, the reference implementation may show cleaner or more idiomatic patterns. Always review solutions for best practices even when your own code is functionally correct.

## Summary
The exercise solution demonstrates the correct way to add an amount input field with a controller, proper keyboard type, and disposal, completing the expense form.
