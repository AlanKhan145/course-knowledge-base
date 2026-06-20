# Using a FutureBuilder for Loading Data

## Overview
This lecture refactors the data loading mechanism to use a `FutureBuilder` widget, which elegantly handles the three states of an asynchronous operation: loading, done, and error. Instead of manually managing a loading boolean with `setState`, the `FutureBuilder` directly integrates with the `Future` returned by `loadPlaces` and renders the appropriate UI for each state. This leads to cleaner and more declarative asynchronous UI code.

## Key Points
- `FutureBuilder` takes a `future` and a `builder` callback that receives `BuildContext` and `AsyncSnapshot`
- `snapshot.connectionState == ConnectionState.waiting` indicates the future is still in progress — show a loading spinner
- `snapshot.hasError` allows displaying an error message if the database query fails
- `snapshot.data` contains the resolved value (or the provider state is already updated by the time the future completes)

## Code Example
```dart
class PlacesScreen extends ConsumerStatefulWidget {
  const PlacesScreen({super.key});

  @override
  ConsumerState<PlacesScreen> createState() => _PlacesScreenState();
}

class _PlacesScreenState extends ConsumerState<PlacesScreen> {
  late Future<void> _placesFuture;

  @override
  void initState() {
    super.initState();
    _placesFuture = ref.read(userPlacesProvider.notifier).loadPlaces();
  }

  @override
  Widget build(BuildContext context) {
    final userPlaces = ref.watch(userPlacesProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Your Places')),
      body: FutureBuilder(
        future: _placesFuture,
        builder: (ctx, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          return userPlaces.isEmpty
              ? const Center(child: Text('No places added yet.'))
              : ListView.builder(
                  itemCount: userPlaces.length,
                  itemBuilder: (ctx, index) => PlaceItem(place: userPlaces[index]),
                );
        },
      ),
    );
  }
}
```

## Notes
Storing the future in a `late final` instance variable (`_placesFuture`) initialized in `initState` is important — if the future were created directly inside the `build` method, it would be recreated on every rebuild, causing infinite reloading. The `ConsumerStatefulWidget` is used here because both local state (for the future) and provider access are needed. After `loadPlaces` completes, `ref.watch(userPlacesProvider)` picks up the updated state and triggers a rebuild showing the loaded list.

## Summary
`FutureBuilder` is used to declaratively handle the loading, error, and success states of the database fetch, replacing manual state management with a clean widget-based async pattern.
