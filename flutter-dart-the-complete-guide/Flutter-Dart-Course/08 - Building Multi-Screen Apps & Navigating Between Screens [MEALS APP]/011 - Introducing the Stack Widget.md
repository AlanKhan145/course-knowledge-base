# Introducing the Stack Widget

## Overview
This lecture introduces the `Stack` widget, which allows you to layer multiple widgets on top of each other. In the Meals App, `Stack` is used inside `MealItem` to overlay text and gradient elements on top of a meal image. This creates the card-like appearance where the meal title appears over its image.

## Key Points
- `Stack` positions its children on top of one another, with the last child on top
- `Positioned` widget is used inside `Stack` to place children at specific offsets
- `Align` can also be used to position children within a `Stack`
- A common pattern is to stack a gradient container over an image for a text overlay effect
- `Stack` is different from `Column`/`Row` — it overlaps widgets rather than arranging them linearly

## Code Example
```dart
Stack(
  children: [
    // Background image
    Image.network(
      meal.imageUrl,
      height: 200,
      width: double.infinity,
      fit: BoxFit.cover,
    ),
    // Gradient overlay
    Positioned(
      bottom: 0,
      left: 0,
      right: 0,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 44),
        color: Colors.black54,
        child: Text(
          meal.title,
          maxLines: 2,
          textAlign: TextAlign.center,
          softWrap: true,
          overflow: TextOverflow.ellipsis,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
    ),
  ],
)
```

## Notes
`Stack` is extremely useful for building card UIs where text or icons need to float over images. The `Positioned` widget gives precise control over where each child sits within the stack. Be mindful of the stacking order: children listed later in the `children` array appear on top.

## Summary
The `Stack` widget layers multiple widgets on top of each other, enabling the meal card's text overlay effect on top of the meal image.
