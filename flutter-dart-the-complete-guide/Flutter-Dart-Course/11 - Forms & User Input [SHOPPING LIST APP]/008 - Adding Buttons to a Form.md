# Adding Buttons to a Form

## Overview
This lecture covers adding Cancel and Save action buttons to the shopping list form. You will learn how to position buttons within the form layout and how each button triggers a different action — cancelling discards the form while saving will eventually validate and submit it. The lecture also discusses button widget choices in Flutter such as `TextButton` and `ElevatedButton`.

## Key Points
- Forms typically have at least two actions: a cancel/reset action and a submit/save action
- `TextButton` is commonly used for secondary actions (like Cancel) and `ElevatedButton` for primary actions (like Save)
- Placing buttons in a `Row` with appropriate spacing gives a clean, standard form footer layout
- The Cancel button uses `Navigator.pop(context)` to dismiss the screen without saving
- The Save button will later be wired to trigger form validation before processing input

## Code Example
```dart
// Button row added at the bottom of the Form Column
Padding(
  padding: const EdgeInsets.only(top: 12),
  child: Row(
    mainAxisAlignment: MainAxisAlignment.end,
    children: [
      TextButton(
        onPressed: () {
          Navigator.of(context).pop();
        },
        child: const Text('Cancel'),
      ),
      const SizedBox(width: 8),
      ElevatedButton(
        onPressed: () {
          // Validation and save logic will go here
          _saveItem();
        },
        child: const Text('Add Item'),
      ),
    ],
  ),
)

void _saveItem() {
  // Placeholder — validation logic added in a later lecture
}
```

## Notes
Using `MainAxisAlignment.end` in the `Row` pushes the buttons to the right side of the screen, which follows standard Material Design form conventions. The Cancel button using `Navigator.pop` without passing any data simply dismisses the screen. It is good practice to keep the `_saveItem` method as a named function rather than an inline anonymous function so it stays readable as logic grows.

## Summary
Adding well-placed Cancel and Save buttons gives the form a complete, user-friendly interaction model consistent with Material Design guidelines.
