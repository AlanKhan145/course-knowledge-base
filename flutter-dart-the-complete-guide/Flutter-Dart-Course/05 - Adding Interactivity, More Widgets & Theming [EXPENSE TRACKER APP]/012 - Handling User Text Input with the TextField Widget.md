# Handling User Text Input with the TextField Widget

## Overview
This lecture covers the `TextField` widget, Flutter's primary tool for capturing text input from the user. You will learn how to configure a `TextField` with labels, keyboard types, and decorations, and how to read the entered text. The TextField is used in the add-expense form for the title and amount fields.

## Key Points
- `TextField` renders an input field that the user can type into
- `InputDecoration` provides labels, hints, prefixes, and borders for the field
- The `keyboardType` parameter controls which keyboard type appears (e.g., number pad)
- `maxLength` limits how many characters the user can enter

## Code Example
```dart
TextField(
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
  maxLength: 50,
  keyboardType: TextInputType.text,
  onChanged: (value) {
    _enteredTitle = value;
  },
)

// For amount input
TextField(
  decoration: const InputDecoration(
    prefixText: '\$ ',
    label: Text('Amount'),
  ),
  keyboardType: const TextInputType.numberWithOptions(decimal: true),
  onChanged: (value) {
    _enteredAmount = value;
  },
)
```

## Notes
`InputDecoration` offers many customization options including `border`, `hintText`, `prefixIcon`, and `suffixIcon`. Using `keyboardType: TextInputType.numberWithOptions(decimal: true)` shows a numeric keyboard that allows decimal input on both iOS and Android. The `onChanged` callback fires on every keystroke, which is suitable for real-time validation but may be replaced by a controller for better control.

## Summary
The `TextField` widget with `InputDecoration` creates styled, purpose-specific input fields that capture user text for the expense form.
