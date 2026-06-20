# Adding a Place Model Challenge Solution 1 of 6

## Overview
This lecture presents the solution to the first part of the challenge: creating the `Place` data model class. The model encapsulates all the data attributes a saved place will have, including an id, title, image, and location. A well-defined model is the foundation for the rest of the app's data flow.

## Key Points
- The `Place` class is defined as an immutable data class in `lib/models/place.dart`
- A unique `id` is generated using the `uuid` package to uniquely identify each place
- The model initially holds a `name` (String) and will be extended with `image` and `location` fields in later lectures
- Using `final` fields enforces immutability, which is best practice in Riverpod-managed state

## Code Example
```dart
import 'package:uuid/uuid.dart';

const uuid = Uuid();

class Place {
  Place({required this.name})
      : id = uuid.v4();

  final String id;
  final String name;
}
```

## Notes
The `uuid` package generates RFC 4122 version 4 UUIDs, which are random and practically guaranteed to be unique. Keeping the `Place` class immutable ensures that state changes are always driven through the Riverpod provider, preventing accidental direct mutations. This model will grow incrementally as image and location support is added.

## Summary
The first challenge solution creates an immutable `Place` model class with a unique auto-generated id, forming the core data structure for the entire Favorite Places app.
