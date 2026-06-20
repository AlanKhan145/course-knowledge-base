# Improving the MealItem Widget

## Overview
This lecture focuses on enhancing the `MealItem` widget to display additional meal metadata below the image, such as duration, complexity, and affordability. You will add a row of icon-text pairs at the bottom of each card to give users quick at-a-glance information about each meal.

## Key Points
- Add a bottom info row with `Row` containing `Icon` + `Text` pairs for duration, complexity, and affordability
- Use Dart `enum` getters or extension methods to convert enum values to display strings
- Use `ClipRRect` with `borderRadius` to give the card rounded corners
- Wrap the `MealItem` in a `Card` widget for elevation and shadow effects
- Use `mainAxisAlignment: MainAxisAlignment.center` and `crossAxisAlignment` to align info icons properly

## Code Example
```dart
class MealItem extends StatelessWidget {
  const MealItem({super.key, required this.meal});

  final Meal meal;

  String get complexityText {
    return meal.complexity.name[0].toUpperCase() +
        meal.complexity.name.substring(1);
  }

  String get affordabilityText {
    return meal.affordability.name[0].toUpperCase() +
        meal.affordability.name.substring(1);
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(8),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      clipBehavior: Clip.hardEdge,
      elevation: 2,
      child: Column(
        children: [
          Stack(/* image + title overlay */),
          Padding(
            padding: const EdgeInsets.all(12),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                MealItemTrait(icon: Icons.schedule, label: '${meal.duration} min'),
                MealItemTrait(icon: Icons.work, label: complexityText),
                MealItemTrait(icon: Icons.attach_money, label: affordabilityText),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
```

## Notes
Extracting the icon-label pair into a separate `MealItemTrait` widget keeps `MealItem` clean and makes the icon-text pair reusable. Using a getter to format enum names avoids repeating string formatting logic. `ClipRRect` combined with `Card`'s `clipBehavior: Clip.hardEdge` ensures the image respects the card's rounded corners.

## Summary
The improved `MealItem` widget uses a `Card` with a `Stack` image overlay and a bottom row of icons that display duration, complexity, and affordability metadata.
