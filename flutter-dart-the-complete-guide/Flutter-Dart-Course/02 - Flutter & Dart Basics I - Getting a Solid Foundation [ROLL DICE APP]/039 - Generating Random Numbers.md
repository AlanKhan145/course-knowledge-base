# Generating Random Numbers

## Overview

This lecture explains how to generate random numbers in Dart.

In the Roll Dice app, pressing the button should not always show the same dice image. Instead, every button press should generate a random number between `1` and `6`.

That random number will then determine which dice image should be displayed.

To generate random numbers in Dart, we use the `Random` class from the `dart:math` library.

---

## 1. The Current Problem

At the moment, the button can change the dice image, but only to one fixed image.

Example:

```dart id="jqz3ni"
void rollDice() {
  setState(() {
    activeDiceImage = 'assets/images/dice-4.png';
  });
}
```

This always changes the image to:

```text id="spm8nw"
dice-4.png
```

That is not a real dice roll.

A real dice roll should randomly choose a value between:

```text id="g2lmo3"
1 and 6
```

---

## 2. Importing `dart:math`

Dart provides random number generation through the `dart:math` library.

To use it, add this import:

```dart id="qt213o"
import 'dart:math';
```

This is not a third-party package.

It comes directly from Dart.

However, it is not available automatically in every file, so we must import it manually.

---

## 3. The `Random` Class

The `Random` class is used to generate random values.

Example:

```dart id="2f7o8n"
Random()
```

This creates a `Random` object.

That object provides methods for generating random numbers.

One of the most important methods is:

```dart id="hutvdc"
nextInt()
```

---

## 4. Using `nextInt()`

`nextInt(n)` generates a random integer from `0` up to, but not including, `n`.

Example:

```dart id="g6yd8o"
Random().nextInt(10)
```

This generates a number from:

```text id="49zc0o"
0 to 9
```

It does not include `10`.

So:

```dart id="uv3255"
nextInt(10)
```

means:

```text id="i2e5ln"
0 <= random number < 10
```

---

## 5. Generating a Dice Roll

A dice roll should produce a number from `1` to `6`.

If we write:

```dart id="559kgz"
Random().nextInt(6)
```

we get a number from:

```text id="kaen8p"
0 to 5
```

That is not correct for a dice.

To shift the range to `1` through `6`, add `1`.

```dart id="59pf1t"
Random().nextInt(6) + 1
```

Now the result is:

```text id="xvq1p2"
1 to 6
```

---

## 6. Range Explanation

| Code                      | Possible Results   |
| ------------------------- | ------------------ |
| `Random().nextInt(6)`     | `0, 1, 2, 3, 4, 5` |
| `Random().nextInt(6) + 1` | `1, 2, 3, 4, 5, 6` |

For a dice, we need:

```dart id="ch9gnd"
Random().nextInt(6) + 1
```

---

## 7. First Random Dice Example

```dart id="hj79cr"
void rollDice() {
  setState(() {
    final diceRoll = Random().nextInt(6) + 1;
    activeDiceImage = 'assets/images/dice-$diceRoll.png';
  });
}
```

This generates a random number and uses it to build the image path.

Example results:

```text id="twi2eg"
assets/images/dice-1.png
assets/images/dice-2.png
assets/images/dice-3.png
assets/images/dice-4.png
assets/images/dice-5.png
assets/images/dice-6.png
```

---

## 8. String Interpolation

Dart allows you to insert variable values into strings with `$`.

Example:

```dart id="l25pug"
final diceRoll = 4;

final imagePath = 'assets/images/dice-$diceRoll.png';
```

This creates:

```text id="31ul1d"
assets/images/dice-4.png
```

This feature is called **string interpolation**.

---

## 9. Using String Interpolation for Image Paths

Because all dice images follow the same naming pattern:

```text id="51k50a"
dice-1.png
dice-2.png
dice-3.png
dice-4.png
dice-5.png
dice-6.png
```

we only need to change the number in the file name.

Example:

```dart id="sjpyff"
'assets/images/dice-$diceRoll.png'
```

If `diceRoll` is `1`, the path becomes:

```text id="ows854"
assets/images/dice-1.png
```

If `diceRoll` is `6`, the path becomes:

```text id="0ut9dc"
assets/images/dice-6.png
```

---

## 10. Better State: Store the Dice Number

Instead of storing the whole image path as state:

```dart id="hlxy5j"
var activeDiceImage = 'assets/images/dice-2.png';
```

we can store only the current dice roll number:

```dart id="jbhctl"
var currentDiceRoll = 2;
```

This keeps the state simpler.

Then we build the image path inside `build()`:

```dart id="ubml45"
Image.asset(
  'assets/images/dice-$currentDiceRoll.png',
  width: 200,
)
```

This is cleaner because the state is just the dice value.

---

## 11. Updating the Dice Number

Inside `rollDice()`, we update `currentDiceRoll`.

```dart id="d4bppn"
void rollDice() {
  setState(() {
    currentDiceRoll = Random().nextInt(6) + 1;
  });
}
```

When `setState()` is called, Flutter runs `build()` again.

The image path is rebuilt using the new value.

---

## 12. Updated `DiceRoller` Example

```dart id="dngfsc"
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
  var currentDiceRoll = 2;

  void rollDice() {
    setState(() {
      currentDiceRoll = Random().nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/dice-$currentDiceRoll.png',
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

This now displays a random dice image after every button press.

---

## 13. Why This Works

When the button is pressed:

1. `rollDice()` runs.
2. `Random().nextInt(6) + 1` generates a number from `1` to `6`.
3. `currentDiceRoll` is updated inside `setState()`.
4. Flutter calls `build()` again.
5. The image path is rebuilt with the new number.
6. A new dice image is shown.

---

## 14. Why You Might See the Same Number Twice

Sometimes, clicking the button may appear to do nothing.

This can happen because a random dice roll can produce the same number twice in a row.

Example:

```text id="bl6xeg"
Roll 1: 4
Roll 2: 4
```

The code is still working.

The random number just happened to be the same.

Click a few more times to see different results.

---

## 15. Avoid Creating `Random()` Every Time

This works:

```dart id="k64ngp"
currentDiceRoll = Random().nextInt(6) + 1;
```

But it creates a new `Random` object every time the button is pressed.

That means every click creates a new object in memory.

For a small app, this is not a big problem.

But a better approach is to create the `Random` object once and reuse it.

---

## 16. Create the Randomizer Once

Create a `Random` object once:

```dart id="pxsh9w"
final randomizer = Random();
```

Then reuse it:

```dart id="25vs66"
currentDiceRoll = randomizer.nextInt(6) + 1;
```

This avoids unnecessary object creation.

---

## 17. Where to Put the Randomizer

You can place the randomizer near the top of the file, below the imports.

Example:

```dart id="3cv9uj"
import 'dart:math';

import 'package:flutter/material.dart';

final randomizer = Random();
```

This creates one shared `Random` object for this file.

Then the state class can use it.

---

## 18. Final Optimized Version

```dart id="erai4v"
import 'dart:math';

import 'package:flutter/material.dart';

final randomizer = Random();

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

class _DiceRollerState extends State<DiceRoller> {
  var currentDiceRoll = 2;

  void rollDice() {
    setState(() {
      currentDiceRoll = randomizer.nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/dice-$currentDiceRoll.png',
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

This is more efficient because `Random()` is created only once.

---

## 19. Private Variables with `_`

In Dart, a leading underscore makes a variable private to the file.

Example:

```dart id="knuwgz"
final _randomizer = Random();
```

This means `_randomizer` can only be used inside this Dart file.

This is a common convention.

You may also see state variables written like this:

```dart id="1gl03x"
var _currentDiceRoll = 2;
```

This means the variable is intended for internal use only.

---

## 20. Version with Private Names

```dart id="cu7bp7"
import 'dart:math';

import 'package:flutter/material.dart';

final _randomizer = Random();

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() => _DiceRollerState();
}

class _DiceRollerState extends State<DiceRoller> {
  var _currentDiceRoll = 2;

  void _rollDice() {
    setState(() {
      _currentDiceRoll = _randomizer.nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/dice-$_currentDiceRoll.png',
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: _rollDice,
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

This version follows common Dart privacy conventions.

---

## 21. Random with a Seed

For testing, you can create a `Random` object with a seed.

Example:

```dart id="6pzm5g"
final randomizer = Random(42);
```

A seeded random generator produces the same sequence of numbers every time.

This can be useful for tests because the result is predictable.

Example:

```dart id="48sb6f"
final randomizer = Random(42);
```

This is usually not needed for normal app behavior, but it is helpful in testing.

---

## 22. `Random.secure()`

Dart also provides:

```dart id="g21g8b"
Random.secure()
```

This creates a cryptographically secure random number generator.

Example:

```dart id="xgbj3q"
final secureRandom = Random.secure();
```

This is useful for security-related features.

Examples:

```text id="fs2n34"
tokens
passwords
security keys
cryptographic values
```

For a dice game, `Random.secure()` is unnecessary.

Use normal `Random()`.

---

## 23. Common Mistake: Forgetting the Import

Incorrect:

```dart id="2czn44"
final randomizer = Random();
```

without:

```dart id="fn3krd"
import 'dart:math';
```

Dart will not know what `Random` is.

Correct:

```dart id="cn5py0"
import 'dart:math';

final randomizer = Random();
```

---

## 24. Common Mistake: Wrong Random Range

Incorrect for dice:

```dart id="kz7yxb"
Random().nextInt(6)
```

This gives:

```text id="z5b3ok"
0 to 5
```

Correct:

```dart id="v6amf4"
Random().nextInt(6) + 1
```

This gives:

```text id="n3f7lx"
1 to 6
```

---

## 25. Common Mistake: Storing Too Much State

Less ideal:

```dart id="xyl51g"
var activeDiceImage = 'assets/images/dice-2.png';
```

Better:

```dart id="d05211"
var currentDiceRoll = 2;
```

Then derive the image path:

```dart id="joqaee"
'assets/images/dice-$currentDiceRoll.png'
```

This keeps the state smaller and easier to understand.

---

## Key Points

* Import `dart:math` to use the `Random` class.
* `Random()` creates a random number generator.
* `nextInt(n)` generates a number from `0` up to `n - 1`.
* `Random().nextInt(6)` gives `0` to `5`.
* `Random().nextInt(6) + 1` gives `1` to `6`.
* Use string interpolation to build image paths dynamically.
* Store the dice number as state instead of storing the full image path.
* Call `setState()` when updating the dice roll.
* Create the `Random` object once instead of creating a new one on every button press.
* Use `_` for private variables and methods when appropriate.
* Use `Random(42)` for deterministic testing.
* Use `Random.secure()` only for security-related randomness.

---

## Summary

To generate a random dice roll in Dart, import `dart:math` and use `Random`.

```dart id="6tucn3"
import 'dart:math';
```

Then generate a value from `1` to `6`:

```dart id="oc44ce"
randomizer.nextInt(6) + 1
```

The dice app stores the current dice value as state:

```dart id="xgk3fz"
var currentDiceRoll = 2;
```

When the button is pressed, it updates the value inside `setState()`:

```dart id="4s8rlb"
setState(() {
  currentDiceRoll = randomizer.nextInt(6) + 1;
});
```

The image path is then built dynamically with string interpolation:

```dart id="d8jizb"
'assets/images/dice-$currentDiceRoll.png'
```

This allows the app to display a different dice image after each button press.
