# Variables and Types: Combining Two Key Concepts

## Overview

This lecture connects two important Dart concepts: **variables** and **types**.

A variable is a named container for storing data, and every variable in Dart has a type. That type controls what kind of value can be stored in the variable and how the variable can be used.

Dart can often infer the type automatically, but you can also declare the type explicitly.

Understanding how variables and types work together is essential for writing safe and predictable Dart and Flutter code.

---

## 1. Variables Have Types

Every variable in Dart has a type.

Example:

```dart
var startAlignment = Alignment.topLeft;
```

Dart looks at the initial value:

```dart
Alignment.topLeft
```

and infers that `startAlignment` has the type:

```dart
Alignment
```

So this variable is not just a generic container. It is a container for values of a specific type.

---

## 2. Type Inference with `var`

When you use `var`, Dart infers the type from the initial value.

Example:

```dart
var score = 0;
```

Dart infers:

```dart
int
```

Example:

```dart
var message = 'Hello';
```

Dart infers:

```dart
String
```

Example:

```dart
var isActive = true;
```

Dart infers:

```dart
bool
```

Once Dart infers the type, that type is locked in.

---

## 3. `var` Does Not Mean Any Type

A common misunderstanding is thinking that `var` means the variable can store any type.

It does not.

Example:

```dart
var score = 0;

score = 10;      // valid
score = 'Hello'; // error
```

Dart inferred `score` as an `int`, so you cannot later assign a `String`.

---

## 4. Example with Alignment Variables

In the gradient container, we can store alignment values in variables.

```dart
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

Then we can use them inside `LinearGradient`:

```dart
LinearGradient(
  colors: const [
    Color.fromARGB(255, 26, 2, 80),
    Color.fromARGB(255, 45, 7, 98),
  ],
  begin: startAlignment,
  end: endAlignment,
)
```

Dart knows that both variables contain alignment values.

---

## 5. Hovering to See Types

In VS Code or Android Studio, you can hover over a variable name to see its inferred type.

For example, hovering over:

```dart
startAlignment
```

may show:

```dart
Alignment startAlignment
```

This means Dart inferred the variable as an `Alignment`.

This is useful when learning because it helps you see what type Dart is using.

---

## 6. Reassigning a Variable

A variable declared with `var` can be reassigned, but only with a value of the same type.

Example:

```dart
var startAlignment = Alignment.topLeft;

startAlignment = Alignment.center; // valid
```

This works because both values are of type `Alignment`.

But this would not work:

```dart
startAlignment = 'top left'; // error
```

A `String` cannot be assigned to a variable inferred as `Alignment`.

---

## 7. Explicit Type Declarations

Instead of using `var`, you can write the type explicitly.

Example:

```dart
Alignment startAlignment = Alignment.topLeft;
Alignment endAlignment = Alignment.bottomRight;
```

This is equivalent to:

```dart
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

In many cases, using `var` is fine when the initial value is clear.

Explicit types can be useful when:

* The value is not assigned immediately
* The type is not obvious
* You want the code to be more self-documenting
* You want to avoid `dynamic`

---

## 8. Variables Without Initial Values

If you declare a variable with `var` but do not assign a value, Dart cannot infer a useful type.

Example:

```dart
var startAlignment;
```

In this case, Dart infers the type as:

```dart
dynamic
```

`dynamic` means Dart does not know the specific type.

This allows many kinds of values:

```dart
startAlignment = Alignment.topLeft;
startAlignment = 'Hello';
startAlignment = 123;
```

This is usually not recommended because Dart cannot protect you from type mistakes.

---

## 9. Avoiding `dynamic`

The `dynamic` type disables many of Dart's type-safety benefits.

Example:

```dart
dynamic value = 10;

value = 'Hello';
value = true;
```

This is allowed, but it can lead to bugs.

In most cases, avoid `dynamic` unless you truly need a variable that can hold different types.

Instead of this:

```dart
var startAlignment;
```

write this:

```dart
Alignment startAlignment = Alignment.topLeft;
```

or, if you assign the value later, use a suitable explicit type.

---

## 10. Explicit Type Without Initial Value

If you write:

```dart
Alignment startAlignment;
```

Dart knows the variable should store an `Alignment`.

However, because of null safety, a non-nullable variable must receive a value before it is used.

If you do not initialize it correctly, Dart will show an error.

One option is to assign it immediately:

```dart
Alignment startAlignment = Alignment.topLeft;
```

Another option is to make it nullable.

---

## 11. Nullable Variables

A nullable variable can store either a value or `null`.

To make a type nullable, add `?`.

Example:

```dart
Alignment? startAlignment;
```

This means:

```text
startAlignment can be an Alignment or null.
```

You can later assign a value:

```dart
startAlignment = Alignment.topLeft;
```

You can also assign `null`:

```dart
startAlignment = null;
```

---

## 12. Nullable Values and Widget Parameters

Nullable variables can cause issues if a widget parameter expects a non-null value.

Example:

```dart
Alignment? startAlignment;
```

This variable might be `null`.

But `LinearGradient.begin` expects an `AlignmentGeometry`, not a nullable value.

So this may cause an error:

```dart
LinearGradient(
  begin: startAlignment, // error if startAlignment can be null
)
```

Dart prevents this because `begin` needs a real alignment value.

---

## 13. Correct Approach for This Example

Since the alignment values are known immediately, the best approach is to initialize them directly.

```dart
var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;
```

or explicitly:

```dart
Alignment startAlignment = Alignment.topLeft;
Alignment endAlignment = Alignment.bottomRight;
```

This gives Dart clear type information and avoids nullable problems.

---

## 14. `var` Is Recommended When the Initial Value Is Clear

When you assign a value immediately, using `var` is often recommended.

Example:

```dart
var startAlignment = Alignment.topLeft;
```

This is clear because Dart can infer the type from the value.

Another example:

```dart
var score = 0;
var playerName = 'Alice';
var isRolling = false;
```

Dart can infer:

```text
score      → int
playerName → String
isRolling  → bool
```

---

## 15. Typed Variables Example

```dart
void main() {
  int rollResult = 3;
  double probability = 1 / 6;
  String outcomeMessage = 'You rolled $rollResult';
  bool isWin = rollResult >= 5;

  print(outcomeMessage);
  print(probability);
  print(isWin);
}
```

Here:

```dart
int rollResult
```

stores a whole number.

```dart
double probability
```

stores a decimal number.

```dart
String outcomeMessage
```

stores text.

```dart
bool isWin
```

stores `true` or `false`.

---

## 16. Type-Safe Operations

The type of a variable determines what operations are valid.

Example:

```dart
var playerScore = 0;
var rollResult = 3;

playerScore = playerScore + rollResult;
```

This works because both variables are numbers.

But this would not work:

```dart
playerScore = playerScore + 'points'; // error
```

Dart prevents this because adding an `int` and a `String` directly is not valid.

---

## 17. Converting Values Between Types

Sometimes you need to convert one type into another.

For example, the `Text` widget expects a `String`.

This is invalid:

```dart
Text(rollResult)
```

because `rollResult` is an `int`.

You must convert it to a string:

```dart
Text(rollResult.toString())
```

or use string interpolation:

```dart
Text('$rollResult')
```

This makes the conversion explicit.

---

## 18. Function Parameters Also Have Types

Types also appear in function parameters.

Example:

```dart
String summarize(String name, int score) {
  return '$name: $score points';
}
```

This function expects:

```text
name  → String
score → int
```

Usage:

```dart
print(summarize('Alice', 100));
```

This is valid.

This is not valid:

```dart
print(summarize(100, 'Alice')); // error
```

The argument types are wrong.

---

## 19. Complete Example

```dart
void main() {
  int rollResult = 3;
  double probability = 1 / 6;
  String outcomeMessage = 'You rolled $rollResult';
  bool isWin = rollResult >= 5;

  var playerScore = 0;

  playerScore = playerScore + rollResult;

  print('Score: $playerScore');

  String summarize(String name, int score) {
    return '$name: $score points';
  }

  print(summarize('Alice', playerScore));
  print(outcomeMessage);
  print('Win: $isWin');
}
```

Output:

```text
Score: 3
Alice: 3 points
You rolled 3
Win: false
```

---

## 20. Applying This to Flutter

In Flutter, every widget argument expects a specific type.

Example:

```dart
Text('Hello')
```

`Text` expects a `String`.

Example:

```dart
SizedBox(height: 20)
```

`height` expects a number, specifically a `double?`.

Example:

```dart
LinearGradient(
  begin: Alignment.topLeft,
)
```

`begin` expects an `AlignmentGeometry`.

Example:

```dart
Column(
  children: [
    Text('A'),
    Text('B'),
  ],
)
```

`children` expects a `List<Widget>`.

Dart uses types to make sure you pass the right values to the right places.

---

## 21. `dynamic` Example

```dart
void main() {
  dynamic value = 10;

  value = 'Hello';
  value = true;

  print(value);
}
```

This code is valid because `dynamic` allows the variable to hold any type.

However, it removes type safety.

Use `dynamic` sparingly.

---

## 22. Better Than `dynamic`

Instead of this:

```dart
var value;
```

prefer giving Dart a type:

```dart
String value = 'Hello';
```

or, if the value may be missing:

```dart
String? value;
```

or, if it will be assigned later:

```dart
late String value;
```

This gives Dart more information and helps prevent bugs.

---

## Key Points

* Every variable in Dart has a type.
* `var` lets Dart infer the type from the initial value.
* Once inferred, the type is locked.
* A variable can only be reassigned with a compatible type.
* If `var` is used without an initial value, Dart may infer `dynamic`.
* `dynamic` disables much of Dart's type safety.
* Explicit type declarations are useful when no initial value is assigned.
* Nullable types use `?`.
* Widget parameters expect specific types.
* Dart prevents wrong values from being used in the wrong places.
* Convert values explicitly when needed, such as using `.toString()`.

---

## Summary

Variables and types work together in Dart.

A variable stores a value, and its type determines what kind of values it can store and what operations can be performed on it.

When you use `var` with an initial value, Dart infers the type automatically:

```dart
var startAlignment = Alignment.topLeft;
```

Dart infers this as an `Alignment`.

If you do not assign an initial value, avoid relying on `var`, because the variable may become `dynamic`.

Instead, use an explicit type:

```dart
Alignment startAlignment = Alignment.topLeft;
```

or a nullable type when needed:

```dart
Alignment? startAlignment;
```

Understanding this relationship between variables and types helps you write safer Flutter code and understand why widget arguments require specific value types.
