# Getting User Input on Every Keystroke

## Overview
This lecture explores using the `onChanged` callback of `TextField` to capture user input on every keystroke and store it in state variables. This approach gives immediate access to the current value but requires manual state tracking. You will see how to wire up the title and amount fields to update local variables as the user types.

## Key Points
- `onChanged` is a callback that receives the current field value as a `String` on every change
- Store the entered value in a state variable declared inside the `State` class
- This approach is simple but does not provide programmatic control over the field
- Mutable state variables (not `final`) must be used to store the changing values

## Code Example
```dart
class _NewExpenseState extends State<NewExpense> {
  var _enteredTitle = '';
  var _enteredAmount = '';

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(
            onChanged: (value) {
              _enteredTitle = value; // updated on every keystroke
            },
            decoration: const InputDecoration(label: Text('Title')),
          ),
          TextField(
            onChanged: (value) {
              _enteredAmount = value;
            },
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            decoration: const InputDecoration(
              prefixText: '\$ ',
              label: Text('Amount'),
            ),
          ),
        ],
      ),
    );
  }
}
```

## Notes
Using `onChanged` without `setState` is valid if you only need the value when a button is pressed — no rebuild is triggered. However, if the UI needs to react to changes immediately (e.g., live validation), you should call `setState`. This approach is simpler than using a `TextEditingController` but provides less control.

## Summary
The `onChanged` callback captures keystroke-by-keystroke input and stores it in state variables, providing a straightforward way to track user input.
