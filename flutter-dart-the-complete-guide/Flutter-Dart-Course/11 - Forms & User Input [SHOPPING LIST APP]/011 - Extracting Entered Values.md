# Extracting Entered Values

## Overview
This lecture covers how to extract the values that users have entered into the form fields after successful validation. You will learn how to use the `onSaved` callback on each `TextFormField` to capture values into state variables, and how `_formKey.currentState!.save()` triggers all these callbacks at once. This is the step where raw user input is converted into a usable `GroceryItem` object.

## Key Points
- The `onSaved` callback on a form field is called when `FormState.save()` is triggered
- `onSaved` receives the current field value as a `String?` and is used to update class-level variables
- Class-level variables (e.g., `_enteredName`, `_enteredQuantity`) store the extracted values temporarily
- After saving, the collected values are combined to construct a new `GroceryItem` instance
- The `save()` method should only be called after `validate()` returns `true`

## Code Example
```dart
class _NewItemState extends State<NewItem> {
  final _formKey = GlobalKey<FormState>();

  var _enteredName = '';
  var _enteredQuantity = 1;
  var _selectedCategory = categories[Category.vegetables]!;

  void _saveItem() {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save(); // Triggers all onSaved callbacks

      // Use extracted values to create a GroceryItem
      final newItem = GroceryItem(
        id: DateTime.now().toString(),
        name: _enteredName,
        quantity: _enteredQuantity,
        category: _selectedCategory,
      );

      // Pass newItem back to the list screen
      Navigator.of(context).pop(newItem);
    }
  }

  // In the TextFormField for name:
  // onSaved: (value) { _enteredName = value!; },

  // In the TextFormField for quantity:
  // onSaved: (value) { _enteredQuantity = int.parse(value!); },
}
```

## Notes
The `onSaved` callback is guaranteed to receive a non-null value after validation has already confirmed the field is not empty, so using `value!` is safe in this context. Creating the `GroceryItem` with `DateTime.now().toString()` as the ID is a simple approach for local state — a proper UUID library would be used in production. The `_selectedCategory` is updated via `onChanged` on the dropdown, so it does not need an `onSaved` callback.

## Summary
Extracting form values using `onSaved` callbacks is the clean, Flutter-idiomatic way to collect all user inputs at once and convert them into a structured data model.
