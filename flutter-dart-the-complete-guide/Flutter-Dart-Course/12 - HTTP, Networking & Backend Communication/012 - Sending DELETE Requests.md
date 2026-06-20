# Sending DELETE Requests

## Overview
This lecture demonstrates how to send a DELETE request to the Firebase backend to remove a specific record by its ID. It covers constructing the correct URL with the record's unique ID appended, calling `http.delete()`, and updating the local state to reflect the deletion without re-fetching all data. DELETE requests complete the basic CRUD operations covered in this module.

## Key Points
- `http.delete()` sends a DELETE request to the URL of the specific resource to remove
- The resource ID must be included in the URL path, e.g., `.../meals/<id>.json` for Firebase
- After a successful delete, remove the item from local state using `setState()` to avoid a full re-fetch
- Check the response status code to confirm the delete succeeded before updating local state
- Firebase returns an empty body (`null`) on a successful DELETE, which is expected

## Code Example
```dart
import 'package:http/http.dart' as http;

Future<void> deleteMeal(String mealId) async {
  final url = Uri.parse(
    'https://my-project-default-rtdb.firebaseio.com/meals/$mealId.json',
  );

  final response = await http.delete(url);

  if (response.statusCode >= 400) {
    throw Exception('Failed to delete meal.');
  }
}

// In the widget:
Future<void> _removeMeal(Meal meal) async {
  final mealIndex = _meals.indexOf(meal);

  setState(() {
    _meals.remove(meal); // Optimistically remove from UI
  });

  try {
    await deleteMeal(meal.id);
  } catch (error) {
    // Restore item if delete failed
    setState(() {
      _meals.insert(mealIndex, meal);
    });
  }
}
```

## Notes
The "optimistic update" pattern shown above removes the item from the UI immediately and restores it if the network request fails, providing a snappier user experience. Always store the item's original index before removal so it can be reinserted at the correct position on failure. Firebase returns HTTP 200 with a `null` body on a successful delete.

## Summary
DELETE requests target a specific resource URL with the item's ID, and local state is updated immediately after success to keep the UI in sync with the backend.
