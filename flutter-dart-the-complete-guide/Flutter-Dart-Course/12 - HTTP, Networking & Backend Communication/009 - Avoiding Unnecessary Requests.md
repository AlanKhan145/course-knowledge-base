# Avoiding Unnecessary Requests

## Overview
This lecture discusses strategies for avoiding redundant or unnecessary HTTP requests to improve app performance and reduce backend load. It covers caching data locally in state, only re-fetching when data is stale or an action requires it, and controlling when fetch functions are called. Efficient request management is a sign of a well-architected Flutter application.

## Key Points
- Avoid placing fetch calls in `build()` — this triggers a new request every time the widget rebuilds
- Use `initState()` or a one-time trigger to fetch data only when the screen first loads
- Store fetched data in widget state or a state management solution (e.g., Provider, Riverpod) so it can be reused without re-fetching
- Only re-fetch data when an action (like adding or deleting an item) changes the backend state
- Using `setState()` after a mutation to update local state avoids a full re-fetch in many cases

## Code Example
```dart
class _MealsScreenState extends State<MealsScreen> {
  List<Meal> _meals = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadMeals(); // Fetch only once when the widget is first inserted
  }

  Future<void> _loadMeals() async {
    final fetchedMeals = await fetchMeals();
    setState(() {
      _meals = fetchedMeals;
      _isLoading = false;
    });
  }

  Future<void> _addMeal(Meal newMeal) async {
    await postMeal(newMeal); // Send to backend
    setState(() {
      _meals.add(newMeal); // Update local state without re-fetching
    });
  }

  @override
  Widget build(BuildContext context) {
    // build() can run many times — no HTTP calls here
    return ListView.builder(
      itemCount: _meals.length,
      itemBuilder: (ctx, i) => Text(_meals[i].title),
    );
  }
}
```

## Notes
Placing HTTP calls inside `build()` is a common beginner mistake that leads to infinite request loops and poor performance. Using `initState()` ensures data is fetched exactly once per widget lifecycle. For more complex scenarios, state management solutions like Riverpod or BLoC provide even finer control over when data is fetched.

## Summary
Unnecessary HTTP requests are avoided by fetching data once in `initState()` and updating local state after mutations rather than re-fetching on every rebuild.
