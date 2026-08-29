# Getting User Input on Every Keystroke

## Overview

In this lecture, we learn how to capture user input from a `TextField` while the user is typing.

The goal is to store the latest value entered by the user so that we can use it later when the form is submitted.

Flutter provides a simple way to do this through the `onChanged` parameter of the `TextField` widget.

---

## Goal

Previously, we created a basic `NewExpense` form with a title input field.

```dart
TextField(
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)
```

At this point, the user can type into the field, but the app does not store the entered value yet.

Now we want to:

1. Listen to every change in the input field
2. Store the latest entered title
3. Use that value when the user presses a button

---

## Using `onChanged`

The `TextField` widget has an `onChanged` parameter.

```dart
TextField(
  onChanged: (value) {
    // runs whenever the text changes
  },
)
```

The function passed to `onChanged` is executed every time the input value changes.

For example, it runs whenever the user types or deletes a character.

The current input value is automatically passed into the function as a `String`.

---

## Creating a State Variable

Inside the `_NewExpenseState` class, create a variable to store the entered title.

```dart
var _enteredTitle = '';
```

Initially, it is an empty string because the user has not entered anything yet.

This variable cannot be `final` because its value will change as the user types.

---

## Creating a Save Method

You can create a separate method to store the entered value.

```dart
void _saveTitleInput(String inputValue) {
  _enteredTitle = inputValue;
}
```

This method receives the latest input value and stores it in `_enteredTitle`.

---

## Connecting the Method to `TextField`

Now pass the method to the `onChanged` parameter.

```dart
TextField(
  maxLength: 50,
  onChanged: _saveTitleInput,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)
```

Notice that we pass the function reference:

```dart
onChanged: _saveTitleInput
```

not:

```dart
onChanged: _saveTitleInput()
```

We do not call the function manually. Flutter calls it automatically whenever the text changes.

---

## Why `setState` Is Not Needed Here

Normally, when state changes in Flutter, we use `setState`.

However, in this case, we are only storing the entered value for later use.

We are not displaying `_enteredTitle` anywhere in the UI.

Because the UI does not need to rebuild, `setState` is not required.

```dart
void _saveTitleInput(String inputValue) {
  _enteredTitle = inputValue;
}
```

This is valid because we only need the value later when the form is submitted.

---

## Adding a Submit Button

To test whether the entered value is stored correctly, add a button below the `TextField`.

Since we may later add more than one button, we can wrap it in a `Row`.

```dart
Row(
  children: [
    ElevatedButton(
      onPressed: () {
        print(_enteredTitle);
      },
      child: const Text('Save Expense'),
    ),
  ],
)
```

When the button is pressed, the latest entered title is printed to the debug console.

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
  var _enteredTitle = '';

  void _saveTitleInput(String inputValue) {
    _enteredTitle = inputValue;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(
            maxLength: 50,
            onChanged: _saveTitleInput,
            decoration: const InputDecoration(
              label: Text('Title'),
            ),
          ),
          Row(
            children: [
              ElevatedButton(
                onPressed: () {
                  print(_enteredTitle);
                },
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

## What Happens Step by Step?

When the user types into the title field:

1. The value inside the `TextField` changes
2. Flutter automatically calls `_saveTitleInput`
3. The latest text is passed into the method
4. `_enteredTitle` is updated
5. When the button is pressed, `_enteredTitle` contains the latest input value

---

## Adding an Amount Field

The same approach can be used for another input field, such as the expense amount.

```dart
var _enteredAmount = '';
```

Then add another `TextField`.

```dart
TextField(
  keyboardType: const TextInputType.numberWithOptions(
    decimal: true,
  ),
  decoration: const InputDecoration(
    prefixText: '\$ ',
    label: Text('Amount'),
  ),
  onChanged: (value) {
    _enteredAmount = value;
  },
)
```

The amount is also stored as a string at this stage because all `TextField` input values are received as strings.

Later, this string can be converted into a number.

---

## Updated Example with Title and Amount

```dart
class _NewExpenseState extends State<NewExpense> {
  var _enteredTitle = '';
  var _enteredAmount = '';

  void _saveTitleInput(String inputValue) {
    _enteredTitle = inputValue;
  }

  void _saveAmountInput(String inputValue) {
    _enteredAmount = inputValue;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(
            maxLength: 50,
            onChanged: _saveTitleInput,
            decoration: const InputDecoration(
              label: Text('Title'),
            ),
          ),
          TextField(
            keyboardType: const TextInputType.numberWithOptions(
              decimal: true,
            ),
            onChanged: _saveAmountInput,
            decoration: const InputDecoration(
              prefixText: '\$ ',
              label: Text('Amount'),
            ),
          ),
          Row(
            children: [
              ElevatedButton(
                onPressed: () {
                  print(_enteredTitle);
                  print(_enteredAmount);
                },
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

## Important Notes

### `onChanged`

`onChanged` is called whenever the input value changes.

It receives the current value as a `String`.

```dart
onChanged: (value) {
  _enteredTitle = value;
}
```

---

### State Variable

The entered value should be stored in a variable inside the `State` class.

```dart
var _enteredTitle = '';
```

This variable stores the latest value entered by the user.

---

### No `setState` Needed

`setState` is only needed if the UI should update immediately after the value changes.

Here, we only store the value and use it later, so `setState` is not necessary.

---

### Function Reference

When passing a method to `onChanged`, pass the method name without parentheses.

```dart
onChanged: _saveTitleInput
```

Flutter will call the method automatically when the input changes.

---

## Advantages of This Approach

Using `onChanged` is simple and easy to understand.

It is useful when:

* You only need the latest input value
* You do not need to control the field programmatically
* You want a quick way to store user input

---

## Limitation

This approach does not give full control over the text field.

For example, it is less convenient if you want to:

* Clear the input field manually
* Set the input value from code
* Read the current value only when submitting
* Manage more complex form behavior

For those use cases, a `TextEditingController` is often a better option.

---

## Summary

In this lecture, we captured user input on every keystroke using the `onChanged` callback.

We learned that:

* `TextField` provides an `onChanged` parameter
* `onChanged` runs whenever the user changes the input
* The current input value is passed as a `String`
* The value can be stored in a state variable
* `setState` is not required if the UI does not need to update
* A button can later use the stored value when submitting the form

This gives us a basic way to collect user input from the add-expense form.
