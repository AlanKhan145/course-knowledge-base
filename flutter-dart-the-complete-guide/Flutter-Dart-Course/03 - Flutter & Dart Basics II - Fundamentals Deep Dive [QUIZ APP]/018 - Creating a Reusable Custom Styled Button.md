# Creating a Reusable Custom Styled Button

## Overview

This lecture explains how to create a reusable custom styled button in Flutter.

In the Quiz App, multiple answer buttons need to look and behave the same way. Instead of copying the same `ElevatedButton` code and styling again and again, we can extract the button into its own custom widget.

This custom widget will be called `AnswerButton`.

Creating reusable widgets is an important Flutter best practice because it helps avoid duplicated code, improves maintainability, and keeps the UI consistent across the app.

---

## Goal

The goal is to create a reusable button widget that:

1. Displays answer text.
2. Executes a function when tapped.
3. Has consistent styling.
4. Can be reused for every answer option.
5. Keeps the questions screen cleaner.

---

## Key Points

* Repeated widget patterns should be extracted into custom widgets.
* A reusable widget should receive dynamic values through constructor parameters.
* The `required` keyword makes named parameters mandatory.
* `ElevatedButton.styleFrom()` provides a convenient way to style an `ElevatedButton`.
* A custom widget can encapsulate styling and behavior.
* Reusable widgets follow the DRY principle: Don’t Repeat Yourself.
* A button can be a `StatelessWidget` if it does not manage internal state.

---

## Why Create a Custom Button?

Initially, the questions screen may contain multiple `ElevatedButton` widgets.

```dart id="gcbsyy"
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
```

This works, but it becomes a problem when each button needs the same styling.

If you add styling to one button, you would have to copy the same style to every other button.

That leads to duplicated code.

A better solution is to create a reusable custom widget.

---

## Creating the File

Create a new file:

```text id="nk4zfm"
lib/widgets/answer_button.dart
```

This file will contain the custom `AnswerButton` widget.

A common Flutter project structure looks like this:

```text id="ty5v03"
lib/
├── data/
│   └── questions.dart
├── models/
│   └── quiz_question.dart
├── widgets/
│   └── answer_button.dart
├── questions_screen.dart
├── start_screen.dart
└── main.dart
```

The `widgets/` folder is used for reusable UI components.

---

## Creating the `AnswerButton` Widget

Because this button does not manage any internal state, it can extend `StatelessWidget`.

```dart id="n1qic8"
import 'package:flutter/material.dart';

class AnswerButton extends StatelessWidget {
  const AnswerButton({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      child: const Text('Answer'),
    );
  }
}
```

This is the basic structure of the custom button widget.

---

## Making the Button Configurable

The button should not always show the same text.

The answer text should be passed in from the outside.

To do that, we add a property:

```dart id="2mwmry"
final String answerText;
```

Then we receive it through the constructor:

```dart id="nrag5s"
const AnswerButton({
  super.key,
  required this.answerText,
});
```

Now we can use `answerText` inside the `Text` widget.

```dart id="hslb6n"
child: Text(answerText),
```

---

## Passing a Tap Function

The button should also execute a function when pressed.

That function should come from the widget where `AnswerButton` is used.

To support that, we add another property:

```dart id="u0dupp"
final void Function() onTap;
```

This means `onTap` must be a function that returns nothing.

Then we receive it through the constructor:

```dart id="mwrzot"
required this.onTap,
```

And pass it to `ElevatedButton`:

```dart id="pv52rl"
onPressed: onTap,
```

---

## Why Use `required`?

Named parameters are optional by default in Dart.

But `AnswerButton` cannot work properly without:

* `answerText`
* `onTap`

Therefore, both parameters should be marked as `required`.

```dart id="0ji5k6"
const AnswerButton({
  super.key,
  required this.answerText,
  required this.onTap,
});
```

This forces the caller to provide these values.

---

## Styling the Button

To style an `ElevatedButton`, we can use:

```dart id="s92iqa"
ElevatedButton.styleFrom()
```

This method makes it easy to configure common button styles.

We can customize:

* Padding
* Background color
* Foreground color
* Shape
* Border radius

Example:

```dart id="fdckl6"
style: ElevatedButton.styleFrom(
  padding: const EdgeInsets.symmetric(
    vertical: 10,
    horizontal: 40,
  ),
  backgroundColor: const Color.fromARGB(255, 33, 1, 95),
  foregroundColor: Colors.white,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(40),
  ),
),
```

---

## Final `AnswerButton` Widget

```dart id="zkoyg0"
// lib/widgets/answer_button.dart

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
        padding: const EdgeInsets.symmetric(
          vertical: 10,
          horizontal: 40,
        ),
        backgroundColor: const Color.fromARGB(255, 33, 1, 95),
        foregroundColor: Colors.white,
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

## Using the Custom Button

To use the custom widget in `questions_screen.dart`, first import it:

```dart id="kgfvp3"
import 'package:adv_basics/widgets/answer_button.dart';
```

Then use `AnswerButton` instead of writing `ElevatedButton` manually.

```dart id="os99ix"
AnswerButton(
  answerText: 'Answer 1',
  onTap: () {},
),
```

Because the constructor uses named arguments, the order does not matter.

This works:

```dart id="g9bb12"
AnswerButton(
  answerText: 'Answer 1',
  onTap: () {},
),
```

This also works:

```dart id="hfd0cz"
AnswerButton(
  onTap: () {},
  answerText: 'Answer 1',
),
```

However, it is usually better to use an order that feels natural and readable.

---

## Example in the Questions Screen

```dart id="bxb6uy"
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    const Text(
      'The question',
      style: TextStyle(
        color: Colors.white,
      ),
    ),
    const SizedBox(height: 30),
    AnswerButton(
      answerText: 'Answer 1',
      onTap: () {},
    ),
    AnswerButton(
      answerText: 'Answer 2',
      onTap: () {},
    ),
    AnswerButton(
      answerText: 'Answer 3',
      onTap: () {},
    ),
  ],
)
```

Now all answer buttons share the same styling because the styling is defined in one place: inside `AnswerButton`.

---

## Styling the Question Text

The question text can also be styled by adding a `TextStyle`.

```dart id="ldzs54"
const Text(
  'The question',
  style: TextStyle(
    color: Colors.white,
  ),
)
```

This changes the question text color to white.

---

## Benefits of the Custom Button

Creating a reusable `AnswerButton` gives several benefits.

### Less Code Duplication

Instead of repeating the same `ElevatedButton` styling everywhere, the style is written once.

### Easier Maintenance

If the button style needs to change later, you only need to update one file.

### Cleaner Widget Tree

The questions screen becomes easier to read.

### Consistent Design

All answer buttons automatically use the same style.

### Better Reusability

The same button can be used in multiple places if needed.

---

## Before Refactoring

```dart id="erpdj7"
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    padding: const EdgeInsets.symmetric(
      vertical: 10,
      horizontal: 40,
    ),
    backgroundColor: const Color.fromARGB(255, 33, 1, 95),
    foregroundColor: Colors.white,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(40),
    ),
  ),
  child: const Text('Answer 1'),
),
```

This would need to be repeated for every answer.

---

## After Refactoring

```dart id="o4lgm5"
AnswerButton(
  answerText: 'Answer 1',
  onTap: () {},
),
```

The code is much shorter and easier to reuse.

---

## Important Notes

The `AnswerButton` is a `StatelessWidget` because it does not manage internal state.

Even though the button can be pressed, the action that happens after pressing it is controlled by the parent widget through the `onTap` function.

This keeps the button reusable and flexible.

The `answerText` property controls what text is displayed.

The `onTap` property controls what happens when the button is pressed.

The styling is locked into the custom widget, so every `AnswerButton` automatically looks the same.

---

## Summary

This lecture showed how to create a reusable custom styled button in Flutter.

The `AnswerButton` widget wraps an `ElevatedButton` and accepts two required values:

* `answerText`
* `onTap`

The button styling is defined once inside the custom widget and reused everywhere the button appears.

This approach reduces code duplication, improves maintainability, and keeps the Quiz App’s UI consistent.
