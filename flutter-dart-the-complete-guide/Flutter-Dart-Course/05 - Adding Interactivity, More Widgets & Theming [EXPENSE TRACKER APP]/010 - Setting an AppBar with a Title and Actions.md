# Setting an AppBar with a Title and Actions

## Overview

In this lecture, we add a toolbar at the top of the screen using Flutter’s `AppBar` widget.

So far, the app displays a list of dummy expenses. This is useful for building and testing the UI, but the final goal is to allow users to add their own expenses.

To do that, we first need a visible button that users can tap. This button will later open a modal overlay where users can enter new expense data.

The `AppBar` is the ideal place for this button.

---

## Why Use an `AppBar`?

A top toolbar is a very common UI pattern in mobile apps.

Instead of manually building a toolbar with widgets like `Row`, Flutter provides official support through the `Scaffold` widget.

The `Scaffold` widget does more than provide a basic page structure. It also supports special layout areas such as:

* `appBar`
* `body`
* `drawer`
* Other common Material Design page sections

For this lecture, we focus on the `appBar` parameter.

---

## Adding an `AppBar` to `Scaffold`

The `appBar` parameter is added directly to the `Scaffold`.

```dart
Scaffold(
  appBar: AppBar(),
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
)
```

The `AppBar` appears at the top of the screen automatically.

Flutter also handles safe spacing for device areas such as:

* Status bar
* Camera cutout
* Notch
* System UI areas

This means your content is automatically positioned correctly below the top system area.

---

## Adding an Action Button

The `AppBar` has an `actions` parameter.

This parameter accepts a list of widgets, usually buttons displayed on the right side of the AppBar.

```dart
AppBar(
  actions: [
    IconButton(
      onPressed: () {},
      icon: const Icon(Icons.add),
    ),
  ],
)
```

In this example, we use an `IconButton`.

---

## Using `IconButton`

`IconButton` is a built-in Flutter widget used to create a button that only displays an icon.

It commonly requires two important parameters:

```dart
IconButton(
  onPressed: () {},
  icon: const Icon(Icons.add),
)
```

### `icon`

The `icon` parameter defines what icon should be displayed.

Here, we use Flutter’s built-in add icon:

```dart
const Icon(Icons.add)
```

### `onPressed`

The `onPressed` parameter defines what should happen when the button is tapped.

For now, we use an empty anonymous function:

```dart
onPressed: () {}
```

Later, this function will open the add-expense modal overlay.

---

## Adding a Title to the AppBar

The `AppBar` can also display a title.

The `title` parameter expects a widget, and most commonly this is a `Text` widget.

```dart
AppBar(
  title: const Text('Flutter Expense Tracker'),
)
```

This text appears on the left side of the AppBar.

---

## Complete Example

```dart
Scaffold(
  appBar: AppBar(
    title: const Text('Flutter Expense Tracker'),
    actions: [
      IconButton(
        onPressed: () {},
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
)
```

---

## Using Material 3

Depending on your Flutter version and project settings, the AppBar may look different.

Older Material styling may show a blue AppBar by default. To use the newer Material 3 style, update the `MaterialApp` in `main.dart`.

```dart
MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
  ),
  home: const Expenses(),
)
```

This gives the app a more modern Material Design look.

Theming and styling will be improved later, but enabling Material 3 early helps align the app with the final design.

---

## Important Notes

### `Scaffold`

`Scaffold` provides the main visual structure of the page.

It can manage common screen areas such as:

* AppBar
* Body
* Drawer
* Floating action buttons
* Bottom navigation

---

### `AppBar`

`AppBar` creates a standard top toolbar.

It is commonly used for:

* Page titles
* Navigation buttons
* Action buttons
* Menus

---

### `actions`

The `actions` parameter accepts a list of widgets.

These widgets are displayed on the right side of the AppBar.

Example:

```dart
actions: [
  IconButton(
    onPressed: () {},
    icon: const Icon(Icons.add),
  ),
]
```

You can add more buttons by adding more widgets to the list.

---

### `IconButton`

`IconButton` creates a tappable icon.

It is useful when the action can be clearly represented by an icon, such as:

* Add
* Delete
* Edit
* Search
* Settings

---

## Before and After

### Before

The app only showed the expenses list inside the body.

There was no toolbar and no visible button for adding a new expense.

```dart
Scaffold(
  body: Column(
    children: [
      Expanded(
        child: ExpensesList(
          expenses: _registeredExpenses,
        ),
      ),
    ],
  ),
)
```

---

### After

The app now has:

* A top AppBar
* A title
* A plus button for adding expenses

```dart
Scaffold(
  appBar: AppBar(
    title: const Text('Flutter Expense Tracker'),
    actions: [
      IconButton(
        onPressed: () {},
        icon: const Icon(Icons.add),
      ),
    ],
  ),
  body: Column(
    children: [
      Expanded(
        child: ExpensesList(
          expenses: _registeredExpenses,
        ),
      ),
    ],
  ),
)
```

---

## Next Step

The plus button currently does not perform any real action.

The next step is to connect it to a function that opens a modal overlay.

That overlay will allow users to enter and save new expenses.

---

## Summary

In this lecture, we added an `AppBar` to the main expenses screen.

We learned that:

* `Scaffold` supports an `appBar` parameter
* `AppBar` creates a standard top toolbar
* The `title` parameter displays text in the AppBar
* The `actions` parameter adds buttons to the right side
* `IconButton` is useful for icon-only actions
* The plus button will later open the add-expense form

This gives the app a clearer structure and prepares it for user input.
