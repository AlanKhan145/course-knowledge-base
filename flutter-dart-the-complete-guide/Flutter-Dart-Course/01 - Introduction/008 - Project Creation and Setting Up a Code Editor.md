# 008 - Project Creation and Setting Up a Code Editor

## Section

Setup

## Main Idea

This lecture shows how to create the first Flutter project and open it in a code editor.

After installing Flutter and the required platform tools, students are now ready to create an actual Flutter app project. The lecture uses the `flutter create` command to generate a new project and then opens that project in Visual Studio Code.

The main goal is to prepare a working Flutter project that is ready for coding.

## What You Need Before This Lecture

Before creating a Flutter project, students should already have:

* Flutter SDK installed
* Flutter added to PATH
* Platform tools installed
* Android emulator or iOS simulator configured
* `flutter doctor` working
* A terminal or command prompt available

## Step 1: Create A Projects Folder

First, create a folder where all Flutter projects will be stored.

Example folder name:

```txt
flutter_projects
```

This folder can be placed anywhere, such as:

* Desktop
* Documents
* Development folder
* Any custom workspace folder

The exact location is up to the developer.

## Folder Naming Rule

If the folder name contains multiple words, use underscores.

Good example:

```txt
flutter_projects
```

Avoid spaces:

```txt
flutter projects
```

Avoid dashes:

```txt
flutter-projects
```

Using underscores helps avoid path and command-line issues.

## Step 2: Open The Folder In Terminal

After creating the `flutter_projects` folder, open it in a terminal.

On Windows, you can use:

* Command Prompt
* PowerShell
* Windows Terminal

On macOS, you can use:

* Terminal

Navigate into the folder where you want to create your Flutter project.

Example:

```bash
cd Desktop/flutter_projects
```

The exact command depends on where you created the folder.

## Step 3: Create A New Flutter Project

To create a new Flutter project, run:

```bash
flutter create first_app
```

This command creates a new folder called:

```txt
first_app
```

Inside that folder, Flutter generates a complete starter project.

## Project Name Rules

Flutter project names should use lowercase letters and underscores.

Good examples:

```txt
first_app
my_flutter_app
todo_app
shopping_app
```

Bad examples:

```txt
First App
first-app
MyFlutterApp
my flutter app
```

Use underscores instead of spaces or dashes.

## What `flutter create` Does

The `flutter create` command generates a full Flutter project structure.

It creates:

* Dart source files
* Flutter configuration files
* Platform-specific folders
* Test files
* Dependency configuration
* A default starter app

The generated project is already runnable.

## Command Summary

```bash
mkdir flutter_projects
cd flutter_projects
flutter create first_app
```

After this, the project folder structure looks like this:

```txt
flutter_projects/
  first_app/
    lib/
    test/
    android/
    ios/
    web/
    windows/
    macos/
    linux/
    pubspec.yaml
```

The exact platform folders may depend on your Flutter setup and project settings.

## Step 4: Do Not Run The App Yet

After creating the project, Flutter may show instructions for running the app.

However, in this lecture, the app is not run immediately.

Instead, the next step is to open the project in a code editor because Flutter development requires writing and editing code.

## Step 5: Choose A Code Editor

A code editor is required for writing Flutter and Dart code.

The course recommends:

```txt
Visual Studio Code
```

VS Code is:

* Free
* Lightweight
* Fast
* Available on Windows, macOS, and Linux
* Highly customizable
* Well supported for Flutter development

Android Studio can also be used, but this course uses VS Code.

## VS Code vs Android Studio

| Editor             | Notes                                         |
| ------------------ | --------------------------------------------- |
| Visual Studio Code | Lightweight, fast, recommended in this course |
| Android Studio     | More full-featured IDE, also supports Flutter |
| Other editors      | Possible, but may require extra setup         |

The instructor recommends VS Code so students can follow the course more smoothly.

## Step 6: Install Visual Studio Code

Go to:

```txt
code.visualstudio.com
```

Download the version for your operating system.

VS Code is available for:

* Windows
* macOS
* Linux

After downloading, install it like any other application.

## Step 7: Open The Flutter Project In VS Code

Open VS Code.

Then choose:

```txt
Open Folder
```

Select the project folder:

```txt
first_app
```

Do not open only the `lib` folder.

Open the entire Flutter project folder.

Correct:

```txt
first_app/
```

Incorrect:

```txt
first_app/lib/
```

Opening the entire project allows VS Code to detect the Flutter project correctly.

## Step 8: Understand The Generated Project

After opening the project, VS Code shows many files and folders.

Some important ones are:

```txt
lib/main.dart
```

This is the main Dart file where the Flutter app starts.

```txt
pubspec.yaml
```

This file manages dependencies, assets, fonts, and project metadata.

```txt
android/
```

This contains Android-specific project files.

```txt
ios/
```

This contains iOS-specific project files.

```txt
test/
```

This contains test files.

## Important Project Files

### `lib/main.dart`

This is the main entry point of the Flutter app.

Most beginner Flutter projects start here.

### `pubspec.yaml`

This file is used to manage:

* App metadata
* Dependencies
* Assets
* Fonts
* Package versions

It uses YAML syntax, so indentation is important.

### Platform Folders

Flutter creates platform-specific folders so the same project can be built for different platforms.

Examples:

```txt
android/
ios/
web/
windows/
macos/
linux/
```

These folders contain native platform configuration files.

## Step 9: Install The Flutter Extension In VS Code

VS Code supports extensions.

Extensions add extra features to the editor.

For Flutter development, install the official Flutter extension.

In VS Code:

```txt
Extensions → Search "Flutter" → Install
```

The Flutter extension provides:

* Flutter project support
* Dart support
* Code completion
* Syntax highlighting
* Error checking
* Debugging tools
* Widget snippets
* Emulator/device integration

The Dart extension is usually installed together with the Flutter extension.

## Why The Flutter Extension Is Important

Without the Flutter extension, VS Code is just a general code editor.

With the Flutter extension, VS Code becomes much better for Flutter development.

It helps with:

* Writing Dart code faster
* Detecting errors
* Running Flutter apps
* Debugging apps
* Managing devices
* Using hot reload
* Navigating Flutter project files

## Default `main.dart` Example

A simple Flutter app entry point looks like this:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Hello Flutter'),
        ),
        body: const Center(
          child: Text('Welcome!'),
        ),
      ),
    );
  }
}
```

## Code Explanation

### `main()`

```dart
void main() {
  runApp(const MyApp());
}
```

`main()` is the starting point of the Dart program.

Flutter starts the app by calling `runApp()`.

### `MyApp`

```dart
class MyApp extends StatelessWidget
```

`MyApp` is a Flutter widget.

It extends `StatelessWidget`, which means it describes UI that does not manage internal changing state.

### `MaterialApp`

```dart
return MaterialApp(...)
```

`MaterialApp` provides Material Design app structure and configuration.

### `Scaffold`

```dart
home: Scaffold(...)
```

`Scaffold` gives a basic page layout with common app structure, such as an app bar and body.

### `AppBar`

```dart
appBar: AppBar(...)
```

`AppBar` creates the top bar of the app.

### `Center`

```dart
body: const Center(...)
```

`Center` places its child widget in the center of the screen.

### `Text`

```dart
child: Text('Welcome!')
```

`Text` displays text on the screen.

## Important Commands

Create a project:

```bash
flutter create first_app
```

Move into the project:

```bash
cd first_app
```

Open project in VS Code:

```bash
code .
```

Check Flutter setup:

```bash
flutter doctor
```

Run the app:

```bash
flutter run
```

The lecture creates the project and opens it in the editor. Running the app is usually covered immediately after or in the next step.

## Common Mistakes

### Mistake 1: Using spaces in project names

Bad:

```bash
flutter create first app
```

Good:

```bash
flutter create first_app
```

### Mistake 2: Using dashes in project names

Bad:

```bash
flutter create first-app
```

Good:

```bash
flutter create first_app
```

### Mistake 3: Opening the wrong folder in VS Code

Bad:

```txt
Open only lib/
```

Good:

```txt
Open the full first_app/ folder
```

### Mistake 4: Not installing the Flutter extension

Without the Flutter extension, VS Code will not provide the best Flutter development experience.

### Mistake 5: Editing `pubspec.yaml` with wrong indentation

`pubspec.yaml` is indentation-sensitive.

Incorrect indentation can break dependency or asset configuration.

## Recommended Workflow

```txt
1. Create a folder for Flutter projects
2. Open that folder in terminal
3. Run flutter create first_app
4. Open first_app in VS Code
5. Install the Flutter extension
6. Explore the generated files
7. Start editing lib/main.dart
8. Run the app on an emulator or simulator
```

## Important Notes

* `flutter create` creates a complete starter project.
* The same command works on Windows and macOS.
* Project names should use lowercase letters and underscores.
* VS Code is the recommended editor in this course.
* The Flutter extension is required for the best VS Code experience.
* `lib/main.dart` is the main app entry point.
* `pubspec.yaml` manages dependencies and assets.
* The generated project is ready to run.

## Why This Lecture Matters

This lecture moves from setup into real Flutter development.

Students create their first Flutter project and prepare their editor for coding. This is the transition point from installing tools to actually building apps.

Once the project is open in VS Code with the Flutter extension installed, students are ready to start exploring and modifying Flutter code.

## Summary

A new Flutter project can be created with the `flutter create` command.

The project should be opened in a code editor such as Visual Studio Code. VS Code should have the Flutter extension installed to provide Dart and Flutter development support.

After this lecture, students have a real Flutter project open and ready for coding.
