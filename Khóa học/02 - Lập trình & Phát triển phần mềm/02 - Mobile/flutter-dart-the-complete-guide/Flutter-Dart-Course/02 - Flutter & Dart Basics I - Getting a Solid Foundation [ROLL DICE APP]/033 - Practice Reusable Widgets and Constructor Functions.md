# Practice: Reusable Widgets and Constructor Functions

## Overview

This practice lecture focuses on creating reusable custom widgets by passing configuration data through constructor functions.

In the previous lecture, we made `StyledText` reusable by allowing it to receive text from outside. In this lecture, we apply the same idea to `GradientContainer`.

Currently, the gradient colors are hard-coded inside `GradientContainer`. The goal is to make the colors configurable so that the same widget can be reused with different color combinations.

This practice combines several important Dart and Flutter concepts:

* Custom widgets
* Constructor functions
* Instance variables
* `final` properties
* Positional parameters
* Named parameters
* Required named parameters
* Reusable widget design

---

## 1. The Problem

The current `GradientContainer` has hard-coded colors.

Example:

```dart id="w8w97f"
class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
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
        child: StyledText('Hello World!'),
      ),
    );
  }
}
```

This works, but the colors are locked inside the widget.

Every time we use `GradientContainer`, it will always use the same two colors.

---

## 2. Practice Goal

We want to make `GradientContainer` reusable by passing colors into it.

Instead of this:

```dart id="71jul7"
const GradientContainer()
```

we want to do something like this:

```dart id="a1jmcs"
const GradientContainer(
  colors: [
    Color.fromARGB(255, 26, 2, 80),
    Color.fromARGB(255, 45, 7, 98),
  ],
)
```

or:

```dart id="57jsez"
const GradientContainer(
  Color.fromARGB(255, 26, 2, 80),
  Color.fromARGB(255, 45, 7, 98),
)
```

Both approaches are possible.

---

## 3. Why Make the Colors Configurable?

In a larger app, you might want to reuse the same gradient container on multiple screens.

Example:

```text id="nfl3yv"
Home screen      → purple gradient
Profile screen   → blue gradient
Settings screen  → dark gray gradient
Game screen      → red/orange gradient
```

If the colors are hard-coded, the widget is not flexible.

If the colors are passed in through the constructor, the widget becomes reusable.

---

## 4. Solution 1: Accept a List of Colors

One way to solve this is to accept a list of colors.

The `LinearGradient.colors` parameter expects:

```dart id="c19s96"
List<Color>
```

Therefore, our custom widget can also accept a `List<Color>`.

---

## 5. `GradientContainer` with Named `colors` Parameter

```dart id="2qu7su"
import 'package:flutter/material.dart';

import 'styled_text.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer({
    super.key,
    required this.colors,
  });

  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: colors,
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: const Center(
        child: StyledText('Hello World!'),
      ),
    );
  }
}
```

Now `GradientContainer` receives its colors from outside.

---

## 6. Why Use `required`?

Named parameters in Dart are optional by default.

Example:

```dart id="spxqf8"
const GradientContainer({
  super.key,
  this.colors,
});
```

This would mean `colors` is optional.

But our widget needs colors to build the gradient correctly.

Therefore, we write:

```dart id="n7mvn5"
required this.colors
```

This means the user must provide a value for `colors`.

Usage:

```dart id="902ec1"
GradientContainer(
  colors: [
    Colors.deepPurple,
    Colors.purple,
  ],
)
```

If `colors` is missing, Dart shows an error.

---

## 7. Using the Widget with a Color List

```dart id="layts0"
import 'package:flutter/material.dart';

import 'gradient_container.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(
          colors: [
            Color.fromARGB(255, 26, 2, 80),
            Color.fromARGB(255, 45, 7, 98),
          ],
        ),
      ),
    ),
  );
}
```

The colors are now passed into `GradientContainer`.

This makes the widget reusable.

---

## 8. Why Remove `const` from `BoxDecoration`?

Inside `GradientContainer`, the gradient colors now come from an instance variable:

```dart id="0wagyl"
final List<Color> colors;
```

Then we use it here:

```dart id="hx9ez4"
colors: colors,
```

Because `colors` is a property of the widget object, `BoxDecoration` can no longer be marked as `const`.

So this is correct:

```dart id="ndbt5n"
decoration: BoxDecoration(
  gradient: LinearGradient(
    colors: colors,
    begin: startAlignment,
    end: endAlignment,
  ),
)
```

This is not correct:

```dart id="865a6m"
decoration: const BoxDecoration(
  gradient: LinearGradient(
    colors: colors,
  ),
)
```

A `const` object cannot depend on a runtime instance variable.

---

## 9. Important Note About `final List`

Even though `colors` is marked as `final`, the list itself can still be mutable.

Example:

```dart id="vpad8a"
final colors = [
  Colors.purple,
  Colors.blue,
];

colors.add(Colors.red); // allowed
```

The `final` keyword prevents reassignment of the variable itself.

It does not always make the object inside immutable.

That is another reason why `colors` cannot automatically be treated as a constant value inside `build()`.

---

## 10. Solution 2: Accept Two Individual Colors

Another way to solve the exercise is to accept two individual colors instead of a list.

Example:

```dart id="3bo3dl"
const GradientContainer(
  Color.fromARGB(255, 26, 2, 80),
  Color.fromARGB(255, 45, 7, 98),
)
```

This approach is useful if the widget should always use exactly two colors.

---

## 11. `GradientContainer` with Two Positional Color Arguments

```dart id="qx54md"
import 'package:flutter/material.dart';

import 'styled_text.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer(
    this.color1,
    this.color2, {
    super.key,
  });

  final Color color1;
  final Color color2;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            color1,
            color2,
          ],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: const Center(
        child: StyledText('Hello World!'),
      ),
    );
  }
}
```

Here, the widget accepts exactly two colors.

---

## 12. Using the Two-Color Version

```dart id="a6b5z3"
import 'package:flutter/material.dart';

import 'gradient_container.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(
          Color.fromARGB(255, 26, 2, 80),
          Color.fromARGB(255, 45, 7, 98),
        ),
      ),
    ),
  );
}
```

This creates a reusable gradient container with two configurable colors.

---

## 13. Named Parameters vs Positional Parameters

Both approaches are valid.

### Named Parameter Version

```dart id="vgbzys"
const GradientContainer(
  colors: [
    Colors.deepPurple,
    Colors.purple,
  ],
)
```

Advantages:

* More readable
* Good when the widget has multiple options
* Can use `required`
* Clear parameter names

---

### Positional Parameter Version

```dart id="9k4akg"
const GradientContainer(
  Colors.deepPurple,
  Colors.purple,
)
```

Advantages:

* Shorter
* Simple for one or two obvious values
* Positional arguments are required by default

---

## 14. Which Solution Is Better?

It depends on your design.

Use a `List<Color>` if the gradient should support any number of colors.

```dart id="pjlo17"
final List<Color> colors;
```

Use two `Color` properties if the widget should always use exactly two colors.

```dart id="w5funl"
final Color color1;
final Color color2;
```

For this simple app, both are acceptable.

---

## 15. Why Use `final` for Properties?

The color values are passed into the widget when the widget is created.

After that, the widget should not change them internally.

So the properties should be marked as `final`.

Example:

```dart id="rm964x"
final Color color1;
final Color color2;
```

or:

```dart id="v9y548"
final List<Color> colors;
```

This matches the immutable nature of `StatelessWidget`.

---

## 16. The Reusable Widget Pattern

This is the general pattern:

```dart id="h5awvc"
class MyWidget extends StatelessWidget {
  const MyWidget({
    super.key,
    required this.value,
  });

  final SomeType value;

  @override
  Widget build(BuildContext context) {
    return SomeOtherWidget(
      property: value,
    );
  }
}
```

The process is:

1. Accept a value in the constructor.
2. Store it in a `final` instance variable.
3. Use it inside `build()`.

---

## 17. Extra Practice: Reusable `StyledCard`

A more advanced reusable widget could accept multiple configuration values.

```dart id="xyv5wx"
import 'package:flutter/material.dart';

class StyledCard extends StatelessWidget {
  const StyledCard({
    super.key,
    required this.title,
    this.subtitle,
    this.backgroundColor = Colors.deepPurple,
    this.icon = Icons.star,
  });

  final String title;
  final String? subtitle;
  final Color backgroundColor;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return Card(
      color: backgroundColor,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Icon(
              icon,
              color: Colors.white,
              size: 32,
            ),
            const SizedBox(width: 12),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                if (subtitle != null)
                  Text(
                    subtitle!,
                    style: const TextStyle(
                      color: Colors.white70,
                    ),
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

This widget uses:

* A required named parameter: `title`
* An optional nullable parameter: `subtitle`
* Optional parameters with default values: `backgroundColor` and `icon`
* `final` instance variables
* Constructor-based configuration

---

## 18. Using `StyledCard`

```dart id="o1u6a3"
Column(
  children: const [
    StyledCard(
      title: 'Dice Game',
      subtitle: 'Roll to win',
      backgroundColor: Colors.deepPurple,
      icon: Icons.casino,
    ),
    StyledCard(
      title: 'Settings',
      icon: Icons.settings,
    ),
  ],
)
```

The same widget can be reused with different configurations.

---

## 19. Common Mistake: Forgetting `required`

If you use a named parameter without `required`, Dart treats it as optional.

Incorrect:

```dart id="ersdf3"
const GradientContainer({
  super.key,
  this.colors,
});
```

This creates a problem because `colors` could be missing.

Correct:

```dart id="9lcfbe"
const GradientContainer({
  super.key,
  required this.colors,
});
```

Now the user must pass `colors`.

---

## 20. Common Mistake: Forgetting `final`

Less ideal:

```dart id="zm4fuc"
List<Color> colors;
```

Better:

```dart id="26cc63"
final List<Color> colors;
```

Widget configuration data should usually be `final`.

---

## 21. Common Mistake: Keeping `const` in the Wrong Place

Incorrect:

```dart id="g7bs0i"
decoration: const BoxDecoration(
  gradient: LinearGradient(
    colors: colors,
  ),
)
```

This is invalid because `colors` is an instance variable.

Correct:

```dart id="1m995i"
decoration: BoxDecoration(
  gradient: LinearGradient(
    colors: colors,
  ),
)
```

You can still keep `const` for values that are truly constant.

Example:

```dart id="rgtdpd"
child: const Center(
  child: StyledText('Hello World!'),
)
```

---

## Key Points

* Reusable widgets accept configuration data from outside.
* Constructor functions receive that configuration data.
* Instance variables store the received values.
* Instance variables should usually be marked as `final`.
* Named parameters are optional by default.
* Use `required` for named parameters that must be provided.
* Positional parameters are required by default.
* A widget can accept a `List<Color>` or individual `Color` values.
* Remove `const` when an object depends on runtime instance variables.
* This pattern is used constantly in Flutter.

---

## Summary

This practice made `GradientContainer` reusable by allowing it to receive colors from outside.

One solution uses a named `List<Color>` parameter:

```dart id="lqm9y3"
const GradientContainer({
  super.key,
  required this.colors,
});

final List<Color> colors;
```

Another solution uses two positional `Color` parameters:

```dart id="uww4g0"
const GradientContainer(
  this.color1,
  this.color2, {
  super.key,
});

final Color color1;
final Color color2;
```

Both solutions follow the same reusable widget pattern:

1. Accept values through the constructor.
2. Store them in `final` instance variables.
3. Use those values inside `build()`.

This is a core Flutter pattern for building flexible and reusable components.
