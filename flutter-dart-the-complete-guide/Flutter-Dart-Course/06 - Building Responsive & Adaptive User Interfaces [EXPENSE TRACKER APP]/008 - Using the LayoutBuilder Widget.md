# Using the LayoutBuilder Widget

## Overview
This lecture covers the `LayoutBuilder` widget, which provides the constraints available to a widget from its parent rather than the full screen size. Unlike `MediaQuery` which gives you the full device screen dimensions, `LayoutBuilder` is more precise because it reflects the actual space the widget has to work with. This makes it ideal for building responsive components that can be reused in different contexts.

## Key Points
- `LayoutBuilder` exposes a `BoxConstraints` object inside its builder function
- Use `constraints.maxWidth` and `constraints.maxHeight` to make layout decisions
- Preferred over `MediaQuery` for widget-level responsiveness, since it works on available space, not total screen size
- Works well for reusable widgets that may be embedded in various layout contexts (e.g., inside a `Row` or a `Column`)
- The builder callback is called whenever the parent constraints change

## Code Example
```dart
class ResponsiveExpenseChart extends StatelessWidget {
  const ResponsiveExpenseChart({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        // Use constraints.maxWidth to decide layout
        final isWide = constraints.maxWidth > 300;

        return isWide
            ? Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  const Icon(Icons.bar_chart, size: 40),
                  const Text('Wide Chart Layout'),
                ],
              )
            : Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.bar_chart, size: 40),
                  const Text('Narrow Chart Layout'),
                ],
              );
      },
    );
  }
}
```

## Notes
`LayoutBuilder` is particularly powerful when building reusable widget components that need to respond to their local context rather than global screen dimensions. For example, a chart widget used both in a side panel and a full-width view can use `LayoutBuilder` to adapt without needing to know where it is placed. Combining `LayoutBuilder` with `MediaQuery` gives you the most flexible responsive design strategy.

## Summary
`LayoutBuilder` gives widgets access to their parent's constraints, enabling fine-grained, context-aware responsive layouts that work correctly regardless of where the widget is placed in the tree.
