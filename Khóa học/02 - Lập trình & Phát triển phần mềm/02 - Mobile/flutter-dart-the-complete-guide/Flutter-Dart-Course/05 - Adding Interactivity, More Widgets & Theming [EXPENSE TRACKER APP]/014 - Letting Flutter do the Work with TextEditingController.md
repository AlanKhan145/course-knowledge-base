# Letting Flutter Do the Work with `TextEditingController`

## Overview

In this lecture, we learn a better way to manage user input in a `TextField`.

Previously, we used the `onChanged` callback to manually store the latest input value every time the user typed something.

That approach works, but it can become repetitive when a form has multiple input fields.

Flutter provides a more convenient solution: `TextEditingController`.

A `TextEditingController` is connected to a `TextField` and automatically stores the current text entered by the user.

---

## Problem with `onChanged`

Using `onChanged` requires us to:

1. Create a variable to store the input
2. Create a method to update that variable
3. Connect the method to `onChanged`
4. Update the value on every keystroke

Example:

```dart
var _enteredTitle = '';

void _saveTitleInput(String inputValue) {
  _enteredTitle = inputValue;
}

TextField(
  onChanged: _saveTitleInput,
)
```

This works, but it becomes inconvenient when the form contains multiple text fields.

---

## Using `TextEditingController`

Instead of manually storing every value, we can create a controller.

```dart
final _titleController = TextEditingController();
```

This controller keeps track of the current text inside the connected `TextField`.

Because the controller object itself does not need to be reassigned, it can be marked as `final`.

---

## Connecting the Controller to a `TextField`

To connect a controller to a `TextField`, use the `controller` parameter.

```dart
TextField(
  controller: _titleController,
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)
```

Now Flutter automatically updates `_titleController.text` whenever the user types into the field.

We no longer need `onChanged` for basic input storage.

---

## Reading the Entered Text

To access the current input value, use the controller’s `text` property.

```dart
print(_titleController.text);
```

For example, inside a button:

```dart
ElevatedButton(
  onPressed: () {
    print(_titleController.text);
  },
  child: const Text('Save Expense'),
)
```

When the button is pressed, this prints the latest value entered by the user.

---

## Complete Example

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

  @override
  void dispose() {
    _titleController.dispose();
    super.dispose();
  }

  void _submitExpenseData() {
    print(_titleController.text);
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
          Row(
            children: [
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

## Why `dispose()` Is Important

When using `TextEditingController`, it is very important to dispose of it when the widget is removed.

```dart
@override
void dispose() {
  _titleController.dispose();
  super.dispose();
}
```

The controller uses memory. If the widget is removed but the controller is not disposed, the controller may continue to exist in memory.

This can cause unnecessary memory usage and, in larger apps, may eventually lead to performance problems or crashes.

---

## When Is the Widget Removed?

In this app, the `NewExpense` widget is displayed inside a modal bottom sheet.

When the modal sheet is closed, the `NewExpense` widget is no longer needed.

At that point, Flutter calls the `dispose()` method, and we should clean up the controller there.

---

## Adding an Amount Controller

If the form has multiple text fields, each field should have its own controller.

```dart
final _titleController = TextEditingController();
final _amountController = TextEditingController();
```

Then connect each controller to the correct `TextField`.

```dart
TextField(
  controller: _titleController,
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)

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

## Disposing Multiple Controllers

If multiple controllers are created, all of them should be disposed.

```dart
@override
void dispose() {
  _titleController.dispose();
  _amountController.dispose();
  super.dispose();
}
```

Always call `super.dispose()` after disposing your own controllers.

---

## Updated Example with Title and Amount

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

## `TextEditingController` vs `onChanged`

### Using `onChanged`

```dart
TextField(
  onChanged: (value) {
    _enteredTitle = value;
  },
)
```

This approach manually stores input on every keystroke.

It is simple, but it requires extra variables and functions.

---

### Using `TextEditingController`

```dart
TextField(
  controller: _titleController,
)
```

This approach lets Flutter manage the input value.

You can read the current value whenever you need it:

```dart
_titleController.text
```

This is usually cleaner for forms.

---

## Important Notes

### `TextEditingController`

A `TextEditingController` manages the text entered into a `TextField`.

It allows you to:

* Read the current text
* Set the text programmatically
* Clear the field
* Listen to input changes if needed

---

### `controller.text`

The `text` property contains the current value of the connected `TextField`.

```dart
_titleController.text
```

If the user has not typed anything, it returns an empty string.

---

### One Controller per TextField

Each `TextField` should usually have its own controller.

Do not reuse the same controller for multiple unrelated fields.

---

### Always Dispose Controllers

Whenever you create a controller, dispose it in the `dispose()` method.

```dart
@override
void dispose() {
  _titleController.dispose();
  super.dispose();
}
```

This prevents memory leaks.

---

## Why This Approach Is Better

Using `TextEditingController` is useful because:

* Flutter stores the input automatically
* You can read the value only when needed
* You do not need to react to every keystroke
* The code becomes cleaner with multiple fields
* You can also clear or update the text from code

---

## Summary

In this lecture, we replaced manual input tracking with `TextEditingController`.

We learned that:

* `TextEditingController` connects to a `TextField`
* The current value can be read with `.text`
* We no longer need `onChanged` just to store input
* Controllers should be marked as `final`
* Controllers must be disposed in `dispose()`
* Each text field should have its own controller

This approach is cleaner and more scalable for building forms in Flutter.
