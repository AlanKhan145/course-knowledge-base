# Getting Started with Implicit Animations

## Overview
This lecture introduces implicit animations by demonstrating Flutter's built-in `Animated*` widgets such as `AnimatedContainer`, `AnimatedOpacity`, and `AnimatedAlign`. Unlike explicit animations, implicit animation widgets only require you to change a property value and provide a `duration` — Flutter handles all the interpolation internally. This makes them ideal for simple, state-driven UI transitions.

## Key Points
- Implicit animation widgets automatically animate between old and new property values on `setState`
- `AnimatedContainer` can animate size, color, padding, border-radius, and more simultaneously
- The `duration` parameter is required and defines how long the transition takes
- An optional `curve` parameter applies easing to the transition
- No `AnimationController` or `Tween` is needed for implicit animations

## Code Example
```dart
class _MyWidgetState extends State<MyWidget> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => _isExpanded = !_isExpanded),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeInOut,
        width: _isExpanded ? 200 : 80,
        height: _isExpanded ? 200 : 80,
        decoration: BoxDecoration(
          color: _isExpanded ? Colors.blue : Colors.red,
          borderRadius: BorderRadius.circular(_isExpanded ? 100 : 8),
        ),
      ),
    );
  }
}
```

## Notes
Implicit animations are the fastest way to add animations to a Flutter app because they require minimal boilerplate. The widget internally manages its own `AnimationController` and `Tween`, so you only focus on the start and end states. When multiple properties are animated simultaneously (as with `AnimatedContainer`), Flutter interpolates all of them in sync.

## Summary
Implicit animation widgets like `AnimatedContainer` let you animate UI changes with just a `duration` and a `setState` call, making them the easiest and most concise way to add smooth transitions to a Flutter app.
