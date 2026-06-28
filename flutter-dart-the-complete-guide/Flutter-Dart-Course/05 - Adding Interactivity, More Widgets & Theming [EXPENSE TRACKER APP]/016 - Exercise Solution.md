# Exercise Solution

## Overview

In this lecture, we walk through the solution to the previous practice exercise.

The goal was to extend the `NewExpense` form by adding:

* A new input field for the expense amount
* A controller for that amount input
* A numeric keyboard type
* A dollar sign prefix
* A cancel button
* Console output for both title and amount values

This solution reinforces how to work with `TextField`, `TextEditingController`, `InputDecoration`, and form buttons.

---

## Starting Point

Previously, the form already had a title input field.

```dart
TextField(
  controller: _titleController,
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)
```

The exercise asked us to add another input field for the amount.

---

## Adding the Amount Controller

Since the amount field is a separate `TextField`, it needs its own controller.

```dart
final _amountController = TextEditingController();
```

The state class now has two controllers:

```dart
final _titleController = TextEditingController();
final _amountController = TextEditingController();
```

Each controller manages the text entered into one input field.

---

## Disposing the Amount Controller

Whenever a `TextEditingController` is created, it should also be disposed.

Update the `dispose()` method:

```dart
@override
void dispose() {
  _titleController.dispose();
  _amountController.dispose();
  super.dispose();
}
```

This ensures that both controllers are removed from memory when the widget is destroyed.

This is especially important here because the `NewExpense` widget is shown inside a modal bottom sheet. When the modal closes, the widget is removed, so its controllers should be cleaned up.

---

## Adding the Amount TextField

Next, add a second `TextField` below the title input.

```dart
TextField(
  controller: _amountController,
  keyboardType: TextInputType.number,
  decoration: const InputDecoration(
    label: Text('Amount'),
  ),
)
```

This creates an input field for the amount.

---

## Using a Numeric Keyboard

The amount field should use a keyboard optimized for numbers.

```dart
keyboardType: TextInputType.number
```

This tells Flutter to show a number-focused keyboard when the user taps the field.

A more flexible option is:

```dart
keyboardType: const TextInputType.numberWithOptions(
  decimal: true,
)
```

This allows decimal numbers such as:

```text
12.99
```

For expense amounts, allowing decimals is usually the better choice.

---

## Adding a Dollar Sign Prefix

To make it clear that the user should enter a money amount, add a dollar sign prefix.

```dart
decoration: const InputDecoration(
  prefixText: '\$ ',
  label: Text('Amount'),
)
```

The dollar sign must be escaped with a backslash:

```dart
'\$ '
```

This is because `$` has a special meaning in Dart strings. It is used for string interpolation.

The space after the dollar sign creates visual separation between the symbol and the entered number.

---

## Printing the Amount Value

The amount controller stores the entered value as text.

To print it, use:

```dart
print(_amountController.text);
```

Update the submit method:

```dart
void _submitExpenseData() {
  print(_titleController.text);
  print(_amountController.text);
}
```

Now, when the **Save Expense** button is pressed, both values are printed to the debug console.

---

## Important Note About Amount Values

Even though the user enters a number, the value from a `TextField` is still a `String`.

```dart
_amountController.text
```

returns text, not a number.

Later, this value will need to be converted manually, for example with:

```dart
double.tryParse(_amountController.text)
```

For now, printing the text value is enough to confirm that the input works.

---

## Adding the Cancel Button

The exercise also asked for a second button: a `TextButton` for canceling.

```dart
TextButton(
  onPressed: () {},
  child: const Text('Cancel'),
)
```

At this stage, the button does not need to close the modal yet.

The `onPressed` function is left empty for now:

```dart
onPressed: () {}
```

The closing logic will be added later.

---

## Updated Button Row

The row now contains two buttons:

```dart
Row(
  children: [
    TextButton(
      onPressed: () {},
      child: const Text('Cancel'),
    ),
    ElevatedButton(
      onPressed: _submitExpenseData,
      child: const Text('Save Expense'),
    ),
  ],
)
```

The `TextButton` is used for canceling, while the `ElevatedButton` is used for saving the expense.

---

## Complete Solution

```dart
import 'package:flutter/material.dart';

class NewExpense extends StatefulWidget {
  const NewExpense({super.key});

  @override
  State<NewExpense> createState() {
    return _NewExpenseState();
  }
}

class _NewExpenseState extends State<NewExpense> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();

  @override
  void dispose() {
    _titleController.dispose();
    _amountController.dispose();
    super.dispose();
  }

  void _submitExpenseData() {
    print(_titleController.text);
    print(_amountController.text);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(
            controller: _titleController,
            maxLength: 50,
            decoration: const InputDecoration(
              label: Text('Title'),
            ),
          ),
          TextField(
            controller: _amountController,
            keyboardType: const TextInputType.numberWithOptions(
              decimal: true,
            ),
            decoration: const InputDecoration(
              prefixText: '\$ ',
              label: Text('Amount'),
            ),
          ),
          Row(
            children: [
              TextButton(
                onPressed: () {},
                child: const Text('Cancel'),
              ),
              ElevatedButton(
                onPressed: _submitExpenseData,
                child: const Text('Save Expense'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

---

## Testing the Solution

Open the modal bottom sheet and enter values such as:

```text
Title: Groceries
Amount: 24.99
```

Then press **Save Expense**.

The debug console should show:

```text
Groceries
24.99
```

This confirms that both controllers are correctly connected to their input fields.

---

## What Changed?

### Before

The form only had:

* A title input
* One controller
* One save button

### After

The form now has:

* A title input
* An amount input
* A `_titleController`
* An `_amountController`
* A numeric keyboard for the amount field
* A dollar sign prefix
* A cancel button
* A save button that prints both values

---

## Common Mistakes

### Forgetting to Dispose the Controller

Incorrect:

```dart
@override
void dispose() {
  _titleController.dispose();
  super.dispose();
}
```

Correct:

```dart
@override
void dispose() {
  _titleController.dispose();
  _amountController.dispose();
  super.dispose();
}
```

Every controller that is created should be disposed.

---

### Forgetting to Assign the Controller

Incorrect:

```dart
TextField(
  decoration: const InputDecoration(
    label: Text('Amount'),
  ),
)
```

Correct:

```dart
TextField(
  controller: _amountController,
  decoration: const InputDecoration(
    label: Text('Amount'),
  ),
)
```

Without the controller, the input value will not be available through `_amountController.text`.

---

### Treating the Amount as a Number Immediately

This is not a number yet:

```dart
_amountController.text
```

It is still a `String`.

To use it as a number later, it must be parsed.

---

## Summary

In this exercise solution, we completed the amount input field for the `NewExpense` form.

We learned how to:

* Add a second `TextField`
* Create a second `TextEditingController`
* Connect the controller to the input field
* Use a numeric keyboard type
* Add a dollar sign prefix with `prefixText`
* Dispose all controllers correctly
* Add a cancel button
* Print both title and amount values

The form can now collect both the expense title and expense amount.
