# Setup and Understanding Explicit vs Implicit Animations

## Overview
This lecture covers the project setup needed for the animations module and introduces the conceptual difference between explicit and implicit animations. Explicit animations give you full manual control via an AnimationController, while implicit animations handle the animation logic internally. Understanding this distinction is critical before writing any animation code.

## Key Points
- Implicit animations are simpler: you change a value and Flutter animates the transition automatically
- Explicit animations require an AnimationController and give you precise control over playback
- Use implicit animations for straightforward UI transitions (e.g., size, color, position changes)
- Use explicit animations when you need to loop, reverse, or control timing programmatically
- The project starter code is set up during this lecture to be used throughout the module

## Tips
- A good rule of thumb: start with implicit animations and only reach for explicit when you need more control
- Explicit animations require the widget's State class to mix in `SingleTickerProviderStateMixin`
- Implicit animation widgets in Flutter are typically prefixed with `Animated` (e.g., `AnimatedContainer`)

## Notes
This lecture is foundational for the rest of the module because it defines the vocabulary used in every subsequent lecture. Grasping the explicit vs implicit distinction early will make the upcoming code examples much easier to follow. The project scaffold introduced here is reused and extended in later lectures.

## Summary
Explicit animations offer manual playback control via AnimationController, while implicit animations automatically interpolate between values — choosing the right approach depends on how much control your UI logic requires.
