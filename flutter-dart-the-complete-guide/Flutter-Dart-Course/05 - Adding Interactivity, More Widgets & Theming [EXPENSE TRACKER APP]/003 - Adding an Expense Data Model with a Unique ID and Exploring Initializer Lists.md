# Adding an Expense Data Model with a Unique ID and Exploring Initializer Lists

## Overview

This lecture introduces the data model for the Expense Tracker App.

Before building the chart, the expense list, and the modal overlay for adding new expenses, it is useful to define what a single expense should look like in code.

To do that, we create a custom `Expense` class. This class describes the structure of one expense item and groups all related data into one object.

The lecture also introduces how to generate a unique ID for each expense using the third-party `uuid` package and how Dart initializer lists work.

## Creating a Models Folder

Inside the `lib` folder, create a new folder named:

```text id="y5imxf"
models
```

This folder will store model classes.

A model is a class that describes the structure of data used in the app.

Inside the `models` folder, create a new file:

```text id="xp8svp"
expense.dart
```

The project structure should look like this:

```text id="52zstu"
lib/
  main.dart
  expenses.dart
  models/
    expense.dart
```

Creating a separate `models` folder is not strictly required, but it helps keep the project organized as the app grows.

## What Is a Data Model?

A data model describes the shape of data in your app.

In this app, a single expense contains several pieces of information, such as:

* A title
* An amount
* A date
* A category
* A unique ID

Instead of storing these values separately, we group them together in a custom class called `Expense`.

This makes the code easier to manage because every expense object follows the same structure.

## Creating the Expense Class

Inside `expense.dart`, create a normal Dart class.

This class is not a widget, so it does not extend `StatelessWidget` or `StatefulWidget`.

```dart id="gwwvjf"
class Expense {
  
}
```

The `Expense` class acts as a blueprint for expense objects.

## Adding Expense Properties

A single expense should contain multiple data points.

The main properties are:

```dart id="p2bwz3"
final String id;
final String title;
final double amount;
final DateTime date;
final Category category;
```

### `id`

The `id` uniquely identifies each expense.

This is useful later when we need to find, update, or delete a specific expense.

```dart id="m33g3q"
final String id;
```

### `title`

The `title` stores the name or description of the expense.

```dart id="whka4e"
final String title;
```

### `amount`

The `amount` stores how much money was spent.

It uses `double` because expense amounts can include decimal values, such as `1.99`.

```dart id="aj55eb"
final double amount;
```

### `date`

The `date` stores when the expense happened.

Dart provides a built-in `DateTime` type for working with dates and times.

```dart id="3u8b51"
final DateTime date;
```

### `category`

The `category` stores the type of expense.

For example, an expense could belong to categories such as food, travel, leisure, or work.

```dart id="n9rxzo"
final Category category;
```

## Using an Enum for Categories

To define fixed expense categories, we can use an enum.

```dart id="4d8suj"
enum Category {
  food,
  travel,
  leisure,
  work,
}
```

An enum is useful when a value should be limited to a predefined set of options.

In this case, every expense must belong to one of the defined categories.

## Adding a Constructor

To create new expense objects, the `Expense` class needs a constructor.

Because the constructor requires several values, named parameters are easier to use than positional parameters.

Named parameters make the code more readable because each argument is identified by name.

```dart id="xwg5fa"
Expense({
  required this.title,
  required this.amount,
  required this.date,
  required this.category,
});
```

The `required` keyword ensures that these values must be provided whenever a new `Expense` object is created.

## Why the ID Is Not Passed as a Parameter

The `id` should not be manually passed into the constructor.

Instead, the app should generate a unique ID automatically whenever a new expense is created.

This prevents duplicate IDs and makes the model easier to use.

To generate unique IDs, we use the `uuid` package.

## Installing the UUID Package

Install the package by running:

```bash id="a2gm06"
flutter pub add uuid
```

After installing it, import the package in `expense.dart`:

```dart id="t1o90w"
import 'package:uuid/uuid.dart';
```

## Creating a UUID Utility Object

The `uuid` package provides a `Uuid` class.

Create a constant utility object outside the `Expense` class:

```dart id="ckxdiy"
const uuid = Uuid();
```

This object does not belong to a specific expense. It is just a helper object used to generate unique IDs.

Because `Uuid` supports a `const` constructor, we can create it as a constant value.

## Using an Initializer List

The `id` should be initialized automatically when the constructor runs.

To do that, Dart provides an initializer list.

An initializer list is added after the constructor parameters using a colon:

```dart id="i62dlu"
Expense({
  required this.title,
  required this.amount,
  required this.date,
  required this.category,
}) : id = uuid.v4();
```

This line means:

```text id="w6nqxe"
When a new Expense object is created,
generate a unique ID using uuid.v4(),
then assign that value to the id property.
```

The initializer list runs before the constructor body.

This makes it useful for initializing final fields that are not directly passed as constructor parameters.

## Complete `expense.dart`

```dart id="yuui51"
import 'package:uuid/uuid.dart';

const uuid = Uuid();

enum Category {
  food,
  travel,
  leisure,
  work,
}

class Expense {
  Expense({
    required this.title,
    required this.amount,
    required this.date,
    required this.category,
  }) : id = uuid.v4();

  final String id;
  final String title;
  final double amount;
  final DateTime date;
  final Category category;
}
```

## Creating a New Expense Object

With this model, you can create a new expense like this:

```dart id="wcthwu"
final expense = Expense(
  title: 'Flutter Course',
  amount: 19.99,
  date: DateTime.now(),
  category: Category.work,
);
```

You do not need to provide an `id`.

The ID is generated automatically:

```dart id="y8fzlu"
id = uuid.v4();
```

## Why Use `final`?

All properties in the `Expense` class are marked as `final`.

This means that once an expense object is created, its values cannot be changed.

```dart id="sicw7w"
final String title;
final double amount;
final DateTime date;
```

Using `final` makes the model more predictable.

Instead of changing an existing expense object directly, you typically create a new object or update the surrounding state.

This helps avoid unexpected side effects.

## Why Use Named Parameters?

Named parameters make constructor calls easier to read.

Without named parameters, you would have to remember the exact order of values:

```dart id="s1povt"
Expense('Food', 12.99, DateTime.now(), Category.food);
```

With named parameters, the code is clearer:

```dart id="ur4u70"
Expense(
  title: 'Food',
  amount: 12.99,
  date: DateTime.now(),
  category: Category.food,
);
```

This is especially helpful when a constructor accepts multiple values.

## Key Points

* A data model describes the structure of data in the app
* The `Expense` class represents one expense item
* The model is placed inside `lib/models/expense.dart`
* A single expense has an `id`, `title`, `amount`, `date`, and `category`
* `DateTime` is used for storing date information
* `double` is used for amounts with decimal values
* `Category` is defined as an enum
* The `uuid` package is used to generate unique string IDs
* The ID is generated automatically with `uuid.v4()`
* Dart initializer lists allow fields to be initialized before the constructor body runs
* `final` makes model properties immutable after creation

## Notes

This model will become the foundation for the rest of the Expense Tracker App.

The expense list, chart, modal input form, deletion feature, and category-based grouping will all depend on this data structure.

By defining the model early, the rest of the app can be built around a clear and predictable data format.

## Summary

This lecture creates the `Expense` data model for the Expense Tracker App. The model stores the title, amount, date, category, and unique ID of each expense. The `uuid` package is used to generate a unique string ID automatically, and Dart initializer lists are used to assign that ID when a new `Expense` object is created. This model forms the data backbone of the entire app.
