# Adding a Dropdown Button

## Overview
This lecture covers adding a `DropdownButton` widget to the expense form so users can select the expense category from a predefined list of options. The dropdown is populated using the `Category` enum values, and the selected value is stored in state. This is a common pattern for presenting a limited set of choices in a compact UI element.

## Key Points
- `DropdownButton<T>` displays a button that opens a dropdown menu of typed items
- The `items` parameter takes a list of `DropdownMenuItem<T>` widgets
- The `value` parameter must match one of the item values to show the current selection
- `onChanged` is called when the user selects a different item

## Code Example
```dart
Category _selectedCategory = Category.leisure;

// In build():
DropdownButton(
  value: _selectedCategory,
  items: Category.values.map((category) =>
    DropdownMenuItem(
      value: category,
      child: Text(category.name.toUpperCase()),
    ),
  ).toList(),
  onChanged: (value) {
    if (value == null) return;
    setState(() {
      _selectedCategory = value;
    });
  },
)
```

## Notes
The `Category.values` list contains all enum cases, making it easy to generate dropdown items without hardcoding them. Always initialize `_selectedCategory` with a default value so the dropdown shows a selection immediately. Calling `setState` inside `onChanged` ensures the UI updates to reflect the new selection.

## Summary
`DropdownButton` populated from enum values gives users a clean, type-safe way to select an expense category in the add-expense form.
