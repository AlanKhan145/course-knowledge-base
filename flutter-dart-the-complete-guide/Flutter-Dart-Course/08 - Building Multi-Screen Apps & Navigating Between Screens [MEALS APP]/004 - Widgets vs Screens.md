# Widgets vs Screens

## Overview
This lecture clarifies the conceptual distinction between widgets and screens in Flutter. Screens are full-page widgets that occupy the entire display and are typically pushed onto the navigation stack, while widgets are reusable UI components used inside screens. Understanding this distinction helps you architect your Flutter app more clearly.

## Key Points
- In Flutter, everything is a widget — screens are just widgets that fill the entire display area
- Screens are conventionally placed in a `screens/` folder and widgets in a `widgets/` folder
- A screen typically uses `Scaffold` as its root widget to provide app bars, drawers, and body
- Widgets are reusable components that can appear in multiple screens
- The separation is a convention, not enforced by Flutter itself

## Code Example
```dart
// A Screen widget (full page)
class CategoriesScreen extends StatelessWidget {
  const CategoriesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Pick your category')),
      body: GridView(/* ... */),
    );
  }
}

// A reusable Widget (component)
class CategoryGridItem extends StatelessWidget {
  const CategoryGridItem({super.key, required this.category});
  final Category category;

  @override
  Widget build(BuildContext context) {
    return Container(/* ... */);
  }
}
```

## Notes
Keeping screens and widgets in separate folders is a widely adopted Flutter convention that keeps the codebase organized. As your app grows, this separation makes it much easier to find and manage code. Think of screens as the "pages" of your app and widgets as the "building blocks" that make up those pages.

## Summary
Screens are full-page widgets placed in a `screens/` folder, while reusable UI components belong in a `widgets/` folder — a convention that keeps Flutter projects organized.
