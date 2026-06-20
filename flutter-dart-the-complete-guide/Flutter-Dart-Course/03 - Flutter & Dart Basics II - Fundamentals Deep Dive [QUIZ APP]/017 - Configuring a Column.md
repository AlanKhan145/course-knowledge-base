# Configuring a `Column`

## Overview

This lecture focuses on configuring the `Column` widget in Flutter.

A `Column` is used when you want to place multiple widgets vertically, one below another. In the Quiz App, the questions screen needs to display a question at the top and multiple answer buttons below it. This kind of vertical layout is a perfect use case for a `Column`.

The lecture also explains how to control the size, width, and alignment of a `Column` by using properties such as `mainAxisAlignment`, `crossAxisAlignment`, and `mainAxisSize`.

---

## Goal

The goal is to build the basic layout of the questions screen.

The screen should contain:

1. A question text.
2. Some vertical spacing.
3. Multiple answer buttons.
4. Centered content.
5. A layout that uses the available screen width.

---

## Key Points

* A `Column` arranges child widgets vertically.
* The `children` property receives a list of widgets.
* The main axis of a `Column` is vertical.
* The cross axis of a `Column` is horizontal.
* `mainAxisAlignment` controls vertical alignment.
* `crossAxisAlignment` controls horizontal alignment.
* `mainAxisSize` controls how much vertical space the `Column` uses.
* `double.infinity` tells a widget to take as much width as possible.
* `SizedBox` can be used to add spacing or control size.
* `MainAxisAlignment.center` centers children vertically.
* `CrossAxisAlignment.stretch` makes children fill the available width.

---

## Basic `Column` Structure

A `Column` receives its children through the `children` argument.

```dart
Column(
  children: [
    Text('The question'),
    SizedBox(height: 30),
    ElevatedButton(
      onPressed: () {},
      child: Text('Answer 1'),
    ),
  ],
)
```

This places the widgets vertically:

```text
The question
[spacing]
Answer button
```

---

## Adding Question Text and Answer Buttons

On the questions screen, we want to show the question text first.

Then we add some spacing.

After that, we add answer buttons.

```dart
Column(
  children: [
    const Text('The question'),
    const SizedBox(height: 30),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 1'),
    ),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 2'),
    ),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 3'),
    ),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 4'),
    ),
  ],
)
```

This is only a temporary hardcoded version. Later, the answers will be generated dynamically from the quiz data.

---

## Why the Whole List Cannot Be `const`

If all widgets in the `children` list are constant, you can mark the whole list as `const`.

However, in this example, `ElevatedButton` is not constant because it receives a function for `onPressed`.

Therefore, the whole list cannot be marked as `const`.

Instead, only the widgets that can be constant should be marked individually:

```dart
const Text('The question'),
const SizedBox(height: 30),
```

---

## Taking the Full Available Width

By default, the `Column` only takes as much horizontal space as it needs.

If we want the layout to take the full available width, we can wrap the `Column` with a `SizedBox`.

```dart
SizedBox(
  width: double.infinity,
  child: Column(
    children: [
      const Text('The question'),
      const SizedBox(height: 30),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Answer 1'),
      ),
    ],
  ),
)
```

The value:

```dart
double.infinity
```

means:

```text
Use as much width as possible.
```

This makes the `SizedBox` take the full available width, and the `Column` inside it can use that width.

---

## Main Axis and Cross Axis

For a `Column`, the main axis is vertical.

```text
Column main axis:
top ↓ bottom
```

The cross axis is horizontal.

```text
Column cross axis:
left → right
```

This is important because different alignment properties affect different axes.

---

## `mainAxisAlignment`

`mainAxisAlignment` controls how the children are positioned vertically inside a `Column`.

Example:

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    const Text('The question'),
    const SizedBox(height: 30),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 1'),
    ),
  ],
)
```

The value:

```dart
MainAxisAlignment.center
```

centers the children vertically.

---

## Common `mainAxisAlignment` Values

| Value                            | Meaning                                              |
| -------------------------------- | ---------------------------------------------------- |
| `MainAxisAlignment.start`        | Places children at the top                           |
| `MainAxisAlignment.center`       | Centers children vertically                          |
| `MainAxisAlignment.end`          | Places children at the bottom                        |
| `MainAxisAlignment.spaceAround`  | Adds equal space around children                     |
| `MainAxisAlignment.spaceBetween` | Adds space between children                          |
| `MainAxisAlignment.spaceEvenly`  | Adds equal space before, between, and after children |

---

## `crossAxisAlignment`

`crossAxisAlignment` controls how children are positioned horizontally inside a `Column`.

Example:

```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 1'),
    ),
  ],
)
```

The value:

```dart
CrossAxisAlignment.stretch
```

makes the children fill the available horizontal space.

This is useful when you want full-width buttons.

---

## Common `crossAxisAlignment` Values

| Value                        | Meaning                                       |
| ---------------------------- | --------------------------------------------- |
| `CrossAxisAlignment.start`   | Aligns children to the left                   |
| `CrossAxisAlignment.center`  | Centers children horizontally                 |
| `CrossAxisAlignment.end`     | Aligns children to the right                  |
| `CrossAxisAlignment.stretch` | Stretches children across the available width |

---

## `mainAxisSize`

`mainAxisSize` controls how much vertical space the `Column` occupies.

Example:

```dart
Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    const Text('The question'),
    const SizedBox(height: 30),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Answer 1'),
    ),
  ],
)
```

There are two main values:

| Value              | Meaning                                                           |
| ------------------ | ----------------------------------------------------------------- |
| `MainAxisSize.max` | The column takes all available vertical space                     |
| `MainAxisSize.min` | The column takes only as much vertical space as its children need |

By default, a `Column` uses:

```dart
MainAxisSize.max
```

---

## Alternative Centering Approach

One way to center a `Column` is to wrap it with a `Center` widget and set `mainAxisSize` to `MainAxisSize.min`.

```dart
Center(
  child: Column(
    mainAxisSize: MainAxisSize.min,
    children: [
      const Text('The question'),
      const SizedBox(height: 30),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Answer 1'),
      ),
    ],
  ),
)
```

Another approach is to use:

```dart
mainAxisAlignment: MainAxisAlignment.center
```

directly inside the `Column`.

Both approaches can work. The best choice depends on the layout you want.

---

## Code Example: Basic Questions Screen Layout

```dart
class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}

class _QuestionsScreenState extends State<QuestionsScreen> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text('The question'),
          const SizedBox(height: 30),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer 1'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer 2'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer 3'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer 4'),
          ),
        ],
      ),
    );
  }
}
```

---

## Improved Version with Styling

```dart
SizedBox(
  width: double.infinity,
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      Text(
        questions[currentQuestionIndex].text,
        style: const TextStyle(
          fontSize: 24,
          fontWeight: FontWeight.bold,
          color: Colors.white,
        ),
        textAlign: TextAlign.center,
      ),
      const SizedBox(height: 30),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Answer 1'),
      ),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Answer 2'),
      ),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Answer 3'),
      ),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Answer 4'),
      ),
    ],
  ),
)
```

---

## Dynamic Answer Buttons

Later, instead of hardcoding the answer buttons, the answers can be generated dynamically.

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    Text(
      questions[currentQuestionIndex].text,
      style: const TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.bold,
        color: Colors.white,
      ),
      textAlign: TextAlign.center,
    ),
    const SizedBox(height: 30),
    ...questions[currentQuestionIndex].answers.map((answer) {
      return ElevatedButton(
        onPressed: () {
          chooseAnswer(answer);
        },
        child: Text(answer),
      );
    }),
  ],
)
```

The `...` spread operator inserts all generated buttons into the `children` list.

---

## Important Notes

`MainAxisAlignment.center` is one of the most commonly used values for a `Column`. It centers all children along the vertical axis.

`CrossAxisAlignment.stretch` is useful when building layouts with full-width buttons.

`double.infinity` is useful when a widget should take as much width as possible.

A `SizedBox` can be used for spacing, but it can also be used to control the size of its child.

When a `Column` is placed inside a scrollable widget, using `MainAxisSize.min` may help avoid layout issues.

---

## Summary

The `Column` widget is used to arrange widgets vertically.

By configuring properties such as `mainAxisAlignment`, `crossAxisAlignment`, and `mainAxisSize`, you can control how the child widgets are positioned and sized.

In the Quiz App, a `Column` is used to display the question text, spacing, and answer buttons. Wrapping the `Column` with a `SizedBox` and using `width: double.infinity` allows the layout to take the full available width, while `MainAxisAlignment.center` centers the content vertically.
