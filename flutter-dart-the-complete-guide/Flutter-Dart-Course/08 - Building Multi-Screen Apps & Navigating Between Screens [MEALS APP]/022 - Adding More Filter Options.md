# Adding More Filter Options

## Overview
This lecture expands the `FiltersScreen` to include all four dietary filters: gluten-free, lactose-free, vegetarian, and vegan. Each filter is wired up with its own `SwitchListTile` and corresponding state variable, all initialized from the `currentFilters` map passed in via the constructor.

## Key Points
- Add four `SwitchListTile` widgets, one for each dietary filter (gluten-free, lactose-free, vegetarian, vegan)
- Initialize all four state booleans from `widget.currentFilters` in `initState`
- Use the `Filter` enum keys for type-safe map access
- Ensure all filters are included in the map returned when the screen is popped
- Test each toggle independently to verify state updates correctly

## Code Example
```dart
class _FiltersScreenState extends State<FiltersScreen> {
  var _glutenFreeFilterSet = false;
  var _lactoseFreeFilterSet = false;
  var _vegetarianFilterSet = false;
  var _veganFilterSet = false;

  @override
  void initState() {
    super.initState();
    _glutenFreeFilterSet = widget.currentFilters[Filter.glutenFree]!;
    _lactoseFreeFilterSet = widget.currentFilters[Filter.lactoseFree]!;
    _vegetarianFilterSet = widget.currentFilters[Filter.vegetarian]!;
    _veganFilterSet = widget.currentFilters[Filter.vegan]!;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Your Filters')),
      body: Column(
        children: [
          _buildSwitch('Gluten-free', 'Only gluten-free meals.', _glutenFreeFilterSet,
              (v) => setState(() => _glutenFreeFilterSet = v)),
          _buildSwitch('Lactose-free', 'Only lactose-free meals.', _lactoseFreeFilterSet,
              (v) => setState(() => _lactoseFreeFilterSet = v)),
          _buildSwitch('Vegetarian', 'Only vegetarian meals.', _vegetarianFilterSet,
              (v) => setState(() => _vegetarianFilterSet = v)),
          _buildSwitch('Vegan', 'Only vegan meals.', _veganFilterSet,
              (v) => setState(() => _veganFilterSet = v)),
        ],
      ),
    );
  }
}
```

## Notes
Extracting the `SwitchListTile` construction into a helper method (like `_buildSwitch`) reduces repetition and keeps the `build` method concise. All four filter values must be tracked independently in state so they can be toggled without affecting each other. Returning all four filters in a `Map<Filter, bool>` when the screen is popped ensures the parent has complete filter state.

## Summary
The `FiltersScreen` tracks four independent boolean states for dietary filters and displays each as a `SwitchListTile`, initialized from the parent's current filter settings.
