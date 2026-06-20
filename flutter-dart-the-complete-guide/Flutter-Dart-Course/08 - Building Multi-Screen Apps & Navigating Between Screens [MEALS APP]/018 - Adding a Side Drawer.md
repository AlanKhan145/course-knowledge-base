# Adding a Side Drawer

## Overview
This lecture covers adding a navigation drawer to the app using Flutter's `Drawer` widget. The drawer slides in from the side and provides navigation options such as going to the meals categories or the filters screen. It is attached to the `Scaffold` via the `drawer` property.

## Key Points
- Add a `Drawer` widget to the `drawer` property of `Scaffold`
- Use `DrawerHeader` to display a branded header at the top of the drawer
- Add `ListTile` widgets inside the drawer for each navigation option
- `Navigator.push` or `Navigator.pushReplacement` is called from drawer item `onTap`
- The hamburger menu icon appears automatically in the `AppBar` when a drawer is present

## Code Example
```dart
class MainDrawer extends StatelessWidget {
  const MainDrawer({super.key, required this.onSelectScreen});

  final void Function(String identifier) onSelectScreen;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          DrawerHeader(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  Theme.of(context).colorScheme.primaryContainer,
                  Theme.of(context).colorScheme.primaryContainer.withOpacity(0.8),
                ],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
            child: Row(
              children: [
                Icon(Icons.fastfood, size: 48, color: Theme.of(context).colorScheme.primary),
                const SizedBox(width: 18),
                Text('Cooking Up!', style: Theme.of(context).textTheme.titleLarge),
              ],
            ),
          ),
          ListTile(
            leading: Icon(Icons.restaurant, color: Theme.of(context).colorScheme.onBackground),
            title: const Text('Meals'),
            onTap: () => onSelectScreen('meals'),
          ),
          ListTile(
            leading: Icon(Icons.settings, color: Theme.of(context).colorScheme.onBackground),
            title: const Text('Filters'),
            onTap: () => onSelectScreen('filters'),
          ),
        ],
      ),
    );
  }
}
```

## Notes
The `Scaffold` automatically shows the hamburger icon in the `AppBar` and handles opening/closing the drawer when a `drawer` property is provided. Using a callback (`onSelectScreen`) rather than calling `Navigator` inside the drawer keeps navigation logic in the parent screen. The `DrawerHeader` is a convenience widget that provides appropriate padding and sizing for a drawer header.

## Summary
A `Drawer` widget attached to the `Scaffold` provides slide-in side navigation with a branded header and `ListTile` navigation items.
