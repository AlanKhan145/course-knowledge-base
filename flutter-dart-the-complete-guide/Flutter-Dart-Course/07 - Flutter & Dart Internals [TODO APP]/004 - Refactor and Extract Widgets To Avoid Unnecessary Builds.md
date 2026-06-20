# Refactor and Extract Widgets To Avoid Unnecessary Builds

## Overview
Extracting parts of a widget tree into separate widget classes is one of the most effective ways to limit the scope of rebuilds in a Flutter app. When a parent widget rebuilds, only its `build()` method runs — child widgets that are extracted into their own classes will only rebuild if their own inputs change. This lecture shows practical refactoring techniques to improve performance.

## Key Points
- Defining child UI as `Widget` variables inside a `build()` method still causes them to rebuild with the parent
- Extracting child UI into separate `StatelessWidget` or `StatefulWidget` classes isolates rebuilds
- Flutter will reuse the element for an extracted widget if its type and position in the tree remain the same
- Avoid large monolithic `build()` methods — they rebuild everything inside them on every `setState()` call
- The `const` constructor optimization also prevents widget rebuilds when inputs have not changed

## Code Example
```dart
// BEFORE: Everything rebuilds when _todoList changes
class TodoScreen extends StatefulWidget {
  @override
  State<TodoScreen> createState() => _TodoScreenState();
}

class _TodoScreenState extends State<TodoScreen> {
  final List<String> _todos = [];

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // This header rebuilds unnecessarily every time _todos changes
        Text('My Todo App', style: TextStyle(fontSize: 24)),
        ListView(children: _todos.map((t) => Text(t)).toList()),
      ],
    );
  }
}

// AFTER: Extract the header to prevent unnecessary rebuilds
class TodoHeader extends StatelessWidget {
  const TodoHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('My Todo App', style: TextStyle(fontSize: 24));
  }
}

// In the parent build():
// const TodoHeader(), // won't rebuild when _todos changes
```

## Notes
Widget extraction is not just about code organization — it has a direct impact on rendering performance. The Flutter framework uses the widget's runtime type and position in the tree to decide whether to reuse an element, so splitting a large widget into multiple named classes gives Flutter more opportunity to skip unnecessary rebuilds. Using `const` constructors wherever possible compounds this benefit.

## Summary
Extracting widgets into separate classes limits rebuild scope and, combined with `const` constructors, is the primary low-effort technique for improving Flutter UI performance.
