# Introducing Stateful Widgets

## Overview

This lecture introduces `StatefulWidget`, which is used for building interactive and dynamic Flutter user interfaces.

In the previous lecture, we tried to change a variable inside a `StatelessWidget`, but the UI did not update. The function executed, and the variable changed, but Flutter did not rebuild the widget.

The solution is to use a `StatefulWidget`.

A `StatefulWidget` allows a widget to manage changing data, called **state**, and update the UI when that state changes.

---

## 1. Why `StatelessWidget` Was Not Enough

A `StatelessWidget` is good when a widget:

* Receives input values
* Builds UI based on those values
* Does not change internally

Example:

```dart id="lt67b0"
class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

This is a good use of `StatelessWidget`.

The widget receives text and displays it.

However, for the dice app, we need something different.

---

## 2. The Dice App Needs Changing Internal Data

In the dice app, the displayed image depends on a variable.

Example:

```dart id="vhiu variable.

uh"
var activeDiceImage = 'assets/images/dice-2.png';
```

When the button is pressed, this variable should change.

Example:

```dart id="66dwkd"
activeDiceImage = 'assets/images/dice-4.png';
```

When this data changes, the UI should also change.

That means the widget has **state**.

---

## 3. What Is State?

State is data that can change over time and affects what is shown on the screen.

In the dice app, this is state:

```dart id="pk4hac"
activeDiceImage
```

because it controls which dice image is displayed.

When `activeDiceImage` changes, the UI should update.

---

## 4. What Is a `StatefulWidget`?

A `StatefulWidget` is a widget that can manage state.

It is used when:

* Data changes over time
* User interaction changes the UI
* The widget must rebuild after internal data changes

Examples:

```text id="vr482r"
Dice roller
Counter
Checkbox
Text input
Dropdown
Animated UI
```

In this app, the dice image changes when the user presses the button.

Therefore, the dice roller should be a `StatefulWidget`.

---

## 5. Do Not Make Everything Stateful

The entire `GradientContainer` does not need to be stateful.

Most of it is stable:

* The gradient background
* The layout container
* The alignment values

Only the dice image and button need changing behavior.

Therefore, a better structure is:

```text id="w5r41a"
GradientContainer  → StatelessWidget
DiceRoller         → StatefulWidget
```

This keeps the code organized.

---

## 6. Create a New File

Create a new file:

```text id="9jg7uk"
lib/dice_roller.dart
```

This file will contain the new `DiceRoller` widget.

---

## 7. Import Flutter Material

Inside `dice_roller.dart`, add:

```dart id="hyobkb"
import 'package:flutter/material.dart';
```

This is required because we use Flutter widgets such as:

```text id="o7uegd"
StatefulWidget
State
Widget
BuildContext
Column
Image
TextButton
SizedBox
```

---

## 8. Stateful Widgets Use Two Classes

A `StatefulWidget` is split into two classes:

1. The widget class
2. The state class

Example:

```dart id="p9afjf"
class DiceRoller extends StatefulWidget {
  
}

class _DiceRollerState extends State<DiceRoller> {
  
}
```

This two-class structure is required by Flutter.

---

## 9. The Widget Class

The first class extends `StatefulWidget`.

```dart id="hpwex9"
class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}
```

This class is mostly immutable.

It connects the widget to its state class using `createState()`.

---

## 10. The `createState()` Method

A `StatefulWidget` does not define the `build()` method directly.

Instead, it defines:

```dart id="0d14zk"
createState()
```

Example:

```dart id="4gof4a"
@override
State<DiceRoller> createState() {
  return _DiceRollerState();
}
```

This method creates and returns the state object for this widget.

---

## 11. `State<DiceRoller>`

The return type is:

```dart id="o79f9j"
State<DiceRoller>
```

`State` is a generic type.

The value inside the angle brackets tells Dart which widget this state belongs to.

```dart id="pbkg8d"
State<DiceRoller>
```

means:

```text id="xxo6zn"
This State object belongs to the DiceRoller widget.
```

---

## 12. The State Class

The second class contains the changing data and the `build()` method.

```dart id="16xp1l"
class _DiceRollerState extends State<DiceRoller> {
  
}
```

This class extends:

```dart id="9f5g0o"
State<DiceRoller>
```

The state class is where we store state variables and define logic that changes state.

---

## 13. Why the Leading Underscore?

The state class is usually named with a leading underscore.

Example:

```dart id="lcqbn4"
_DiceRollerState
```

In Dart, a leading underscore makes a class, variable, or method private to its file.

This means `_DiceRollerState` can only be used inside `dice_roller.dart`.

This is intentional because other files should use `DiceRoller`, not its internal state class.

---

## 14. Stateful Widget Naming Convention

Common convention:

```text id="e9mz5g"
Widget class: DiceRoller
State class:  _DiceRollerState
```

Pattern:

```text id="ludjkx"
_WidgetNameState
```

Example:

```dart id="4cz7zz"
class Counter extends StatefulWidget {}

class _CounterState extends State<Counter> {}
```

---

## 15. The `build()` Method Goes in the State Class

For a `StatefulWidget`, the `build()` method belongs inside the `State` class.

Example:

```dart id="bnla1u"
class _DiceRollerState extends State<DiceRoller> {
  @override
  Widget build(BuildContext context) {
    return const Text('Dice Roller');
  }
}
```

This is different from `StatelessWidget`, where the `build()` method is inside the widget class itself.

---

## 16. Moving the Dice UI into `DiceRoller`

The dice image and button should move into the stateful widget.

```dart id="exvy9t"
class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-2.png';

  void rollDice() {
    activeDiceImage = 'assets/images/dice-4.png';
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          activeDiceImage,
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(
              fontSize: 28,
            ),
          ),
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

This moves the changing data into the state class.

However, this still does not update the UI yet.

---

## 17. Why This Still Does Not Work Yet

Even inside a `StatefulWidget`, changing a variable is not enough.

Example:

```dart id="vysgan"
activeDiceImage = 'assets/images/dice-4.png';
```

This changes the variable.

But Flutter still needs to be told that the UI should rebuild.

That is the job of `setState()`.

---

## 18. What Is `setState()`?

`setState()` is a method provided by Flutter's `State` class.

It tells Flutter:

```text id="p4f0pb"
Some state changed. Please run build() again.
```

Example:

```dart id="tgj1z7"
setState(() {
  activeDiceImage = 'assets/images/dice-4.png';
});
```

The function passed to `setState()` contains the state update.

---

## 19. Why `setState()` Is Needed

The `build()` method creates the UI based on current state values.

Example:

```dart id="ho2od5"
Image.asset(activeDiceImage)
```

When `activeDiceImage` changes, Flutter must run `build()` again to use the new value.

`setState()` triggers that rebuild.

Without `setState()`, the old UI remains on the screen.

---

## 20. Correct `rollDice()` Function

```dart id="7d0taz"
void rollDice() {
  setState(() {
    activeDiceImage = 'assets/images/dice-4.png';
  });
}
```

This does two things:

1. Changes the state variable.
2. Tells Flutter to rebuild the widget.

Now the displayed image updates.

---

## 21. Complete `dice_roller.dart`

```dart id="ximq8m"
import 'package:flutter/material.dart';

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-2.png';

  void rollDice() {
    setState(() {
      activeDiceImage = 'assets/images/dice-4.png';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          activeDiceImage,
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(
              fontSize: 28,
            ),
          ),
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

This is the correct basic stateful version.

---

## 22. Using `DiceRoller` in `GradientContainer`

In `gradient_container.dart`, use the new `DiceRoller` widget.

```dart id="n47yk1"
import 'package:flutter/material.dart';

import 'dice_roller.dart';

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
        child: DiceRoller(),
      ),
    );
  }
}
```

Now the gradient container stays stateless.

Only the dice roller is stateful.

---

## 23. Important: Import What You Use

Since `GradientContainer` uses `DiceRoller`, it must import the file.

Example:

```dart id="s24gub"
import 'dice_roller.dart';
```

or with a package import:

```dart id="bu7bza"
import 'package:your_project_name/dice_roller.dart';
```

Dart does not automatically connect files.

You must import the file that contains the class you want to use.

---

## 24. Why the Widget Class Can Still Be `const`

The `DiceRoller` widget class can have a `const` constructor:

```dart id="fa3utj"
const DiceRoller({super.key});
```

This might seem strange because the widget is stateful.

But the mutable data is not stored in the widget class.

It is stored in the separate state class:

```dart id="fluf4z"
class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-2.png';
}
```

The widget object itself can remain immutable.

The state object is mutable.

---

## 25. The Two-Class Separation

A `StatefulWidget` separates immutable configuration from mutable state.

```text id="868ibs"
DiceRoller widget class
→ immutable configuration

_DiceRollerState class
→ mutable state and build method
```

This separation is central to how Flutter manages stateful widgets.

---

## 26. How the Rebuild Works

When the app first starts:

1. Flutter creates the widget tree.
2. `DiceRoller` is created.
3. `_DiceRollerState` is created.
4. `build()` runs.
5. Flutter displays the initial dice image.

Initial state:

```dart id="7ddhqs"
activeDiceImage = 'assets/images/dice-2.png';
```

When the button is pressed:

1. `rollDice()` runs.
2. `setState()` is called.
3. `activeDiceImage` changes.
4. Flutter runs `build()` again.
5. Flutter sees a different image path.
6. Flutter updates the image on the screen.

---

## 27. `setState()` Uses an Anonymous Function

The syntax is:

```dart id="ed85l1"
setState(() {
  // update state here
});
```

The function passed to `setState()` contains the changes that affect the UI.

Example:

```dart id="0gl0j9"
setState(() {
  activeDiceImage = 'assets/images/dice-4.png';
});
```

This tells Flutter that the UI may need to change after this update.

---

## 28. Only Put UI-Relevant State Updates in `setState()`

You should put changes inside `setState()` when those changes affect the UI.

Example:

```dart id="jszsch"
setState(() {
  activeDiceImage = 'assets/images/dice-4.png';
});
```

This affects the image shown on screen, so it belongs in `setState()`.

If a variable does not affect the UI, it does not necessarily need to be inside `setState()`.

---

## 29. Optional Improvement: Random Dice Roll

Later, the dice image can be changed randomly.

For that, import `dart:math`.

```dart id="pt2iyw"
import 'dart:math';
```

Then use `Random()`.

```dart id="keu2av"
final randomNumber = Random().nextInt(6) + 1;
```

`nextInt(6)` generates a number from `0` to `5`.

Adding `1` gives a number from `1` to `6`.

---

## 30. Random Dice Version

```dart id="ydlptf"
import 'dart:math';
import 'package:flutter/material.dart';

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-1.png';

  void rollDice() {
    setState(() {
      final roll = Random().nextInt(6) + 1;
      activeDiceImage = 'assets/images/dice-$roll.png';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          activeDiceImage,
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(
              fontSize: 28,
            ),
          ),
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

This version changes the dice image randomly.

---

## 31. Common Mistake: Forgetting `setState()`

Incorrect:

```dart id="sh55st"
void rollDice() {
  activeDiceImage = 'assets/images/dice-4.png';
}
```

The value changes, but the UI does not rebuild.

Correct:

```dart id="3cuj85"
void rollDice() {
  setState(() {
    activeDiceImage = 'assets/images/dice-4.png';
  });
}
```

Now Flutter rebuilds the widget and updates the UI.

---

## 32. Common Mistake: Putting State in the Widget Class

Incorrect:

```dart id="jvc9wo"
class DiceRoller extends StatefulWidget {
  var activeDiceImage = 'assets/images/dice-2.png';

  DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}
```

State should not be stored in the `StatefulWidget` class.

Correct:

```dart id="24zam3"
class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-2.png';
}
```

The mutable state belongs in the `State` class.

---

## Key Points

* Use `StatefulWidget` when a widget has data that changes over time and affects the UI.
* State is data that can change and should influence what is rendered.
* A `StatefulWidget` uses two classes: the widget class and the state class.
* The widget class extends `StatefulWidget`.
* The state class extends `State<WidgetName>`.
* The widget class implements `createState()`.
* The state class contains the mutable state and the `build()` method.
* The state class usually starts with `_` to make it private.
* Changing a variable alone does not update the UI.
* Call `setState()` to notify Flutter that the UI should rebuild.
* Put UI-relevant state changes inside `setState()`.
* Keep stable UI parts as `StatelessWidget` where possible.

---

## Summary

A `StatefulWidget` is used when a widget needs to manage changing data that affects the UI.

The dice roller needs to change the displayed dice image after the button is pressed, so it should be stateful.

A stateful widget is split into two classes:

```dart id="1ujszl"
class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}
```

and:

```dart id="5hjdvd"
class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImage = 'assets/images/dice-2.png';

  void rollDice() {
    setState(() {
      activeDiceImage = 'assets/images/dice-4.png';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Image.asset(activeDiceImage);
  }
}
```

The key idea is:

```text id="e31mu5"
Changing a variable is not enough.
You must call setState() to rebuild the UI.
```

This is the foundation of interactive Flutter apps.
