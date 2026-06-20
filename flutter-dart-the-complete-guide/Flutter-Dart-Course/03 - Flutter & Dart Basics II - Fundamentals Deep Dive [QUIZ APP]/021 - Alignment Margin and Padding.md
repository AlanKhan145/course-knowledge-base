# Alignment, Margin, and Padding

## Overview

This lecture explains three important layout concepts in Flutter:

1. Alignment
2. Margin
3. Padding

These concepts help control where widgets appear and how much spacing they have around or inside them.

In the Quiz App, we use these layout tools to improve the appearance of the answer buttons and question text. The answer buttons should stretch across the available width, but there should still be some empty space on the left and right sides of the screen.

---

## Goal

The goal is to improve the layout of the questions screen by:

1. Making answer buttons take up the available width.
2. Adding space around the column.
3. Centering the question text.
4. Preparing the screen for the next steps, such as shuffling answers and moving to the next question.

---

## Key Points

* `crossAxisAlignment` controls horizontal alignment in a `Column`.
* `CrossAxisAlignment.stretch` makes child widgets fill the available width.
* `margin` adds spacing outside a widget.
* `padding` adds spacing inside a widget.
* `Container` supports both `margin` and `padding`.
* `Padding` is used when you only need internal spacing around a child.
* `EdgeInsets` defines spacing values.
* `TextAlign.center` centers text horizontally inside a `Text` widget.
* `SizedBox` is useful for simple spacing between widgets.

---

## Main Axis and Cross Axis in a `Column`

In a `Column`, the main axis is vertical.

```text id="8w1zre"
top ↓ bottom
```

The cross axis is horizontal.

```text id="3i22v6"
left → right
```

Therefore:

```dart id="o1x53m"
mainAxisAlignment
```

controls vertical alignment.

```dart id="5bzrs6"
crossAxisAlignment
```

controls horizontal alignment.

---

## Stretching Children Horizontally

To make all children inside a `Column` take up the full available width, use:

```dart id="onxq62"
crossAxisAlignment: CrossAxisAlignment.stretch,
```

Example:

```dart id="ckkp4u"
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    Text('Question'),
    AnswerButton(
      answerText: 'Answer 1',
      onTap: () {},
    ),
  ],
)
```

This makes the answer buttons stretch horizontally.

---

## The Problem with Stretching

When using:

```dart id="sdi307"
CrossAxisAlignment.stretch
```

the buttons stretch to fill the entire column width.

If the column takes up the full screen width, the buttons may touch the edges of the screen.

That usually does not look good.

To fix this, we add margin or padding around the column.

---

## Margin vs Padding

Margin and padding both create spacing, but they are used differently.

### Padding

Padding is spacing inside a widget.

It creates space between the widget’s content and its boundary.

Example:

```dart id="hsbiv5"
Padding(
  padding: const EdgeInsets.all(16),
  child: Text('Padded text'),
)
```

---

### Margin

Margin is spacing outside a widget.

It creates space between one widget and surrounding widgets.

Example:

```dart id="dknyd0"
Container(
  margin: const EdgeInsets.all(16),
  child: Text('Text with margin'),
)
```

---

## Using `Container` for Margin

To add space around the entire `Column`, wrap the `Column` with a `Container`.

```dart id="oqqy2z"
Container(
  margin: const EdgeInsets.all(40),
  child: Column(
    children: [
      Text('Question'),
      AnswerButton(
        answerText: 'Answer 1',
        onTap: () {},
      ),
    ],
  ),
)
```

Here:

```dart id="6v2f78"
EdgeInsets.all(40)
```

adds `40` pixels of margin on all sides:

* Top
* Bottom
* Left
* Right

---

## `EdgeInsets.all()`

Use `EdgeInsets.all()` when you want the same spacing on every side.

```dart id="1oemr8"
const EdgeInsets.all(20)
```

This applies:

```text id="gi4t3z"
top: 20
right: 20
bottom: 20
left: 20
```

---

## `EdgeInsets.symmetric()`

Use `EdgeInsets.symmetric()` when you want different spacing for horizontal and vertical directions.

```dart id="v6fe1v"
const EdgeInsets.symmetric(
  horizontal: 20,
  vertical: 10,
)
```

This applies:

```text id="dkj0p6"
left: 20
right: 20
top: 10
bottom: 10
```

---

## `EdgeInsets.only()`

Use `EdgeInsets.only()` when you want to set spacing for specific sides.

```dart id="i8zcap"
const EdgeInsets.only(
  top: 30,
  bottom: 10,
)
```

This only applies spacing to the top and bottom.

---

## `EdgeInsets.fromLTRB()`

Another option is:

```dart id="9o3osg"
const EdgeInsets.fromLTRB(10, 20, 30, 40)
```

The order is:

```text id="sphcl3"
left, top, right, bottom
```

This is useful when all four sides need different values.

---

## Centering Text

To center text horizontally, use the `textAlign` argument on the `Text` widget.

```dart id="9syakr"
Text(
  currentQuestion.text,
  textAlign: TextAlign.center,
)
```

Important: `textAlign` is set on the `Text` widget itself, not inside `TextStyle`.

Correct:

```dart id="zb1j7x"
Text(
  'Question',
  textAlign: TextAlign.center,
  style: const TextStyle(
    color: Colors.white,
  ),
)
```

Incorrect:

```dart id="7zjh96"
Text(
  'Question',
  style: const TextStyle(
    color: Colors.white,
    // textAlign does not belong here
  ),
)
```

---

## Code Example: Improved Questions Screen Layout

```dart id="lsm661"
Container(
  margin: const EdgeInsets.all(40),
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      Text(
        currentQuestion.text,
        style: const TextStyle(
          color: Colors.white,
        ),
        textAlign: TextAlign.center,
      ),
      const SizedBox(height: 30),
      ...currentQuestion.answers.map(
        (answer) => AnswerButton(
          answerText: answer,
          onTap: () {},
        ),
      ),
    ],
  ),
)
```

This layout:

* Centers the content vertically.
* Stretches the answer buttons horizontally.
* Adds margin around the entire column.
* Centers the question text.
* Dynamically creates answer buttons from the answers list.

---

## Full Example

```dart id="a65z81"
@override
Widget build(BuildContext context) {
  final currentQuestion = questions[0];

  return SizedBox(
    width: double.infinity,
    child: Container(
      margin: const EdgeInsets.all(40),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            currentQuestion.text,
            style: const TextStyle(
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 30),
          ...currentQuestion.answers.map(
            (answer) => AnswerButton(
              answerText: answer,
              onTap: () {},
            ),
          ),
        ],
      ),
    ),
  );
}
```

---

## Using the `Padding` Widget

If you only need padding, you can use the `Padding` widget instead of a `Container`.

```dart id="aj1jc9"
Padding(
  padding: const EdgeInsets.all(40),
  child: Column(
    children: [
      Text('Question'),
      AnswerButton(
        answerText: 'Answer',
        onTap: () {},
      ),
    ],
  ),
)
```

This is often clearer when no decoration, background color, or margin is needed.

---

## Using `Container` with Padding and Margin

A `Container` can have both margin and padding.

```dart id="j7hfp7"
Container(
  margin: const EdgeInsets.symmetric(
    horizontal: 20,
    vertical: 10,
  ),
  padding: const EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(12),
  ),
  child: const Text('Card content'),
)
```

Here:

* `margin` creates space outside the container.
* `padding` creates space inside the container.
* `decoration` styles the container.

---

## Using `SizedBox` for Simple Spacing

For simple space between widgets, use `SizedBox`.

Vertical spacing:

```dart id="j75y5m"
const SizedBox(height: 16)
```

Horizontal spacing:

```dart id="qdksxg"
const SizedBox(width: 8)
```

This is commonly used inside `Column` and `Row`.

---

## When to Use Each Tool

| Tool                       | Use Case                                     |
| -------------------------- | -------------------------------------------- |
| `SizedBox`                 | Simple fixed spacing                         |
| `Padding`                  | Add spacing around one child                 |
| `Container` with `margin`  | Add spacing outside a widget                 |
| `Container` with `padding` | Add spacing inside a styled box              |
| `Align`                    | Align one child inside available space       |
| `Center`                   | Center one child horizontally and vertically |
| `crossAxisAlignment`       | Align children inside `Column` or `Row`      |

---

## Notes

Use `Padding` when you only need spacing around a child.

Use `Container` when you need additional features such as:

* Margin
* Padding
* Background color
* Border radius
* Decoration
* Constraints

Use `SizedBox` when you only need fixed empty space.

In the Quiz App, wrapping the `Column` with a `Container` and adding margin creates space around the answer buttons while still allowing them to stretch horizontally.

---

## Summary

This lecture explained alignment, margin, and padding in Flutter.

`CrossAxisAlignment.stretch` makes the answer buttons fill the available horizontal space.

A `Container` with `margin: EdgeInsets.all(40)` adds spacing around the column so the buttons do not touch the edges of the screen.

`TextAlign.center` centers the question text horizontally.

Together, these layout tools help create a cleaner and more polished questions screen.
