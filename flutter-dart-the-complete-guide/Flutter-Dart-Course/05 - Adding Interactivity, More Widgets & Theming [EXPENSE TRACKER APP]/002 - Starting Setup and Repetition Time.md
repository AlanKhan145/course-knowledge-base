# Starting Setup and Repetition Time

## Overview

This lecture sets up the starting point for the Expense Tracker App project. You will create a new Flutter project, replace the default `main.dart` file, create a new `expenses.dart` file, and review important Flutter concepts from previous modules.

This lesson also serves as a repetition exercise. Before adding more advanced features such as modals, charts, forms, and user input, you will revisit core concepts such as `StatefulWidget`, `State`, `MaterialApp`, `Scaffold`, and basic widget composition.

## Creating the New Flutter Project

To begin, create a new Flutter project using the `flutter create` command.

```bash id="w4yyio"
flutter create expense_tracker
```

This creates a new Flutter project named `expense_tracker`.

After creating the project, open it in your code editor.

The lecture provides a prepared `main.dart` file. You should either:

* Replace your existing `main.dart` file with the attached file
* Or copy the content from the attached file into your own `main.dart`

You should also create a new file named:

```text id="apgvwh"
expenses.dart
```

This file will be used to build the main user interface of the Expense Tracker App.

## App Structure

The finished Expense Tracker App will have three main areas on the starting screen:

1. An app bar at the top
2. A chart below the app bar
3. A list of expenses below the chart

The app bar will later contain an icon button that opens a modal overlay. This modal overlay will allow the user to enter and save a new expense.

The chart and the expenses list will also update when new expenses are added.

For now, the app will only show simple placeholder text for the chart and the expenses list.

## Why the Expenses Widget Should Be Stateful

The main screen of the app will manage expense data.

Whenever a new expense is added:

* The expense list should update
* The chart should update
* The UI should rebuild with the new data

Because this data changes over time and those changes should affect the UI, the main `Expenses` widget should be a `StatefulWidget`.

A `StatefulWidget` is needed whenever a widget manages data that can change and trigger UI updates.

## Creating `expenses.dart`

Inside `expenses.dart`, import Flutter’s Material package:

```dart id="z3470a"
import 'package:flutter/material.dart';
```

Then create a new widget class called `Expenses`.

```dart id="sx7u9a"
class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<Expenses> createState() {
    return _ExpensesState();
  }
}
```

A `StatefulWidget` is made of two classes:

1. The widget class itself
2. The state class connected to that widget

The state class is usually private, so its name starts with an underscore.

```dart id="cse0xl"
class _ExpensesState extends State<Expenses> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Column(
        children: [
          Text('The chart'),
          Text('Expenses list'),
        ],
      ),
    );
  }
}
```

The `build` method returns the widget tree for the `Expenses` screen.

For now, the screen contains a `Scaffold` with a `Column`.

The `Column` is used because the chart and the expenses list should appear vertically, one below the other.

## Complete `expenses.dart`

```dart id="icp0ao"
import 'package:flutter/material.dart';

class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<Expenses> createState() {
    return _ExpensesState();
  }
}

class _ExpensesState extends State<Expenses> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Column(
        children: [
          Text('The chart'),
          Text('Expenses list'),
        ],
      ),
    );
  }
}
```

## Updating `main.dart`

Next, go back to `main.dart`.

Import the new `expenses.dart` file:

```dart id="7svh25"
import 'package:expense_tracker/expenses.dart';
```

Then use the `Expenses` widget as the home screen of the app.

```dart id="368wd5"
import 'package:flutter/material.dart';

import 'package:expense_tracker/expenses.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Expenses(),
    ),
  );
}
```

Because `Expenses` has a `const` constructor, and because `MaterialApp` also supports a `const` constructor in this setup, `const` can be used here.

## Why Use `Scaffold`?

The `Scaffold` widget provides a basic visual structure for a screen.

It is commonly used as the base widget for Flutter pages because it supports common layout areas such as:

* `appBar`
* `body`
* `floatingActionButton`
* `drawer`
* `bottomNavigationBar`

At this stage, only the `body` is used.

Later, the app bar and other UI elements will be added.

## Why Use `Column`?

A `Column` arranges its child widgets vertically.

Since the Expense Tracker screen will eventually show a chart above an expenses list, a `Column` is the correct starting layout.

For now, the two placeholder widgets are:

```dart id="fegtrl"
Text('The chart')
Text('Expenses list')
```

These placeholders will be replaced later with real chart and expense list widgets.

## Current Result

After running the app, you should see a simple white screen with two text widgets.

The text will appear near the top-left area of the screen because no styling, spacing, padding, or app bar has been added yet.

This is expected.

The purpose of this lecture is only to set up the basic project structure and starting widget tree.

## Key Points

* A new Flutter project is created for the Expense Tracker App
* The default `main.dart` file is replaced or updated
* A new `expenses.dart` file is created
* The `Expenses` widget is created as a `StatefulWidget`
* `StatefulWidget` is used because expense data will change over time
* The `Scaffold` widget provides the base screen structure
* The `Column` widget is used to place widgets vertically
* Placeholder text is used for the chart and expenses list
* Styling and real functionality will be added later

## Tips

* Use `flutter create expense_tracker` to create the project
* Remove or replace the default counter app code
* Keep your widgets in separate files from the beginning
* Use clear widget names such as `Expenses`
* Use `StatefulWidget` when data changes should update the UI
* Start with placeholders before building complex widgets
* Make sure the package import matches your project name

## Notes

This lecture is mainly about setup and repetition.

It revisits important Flutter concepts from earlier modules while preparing the foundation for a larger app. The project does not look polished yet, but the structure is now ready for future features.

Later, the placeholders will be replaced with a real chart, a real expenses list, and a modal overlay for adding new expenses.

## Summary

This lecture sets up the Expense Tracker App project and reviews core Flutter concepts. A new Flutter project is created, `main.dart` is updated, and a new `expenses.dart` file is added. The `Expenses` widget is built as a `StatefulWidget` because it will later manage changing expense data. For now, the app displays simple placeholder text for the chart and expenses list, creating a basic foundation for the upcoming features.
