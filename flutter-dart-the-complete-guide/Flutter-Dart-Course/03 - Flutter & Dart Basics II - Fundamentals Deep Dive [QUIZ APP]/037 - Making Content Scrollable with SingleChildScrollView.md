# Making Content Scrollable with `SingleChildScrollView`

## Overview

This lecture introduces the `SingleChildScrollView` widget.

In the quiz results screen, the list of question summaries can become too tall for the available screen space. If the content is taller than its container, Flutter may show a render overflow warning.

To fix this, we can give the summary area a fixed height with `SizedBox` and then wrap the content inside that box with `SingleChildScrollView`.

This allows the user to scroll through the question summary list instead of letting the content overflow.

## Key Points

* `SizedBox` can be used to give a widget a fixed height.
* If the child widget is taller than the `SizedBox`, it may overflow.
* `SingleChildScrollView` makes one child widget scrollable.
* The direct child of `SingleChildScrollView` can still contain many widgets.
* A common pattern is wrapping a `Column` with `SingleChildScrollView`.
* `SingleChildScrollView` is useful for scrollable content that is not extremely large.
* For very long lists, `ListView` or `ListView.builder` is usually a better choice.

## The Problem

The quiz results screen displays a list of question summaries.

Each summary item contains:

* the question number,
* the question text,
* the user’s answer,
* the correct answer.

If there are many questions, this list can become too tall for the available space.

Flutter may show a render overflow warning because the content goes beyond the visible screen area.

## Setting a Fixed Height with `SizedBox`

First, we can wrap the summary `Column` with a `SizedBox`.

This gives the summary area a fixed height.

```dart id="jmjsly"
SizedBox(
  height: 300,
  child: Column(
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
  ),
)
```

However, this alone is not enough.

If the `Column` is taller than `300` pixels, it still overflows.

The content may be visually cut off or appear behind other widgets, such as the restart button.

## Adding `SingleChildScrollView`

To make the content scrollable, wrap the inner `Column` with `SingleChildScrollView`.

```dart id="vjhwg5"
SizedBox(
  height: 300,
  child: SingleChildScrollView(
    child: Column(
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
    ),
  ),
)
```

Now the summary area has a fixed height, and the user can scroll through the content inside that box.

## Why `SingleChildScrollView` Works

`SingleChildScrollView` takes one direct child.

In this case, the direct child is a `Column`.

That `Column` can still contain many widgets.

```txt id="v5ti2p"
SingleChildScrollView
 └── Column
      ├── Row
      ├── Row
      ├── Row
      └── Row
```

The `SingleChildScrollView` makes the `Column` scrollable if it becomes taller than the available space.

So instead of overflowing, the content can be dragged and scrolled.

## Full `QuestionsSummary` Example

```dart id="527y2l"
import 'package:flutter/material.dart';

class QuestionsSummary extends StatelessWidget {
  const QuestionsSummary(this.summaryData, {super.key});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 300,
      child: SingleChildScrollView(
        child: Column(
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
        ),
      ),
    );
  }
}
```

## Before Using `SingleChildScrollView`

Before using `SingleChildScrollView`, the summary list may overflow the `SizedBox`.

This can cause Flutter to show a warning such as:

```txt id="6wxuu2"
A RenderFlex overflowed by ... pixels
```

This warning means that the content is larger than the available layout space.

## After Using `SingleChildScrollView`

After wrapping the `Column` with `SingleChildScrollView`, the overflow is fixed.

The content that does not fit inside the fixed-height box is hidden at first, but the user can scroll to see it.

This gives the results screen a cleaner and more controlled layout.

## Common Pattern

A common Flutter pattern is:

```dart id="nky0ko"
SizedBox(
  height: 300,
  child: SingleChildScrollView(
    child: Column(
      children: [
        // many widgets here
      ],
    ),
  ),
)
```

Use this pattern when:

* the content may become taller than the available space,
* you want to keep the area at a fixed height,
* you want the user to scroll inside that area.

## `SingleChildScrollView` vs `ListView`

`SingleChildScrollView` is useful when you have one child that should become scrollable.

This child is often a `Column`.

However, `SingleChildScrollView` renders all its content at once.

For small or medium amounts of content, this is fine.

For very long lists, a `ListView.builder` is better because it builds list items lazily.

Use `SingleChildScrollView` for simple scrollable content.

Use `ListView.builder` for long or performance-sensitive lists.

## Notes

`SingleChildScrollView` is an important Flutter widget because many apps contain content that may not always fit on the screen.

Different devices have different screen sizes, so scrollable layouts are often necessary.

In this quiz app, the question summary list is a good use case because the number of summary items can be larger than the available vertical space.

## Summary

This lecture shows how to make the question summary section scrollable.

First, `SizedBox` is used to give the summary section a fixed height:

```dart id="y2abys"
SizedBox(
  height: 300,
  child: ...
)
```

Then, `SingleChildScrollView` is used to make the content inside that box scrollable:

```dart id="hp6n2q"
SingleChildScrollView(
  child: Column(
    children: ...
  ),
)
```

With this structure, the quiz results screen no longer overflows. Instead, the user can scroll through the list of question summaries inside a fixed-height area.
