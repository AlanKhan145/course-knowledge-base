# Handling User Text Input with the `TextField` Widget

## Overview

In this lecture, we start building the form that will be shown inside the modal bottom sheet.

This form will later allow users to add a new expense by entering information such as:

* Expense title
* Amount
* Date
* Category

For now, we focus on the first input field: the expense title.

To capture user text input, Flutter provides the `TextField` widget.

---

## Creating the `NewExpense` Widget

Instead of placing all form logic directly inside the modal bottom sheet, we create a separate widget.

Create a new file inside the `widgets` folder:

```text
lib/widgets/new_expense.dart
```

This file will contain the widget that is displayed inside the modal bottom sheet.

---

## Why Create a Separate File?

The add-expense form will contain several input elements and some internal logic.

Keeping it in a separate file makes the project easier to manage and keeps the `Expenses` widget cleaner.

---

## Creating a Stateful Widget

The new widget should be called `NewExpense`.

Since this form will later manage user input and internal state, it should extend `StatefulWidget`.

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
  @override
  Widget build(BuildContext context) {
    return const Text('New Expense Form');
  }
}
```

---

## Why Use `StatefulWidget`?

A form usually needs to store or react to user input.

For example, later we will need to handle:

* The entered title
* The entered amount
* The selected date
* The selected category

Because this widget will manage changing data, `StatefulWidget` is the correct choice.

---

## Building the Form Layout

The form should have some spacing around it so it does not touch the edges of the modal bottom sheet.

For that, wrap the content with a `Padding` widget.

```dart
class _NewExpenseState extends State<NewExpense> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(),
        ],
      ),
    );
  }
}
```

---

## Why Use `Padding`?

`Padding` adds internal spacing around a widget.

Here, it creates spacing between the form and the edges of the modal bottom sheet.

```dart
padding: const EdgeInsets.all(16)
```

This adds 16 pixels of padding on all sides.

---

## Why Use `Column`?

The add-expense form will contain multiple rows:

1. A title input field
2. A row for amount and date
3. A row for category and action buttons

Since these elements should be arranged vertically, a `Column` is appropriate.

```dart
Column(
  children: [
    TextField(),
  ],
)
```

A `ListView` is not needed here because the number of form elements is fixed and small.

---

## Adding a `TextField`

The `TextField` widget is Flutter’s standard widget for text input.

```dart
TextField()
```

It displays an input field that the user can tap and type into.

For this form, the first `TextField` will be used to enter the expense title.

---

## Limiting the Input Length

The title should not be too long.

We can limit the number of characters with `maxLength`.

```dart
TextField(
  maxLength: 50,
)
```

This limits the input to 50 characters.

Flutter will also show a character counter below the field.

---

## Adding a Label with `InputDecoration`

To tell users what they should enter, we add a label.

Labels are added through the `decoration` parameter.

```dart
TextField(
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
)
```

The `decoration` parameter expects an `InputDecoration` object.

Inside `InputDecoration`, the `label` property can be set to a widget, usually a `Text` widget.

---

## Complete First Version of `NewExpense`

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
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: const [
          TextField(
            maxLength: 50,
            decoration: InputDecoration(
              label: Text('Title'),
            ),
          ),
        ],
      ),
    );
  }
}
```

---

## Showing `NewExpense` in the Modal Bottom Sheet

Now go back to the file where the modal bottom sheet is opened.

Replace the placeholder text:

```dart
builder: (ctx) => const Text('Modal bottom sheet'),
```

with the new widget:

```dart
builder: (ctx) => const NewExpense(),
```

The updated method looks like this:

```dart
void _openAddExpenseOverlay() {
  showModalBottomSheet(
    context: context,
    builder: (ctx) => const NewExpense(),
  );
}
```

Make sure to import the new file:

```dart
import 'package:your_app/widgets/new_expense.dart';
```

---

## Result

After saving and opening the modal bottom sheet, the app now displays a real input field instead of placeholder text.

The modal sheet contains:

* Padding around the form
* A title input field
* A label saying `Title`
* A maximum character limit of 50

The user can tap into the field and type an expense title.

---

## Using `keyboardType`

The `TextField` widget also supports a `keyboardType` parameter.

This controls which keyboard should appear when the user taps the input field.

For normal text input, you can use:

```dart
keyboardType: TextInputType.text,
```

However, this is already the default, so it does not need to be set explicitly for the title field.

Later, for amount input, we can use a number keyboard:

```dart
keyboardType: const TextInputType.numberWithOptions(
  decimal: true,
),
```

This makes it easier for users to enter decimal numbers.

---

## Reading User Input

At the moment, the user can type into the field, but the app does not store or use the entered value yet.

One way to read input is by using `onChanged`.

```dart
String _enteredTitle = '';

TextField(
  maxLength: 50,
  decoration: const InputDecoration(
    label: Text('Title'),
  ),
  onChanged: (value) {
    _enteredTitle = value;
  },
)
```

The `onChanged` function runs whenever the user changes the text.

The latest value is passed into the function as `value`.

---

## Amount Input Example

Later, we can add another `TextField` for the expense amount.

```dart
TextField(
  decoration: const InputDecoration(
    prefixText: '\$ ',
    label: Text('Amount'),
  ),
  keyboardType: const TextInputType.numberWithOptions(
    decimal: true,
  ),
  onChanged: (value) {
    _enteredAmount = value;
  },
)
```

### Important Parts

```dart
prefixText: '\$ '
```

Displays a dollar sign before the input value.

```dart
label: Text('Amount')
```

Shows a label for the field.

```dart
keyboardType: TextInputType.numberWithOptions(decimal: true)
```

Shows a numeric keyboard that supports decimal input.

---

## Important Notes

### `TextField`

`TextField` is used to capture text input from the user.

It is commonly used for:

* Names
* Titles
* Email addresses
* Passwords
* Numbers
* Search fields

---

### `InputDecoration`

`InputDecoration` controls how the input field looks.

It can define:

* Label text
* Hint text
* Prefix text
* Suffix icons
* Borders
* Error messages

Example:

```dart
InputDecoration(
  label: Text('Title'),
)
```

---

### `maxLength`

`maxLength` limits the number of characters the user can type.

Example:

```dart
maxLength: 50
```

This prevents very long expense titles.

---

### `keyboardType`

`keyboardType` controls the virtual keyboard shown on mobile devices.

Examples:

```dart
TextInputType.text
TextInputType.emailAddress
TextInputType.number
TextInputType.phone
```

For decimal numbers:

```dart
TextInputType.numberWithOptions(decimal: true)
```

---

## Current Limitations

At this stage:

* The user can type a title
* The title is not submitted yet
* The title is not added to the expenses list yet
* There are no amount, date, or category fields yet

These features will be added in the next steps.

---

## Summary

In this lecture, we created the first version of the `NewExpense` widget.

We learned how to:

* Create a new form widget
* Use `StatefulWidget` for future input handling
* Add padding around the form
* Arrange form elements with `Column`
* Use `TextField` for text input
* Add a label with `InputDecoration`
* Limit input length with `maxLength`
* Display the form inside a modal bottom sheet

This gives us the foundation for building the full add-expense form.
