# Working with Futures for Handling Data from the Future

## Overview

In this lecture, we learn how to handle values that are not available immediately.

When using `showDatePicker`, the selected date is not returned right away. Instead, Flutter returns a `Future`.

A `Future` represents a value that will become available later. In this case, the future value is the date selected by the user.

To work with that future value, we can use Dart’s `async` and `await` syntax.

---

## Why Do We Need a Future?

When this code runs:

```dart
showDatePicker(
  context: context,
  initialDate: now,
  firstDate: firstDate,
  lastDate: now,
);
```

Flutter opens the date picker dialog.

However, at that exact moment, the user has not selected a date yet.

The selected date will only be available later, after the user either:

* Picks a date
* Cancels the picker

Because of that, `showDatePicker` returns a `Future<DateTime?>`.

---

## What Is a `Future`?

A `Future` is an object that represents a value that will be available in the future.

For example:

```dart
Future<DateTime?>
```

means:

* A `DateTime` value may be returned later
* Or `null` may be returned if the user cancels

The future itself is returned immediately, but the actual value inside it is only available once the asynchronous operation finishes.

---

## Using `.then()`

One way to handle a future is by calling `.then()`.

```dart
showDatePicker(
  context: context,
  initialDate: now,
  firstDate: firstDate,
  lastDate: now,
).then((pickedDate) {
  print(pickedDate);
});
```

The function passed to `.then()` runs after the future completes.

In this example, it runs after the user closes the date picker.

---

## Using `async` and `await`

A cleaner and more readable approach is to use `async` and `await`.

```dart
void _presentDatePicker() async {
  final pickedDate = await showDatePicker(
    context: context,
    initialDate: now,
    firstDate: firstDate,
    lastDate: now,
  );

  print(pickedDate);
}
```

The `await` keyword tells Dart to wait until the future completes.

The code after `await` only runs after the user has selected or canceled the date picker.

---

## Important: The UI Is Not Blocked

Even though `await` makes the function wait, it does not freeze the app.

Flutter can still:

* Render the UI
* Handle animations
* Let the user interact with the date picker

Only the current async function pauses until the future completes.

---

## Updating `_presentDatePicker`

The date picker method should be marked as `async`.

```dart
void _presentDatePicker() async {
  final now = DateTime.now();
  final firstDate = DateTime(
    now.year - 1,
    now.month,
    now.day,
  );

  final pickedDate = await showDatePicker(
    context: context,
    initialDate: now,
    firstDate: firstDate,
    lastDate: now,
  );
}
```

Now `pickedDate` contains the value returned by the date picker.

---

## Storing the Selected Date

To store the selected date, create a state variable.

```dart
DateTime? _selectedDate;
```

The question mark means this value can be either:

* A `DateTime`
* `null`

It starts as `null` because no date has been selected yet.

---

## Updating State After Picking a Date

After the user selects a date, store it with `setState`.

```dart
setState(() {
  _selectedDate = pickedDate;
});
```

This tells Flutter that the widget state changed and the UI should be rebuilt.

---

## Handling `null`

If the user cancels the date picker, `pickedDate` will be `null`.

A safer version checks for this before updating the state.

```dart
if (pickedDate == null) {
  return;
}

setState(() {
  _selectedDate = pickedDate;
});
```

This prevents storing `null` when the user did not actually choose a date.

---

## Complete Date Picker Method

```dart
DateTime? _selectedDate;

void _presentDatePicker() async {
  final now = DateTime.now();
  final firstDate = DateTime(
    now.year - 1,
    now.month,
    now.day,
  );

  final pickedDate = await showDatePicker(
    context: context,
    initialDate: now,
    firstDate: firstDate,
    lastDate: now,
  );

  if (pickedDate == null) {
    return;
  }

  setState(() {
    _selectedDate = pickedDate;
  });
}
```

---

## Displaying the Selected Date

Now we can display the selected date in the UI.

If no date has been selected, show placeholder text.

```dart
Text(
  _selectedDate == null
      ? 'No date selected'
      : formatter.format(_selectedDate!),
)
```

---

## Why Use `formatter.format()`?

A raw `DateTime` value is not very user-friendly.

For example, it may look like this:

```text
2026-06-17 00:00:00.000
```

Using a formatter makes it easier to read.

```dart
formatter.format(_selectedDate!)
```

This can display something like:

```text
6/17/2026
```

---

## Why Use the Exclamation Mark?

The `_selectedDate` variable is nullable.

```dart
DateTime? _selectedDate;
```

But `formatter.format()` requires a non-null `DateTime`.

Since we already check that `_selectedDate` is not null in the ternary expression, we can safely write:

```dart
_selectedDate!
```

The exclamation mark tells Dart:

```text
I know this value is not null here.
```

---

## Importing the Formatter

If a date formatter already exists in the `expense.dart` model file, you can import that file and reuse the formatter.

```dart
import '../models/expense.dart';
```

Then use:

```dart
formatter.format(_selectedDate!)
```

This avoids creating another formatter in `new_expense.dart`.

---

## Updated Date Input UI

```dart
Expanded(
  child: Row(
    mainAxisAlignment: MainAxisAlignment.end,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: [
      Text(
        _selectedDate == null
            ? 'No date selected'
            : formatter.format(_selectedDate!),
      ),
      IconButton(
        onPressed: _presentDatePicker,
        icon: const Icon(Icons.calendar_month),
      ),
    ],
  ),
)
```

---

## Complete Example

```dart
import 'package:flutter/material.dart';

import '../models/expense.dart';

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

  DateTime? _selectedDate;

  void _presentDatePicker() async {
    final now = DateTime.now();
    final firstDate = DateTime(
      now.year - 1,
      now.month,
      now.day,
    );

    final pickedDate = await showDatePicker(
      context: context,
      initialDate: now,
      firstDate: firstDate,
      lastDate: now,
    );

    if (pickedDate == null) {
      return;
    }

    setState(() {
      _selectedDate = pickedDate;
    });
  }

  @override
  void dispose() {
    _titleController.dispose();
    _amountController.dispose();
    super.dispose();
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
              Expanded(
                child: TextField(
                  controller: _amountController,
                  keyboardType: const TextInputType.numberWithOptions(
                    decimal: true,
                  ),
                  decoration: const InputDecoration(
                    prefixText: '\$ ',
                    label: Text('Amount'),
                  ),
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      _selectedDate == null
                          ? 'No date selected'
                          : formatter.format(_selectedDate!),
                    ),
                    IconButton(
                      onPressed: _presentDatePicker,
                      icon: const Icon(Icons.calendar_month),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Row(
            children: [
              TextButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('Cancel'),
              ),
              ElevatedButton(
                onPressed: () {},
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

## `.then()` vs `async` / `await`

### Using `.then()`

```dart
showDatePicker(
  context: context,
  initialDate: now,
  firstDate: firstDate,
  lastDate: now,
).then((pickedDate) {
  if (pickedDate == null) {
    return;
  }

  setState(() {
    _selectedDate = pickedDate;
  });
});
```

### Using `async` / `await`

```dart
final pickedDate = await showDatePicker(
  context: context,
  initialDate: now,
  firstDate: firstDate,
  lastDate: now,
);
```

Both approaches work, but `async` and `await` usually make the code easier to read.

---

## Important Notes

### `Future`

A `Future` represents a value that will be available later.

Examples of future-based operations include:

* Date picker results
* HTTP requests
* File loading
* Database queries
* Delayed actions

---

### `async`

The `async` keyword marks a function as asynchronous.

```dart
void _presentDatePicker() async {
  // async code here
}
```

This allows the function to use `await`.

---

### `await`

The `await` keyword waits for a future to complete.

```dart
final pickedDate = await showDatePicker(...);
```

The next line only runs after the future has completed.

---

### Nullable Future Result

`showDatePicker` returns:

```dart
Future<DateTime?>
```

The question mark means the result can be `null`.

This happens when the user cancels the picker.

---

## Common Mistake

Do not assume that the user always selects a date.

Incorrect:

```dart
setState(() {
  _selectedDate = pickedDate;
});
```

Better:

```dart
if (pickedDate == null) {
  return;
}

setState(() {
  _selectedDate = pickedDate;
});
```

Always handle the cancellation case.

---

## Summary

In this lecture, we learned how to handle data that becomes available in the future.

We learned that:

* `showDatePicker` returns a `Future<DateTime?>`
* A `Future` represents a future value
* `.then()` can be used to react when the future completes
* `async` and `await` make asynchronous code easier to read
* The selected date should be stored in a nullable `DateTime?` variable
* `setState` is needed to update the UI after a date is selected
* The selected date can be displayed with a formatter

This allows the expense form to store and display the date chosen by the user.
