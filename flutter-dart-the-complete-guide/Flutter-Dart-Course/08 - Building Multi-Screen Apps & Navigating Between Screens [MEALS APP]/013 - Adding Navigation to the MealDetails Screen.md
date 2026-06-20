# Adding Navigation to the MealDetails Screen

## Overview
This lecture adds tap navigation from `MealItem` to a new `MealDetailsScreen` that shows full meal information. Wrapping the `MealItem` in an `InkWell` or `GestureDetector` triggers navigation when the user taps a meal card. The selected `Meal` object is passed to `MealDetailsScreen` via its constructor.

## Key Points
- Wrap `MealItem` or its parent in `InkWell` to capture taps and trigger navigation
- Use `Navigator.push` with `MaterialPageRoute` to navigate to `MealDetailsScreen`
- Pass the tapped `Meal` object as a constructor argument to `MealDetailsScreen`
- `MealsScreen` should expose an `onSelectMeal` callback or handle navigation internally
- Create the `MealDetailsScreen` as a new file in `lib/screens/`

## Code Example
```dart
// In MealsScreen - handling meal selection
void _selectMeal(BuildContext context, Meal meal) {
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (ctx) => MealDetailsScreen(meal: meal),
    ),
  );
}

// MealDetailsScreen stub
class MealDetailsScreen extends StatelessWidget {
  const MealDetailsScreen({super.key, required this.meal});

  final Meal meal;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(meal.title)),
      body: const Center(child: Text('Meal Details Coming Soon!')),
    );
  }
}
```

## Notes
It is common to handle navigation at the screen level rather than inside the individual `MealItem` widget, keeping navigation logic centralized. Passing the full `Meal` object means `MealDetailsScreen` has access to all data it needs without additional lookups. Always test the back navigation to ensure the stack pops correctly.

## Summary
Tapping a `MealItem` pushes `MealDetailsScreen` onto the navigation stack, passing the selected `Meal` object as a constructor argument.
