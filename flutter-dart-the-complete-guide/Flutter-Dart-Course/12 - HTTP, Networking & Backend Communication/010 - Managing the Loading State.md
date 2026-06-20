# Managing the Loading State

## Overview
This lecture covers how to manage and display a loading state in the Flutter UI while an HTTP request is in progress. It demonstrates using a boolean flag combined with `setState()` to switch between a loading indicator and the actual content. Providing visual feedback during network operations is essential for a good user experience.

## Key Points
- A boolean `_isLoading` flag tracks whether an HTTP request is currently in progress
- Set `_isLoading = true` before the request and `_isLoading = false` after it completes (or fails)
- Use a `CircularProgressIndicator` widget to display a spinner while loading
- A conditional expression in `build()` switches between the spinner and the main content
- Always update loading state inside `setState()` to trigger a UI rebuild

## Code Example
```dart
class _MealsScreenState extends State<MealsScreen> {
  List<Meal> _meals = [];
  bool _isLoading = true; // Start as true — loading begins immediately

  @override
  void initState() {
    super.initState();
    _loadMeals();
  }

  Future<void> _loadMeals() async {
    setState(() => _isLoading = true);

    final fetchedMeals = await fetchMeals();

    setState(() {
      _meals = fetchedMeals;
      _isLoading = false; // Done loading
    });
  }

  @override
  Widget build(BuildContext context) {
    // Show spinner while loading, list when done
    Widget content = _isLoading
        ? const Center(child: CircularProgressIndicator())
        : ListView.builder(
            itemCount: _meals.length,
            itemBuilder: (ctx, i) => ListTile(title: Text(_meals[i].title)),
          );

    return Scaffold(
      appBar: AppBar(title: const Text('Meals')),
      body: content,
    );
  }
}
```

## Notes
Always reset `_isLoading` to `false` in all code paths, including error cases, to prevent the spinner from showing indefinitely. Using a ternary inside `build()` is a clean, readable pattern for toggling between loading and content states. For more complex UIs, consider separate states for "loading", "error", and "success".

## Summary
A `_isLoading` boolean flag toggled with `setState()` controls when a `CircularProgressIndicator` is shown, giving users visual feedback during HTTP requests.
