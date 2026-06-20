# Starting From Scratch: Understanding Functions

## Overview

This lecture starts the Flutter app from an empty `main.dart` file and introduces one of the most important programming concepts in Dart: functions.

Functions are reusable blocks of code that perform specific tasks. In Flutter, one of the first functions you encounter is `runApp()`, which is provided by the Flutter framework and is used to start displaying a user interface on the screen.

The lecture also introduces the `main()` function, which is the required starting point of every Dart and Flutter application.

## Learning Goals

By the end of this lecture, students will understand:

* What a function is
* How to define a function in Dart
* How to call or execute a function
* What the `main()` function does
* What `void` means
* What a function body is
* Why `runApp()` must be placed inside `main()`
* Why Flutter functions must be imported before they can be used

## Key Points

* A function is an instruction that can be executed in code.
* Functions are also called “code on demand” because they only run when they are called.
* `runApp()` is a function provided by the Flutter framework.
* `runApp()` is used to start a Flutter app and display a user interface.
* Dart does not allow normal executable statements to be placed directly at the top level of a file.
* Code that should run must be placed inside a function body.
* `main()` is a special function because Dart automatically executes it when the app starts.
* `void` means that the function does not return a value.
* A function is called by writing its name followed by parentheses.

## Starting From An Empty `main.dart`

At the beginning of this lecture, the existing content inside `lib/main.dart` is deleted.

This allows the app to be built from scratch, step by step.

The goal is to understand every important Dart and Flutter feature instead of relying on generated boilerplate code.

## What Is A Function?

A function is a named block of code that performs a task.

You can think of a function as a custom instruction. Once a function has been defined, it can be executed whenever needed.

For example:

```dart id="09slrf"
void sayHello() {
  print('Hello!');
}
```

This code defines a function named `sayHello`.

However, defining a function does not automatically run it. To execute the function, you must call it:

```dart id="jh5zfi"
sayHello();
```

## Calling A Function

A function is called by writing its name followed by parentheses.

```dart id="3ac06j"
functionName();
```

The parentheses are important because they tell Dart that the function should be executed.

Without calling the function, the code inside the function body will not run.

## Function Structure In Dart

A basic Dart function has this structure:

```dart id="nbewi2"
returnType functionName() {
  // function body
}
```

Example:

```dart id="rh94cs"
void main() {
  print('Hello Flutter!');
}
```

This function has three important parts:

| Part          | Example   | Meaning                                        |
| ------------- | --------- | ---------------------------------------------- |
| Return type   | `void`    | The function does not return a value           |
| Function name | `main`    | The name of the function                       |
| Function body | `{ ... }` | The code that runs when the function is called |

## The `void` Return Type

The word `void` means that a function does not return a value.

For example:

```dart id="62bi6x"
void greet() {
  print('Welcome!');
}
```

This function performs an action, but it does not send any result back.

That is why its return type is `void`.

## The `main()` Function

The `main()` function is special in Dart.

It is the entry point of the application. This means Dart automatically looks for `main()` and executes it when the program starts.

Example:

```dart id="zie8bx"
void main() {
  print('App started!');
}
```

You do not need to manually call `main()` yourself. Dart calls it automatically when the app runs.

## The `runApp()` Function

In Flutter apps, one of the most important functions is `runApp()`.

`runApp()` is provided by the Flutter framework, not by Dart itself.

Its job is to start the Flutter app and display a user interface on the screen.

A basic Flutter app usually starts like this:

```dart id="q6h1ey"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello Flutter!'),
    ),
  );
}
```

In this example:

* `main()` is the entry point of the app.
* `runApp()` starts the Flutter application.
* `MaterialApp` creates a basic Flutter app structure.
* `Text` displays text on the screen.

## Why `runApp()` Must Be Inside `main()`

In Dart, executable code should be placed inside a function body.

Writing this directly in `main.dart` is incorrect:

```dart id="zrw9d7"
runApp();
```

Dart expects executable instructions to be inside a function.

The correct structure is:

```dart id="zt1i7e"
void main() {
  runApp();
}
```

However, this still requires Flutter to know what `runApp()` is. Since `runApp()` comes from Flutter, the correct import is also needed:

```dart id="bmreux"
import 'package:flutter/material.dart';
```

## Defining vs Calling A Function

There is an important difference between defining and calling a function.

Defining a function means creating it:

```dart id="6c63hu"
void main() {
  print('Hello!');
}
```

Calling a function means executing it:

```dart id="xuho29"
main();
```

However, in a Dart app, you normally do not call `main()` manually because Dart calls it automatically.

For other functions, you call them yourself when you want their code to run.

## Custom Functions

Developers can create their own functions.

Example:

```dart id="v7x234"
void main() {
  greetUser();
}

void greetUser() {
  print('Welcome to Flutter!');
}
```

Here, `greetUser()` is a custom function.

It is defined once and then called inside `main()`.

## Functions With Parameters

Functions can also receive input values through parameters.

Example:

```dart id="8yv8se"
void main() {
  greetUser('Khanh');
}

void greetUser(String name) {
  print('Hello, $name!');
}
```

In this example:

* `name` is a parameter.
* `'Khanh'` is the value passed into the function.
* The function uses that value inside its body.

## Functions With Return Values

Some functions return a result.

Example:

```dart id="645a7x"
void main() {
  int result = addNumbers(3, 5);
  print(result);
}

int addNumbers(int a, int b) {
  return a + b;
}
```

In this example:

* `addNumbers()` returns an `int`.
* The `return` keyword sends the result back.
* The result is stored in the `result` variable.

## Common Beginner Errors

### Calling A Function Outside A Function Body

Incorrect:

```dart id="vgw2bv"
runApp();
```

Correct:

```dart id="l87zba"
void main() {
  runApp();
}
```

### Using `runApp()` Without Importing Flutter

Incorrect:

```dart id="bc30ha"
void main() {
  runApp();
}
```

Correct:

```dart id="m22qcs"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello Flutter!'),
    ),
  );
}
```

## Notes

Functions are one of the most important concepts in Dart and Flutter. They allow code to be organized into reusable instructions.

The `main()` function is required because it tells Dart where the program starts. The `runApp()` function is required in Flutter because it starts the process of showing the app’s user interface on the screen.

Understanding functions early makes it easier to understand widgets, classes, state, and the rest of Flutter development.

## Summary

Functions are named blocks of reusable code. In Dart, functions are defined with a return type, a name, parentheses, and a body. The `main()` function is the entry point of every Dart and Flutter app, and Flutter apps use `runApp()` inside `main()` to start displaying a user interface.
