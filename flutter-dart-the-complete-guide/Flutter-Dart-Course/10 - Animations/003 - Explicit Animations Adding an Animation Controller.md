# Explicit Animations Adding an Animation Controller

## Overview
This lecture demonstrates how to add an `AnimationController` to a StatefulWidget to drive explicit animations. It covers how to initialize the controller in `initState`, dispose it properly in `dispose`, and define the animation's duration. The `SingleTickerProviderStateMixin` is introduced as the required mixin that provides the vsync tick source.

## Key Points
- `AnimationController` is the core object for managing explicit animations
- The State class must use `with SingleTickerProviderStateMixin` to supply a vsync
- Always call `_controller.dispose()` in the `dispose()` method to prevent memory leaks
- The `duration` property on the controller defines how long one animation cycle takes
- You can call `_controller.forward()`, `_controller.reverse()`, and `_controller.repeat()` to control playback

## Code Example
```dart
import 'package:flutter/material.dart';

class MyAnimatedWidget extends StatefulWidget {
  const MyAnimatedWidget({super.key});

  @override
  State<MyAnimatedWidget> createState() => _MyAnimatedWidgetState();
}

class _MyAnimatedWidgetState extends State<MyAnimatedWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 500),
    );
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
      child: const FlutterLogo(size: 100),
    );
  }
}
```

## Notes
The `vsync` parameter ties the animation to the screen refresh rate, preventing unnecessary renders when the widget is off-screen. Without proper disposal, the AnimationController continues ticking even after the widget is removed from the tree, causing memory leaks and potential errors. The controller's value ranges from 0.0 to 1.0 by default.

## Summary
An `AnimationController` combined with `SingleTickerProviderStateMixin` is the foundation of every explicit animation in Flutter, giving you direct control over timing, playback direction, and lifecycle.
