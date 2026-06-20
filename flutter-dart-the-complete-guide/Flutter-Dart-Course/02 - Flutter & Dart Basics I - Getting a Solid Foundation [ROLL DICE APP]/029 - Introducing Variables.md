# Introducing Variables

## Overview

This lecture introduces **variables** in Dart.

Variables are named containers for storing values. They allow you to define a value once and reuse it later in your code.

In Flutter, variables are useful for storing values such as colors, alignments, text, dice results, scores, and other dynamic data.

Understanding variables is essential before making widgets more flexible and configurable.

---

## 1. What Is a Variable?

A variable is a data container.

It stores a value under a name.

Example:

```dart id="9m53eu"
var diceRoll = 3;
```

Here:

```dart id="s5l793"
diceRoll
```

is the variable name.

```dart id="5y5lux"
3
```

is the value stored in the variable.

You can use the variable later:

```dart id="3jhz3s"
print(diceRoll);
```

---

## 2. Why Variables Are Useful

Without variables, values are written directly where they are used.

Example:

```dart id="9iiduf"
begin: Alignment.topLeft,
end: Alignment.bottomRight,
```

This works, but the values are hidden inside the widget tree.

If the widget tree becomes large, finding and changing these values can become inconvenient.

With variables, we can store these values at the top of the file:

```dart id="y6f2wk"
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

Then use them later:

```dart id="yomjmc"
begin: startAlignment,
end: endAlignment,
```

This makes the code easier to adjust.

---

## 3. Creating Variables with `var`

In Dart, you can create a variable using the `var` keyword.

Example:

```dart id="xi8yow"
var message = 'Hello World!';
```

Dart automatically infers the type.

In this example, Dart understands that `message` is a `String`.

Another example:

```dart id="5mk4p7"
var score = 100;
```

Dart understands that `score` is an `int`.

This is called **type inference**.

---

## 4. Explicit Type Declaration

You can also declare a variable with an explicit type.

Example:

```dart id="geu4pf"
int diceResult = 1;
String playerName = 'Alice';
bool gameOver = false;
```

This makes the type clear.

Both of these are valid:

```dart id="t9cioa"
var diceResult = 1;
int diceResult = 1;
```

In the first version, Dart infers the type.

In the second version, you write the type yourself.

---

## 5. Variable Naming Convention

Variable names should use `lowerCamelCase`.

This means:

* The first word starts with a lowercase letter.
* Each following word starts with an uppercase letter.
* No spaces.
* No underscores for normal variable names.

Good examples:

```dart id="fk6bmi"
startAlignment
endAlignment
diceRoll
playerName
gameOver
```

Bad examples:

```dart id="mudj14"
StartAlignment
start_alignment
start alignment
```

Class names start with uppercase letters, but variable names usually start with lowercase letters.

---

## 6. Example: Storing Gradient Alignments

In `gradient_container.dart`, we can store the gradient alignment values in variables.

```dart id="figa13"
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

Then use those variables inside `LinearGradient`.

```dart id="vettq0"
LinearGradient(
  colors: const [
    Color.fromARGB(255, 26, 2, 80),
    Color.fromARGB(255, 45, 7, 98),
  ],
  begin: startAlignment,
  end: endAlignment,
)
```

Now the alignment values are easier to find and change.

---

## 7. Full Example with Variables

```dart id="0kbgkz"
import 'package:flutter/material.dart';

var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: const [
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

Notice that `BoxDecoration` is no longer marked as `const`.

This is because `startAlignment` and `endAlignment` are variables created with `var`, which means they can potentially change.

---

## 8. Variables Can Be Reassigned

Variables created with `var` can be reassigned.

Example:

```dart id="bgkky4"
var startAlignment = Alignment.topLeft;

startAlignment = Alignment.center;
```

The value inside the variable changes from:

```dart id="jfshvg"
Alignment.topLeft
```

to:

```dart id="05n95h"
Alignment.center
```

This is one of the main features of variables.

They store values that can be reused and changed.

---

## 9. Reassigning Values of the Same Type

A variable can be reassigned to another value of the same type.

Example:

```dart id="oxxrvr"
var score = 0;

score = 10;
score = score + 5;
```

This is valid because `score` is inferred as an `int`.

This is not valid:

```dart id="e6smxt"
var score = 0;

score = 'High Score'; // error
```

Dart inferred `score` as an `int`, so you cannot assign a `String` to it later.

---

## 10. Why `const` Can Cause an Error Here

Before using variables, we may have had code like this:

```dart id="qr4sbr"
decoration: const BoxDecoration(
  gradient: LinearGradient(
    colors: [
      Color.fromARGB(255, 26, 2, 80),
      Color.fromARGB(255, 45, 7, 98),
    ],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  ),
)
```

This works because all values are constant.

But after introducing variables:

```dart id="ewsim3"
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

we cannot use those variables inside a `const BoxDecoration`.

This is because `var` variables can change.

Dart cannot guarantee that the value will always stay the same.

Therefore, this may cause an error:

```dart id="smn0xt"
decoration: const BoxDecoration(
  gradient: LinearGradient(
    begin: startAlignment,
    end: endAlignment,
  ),
)
```

To fix it, remove `const` from `BoxDecoration`:

```dart id="3u1u18"
decoration: BoxDecoration(
  gradient: LinearGradient(
    begin: startAlignment,
    end: endAlignment,
  ),
)
```

---

## 11. Alternative: Use `const` Variables

If the alignment values should never change, you can declare them as `const`.

Example:

```dart id="4dv9xk"
const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;
```

Then you can keep `const BoxDecoration`.

```dart id="ojpvm4"
decoration: const BoxDecoration(
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

Use `var` when a value may change.

Use `const` when a value is known at compile time and will never change.

---

## 12. `final` Variables

Dart also has `final`.

A `final` variable can only be assigned once.

Example:

```dart id="uv4vk0"
final playerName = 'Alice';
```

You cannot change it later.

```dart id="z0lsp7"
playerName = 'Bob'; // error
```

Difference:

```text id="o81n9f"
var   → can be reassigned
final → assigned once at runtime
const → compile-time constant
```

---

## 13. `var`, `final`, and `const`

| Keyword | Can Be Reassigned? | Compile-Time Constant? | Example                 |
| ------- | -----------------: | ---------------------: | ----------------------- |
| `var`   |                Yes |                     No | `var score = 0;`        |
| `final` |                 No |                     No | `final name = 'Alice';` |
| `const` |                 No |                    Yes | `const pi = 3.14;`      |

---

## 14. Variables and Scope

A variable can only be used in places where it is accessible.

This is called **scope**.

Example:

```dart id="ua0q14"
var startAlignment = Alignment.topLeft;

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return LinearGradient(
      begin: startAlignment,
      end: Alignment.bottomRight,
      colors: const [
        Colors.blue,
        Colors.purple,
      ],
    );
  }
}
```

Because `startAlignment` is defined outside the class, the class can access it.

This is called a top-level variable.

---

## 15. Local Variables

A variable can also be created inside a function or method.

Example:

```dart id="z8r7g7"
@override
Widget build(BuildContext context) {
  var message = 'Hello World!';

  return Text(message);
}
```

Here, `message` is a local variable.

It only exists inside the `build()` method.

---

## 16. Null Safety

Dart has null safety.

This means variables cannot contain `null` unless you explicitly allow it.

Example:

```dart id="9nsnf8"
String playerName = 'Alice';
```

This variable cannot be `null`.

This is not allowed:

```dart id="574y82"
playerName = null; // error
```

If a variable should be allowed to store `null`, add `?` to the type.

Example:

```dart id="y8o36v"
String? lastAction;
```

Now `lastAction` can hold either:

```text id="so1b9n"
a String
or null
```

---

## 17. Nullable Variable Example

```dart id="8dkgwi"
String? lastAction;

lastAction = 'Rolled';
lastAction = null;
```

This is valid because the variable is declared as nullable with `?`.

---

## 18. `late` Variables

Sometimes you want to declare a variable now but assign it later.

For that, Dart provides `late`.

Example:

```dart id="wbsdh9"
late int diceValue;

diceValue = 4;

print(diceValue);
```

This tells Dart:

```text id="kv0np3"
This variable will be assigned before it is used.
```

Be careful: if you use a `late` variable before assigning it, the app will crash.

---

## 19. Complete Dart Variable Example

```dart id="z2aoxy"
void main() {
  int diceResult = 1;
  String playerName = 'Alice';
  bool gameOver = false;

  var score = 0;
  var message = 'Start';

  diceResult = 4;
  score = score + 10;

  String? lastAction;
  lastAction = 'Rolled';
  lastAction = null;

  print('$playerName rolled $diceResult. Score: $score');
  print('Message: $message');
  print('Game over: $gameOver');
}
```

Output:

```text id="r5kk7n"
Alice rolled 4. Score: 10
Message: Start
Game over: false
```

---

## 20. Why Variables Matter in the Dice App

Variables will become important when building the dice app.

For example, we will need to store:

```text id="thm9hd"
current dice image
current dice roll number
button press result
score
game state
```

Example:

```dart id="ul4lho"
var currentDiceRoll = 2;
```

Later, when the user presses a button, this value can change.

```dart id="3ysuuy"
currentDiceRoll = 5;
```

This is how dynamic apps are built.

---

## Key Points

* Variables are data containers.
* Variables store values under names.
* Use `var` when you want Dart to infer the type.
* Use explicit types when you want clarity.
* Variables can be reassigned if they are not `final` or `const`.
* Variable names should use `lowerCamelCase`.
* `var` variables can change.
* `final` variables can only be assigned once.
* `const` variables are compile-time constants.
* Dart has null safety.
* Use `?` when a variable may contain `null`.
* Use `late` when a variable will be initialized later.
* Variables can be reused throughout accessible parts of the code.

---

## Summary

Variables are named containers for storing values.

In Dart, you can create variables with `var` or with an explicit type.

Example:

```dart id="17qk2b"
var startAlignment = Alignment.topLeft;
int diceResult = 1;
String playerName = 'Alice';
```

Variables allow you to define a value once and reuse it later.

In the Flutter app, variables can store values such as gradient alignments:

```dart id="lkyovg"
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

Then those variables can be used inside the widget tree:

```dart id="ydcqt3"
begin: startAlignment,
end: endAlignment,
```

Understanding variables is essential because they are the foundation for storing and changing data in Flutter apps.
