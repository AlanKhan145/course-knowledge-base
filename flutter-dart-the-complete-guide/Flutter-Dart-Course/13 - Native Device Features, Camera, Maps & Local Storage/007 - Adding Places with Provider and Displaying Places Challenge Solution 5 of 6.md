# Adding Places with Provider and Displaying Places Challenge Solution 5 of 6

## Overview
This lecture connects the Add Place screen and the Places screen through the Riverpod provider, completing the add-and-display data flow. When a user submits a new place name on the Add Place screen, it is added to the provider state and immediately reflected in the list on the Places screen. This demonstrates the reactive data binding that Riverpod provides.

## Key Points
- The `AddPlaceScreen` reads the provider notifier with `ref.read(userPlacesProvider.notifier).addPlace(...)` to trigger state updates
- The `PlacesScreen` watches the provider with `ref.watch(userPlacesProvider)` to reactively display the current list
- A `ListTile` widget is used to display each place name in the `ListView.builder`
- Navigation flow: Places screen -> Add Place screen -> pop back -> Places screen auto-updates

## Code Example
```dart
// In PlacesScreen - watching and displaying places
class PlacesScreen extends ConsumerWidget {
  const PlacesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userPlaces = ref.watch(userPlacesProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Your Places')),
      body: userPlaces.isEmpty
          ? const Center(child: Text('No places saved yet!'))
          : ListView.builder(
              itemCount: userPlaces.length,
              itemBuilder: (ctx, index) => ListTile(
                title: Text(userPlaces[index].name),
              ),
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.of(context).push(
          MaterialPageRoute(builder: (ctx) => const AddPlaceScreen()),
        ),
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## Notes
The distinction between `ref.watch` (used in `build` methods to listen and rebuild) and `ref.read` (used in callbacks to perform one-time reads or mutations) is critical for correct Riverpod usage. Using `ref.watch` inside a button callback would cause bugs. The list updates automatically without any manual `setState` because `ref.watch` triggers a widget rebuild whenever the provider state changes.

## Summary
The fifth challenge solution wires together the provider, the Add Place form, and the Places list to create a fully functional add-and-display flow using reactive Riverpod state management.
