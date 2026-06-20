# How Programming Languages Work

## Overview

This lecture introduces the basic idea behind programming languages. It explains that programming is about writing instructions that a computer or mobile device can understand after the code has been processed by the language tools.

The lecture focuses on the code inside `main.dart` and explains that code is made up of words, symbols, and instructions. These instructions tell the computer what to do, what to display on the screen, and how to react to user actions such as button clicks.

This lecture is especially useful for beginners who have little or no prior programming experience.

## Learning Goals

By the end of this lecture, students will understand:

* What programming code represents
* Why code is made up of structured words and symbols
* The difference between keywords and identifiers
* Why code editors use syntax highlighting
* How code editors help detect mistakes early
* Why programming is learned by solving problems, not by memorizing keywords

## Key Points

* Programming is about writing instructions for a computer or device.
* Code is made up of words, symbols, and structured statements.
* These statements tell the app what to show and how to behave.
* Some words are built into the programming language and are called keywords.
* Other words are created by the developer and are called identifiers.
* Code editors use syntax highlighting to make code easier to read.
* Code editors can detect many mistakes while the code is being written.
* Developers do not need to memorize every keyword before learning to program.
* Programming is best learned by building things and solving problems.

## Programming As Instructions

When looking at a Dart file such as `main.dart`, beginners may first see a collection of strange words, symbols, and lines.

However, these lines are not random. They are structured instructions.

A program tells the computer what to do. For example, code can tell a Flutter app:

* What text to show on the screen
* Which colors to use
* What should happen when a button is pressed
* How the layout should be arranged
* Which files or packages should be connected

In Flutter, these instructions are written using Dart.

## Keywords

Keywords are words that are built into a programming language. They have a special meaning and must be written exactly as the language expects.

For example, in Dart:

```dart id="je6rf8"
import 'package:flutter/material.dart';
```

The word `import` is a keyword. It is built into Dart and is used to connect one file to another file or package.

Other examples of Dart keywords include:

```dart id="1y6pb9"
class
extends
return
void
const
```

These words have special meanings in the language. Developers cannot freely rename them.

## Identifiers

Identifiers are names created by the developer.

For example:

```dart id="2xvllt"
class MyApp extends StatelessWidget {
  const MyApp({super.key});
}
```

In this code, `MyApp` is an identifier. It is a name chosen by the developer.

The developer could rename `MyApp` to something else, such as:

```dart id="8sprre"
class FirstApp extends StatelessWidget {
  const FirstApp({super.key});
}
```

However, if the name is changed in one place, it must also be changed everywhere else it is used.

Unlike keywords, identifiers are flexible and developer-defined.

## Keywords vs Identifiers

| Type       | Meaning                  | Example                     | Can You Rename It? |
| ---------- | ------------------------ | --------------------------- | ------------------ |
| Keyword    | Built into the language  | `import`, `class`, `return` | No                 |
| Identifier | Created by the developer | `MyApp`, `FirstApp`         | Yes                |

Understanding this difference is important because it helps beginners read code more clearly.

## Syntax Highlighting

Code editors such as Visual Studio Code and Android Studio use syntax highlighting.

Syntax highlighting means the editor gives different colors to different parts of the code.

For example:

* Keywords may appear in one color
* Identifiers may appear in another color
* Strings may appear in another color
* Errors may be underlined

The exact colors are not important because they depend on the editor theme. What matters is that the colors help make code easier to read and understand.

Without syntax highlighting, all code would look the same, making it harder to quickly understand what is happening.

## Error Detection In Code Editors

Code editors do more than display text. They also help catch errors while the developer is writing code.

For example, if a developer misspells an identifier or writes invalid syntax, the editor may:

* Change the color of the word
* Show a red underline
* Display a warning
* Suggest a correction

This helps developers find mistakes early, before running the app.

## Learning Programming The Right Way

Beginners should not try to memorize all Dart keywords at the start.

Programming is not learned by memorizing documentation. It is learned by solving problems and building projects.

Throughout the course, students will naturally learn which keywords and structures are needed in different situations.

The most important goal is to understand how to combine words, symbols, and instructions to make the app do something useful.

## Code Example

```dart id="qsd4uw"
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Text('Hello Flutter'),
    );
  }
}
```

In this example:

* `import`, `void`, `class`, `extends`, `return`, and `const` are keywords.
* `main`, `MyApp`, `build`, and `context` are identifiers.
* The code combines keywords and identifiers to create instructions for the Flutter app.

## Notes

This lecture does not explain every line of Flutter or Dart code yet. Instead, it introduces the general idea of what code is and how programming languages work.

The key idea is that code is a structured set of instructions. These instructions are written using a combination of built-in language keywords and developer-defined identifiers.

As students continue through the course, they will gradually learn how to combine these pieces to build real Flutter applications.

## Summary

Programming languages allow developers to write human-readable instructions that computers can process and execute. Dart code is made up of keywords, identifiers, symbols, and statements. Code editors help make this code easier to read through syntax highlighting and early error detection. The best way to learn programming is not by memorizing keywords, but by using them to solve problems and build apps.
