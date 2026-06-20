# Finetuning Explicit Animations

## Overview
This lecture covers how to refine explicit animations using `CurvedAnimation` to add easing, controlling animation direction with `forward` and `reverse`, and looping animations with `repeat`. It also addresses how to respond to animation status changes using `addStatusListener`. These techniques turn a basic animation into a polished, production-ready interaction.

## Key Points
- `CurvedAnimation` wraps a controller to apply an easing curve (e.g., `Curves.easeInOut`, `Curves.bounceOut`)
- `_controller.reverse()` plays the animation backwards, useful for toggle-style animations
- `_controller.repeat(reverse: true)` creates a seamless back-and-forth looping animation
- `addStatusListener` lets you react when an animation completes, dismisses, or starts
- Combining `Tween`, `CurvedAnimation`, and `AnimatedBuilder` gives full fine-grained control

## Code Example
```dart
@override
void initState() {
  super.initState();
  _controller = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 800),
  );

  final curvedAnimation = CurvedAnimation(
    parent: _controller,
    curve: Curves.easeInOut,
  );

  _sizeAnimation = Tween<double>(begin: 50, end: 200).animate(curvedAnimation);

  // Listen to animation status
  _controller.addStatusListener((status) {
    if (status == AnimationStatus.completed) {
      _controller.reverse();
    } else if (status == AnimationStatus.dismissed) {
      _controller.forward();
    }
  });

  _controller.forward(); // Start animation
}
```

## Notes
`CurvedAnimation` does not change the animation's value range — it changes how quickly values are reached across the timeline, which creates the feeling of acceleration and deceleration. Using `addStatusListener` for auto-reversing is a common pattern for breathing or pulse effects. Remember to remove status listeners or dispose the controller to avoid callbacks firing after widget disposal.

## Summary
Fine-tuning explicit animations with `CurvedAnimation`, status listeners, and repeat/reverse controls transforms a mechanical linear animation into a natural, responsive UI interaction.
