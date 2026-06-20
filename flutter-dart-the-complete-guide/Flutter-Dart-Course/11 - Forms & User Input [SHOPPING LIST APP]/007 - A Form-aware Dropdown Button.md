# A Form-aware Dropdown Button

## Overview
This lecture covers adding a category selector to the form using `DropdownButtonFormField`, which integrates seamlessly with Flutter's `Form` widget. You will learn how to populate the dropdown with values from the `Category` enum and how the widget participates in validation and value saving alongside other form fields. This makes the category selection part of the same form submission flow.

## Key Points
- `DropdownButtonFormField` is the form-aware version of `DropdownButton`, designed to work inside a `Form`
- It supports the same `validator` and `onSaved` callbacks as `TextFormField`
- Dropdown items are built from the `Category` enum values using `.values` and `map()`
- Each `DropdownMenuItem` can display both text and a colored icon for a richer UI
- Setting an `initialValue` ensures a category is pre-selected when the form first loads

## Code Example
```dart
import 'package:shopping_list/models/category.dart';

// Inside the Form Column, after the quantity TextFormField
var _selectedCategory = categories[Category.vegetables]!;

DropdownButtonFormField(
  value: _selectedCategory,
  items: [
    for (final category in categories.entries)
      DropdownMenuItem(
        value: category.value,
        child: Row(
          children: [
            Container(
              width: 16,
              height: 16,
              color: category.value.color,
            ),
            const SizedBox(width: 6),
            Text(category.value.title),
          ],
        ),
      ),
  ],
  onChanged: (value) {
    setState(() {
      _selectedCategory = value!;
    });
  },
)
```

## Notes
Unlike `TextFormField`, `DropdownButtonFormField` requires an `onChanged` callback to update the selected value in state, even when using form save mechanisms. The categories map (defined separately) maps each `Category` enum value to a `CategoryData` object containing the title and color. Using `DropdownButtonFormField` rather than a plain `DropdownButton` ensures the selection is part of the unified form validation flow.

## Summary
`DropdownButtonFormField` allows category selection to participate fully in form validation and submission, keeping all user input under one unified `Form` widget.
