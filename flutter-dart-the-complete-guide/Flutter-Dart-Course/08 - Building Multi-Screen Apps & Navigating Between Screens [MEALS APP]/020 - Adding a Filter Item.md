# Adding a Filter Item

## Overview
This lecture builds the `FiltersScreen` and creates a reusable `FilterItem` widget that displays a single filter option as a `SwitchListTile`. Users can toggle dietary filters such as gluten-free, lactose-free, vegetarian, and vegan. The screen reads and writes filter state to allow dynamic meal filtering.

## Key Points
- Create a `FiltersScreen` as a `StatefulWidget` to manage toggle states locally
- Use `SwitchListTile` to display a toggle switch with a title and subtitle
- Each filter corresponds to a boolean value tracked in the screen's state
- Accept the current filter values as constructor arguments so the screen reflects existing state
- Define a `Filter` enum to represent the four filter options cleanly

## Code Example
```dart
enum Filter { glutenFree, lactoseFree, vegetarian, vegan }

class FiltersScreen extends StatefulWidget {
  const FiltersScreen({super.key, required this.currentFilters});

  final Map<Filter, bool> currentFilters;

  @override
  State<FiltersScreen> createState() => _FiltersScreenState();
}

class _FiltersScreenState extends State<FiltersScreen> {
  var _glutenFreeFilterSet = false;

  @override
  void initState() {
    super.initState();
    _glutenFreeFilterSet = widget.currentFilters[Filter.glutenFree]!;
    // initialize other filters similarly
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Your Filters')),
      body: Column(
        children: [
          SwitchListTile(
            value: _glutenFreeFilterSet,
            onChanged: (isChecked) {
              setState(() => _glutenFreeFilterSet = isChecked);
            },
            title: const Text('Gluten-free'),
            subtitle: const Text('Only include gluten-free meals.'),
            activeColor: Theme.of(context).colorScheme.tertiary,
            contentPadding: const EdgeInsets.only(left: 34, right: 22),
          ),
          // Additional SwitchListTiles for other filters
        ],
      ),
    );
  }
}
```

## Notes
`SwitchListTile` is a convenience widget that combines a `ListTile` with a `Switch`, saving you the effort of composing them manually. Using `initState` to copy constructor values into local state is important — if you read from `widget.currentFilters` directly during rebuilds, changes will not persist. A `Filter` enum prevents typos and makes filter keys type-safe.

## Summary
`FiltersScreen` uses `SwitchListTile` widgets and a `StatefulWidget` with `initState` to display and toggle dietary filter options.
