# Three Trees Widget Tree Element Tree and Render Tree

## Overview
Flutter internally maintains three separate trees to manage the UI: the Widget Tree, the Element Tree, and the Render Tree. Each tree serves a distinct role in the rendering pipeline, and understanding how they interact explains Flutter's performance model. Widgets are immutable blueprints, elements are long-lived references, and render objects handle actual painting.

## Key Points
- The **Widget Tree** is a lightweight, immutable description of the UI that is rebuilt frequently
- The **Element Tree** persists across rebuilds and links widgets to their render objects
- The **Render Tree** is responsible for layout, painting, and compositing on the screen
- Flutter diffs the widget tree against the element tree to determine what actually needs to change
- Only render objects that correspond to changed elements are repainted, making Flutter efficient

## Code Example
```dart
// A simple widget tree — Flutter creates a corresponding Element and RenderObject for each
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Hello'),   // TextWidget -> Element -> RenderParagraph
        Icon(Icons.star), // IconWidget -> Element -> RenderObject
      ],
    );
  }
}
// Even when MyWidget.build() is called again, Flutter reuses existing Elements
// if the widget type and key match — avoiding unnecessary RenderObject recreation
```

## Notes
The element tree acts as a bridge and a cache between the ephemeral widget tree and the expensive render tree. When `setState()` is called, Flutter rebuilds the widget subtree but reconciles it against the existing element tree to minimize render tree updates. This reconciliation is why Flutter can rebuild widget trees quickly without performance penalties.

## Summary
Flutter's three-tree architecture separates UI description (widgets), identity tracking (elements), and actual rendering (render objects) to achieve high performance and minimal repaints.
