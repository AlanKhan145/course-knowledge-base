# Adding Tab-based Navigation

## Overview
This lecture introduces tab-based navigation using Flutter's `TabBar` and `BottomNavigationBar` widgets. The app is restructured to have two main tabs: one for meal categories and one for favorite meals. A new `TabsScreen` widget manages which tab is currently active and renders the corresponding screen.

## Key Points
- `BottomNavigationBar` displays tabs at the bottom of the screen with icons and labels
- `currentIndex` tracks the active tab; `onTap` updates it via `setState`
- `TabsScreen` is a `StatefulWidget` because it needs to track the active tab index
- The `body` of the `Scaffold` switches between screens based on the selected tab index
- An alternative is `DefaultTabController` + `TabBar` in the `AppBar` for top tab navigation

## Code Example
```dart
class TabsScreen extends StatefulWidget {
  const TabsScreen({super.key});

  @override
  State<TabsScreen> createState() => _TabsScreenState();
}

class _TabsScreenState extends State<TabsScreen> {
  int _selectedPageIndex = 0;

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget activePage = const CategoriesScreen();
    String activePageTitle = 'Categories';

    if (_selectedPageIndex == 1) {
      activePage = const MealsScreen(meals: []);
      activePageTitle = 'Your Favorites';
    }

    return Scaffold(
      appBar: AppBar(title: Text(activePageTitle)),
      body: activePage,
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        currentIndex: _selectedPageIndex,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.set_meal), label: 'Categories'),
          BottomNavigationBarItem(icon: Icon(Icons.star), label: 'Favorites'),
        ],
      ),
    );
  }
}
```

## Notes
`TabsScreen` must be a `StatefulWidget` because it manages the `_selectedPageIndex` state. Conditionally assigning `activePage` and `activePageTitle` before the `build` return keeps the `build` method readable. The `BottomNavigationBar` is a Material Design standard for primary navigation with two to five destinations.

## Summary
`TabsScreen` uses a `BottomNavigationBar` and a state variable to switch between the categories screen and the favorites screen.
