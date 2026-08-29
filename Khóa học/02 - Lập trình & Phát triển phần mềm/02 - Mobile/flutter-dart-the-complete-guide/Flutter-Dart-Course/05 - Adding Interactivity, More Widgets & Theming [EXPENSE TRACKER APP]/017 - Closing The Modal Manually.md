# Closing the Modal Manually

## Overview

In this lecture, we learn how to close a modal bottom sheet manually.

Previously, the modal bottom sheet could be closed by tapping the dark backdrop behind it. However, a real form should also provide a clear **Cancel** button that closes the modal when pressed.

Flutter provides this behavior through the `Navigator` class.

---

## Goal

The current form already has a **Cancel** button.

```dart
TextButton(
  onPressed: () {},
  child: const Text('Cancel'),
)
```

At the moment, this button exists visually, but it does not do anything.

The goal is to make it close the modal bottom sheet when tapped.

---

## Using `Navigator.pop`

To close the modal manually, use:

```dart
Navigator.pop(context);
```

The `Navigator` class is built into Flutter and is commonly used for moving between screens or closing overlays.

The `pop` method removes the top-most route or overlay from the screen.

A modal bottom sheet is treated like something that can be popped from the navigation stack.

---

## Updating the Cancel Button

Inside the `onPressed` function of the **Cancel** button, call `Navigator.pop(context)`.

```dart
TextButton(
  onPressed: () {
    Navigator.pop(context);
  },
  child: const Text('Cancel'),
)
```

Now, when the user taps **Cancel**, the modal bottom sheet closes immediately.

---

## Why Is `context` Needed?

`Navigator.pop` needs a `BuildContext`.

```dart
Navigator.pop(context);
```

The `context` tells Flutter where this widget is located in the widget tree.

Using that context, Flutter can find the correct `Navigator` and remove the modal bottom sheet from the screen.

In this case, the `context` comes from the `build` method of the `NewExpense` widget.

```dart
@override
Widget build(BuildContext context) {
  // context is available here
}
```

---

## Complete Button Row Example

```dart
Row(
  children: [
    TextButton(
      onPressed: () {
        Navigator.pop(context);
      },
      child: const Text('Cancel'),
    ),
    ElevatedButton(
      onPressed: _submitExpenseData,
      child: const Text('Save Expense'),
    ),
  ],
)
```

The **Cancel** button now closes the modal, while the **Save Expense** button still submits the entered form data.

---

## Closing the Modal After Submitting

Later, we can also close the modal after the user successfully submits valid expense data.

```dart
void _submitExpenseData() {
  print(_titleController.text);
  print(_amountController.text);

  Navigator.pop(context);
}
```

However, in a real app, the modal should usually only close after validation succeeds.

---

## Validation Before Closing

A better version would first check whether the entered data is valid.

```dart
void _submitExpenseData() {
  final enteredTitle = _titleController.text;
  final enteredAmount = double.tryParse(_amountController.text);

  if (enteredTitle.trim().isEmpty || enteredAmount == null || enteredAmount <= 0) {
    return;
  }

  Navigator.pop(context);
}
```

This prevents the modal from closing if the user entered invalid data.

---

## Important Notes

### `Navigator`

`Navigator` manages screens, routes, and overlays in a Flutter app.

It can be used to:

* Open new screens
* Go back to previous screens
* Close dialogs
* Close modal bottom sheets

---

### `Navigator.pop`

`Navigator.pop(context)` removes the top-most route or overlay.

In this case, it closes the modal bottom sheet.

```dart
Navigator.pop(context);
```

---

### Cancel Without Saving

The **Cancel** button should close the modal without saving any data.

```dart
TextButton(
  onPressed: () {
    Navigator.pop(context);
  },
  child: const Text('Cancel'),
)
```

This gives the user a clear way to exit the form.

---

### Save After Validation

The **Save Expense** button should usually validate the input first.

Only after the data is valid should the modal close.

```dart
if (isValid) {
  Navigator.pop(context);
}
```

---

## Result

After adding `Navigator.pop(context)` to the **Cancel** button:

1. The user opens the modal bottom sheet
2. The user taps **Cancel**
3. Flutter calls `Navigator.pop(context)`
4. The modal bottom sheet closes

This creates a much better user experience because the user no longer has to tap outside the modal to dismiss it.

---

## Next Step

The next improvement is to adjust the layout of the form.

Currently, the amount text field takes up an entire row. Later, it should share a row with another input-like element that allows the user to select a date for the expense.

---

## Summary

In this lecture, we learned how to close a modal bottom sheet manually.

We used:

```dart
Navigator.pop(context);
```

to close the modal when the user taps the **Cancel** button.

Key takeaways:

* `Navigator.pop(context)` removes the top-most overlay or route
* A modal bottom sheet can be closed with `Navigator.pop`
* The `context` helps Flutter find the correct navigator
* The Cancel button should close the modal without saving
* The Save button can also close the modal after successful validation

This is a fundamental Flutter pattern that will also be useful later when working with dialogs and screen navigation.
