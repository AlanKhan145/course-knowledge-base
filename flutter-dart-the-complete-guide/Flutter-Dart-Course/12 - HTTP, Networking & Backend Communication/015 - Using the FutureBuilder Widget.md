# Using the FutureBuilder Widget

## Overview
This lecture introduces the `FutureBuilder` widget as an alternative approach to managing async HTTP data in Flutter. Rather than manually tracking loading and error states with `setState()`, `FutureBuilder` listens to a `Future` and automatically rebuilds the UI for each state: loading, error, and data available. This reduces boilerplate and centralizes async UI logic in a declarative way.

## Key Points
- `FutureBuilder<T>` takes a `future` and a `builder` callback that receives an `AsyncSnapshot<T>`
- `snapshot.connectionState` indicates whether the future is waiting, active, or done
- `snapshot.hasError` and `snapshot.hasData` are used to branch between error, loading, and success states
- The `future` passed to `FutureBuilder` must be stored in a variable — do not call the async function directly inside `build()` or it will re-trigger on every rebuild
- `FutureBuilder` is best for one-shot data loads; for streams, use `StreamBuilder`

## Code Example
```dart
class MealsScreen extends StatefulWidget {
  const MealsScreen({super.key});

  @override
  State<MealsScreen> createState() => _MealsScreenState();
}

class _MealsScreenState extends State<MealsScreen> {
  // Store the Future so it doesn't restart on every rebuild
  late final Future<List<Meal>> _mealsFuture;

  @override
  void initState() {
    super.initState();
    _mealsFuture = fetchMeals(); // Called once
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Meals')),
      body: FutureBuilder<List<Meal>>(
        future: _mealsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          }
          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('No meals found.'));
          }
          final meals = snapshot.data!;
          return ListView.builder(
            itemCount: meals.length,
            itemBuilder: (ctx, i) => ListTile(title: Text(meals[i].title)),
          );
        },
      ),
    );
  }
}
```

## Notes
A common pitfall is calling the async function inside the `future` parameter of `FutureBuilder` directly — this creates a new `Future` on every `build()` call, causing infinite re-fetching. Storing the `Future` in `initState()` prevents this. `FutureBuilder` is a clean, declarative alternative to the manual `_isLoading`/`_error` boolean approach, but both are valid.

## Summary
`FutureBuilder` eliminates manual loading/error state management by automatically rebuilding the widget tree whenever a `Future` transitions between waiting, error, and data states.
