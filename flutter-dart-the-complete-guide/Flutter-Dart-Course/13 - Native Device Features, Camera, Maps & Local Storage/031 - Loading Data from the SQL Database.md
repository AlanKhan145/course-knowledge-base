# Loading Data from the SQL Database

## Overview
This lecture implements the `loadPlaces` method in `UserPlacesNotifier` that reads all rows from the SQLite database and converts them back into `Place` objects when the app starts. The method queries the `user_places` table, maps each row `Map` to a `Place` instance (reconstructing the `File` and `PlaceLocation` from stored strings/doubles), and updates the provider state. This restores the full list of places on every app launch.

## Key Points
- `db.query('user_places')` returns a `List<Map<String, Object?>>` where each map represents one database row
- Each row is mapped to a `Place` using `File(row['image'] as String)` and a reconstructed `PlaceLocation`
- The `loadPlaces` method must be called when the app initializes, typically by watching the provider in the root widget
- The notifier's state is updated with the loaded list via `state = places`

## Code Example
```dart
Future<void> loadPlaces() async {
  final db = await _getDatabase();
  final data = await db.query('user_places');

  final places = data.map((row) {
    return Place(
      id: row['id'] as String,
      name: row['title'] as String,
      image: File(row['image'] as String),
      location: PlaceLocation(
        latitude: row['lat'] as double,
        longitude: row['lng'] as double,
        address: row['address'] as String,
      ),
    );
  }).toList();

  state = places;
}

// Calling loadPlaces on app start in PlacesScreen:
@override
void initState() {
  super.initState();
  Future(() {
    ref.read(userPlacesProvider.notifier).loadPlaces();
  });
}
```

## Notes
The `Place` constructor needs to accept an optional `id` parameter so that loaded places retain their original database IDs rather than generating new UUIDs. Calling `loadPlaces` inside `initState` requires care in Riverpod — using `Future(() { ... })` defers the provider read to after the first build, avoiding the "calling ref during build" error. The `as String` and `as double` casts are safe here because SQLite always returns the types that match the column definitions.

## Summary
The `loadPlaces` method queries all rows from the SQLite database, reconstructs `Place` objects from the stored column data, and updates the Riverpod state, restoring the full places list on every app launch.
