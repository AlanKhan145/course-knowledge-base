# Combining Multiple Widgets

## Overview

This lecture introduces how Flutter user interfaces are built by combining multiple widgets together.

In Flutter, every UI element is a widget. A complete app UI is created by nesting widgets inside other widgets. For example, a `Text` widget can be placed inside a `MaterialApp`, and that `MaterialApp` can then be passed to `runApp()`.

This is the basic idea behind Flutter UI development: small widgets are combined to create more complex layouts.

---

## 1. The `Text` Widget

The `Text` widget is used to display human-readable text on the screen.

Example:

```dart
Text('Hello World!')
```

The text value must be placed inside single or double quotes.

```dart
Text('Hello World!')
Text("Hello World!")
```

Single quotes are more commonly used in Dart.

---

## 2. Why Text Must Be Wrapped in Quotes

Text such as `Hello World!` must be wrapped in quotes because Dart needs to know that it is human-readable text, not code.

This is correct:

```dart
Text('Hello World!')
```

This is incorrect:

```dart
Text(Hello World!)
```

Without quotes, Dart tries to interpret `Hello` and `World` as identifiers, variables, functions, or keywords.

However, `Hello` and `World` are not defined anywhere in the file or in the imported Flutter package. Therefore, Dart will show an error.

Whenever you want to write text that should be read by humans instead of executed as code, you must wrap it in quotes.

---

## 3. Positional and Named Arguments in `Text`

The `Text` widget uses both positional and named arguments.

Example:

```dart
Text(
  'Hello World!',
  style: TextStyle(
    fontSize: 24,
  ),
)
```

In this example:

```dart
'Hello World!'
```

is a positional argument.

It is required because the `Text` widget needs to know what text it should display.

This part:

```dart
style: TextStyle(
  fontSize: 24,
)
```

is a named argument.

It is optional and is used to configure the appearance of the text.

---

## 4. Required Positional Argument in `Text`

The `Text` widget expects one required positional argument: the string that should be displayed.

This is valid:

```dart
Text('Hello World!')
```

This is invalid:

```dart
Text()
```

If no text is provided, Dart shows an error because one positional argument is expected, but zero arguments are found.

---

## 5. Combining `Text`, `MaterialApp`, and `runApp`

A basic Flutter app can be created by combining three important pieces:

```dart
runApp(
  MaterialApp(
    home: Text('Hello World!'),
  ),
);
```

Here is what happens:

```dart
Text('Hello World!')
```

creates a text widget.

```dart
MaterialApp(
  home: Text('Hello World!'),
)
```

creates the main app structure and displays the `Text` widget as the home screen.

```dart
runApp(...)
```

starts the Flutter app and displays the widget tree on the screen.

---

## 6. Basic Widget Nesting

Flutter widgets are commonly nested inside each other.

Example:

```dart
runApp(
  MaterialApp(
    home: Text('Hello World!'),
  ),
);
```

This creates a simple widget tree:

```text
runApp
└── MaterialApp
    └── Text
```

This is the first basic combination of widgets.

Even though the app is simple and not visually beautiful yet, it is still a valid Flutter user interface.

---

## 7. Full Basic Example

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Text('Hello World!'),
    ),
  );
}
```

This app displays the text:

```text
Hello World!
```

on the emulator or physical device.

---

## 8. Running the App

To see the app on the screen, you need to run it on an emulator or a physical device.

In Visual Studio Code, you can run the app by:

* Opening an emulator
* Going to **Run > Run Without Debugging**
* Or clicking the run button provided by the editor

After running the app, the `Hello World!` text will appear on the virtual device.

The app will look very simple, but it is the first step toward building real Flutter UIs.

---

## 9. Combining More Widgets

A real Flutter app usually contains more than one widget.

Instead of only showing text, you may want to combine images, buttons, text, spacing, and layout widgets.

Example:

```dart
Column(
  children: [
    Image.asset('assets/images/dice-2.png'),
    Text('Roll Dice'),
    ElevatedButton(
      onPressed: null,
      child: Text('Roll'),
    ),
  ],
)
```

This combines:

* An image
* A text label
* A button

inside a `Column`.

---

## 10. The `Column` Widget

The `Column` widget arranges its child widgets vertically, from top to bottom.

Example:

```dart
Column(
  children: [
    Text('First'),
    Text('Second'),
    Text('Third'),
  ],
)
```

This displays the widgets vertically:

```text
First
Second
Third
```

The `children` argument accepts a list of widgets.

---

## 11. The `Row` Widget

The `Row` widget arranges its child widgets horizontally, from left to right.

Example:

```dart
Row(
  children: [
    Text('One'),
    Text('Two'),
    Text('Three'),
  ],
)
```

This displays the widgets horizontally:

```text
One  Two  Three
```

Like `Column`, the `Row` widget also uses a `children` argument.

---

## 12. The `children` Argument

Both `Column` and `Row` use the `children` named argument.

The `children` argument expects a list of widgets.

Example:

```dart
Column(
  children: [
    Text('Hello'),
    Text('Flutter'),
  ],
)
```

The square brackets `[]` create a list.

Inside the list, you can place multiple widgets.

```dart
children: [
  Text('Hello'),
  Text('Flutter'),
]
```

This means the `Column` has two child widgets.

---

## 13. Adding Space Between Widgets

To add space between widgets, you can use `SizedBox`.

Example:

```dart
SizedBox(height: 20)
```

This creates vertical space.

Example inside a `Column`:

```dart
Column(
  children: [
    Text('Hello'),
    SizedBox(height: 20),
    Text('Flutter'),
  ],
)
```

The `SizedBox` adds space between the two text widgets.

---

## 14. Full Example: Combining Multiple Widgets

```dart
import 'package:flutter/material.dart';

class DiceRollerLayout extends StatelessWidget {
  const DiceRollerLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/images/dice-2.png',
              width: 200,
            ),
            const SizedBox(height: 20),
            const Text(
              'Roll Dice',
              style: TextStyle(fontSize: 28),
            ),
            ElevatedButton(
              onPressed: null,
              child: const Text('Roll'),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## 15. Example Explanation

```dart
Scaffold(...)
```

provides the basic visual structure of the screen.

```dart
Center(...)
```

places its child widget in the center of the screen.

```dart
Column(...)
```

arranges multiple child widgets vertically.

```dart
Image.asset(...)
```

displays an image from the project assets.

```dart
SizedBox(height: 20)
```

adds space between widgets.

```dart
Text('Roll Dice')
```

displays text.

```dart
ElevatedButton(...)
```

creates a button.

---

## 16. Widget Tree Example

The full layout can be visualized like this:

```text
Scaffold
└── Center
    └── Column
        ├── Image
        ├── SizedBox
        ├── Text
        └── ElevatedButton
            └── Text
```

This shows how Flutter builds UIs by nesting widgets inside other widgets.

---

## Key Points

* Flutter UIs are built by combining widgets.
* The `Text` widget displays human-readable text.
* Text values must be wrapped in quotes.
* `Text` requires one positional argument: the text to display.
* Widgets can use both positional and named arguments.
* `MaterialApp` defines the main app structure.
* The `home` argument defines what appears on the screen.
* `Column` arranges widgets vertically.
* `Row` arranges widgets horizontally.
* `children` accepts a list of widgets.
* Complex UIs are created by nesting simple widgets together.

---

## Summary

Flutter apps are built by combining many small widgets into a larger widget tree.

A simple app may start with only `runApp`, `MaterialApp`, and `Text`. This already creates a basic user interface on the screen.

As apps become more complex, layout widgets such as `Column`, `Row`, `Center`, and `Scaffold` are used to arrange multiple widgets. By nesting widgets together, Flutter developers can build complete and flexible user interfaces.
