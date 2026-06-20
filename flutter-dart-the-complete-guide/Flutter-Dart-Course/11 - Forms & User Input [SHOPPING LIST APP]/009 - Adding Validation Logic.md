# Adding Validation Logic

## Overview
This lecture focuses on implementing validation logic inside each form field's `validator` callback to ensure users enter valid data before the form can be submitted. You will learn the rules for writing validators — they must return a `String` error message when input is invalid and `null` when it is valid. The lecture covers validating text length, numeric values, and required selections.

## Key Points
- The `validator` callback receives the current field value as a `String?` and must return `String?`
- Returning `null` from a validator means the field is valid; returning a string displays that string as an error
- Form validation is triggered by calling `_formKey.currentState!.validate()` on the `FormState`
- All validators in the form run when `validate()` is called, and all errors are shown simultaneously
- Common validation checks include null/empty checks, length constraints, and numeric parsing

## Code Example
```dart
// Name field validator
validator: (value) {
  if (value == null || value.trim().isEmpty) {
    return 'Please enter a name.';
  }
  if (value.trim().length < 2 || value.trim().length > 50) {
    return 'Must be between 2 and 50 characters.';
  }
  return null; // Valid
},

// Quantity field validator
validator: (value) {
  if (value == null || value.trim().isEmpty) {
    return 'Please enter a quantity.';
  }
  final parsed = int.tryParse(value);
  if (parsed == null || parsed <= 0) {
    return 'Must be a valid positive whole number.';
  }
  return null; // Valid
},

// Triggering validation on Save button press
void _saveItem() {
  if (_formKey.currentState!.validate()) {
    // All fields are valid — proceed with saving
  }
}
```

## Notes
It is important to always check for `null` before accessing value properties, since `validator` receives a nullable `String?`. The `int.tryParse()` function is safer than `int.parse()` because it returns `null` instead of throwing an exception when parsing fails. Validators should give clear, concise messages that tell the user exactly what is wrong and how to fix it.

## Summary
Validation logic in Flutter forms is implemented through `validator` callbacks on each field, providing real-time error feedback when `validate()` is called on the form state.
