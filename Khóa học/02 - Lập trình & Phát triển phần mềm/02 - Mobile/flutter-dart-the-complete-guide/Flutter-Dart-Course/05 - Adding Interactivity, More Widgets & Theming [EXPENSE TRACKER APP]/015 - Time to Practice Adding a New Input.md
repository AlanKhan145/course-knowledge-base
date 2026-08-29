# Time to Practice: Adding a New Input

## Overview

In this lecture, you get a small hands-on challenge.

Now that you understand how to add `TextField` widgets and how to manage input with `TextEditingController`, it is time to practice by adding another input field to the `NewExpense` form.

The new input field should allow the user to enter the expense amount.

You will also add a second button to the button row: a `TextButton` for canceling the form.

---

## Practice Goal

Your task is to update the `NewExpense` form by adding:

1. A new text field for the expense amount
2. A controller for storing the amount input
3. A number-optimized keyboard for the amount field
4. A proper label and prefix for the amount input
5. A `TextButton` for canceling the form
6. Logic to print both the title and amount when the save button is pressed

---

## Current Form

Before this exercise, the form only has one input field for the title.

```dart id="e2hf9a"
TextField(
  controller: _titleController,
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)
```

The save button currently prints the title value.

```dart id="o0j2f7"
void _submitExpenseData() {
  print(_titleController.text);
}
```

---

## Step 1: Add an Amount Controller

Since the amount field is also a text input field, it should have its own controller.

```dart id="fpopv9"
final _amountController = TextEditingController();
```

Each `TextField` should use a separate controller.

So now the state class should contain:

```dart id="co9jab"
final _titleController = TextEditingController();
final _amountController = TextEditingController();
```

---

## Step 2: Dispose the Amount Controller

Because we created another `TextEditingController`, we must also dispose it.

```dart id="wqtwcz"
@override
void dispose() {
  _titleController.dispose();
  _amountController.dispose();
  super.dispose();
}
```

This prevents memory leaks when the modal sheet is closed.

---

## Step 3: Add the Amount TextField

Add another `TextField` below the title field.

```dart id="2x9a6u"
TextField(
  controller: _amountController,
  keyboardType: const TextInputType.numberWithOptions(
    decimal: true,
  ),
  decoration: const InputDecoration(
    prefixText: '\$ ',
    label: Text('Amount'),
  ),
)
```

---

## Why Use `keyboardType`?

The amount should be a number, so the keyboard should be optimized for numeric input.

```dart id="qz7arj"
keyboardType: const TextInputType.numberWithOptions(
  decimal: true,
)
```

The `decimal: true` option allows users to enter decimal values such as:

```text id="dr6t0q"
12.99
```

This is useful for money input.

---

## Why Use `prefixText`?

The amount represents money, so we can show a dollar sign before the input.

```dart id="oiub38"
prefixText: '\$ '
```

The backslash is needed because `$` has a special meaning in Dart string interpolation.

---

## Step 4: Print Both Input Values

Update the submit method so that it prints both the title and the amount.

```dart id="ckg0w5"
void _submitExpenseData() {
  print(_titleController.text);
  print(_amountController.text);
}
```

This lets you test whether both input fields are working correctly.

---

## Step 5: Add a Cancel Button

Inside the button row, add a `TextButton`.

```dart id="7i4si9"
TextButton(
  onPressed: () {},
  child: const Text('Cancel'),
)
```

At this stage, the button does not need to close the modal yet.

The goal is only to add the button to the UI.

Later, this button will be connected to logic that closes the modal overlay.

---

## Updated Button Row

The row should now contain two buttons:

```dart id="z7d0hl"
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

---

## Complete Practice Solution

```dart id="om0f26"
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

## Things to Test

After implementing the exercise, run the app and test the form.

Try entering:

```text id="wlgh1q"
Title: Groceries
Amount: 24.99
```

Then press **Save Expense**.

The debug console should print both values:

```text id="k6m2oc"
Groceries
24.99
```

---

## Important Notes

### One Controller per Field

Each input field should have its own controller.

```dart id="hppzo4"
final _titleController = TextEditingController();
final _amountController = TextEditingController();
```

Do not use the title controller for the amount field.

---

### Dispose Every Controller

Every controller you create should be disposed.

```dart id="w5k0iz"
_titleController.dispose();
_amountController.dispose();
```

This is important for memory management.

---

### Save Button

The save button should trigger the submit function.

```dart id="qk2pna"
onPressed: _submitExpenseData
```

This means Flutter will call `_submitExpenseData` when the user presses the button.

---

### Cancel Button

The cancel button is added now, but it does not need to do anything yet.

```dart id="jgx3sm"
onPressed: () {}
```

Later, it will be used to close the modal bottom sheet.

---

## Challenge Checklist

Before moving on, make sure your form has:

* A title `TextField`
* An amount `TextField`
* A `_titleController`
* An `_amountController`
* A numeric keyboard for the amount input
* A dollar sign prefix for the amount field
* A save button
* A cancel button
* `dispose()` logic for both controllers
* Console output for both title and amount

---

## Summary

In this practice lecture, you added a second input field to the `NewExpense` form.

You practiced:

* Creating another `TextEditingController`
* Connecting a controller to a `TextField`
* Using `keyboardType` for number input
* Using `InputDecoration` with `prefixText`
* Printing multiple input values
* Adding a `TextButton` for canceling

This exercise reinforces the core concepts needed to build complete forms in Flutter.
