# `final` and `const`: Special Kinds of Variables

## Overview

This lecture introduces two special Dart keywords for variables: `final` and `const`.

Regular variables created with `var` can be reassigned. However, sometimes you want to store a value once and make sure it never changes afterward.

That is where `final` and `const` are useful.

Both `final` and `const` prevent reassignment, but they are not exactly the same.

---

## 1. Regular Variables Can Change

A regular variable can be reassigned.

Example:

```dart id="ka8x30"
var startAlignment = Alignment.topLeft;

startAlignment = Alignment.center;
```

This is valid because `startAlignment` was declared with `var`.

Variables created with `var` are useful when the value may change later.

However, if a value should never change, using `var` is too flexible.

---

## 2. Why Be More Restrictive?

If you know a value should never change, it is better to tell Dart that clearly.

This helps prevent accidental reassignment.

Example:

```dart id="ulebd3"
var startAlignment = Alignment.topLeft;

startAlignment = Alignment.center; // allowed
```

If this value should never change, the reassignment should not be allowed.

Using `final` or `const` makes your intention clear.

This is especially important in larger projects where multiple developers work on the same codebase.

---

## 3. The `final` Keyword

A `final` variable can only be assigned once.

Example:

```dart id="tjnr3k"
final startAlignment = Alignment.topLeft;
```

This is valid.

But this is not valid:

```dart id="p23t3n"
final startAlignment = Alignment.topLeft;

startAlignment = Alignment.center; // error
```

Once a `final` variable receives a value, it cannot be reassigned.

---

## 4. When to Use `final`

Use `final` when a value is assigned once at runtime and should not change afterward.

Example:

```dart id="7f7v34"
final diceResult = rollDice();
```

Here, the value is determined by a function call.

The result is not known before the program runs.

However, after `diceResult` receives its value, it cannot be changed.

```dart id="iayxai"
final diceResult = rollDice();

diceResult = 4; // error
```

---

## 5. Example: `final` with Runtime Values

```dart id="ew1aju"
void main() {
  final int diceResult = rollDice();

  print('You rolled $diceResult');
}

int rollDice() {
  return 4;
}
```

The value returned by `rollDice()` is only known when the program runs.

Therefore, this can be `final`, but not `const`.

---

## 6. The `const` Keyword

A `const` variable is a compile-time constant.

This means its value must be known before the program runs.

Example:

```dart id="3b4ekv"
const maxDiceFaces = 6;
const appTitle = 'Roll Dice Game';
```

These values are known at compile time.

They are locked in before the app starts running.

---

## 7. `const` Cannot Use Runtime Values

This is invalid:

```dart id="5k01sg"
const diceResult = rollDice(); // error
```

Why?

Because `rollDice()` must run first to produce a value.

That value is only known at runtime.

A `const` value must be known at compile time.

Use `final` instead:

```dart id="g8lz0e"
final diceResult = rollDice();
```

---

## 8. `final` vs `const`

Both `final` and `const` prevent reassignment.

However, they are different.

| Keyword | Can Be Reassigned? | Value Known At Compile Time? | Example                          |
| ------- | -----------------: | ---------------------------: | -------------------------------- |
| `var`   |                Yes |                           No | `var score = 0;`                 |
| `final` |                 No |              Not necessarily | `final diceResult = rollDice();` |
| `const` |                 No |                          Yes | `const maxDiceFaces = 6;`        |

---

## 9. Use `const` When Possible

If a value is known at compile time, prefer `const`.

Example:

```dart id="18puwu"
const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;
```

These values are fixed and known before the app runs.

Therefore, they can be `const`.

---

## 10. Applying `const` to Gradient Alignments

Previously, we used variables for gradient alignment values:

```dart id="2q13n6"
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

These variables can be reassigned, so they are not ideal if the values never change.

A better version is:

```dart id="w1pdrl"
const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;
```

Now Dart knows these values are compile-time constants.

---

## 11. Re-Adding `const` to `BoxDecoration`

When `startAlignment` and `endAlignment` were declared with `var`, we could not use them inside a `const BoxDecoration`.

Example:

```dart id="97e1na"
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;

BoxDecoration(
  gradient: LinearGradient(
    begin: startAlignment,
    end: endAlignment,
  ),
)
```

Because `var` variables can change, Dart cannot treat this as constant.

But after changing them to `const`:

```dart id="e0hfjo"
const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;
```

we can use:

```dart id="zyxho6"
const BoxDecoration(
  gradient: LinearGradient(
    colors: [
      Color.fromARGB(255, 26, 2, 80),
      Color.fromARGB(255, 45, 7, 98),
    ],
    begin: startAlignment,
    end: endAlignment,
  ),
)
```

Now the whole decoration can be constant again.

---

## 12. Full Flutter Example

```dart id="al2ffh"
import 'package:flutter/material.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

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
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: const Center(
        child: StyledText(),
      ),
    );
  }
}
```

This is now more optimized because the alignment values and decoration are constant.

---

## 13. Runtime Example: Use `final`

If a value is calculated while the app is running, use `final`.

Example:

```dart id="4z278s"
final currentTime = DateTime.now();
```

This cannot be `const` because the current time is not known at compile time.

Another example:

```dart id="v0iy07"
final diceResult = rollDice();
```

The dice result is calculated at runtime.

So `final` is correct.

---

## 14. Compile-Time Example: Use `const`

If the value is fixed and known before the app runs, use `const`.

Example:

```dart id="1cx31b"
const appTitle = 'Roll Dice Game';
const maxDiceFaces = 6;
const defaultFontSize = 28.0;
```

These values do not require runtime calculation.

Therefore, they can be constants.

---

## 15. `final` in Classes

In Flutter widgets, class properties are often marked as `final`.

Example:

```dart id="htsxvu"
class PlayerName extends StatelessWidget {
  const PlayerName({
    super.key,
    required this.name,
  });

  final String name;

  @override
  Widget build(BuildContext context) {
    return Text(name);
  }
}
```

Here:

```dart id="k3nkj5"
final String name;
```

means the `name` value is assigned once when the widget is created.

It cannot be changed afterward.

This is common in custom widgets.

---

## 16. Why Widget Properties Are Often `final`

Flutter widgets are generally immutable.

This means their configuration should not change after the widget object is created.

Example:

```dart id="k5pvle"
final String name;
```

The widget receives the value once through its constructor.

```dart id="h4wr3z"
const PlayerName(name: 'Alice')
```

After that, the widget object does not modify the value internally.

If the UI needs to change, Flutter creates a new widget object with new configuration.

---

## 17. Example: Configurable Widget with `final`

```dart id="zegm3p"
class StyledText extends StatelessWidget {
  const StyledText({
    super.key,
    required this.text,
  });

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
        color: Colors.white,
        fontSize: 28,
      ),
    );
  }
}
```

Usage:

```dart id="rd22wa"
const StyledText(text: 'Hello Flutter')
```

Here, `text` is passed into the widget and stored in a `final` property.

---

## 18. Important Difference

`final` means the variable cannot be reassigned.

However, if the variable stores a mutable object, the object itself might still be changeable.

Example:

```dart id="8agvo0"
final numbers = [1, 2, 3];

numbers.add(4); // allowed
```

The variable `numbers` still points to the same list, so the variable was not reassigned.

But the list content changed.

A `const` list is different:

```dart id="jippcv"
const numbers = [1, 2, 3];

numbers.add(4); // error
```

The list itself is constant and cannot be modified.

---

## 19. Code Example

```dart id="1otcsq"
void main() {
  final int diceResult = rollDice();

  const int maxDiceFaces = 6;
  const String appTitle = 'Roll Dice Game';

  print('$appTitle: rolled $diceResult on a $maxDiceFaces-sided dice');
}

int rollDice() {
  return 4;
}
```

Output:

```text id="2n3zwc"
Roll Dice Game: rolled 4 on a 6-sided dice
```

---

## 20. Complete Example with Class

```dart id="2pot0u"
void main() {
  final player = Player(name: 'Alice');

  const appTitle = 'Roll Dice Game';

  print('$appTitle: ${player.name}');
}

class Player {
  final String name;

  Player({required this.name});
}
```

Here:

```dart id="d5alf3"
final player
```

stores a `Player` object once.

```dart id="cuaw5q"
final String name
```

means the player's name is assigned once through the constructor.

```dart id="h3xvbo"
const appTitle
```

is a compile-time constant.

---

## 21. Choosing Between `var`, `final`, and `const`

Use `var` when the value may change.

```dart id="syeflo"
var score = 0;
score = score + 10;
```

Use `final` when the value is assigned once at runtime.

```dart id="esahhb"
final diceResult = rollDice();
```

Use `const` when the value is known at compile time.

```dart id="kdmbr0"
const maxDiceFaces = 6;
```

---

## 22. Best Practice

Be as restrictive as possible.

If a value changes, use `var`.

If a value does not change after assignment, use `final`.

If a value is known at compile time, use `const`.

This makes your code safer, clearer, and easier to optimize.

---

## Key Points

* `var` creates a normal variable that can be reassigned.
* `final` creates a variable that can only be assigned once.
* `const` creates a compile-time constant.
* `final` values may be determined at runtime.
* `const` values must be known before the program runs.
* Use `final` for runtime values that should not change.
* Use `const` for fixed values known at compile time.
* Flutter recommends using `const` wherever possible.
* Class properties in widgets are often marked as `final`.
* `const` can improve performance because Dart can reuse constant values.

---

## Summary

`final` and `const` are special ways to create variables that cannot be reassigned.

Use `final` when a value is assigned once at runtime:

```dart id="9s8r8f"
final diceResult = rollDice();
```

Use `const` when a value is known at compile time:

```dart id="mp9knu"
const maxDiceFaces = 6;
```

In Flutter, using `const` where possible helps Dart and Flutter optimize your app.

For values like fixed gradient alignments, `const` is the best choice:

```dart id="pthb0s"
const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;
```

This makes your code safer, clearer, and potentially more efficient.
