# 009 - Running a First Flutter App

## Section

Setup

## Main Idea

This lecture shows how to run the first Flutter app on a virtual device.

After creating a Flutter project and opening it in VS Code, students now launch the app on an Android emulator or iOS simulator. The lecture also introduces Flutter’s fast development feedback loop through Hot Reload and Hot Restart.

The goal is to see a real Flutter app running on a mobile device emulator for the first time.

## What You Need Before This Lecture

Before running the app, students should already have:

* Flutter installed
* A Flutter project created
* VS Code installed
* Flutter extension installed in VS Code
* An Android emulator or iOS simulator configured
* The project opened in VS Code

## Starting Point

The instructor provides a `main.dart` file attached to the lecture.

Students should replace the existing file in:

```txt id="yxax64"
lib/main.dart
```

with the provided `main.dart` file.

This ensures that everyone has the same starting code.

At this stage, students do not need to understand all the code yet. The code will be explained step by step later in the course.

## Why Replace `main.dart`?

The generated Flutter project already contains code, but the instructor wants all students to start from the same version.

Replacing `main.dart` makes sure that:

* Everyone sees the same app
* Everyone follows the same code
* Future explanations match the project
* The first run behaves consistently

## Step 1: Make Sure A Device Is Available

Before running a Flutter app, a device must be available.

This can be:

* Android emulator
* iOS simulator
* Physical Android device
* Physical iPhone
* Desktop target
* Web browser

In this course, the instructor mainly uses the Android emulator because it works on Windows, macOS, and Linux.

The iOS simulator only works on macOS.

## Step 2: Launch An Emulator From VS Code

If no emulator is running, VS Code can launch one.

Open the Command Palette:

```txt id="fe9yrz"
View → Command Palette
```

or use the shortcut:

```txt id="wgobmj"
Ctrl + Shift + P
```

on Windows, or:

```txt id="537ldk"
Command + Shift + P
```

on macOS.

Then type:

```txt id="hpyx6q"
Flutter
```

Search for:

```txt id="5cmmfq"
Flutter: Launch Emulator
```

Select an emulator from the list.

VS Code will start the selected emulator.

## Step 3: Select The Target Device

At the bottom of VS Code, the status bar shows the currently selected target device.

If the status bar is hidden, enable it:

```txt id="sf9j7f"
View → Appearance → Status Bar
```

Click the device name in the status bar to choose another available device.

For this course, choose a mobile device such as:

```txt id="rhsgt6"
Android Emulator
```

or, on macOS:

```txt id="c3hx6l"
iOS Simulator
```

## Step 4: Run The Flutter App

There are multiple ways to run a Flutter app.

### Option 1: Run From VS Code

Open:

```txt id="wlk9fq"
lib/main.dart
```

Then use:

```txt id="kvkow3"
Run → Run Without Debugging
```

This builds the app and launches it on the selected device.

This is the option the instructor uses most often in the course.

### Option 2: Run From Terminal

Open a terminal inside VS Code:

```txt id="uftth1"
View → Terminal
```

Then run:

```bash id="sakj8j"
flutter run
```

This runs the app on the currently selected or available device.

### Option 3: Use The Run Button

In some VS Code setups, a Run option appears above the `main()` function.

Clicking it also starts the app.

## Step 5: Wait For The First Build

The first run can take some time.

Flutter needs to:

* Build the app
* Prepare platform-specific files
* Compile native code
* Install the app on the emulator
* Launch the app

The first build is usually slower.

Later builds are much faster.

## What Happens When The App Runs?

When the app starts successfully, it appears on the emulator or simulator.

This is the first Flutter app running on a virtual mobile device.

Everything visible on the screen is controlled by the code in:

```txt id="4nd5aq"
lib/main.dart
```

The app may be simple, but it proves that the Flutter setup works.

## VS Code Debug Console

When the app runs, VS Code may open a debug console.

The debug console can show:

* Build messages
* Runtime logs
* Error messages
* Flutter output

If nothing goes wrong, students do not need to focus on it yet.

## App Control Buttons

When the app is running, VS Code shows controls such as:

* Stop
* Restart
* Hot Reload
* Hot Restart
* Flutter DevTools

These controls help manage the running app.

## Flutter DevTools

Flutter DevTools may appear as an option after the app starts.

Flutter DevTools is a set of debugging and performance tools.

The course will cover it later, so students do not need to use it in this lecture.

## Step 6: Make A First Code Change

After the app is running, students make a small change in `main.dart`.

For example, find a text widget containing:

```txt id="w0lmar"
Flutter - The Complete Guide
```

Change it to:

```txt id="2rcxcw"
Flutter - The Complete Guide Course
```

Then save the file.

On Windows:

```txt id="d7xfs9"
Ctrl + S
```

On macOS:

```txt id="v5p4ky"
Command + S
```

After saving, the running app updates automatically.

This is Flutter’s fast development feedback loop.

## Hot Reload

Hot Reload updates the running app after code changes.

It is designed to be fast.

Hot Reload is useful for:

* UI changes
* Text changes
* Style changes
* Layout adjustments
* Small logic changes

In VS Code, Hot Reload often runs automatically when the file is saved.

In the terminal, Hot Reload can be triggered by pressing:

```txt id="2t1vms"
r
```

Hot Reload usually keeps the current app state.

For example, if a counter value is already `5`, Hot Reload may keep it as `5` while updating the UI.

## Hot Restart

Hot Restart fully restarts the Flutter app.

It reloads the app from the beginning and clears the current state.

In the terminal, Hot Restart can be triggered by pressing:

```txt id="xcbygp"
R
```

Hot Restart is useful when Hot Reload does not pick up a change correctly.

It is also useful for larger structural changes.

## Hot Reload vs Hot Restart

| Feature           | Hot Reload                  | Hot Restart                   |
| ----------------- | --------------------------- | ----------------------------- |
| Speed             | Very fast                   | Slower than Hot Reload        |
| Keeps app state   | Usually yes                 | No                            |
| Re-runs `main()`  | No                          | Yes                           |
| Best for          | UI tweaks and small changes | Bigger changes or state reset |
| Terminal shortcut | `r`                         | `R`                           |

## Why Hot Reload Is Powerful

Hot Reload makes Flutter development fast because developers do not need to rebuild and reinstall the full app after every small change.

Instead, changes are pushed into the running app almost instantly.

This helps developers:

* Experiment faster
* Fix UI issues quickly
* Try different layouts
* Change text and colors instantly
* Build apps with a smoother workflow

## Default Counter App Concept

The default Flutter starter app often contains a counter example.

It demonstrates a first version of state management.

A simplified example looks like this:

```dart id="k6d7id"
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Text(
          '$_counter',
          style: Theme.of(context).textTheme.headlineMedium,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## Code Explanation

### `_counter`

```dart id="sfeg1k"
int _counter = 0;
```

This stores the current counter value.

### `_incrementCounter()`

```dart id="uq0u57"
void _incrementCounter() {
  setState(() {
    _counter++;
  });
}
```

This function increases the counter value.

### `setState()`

```dart id="sr9j92"
setState(() {
  _counter++;
});
```

`setState()` tells Flutter that data has changed and the UI should be rebuilt.

### `Text('$_counter')`

```dart id="iqkzn1"
Text('$_counter')
```

This displays the current counter value on the screen.

### `FloatingActionButton`

```dart id="v199s1"
FloatingActionButton(
  onPressed: _incrementCounter,
  child: const Icon(Icons.add),
)
```

This creates a button. When pressed, it calls `_incrementCounter()`.

## Important Commands

List available devices:

```bash id="x7d37m"
flutter devices
```

Run the app:

```bash id="kl79fo"
flutter run
```

Run Flutter doctor:

```bash id="m0yuod"
flutter doctor
```

Open iOS Simulator on macOS:

```bash id="our0hg"
open -a Simulator
```

## Running From Terminal

When running with:

```bash id="fdn2lw"
flutter run
```

Flutter may show keyboard shortcuts.

Common shortcuts:

```txt id="96xqyo"
r → Hot Reload
R → Hot Restart
q → Quit
```

These shortcuts are useful when running apps directly from the terminal.

## Common Problems

### Problem: No devices found

Possible causes:

* Emulator is not running
* Simulator is not running
* Physical device is not connected
* Flutter cannot detect the device

Fix:

```bash id="3jpwl3"
flutter devices
```

Then start an emulator or simulator.

### Problem: App runs on the wrong device

Fix:

```txt id="7mxis5"
Click the device name in the VS Code status bar and select the correct target device.
```

### Problem: Hot Reload does not update the app

Fix:

```txt id="s7l7hp"
Save the file again.
Use the Hot Reload button.
Use Hot Restart if needed.
```

### Problem: First build is slow

This is normal.

The first build often takes longer because Flutter and the platform build tools need to prepare the app.

Subsequent runs are usually faster.

### Problem: iOS simulator not available on Windows

This is expected.

The iOS simulator only runs on macOS.

Windows users should use the Android emulator.

## Recommended Workflow

```txt id="8z0hke"
1. Open Flutter project in VS Code
2. Make sure main.dart is ready
3. Start an Android emulator or iOS simulator
4. Select the correct device in VS Code
5. Run the app
6. Wait for the first build
7. Make a small code change
8. Save the file
9. Watch Hot Reload update the app
10. Use Hot Restart if needed
```

## Important Notes

* The app is run on a selected target device.
* VS Code can start emulators from the Command Palette.
* The status bar shows the selected device.
* `flutter run` runs the app from the terminal.
* Run Without Debugging is commonly used in this course.
* Hot Reload updates the running app quickly.
* Hot Restart fully restarts the app and clears state.
* The first build may take longer than later builds.
* The Android emulator works on all major operating systems.
* The iOS simulator only works on macOS.

## Why This Lecture Matters

This lecture gives students their first real development experience with Flutter.

Instead of only installing tools or creating files, students now see an actual Flutter app running on a virtual device.

The lecture also introduces one of Flutter’s most important productivity features: Hot Reload.

Hot Reload makes Flutter development fast and interactive because changes can appear almost instantly in the running app.

## Summary

To run the first Flutter app, students need to start an emulator or simulator, select the correct target device, and run the app from VS Code or the terminal.

After the app is running, small code changes can be saved and reflected immediately through Hot Reload.

Hot Reload keeps development fast, while Hot Restart fully restarts the app when larger changes need to be applied.
