# Instance Variables, Properties, and Configurable Widgets

## Overview

This lecture explains how to make custom Flutter widgets configurable by using **instance variables**, also called **properties**.

So far, we created custom widgets, but some values were still hard-coded inside those widgets. For example, our `StyledText` widget always displayed the same text: `'Hello World!'`.

To make a custom widget truly reusable, it should be able to receive data from outside.

This is done by:

1. Adding instance variables to the widget class.
2. Accepting values through the constructor.
3. Storing those values in the instance variables.
4. Using the instance variables inside the `build()` method.

This is one of the most important Flutter patterns.

---

## 1. The Problem with Hard-Coded Values

We created a custom widget called `StyledText`.

Example:

```dart id="kpg29r"
class StyledText extends StatelessWidget {
  const StyledText({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      'Hello World!',
      style: TextStyle(
        color: Colors.white,
        fontSize: 28,
      ),
    );
  }
}
```

This works, but it is only partially reusable.

The style is reusable, but the text is hard-coded.

No matter where we use `StyledText`, it always displays:

```text id="qzt6rl"
Hello World!
```

That is not flexible.

---

## 2. What We Want Instead

We want to reuse the same text styling, but pass in different text values.

Instead of this:

```dart id="gctx61"
const StyledText()
```

we want something like this:

```dart id="9gejv7"
const StyledText('Hello World!')
```

or:

```dart id="dhxs75"
const StyledText('Roll Dice')
```

Now the widget can display different text while keeping the same style.

---

## 3. Making a Widget Configurable

A configurable widget receives data from the place where it is used.

Example:

```dart id="0j3bl5"
const StyledText('Hello World!')
```

The text `'Hello World!'` is passed into the widget from outside.

The widget then uses that value inside its `build()` method.

This is how many Flutter widgets work internally.

For example:

```dart id="w9c8d3"
Text('Hello')
```

The `Text` widget receives the text value from outside.

Our custom `StyledText` widget can work the same way.

---

## 4. Constructor Parameters

A widget receives input values through its constructor.

Current constructor:

```dart id="kbg4oc"
const StyledText({super.key});
```

This constructor only accepts a `key`.

We can add another parameter for the text.

Example:

```dart id="9vjynj"
const StyledText(this.text, {super.key});
```

This means the widget accepts one positional argument called `text`.

Usage:

```dart id="5f6fq6"
const StyledText('Hello World!')
```

---

## 5. Constructor Arguments Are Not Automatically Available Everywhere

You might think that if the constructor accepts a `text` argument, you can automatically use it inside `build()`.

But constructor parameters are local to the constructor.

Example:

```dart id="xadzt9"
class StyledText extends StatelessWidget {
  const StyledText(String text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Text(text); // error
  }
}
```

This does not work because the `text` parameter only belongs to the constructor.

It is not automatically available inside the `build()` method.

To use it in `build()`, we need to store it in an instance variable.

---

## 6. What Is an Instance Variable?

An instance variable is a variable that belongs to a class.

It is also called a **property**.

Example:

```dart id="llttsq"
final String text;
```

This defines a property called `text`.

Because it is inside the class, it can be used in methods of that class, including `build()`.

---

## 7. Adding an Instance Variable

We can add a `text` property to the `StyledText` class.

```dart id="y9ssg8"
class StyledText extends StatelessWidget {
  final String text;

  const StyledText(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

Now the text passed to the constructor is stored in the instance variable.

The `build()` method can use it.

---

## 8. Why Use `final`?

The `text` value is passed into the widget when the widget is created.

After that, the widget should not change it internally.

Therefore, the property should be marked as `final`.

```dart id="2ewx4q"
final String text;
```

This means the value is assigned once and cannot be reassigned later.

This is a common Flutter pattern because widgets are typically immutable.

---

## 9. The `this.text` Shortcut

Dart provides a shortcut for assigning constructor arguments to instance variables.

Instead of writing a longer constructor like this:

```dart id="9kk43o"
class StyledText extends StatelessWidget {
  final String text;

  const StyledText(String inputText, {super.key}) : text = inputText;

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

we can write:

```dart id="uo9o1h"
class StyledText extends StatelessWidget {
  final String text;

  const StyledText(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

The `this.text` shortcut means:

```text id="x47zzf"
Accept a constructor argument and automatically store it in the text instance variable.
```

---

## 10. Understanding `this`

The `this` keyword refers to the current object.

In this constructor:

```dart id="8za15f"
const StyledText(this.text, {super.key});
```

`this.text` means:

```text id="ckhikq"
Use the text property that belongs to this object.
```

So Dart automatically connects the constructor argument to the class property.

---

## 11. Using the Instance Variable in `build()`

Once the `text` property exists, we can use it inside `build()`.

```dart id="8p82lh"
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
```

Here:

```dart id="2ttnar"
text
```

refers to the instance variable.

The displayed text is no longer hard-coded.

---

## 12. Why `Text` Is No Longer `const`

Before, we had:

```dart id="lhmrt8"
return const Text(
  'Hello World!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 28,
  ),
);
```

This worked because the text was hard-coded and known at compile time.

Now we use a variable:

```dart id="9c6l7o"
return Text(
  text,
  style: const TextStyle(
    color: Colors.white,
    fontSize: 28,
  ),
);
```

The `Text` widget itself cannot be marked as `const` because `text` comes from an instance variable.

However, the `TextStyle` can still be `const` because its values are still hard-coded.

---

## 13. Final `StyledText` Widget

```dart id="z5wl9f"
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});

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

This widget is now configurable.

It can display any text value passed into it.

---

## 14. Using `StyledText`

Inside `GradientContainer`, we can now pass text into `StyledText`.

```dart id="ctbapv"
const Center(
  child: StyledText('Hello World!'),
)
```

Or:

```dart id="vrq4xx"
const Center(
  child: StyledText('Roll Dice'),
)
```

The same widget class can now display different text.

---

## 15. Updated `gradient_container.dart`

```dart id="5v7xik"
import 'package:flutter/material.dart';

import 'styled_text.dart';

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
        child: StyledText('Hello World!'),
      ),
    );
  }
}
```

Now `GradientContainer` decides what text should be displayed.

`StyledText` only controls how the text looks.

---

## 16. Positional Constructor Parameter

This version uses a positional parameter:

```dart id="ulejti"
const StyledText(this.text, {super.key});
```

Usage:

```dart id="ta1qxn"
const StyledText('Hello World!')
```

The first value passed to `StyledText` is stored in the `text` property.

This is similar to Flutter's built-in `Text` widget:

```dart id="uf6fd4"
const Text('Hello World!')
```

---

## 17. Named Constructor Parameter Alternative

You can also make the text a named parameter.

Example:

```dart id="vme75o"
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

```dart id="4pn89d"
const StyledText(text: 'Hello World!')
```

This is more explicit and often useful when a widget has multiple configuration values.

---

## 18. Positional vs Named Configuration

Both styles are valid.

### Positional

```dart id="65t7lq"
const StyledText('Hello World!')
```

Good when there is one obvious main value.

### Named

```dart id="yo4oyn"
const StyledText(text: 'Hello World!')
```

Good when there are multiple configurable values or when readability is important.

---

## 19. Configurable Widget Example: `DiceImage`

Another example of a configurable widget:

```dart id="kn8mz3"
import 'package:flutter/material.dart';

class DiceImage extends StatelessWidget {
  const DiceImage({
    super.key,
    required this.imagePath,
    this.size = 150,
  });

  final String imagePath;
  final double size;

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      imagePath,
      width: size,
    );
  }
}
```

This widget can now display different dice images.

---

## 20. Using `DiceImage`

```dart id="yoxvk4"
const Column(
  children: [
    DiceImage(
      imagePath: 'assets/dice-1.png',
      size: 200,
    ),
    DiceImage(
      imagePath: 'assets/dice-4.png',
    ),
  ],
)
```

The first `DiceImage` uses a custom size.

The second one uses the default size of `150`.

This is the power of configurable widgets.

---

## 21. Pattern for Configurable Widgets

The standard pattern looks like this:

```dart id="kvz4tc"
class MyWidget extends StatelessWidget {
  const MyWidget({
    super.key,
    required this.someValue,
  });

  final String someValue;

  @override
  Widget build(BuildContext context) {
    return Text(someValue);
  }
}
```

The important parts are:

```dart id="saq9df"
final String someValue;
```

defines the instance variable.

```dart id="kn4m4j"
required this.someValue
```

accepts and stores the value through the constructor.

```dart id="93cm8s"
Text(someValue)
```

uses the value inside `build()`.

---

## 22. How Built-In Widgets Use This Pattern

Flutter's built-in widgets use the same idea.

For example:

```dart id="mad821"
Text('Hello World!')
```

The `Text` widget receives a string and stores it internally.

Example:

```dart id="4dernt"
Image.asset('assets/dice-1.png')
```

The `Image` widget receives an asset path and stores it internally.

Example:

```dart id="by3wa5"
Container(
  padding: EdgeInsets.all(16),
)
```

The `Container` widget receives a padding object and stores it internally.

Your custom widgets can be designed the same way.

---

## 23. Why This Matters

Configurable widgets are reusable.

Without instance variables:

```dart id="2je34e"
StyledText()
```

always shows the same hard-coded text.

With instance variables:

```dart id="qlt0wo"
StyledText('Hello World!')
StyledText('Roll Dice')
StyledText('Game Over')
```

the same widget can show different content.

This avoids code duplication and makes the app easier to maintain.

---

## 24. Common Mistake: Constructor Parameter Not Stored

Incorrect:

```dart id="9go60i"
class StyledText extends StatelessWidget {
  const StyledText(String text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Text(text); // error
  }
}
```

The constructor parameter `text` is not available inside `build()`.

Correct:

```dart id="fn10yu"
class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

The value is stored in an instance variable.

---

## 25. Common Mistake: Forgetting `final`

Less ideal:

```dart id="5aplf6"
String text;
```

Better:

```dart id="f6e3tf"
final String text;
```

In Flutter widgets, configuration values should usually be `final`.

This prevents accidental changes after the widget is created.

---

## Key Points

* Instance variables are variables that belong to a class.
* Instance variables are also called properties.
* Widget properties store configuration data.
* Constructor parameters receive values from outside the widget.
* `this.text` stores a constructor argument in an instance variable.
* `final` prevents the property from being changed after construction.
* Instance variables can be used inside `build()`.
* This makes widgets configurable and reusable.
* Built-in Flutter widgets use this same pattern internally.
* Use positional parameters for obvious main values.
* Use named parameters for clearer or more complex configuration.

---

## Summary

Instance variables make custom widgets configurable.

Instead of hard-coding `'Hello World!'` inside `StyledText`, we define a `final String text` property and accept the value through the constructor.

```dart id="hvbtb8"
class StyledText extends StatelessWidget {
  const StyledText(this.text, {super.key});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}
```

Now we can reuse the widget with different values:

```dart id="jtill4"
const StyledText('Hello World!')
const StyledText('Roll Dice')
const StyledText('Game Over')
```

This pattern is the foundation of reusable Flutter widgets.
