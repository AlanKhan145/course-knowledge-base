# Understanding Value Types

## Overview

This lecture introduces one of the most important Dart concepts: **types**.

Dart is a type-safe language. This means that every value you work with has a specific type, and Dart checks that values are used in the correct places.

Understanding types is essential for writing Dart and Flutter code because widgets, functions, variables, and arguments all depend on types.

---

## 1. What Are Types?

A **type** describes what kind of value something is.

For example:

```dart
'Hello World!'
```

is a `String`.

```dart
29
```

is an `int`.

```dart
MaterialApp()
```

is a `MaterialApp` widget.

Types help Dart understand what kind of data a value represents.

---

## 2. Dart Is Type-Safe

Dart is a **type-safe** language.

This means Dart prevents you from accidentally using the wrong kind of value in the wrong place.

For example, the `Text` widget expects a string:

```dart
Text('Hello World!')
```

This is valid because `'Hello World!'` is a `String`.

However, this is not valid:

```dart
Text(29)
```

The value `29` is an `int`, but the `Text` widget expects a `String`.

Dart shows an error because the wrong type is being passed.

---

## 3. Why Types Matter

Types exist to make code safer and clearer.

They help answer questions like:

* Is this value text?
* Is this value a number?
* Is this value a widget?
* Can this value be passed to this function?
* Can this value be used in this calculation?

Without types, Dart would have to guess what you want to do.

With types, Dart can warn you when something is wrong before the app runs.

---

## 4. Example: `Text` Requires a `String`

The `Text` widget displays text on the screen.

Example:

```dart
Text('Hello World!')
```

The first positional argument of `Text` expects a `String`.

So this works:

```dart
Text('29')
```

But this does not work:

```dart
Text(29)
```

Even though humans can understand that `29` could be displayed as text, Dart does not automatically treat it as a string here.

If you want to display the number, you need to convert it into text.

One simple way is to wrap it in quotes:

```dart
Text('29')
```

Now `29` is treated as a `String`, not as an `int`.

---

## 5. Strings

A `String` represents text.

Examples:

```dart
String message = 'Hello Flutter';
String name = "Alice";
```

Both single quotes and double quotes can be used.

In Dart, single quotes are commonly used.

```dart
'Hello'
"Flutter"
```

Strings are used for text content, labels, messages, titles, and many widget arguments.

Example:

```dart
Text('Hello Flutter')
```

---

## 6. Integers

An `int` represents a whole number.

Examples:

```dart
int age = 25;
int diceValue = 3;
int score = 100;
```

Integers do not contain decimal points.

Valid `int` values:

```dart
1
42
-7
0
```

Invalid as `int`:

```dart
3.14
2.5
```

Those are decimal numbers, so they are usually `double` values.

---

## 7. Doubles

A `double` represents a decimal number.

Examples:

```dart
double price = 19.99;
double opacity = 0.75;
double progress = 0.5;
```

A `double` can store numbers with decimal places.

Examples:

```dart
3.14
2.0
0.75
```

In Flutter, `double` values are often used for sizes, spacing, opacity, width, height, and animation values.

Example:

```dart
SizedBox(height: 20.0)
```

---

## 8. Booleans

A `bool` represents either `true` or `false`.

Examples:

```dart
bool isLoggedIn = true;
bool isRolling = false;
bool isVisible = true;
```

Booleans are commonly used in conditions.

Example:

```dart
if (isLoggedIn) {
  print('Welcome back!');
}
```

In Flutter, boolean values are often used to control whether something should be shown, enabled, selected, or active.

---

## 9. The `void` Type

`void` is used when a function does not return a value.

Example:

```dart
void main() {
  print('Hello Flutter');
}
```

The `main()` function has this return type:

```dart
void
```

This means `main()` does something, but it does not give back a value.

Another example:

```dart
void sayHello() {
  print('Hello');
}
```

This function prints a message but does not return anything.

---

## 10. Types in Function Parameters

Types can be used to define what kind of values a function accepts.

Example:

```dart
void add(int a, int b) {
  print(a + b);
}
```

This function accepts two `int` values.

This is valid:

```dart
add(5, 10);
```

This is invalid:

```dart
add('Hello', 'World');
```

The function expects numbers, not strings.

Dart shows an error because the wrong types are being passed.

---

## 11. Type Annotations

A **type annotation** explicitly states the type of a variable, parameter, or return value.

Example:

```dart
int score = 100;
String playerName = 'Alice';
bool isRolling = false;
```

Here:

```dart
int
String
bool
```

are type annotations.

They tell Dart what kind of value each variable should store.

---

## 12. Type Inference

Dart can also infer types automatically.

Example:

```dart
var score = 100;
var label = 'Score';
```

Dart understands that:

```dart
score
```

is an `int`.

And:

```dart
label
```

is a `String`.

Even though we used `var`, Dart still assigns a specific type.

So this would not be valid later:

```dart
var score = 100;
score = 'High Score'; // error
```

Dart inferred `score` as an `int`, so it cannot later store a `String`.

---

## 13. Values Can Have Multiple Types

A value can belong to more than one type category.

For example:

```dart
'Hello World!'
```

is a `String`, but it is also an `Object`.

```dart
29
```

is an `int`, but it is also a `num` and an `Object`.

```dart
MaterialApp()
```

is a `MaterialApp`, but it is also a `Widget` and an `Object`.

This means values can have very specific types and also broader parent types.

Example hierarchy:

```text
int
└── num
    └── Object
```

Another example:

```text
MaterialApp
└── Widget
    └── Object
```

This is important because some functions accept broad types.

For example, `runApp()` expects a `Widget`.

`MaterialApp` is a widget, so this works:

```dart
runApp(
  const MaterialApp(
    home: Text('Hello World!'),
  ),
);
```

---

## 14. `runApp()` Expects a Widget

The `runApp()` function expects one argument.

That argument must be a `Widget`.

Example:

```dart
runApp(
  const MaterialApp(
    home: Text('Hello World!'),
  ),
);
```

This works because `MaterialApp` is a widget.

This would not make sense:

```dart
runApp('Hello World!');
```

A string is not a widget, so Dart would show an error.

---

## 15. Type Checking in the Editor

Your code editor can show type information.

In VS Code, you can hover over a value, function, variable, or widget to see more information about it.

For example, hovering over:

```dart
'Hello World!'
```

may show that it is a `String`.

Hovering over a widget or function may show the expected parameter types.

This is useful when learning Flutter because it helps you understand what kind of value a widget expects.

---

## 16. Common Dart Value Types

| Type     | Meaning                        | Example             |
| -------- | ------------------------------ | ------------------- |
| `int`    | Whole number                   | `42`                |
| `double` | Decimal number                 | `3.14`              |
| `String` | Text                           | `'Hello'`           |
| `bool`   | True or false                  | `true`              |
| `void`   | No return value                | `void main()`       |
| `num`    | General number type            | `10`, `3.14`        |
| `Object` | Base type for most Dart values | Any non-null object |

---

## 17. Code Example

```dart
void main() {
  int diceValue = 3;
  double opacity = 0.75;
  String playerName = 'Alice';
  bool isRolling = false;

  var score = 100;
  var label = 'Score';

  print(diceValue + 1);
  print(opacity * 2);
  print('Player: $playerName');
  print(isRolling);
  print('$label: $score');
}
```

Output:

```text
4
1.5
Player: Alice
false
Score: 100
```

---

## 18. String Interpolation

String interpolation allows you to insert values into a string.

Example:

```dart
String playerName = 'Alice';

print('Player: $playerName');
```

Output:

```text
Player: Alice
```

You can also insert expressions using `${}`.

Example:

```dart
int score = 100;

print('Next score: ${score + 1}');
```

Output:

```text
Next score: 101
```

---

## 19. Why This Matters in Flutter

Flutter widgets expect specific types for their arguments.

Example:

```dart
Text('Hello Flutter')
```

The `Text` widget expects a `String`.

Example:

```dart
SizedBox(height: 20)
```

The `height` argument expects a number.

Example:

```dart
Center(
  child: Text('Hello'),
)
```

The `child` argument expects a `Widget`.

If you pass the wrong type, Dart shows an error.

This helps prevent bugs before the app runs.

---

## Key Points

* Dart is a type-safe language.
* Every value has a type.
* `String` represents text.
* `int` represents whole numbers.
* `double` represents decimal numbers.
* `bool` represents `true` or `false`.
* `void` means a function returns no value.
* Dart checks that values are used in the correct places.
* Flutter widgets expect specific argument types.
* The editor can show type information when you hover over code.
* Types help prevent mistakes before the app runs.

---

## Summary

Types are a core Dart concept.

Every value in Dart has a type, such as `String`, `int`, `double`, `bool`, or `Widget`.

Dart uses types to make sure that values are used correctly. For example, the `Text` widget expects a `String`, so passing an `int` directly causes an error.

This type system helps developers write safer and more reliable code. It also helps Flutter widgets know exactly what kind of values they should receive.

Understanding value types is essential for working with Dart and Flutter.
