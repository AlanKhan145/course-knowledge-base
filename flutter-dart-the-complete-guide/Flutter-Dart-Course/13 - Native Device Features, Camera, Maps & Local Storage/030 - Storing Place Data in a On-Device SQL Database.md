# Storing Place Data in a On-Device SQL Database

## Overview
This lecture implements the SQLite database schema and the insert operation to persist place data on the device. The database is opened (or created) using `openDatabase`, a `places` table is created with columns for id, title, image path, latitude, longitude, and address, and the `addPlace` notifier method is updated to insert each new place as a row. This ensures all place data survives app restarts.

## Key Points
- `openDatabase(dbPath, onCreate: ...)` creates the database file and runs the `CREATE TABLE` SQL on first run
- The table schema includes columns: `id TEXT`, `title TEXT`, `image TEXT`, `lat REAL`, `lng REAL`, `address TEXT`
- `db.insert('places', data)` inserts a `Map<String, Object?>` representing one row
- `getApplicationDocumentsDirectory()` and `path.join` are used to construct the database file path

## Code Example
```dart
import 'package:sqflite/sqflite.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;

Future<Database> _getDatabase() async {
  final dbPath = await getApplicationDocumentsDirectory();
  final db = await openDatabase(
    path.join(dbPath.path, 'places.db'),
    onCreate: (db, version) {
      return db.execute(
        'CREATE TABLE user_places('
        'id TEXT PRIMARY KEY, '
        'title TEXT, '
        'image TEXT, '
        'lat REAL, '
        'lng REAL, '
        'address TEXT)',
      );
    },
    version: 1,
  );
  return db;
}

Future<void> addPlace(String name, File image, PlaceLocation location) async {
  final imagePath = await _saveImageLocally(image);
  final newPlace = Place(name: name, image: File(imagePath), location: location);

  final db = await _getDatabase();
  await db.insert('user_places', {
    'id': newPlace.id,
    'title': newPlace.name,
    'image': imagePath,
    'lat': location.latitude,
    'lng': location.longitude,
    'address': location.address,
  });

  state = [newPlace, ...state];
}
```

## Notes
The `version: 1` parameter and the `onCreate` callback together form the database migration pattern — if the database already exists with the same version, `onCreate` is skipped. The `REAL` SQLite type maps to Dart's `double`, making it appropriate for latitude and longitude values. Storing `image` as a `TEXT` path rather than `BLOB` bytes is strongly recommended for performance and storage efficiency.

## Summary
Place data is persisted to a local SQLite database using `sqflite`'s `openDatabase` and `insert` methods, with a schema covering all place fields so data is fully recoverable after app restarts.
