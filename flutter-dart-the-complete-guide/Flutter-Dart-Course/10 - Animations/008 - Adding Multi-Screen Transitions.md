# Adding Multi-Screen Transitions

## Overview
This lecture covers how to animate transitions between screens (routes) in Flutter using custom `PageRouteBuilder` and the built-in `Hero` widget. It demonstrates replacing the default platform transition with a custom one and explains how `Hero` animations automatically animate a shared widget as it flies between two routes. These techniques are essential for creating seamless navigation experiences.

## Key Points
- `PageRouteBuilder` lets you define a fully custom screen transition using an `Animation<double>`
- The `transitionsBuilder` callback provides the animation value used to drive the transition effect
- Wrapping widgets on two different screens with `Hero` and matching `tag` values creates a shared-element transition
- Common transition effects include `FadeTransition`, `SlideTransition`, and `ScaleTransition`
- `Hero` animations work automatically with `Navigator.push` — no extra configuration is needed beyond matching tags

## Code Example
```dart
// Custom slide transition using PageRouteBuilder
Navigator.of(context).push(
  PageRouteBuilder(
    transitionDuration: const Duration(milliseconds: 400),
    pageBuilder: (context, animation, secondaryAnimation) =>
        const DetailScreen(),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      final slideTween = Tween<Offset>(
        begin: const Offset(1.0, 0.0),
        end: Offset.zero,
      ).animate(CurvedAnimation(parent: animation, curve: Curves.easeInOut));
      return SlideTransition(position: slideTween, child: child);
    },
  ),
);

// Hero animation — source screen
Hero(
  tag: 'product-image-1',
  child: Image.asset('assets/product.png', width: 80),
)

// Hero animation — destination screen
Hero(
  tag: 'product-image-1',
  child: Image.asset('assets/product.png', width: 300),
)
```

## Notes
The `Hero` widget is one of the most visually impressive animations in Flutter with very little code — the tag must be unique across the widget tree at any given moment to avoid conflicts. `PageRouteBuilder` gives complete control over the entry and exit animations for a screen, but it requires manually managing the transition for both the entering and leaving route if needed. For more complex shared-element scenarios, the `animations` package from pub.dev offers pre-built transitions like `OpenContainer`.

## Summary
Multi-screen transitions using `PageRouteBuilder` for custom route animations and `Hero` for shared-element transitions create fluid, professional navigation experiences that connect screens visually for the user.
