# Adding Buttons and Using Functions as Values

## Overview

This lecture introduces how to add buttons in Flutter and how to pass functions as values.

In the Roll Dice app, we already display a dice image. The next step is to add a button below the image so the user can press it to roll the dice.

To do that, we need two important concepts:

1. Using layout widgets such as `Column` to show multiple widgets vertically.
2. Passing a function to a button's `onPressed` parameter so Flutter knows what should happen when the button is pressed.

---

## 1. Why We Need a Button

The app currently shows a dice image.

Example:

```dart id="0vjg3q"
Image.asset(
  'assets/images/dice-2.png',
  width: 200,
)
```

But a dice rolling app also needs a button.

The button should allow the user to roll the dice.

Example UI goal:

```text id="eersla"
[ Dice Image ]

[ Roll Dice Button ]
```

---

## 2. Why `Center` Alone Is Not Enough

The `Center` widget has one main child parameter:

```dart id="5zt7z8"
Center(
  child: Image.asset(...),
)
```

The `child` parameter accepts only one widget.

But now we want to display two widgets:

1. The dice image
2. The button

Since `Center` can only directly contain one child, we need another widget inside it.

That widget is `Column`.

---

## 3. Using `Column`

`Column` displays multiple widgets vertically, one above another.

Example:

```dart id="fquljb"
Column(
  children: [
    Image.asset('assets/images/dice-2.png'),
    TextButton(
      onPressed: () {},
      child: Text('Roll Dice'),
    ),
  ],
)
```

A `Column` takes a `children` argument.

The `children` argument expects a list of widgets:

```dart id="ukna5n"
children: [
  WidgetOne(),
  WidgetTwo(),
  WidgetThree(),
]
```

---

## 4. `Column` vs `Row`

Flutter provides both `Column` and `Row`.

### `Column`

Displays widgets vertically.

```text id="kwg8n9"
Widget 1
Widget 2
Widget 3
```

### `Row`

Displays widgets horizontally.

```text id="f65qk3"
Widget 1  Widget 2  Widget 3
```

For the dice app, we want the image above the button, so `Column` is the correct choice.

---

## 5. Adding a Button Below the Image

```dart id="2a4wwf"
Center(
  child: Column(
    children: [
      Image.asset(
        'assets/images/dice-2.png',
        width: 200,
      ),
      TextButton(
        onPressed: () {},
        child: const Text('Roll Dice'),
      ),
    ],
  ),
)
```

This displays the image and the button vertically.

---

## 6. Common Flutter Button Widgets

Flutter provides three common button types.

### `ElevatedButton`

A button with a background color and slight elevation.

```dart id="avpzwx"
ElevatedButton(
  onPressed: () {},
  child: const Text('Elevated Button'),
)
```

### `OutlinedButton`

A button with an outline border and no filled background.

```dart id="j328k4"
OutlinedButton(
  onPressed: () {},
  child: const Text('Outlined Button'),
)
```

### `TextButton`

A button that looks like pressable text.

```dart id="3xhsss"
TextButton(
  onPressed: () {},
  child: const Text('Text Button'),
)
```

For this app, `TextButton` is a good choice.

---

## 7. The `child` Parameter

A button usually needs a child widget.

For buttons, the child is often a `Text` widget.

Example:

```dart id="9942ll"
TextButton(
  onPressed: () {},
  child: const Text('Roll Dice'),
)
```

The `Text` widget defines what appears inside the button.

Without a child, the button would not show visible text.

---

## 8. The `onPressed` Parameter

The `onPressed` parameter defines what should happen when the button is pressed.

Example:

```dart id="7qejne"
TextButton(
  onPressed: () {},
  child: const Text('Roll Dice'),
)
```

The value of `onPressed` must be either:

```text id="0ej26i"
a function
or null
```

If `onPressed` is a function, the button is enabled.

If `onPressed` is `null`, the button is disabled.

---

## 9. Disabled Button

```dart id="mjhn8t"
TextButton(
  onPressed: null,
  child: const Text('Disabled Button'),
)
```

When `onPressed` is `null`, Flutter visually disables the button and prevents it from being pressed.

---

## 10. Functions as Values

In Dart, functions are values.

This means functions can be:

* Stored in variables
* Passed as arguments
* Used as callback functions
* Given to widgets such as buttons

The `onPressed` parameter expects a function value.

Specifically, it expects a function that:

* Takes no arguments
* Returns nothing

This type is commonly described as:

```dart id="jooxjx"
void Function()
```

---

## 11. Anonymous Function

One way to provide a function is to define it directly inside `onPressed`.

Example:

```dart id="op11pi"
TextButton(
  onPressed: () {
    print('Button pressed!');
  },
  child: const Text('Roll Dice'),
)
```

This is called an anonymous function because it has no name.

It is created exactly where it is needed.

---

## 12. Anonymous Function Syntax

An anonymous function looks like this:

```dart id="vuxq4v"
() {
  // code to execute
}
```

The parentheses `()` mean the function takes no parameters.

The curly braces `{}` contain the code that should run when the function is called.

Example:

```dart id="fit06e"
onPressed: () {
  print('Rolling dice...');
}
```

This function will run when the button is pressed.

---

## 13. Named Function

Another option is to define a separate named function.

Example:

```dart id="zbhwq8"
void rollDice() {
  print('Rolling dice...');
}
```

Then pass the function to `onPressed`.

```dart id="f5hjkw"
TextButton(
  onPressed: rollDice,
  child: const Text('Roll Dice'),
)
```

This is often cleaner when the function contains more logic.

---

## 14. Important: Do Not Add Parentheses

When passing a function as a value, do not call it.

Correct:

```dart id="9btn8j"
onPressed: rollDice
```

Incorrect:

```dart id="ifou0n"
onPressed: rollDice()
```

Why?

```dart id="afjjlh"
rollDice
```

means:

```text id="238bi9"
Pass the function itself.
```

But:

```dart id="wwar8w"
rollDice()
```

means:

```text id="3q44zt"
Call the function immediately.
```

Flutter needs the function reference so it can call the function later when the button is pressed.

---

## 15. Named Function Example in a Widget

```dart id="ua7l4f"
class DiceRoller extends StatelessWidget {
  const DiceRoller({super.key});

  void rollDice() {
    print('Dice rolled!');
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image.asset(
          'assets/images/dice-2.png',
          width: 200,
        ),
        TextButton(
          onPressed: rollDice,
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

The button now calls `rollDice` when pressed.

---

## 16. Arrow Function Syntax

If a function only contains one expression, you can use arrow syntax.

Example:

```dart id="l7xozp"
onPressed: () => print('Button pressed!')
```

This is a shorter version of:

```dart id="owhrjv"
onPressed: () {
  print('Button pressed!');
}
```

Arrow functions are useful for simple one-line actions.

---

## 17. Three Ways to Handle Button Presses

### 1. Anonymous Function

```dart id="7964hj"
TextButton(
  onPressed: () {
    print('Button pressed!');
  },
  child: const Text('Roll Dice'),
)
```

### 2. Named Function

```dart id="td83et"
void rollDice() {
  print('Dice rolled!');
}

TextButton(
  onPressed: rollDice,
  child: const Text('Roll Dice'),
)
```

### 3. Arrow Function

```dart id="q5tf32"
TextButton(
  onPressed: () => print('Dice rolled!'),
  child: const Text('Roll Dice'),
)
```

All three are valid.

---

## 18. Which Approach Should You Use?

Use an anonymous function for short, simple logic.

```dart id="wi5i1n"
onPressed: () {
  print('Pressed');
}
```

Use a named function when the logic is more important, longer, or reused.

```dart id="hr0f7i"
onPressed: rollDice
```

Use an arrow function for simple one-line logic.

```dart id="vwbcmz"
onPressed: () => print('Pressed')
```

In real Flutter apps, named functions are often preferred for clearer code.

---

## 19. Full Example: Dice Image with Button

```dart id="34k4rg"
import 'package:flutter/material.dart';

class DiceRoller extends StatelessWidget {
  const DiceRoller({super.key});

  void rollDice() {
    print('Changing dice image...');
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          Image.asset(
            'assets/images/dice-2.png',
            width: 200,
          ),
          TextButton(
            onPressed: rollDice,
            child: const Text('Roll Dice'),
          ),
        ],
      ),
    );
  }
}
```

This adds a button below the dice image.

When the button is pressed, `rollDice` runs.

---

## 20. Improving the Layout

By default, a `Column` takes as much vertical space as possible.

This can make the content appear too high on the screen.

To keep the image and button grouped together, you can use:

```dart id="icyd21"
mainAxisSize: MainAxisSize.min
```

Example:

```dart id="tzjgno"
Center(
  child: Column(
    mainAxisSize: MainAxisSize.min,
    children: [
      Image.asset(
        'assets/images/dice-2.png',
        width: 200,
      ),
      TextButton(
        onPressed: rollDice,
        child: const Text('Roll Dice'),
      ),
    ],
  ),
)
```

This makes the column only take the space its children need.

---

## 21. Complete Example with Better Layout

```dart id="d9zkzv"
import 'package:flutter/material.dart';

class DiceRoller extends StatelessWidget {
  const DiceRoller({super.key});

  void rollDice() {
    print('Dice rolled!');
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/dice-2.png',
            width: 200,
          ),
          TextButton(
            onPressed: rollDice,
            child: const Text('Roll Dice'),
          ),
        ],
      ),
    );
  }
}
```

This creates a clean vertical layout:

```text id="j0lz8j"
Dice image
Roll Dice button
```

---

## 22. Button Types Example

```dart id="5kui0d"
Column(
  children: [
    ElevatedButton(
      onPressed: () {
        print('ElevatedButton pressed!');
      },
      child: const Text('ElevatedButton'),
    ),
    OutlinedButton(
      onPressed: () {
        print('OutlinedButton pressed!');
      },
      child: const Text('OutlinedButton'),
    ),
    TextButton(
      onPressed: () {
        print('TextButton pressed!');
      },
      child: const Text('TextButton'),
    ),
  ],
)
```

You can experiment with all three button types.

---

## 23. Common Mistake: Calling the Function Immediately

Incorrect:

```dart id="rbawtr"
TextButton(
  onPressed: rollDice(),
  child: const Text('Roll Dice'),
)
```

This calls `rollDice` immediately when the widget is built.

Correct:

```dart id="jmkpfp"
TextButton(
  onPressed: rollDice,
  child: const Text('Roll Dice'),
)
```

This passes the function to the button.

The button calls it later when pressed.

---

## Key Points

* `Center` can only directly contain one child widget.
* Use `Column` to display multiple widgets vertically.
* Use `Row` to display multiple widgets horizontally.
* `Column.children` expects a `List<Widget>`.
* Flutter provides `TextButton`, `ElevatedButton`, and `OutlinedButton`.
* A button needs a child widget, usually `Text`.
* The `onPressed` parameter controls what happens when the button is pressed.
* `onPressed` expects a function or `null`.
* Functions are values in Dart.
* Anonymous functions can be written inline.
* Named functions can be passed without parentheses.
* Arrow functions are shorthand for simple one-line functions.
* `onPressed: null` disables the button.

---

## Summary

To add a button below the dice image, wrap the image and button in a `Column`.

Example:

```dart id="dfjswf"
Column(
  children: [
    Image.asset('assets/images/dice-2.png'),
    TextButton(
      onPressed: rollDice,
      child: const Text('Roll Dice'),
    ),
  ],
)
```

The key concept is that `onPressed` receives a function as a value.

Correct:

```dart id="eakyme"
onPressed: rollDice
```

Incorrect:

```dart id="0kdyh0"
onPressed: rollDice()
```

Passing functions as values is essential in Flutter because user interactions are handled through callbacks.
