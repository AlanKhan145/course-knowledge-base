# 003 - Flutter Uses Dart

## Section

Introduction

## Main Idea

Flutter is not a programming language. Flutter is a framework used to build user interfaces, while Dart is the actual programming language used to write Flutter apps.

When learning Flutter, students are also learning Dart because Flutter apps are written in Dart. The Flutter framework provides UI building blocks and tools, while Dart provides the language syntax and logic used to create the app.

## What Flutter Is Not

Flutter itself is not a programming language.

Students are not learning a “Flutter programming language.” Instead, they are learning how to use the Flutter framework with the Dart programming language.

A simple way to understand this is:

```txt
Dart = the programming language
Flutter = the framework built on top of Dart
```

## What Is A Framework?

A framework is a collection of packages, tools, utility functions, and pre-built features that developers can use in their code.

In the case of Flutter, the framework gives developers many ready-to-use features for building user interfaces.

For example, Flutter provides code that helps developers create:

* Buttons
* Text
* Images
* Layouts
* Screens
* Forms
* Navigation
* Interactive UI components

Instead of building every UI element from scratch, developers use the tools and components provided by Flutter.

## What Is Dart?

Dart is the programming language used to write Flutter apps.

Dart was developed by Google. It can be used outside of Flutter, but Flutter is currently the main and most popular use case for Dart.

In a Flutter app, developers write Dart code and use Flutter features inside that Dart code to build user interfaces and app logic.

## How Flutter And Dart Work Together

Flutter sits on top of Dart.

Developers write Dart code that uses Flutter’s UI framework. Then, Flutter’s tools convert that Dart code into platform-specific machine code that can run on different devices.

The basic process looks like this:

```txt
Dart code
  + Flutter framework
        ↓
Flutter tooling
        ↓
Platform-specific machine code
        ↓
Android / iOS / other platforms
```

This is what allows Flutter to create cross-platform apps from one shared codebase.

## Why Dart Is Used With Flutter

Dart is designed to work well with Flutter’s development model. It supports fast development and high-performance production apps.

Some important characteristics of Dart include:

* It is developed by Google.
* It is object-oriented.
* It is strongly typed.
* Its syntax is familiar to developers who know languages like Java, C#, or JavaScript.
* It supports fast development workflows.
* It works closely with Flutter’s tooling.

## JIT And AOT Compilation

Dart supports two important compilation modes:

### JIT: Just-In-Time Compilation

JIT compilation is useful during development. It allows faster feedback while building the app.

This helps support features like hot reload, where developers can quickly see changes without fully restarting the app.

### AOT: Ahead-Of-Time Compilation

AOT compilation is used for production builds. It compiles Dart code into optimized machine code before the app runs.

This helps Flutter apps perform well on real devices.

## Null Safety

Dart supports null safety, which helps prevent common errors caused by unexpected null values.

With null safety, developers must clearly state whether a variable is allowed to be null.

Example:

```dart
String nonNullableName = 'Dart'; // Cannot be null

String? nullableName; // Can be null
```

This makes Dart code safer and more predictable.

## Code Example

```dart
void main() {
  String name = 'Flutter Developer';
  int year = 2024;
  bool isExcited = true;

  print('Hello, $name!');
  print('Learning Flutter since $year: $isExcited');

  String? nullableName; // Can be null
  String nonNullableName = 'Dart'; // Cannot be null

  print(nonNullableName.toUpperCase());
}
```

## Code Explanation

```dart
void main()
```

This is the entry point of a Dart program. The code inside `main()` runs when the program starts.

```dart
String name = 'Flutter Developer';
```

This creates a text variable.

```dart
int year = 2024;
```

This creates an integer variable.

```dart
bool isExcited = true;
```

This creates a boolean variable that stores either `true` or `false`.

```dart
print('Hello, $name!');
```

This prints text to the console. The `$name` syntax inserts the value of the `name` variable into the string.

```dart
String? nullableName;
```

The `?` means this variable is allowed to contain `null`.

```dart
String nonNullableName = 'Dart';
```

This variable cannot be null.

## Important Notes

* Flutter is a framework, not a programming language.
* Dart is the programming language used with Flutter.
* Students learning Flutter will also learn Dart.
* Flutter provides UI components and development tools.
* Dart provides the language used to write the app.
* Flutter tooling converts Dart code into platform-specific machine code.
* No prior Dart knowledge is required for this course.

## Why This Lecture Matters

This lecture clarifies the relationship between Flutter and Dart.

Many beginners may think Flutter itself is the language. In reality, Flutter is the framework, and Dart is the language. Understanding this distinction makes it easier to follow the rest of the course.

When students write Flutter apps, they are writing Dart code that uses Flutter features.

## Summary

Flutter uses Dart as its programming language. Flutter provides the framework, UI components, and tools needed to build cross-platform apps, while Dart is the language used to write the code.

By learning Flutter, students will also learn Dart step by step. No prior Dart experience is required because the course teaches both Flutter and Dart together.
