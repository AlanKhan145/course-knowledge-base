# How NOT to Build Interactive Widgets

## Overview

This lecture demonstrates an incorrect way to build interactive widgets in Flutter.

The goal is to make the dice image change when the user presses the **Roll Dice** button. A beginner might try to solve this by changing a variable inside a `StatelessWidget`.

However, this does not update the UI.

This lecture is important because it explains why `StatelessWidget` is not enough for interactive UI and prepares us for the next concept: `StatefulWidget`.

---

## 1. The Goal

We currently have:

* A dice image
* A button
* A `rollDice()` function connected to the button

Example:

```dart id="3w0zhu"
TextButton(
  onPressed: rollDice,
  child: const Text('Roll Dice'),
)
```

Now we want the image to change when the button is pressed.

For example:

```text id="7c92te"
Before click: dice-2.png
After click:  dice-4.png
```

---

## 2. First Attempt: Use a Variable

A natural first idea is to store the active dice image path in a variable.

Example:

```dart id="g8zyox"
var activeDiceImage = 'assets/images/dice-2.png';
```

Then use that variable inside `Image.asset()`.

```dart id="jxsmx1"
Image.asset(
  activeDiceImage,
  width: 200,
)
```

Now, when the button is pressed, we can change the variable:

```dart id="vi83cn"
void rollDice() {
  activeDiceImage = 'assets/images/dice-4.png';
}
```

This seems logical.

But it does not work.

---

## 3. Wrong Example: Mutating a Variable in `StatelessWidget`

```dart id="7cwa4m"
import 'package:flutter/material.dart';

class DiceRoller extends StatelessWidget {
  DiceRoller({super.key});

  var activeDiceImage = 'assets/images/dice-2.png';

  void rollDice() {
    activeDiceImage = 'assets/images/dice-4.png';
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
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
      ),
    );
  }
}
```

This code changes the variable in memory, but the visible image does not change.

---

## 4. Why `const` Must Be Removed

Because this widget now contains a mutable variable:

```dart id="05q857"
var activeDiceImage = 'assets/images/dice-2.png';
```

the widget can no longer be created as a constant object.

So this constructor cannot be `const`:

```dart id="2yf2xy"
DiceRoller({super.key});
```

And when using the widget, we may also need to remove `const` from the parent widget tree.

For example, this may no longer work:

```dart id="pvyb48"
const DiceRoller()
```

Instead, use:

```dart id="2wb84r"
DiceRoller()
```

However, removing `const` still does not fix the UI update problem.

---

## 5. Testing Whether the Function Runs

If the image does not change, you might think the button is not working.

To test this, add a `print()` statement.

```dart id="997tto"
void rollDice() {
  activeDiceImage = 'assets/images/dice-4.png';
  print('Changing image...');
}
```

When the button is pressed, the message appears in the debug console.

This proves that the function is executing.

---

## 6. What Is `print()`?

`print()` is a built-in Dart function that writes output to the debug console.

Example:

```dart id="gbhge6"
print('Changing image...');
```

This is useful for debugging.

It helps you check whether certain code is running.

---

## 7. The Function Runs, But the UI Does Not Change

After pressing the button, the debug console may show:

```text id="8jgkx1"
Changing image...
```

So the button works.

The function runs.

The variable changes.

But the image on the screen stays the same.

This is the important problem.

---

## 8. Why the UI Does Not Update

Flutter does not automatically rebuild the UI just because a variable changes.

The `build()` method creates the UI based on the current data.

However, after changing a variable, Flutter must be told to run `build()` again.

In a `StatelessWidget`, there is no mechanism for telling Flutter:

```text id="y2ud9l"
Something changed. Please rebuild this widget.
```

That is why the UI does not update.

---

## 9. `StatelessWidget` Is Not for Changing Internal Data

A `StatelessWidget` is designed for widgets that do not manage changing internal state.

It can receive data from outside through constructor parameters.

But it should not store mutable data that changes because of user interaction.

This is not the intended use of `StatelessWidget`:

```dart id="44mg3x"
var activeDiceImage = 'assets/images/dice-2.png';
```

A stateless widget should generally be immutable.

---

## 10. The Mistake

The mistake is assuming that this code will update the UI:

```dart id="lgku7n"
activeDiceImage = 'assets/images/dice-4.png';
```

This line changes the variable value in memory.

But Flutter does not know that the UI should be rebuilt.

Changing a variable is not enough.

---

## 11. Flutter UI Is Declarative

Flutter uses a declarative UI model.

This means the UI is described by the `build()` method.

Example:

```dart id="k2mfjk"
Image.asset(activeDiceImage)
```

The UI depends on the value of `activeDiceImage`.

But if `activeDiceImage` changes, Flutter must run `build()` again to create a new UI description.

If `build()` is not called again, the old UI stays on the screen.

---

## 12. Why `setState()` Is Needed

To update the UI after changing data, Flutter needs to be notified.

This is done with:

```dart id="9t8ven"
setState()
```

However, `setState()` is not available inside a `StatelessWidget`.

It is only available inside the `State` object of a `StatefulWidget`.

That is why this approach cannot work with `StatelessWidget`.

---

## 13. Incorrect Mental Model

Incorrect idea:

```text id="ybgurx"
I changed a variable, so the UI should automatically update.
```

Correct idea:

```text id="w390o7"
I changed state, so I must tell Flutter to rebuild the UI.
```

This is the key concept behind `StatefulWidget`.

---

## 14. Full Broken Example

```dart id="bdnira"
import 'package:flutter/material.dart';

class BrokenDiceRoller extends StatelessWidget {
  BrokenDiceRoller({super.key});

  var currentDiceImage = 'assets/images/dice-1.png';

  void rollDice() {
    currentDiceImage = 'assets/images/dice-4.png';
    print('Variable changed, but UI did not update!');
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          currentDiceImage,
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: rollDice,
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

This code is intentionally wrong.

It shows what does not work.

---

## 15. What Actually Happens

When the app first builds:

```dart id="8qsdr2"
currentDiceImage = 'assets/images/dice-1.png';
```

Flutter displays:

```text id="e3r2uy"
dice-1.png
```

When the button is pressed:

```dart id="j35oai"
currentDiceImage = 'assets/images/dice-4.png';
```

The variable changes.

But Flutter does not rebuild the widget.

So the screen still shows:

```text id="lxof97"
dice-1.png
```

---

## 16. Why This Lecture Matters

This failure is important because it explains why Flutter has two kinds of widgets:

```text id="an6new"
StatelessWidget
StatefulWidget
```

Use `StatelessWidget` when the widget does not manage changing internal data.

Use `StatefulWidget` when the widget needs to update itself after data changes.

The dice roller is interactive, so it needs state.

---

## 17. What Comes Next

To fix this problem, we need to use a `StatefulWidget`.

A `StatefulWidget` allows us to:

1. Store changing data.
2. Update that data when the button is pressed.
3. Call `setState()`.
4. Tell Flutter to rebuild the UI.
5. Display the new dice image.

This will be introduced in the next lecture.

---

## Key Points

* Changing a variable inside a `StatelessWidget` does not update the UI.
* A `StatelessWidget` is not designed to manage changing internal state.
* The `build()` method does not automatically run again when a normal variable changes.
* The button function can run successfully while the UI still stays the same.
* `print()` can confirm that the function is executing.
* Flutter must be told when state changes.
* `setState()` is used to notify Flutter about state changes.
* `setState()` is not available in `StatelessWidget`.
* Interactive widgets usually require `StatefulWidget`.

---

## Summary

Trying to make an interactive widget by changing a variable inside a `StatelessWidget` does not work.

Example:

```dart id="g533oq"
activeDiceImage = 'assets/images/dice-4.png';
```

This changes the variable, but it does not notify Flutter that the UI should update.

Even if the button function runs, the image on the screen stays the same because the widget is not rebuilt.

To build interactive widgets correctly, we need `StatefulWidget` and `setState()`, which will be introduced next.
