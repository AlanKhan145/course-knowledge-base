# An Alternative Navigation Pattern Using Named Routes

## Overview
This lecture presents named routes as an alternative to the anonymous `MaterialPageRoute` navigation pattern used throughout this module. Named routes register screen paths in `MaterialApp.routes` and use `Navigator.pushNamed(context, '/route-name')` for navigation. While convenient for simple apps, named routes have limitations with data passing.

## Key Points
- Register named routes in the `routes` map of `MaterialApp`
- Use `Navigator.pushNamed(context, '/filters')` to navigate by name
- Pass simple arguments via `Navigator.pushNamed(context, '/', arguments: data)`
- Retrieve arguments with `ModalRoute.of(context)!.settings.arguments`
- Named routes are considered a legacy pattern; Flutter's `go_router` package is the modern alternative

## Code Example
```dart
// In main.dart — registering named routes
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (ctx) => const TabsScreen(),
    '/meals': (ctx) => const MealsScreen(meals: []),
    '/meal-detail': (ctx) => const MealDetailsScreen(/* ... */),
    '/filters': (ctx) => const FiltersScreen(currentFilters: kInitialFilters),
  },
)

// Navigating with a named route
Navigator.of(context).pushNamed('/filters');

// Navigating with arguments
Navigator.of(context).pushNamed('/meals', arguments: filteredMeals);

// Receiving arguments in the target screen
final meals = ModalRoute.of(context)!.settings.arguments as List<Meal>;
```

## Notes
Named routes were the original Flutter navigation pattern but have significant limitations: passing complex typed data requires casting from `Object?`, and routes are registered globally without type safety. The `go_router` package is now the recommended approach for production apps, offering deep linking, URL-based routing, and strong type safety. Named routes are still encountered in older codebases and tutorials.

## Summary
Named routes offer a centralized, string-based navigation system registered in `MaterialApp.routes`, but lack the type safety and flexibility of modern routing packages like `go_router`.
