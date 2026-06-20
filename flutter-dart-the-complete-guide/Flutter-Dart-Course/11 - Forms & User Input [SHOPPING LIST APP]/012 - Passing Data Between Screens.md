# Passing Data Between Screens

## Overview
This lecture explains how to pass data from the `NewItem` screen back to the `GroceryList` screen after the form is submitted. You will learn how `Navigator.pop()` can carry a return value and how `Navigator.push()` returns a `Future` that resolves with that value when the pushed screen is popped. This enables the list screen to receive the new `GroceryItem` and update its state.

## Key Points
- `Navigator.of(context).pop(data)` sends data back to the previous screen when popping
- `Navigator.of(context).push(...)` returns a `Future<T>` that completes when the screen is popped
- The calling screen uses `await` on the push call to receive the returned data
- After receiving the new item, `setState()` is called to add it to the list and trigger a UI rebuild
- The returned value is nullable — always check for `null` before using the returned data

## Code Example
```dart
// In NewItem screen — pop with the new item as return value
void _saveItem() {
  if (_formKey.currentState!.validate()) {
    _formKey.currentState!.save();
    Navigator.of(context).pop(
      GroceryItem(
        id: DateTime.now().toString(),
        name: _enteredName,
        quantity: _enteredQuantity,
        category: _selectedCategory,
      ),
    );
  }
}

// In GroceryList screen — await the push and handle the returned item
void _addItem() async {
  final newItem = await Navigator.of(context).push<GroceryItem>(
    MaterialPageRoute(
      builder: (ctx) => const NewItem(),
    ),
  );

  if (newItem == null) {
    return; // User cancelled — no item to add
  }

  setState(() {
    _groceryItems.add(newItem);
  });
}
```

## Notes
The `async/await` pattern on `Navigator.push` is the cleanest way to handle return values from a pushed screen. Type-annotating the push call with `<GroceryItem>` (i.e., `push<GroceryItem>(...)`) helps Dart infer the correct type for `newItem`. If the user presses Cancel or the back button, `pop()` is called without arguments, so `newItem` will be `null` — the null check prevents errors.

## Summary
Flutter screens can communicate by passing return values through `Navigator.pop()`, with the calling screen awaiting the `Future` returned by `Navigator.push()` to receive the data.
