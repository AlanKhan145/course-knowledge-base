# Using `if` Statements in Lists

## Overview

This lecture introduces a useful Dart feature that allows `if` statements to be used directly inside list literals.

This is especially helpful in Flutter because many widgets, such as `Column`, `Row`, and `Stack`, receive a list of widgets through the `children` argument.

Instead of using ternary expressions or manually building lists with `.add()`, Dart lets you conditionally include list items directly inside the list.

This makes Flutter widget trees cleaner, more readable, and easier to maintain.

---

## Key Points

* Dart supports `if` statements inside list literals.
* This feature is called a control-flow collection feature.
* The item after the `if` is only added to the list if the condition is true.
* You can also use an `else` case inside a list.
* No curly braces are used inside list literals.
* The `if` body only controls the next list item.
* This works in any Dart list, not only Flutter widget lists.
* It is especially useful for conditionally adding widgets to `children` lists.

---

## Basic Syntax

```dart id="vazbzr"
final myList = [
  item1,
  item2,
  if (condition)
    item3,
];
```

In this example, `item3` is only added to the list if `condition` is true.

---

## Simple Example

```dart id="xe2tmh"
final myList = [
  1,
  2,
  if (condition)
    3,
];
```

If `condition` is true, the list becomes:

```dart id="6ag6ye"
[1, 2, 3]
```

If `condition` is false, the list becomes:

```dart id="u7roja"
[1, 2]
```

---

## Example with a Real Condition

```dart id="ynic1g"
final day = 'Sunday';

final activities = [
  'Study Dart',
  'Build Flutter UI',
  if (day == 'Sunday')
    'Take a break',
];
```

Since `day == 'Sunday'` is true, the list will include `'Take a break'`.

---

## Using `else` in Lists

Dart also allows an `else` case inside list literals.

```dart id="rcz74u"
final myList = [
  1,
  2,
  if (condition)
    3
  else
    4,
];
```

If `condition` is true, the list becomes:

```dart id="5pnhdx"
[1, 2, 3]
```

If `condition` is false, the list becomes:

```dart id="6i2l7t"
[1, 2, 4]
```

---

## Alternative: Ternary Expression

The same logic can also be written with a ternary expression:

```dart id="6eknxq"
final myList = [
  1,
  2,
  condition ? 3 : 4,
];
```

This works well for simple values.

However, when the value is more complex, such as a Flutter widget with many parameters, using `if` inside the list can be more readable.

---

## Using `if` Statements in Flutter Widget Lists

This feature is very useful in Flutter when building widget trees.

Example:

```dart id="shwo9z"
@override
Widget build(BuildContext context) {
  return Scaffold(
    body: Column(
      children: [
        const Text('Quiz App'),
        const SizedBox(height: 20),

        if (activeScreen == 'start-screen')
          StartScreen(
            onStartQuiz: switchScreen,
          ),

        if (activeScreen == 'questions-screen')
          const QuestionsScreen(),
      ],
    ),
  );
}
```

In this example:

* `StartScreen` is only added if `activeScreen == 'start-screen'`.
* `QuestionsScreen` is only added if `activeScreen == 'questions-screen'`.

---

## Flutter Example with `else`

```dart id="6ivmy2"
@override
Widget build(BuildContext context) {
  return Scaffold(
    body: Column(
      children: [
        const Text('Quiz App'),
        const SizedBox(height: 20),

        if (activeScreen == 'start-screen')
          StartScreen(
            onStartQuiz: switchScreen,
          )
        else
          const QuestionsScreen(),
      ],
    ),
  );
}
```

This means:

```text id="f0d5he"
If activeScreen is 'start-screen',
add StartScreen to the children list.

Otherwise,
add QuestionsScreen to the children list.
```

---

## Example with Optional UI Elements

```dart id="8lwipa"
@override
Widget build(BuildContext context) {
  final hasError = true;

  return Column(
    children: [
      const Text('Login Form'),

      if (hasError)
        const Text(
          'An error occurred',
        ),

      const TextField(),
      const TextField(),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Login'),
      ),
    ],
  );
}
```

Here, the error message is only shown when `hasError` is true.

---

## Example with Data Lists

This feature is not limited to widgets. It works in any Dart list.

```dart id="qz3qcl"
final isLoggedIn = true;
final isAdmin = false;

final menuItems = [
  'Home',
  if (isLoggedIn)
    'Profile',
  if (isAdmin)
    'Admin Panel',
  'Settings',
];
```

The resulting list will be:

```dart id="iyhh06"
['Home', 'Profile', 'Settings']
```

`'Admin Panel'` is not included because `isAdmin` is false.

---

## Important Syntax Rules

When using `if` inside a list, there are no curly braces.

Correct:

```dart id="no32nj"
final items = [
  'A',
  if (condition)
    'B',
  'C',
];
```

Incorrect:

```dart id="22ecmt"
final items = [
  'A',
  if (condition) {
    'B',
  },
  'C',
];
```

The `if` statement only controls the next list item.

You cannot place multiple independent statements inside the `if` body.

---

## Why This Is Useful in Flutter

Flutter UI is built with widgets, and many widgets receive lists of child widgets.

Common examples include:

* `Column(children: [...])`
* `Row(children: [...])`
* `Stack(children: [...])`
* `ListView(children: [...])`

Using `if` statements directly inside these lists allows you to conditionally include widgets without making the code messy.

---

## Compared to Other Approaches

### Using `if` in Lists

```dart id="6560ti"
children: [
  const Text('Title'),
  if (isLoggedIn)
    const Text('Welcome back!'),
]
```

This is clean and readable.

### Using a Ternary with an Empty Widget

```dart id="lzp6rm"
children: [
  const Text('Title'),
  isLoggedIn
      ? const Text('Welcome back!')
      : const SizedBox.shrink(),
]
```

This works, but it adds an unnecessary placeholder widget.

### Manually Building a List

```dart id="4x91mf"
final widgets = [
  const Text('Title'),
];

if (isLoggedIn) {
  widgets.add(
    const Text('Welcome back!'),
  );
}
```

This also works, but it requires more code.

---

## Notes

Using `if` statements inside list literals is an idiomatic Dart and Flutter pattern.

It helps avoid:

* Nullable widgets
* Empty placeholder widgets
* Manual list-building code
* Complicated ternary expressions

This feature is especially useful when adding complex widgets conditionally.

---

## Summary

Dart allows `if` statements to be used directly inside list literals.

This is very useful in Flutter because widget trees often contain lists of widgets. With this feature, you can conditionally include widgets in a clean and readable way.

Use this approach when you want to add or remove list items based on a condition, especially inside `children` lists for widgets like `Column`, `Row`, `Stack`, or `ListView`.
