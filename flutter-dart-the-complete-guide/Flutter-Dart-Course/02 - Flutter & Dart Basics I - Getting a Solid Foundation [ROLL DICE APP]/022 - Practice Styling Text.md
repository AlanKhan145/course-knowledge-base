# Practice: Styling Text

## Overview

This lecture is a practical exercise focused on styling text in Flutter.

The goal is to apply what we have learned about widget configuration objects by styling a `Text` widget. Specifically, we want to change the text color and font size.

This is a useful practice because styling text is one of the most common tasks in Flutter UI development.

---

## 1. Starting Point

We currently have a simple Flutter UI with text displayed on a gradient background.

Example:

```dart id="cbrzxt"
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 26, 2, 80),
                Color.fromARGB(255, 45, 7, 98),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: const Center(
            child: Text('Hello World!'),
          ),
        ),
      ),
    ),
  );
}
```

The background looks better now, but the text is still plain.

We want to make the text:

* White
* Larger
* Easier to see on the dark background

---

## 2. Practice Challenge

Try to style the text on your own.

Goal:

```text id="fng4q1"
Make the text white and increase its font size.
```

Hint:

```text id="o1jxgj"
You do not need to wrap the Text widget with another widget.
```

Instead, you need to configure the `Text` widget by adding more arguments.

---

## 3. Styling Text Without Wrapping It

To style a `Text` widget, you do not need to wrap it with another widget.

Instead, use the `style` argument.

Example:

```dart id="56vaha"
Text(
  'Hello World!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 28,
  ),
)
```

The `style` argument receives a `TextStyle` object.

The `TextStyle` object controls how the text looks.

---

## 4. The `style` Argument

The `Text` widget has an argument called `style`.

Example:

```dart id="ggrhog"
Text(
  'Hello World!',
  style: TextStyle(...),
)
```

The `style` argument expects a `TextStyle` object.

This object can configure many text properties, such as:

* Text color
* Font size
* Font weight
* Letter spacing
* Font family
* Shadows
* Background color

---

## 5. Creating a `TextStyle` Object

A `TextStyle` object is created by calling the `TextStyle` constructor.

Example:

```dart id="60vfl7"
TextStyle(
  color: Colors.white,
  fontSize: 28,
)
```

Here:

```dart id="df0ymv"
color: Colors.white
```

sets the text color to white.

```dart id="q3r4b1"
fontSize: 28
```

sets the font size to `28`.

---

## 6. Setting Text Color

The `color` argument inside `TextStyle` controls the text color.

Example:

```dart id="4bz0d7"
TextStyle(
  color: Colors.white,
)
```

`Colors.white` is a predefined Flutter color.

You can also use other colors:

```dart id="bd9dza"
Colors.black
Colors.red
Colors.blue
Colors.deepPurple
Colors.white70
```

For a dark gradient background, white text is a good choice.

---

## 7. Setting Font Size

The `fontSize` argument controls the size of the text.

Example:

```dart id="g5pm78"
TextStyle(
  fontSize: 28,
)
```

The `fontSize` value is a `double`.

That means it can be a number with a decimal point.

Example:

```dart id="u9jx99"
fontSize: 28.0
fontSize: 28.5
```

In Dart, you can also write:

```dart id="picql3"
fontSize: 28
```

Dart accepts this because the value can be treated as a double where needed.

---

## 8. Solution

```dart id="6ax6ye"
const Text(
  'Hello World!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 28,
  ),
)
```

This makes the text white and larger.

---

## 9. Full Updated Example

```dart id="uaor3x"
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 26, 2, 80),
                Color.fromARGB(255, 45, 7, 98),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: const Center(
            child: Text(
              'Hello World!',
              style: TextStyle(
                color: Colors.white,
                fontSize: 28,
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
```

Now the text appears larger and white on top of the gradient background.

---

## 10. Using IDE Autocomplete

When you want to style or configure a widget, a good first step is to check which arguments are available.

In VS Code, place the cursor inside the widget constructor and press:

```text id="s6eg0i"
Ctrl + Space
```

This opens the suggestion menu.

For the `Text` widget, you may see arguments such as:

```dart id="53l0wq"
style
textAlign
maxLines
overflow
softWrap
```

The `style` argument is the one used for visual styling.

---

## 11. More `TextStyle` Properties

`TextStyle` supports many useful styling options.

### Font Weight

```dart id="fmuhv8"
TextStyle(
  fontWeight: FontWeight.bold,
)
```

Other examples:

```dart id="5f3tfb"
FontWeight.normal
FontWeight.w300
FontWeight.w600
FontWeight.bold
```

---

### Letter Spacing

```dart id="5ecy5n"
TextStyle(
  letterSpacing: 1.5,
)
```

This changes the spacing between letters.

---

### Font Family

```dart id="2kkfnn"
TextStyle(
  fontFamily: 'Roboto',
)
```

This changes the font family if the font is available in the project.

---

### Shadows

```dart id="q9nly0"
TextStyle(
  shadows: [
    Shadow(
      blurRadius: 4,
      offset: Offset(2, 2),
    ),
  ],
)
```

This adds a shadow behind the text.

---

## 12. Text Widget Layout Properties

The `Text` widget itself also has layout-related arguments.

Example:

```dart id="n3vi98"
Text(
  'Hello Flutter',
  textAlign: TextAlign.center,
  maxLines: 1,
  overflow: TextOverflow.ellipsis,
)
```

These properties control how the text is laid out.

---

## 13. `textAlign`

The `textAlign` argument controls text alignment.

Example:

```dart id="hs9vel"
Text(
  'Hello Flutter',
  textAlign: TextAlign.center,
)
```

Common values:

```dart id="e7cnfa"
TextAlign.left
TextAlign.center
TextAlign.right
TextAlign.justify
```

---

## 14. `maxLines`

The `maxLines` argument controls how many lines the text may use.

Example:

```dart id="liv41i"
Text(
  'This is a very long text',
  maxLines: 1,
)
```

This limits the text to one line.

---

## 15. `overflow`

The `overflow` argument controls what happens when the text is too long.

Example:

```dart id="j5p0va"
Text(
  'This is a very long text',
  maxLines: 1,
  overflow: TextOverflow.ellipsis,
)
```

This shows `...` when the text is too long.

Common values:

```dart id="mnvnzc"
TextOverflow.clip
TextOverflow.fade
TextOverflow.ellipsis
TextOverflow.visible
```

---

## 16. Practice Example: Styled Heading and Subtitle

```dart id="2x5wm7"
import 'package:flutter/material.dart';

class StyledTextPractice extends StatelessWidget {
  const StyledTextPractice({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          'Roll the Dice',
          style: TextStyle(
            fontSize: 36,
            fontWeight: FontWeight.bold,
            color: Colors.white,
            letterSpacing: 1.5,
          ),
        ),
        SizedBox(height: 12),
        Text(
          'Tap the button below to roll',
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w300,
            color: Colors.white70,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
```

This example includes:

* A large heading
* A smaller subtitle
* Different font weights
* Different colors
* Letter spacing
* Vertical spacing between text widgets

---

## 17. Understanding `Colors.white70`

Flutter provides color variants such as:

```dart id="saoe2w"
Colors.white
Colors.white70
Colors.white54
Colors.white38
```

The number suffix refers to opacity.

For example:

```dart id="e9fpfd"
Colors.white70
```

means white with about 70% opacity.

This is useful for secondary text, subtitles, hints, and descriptions.

---

## 18. Using Custom Fonts

Flutter also supports custom fonts.

There are two common ways to use custom fonts:

### Option 1: Add Fonts Manually

You can add font files to your project and register them in:

```text id="7y3a09"
pubspec.yaml
```

### Option 2: Use Google Fonts

You can use the `google_fonts` package to access many fonts easily.

Example:

```dart id="ftb3br"
Text(
  'Hello Flutter',
  style: GoogleFonts.poppins(
    fontSize: 28,
    color: Colors.white,
  ),
)
```

This requires adding the `google_fonts` package to the project.

---

## Key Points

* Text is styled using the `style` argument.
* The `style` argument expects a `TextStyle` object.
* `TextStyle` is a non-widget configuration object.
* `color` controls the text color.
* `fontSize` controls the text size.
* `fontWeight` controls the thickness of the text.
* `letterSpacing` controls spacing between letters.
* `Text` also has layout arguments like `textAlign`, `maxLines`, and `overflow`.
* You do not need to wrap a `Text` widget just to style it.
* IDE autocomplete helps you discover available arguments.
* Text styling is a very common task in Flutter development.

---

## Summary

Styling text in Flutter is done by passing a `TextStyle` object to the `style` argument of the `Text` widget.

For this practice, we changed the text color to white and increased the font size to `28`.

This reinforces an important Flutter pattern:

```dart id="qf9jd9"
widgetArgument: ConfigurationObject(...)
```

For text styling, that pattern looks like this:

```dart id="wpmg3q"
style: TextStyle(...)
```

Understanding this pattern makes it easier to configure widgets and build more polished Flutter UIs.
