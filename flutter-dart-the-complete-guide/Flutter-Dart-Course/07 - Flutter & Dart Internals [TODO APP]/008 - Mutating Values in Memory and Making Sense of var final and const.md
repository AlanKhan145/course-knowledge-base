# Mutating Values in Memory and Making Sense of var final and const

## Overview
This lecture clarifies the distinctions between `var`, `final`, and `const` in Dart, with a focus on how they affect mutability of references and values in memory. Understanding these keywords is essential for writing correct Flutter code, especially when reasoning about why `setState()` is needed and when Flutter can or cannot detect a data change.

## Key Points
- `var` declares a variable whose reference can be reassigned to a different object
- `final` declares a variable whose reference cannot be reassigned after initialization, but the object it points to may still be mutable (e.g., a `final List` can still have items added)
- `const` declares a compile-time constant — both the reference and the value are deeply immutable
- Mutating a `final` list (e.g., calling `.add()`) without `setState()` will not trigger a UI rebuild even though the data changed
- Flutter's `const` widget optimization skips rebuilding widgets whose constructor arguments are compile-time constants

## Code Example
```dart
// var: reference can change
var name = 'Alice';
name = 'Bob'; // OK

// final: reference is fixed, but object may be mutable
final List<String> todos = [];
todos.add('Buy milk'); // OK — mutating the list, not the reference
// todos = []; // ERROR — cannot reassign a final variable

// const: deeply immutable, resolved at compile time
const double pi = 3.14159;
// const List<String> fixed = ['a', 'b']; // OK, but list cannot be modified

// Flutter optimization with const widgets
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const Text('Hello'); // const here — Flutter skips rebuild for this widget
  }
}

// Mutating final state without setState — BUG: UI does not update
class _BadState extends State<MyWidget> {
  final List<String> _items = [];

  void _addItem() {
    _items.add('new item'); // List mutated, but no setState — UI unchanged
  }
}
```

## Notes
A common mistake is mutating a `final` collection inside a `StatefulWidget` without calling `setState()`, which changes the data in memory but does not schedule a UI rebuild. Dart's `final` only prevents reference reassignment — it does not make the object immutable. Using `const` on widgets tells Flutter the widget's configuration will never change, enabling it to short-circuit the rebuild process entirely for that subtree.

## Summary
`var` allows reference reassignment, `final` locks the reference but not the object's contents, and `const` enforces deep compile-time immutability — and using `const` on Flutter widgets is a key performance optimization.
