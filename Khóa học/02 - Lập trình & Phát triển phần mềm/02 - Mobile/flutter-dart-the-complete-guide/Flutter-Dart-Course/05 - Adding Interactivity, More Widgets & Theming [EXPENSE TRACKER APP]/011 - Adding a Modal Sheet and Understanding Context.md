# Adding a Modal Sheet and Understanding Context

## Overview

In this lecture, we make the plus button in the `AppBar` open a modal overlay from the bottom of the screen.

This modal bottom sheet will later contain the form for adding a new expense.

We also learn about `BuildContext`, which is an important concept in Flutter. It helps Flutter understand where a widget is located inside the widget tree and allows widgets to access surrounding data such as themes, navigation, dialogs, and modal overlays.

---

## Goal

Previously, we added an `IconButton` to the `AppBar`.

```dart
IconButton(
  onPressed: () {},
  icon: const Icon(Icons.add),
)
```

At this point, the button exists, but it does not do anything meaningful yet.

The goal now is to make this button open a modal bottom sheet when pressed.

---

## Creating a Separate Method

Instead of writing all the modal logic directly inside the anonymous function, we create a separate method inside the `_ExpensesState` class.

```dart
void _openAddExpenseOverlay() {
  showModalBottomSheet(
    context: context,
    builder: (ctx) => const Text('Modal bottom sheet'),
  );
}
```

This method does not return anything, so its return type is `void`.

The method name starts with an underscore:

```dart
_openAddExpenseOverlay
```

This makes it private to the current Dart file.

---

## Connecting the Method to the Button

Now we pass the method to the `onPressed` parameter.

```dart
IconButton(
  onPressed: _openAddExpenseOverlay,
  icon: const Icon(Icons.add),
)
```

Notice that we do not write parentheses:

```dart
_openAddExpenseOverlay
```

not:

```dart
_openAddExpenseOverlay()
```

This is because we do not want to execute the function immediately. Instead, we want to give Flutter a reference to the function so Flutter can call it later when the button is pressed.

---

## Using `showModalBottomSheet`

Flutter provides a built-in function called `showModalBottomSheet`.

It creates a panel that slides up from the bottom of the screen.

```dart
showModalBottomSheet(
  context: context,
  builder: (ctx) => const Text('Modal bottom sheet'),
);
```

When the modal sheet opens:

* A panel appears at the bottom
* The background becomes dimmed
* Tapping the dark backdrop closes the modal sheet

This is useful for temporary input forms, action menus, or extra controls.

---

## Understanding the `context` Argument

The `showModalBottomSheet` function requires a `context`.

```dart
context: context
```

`BuildContext` is an object managed by Flutter. It contains information about a widget’s position in the widget tree.

You can think of it as metadata about:

* Where the widget is located
* What widgets are above it
* What inherited data is available
* Which theme, navigator, or scaffold it belongs to

Every widget has its own context.

---

## Why Is `context` Available Here?

Inside a `State` class, Flutter automatically provides a `context` property.

For example:

```dart
class _ExpensesState extends State<Expenses> {
  void _openAddExpenseOverlay() {
    showModalBottomSheet(
      context: context,
      builder: (ctx) => const Text('Modal bottom sheet'),
    );
  }
}
```

Even though `_openAddExpenseOverlay` is outside the `build` method, the `context` property is still available because `_ExpensesState` extends `State`.

---

## Understanding the `builder` Argument

The second required argument is `builder`.

```dart
builder: (ctx) => const Text('Modal bottom sheet'),
```

Whenever Flutter asks for a `builder`, it usually expects a function that returns a widget.

In this case, the builder function returns the content that should appear inside the modal bottom sheet.

---

## Why Use `ctx` Instead of `context`?

The builder receives its own context:

```dart
builder: (ctx) => const Text('Modal bottom sheet'),
```

This `ctx` is different from the outer `context`.

The outer `context` belongs to the `Expenses` widget.

The `ctx` inside the builder belongs to the modal bottom sheet.

Using a different name makes it clearer that these are two different context objects.

---

## Placeholder Modal Content

At first, we can return a simple `Text` widget just to test that the modal works.

```dart
builder: (ctx) => const Text('Modal bottom sheet'),
```

After saving and pressing the plus button, a small modal sheet appears at the bottom of the screen.

It is small because the content is only a short text widget.

Later, this placeholder will be replaced with the actual add-expense form.

---

## Complete Example

```dart
class _ExpensesState extends State<Expenses> {
  void _openAddExpenseOverlay() {
    showModalBottomSheet(
      context: context,
      builder: (ctx) => const Text('Modal bottom sheet'),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Expense Tracker'),
        actions: [
          IconButton(
            onPressed: _openAddExpenseOverlay,
            icon: const Icon(Icons.add),
          ),
        ],
      ),
      body: Column(
        children: [
          // chart placeholder
          Expanded(
            child: ExpensesList(
              expenses: _registeredExpenses,
            ),
          ),
        ],
      ),
    );
  }
}
```

---

## Later: Showing the `NewExpense` Widget

Once the add-expense form widget is created, the placeholder text can be replaced with a custom widget.

```dart
void _openAddExpenseOverlay() {
  showModalBottomSheet(
    context: context,
    builder: (ctx) => const NewExpense(),
  );
}
```

This makes the modal bottom sheet display the `NewExpense` form instead of simple placeholder text.

---

## Important Notes

### `showModalBottomSheet`

`showModalBottomSheet` is a Flutter function used to display content in a modal panel from the bottom of the screen.

It is commonly used for:

* Forms
* Menus
* Filters
* Additional actions
* Temporary input UI

---

### `BuildContext`

`BuildContext` represents a widget’s location in the widget tree.

It allows Flutter to find nearby information such as:

* Theme data
* Navigator
* Scaffold
* MediaQuery
* Inherited widgets

Many Flutter functions need a context so they know where in the app they should operate.

---

### `builder`

The `builder` parameter is a function that returns the widget displayed inside the modal sheet.

Example:

```dart
builder: (ctx) => const Text('Modal bottom sheet')
```

The widget returned by the builder becomes the modal sheet content.

---

### Passing a Function Reference

When assigning a function to `onPressed`, pass the function reference:

```dart
onPressed: _openAddExpenseOverlay
```

Do not call it immediately:

```dart
onPressed: _openAddExpenseOverlay()
```

The first version gives Flutter the function to execute later.
The second version executes the function immediately while the widget is being built.

---

## What Happens When the Button Is Pressed?

When the user taps the plus button:

1. Flutter calls `_openAddExpenseOverlay`
2. `_openAddExpenseOverlay` calls `showModalBottomSheet`
3. Flutter creates a modal overlay
4. The background becomes dimmed
5. The modal sheet slides up from the bottom
6. The widget returned by `builder` is displayed inside the modal

---

## Summary

In this lecture, we connected the AppBar plus button to a modal bottom sheet.

We learned that:

* `IconButton` can trigger a custom method through `onPressed`
* `showModalBottomSheet` displays a bottom overlay
* `BuildContext` tells Flutter where a widget is located in the widget tree
* The `builder` function returns the widget shown inside the modal
* The modal can be closed by tapping the dimmed background

This prepares the app for the next step: creating the actual form for adding new expenses.
