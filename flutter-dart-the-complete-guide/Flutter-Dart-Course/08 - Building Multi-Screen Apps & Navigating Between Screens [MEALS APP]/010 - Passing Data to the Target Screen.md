# Passing Data to the Target Screen

## Overview
This lecture covers how to pass data from one screen to another during navigation. When navigating to `MealsScreen`, you pass the category title and the pre-filtered meals list as constructor arguments. This pattern avoids global state by sending only the required data to the destination screen.

## Key Points
- Data is passed to the target screen via its constructor parameters during navigation
- Filter the data before navigating and pass the result directly to the new screen
- The destination screen should declare `required` constructor parameters for all necessary data
- This approach keeps screens self-contained and easy to test
- Avoid accessing global variables directly inside target screens when constructor injection is possible

## Code Example
```dart
// Navigating and passing data
void _selectCategory(BuildContext context, Category category) {
  final filteredMeals = dummyMeals
      .where((meal) => meal.categories.contains(category.id))
      .toList();

  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (ctx) => MealsScreen(
        title: category.title,  // passing title string
        meals: filteredMeals,   // passing filtered list
      ),
    ),
  );
}

// Receiving data in MealsScreen
class MealsScreen extends StatelessWidget {
  const MealsScreen({
    super.key,
    required this.title,
    required this.meals,
  });

  final String title;
  final List<Meal> meals;
  // ...
}
```

## Notes
Constructor injection is the simplest and most explicit way to share data between screens in Flutter. It makes the data flow clear and keeps screens decoupled. As the app grows more complex, you may move to state management solutions, but constructor injection remains valid for simple parent-to-child data passing.

## Summary
Pass data to a target screen by providing it as constructor arguments when calling `Navigator.push`, keeping the data flow explicit and the screens decoupled.
