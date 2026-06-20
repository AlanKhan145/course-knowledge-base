# Module Summary

## Overview

This lecture summarizes the key concepts covered in Module 2 of the Flutter & Dart course.

In this module, we built a complete **Roll Dice app** from scratch. The app displays a dice image, provides a button, generates a random number between `1` and `6`, and updates the dice image when the button is pressed.

While the app itself is simple, it introduced many core Dart and Flutter concepts that are essential for building almost every Flutter app.

---

## 1. What We Built

By the end of this module, we built a Roll Dice app that can:

* Display a gradient background
* Show a dice image
* Display a button
* React to button presses
* Generate a random dice roll
* Update the UI dynamically
* Use custom widgets
* Split code across multiple Dart files

The app demonstrates the complete basic Flutter development workflow.

---

## 2. Starting Point: `main.dart`

Every Flutter app starts in the `main.dart` file.

This file is located inside the `lib` folder:

```text id="dppjxl"
lib/
└── main.dart
```

When a Flutter app starts, Dart looks for the `main()` function.

Example:

```dart id="y3fim6"
void main() {
  runApp(...);
}
```

The `main()` function is the entry point of the app.

---

## 3. Dart Code and Compilation

During development, we write Dart code.

However, this Dart code is not shipped directly to users in the same form.

For release builds, Dart compiles the code into native machine code for platforms such as:

* Android
* iOS
* Desktop
* Web

The compiled code is what actually runs on the user's device.

As developers, we still work with Dart and Flutter code because Flutter turns that code into the final application.

---

## 4. The `runApp()` Function

Inside `main()`, we call Flutter's `runApp()` function.

Example:

```dart id="i742r2"
void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Text('Hello Flutter'),
      ),
    ),
  );
}
```

`runApp()` tells Flutter what user interface should be displayed on the screen.

It receives a widget tree as an argument.

---

## 5. Flutter Is All About Widgets

Flutter apps are built by combining widgets.

Examples of built-in widgets:

```text id="u2pcbf"
MaterialApp
Scaffold
Center
Container
Column
Row
Text
Image
TextButton
ElevatedButton
OutlinedButton
SizedBox
Padding
```

Widgets describe what should appear on the screen.

Instead of using a visual drag-and-drop editor, Flutter UIs are built with code.

---

## 6. Widget Trees

Widgets are nested inside other widgets to create a widget tree.

Example:

```text id="filn9o"
MaterialApp
└── Scaffold
    └── GradientContainer
        └── Center
            └── DiceRoller
                ├── Image
                ├── SizedBox
                └── TextButton
```

This tree describes the structure of the UI.

Flutter reads this widget tree and renders the corresponding interface on the screen.

---

## 7. Functions

Functions are custom commands.

You can define your own functions:

```dart id="h6qjgl"
void rollDice() {
  print('Dice rolled!');
}
```

You can also use functions provided by Dart and Flutter.

Example:

```dart id="d23p5n"
runApp(...)
```

Functions can:

* Execute code
* Receive arguments
* Return values
* Be passed as values to other functions or widgets

---

## 8. Functions as Values

In Dart, functions are values.

This means a function can be passed to another function or widget.

Example:

```dart id="t6d4l2"
TextButton(
  onPressed: rollDice,
  child: const Text('Roll Dice'),
)
```

Here, `rollDice` is passed as a callback function.

Important distinction:

```dart id="o41hzl"
onPressed: rollDice
```

passes the function.

```dart id="7hs2ct"
onPressed: rollDice()
```

calls the function immediately.

For button callbacks, we pass the function without parentheses.

---

## 9. Dart Is Object-Oriented

Dart is an object-oriented language.

This means values are objects.

Examples:

```dart id="7jdrev"
'Hello World'
42
true
MaterialApp()
Text('Hello')
Color.fromARGB(255, 26, 2, 80)
```

Objects are data structures stored in memory.

They can contain:

* Data
* Properties
* Methods
* Logic

---

## 10. Classes and Objects

Classes are blueprints for creating objects.

Example:

```dart id="f3wv4u"
class Dice {
  Dice();
}
```

An object is created from a class by calling its constructor:

```dart id="5diqtp"
var dice = Dice();
```

Flutter widgets are also classes.

Example:

```dart id="96fcwi"
Text('Hello')
Container()
MaterialApp()
```

These are objects created from widget classes.

---

## 11. Custom Widgets

In this module, we learned how to create custom widgets.

Example:

```dart id="8onhv3"
class GradientContainer extends StatelessWidget {
  const GradientContainer(this.color1, this.color2, {super.key});

  final Color color1;
  final Color color2;

  @override
  Widget build(BuildContext context) {
    return Container(...);
  }
}
```

Custom widgets help us:

* Organize code
* Reduce large widget trees
* Reuse UI parts
* Improve readability
* Build apps from smaller components

---

## 12. Splitting Code Across Files

As the app grew, we split code into separate files.

Example structure:

```text id="o9yld8"
lib/
├── main.dart
├── gradient_container.dart
├── dice_roller.dart
└── styled_text.dart
```

Each file has a clear responsibility.

```text id="qn91wv"
main.dart                → app entry point
gradient_container.dart  → gradient background widget
dice_roller.dart         → dice image and button logic
styled_text.dart         → reusable styled text widget
```

When using a class from another file, we must import it.

Example:

```dart id="2vi93q"
import 'dice_roller.dart';
```

---

## 13. Constructor Functions

Constructors are special functions that run when objects are created.

Example:

```dart id="y54t40"
const GradientContainer(
  Colors.deepPurple,
  Colors.indigo,
)
```

Constructor functions can receive values.

Those values can be stored in instance variables.

Example:

```dart id="kvggh2"
class GradientContainer extends StatelessWidget {
  const GradientContainer(this.color1, this.color2, {super.key});

  final Color color1;
  final Color color2;
}
```

This allows widgets to be configurable and reusable.

---

## 14. Positional and Named Arguments

Dart supports both positional and named arguments.

### Positional arguments

```dart id="19fm58"
GradientContainer(
  Colors.deepPurple,
  Colors.indigo,
)
```

Order matters.

### Named arguments

```dart id="f3nh3l"
StyledCard(
  title: 'Dice Game',
  backgroundColor: Colors.deepPurple,
)
```

Names make the code easier to read.

Flutter uses named arguments heavily.

---

## 15. Types

Dart is type-safe.

Every value has a type.

Examples:

```text id="amjpwf"
'Hello'       → String
42            → int
3.14          → double
true          → bool
MaterialApp() → MaterialApp, Widget, Object
```

Types help prevent mistakes.

For example, a width expects a number:

```dart id="9zcq4n"
width: 200
```

This would be wrong:

```dart id="n4tm6o"
width: 'large'
```

Dart's type system helps catch such errors early.

---

## 16. Variables

Variables are named data containers.

Example:

```dart id="i8r92z"
var currentDiceRoll = 2;
```

Variables can store values that may change over time.

In the Roll Dice app, `currentDiceRoll` stores the currently displayed dice value.

Example:

```dart id="ztnyqk"
Image.asset(
  'assets/images/dice-$currentDiceRoll.png',
)
```

---

## 17. `final` and `const`

This module introduced `final` and `const`.

### `final`

A `final` variable can only be assigned once.

```dart id="9mii41"
final randomizer = Random();
```

Use `final` for values that are determined at runtime but should not change afterward.

### `const`

A `const` value is a compile-time constant.

```dart id="wqa79i"
const startAlignment = Alignment.topLeft;
```

Use `const` for values that are known before the app runs.

---

## 18. `const` for Optimization

Flutter encourages using `const` wherever possible.

Example:

```dart id="031zus"
const SizedBox(height: 20)
```

Using `const` can help Dart and Flutter optimize performance by reusing constant objects.

The code editor often shows suggestions when `const` can be added.

---

## 19. Stateless Widgets

A `StatelessWidget` is used for widgets that do not manage changing internal data.

Example:

```dart id="9i0jtz"
class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

Use `StatelessWidget` when the widget:

* Receives data from outside
* Displays UI based on that data
* Does not change itself internally

---

## 20. Stateful Widgets

A `StatefulWidget` is used when a widget has internal data that can change and should update the UI.

Example:

```dart id="zsds3x"
class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}
```

A stateful widget has two classes:

```text id="h1ppp8"
DiceRoller        → widget class
_DiceRollerState  → state class
```

The mutable data goes into the state class.

---

## 21. State

State is data that can change over time and affects the UI.

In the Roll Dice app:

```dart id="1uym13"
var currentDiceRoll = 2;
```

is state because changing it should update the displayed dice image.

---

## 22. `setState()`

Changing a variable alone does not update the UI.

Flutter must be notified that state has changed.

That is done with `setState()`.

Example:

```dart id="o96v8b"
void rollDice() {
  setState(() {
    currentDiceRoll = randomizer.nextInt(6) + 1;
  });
}
```

`setState()` tells Flutter to run `build()` again.

After `build()` runs again, Flutter updates the parts of the UI that changed.

---

## 23. The `build()` Method

The `build()` method describes what UI should be created.

Example:

```dart id="0njvy3"
@override
Widget build(BuildContext context) {
  return Column(
    children: [
      Image.asset('assets/images/dice-$currentDiceRoll.png'),
      TextButton(
        onPressed: rollDice,
        child: const Text('Roll Dice'),
      ),
    ],
  );
}
```

When state changes and `setState()` is called, Flutter re-executes `build()`.

This allows the UI to reflect the new state.

---

## 24. Random Number Generation

To generate random numbers, we imported `dart:math`.

```dart id="xwgpyn"
import 'dart:math';
```

Then we created a randomizer:

```dart id="t2ve6i"
final randomizer = Random();
```

To generate a dice roll:

```dart id="rq8n63"
randomizer.nextInt(6) + 1
```

This produces a number from `1` to `6`.

---

## 25. Dynamic Image Paths

The dice image path was built dynamically with string interpolation.

Example:

```dart id="y3uwyz"
'assets/images/dice-$currentDiceRoll.png'
```

If `currentDiceRoll` is `4`, the path becomes:

```text id="npu4p5"
assets/images/dice-4.png
```

This allows one line of code to load any dice image from `1` to `6`.

---

## 26. Assets and Images

We learned how to add images to a Flutter project.

Typical folder structure:

```text id="vhyk0k"
assets/
└── images/
    ├── dice-1.png
    ├── dice-2.png
    ├── dice-3.png
    ├── dice-4.png
    ├── dice-5.png
    └── dice-6.png
```

Assets must be registered in `pubspec.yaml`.

Example:

```yaml id="gzy5od"
flutter:
  assets:
    - assets/images/
```

Then images can be displayed with:

```dart id="mqorsp"
Image.asset('assets/images/dice-1.png')
```

---

## 27. Layout Widgets

This module introduced important layout widgets.

### `Center`

Centers a child widget.

```dart id="8x7575"
Center(
  child: Text('Hello'),
)
```

### `Column`

Displays widgets vertically.

```dart id="eqe3w6"
Column(
  children: [
    Text('A'),
    Text('B'),
  ],
)
```

### `Row`

Displays widgets horizontally.

```dart id="ftcq4y"
Row(
  children: [
    Text('A'),
    Text('B'),
  ],
)
```

### `SizedBox`

Adds fixed space.

```dart id="qi3u7t"
const SizedBox(height: 20)
```

### `Padding`

Adds spacing around a widget.

```dart id="gaxifa"
Padding(
  padding: const EdgeInsets.all(16),
  child: Text('Hello'),
)
```

---

## 28. Buttons

Flutter provides multiple button widgets.

Examples:

```text id="tijvbg"
TextButton
ElevatedButton
OutlinedButton
```

Buttons use `onPressed` to define what should happen when they are clicked.

Example:

```dart id="buzg63"
TextButton(
  onPressed: rollDice,
  child: const Text('Roll Dice'),
)
```

---

## 29. Button Styling

Buttons can be styled with `styleFrom()`.

Example:

```dart id="lkk2p9"
TextButton(
  onPressed: rollDice,
  style: TextButton.styleFrom(
    foregroundColor: Colors.white,
    textStyle: const TextStyle(
      fontSize: 28,
    ),
  ),
  child: const Text('Roll Dice'),
)
```

We also learned how to add spacing with `SizedBox` and padding with `EdgeInsets`.

---

## 30. Generics and Lists

Dart supports lists and generic types.

Example:

```dart id="wh05br"
List<Color> colors;
```

This means:

```text id="f1ey24"
A list that contains Color objects.
```

Flutter uses lists frequently.

Example:

```dart id="l4n4mw"
Column(
  children: [
    Text('A'),
    Text('B'),
  ],
)
```

Here, `children` expects a `List<Widget>`.

---

## 31. Configuration Objects

Many Flutter widgets are configured with objects.

Examples:

```dart id="scsudc"
TextStyle(
  color: Colors.white,
  fontSize: 28,
)
```

```dart id="fgpnm3"
BoxDecoration(
  gradient: LinearGradient(...),
)
```

```dart id="u4cau7"
EdgeInsets.all(16)
```

These configuration objects make widgets customizable.

---

## 32. Named Constructors

Dart classes can have multiple constructors.

Example:

```dart id="v13nl6"
Image.asset(...)
Image.network(...)
Image.file(...)
Image.memory(...)
```

These are named constructors.

They provide different ways to create an `Image` widget.

We also saw that custom classes can define named constructors too.

Example:

```dart id="ye2uc6"
GradientContainer.purple()
```

---

## 33. Complete Concept Flow

The Roll Dice app combines many ideas:

```text id="9r776p"
main.dart
→ main()
→ runApp()
→ MaterialApp
→ Scaffold
→ GradientContainer
→ DiceRoller
→ StatefulWidget
→ currentDiceRoll state
→ TextButton callback
→ rollDice()
→ setState()
→ random number
→ dynamic image path
→ updated UI
```

This flow is the foundation of interactive Flutter apps.

---

## 34. Why This Module Matters

This module is important because it introduced the fundamental Flutter mental model:

```text id="gkdho0"
UI = widgets built from current data
```

When data changes, Flutter must rebuild the affected widgets.

That is why state and `setState()` are so important.

---

## 35. Suggested Practice

Before moving on, try rebuilding the Roll Dice app from scratch without looking at the course code.

You can also extend it by adding:

* A roll counter
* A score system
* A roll history list
* Two dice instead of one
* A reset button
* Sound effects
* Different button styles
* Multiple players

These small extensions help reinforce the concepts.

---

## Key Points

* Flutter apps start in `main.dart`.
* The `main()` function is the entry point.
* `runApp()` tells Flutter what UI to display.
* Flutter UIs are built by combining widgets.
* Widgets are objects created from classes.
* Dart is object-oriented and type-safe.
* Variables store data.
* `final` prevents reassignment.
* `const` creates compile-time constants.
* Custom widgets help organize and reuse UI code.
* Constructor functions allow widgets to receive configuration data.
* `StatelessWidget` is for widgets without changing internal state.
* `StatefulWidget` is for widgets with changing state.
* `setState()` tells Flutter to rebuild the UI.
* Button callbacks allow user interaction.
* `Random().nextInt(6) + 1` generates dice values from `1` to `6`.
* String interpolation builds dynamic image paths.
* Assets must be registered in `pubspec.yaml`.
* Layout widgets such as `Column`, `Row`, `Center`, `SizedBox`, and `Padding` are essential for UI structure.

---

## Summary

Module 2 built a complete Roll Dice app while introducing the foundations of Dart and Flutter.

The app started from an empty `main.dart` file and grew into a structured Flutter application with custom widgets, image assets, button interaction, state management, and random number generation.

The most important conceptual leap was moving from `StatelessWidget` to `StatefulWidget`.

A `StatelessWidget` is useful for static or externally configured UI, while a `StatefulWidget` is required when internal data changes and the UI must update.

The Roll Dice app demonstrates this clearly:

```dart id="1a89rh"
setState(() {
  currentDiceRoll = randomizer.nextInt(6) + 1;
});
```

This state update causes Flutter to rebuild the UI and display a new dice image.

The patterns learned in this module — widgets, classes, constructors, variables, callbacks, state, and `setState()` — will appear in almost every Flutter app you build.
