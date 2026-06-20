# Improving the MealDetails Screen

## Overview
This lecture builds out the full `MealDetailsScreen` UI, displaying the meal image, ingredients list, and cooking steps. You will use `SingleChildScrollView` to make the screen scrollable and organize content with section headers. An action button is also added to the `AppBar` for marking meals as favorites.

## Key Points
- Use `SingleChildScrollView` + `Column` for a vertically scrollable detail layout
- Display the meal image at the top using `Image.network` with `fit: BoxFit.cover`
- Add section headers with styled `Text` widgets for "Ingredients" and "Steps"
- Render ingredients and steps as individual `Text` widgets inside a `Column`
- Add an `IconButton` in the `AppBar` `actions` list for the favorite toggle

## Code Example
```dart
class MealDetailsScreen extends StatelessWidget {
  const MealDetailsScreen({super.key, required this.meal, required this.onToggleFavorite});

  final Meal meal;
  final void Function(Meal meal) onToggleFavorite;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(meal.title),
        actions: [
          IconButton(
            icon: const Icon(Icons.star),
            onPressed: () => onToggleFavorite(meal),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Image.network(meal.imageUrl, height: 300, width: double.infinity, fit: BoxFit.cover),
            const SizedBox(height: 14),
            Text('Ingredients', style: Theme.of(context).textTheme.titleLarge),
            ...meal.ingredients.map((i) => Text(i)),
            const SizedBox(height: 14),
            Text('Steps', style: Theme.of(context).textTheme.titleLarge),
            ...meal.steps.map((s) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              child: Text(s),
            )),
          ],
        ),
      ),
    );
  }
}
```

## Notes
Using the spread operator (`...`) with `.map()` is an elegant way to insert a list of widgets directly into a `children` array. `SingleChildScrollView` combined with a `Column` is the standard pattern for scrollable detail screens in Flutter. The `AppBar` `actions` list is the correct place to put per-screen action buttons.

## Summary
The improved `MealDetailsScreen` provides a scrollable layout with the meal image, ingredients, and cooking steps, plus a favorites icon button in the app bar.
