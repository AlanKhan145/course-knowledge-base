# Introducing Enums

## Overview

This lecture introduces **enums** in Dart.

After creating the basic `Expense` class, there is still one important piece of information missing: the category of an expense.

In the Expense Tracker App, every expense should belong to a category, such as food, travel, leisure, or work. This category is important because the chart will later group expenses based on their categories.

Instead of storing categories as normal strings, this lecture shows how to use Dart enums to define a fixed set of allowed category values.

## Why Categories Are Needed

Each expense in the app should store information such as:

* Title
* Amount
* Date
* Category
* Unique ID

The category is especially important because the chart will use it to group expenses.

For example, the app can show how much money was spent on:

* Food
* Travel
* Leisure
* Work

To support this, each `Expense` object needs category information.

## Why Not Use Strings?

One possible solution would be to store the category as a `String`.

For example:

```dart id="y0ry5s"
final String category;
```

Then an expense could be created like this:

```dart id="x4lvoz"
Expense(
  title: 'Cinema',
  amount: 12.99,
  date: DateTime.now(),
  category: 'leisure',
);
```

However, this approach is error-prone.

For example, you might accidentally write:

```dart id="zua9ck"
category: 'lesiure',
```

This is a typo, but Dart would not show an error because `'lesiure'` is still a valid string.

The app would accept this value, even though it is not one of the supported categories.

This could later cause problems in the chart because the chart may only look for valid categories such as `leisure`, not misspelled strings.

## The Problem with Strings

Using strings for fixed values is too flexible.

Strings allow any value, including:

```text id="q4vzf5"
'food'
'travel'
'leisure'
'work'
'wrong-value'
'lesiure'
'any random text'
```

This makes the app more likely to contain bugs.

For category values, we do not want unlimited flexibility. We want a fixed set of allowed values.

## What Is an Enum?

An enum is a Dart feature that allows you to define a custom type with a fixed set of named values.

Enum is short for **enumeration**.

You create an enum using the `enum` keyword.

```dart id="r65pff"
enum Category {
  food,
  travel,
  leisure,
  work,
}
```

This creates a custom type called `Category`.

The only allowed values of this type are:

```dart id="6fduvx"
Category.food
Category.travel
Category.leisure
Category.work
```

## Enum Syntax

The basic syntax of an enum is:

```dart id="bn6fzr"
enum EnumName {
  valueOne,
  valueTwo,
  valueThree,
}
```

For the Expense Tracker App, the enum looks like this:

```dart id="u8s36x"
enum Category {
  food,
  travel,
  leisure,
  work,
}
```

The values are written without quotes.

That means they are not normal strings. They are enum values.

Dart understands them as predefined values that belong to the `Category` enum.

## Using the Enum in the Expense Model

Once the `Category` enum is created, it can be used as a type in the `Expense` class.

Instead of writing:

```dart id="sle7mb"
final String category;
```

Use:

```dart id="7f4y1h"
final Category category;
```

This means the `category` property can only store one of the valid `Category` enum values.

## Updating the Constructor

The `Expense` constructor should also accept a required `category` parameter.

```dart id="xfdr4r"
Expense({
  required this.title,
  required this.amount,
  required this.date,
  required this.category,
}) : id = uuid.v4();
```

This ensures that every expense object must include a category.

## Complete Expense Model

```dart id="jwtiix"
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

## Creating an Expense with a Category

When creating an expense, you now use one of the enum values.

```dart id="tsjr7c"
final expense = Expense(
  title: 'Lunch',
  amount: 12.99,
  date: DateTime.now(),
  category: Category.food,
);
```

This is safer than using strings because Dart only allows valid category values.

For example, this is valid:

```dart id="iqb8bp"
category: Category.leisure
```

But this would not work:

```dart id="ftzcp3"
category: Category.random
```

Because `random` is not defined in the `Category` enum.

## Why Enums Are Better Than Strings

Enums are useful because they provide:

* A fixed set of allowed values
* Better type safety
* Better code completion in the IDE
* Fewer typo-related bugs
* More readable code
* Easier category handling later in the app

With strings, Dart cannot know whether a category is valid.

With enums, Dart can check that only supported category values are used.

## Key Points

* Enums define a fixed set of named values
* Enums are created with the `enum` keyword
* Enum values are not strings and are not wrapped in quotes
* Enum values are accessed with dot notation
* `Category.food` is an enum value
* Enums help prevent typos and invalid values
* The `Expense` model now includes a `category` field
* The category field uses the custom `Category` type
* Categories will later be used to group expenses in the chart

## Notes

Enums are a great choice whenever your app should only allow specific predefined values.

In this app, expense categories should not be arbitrary text. They should be limited to the categories the app supports.

By using an enum, the model becomes safer, clearer, and easier to work with.

Later in the app, the category values will be used when displaying expenses and building the expense chart.

## Summary

This lecture introduces Dart enums and uses them to define expense categories. Instead of storing categories as strings, which can lead to typos and invalid values, the app defines a `Category` enum with fixed values: `food`, `travel`, `leisure`, and `work`. The `Expense` model then uses `Category` as the type for its `category` property, making the code safer and more predictable.
