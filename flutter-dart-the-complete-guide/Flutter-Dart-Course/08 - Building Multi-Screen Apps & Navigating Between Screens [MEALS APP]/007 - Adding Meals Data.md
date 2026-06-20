# Adding Meals Data

## Overview
This lecture covers creating the `Meal` model class and populating it with dummy meal data. You will define the data structure for a meal, including properties like title, categories, ingredients, steps, duration, complexity, and affordability. A `dummy_data.dart` file is created to hold a static list of meals used throughout the app.

## Key Points
- Define a `Meal` class in `lib/models/meal.dart` with all necessary properties
- Use Dart `enum` types for `Complexity` (simple, challenging, hard) and `Affordability` (affordable, pricey, luxurious)
- The `Meal` model should use `final` fields and a `const` constructor for immutability
- Create a `dummyMeals` list in `lib/data/dummy_data.dart` with realistic meal entries
- Each meal references one or more category IDs to link meals to categories

## Code Example
```dart
// lib/models/meal.dart
enum Complexity { simple, challenging, hard }
enum Affordability { affordable, pricey, luxurious }

class Meal {
  const Meal({
    required this.id,
    required this.categories,
    required this.title,
    required this.imageUrl,
    required this.ingredients,
    required this.steps,
    required this.duration,
    required this.complexity,
    required this.affordability,
    required this.isGlutenFree,
    required this.isLactoseFree,
    required this.isVegan,
    required this.isVegetarian,
  });

  final String id;
  final List<String> categories;
  final String title;
  final String imageUrl;
  final List<String> ingredients;
  final List<String> steps;
  final int duration;
  final Complexity complexity;
  final Affordability affordability;
  final bool isGlutenFree;
  final bool isLactoseFree;
  final bool isVegan;
  final bool isVegetarian;
}
```

## Notes
Using `enum` for complexity and affordability makes the code more readable and prevents invalid values. The `categories` field stores a list of category IDs (strings) so that each meal can belong to multiple categories. Immutable model classes with `const` constructors are a Flutter best practice.

## Summary
The `Meal` model class and a `dummyMeals` list provide the structured data that drives the entire Meals App UI.
