# Using Third-Party Packages and Adding Google Fonts

## Overview

This lecture introduces how to use third-party packages in Flutter.

Flutter already includes many built-in widgets and tools, but real-world apps often need additional functionality. Third-party packages allow you to extend Flutter without building everything yourself.

In this lecture, the `google_fonts` package is used as a practical example. This package makes it easy to use fonts from Google Fonts in a Flutter app.

You will learn how to:

1. Find packages on `pub.dev`.
2. Add a package to a Flutter project.
3. Install dependencies.
4. Import the package in Dart code.
5. Use Google Fonts in a `Text` widget.

---

## Goal

The goal is to improve the question text styling by using a different font family.

Instead of using Flutter’s default font, we will use the `google_fonts` package to apply the Lato font.

---

## Key Points

* `pub.dev` is the official package repository for Dart and Flutter.
* Third-party packages are added to `pubspec.yaml`.
* Packages are listed under the `dependencies:` section.
* You can install a package with `flutter pub add package_name`.
* You can also manually edit `pubspec.yaml` and run `flutter pub get`.
* The `google_fonts` package provides easy access to Google Fonts.
* `GoogleFonts.lato()` returns a `TextStyle`.
* Google Fonts styles cannot usually be marked as `const`.
* You can use Google Fonts for a single widget or for an entire app theme.

---

## What Is `pub.dev`?

`pub.dev` is the official Dart and Flutter package repository.

It contains packages for many common needs, such as:

* Fonts
* HTTP requests
* State management
* Local storage
* Animations
* Icons
* Authentication
* Firebase integration
* Utilities

When building Flutter apps, you will often add third-party packages to avoid writing everything from scratch.

---

## Finding a Package

Each package page on `pub.dev` usually includes:

* README
* Installation instructions
* Examples
* Changelog
* Versions
* Scores
* Package metadata

Before adding a package, it is a good idea to check:

* Popularity
* Pub score
* Last update date
* Documentation quality
* Compatibility with your Flutter version

---

## Adding the `google_fonts` Package

The easiest way to add the package is to run this command in the project terminal:

```bash
flutter pub add google_fonts
```

This command automatically adds the package to `pubspec.yaml`.

Example:

```yaml
dependencies:
  flutter:
    sdk: flutter
  google_fonts: ^8.1.0
```

The exact version may be different depending on when you install the package.

---

## Installing Dependencies

After adding a package, Flutter needs to download it.

If you used:

```bash
flutter pub add google_fonts
```

Flutter usually runs the dependency installation automatically.

If you manually edited `pubspec.yaml`, run:

```bash
flutter pub get
```

Many IDEs also run `flutter pub get` automatically when you save `pubspec.yaml`.

---

## Importing the Package

After installing the package, import it into the Dart file where you want to use it.

```dart
import 'package:google_fonts/google_fonts.dart';
```

For example, if you want to style the question text in the questions screen, add the import at the top of `questions_screen.dart`.

---

## Using Google Fonts in a `Text` Widget

Before using Google Fonts, you might have a normal `TextStyle`.

```dart
Text(
  currentQuestion.text,
  style: const TextStyle(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
  textAlign: TextAlign.center,
)
```

To use Google Fonts, replace `TextStyle` with `GoogleFonts.lato()`.

```dart
Text(
  currentQuestion.text,
  style: GoogleFonts.lato(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
  textAlign: TextAlign.center,
)
```

This applies the Lato font family to the question text.

---

## Why `const` Must Be Removed

A normal `TextStyle` can often be marked as `const`.

```dart
style: const TextStyle(
  color: Colors.white,
)
```

However, `GoogleFonts.lato()` is a method call.

```dart
style: GoogleFonts.lato(
  color: Colors.white,
)
```

Because it creates the style at runtime, it cannot be marked as `const`.

So this is incorrect:

```dart
style: const GoogleFonts.lato(
  color: Colors.white,
)
```

Instead, remove `const` from the full style expression.

You can still use `const` for values inside the style when applicable.

```dart
style: GoogleFonts.lato(
  color: const Color.fromARGB(255, 201, 153, 251),
  fontSize: 24,
  fontWeight: FontWeight.bold,
)
```

---

## Styling the Question Text

Example:

```dart
Text(
  currentQuestion.text,
  style: GoogleFonts.lato(
    color: const Color.fromARGB(255, 201, 153, 251),
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
  textAlign: TextAlign.center,
)
```

This does three things:

1. Applies the Lato font.
2. Makes the text larger.
3. Makes the text bold.

---

## Using Google Fonts on the Start Screen

You can also use the same font on the start screen.

First, import the package:

```dart
import 'package:google_fonts/google_fonts.dart';
```

Then use `GoogleFonts.lato()` in the `Text` widget.

```dart
Text(
  'Learn Flutter the fun way!',
  style: GoogleFonts.lato(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
)
```

This gives the start screen text the same font style as the questions screen.

---

## Using an Existing `TextStyle`

You can also combine Google Fonts with an existing `TextStyle`.

```dart
Text(
  'This is Google Fonts',
  style: GoogleFonts.lato(
    textStyle: const TextStyle(
      color: Colors.blue,
      letterSpacing: 0.5,
    ),
  ),
)
```

This applies the Lato font while also using the existing style settings.

---

## Overriding Font Properties

You can override font size, weight, or style directly.

```dart
Text(
  'This is Google Fonts',
  style: GoogleFonts.lato(
    fontSize: 48,
    fontWeight: FontWeight.w700,
    fontStyle: FontStyle.italic,
  ),
)
```

This is useful when you want the same font family but different text appearances.

---

## Using `GoogleFonts.getFont()`

Instead of calling a specific method such as:

```dart
GoogleFonts.lato()
```

you can also load a font by name:

```dart
GoogleFonts.getFont('Lato')
```

Example:

```dart
Text(
  'This is Google Fonts',
  style: GoogleFonts.getFont(
    'Lato',
    color: Colors.white,
    fontSize: 24,
  ),
)
```

This can be useful when the font name is stored dynamically.

---

## Applying Google Fonts to the Whole App

Instead of applying Google Fonts to individual widgets, you can apply it to the entire app theme.

```dart
ThemeData _buildTheme(Brightness brightness) {
  final baseTheme = ThemeData(brightness: brightness);

  return baseTheme.copyWith(
    textTheme: GoogleFonts.latoTextTheme(
      baseTheme.textTheme,
    ),
  );
}
```

Then use it in `MaterialApp`:

```dart
MaterialApp(
  theme: _buildTheme(Brightness.dark),
  home: const MyHomePage(),
)
```

This makes Lato the default font for the app’s text theme.

---

## Complete Example

```dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}

class _QuestionsScreenState extends State<QuestionsScreen> {
  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[0];

    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              currentQuestion.text,
              style: GoogleFonts.lato(
                color: const Color.fromARGB(255, 201, 153, 251),
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 30),
            ...currentQuestion.getShuffledAnswers().map(
              (answer) => AnswerButton(
                answerText: answer,
                onTap: answerQuestion,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## Alternative: Manually Adding Custom Fonts

Using `google_fonts` is one easy way to add fonts, but Flutter also supports manually adding font files.

The general process is:

1. Download font files, such as `.ttf` or `.otf`.
2. Place them in a project folder, such as `fonts/`.
3. Register them in `pubspec.yaml`.
4. Use the registered font family in `TextStyle`.

Example folder structure:

```text
project/
├── fonts/
│   ├── Raleway-Regular.ttf
│   └── Raleway-Bold.ttf
└── pubspec.yaml
```

Example `pubspec.yaml` configuration:

```yaml
flutter:
  fonts:
    - family: Raleway
      fonts:
        - asset: fonts/Raleway-Regular.ttf
        - asset: fonts/Raleway-Bold.ttf
          weight: 700
```

Then use it in code:

```dart
Text(
  'Custom font text',
  style: TextStyle(
    fontFamily: 'Raleway',
    fontWeight: FontWeight.w700,
  ),
)
```

---

## Runtime Fetching and Bundling Fonts

The `google_fonts` package can fetch font files at runtime and cache them.

This is convenient during development.

For production apps, you may choose to bundle font files locally. Bundling fonts helps with:

* Offline support
* Avoiding runtime network requests
* More predictable font loading
* Reducing visual font swapping

---

## Notes

Third-party packages are a core part of Flutter development.

The `google_fonts` package is useful because it gives quick access to many Google Fonts without manually downloading and configuring font files.

When using `GoogleFonts.lato()`, the returned value is a `TextStyle`, so it can be used anywhere a `TextStyle` is expected.

Because Google Fonts styles are created through method calls, widgets using them usually cannot be marked as `const`.

---

## Summary

This lecture introduced third-party packages in Flutter using the `google_fonts` package.

Packages are found on `pub.dev`, added to `pubspec.yaml`, and installed with `flutter pub get` or `flutter pub add`.

After importing `package:google_fonts/google_fonts.dart`, you can use methods such as `GoogleFonts.lato()` to apply custom fonts to text widgets.

Using third-party packages makes Flutter development faster and gives access to a large ecosystem of reusable tools.
