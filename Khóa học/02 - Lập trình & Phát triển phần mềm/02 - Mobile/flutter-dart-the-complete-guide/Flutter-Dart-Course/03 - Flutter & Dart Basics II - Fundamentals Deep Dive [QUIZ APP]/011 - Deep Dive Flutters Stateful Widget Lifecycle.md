# Deep Dive: Flutter’s Stateful Widget Lifecycle

## Overview

This lecture explains the complete lifecycle of a Flutter `StatefulWidget`, from creation to disposal. Every Flutter widget has a built-in lifecycle: a set of methods that Flutter automatically calls at specific moments.

For `StatefulWidget`, lifecycle methods are especially important because they help you manage mutable state, initialize resources, react to parent widget changes, rebuild the UI, and clean up resources properly.

Understanding this lifecycle helps prevent common bugs related to state updates, memory leaks, and resource management.

---

## Key Lifecycle Methods

### `createState()`

`createState()` is called on the `StatefulWidget` to create its associated mutable `State` object.

This method is usually simple and returns an instance of the widget’s `State` class.

```dart
@override
State<ExampleWidget> createState() {
  return _ExampleWidgetState();
}
```

---

### `initState()`

`initState()` is called once when the `State` object is first initialized.

Use this method for one-time setup, such as:

* Creating controllers
* Starting animations
* Setting up listeners
* Initializing subscriptions
* Loading initial data

Always call `super.initState()` at the beginning.

```dart
@override
void initState() {
  super.initState();
  _controller = TextEditingController();
}
```

---

### `didChangeDependencies()`

`didChangeDependencies()` is called after `initState()` and whenever an inherited dependency changes.

This method is useful when your widget depends on inherited widgets, such as:

* `Theme`
* `MediaQuery`
* `Provider`
* `InheritedWidget`

```dart
@override
void didChangeDependencies() {
  super.didChangeDependencies();
}
```

---

### `build()`

`build()` is called whenever Flutter needs to render the widget.

It is called:

* After `initState()`
* After `setState()`
* When the parent widget rebuilds
* When inherited dependencies change
* During hot reload

Because `build()` can run many times, avoid putting expensive logic or one-time initialization inside it.

```dart
@override
Widget build(BuildContext context) {
  return TextField(controller: _controller);
}
```

---

### `didUpdateWidget()`

`didUpdateWidget()` is called when the parent widget rebuilds and provides a new configuration to the same `State` object.

This method is useful when your widget needs to react to updated properties from its parent.

```dart
@override
void didUpdateWidget(ExampleWidget oldWidget) {
  super.didUpdateWidget(oldWidget);

  if (oldWidget.initialText != widget.initialText) {
    _controller.text = widget.initialText;
  }
}
```

---

### `setState()`

`setState()` tells Flutter that the internal state has changed and that the widget should rebuild.

Calling `setState()` triggers the `build()` method again.

```dart
setState(() {
  counter++;
});
```

Only use `setState()` for values that directly affect the UI.

---

### `deactivate()`

`deactivate()` is called when the widget is removed from the widget tree temporarily.

This method is less commonly used, but it can be useful when working with widgets that may be moved in the tree.

```dart
@override
void deactivate() {
  super.deactivate();
}
```

---

### `dispose()`

`dispose()` is called when the widget is permanently removed from the widget tree.

Use this method to clean up resources, such as:

* `TextEditingController`
* `AnimationController`
* `FocusNode`
* `StreamSubscription`
* Listeners
* Timers

Always call `super.dispose()` at the end.

```dart
@override
void dispose() {
  _controller.dispose();
  super.dispose();
}
```

---

## Lifecycle Flow

The typical lifecycle flow of a `StatefulWidget` looks like this:

```text
createState()
    ↓
initState()
    ↓
didChangeDependencies()
    ↓
build()
    ↓
setState() / parent rebuild / dependency change
    ↓
build()
    ↓
didUpdateWidget()
    ↓
build()
    ↓
deactivate()
    ↓
dispose()
```

---

## Code Example

```dart
class ExampleWidget extends StatefulWidget {
  const ExampleWidget({
    super.key,
    required this.initialText,
  });

  final String initialText;

  @override
  State<ExampleWidget> createState() {
    return _ExampleWidgetState();
  }
}

class _ExampleWidgetState extends State<ExampleWidget> {
  late final TextEditingController _controller;

  @override
  void initState() {
    super.initState();

    // Called once: initialize resources
    _controller = TextEditingController(text: widget.initialText);
  }

  @override
  void didUpdateWidget(ExampleWidget oldWidget) {
    super.didUpdateWidget(oldWidget);

    // Called when parent rebuilds with different properties
    if (oldWidget.initialText != widget.initialText) {
      _controller.text = widget.initialText;
    }
  }

  @override
  Widget build(BuildContext context) {
    // Called whenever the widget needs to rebuild
    return TextField(
      controller: _controller,
    );
  }

  @override
  void dispose() {
    // Called once: clean up resources
    _controller.dispose();

    super.dispose();
  }
}
```

---

## Important Notes

The three most important `StatefulWidget` lifecycle methods to remember are:

1. `initState()`
2. `build()`
3. `dispose()`

`initState()` is used for one-time initialization.

`build()` is used to describe the UI and can run many times.

`dispose()` is used to clean up resources before the widget is removed permanently.

The `dispose()` method is especially important for preventing memory leaks. Always dispose of objects such as `AnimationController`, `TextEditingController`, `FocusNode`, `StreamSubscription`, and timers.

`didUpdateWidget()` is less commonly used, but it becomes important when a widget must respond to updated values passed from its parent.

During hot reload, Flutter preserves the existing `State` object and rebuilds the widget. This means `build()` runs again, but `initState()` does not run again.

---

## Summary

Flutter’s `StatefulWidget` lifecycle provides structured hooks for managing a widget from creation to disposal.

The most important lifecycle methods are:

* `initState()` for one-time setup
* `build()` for rendering UI
* `didUpdateWidget()` for reacting to parent configuration changes
* `dispose()` for cleaning up resources

By using these methods correctly, you can build stateful Flutter widgets that are efficient, predictable, and free from common resource-management bugs.
