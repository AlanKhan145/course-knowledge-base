# Loading Meals Data Into a Screen

## Overview
This lecture covers creating the `MealsScreen` that displays a list of meals belonging to a selected category. You will filter the `dummyMeals` list based on the selected category's ID and display each meal using a `ListView`. This screen is the destination when a user taps on a category grid item.

## Key Points
- `MealsScreen` accepts a `category` and a filtered `meals` list as constructor parameters
- Use `ListView.builder` to efficiently render the list of meals
- Create a `MealItem` widget to display individual meal cards with title and image
- Filter `dummyMeals` by checking if a meal's `categories` list contains the selected category's ID
- Show a fallback message when no meals match the selected category

## Code Example
```dart
class MealsScreen extends StatelessWidget {
  const MealsScreen({
    super.key,
    this.title,
    required this.meals,
  });

  final String? title;
  final List<Meal> meals;

  @override
  Widget build(BuildContext context) {
    Widget content = ListView.builder(
      itemCount: meals.length,
      itemBuilder: (ctx, index) => MealItem(meal: meals[index]),
    );

    if (meals.isEmpty) {
      content = Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Uh oh ... nothing here!',
                style: Theme.of(context).textTheme.headlineLarge),
            const SizedBox(height: 16),
            const Text('Try selecting a different category!'),
          ],
        ),
      );
    }

    if (title == null) return content;

    return Scaffold(
      appBar: AppBar(title: Text(title!)),
      body: content,
    );
  }
}
```

## Notes
Passing the pre-filtered meals list to `MealsScreen` keeps the screen generic and reusable — it does not need to know which category was selected. The conditional rendering pattern (assigning different widgets to a `content` variable) is a clean Flutter approach for handling empty states. `ListView.builder` is more efficient than `ListView` with `children` for dynamic lists.

## Summary
`MealsScreen` receives a filtered list of meals and renders them with `ListView.builder`, including an empty-state fallback message.
