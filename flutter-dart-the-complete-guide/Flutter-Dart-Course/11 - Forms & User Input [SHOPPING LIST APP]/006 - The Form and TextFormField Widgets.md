# The Form and TextFormField Widgets

## Overview
This lecture introduces Flutter's `Form` widget and its companion `TextFormField` for building structured, validatable input forms. You will learn how `Form` acts as a container that manages the state of all its child input fields collectively. The lecture shows how `TextFormField` differs from a plain `TextField` and why it is preferred inside a `Form`.

## Key Points
- `Form` is a container widget that groups form fields and provides shared validation and save functionality
- `TextFormField` integrates with `Form` to support built-in validation and value saving via `FormState`
- Each `TextFormField` can be customized with `decoration`, `keyboardType`, `initialValue`, and more
- The `validator` property accepts a function that returns an error string or `null` if the input is valid
- `TextInputType` (e.g., `TextInputType.number`) controls the keyboard type shown to the user

## Code Example
```dart
// Inside the NewItem screen body
Form(
  child: Column(
    children: [
      TextFormField(
        maxLength: 50,
        decoration: const InputDecoration(
          label: Text('Name'),
        ),
        validator: (value) {
          if (value == null || value.isEmpty || value.trim().length < 2) {
            return 'Must be between 2 and 50 characters.';
          }
          return null;
        },
      ),
      TextFormField(
        decoration: const InputDecoration(
          label: Text('Quantity'),
        ),
        keyboardType: TextInputType.number,
        initialValue: '1',
        validator: (value) {
          if (value == null ||
              value.isEmpty ||
              int.tryParse(value) == null ||
              int.tryParse(value)! <= 0) {
            return 'Must be a valid, positive number.';
          }
          return null;
        },
      ),
    ],
  ),
)
```

## Notes
The `Form` widget on its own does nothing visible — it must be paired with a `GlobalKey<FormState>` to programmatically trigger validation and data extraction. `TextFormField` is essentially a `TextField` wrapped with `FormField` logic, making it aware of its parent `Form`. Providing clear and helpful validation messages improves the user experience significantly.

## Summary
The `Form` and `TextFormField` widgets work together to provide a structured, validatable input experience that is far more manageable than using raw `TextField` widgets.
