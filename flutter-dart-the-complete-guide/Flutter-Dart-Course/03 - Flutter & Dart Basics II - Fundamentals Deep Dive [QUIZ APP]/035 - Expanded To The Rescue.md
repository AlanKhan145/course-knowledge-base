# Expanded to the Rescue

## Overview

This lecture introduces the `Expanded` widget and shows how it can fix layout overflow issues in Flutter.

In the quiz results screen, the summary data is displayed using a `Row` that contains the question number and a `Column` with the question text, the user’s answer, and the correct answer.

However, some text is too long to fit on one line. This causes Flutter to show an overflow warning because the content goes outside the screen boundaries.

To fix this, the inner `Column` inside the `Row` should be wrapped with an `Expanded` widget.

## Key Points

* `Expanded` is used inside `Row`, `Column`, or `Flex`.
* It makes its child take the available remaining space along the parent’s main axis.
* In a `Row`, the main axis is horizontal.
* In a `Column`, the main axis is vertical.
* `Expanded` helps prevent layout overflow.
* In this lecture, `Expanded` is used to restrict the width of the inner `Column`.
* Once the `Column` has a limited width, long text can wrap onto multiple lines.
* This fixes the ugly overflow warning shown by Flutter during development.

## The Problem

The quiz results summary currently displays basic data, but the layout is broken.

Some content does not fit inside the screen boundaries.

Flutter shows a warning that some widgets are overflowing the available space.

This usually happens when a widget inside a `Row` tries to take more horizontal space than the screen allows.

## Where the Problem Happens

Inside `questions_summary.dart`, the layout looks like this:

```dart id="8kbhl9"
Row(
  children: [
    Text(((data['question_index'] as int) + 1).toString()),
    Column(
      children: [
        Text(data['question'] as String),
        const SizedBox(height: 5),
        Text(data['user_answer'] as String),
        Text(data['correct_answer'] as String),
      ],
    ),
  ],
)
```

The problem is not the outer `Column`.

The problem is the inner `Column` inside the `Row`.

This inner `Column` contains long text, and without width restrictions, it can grow beyond the screen width.

## The Solution: Wrap the Inner Column with `Expanded`

To fix the overflow issue, wrap the inner `Column` with `Expanded`:

```dart id="8bu8ve"
Row(
  children: [
    Text(((data['question_index'] as int) + 1).toString()),
    Expanded(
      child: Column(
        children: [
          Text(data['question'] as String),
          const SizedBox(height: 5),
          Text(data['user_answer'] as String),
          Text(data['correct_answer'] as String),
        ],
      ),
    ),
  ],
)
```

After this change, long text can break across multiple lines instead of overflowing outside the screen.

The layout is still not fully styled yet, but the overflow problem is improved.

## Why `Expanded` Works

The name `Expanded` may sound like it simply makes the child widget bigger.

In some situations, it does allow the child to fill available space.

However, in this case, it actually helps restrict the width of the child.

Without `Expanded`, the `Column` inside the `Row` can try to take more width than the screen allows.

With `Expanded`, Flutter gives the inner `Column` only the available horizontal space inside the `Row`.

This means the `Column` cannot grow beyond the width of the screen.

## Understanding the Main Axis

`Expanded` works along the main axis of its parent flex widget.

A flex widget is usually a `Row`, `Column`, or `Flex`.

For a `Row`:

```txt id="98zskf"
main axis = horizontal
cross axis = vertical
```

For a `Column`:

```txt id="r0u5dy"
main axis = vertical
cross axis = horizontal
```

In this lecture, `Expanded` is used inside a `Row`.

Therefore, it controls the available horizontal space.

## Expanded Inside a Row

When `Expanded` is used inside a `Row`, it tells Flutter:

> This child should take the remaining horizontal space, but it must stay within the row’s available width.

Example:

```dart id="z8hfxh"
Row(
  children: [
    Text('1'),
    Expanded(
      child: Text(
        'This is a very long question that should wrap onto multiple lines.',
      ),
    ),
  ],
)
```

The text now has a limited width, so it wraps instead of overflowing.

## Updated `QuestionsSummary` Widget

```dart id="8kwyy8"
import 'package:flutter/material.dart';

class QuestionsSummary extends StatelessWidget {
  const QuestionsSummary(this.summaryData, {super.key});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: summaryData.map((data) {
        return Row(
          children: [
            Text(((data['question_index'] as int) + 1).toString()),
            Expanded(
              child: Column(
                children: [
                  Text(data['question'] as String),
                  const SizedBox(height: 5),
                  Text(data['user_answer'] as String),
                  Text(data['correct_answer'] as String),
                ],
              ),
            ),
          ],
        );
      }).toList(),
    );
  }
}
```

## Why Text Wraps After Using `Expanded`

Before using `Expanded`, the text inside the inner `Column` did not have a clear maximum width.

Because of that, it tried to stay on one line and overflowed outside the screen.

After using `Expanded`, the inner `Column` receives a fixed amount of available horizontal space.

Now the `Text` widgets know how much width they can use.

As a result, long text automatically wraps onto multiple lines.

## Multiple Expanded Widgets

You can also use more than one `Expanded` widget inside the same `Row`.

By default, each `Expanded` widget gets an equal share of the available space.

```dart id="c3hhtq"
Row(
  children: [
    Expanded(
      child: Container(height: 50),
    ),
    Expanded(
      child: Container(height: 50),
    ),
  ],
)
```

You can control the ratio with the `flex` parameter:

```dart id="wutzin"
Row(
  children: [
    Expanded(
      flex: 2,
      child: Container(height: 50),
    ),
    Expanded(
      flex: 1,
      child: Container(height: 50),
    ),
  ],
)
```

In this example:

* the first child gets two parts of the space,
* the second child gets one part of the space.

## Expanded vs Flexible

`Expanded` forces its child to fill the available space.

`Flexible` is less strict and allows its child to be smaller if it does not need all the available space.

Example:

```dart id="z3apt7"
Flexible(
  child: Text('Some text'),
)
```

In many layout overflow cases, `Expanded` is the simplest and most common solution.

## Notes

The `RenderFlex overflowed` warning is one of the most common layout errors in Flutter.

It often happens when widgets inside a `Row` or `Column` do not fit into the available space.

A common fix is to wrap the overflowing child with:

```dart id="06re0v"
Expanded
```

or:

```dart id="2d317z"
Flexible
```

In this lecture, `Expanded` is the correct choice because the inner `Column` should use the remaining horizontal space inside the `Row`.

## Summary

This lecture shows how the `Expanded` widget fixes the overflow problem in the quiz results summary layout.

The issue happens because the inner `Column` inside a `Row` tries to take too much horizontal space.

Wrapping that inner `Column` with `Expanded` restricts it to the available width of the `Row`. This allows long text to wrap across multiple lines instead of overflowing outside the screen.

The layout is now functionally better, and the remaining styling improvements will be handled next.
