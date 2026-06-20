# Challenge Solution 1 Building and Using Models

## Overview
This lecture presents the solution to the first part of the challenge, focusing on defining Dart model classes that represent shopping list items. You will see how to structure a `GroceryItem` model with appropriate properties and how to use enums for categories. The solution demonstrates clean Dart class design that makes the rest of the app easier to build.

## Key Points
- A `GroceryItem` model class typically holds an `id`, `name`, `quantity`, and `category`
- Enums in Dart are ideal for representing a fixed set of categories (e.g., vegetables, dairy, meat)
- Each category can carry additional data such as a display title and a color using enhanced enums
- Models should be defined in their own file under `lib/models/` for clean separation of concerns
- Immutable model classes with `final` fields are preferred for predictable state management

## Code Example
```dart
// lib/models/category.dart
import 'package:flutter/material.dart';

enum Category {
  vegetables('Vegetables', Colors.green),
  fruit('Fruit', Colors.orange),
  meat('Meat', Colors.red),
  dairy('Dairy', Colors.blue),
  sweets('Sweets', Colors.pink),
  spices('Spices', Colors.amber),
  convenience('Convenience', Colors.purple),
  hygiene('Hygiene', Colors.cyan),
  other('Other', Colors.grey);

  const Category(this.title, this.color);

  final String title;
  final Color color;
}

// lib/models/grocery_item.dart
import 'package:shopping_list/models/category.dart';

class GroceryItem {
  const GroceryItem({
    required this.id,
    required this.name,
    required this.quantity,
    required this.category,
  });

  final String id;
  final String name;
  final int quantity;
  final Category category;
}
```

## Notes
Enhanced enums (introduced in Dart 2.17) allow enums to carry constructor parameters and instance fields, making them more powerful than simple enums. The `GroceryItem` class is kept intentionally simple and immutable to make state management straightforward. Placing models in a dedicated `lib/models/` folder is a widely adopted Flutter convention.

## Summary
This solution lecture demonstrates how to define clean, reusable Dart models using classes and enhanced enums to represent shopping list data.
