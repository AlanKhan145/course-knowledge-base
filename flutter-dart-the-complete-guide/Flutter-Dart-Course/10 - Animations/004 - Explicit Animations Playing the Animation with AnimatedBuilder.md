# Explicit Animations Playing the Animation with AnimatedBuilder

## Overview
This lecture introduces `AnimatedBuilder`, the widget used to rebuild parts of the UI in response to animation value changes. It shows how to connect an `AnimationController` to an `AnimatedBuilder` so that the widget tree rebuilds efficiently on every animation tick. The lecture also demonstrates how to use a `Tween` to map the controller's 0.0–1.0 range to meaningful values.

## Key Points
- `AnimatedBuilder` listens to an `Animation` and rebuilds its `builder` callback on every tick
- Only the subtree returned by `builder` is rebuilt, making it more efficient than calling `setState`
- A `Tween` maps the controller's default range (0.0 to 1.0) to a custom range (e.g., size 50 to 200)
- Use `_controller.drive(Tween(...))` or `Tween(...).animate(_controller)` to create an `Animation<T>`
- The `child` parameter of `AnimatedBuilder` can cache non-animated subtrees to avoid rebuilding them

## Code Example
```dart
class _MyAnimatedWidgetState extends State<MyAnimatedWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _sizeAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 600),
    );
    _sizeAnimation = Tween<double>(begin: 50, end: 200).animate(_controller);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _controller.forward(),
      child: AnimatedBuilder(
        animation: _sizeAnimation,
        builder: (context, child) {
          return SizedBox(
            width: _sizeAnimation.value,
            height: _sizeAnimation.value,
            child: child,
          );
        },
        child: const FlutterLogo(),
      ),
    );
  }
}
```

## Notes
`AnimatedBuilder` is preferred over manually calling `setState` inside an animation listener because it scopes rebuilds to only the animated portion of the widget tree. The `child` parameter is a performance optimization — any widget passed there is built once and reused across frames. Combining `Tween` with `CurvedAnimation` gives you both range mapping and easing curves.

## Summary
`AnimatedBuilder` efficiently drives UI rebuilds from an `AnimationController` by scoping redraws to only the animated subtree, and `Tween` translates the raw 0.0–1.0 controller value into meaningful animated properties.
