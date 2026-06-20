# Adding a New Item Screen

## Overview
This lecture covers creating a separate screen for adding new grocery items to the shopping list. You will learn how to set up a new `NewItem` widget as a full screen and how to navigate to it from the main list screen using `Navigator.push`. The screen will eventually host the form for entering item details.

## Key Points
- A separate screen for adding items keeps the UI clean and follows good navigation practices
- `Navigator.push` is used to navigate to the new screen and `Navigator.pop` to return
- The new screen is scaffolded with an `AppBar` and a `body` ready to hold the form
- Navigation in Flutter uses a stack-based model — pushing adds a screen, popping removes it
- The add-item screen should eventually return data back to the calling screen upon submission

## Code Example
```dart
// lib/screens/new_item.dart
import 'package:flutter/material.dart';

class NewItem extends StatefulWidget {
  const NewItem({super.key});

  @override
  State<NewItem> createState() => _NewItemState();
}

class _NewItemState extends State<NewItem> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Add a new item'),
      ),
      body: const Padding(
        padding: EdgeInsets.all(12),
        child: Text('The form will go here.'),
      ),
    );
  }
}

// Navigating to the new screen from GroceryList
void _addItem() {
  Navigator.of(context).push(
    MaterialPageRoute(
      builder: (ctx) => const NewItem(),
    ),
  );
}
```

## Notes
Using `Navigator.push` with a `MaterialPageRoute` gives a standard platform-appropriate transition animation. The `NewItem` screen is created as a `StatefulWidget` in anticipation of managing form state. Keeping screens in a `lib/screens/` folder is consistent with Flutter project conventions.

## Summary
This lecture establishes the navigation structure for the app by creating and routing to a dedicated screen for adding new shopping list items.
