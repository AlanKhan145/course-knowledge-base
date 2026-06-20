# Configuring Implicit Animations

## Overview
This lecture goes deeper into configuring implicit animations by adjusting duration, applying different easing curves, and combining multiple `Animated*` widgets together. It also covers `TweenAnimationBuilder`, which allows you to create custom implicit animations for any property type that does not have a dedicated `Animated*` widget. This bridges the gap between built-in implicit widgets and fully custom animations.

## Key Points
- The `curve` property accepts any value from the `Curves` class to control easing behavior
- `TweenAnimationBuilder` works with any `Tween` type including `ColorTween`, `AlignmentTween`, and custom tweens
- `TweenAnimationBuilder` rebuilds its `builder` callback automatically when the `tween` end value changes
- Multiple `Animated*` widgets can be nested or combined to achieve complex multi-property animations
- Choosing the right curve (e.g., `Curves.elasticOut`, `Curves.fastOutSlowIn`) has a large impact on feel

## Code Example
```dart
// Using TweenAnimationBuilder for a custom implicit animation
TweenAnimationBuilder<double>(
  tween: Tween<double>(begin: 0, end: _targetRotation),
  duration: const Duration(milliseconds: 500),
  curve: Curves.elasticOut,
  builder: (context, value, child) {
    return Transform.rotate(
      angle: value,
      child: child,
    );
  },
  child: const Icon(Icons.star, size: 60, color: Colors.amber),
)

// Using AnimatedOpacity alongside AnimatedContainer
AnimatedOpacity(
  opacity: _isVisible ? 1.0 : 0.0,
  duration: const Duration(milliseconds: 300),
  child: AnimatedContainer(
    duration: const Duration(milliseconds: 300),
    width: _isExpanded ? 150 : 75,
    height: 75,
    color: Colors.teal,
  ),
)
```

## Notes
`TweenAnimationBuilder` is powerful because it works with any interpolatable type, making it useful for animating custom data such as angles, alignments, or even custom model values. Unlike explicit animations, `TweenAnimationBuilder` re-runs the animation whenever the `tween`'s end value changes, which naturally supports data-driven animations. Combining multiple implicit animation widgets is generally safe and Flutter handles their independent timelines without interference.

## Summary
Configuring implicit animations with curves and `TweenAnimationBuilder` gives you expressive, data-driven transitions for virtually any property without the overhead of managing an explicit `AnimationController`.
