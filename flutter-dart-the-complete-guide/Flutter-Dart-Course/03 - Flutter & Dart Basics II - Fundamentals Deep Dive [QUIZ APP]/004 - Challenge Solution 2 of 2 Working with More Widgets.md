# Challenge Solution 2 of 2: Working with More Widgets

## Overview

This lecture completes the challenge solution by improving the Quiz App’s start screen. After creating the basic `StartScreen` widget in the previous lecture, this part focuses on adding more widgets and styling the UI.

The final start screen includes a gradient background, an image, a text label, spacing between elements, and a styled button that will later be used to start the quiz.

## Key Points

* A `Container` can be used to apply visual decoration, such as a gradient background.
* `BoxDecoration` allows you to configure the appearance of a `Container`.
* `LinearGradient` creates a smooth color transition between two or more colors.
* `Center` helps center content both horizontally and vertically.
* `Column` arranges multiple widgets vertically.
* `Image.asset` is used to display local image assets.
* Assets must be registered in `pubspec.yaml` before they can be used.
* `SizedBox` is commonly used to add spacing between widgets.
* `TextStyle` allows customization of text color, size, and appearance.
* `OutlinedButton` creates a button with a visible border.
* `OutlinedButton.styleFrom()` provides a convenient way to style the button.
* The `const` keyword should be used where possible for performance optimization.

## Step 1: Add a Gradient Background

To add a gradient background, wrap the `StartScreen` widget with a `Container`.

The `Container` widget allows you to add a `decoration` property. Inside that decoration, you can use `BoxDecoration` and `LinearGradient`.

```dart
Container(
  decoration: const BoxDecoration(
    gradient: LinearGradient(
      colors: [
        Color.fromARGB(255, 78, 13, 151),
        Color.fromARGB(255, 107, 15, 168),
      ],
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
    ),
  ),
  child: const StartScreen(),
)
```

The gradient starts from the top-left corner and flows to the bottom-right corner.

## Step 2: Keep the Background Outside `StartScreen`

The gradient background is added outside the `StartScreen` widget instead of inside it.

This is useful because the same background can later be shared across multiple screens in the app.

```dart
Scaffold(
  body: Container(
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        colors: [
          Color.fromARGB(255, 78, 13, 151),
          Color.fromARGB(255, 107, 15, 168),
        ],
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      ),
    ),
    child: const StartScreen(),
  ),
)
```

## Step 3: Center the Start Screen Content

The first version of the screen only displayed text, and the gradient did not fill the entire screen properly.

To fix this, wrap the content inside a `Center` widget.

```dart
return const Center(
  child: Text('Start Screen'),
);
```

The `Center` widget tries to take up all available space and centers its child inside that space. This helps the surrounding `Container` apply the gradient across the full screen.

## Step 4: Use a `Column` for Vertical Layout

The start screen needs three main elements:

1. An image
2. A text label
3. A button

Since these widgets should appear vertically, use a `Column`.

```dart
Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    // Image
    // Text
    // Button
  ],
)
```

The `mainAxisSize: MainAxisSize.min` setting makes the `Column` take only as much vertical space as needed, instead of filling the entire screen.

For a `Column`, the main axis is vertical.

## Step 5: Register the Image Asset

Before using a local image in Flutter, it must be registered in `pubspec.yaml`.

Example:

```yaml
flutter:
  assets:
    - assets/images/quiz-logo.png
```

The image file used in this project is:

```text
assets/images/quiz-logo.png
```

After registering the asset, Flutter can load and display it in the app.

## Step 6: Display the Image

Use `Image.asset()` to display a local image.

```dart
Image.asset(
  'assets/images/quiz-logo.png',
  width: 300,
)
```

The `width` argument is used to resize the image so it does not appear too large on the screen.

## Step 7: Add Text Below the Image

Below the image, add a `Text` widget.

```dart
const Text(
  'Learn Flutter the fun way!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 24,
  ),
)
```

The `style` argument is used to customize the text.

In this case:

* `color` makes the text easier to see on the purple background.
* `fontSize` increases the size of the text.

## Step 8: Add Spacing with `SizedBox`

To create space between widgets, use `SizedBox`.

```dart
const SizedBox(height: 80),
```

This creates vertical spacing between the image and the text.

Another `SizedBox` can be used between the text and the button.

```dart
const SizedBox(height: 30),
```

`SizedBox` is useful when you want a widget to take up a specific amount of space.

## Step 9: Add an Outlined Button

The expected design uses a button with a visible border. For this, use `OutlinedButton`.

```dart
OutlinedButton(
  onPressed: () {},
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  child: const Text('Start Quiz'),
)
```

The `onPressed` argument receives a function that is executed when the button is tapped.

For now, an empty anonymous function is used:

```dart
() {}
```

This means the button is clickable, but it does not do anything yet.

## Improved Button with Icon

A more polished version can use `OutlinedButton.icon()` to display both an icon and text.

```dart
OutlinedButton.icon(
  onPressed: startQuiz,
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  icon: const Icon(Icons.arrow_right_alt),
  label: const Text('Start Quiz'),
)
```

This constructor is useful when a button should contain both a label and an icon.

## Code Example

```dart
import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  const StartScreen(this.startQuiz, {super.key});

  final void Function() startQuiz;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 300,
          ),
          const SizedBox(height: 80),
          const Text(
            'Learn Flutter the fun way!',
            style: TextStyle(
              color: Colors.white,
              fontSize: 24,
            ),
          ),
          const SizedBox(height: 30),
          OutlinedButton.icon(
            onPressed: startQuiz,
            style: OutlinedButton.styleFrom(
              foregroundColor: Colors.white,
            ),
            icon: const Icon(Icons.arrow_right_alt),
            label: const Text('Start Quiz'),
          ),
        ],
      ),
    );
  }
}
```

## Example `main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:advanced_basics/start_screen.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 78, 13, 151),
                Color.fromARGB(255, 107, 15, 168),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: StartScreen(() {}),
        ),
      ),
    ),
  );
}
```

> Replace `advanced_basics` with your actual Flutter project name.

## Notes

The `Container` is used outside the `StartScreen` widget because the same background styling may be shared by multiple screens later in the app.

The `Column` widget is used to stack the image, text, and button vertically. `SizedBox` adds clear spacing between these elements, making the UI cleaner and easier to read.

The button is currently connected to a function, but the actual quiz-starting logic will be implemented later.

## Summary

This lecture completes the Quiz App start screen by combining multiple Flutter widgets into a polished UI. The screen now includes a full-screen gradient background, a centered logo image, styled text, spacing, and an outlined button.

This solution reviews several important Flutter fundamentals, including widget nesting, layout composition, asset usage, styling, and button creation.
