# More on Button Styling

## Overview

This lecture continues improving the visual style of the Quiz App.

At this point, the quiz can start, display questions, and move to the next question when an answer is selected. However, some answer buttons still look rough, especially when the answer text spans multiple lines.

This lecture focuses on improving the appearance of the answer buttons and the question text.

The main improvements are:

1. Centering multi-line answer text.
2. Styling the question text to make it stand out more.
3. Reviewing more button styling options with `ElevatedButton.styleFrom()`.

---

## Goal

The goal is to make the Quiz App UI look cleaner and more polished by:

* Centering answer button text.
* Improving button styling.
* Making question text bigger and bolder.
* Optionally using a custom font family.
* Keeping styles reusable inside custom widgets.

---

## Key Points

* `TextAlign.center` centers text inside a `Text` widget.
* Multi-line button text should be centered for better readability.
* `ElevatedButton.styleFrom()` provides a convenient way to customize button styles.
* `backgroundColor` controls the button fill color.
* `foregroundColor` controls the button text and icon color.
* `padding` controls internal spacing inside the button.
* `shape` controls the button shape.
* `RoundedRectangleBorder` with `BorderRadius.circular()` creates rounded corners.
* `textStyle` controls button label typography.
* Question text can be styled with `TextStyle`.

---

## Centering Answer Button Text

Some answer options may be long enough to wrap onto multiple lines.

Without text alignment, multi-line text may not look centered inside the button.

To fix this, update the `Text` widget inside the custom `AnswerButton`.

```dart id="6cme9m"
child: Text(
  answerText,
  textAlign: TextAlign.center,
),
```

This ensures that all answer text is centered, including text that spans multiple lines.

---

## Updated `AnswerButton`

```dart id="2mwrzb"
import 'package:flutter/material.dart';

class AnswerButton extends StatelessWidget {
  const AnswerButton({
    super.key,
    required this.answerText,
    required this.onTap,
  });

  final String answerText;
  final void Function() onTap;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color.fromARGB(255, 33, 1, 95),
        foregroundColor: Colors.white,
        padding: const EdgeInsets.symmetric(
          vertical: 10,
          horizontal: 40,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(40),
        ),
      ),
      child: Text(
        answerText,
        textAlign: TextAlign.center,
      ),
    );
  }
}
```

---

## Styling the Question Text

The question text should stand out more than the answer options.

We can make it:

* Larger
* Bold
* White
* Centered
* Optionally use a custom font family

Example:

```dart id="jh5cbo"
Text(
  currentQuestion.text,
  style: const TextStyle(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
  textAlign: TextAlign.center,
),
```

---

## Adding a Font Family

If a custom font is configured in the project, it can be applied with `fontFamily`.

```dart id="qb2u0m"
Text(
  currentQuestion.text,
  style: const TextStyle(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.bold,
    fontFamily: 'Lato',
  ),
  textAlign: TextAlign.center,
),
```

The font must be properly added to the project before this works correctly.

---

## `ElevatedButton.styleFrom()`

`ElevatedButton.styleFrom()` is a convenient helper method for styling buttons.

Example:

```dart id="leg08f"
ElevatedButton(
  onPressed: onTap,
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color.fromARGB(255, 33, 1, 95),
    foregroundColor: Colors.white,
    elevation: 0,
    padding: const EdgeInsets.symmetric(
      vertical: 10,
      horizontal: 40,
    ),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(40),
    ),
    textStyle: const TextStyle(
      fontSize: 16,
      fontWeight: FontWeight.w600,
    ),
  ),
  child: Text(
    answerText,
    textAlign: TextAlign.center,
  ),
)
```

---

## Common Button Style Properties

| Property          | Purpose                         |
| ----------------- | ------------------------------- |
| `backgroundColor` | Sets the button fill color      |
| `foregroundColor` | Sets the text and icon color    |
| `padding`         | Adds internal spacing           |
| `shape`           | Controls the button shape       |
| `elevation`       | Controls the shadow             |
| `textStyle`       | Controls the button label style |

---

## Background Color

```dart id="ayytht"
backgroundColor: const Color.fromARGB(255, 33, 1, 95),
```

This sets the fill color of the button.

---

## Foreground Color

```dart id="16rpl7"
foregroundColor: Colors.white,
```

This sets the color of the button text and icons.

---

## Padding

```dart id="zymuck"
padding: const EdgeInsets.symmetric(
  vertical: 10,
  horizontal: 40,
),
```

This adds internal spacing between the button text and the button border.

* `vertical` controls top and bottom padding.
* `horizontal` controls left and right padding.

---

## Rounded Corners

```dart id="53w7yl"
shape: RoundedRectangleBorder(
  borderRadius: BorderRadius.circular(40),
),
```

This gives the button rounded corners.

A higher radius creates a more rounded shape.

---

## Elevation

```dart id="bpk770"
elevation: 0,
```

This removes the button shadow and creates a flatter button style.

Increasing the value creates a stronger shadow.

---

## Text Style

```dart id="valwjg"
textStyle: const TextStyle(
  fontSize: 16,
  fontWeight: FontWeight.w600,
),
```

This changes the style of the button label.

Use this for:

* Font size
* Font weight
* Font family
* Letter spacing

---

## Example: Fully Styled `AnswerButton`

```dart id="67atqo"
import 'package:flutter/material.dart';

class AnswerButton extends StatelessWidget {
  const AnswerButton({
    super.key,
    required this.answerText,
    required this.onTap,
  });

  final String answerText;
  final void Function() onTap;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color.fromARGB(255, 33, 1, 95),
        foregroundColor: Colors.white,
        elevation: 0,
        padding: const EdgeInsets.symmetric(
          vertical: 10,
          horizontal: 40,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(40),
        ),
        textStyle: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w600,
        ),
      ),
      child: Text(
        answerText,
        textAlign: TextAlign.center,
      ),
    );
  }
}
```

---

## Example: Styled Question Text in the Questions Screen

```dart id="ai3vkj"
Text(
  currentQuestion.text,
  style: const TextStyle(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
  textAlign: TextAlign.center,
),
```

This makes the question easier to read and visually more important than the answers.

---

## Example with an `OutlinedButton`

The same styling concepts can also be applied to other button types.

```dart id="3fzp6w"
OutlinedButton(
  onPressed: () {},
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
    side: const BorderSide(
      color: Colors.white,
    ),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(30),
    ),
  ),
  child: const Text('Outlined'),
)
```

---

## When to Use `styleFrom()`

Use `styleFrom()` when you want to quickly configure common button style properties.

It is great for:

* Colors
* Padding
* Shape
* Elevation
* Text style

For more advanced state-based styling, such as different styles for hover, pressed, disabled, or focused states, use a full `ButtonStyle`.

---

## Notes

The `TextAlign.center` setting belongs on the `Text` widget, not inside `TextStyle`.

Correct:

```dart id="e87k6p"
Text(
  answerText,
  textAlign: TextAlign.center,
)
```

Incorrect:

```dart id="hh4cdi"
Text(
  answerText,
  style: TextStyle(
    // textAlign does not belong here
  ),
)
```

Keeping the button style inside the reusable `AnswerButton` widget means all answer buttons are updated from one place.

This keeps the code cleaner and easier to maintain.

---

## Summary

This lecture improved the visual styling of the Quiz App.

The answer button text was centered with `TextAlign.center`, which makes multi-line answers look better.

The question text was styled with a larger, bold font so it stands out more clearly.

The lecture also reviewed important button styling options such as background color, foreground color, padding, rounded corners, elevation, and text style.

Using a reusable custom `AnswerButton` keeps the styling consistent across the entire app.
