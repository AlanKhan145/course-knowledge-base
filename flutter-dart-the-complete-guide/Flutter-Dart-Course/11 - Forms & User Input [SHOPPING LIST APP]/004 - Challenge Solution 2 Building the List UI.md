# Challenge Solution 2 Building the List UI

## Overview
This lecture walks through building the main shopping list screen that displays all grocery items in a scrollable list. You will see how to render a list of `GroceryItem` objects using `ListView.builder` and how to display each item's name, quantity, and category color. The solution also handles the empty state when no items have been added yet.

## Key Points
- `ListView.builder` is the preferred widget for rendering dynamic lists efficiently in Flutter
- Each list tile can show a colored indicator, item name, and quantity using `ListTile`
- The empty state should be handled gracefully with a placeholder message or icon
- State is managed using `StatefulWidget` with a `List<GroceryItem>` stored in the widget's state
- The app bar can include an action button (e.g., a `+` icon) to navigate to the add-item screen

## Code Example
```dart
// lib/screens/grocery_list.dart
import 'package:flutter/material.dart';
import 'package:shopping_list/models/grocery_item.dart';

class GroceryList extends StatefulWidget {
  const GroceryList({super.key});

  @override
  State<GroceryList> createState() => _GroceryListState();
}

class _GroceryListState extends State<GroceryList> {
  final List<GroceryItem> _groceryItems = [];

  @override
  Widget build(BuildContext context) {
    Widget content = const Center(
      child: Text('No items added yet.'),
    );

    if (_groceryItems.isNotEmpty) {
      content = ListView.builder(
        itemCount: _groceryItems.length,
        itemBuilder: (ctx, index) {
          final item = _groceryItems[index];
          return ListTile(
            title: Text(item.name),
            leading: Container(
              width: 24,
              height: 24,
              color: item.category.color,
            ),
            trailing: Text(item.quantity.toString()),
          );
        },
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Groceries'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {},
          ),
        ],
      ),
      body: content,
    );
  }
}
```

## Notes
Using `ListView.builder` instead of `ListView` with a children list is important for performance, as it lazily builds only the visible items. The conditional rendering pattern (`Widget content = ...`) is a clean Flutter idiom for handling multiple UI states. The colored leading container gives the list a visual association between each item and its category.

## Summary
This lecture shows how to build a clean, efficient shopping list UI that handles both populated and empty states using `ListView.builder`.
