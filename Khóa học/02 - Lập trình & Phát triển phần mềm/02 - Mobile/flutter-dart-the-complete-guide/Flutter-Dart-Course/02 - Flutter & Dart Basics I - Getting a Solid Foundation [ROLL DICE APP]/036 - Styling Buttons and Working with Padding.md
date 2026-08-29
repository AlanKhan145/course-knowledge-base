# Styling Buttons and Working with Padding

## Overview

This lecture explains how to style Flutter buttons and how to add spacing between widgets.

In the Roll Dice app, we already added a dice image and a button. However, the layout and button style still need improvement.

This lecture focuses on:

* Centering the image and button properly
* Styling a `TextButton`
* Using `TextButton.styleFrom()`
* Adding spacing with padding
* Adding spacing with `SizedBox`
* Understanding the difference between padding and fixed-size spacing

---

## 1. The Current Problem

After adding the image and button, the UI may look strange.

The button and image might appear too high on the screen, even though they are inside a `Center` widget.

Example structure:

```dart id="6e7g1k"
Center(
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
)
```

At first, it may seem like `Center` should center everything.

But the issue comes from `Column`.

---

## 2. Why the Column Is Not Vertically Centered

A `Column` takes as much vertical space as possible by default.

This means the `Column` fills the available height.

The content inside the column is then placed at the top of that column.

So even though the `Column` itself is centered horizontally, it still takes the full vertical space.

That is why the image and button may appear too high.

---

## 3. Understanding the Main Axis

Every `Column` has a main axis.

For a `Column`, the main axis is vertical.

```text id="ca91lz"
Column main axis = vertical
```

For a `Row`, the main axis is horizontal.

```text id="26xp15"
Row main axis = horizontal
```

The `mainAxisSize` property controls how much space the widget takes along its main axis.

---

## 4. `MainAxisSize.max` vs `MainAxisSize.min`

A `Column` has two main options for `mainAxisSize`.

### `MainAxisSize.max`

This is the default.

The column takes as much vertical space as possible.

```dart id="m9fgrk"
mainAxisSize: MainAxisSize.max
```

### `MainAxisSize.min`

The column only takes as much vertical space as its children need.

```dart id="c4vnlv"
mainAxisSize: MainAxisSize.min
```

For this app, we want:

```dart id="k5vwks"
mainAxisSize: MainAxisSize.min
```

This allows `Center` to center the entire column vertically.

---

## 5. Centering the Dice and Button

```dart id="5qq2xm"
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

Now the dice image and button are centered vertically as a group.

---

## 6. Styling a `TextButton`

To style a `TextButton`, use the `style` parameter.

Example:

```dart id="33ngbi"
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

The `style` parameter expects a `ButtonStyle`.

The easiest way to create one is with:

```dart id="oqwr90"
TextButton.styleFrom()
```

---

## 7. Why Put `child` Last?

Flutter commonly places widget arguments such as `child` and `children` at the end.

Example:

```dart id="5z09yx"
TextButton(
  onPressed: rollDice,
  style: TextButton.styleFrom(...),
  child: const Text('Roll Dice'),
)
```

This is not technically required, but it is a common Flutter style convention.

It makes widget trees easier to read.

---

## 8. `foregroundColor`

For a `TextButton`, the `foregroundColor` controls the text color.

Example:

```dart id="h65rg7"
foregroundColor: Colors.white
```

Full example:

```dart id="89fol1"
TextButton(
  onPressed: rollDice,
  style: TextButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  child: const Text('Roll Dice'),
)
```

This changes the button text color to white.

---

## 9. `textStyle`

The `textStyle` parameter controls the style of the text inside the button.

Example:

```dart id="pqardm"
textStyle: const TextStyle(
  fontSize: 28,
)
```

Full example:

```dart id="vcd2vn"
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

This makes the button text larger.

---

## 10. Adding Padding to a Button

Padding is spacing inside a widget.

It creates space between the widget's content and its boundary.

For a button, padding can make the clickable area larger.

Example:

```dart id="qseb86"
TextButton(
  onPressed: rollDice,
  style: TextButton.styleFrom(
    foregroundColor: Colors.white,
    padding: const EdgeInsets.only(
      top: 20,
    ),
    textStyle: const TextStyle(
      fontSize: 28,
    ),
  ),
  child: const Text('Roll Dice'),
)
```

This adds padding above the button's text.

---

## 11. What Is `EdgeInsets`?

`EdgeInsets` is used to define spacing around or inside widgets.

It is commonly used for:

* Padding
* Margins
* Spacing around content
* Button spacing

Example:

```dart id="20a1cr"
EdgeInsets.all(16)
```

This adds spacing on all sides.

---

## 12. Common `EdgeInsets` Constructors

### `EdgeInsets.all()`

Adds the same padding on all sides.

```dart id="pi2rfb"
const EdgeInsets.all(16)
```

This means:

```text id="zuqj2b"
left: 16
top: 16
right: 16
bottom: 16
```

---

### `EdgeInsets.symmetric()`

Adds padding symmetrically.

```dart id="asyyxw"
const EdgeInsets.symmetric(
  horizontal: 32,
  vertical: 16,
)
```

This means:

```text id="5d2n46"
left and right: 32
top and bottom: 16
```

---

### `EdgeInsets.only()`

Adds padding only to specific sides.

```dart id="fa75s5"
const EdgeInsets.only(
  top: 20,
)
```

This adds padding only at the top.

You can also use:

```dart id="g7wot7"
const EdgeInsets.only(
  left: 12,
  top: 8,
  right: 12,
  bottom: 8,
)
```

---

### `EdgeInsets.fromLTRB()`

Adds padding in this order:

```text id="uao4g6"
left, top, right, bottom
```

Example:

```dart id="lqdxpf"
const EdgeInsets.fromLTRB(12, 8, 12, 8)
```

---

## 13. Alternative: Add Space with `SizedBox`

Instead of adding padding to the button, you can add a separate spacing widget between the image and the button.

Use `SizedBox`.

Example:

```dart id="q4gmps"
const SizedBox(height: 20)
```

This creates an invisible box with a height of `20`.

---

## 14. Adding `SizedBox` Between Image and Button

```dart id="4qsub5"
Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    Image.asset(
      'assets/images/dice-2.png',
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
)
```

This adds vertical space between the dice image and the button.

---

## 15. Padding vs `SizedBox`

Both padding and `SizedBox` can create spacing, but they work differently.

### Padding

Padding adds space inside or around a widget.

Example:

```dart id="gcfzsu"
Padding(
  padding: const EdgeInsets.all(16),
  child: Text('Hello'),
)
```

The padding belongs to the wrapped widget.

---

### `SizedBox`

`SizedBox` creates a box with a fixed width or height.

Example:

```dart id="bzyvr8"
const SizedBox(height: 20)
```

It can be used as an invisible spacer.

---

## 16. Important Difference

Most widgets size themselves based on their content.

For example, a `Text` widget is only as wide and tall as needed to display its text.

A `SizedBox` is different.

It has a fixed width and height if you set them.

Example:

```dart id="9x4mti"
SizedBox(
  width: 100,
  height: 50,
  child: Text('Very long text'),
)
```

If the child needs more space than the `SizedBox` allows, the content may be clipped or overflow.

---

## 17. Button Styling with More Options

Other button types also use `styleFrom()`.

Example with `ElevatedButton`:

```dart id="ei7t9r"
ElevatedButton(
  onPressed: rollDice,
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.deepPurple,
    foregroundColor: Colors.white,
    padding: const EdgeInsets.symmetric(
      horizontal: 32,
      vertical: 16,
    ),
    textStyle: const TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.bold,
    ),
    elevation: 8,
  ),
  child: const Text('Roll Dice'),
)
```

Here:

```dart id="nqjc2l"
backgroundColor
```

controls the button background.

```dart id="0wne5l"
foregroundColor
```

controls the text and icon color.

```dart id="bmlduq"
padding
```

controls the internal spacing.

```dart id="8ozlld"
textStyle
```

controls the button text style.

```dart id="2ms9ee"
elevation
```

controls the shadow depth.

---

## 18. Button Shape

You can also style the button shape.

Example:

```dart id="dn03dr"
shape: RoundedRectangleBorder(
  borderRadius: BorderRadius.circular(12),
)
```

Full example:

```dart id="4bsvk8"
ElevatedButton(
  onPressed: rollDice,
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.deepPurple,
    foregroundColor: Colors.white,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(12),
    ),
  ),
  child: const Text('Roll Dice'),
)
```

---

## 19. Complete Example with Styled `TextButton`

```dart id="hpojut"
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

This version:

* Centers the image and button vertically
* Adds spacing between them
* Makes the button text white
* Increases the button font size

---

## 20. Complete Example with Padding Instead of `SizedBox`

```dart id="kfbx40"
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
            style: TextButton.styleFrom(
              foregroundColor: Colors.white,
              padding: const EdgeInsets.only(
                top: 20,
              ),
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

This version adds spacing through button padding instead of a separate `SizedBox`.

---

## 21. Which Spacing Method Should You Use?

Use `SizedBox` when you want simple spacing between widgets.

Example:

```dart id="ydl10q"
const SizedBox(height: 20)
```

Use `Padding` when you want to add spacing around a specific widget.

Example:

```dart id="faia2l"
Padding(
  padding: const EdgeInsets.all(16),
  child: Text('Hello'),
)
```

Use button padding when you want to make the button itself feel larger.

Example:

```dart id="so1icc"
padding: const EdgeInsets.symmetric(
  horizontal: 32,
  vertical: 16,
)
```

---

## Key Points

* `Column` takes maximum vertical space by default.
* Use `mainAxisSize: MainAxisSize.min` to make the column only as tall as its children.
* Button styling is done through the `style` parameter.
* `TextButton.styleFrom()` creates a `ButtonStyle`.
* `foregroundColor` controls the button text and icon color.
* `textStyle` controls the button text style.
* `padding` adds internal spacing.
* `EdgeInsets` defines padding values.
* `EdgeInsets.all()` adds padding on all sides.
* `EdgeInsets.symmetric()` adds horizontal and vertical padding.
* `EdgeInsets.only()` adds padding to selected sides.
* `SizedBox` can be used as an invisible spacer.
* `SizedBox` has fixed dimensions when width or height is set.
* Use `child` and `children` near the end of widget argument lists for readability.

---

## Summary

To center the dice image and button vertically, set the column's main axis size to `min`:

```dart id="xpmgxt"
mainAxisSize: MainAxisSize.min
```

To style a `TextButton`, use:

```dart id="tzm340"
TextButton.styleFrom(
  foregroundColor: Colors.white,
  textStyle: const TextStyle(
    fontSize: 28,
  ),
)
```

To add spacing between widgets, use a `SizedBox`:

```dart id="vtf9m4"
const SizedBox(height: 20)
```

or add padding with `EdgeInsets`:

```dart id="bhvmma"
padding: const EdgeInsets.only(top: 20)
```

These tools help create cleaner, better-spaced, and more professional Flutter layouts.
