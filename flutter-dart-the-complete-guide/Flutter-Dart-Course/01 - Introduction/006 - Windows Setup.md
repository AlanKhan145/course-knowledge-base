# 006 - Windows Setup

## Section

Setup

## Main Idea

This lecture explains how to install Flutter and the required development tools on a Windows machine.

The goal is to prepare a complete Flutter development environment for building and testing Android apps on Windows. Since iOS development requires macOS and Xcode, Windows users cannot build or test iOS apps directly on their Windows machine.

By the end of this setup, students should be able to run Flutter commands, create Flutter projects, and test Android apps using an Android emulator.

## Who Should Watch This Lecture?

This lecture is for students using a Windows computer.

If you are using macOS, you can skip this lecture and follow the macOS setup lecture instead.

## Big Picture

To set up Flutter on Windows, students need to install and configure several tools:

```txt
1. Git
2. Flutter SDK
3. Windows PATH environment variable
4. Android Studio
5. Android SDK
6. Android SDK tools
7. Android emulator
8. Flutter Doctor verification
```

These tools work together to let Flutter create, build, and run Android apps on Windows.

## Step 1: Visit The Official Flutter Website

The first step is to visit the official Flutter website:

```txt
flutter.dev
```

From there, students should go to:

```txt
Get Started → Install → Windows
```

It is important to understand that when choosing “Windows” on the setup page, you are choosing the operating system you are developing on.

You are not choosing the final platform you want to build for.

For example:

```txt
You choose Windows because your computer runs Windows.
You do not choose macOS just because you want to build a macOS app.
```

## Why The Official Documentation Matters

The official Flutter documentation should always be checked during installation because setup steps can change over time.

The video gives guidance, but the documentation is the most up-to-date source.

Students should use both:

* The course video
* The official Flutter documentation

## Step 2: Install Git

Before installing Flutter, Windows users need to install Git.

Git is a version control tool used by developers to track changes in code. It is also required because Flutter uses Git internally.

Git allows developers to:

* Track code history
* Create code snapshots
* Restore previous versions
* Work with repositories
* Collaborate with others

## Installing Git On Windows

Download Git from the official Git website and run the installer.

Most default options can be accepted.

However, one important option should be selected if it is not selected by default:

```txt
Use Git and optional Unix tools from Command Prompt
```

This helps ensure Git works correctly from the Windows command line.

After installation, Git will be available on the system and Flutter can use it internally.

## Step 3: Download The Flutter SDK

After installing Git, download the Flutter SDK from the official Flutter documentation.

SDK means:

```txt
Software Development Kit
```

The Flutter SDK contains:

* Flutter framework
* Flutter command-line tools
* Dart SDK
* Build tools
* Project creation tools

The SDK usually downloads as a ZIP file on Windows.

## Step 4: Extract The Flutter SDK

After downloading the Flutter SDK ZIP file, extract it.

Inside the extracted files, there will be a folder named:

```txt
flutter
```

Move this `flutter` folder to a clean location on your computer.

Recommended examples:

```txt
C:\src\flutter
```

or

```txt
%USERPROFILE%\develop\flutter
```

## Important Folder Rules

When choosing where to store the Flutter SDK, avoid paths that contain:

* Spaces
* Special characters
* Non-English characters
* Folders that require administrator permissions

Good examples:

```txt
C:\src\flutter
C:\Users\YourName\develop\flutter
```

Bad examples:

```txt
C:\Program Files\flutter
C:\Users\Your Name\flutter
C:\Flutter SDK\flutter
```

A clean path helps prevent common build and permission problems.

## Step 5: Add Flutter To PATH

After extracting the Flutter SDK, Windows must be told where the Flutter command-line tools are located.

This is done by adding Flutter’s `bin` folder to the Windows `Path` environment variable.

The path should point to:

```txt
<flutter-sdk-location>\bin
```

Example:

```txt
C:\src\flutter\bin
```

or

```txt
%USERPROFILE%\develop\flutter\bin
```

## How To Edit PATH On Windows

Search for:

```txt
env
```

Then open:

```txt
Edit the system environment variables
```

Next:

```txt
Environment Variables → User variables → Path → Edit
```

Add a new entry pointing to the Flutter `bin` directory.

Example:

```txt
C:\src\flutter\bin
```

Then click OK to save the changes.

## Step 6: Restart Terminal

After updating PATH, close and reopen any open terminals or command prompts.

This is necessary because existing terminal windows may not detect the updated PATH immediately.

You can use:

* Command Prompt
* PowerShell
* Windows Terminal
* Git Bash

## Step 7: Verify Flutter Installation

Open a terminal and run:

```bash
flutter doctor
```

This command checks whether Flutter is correctly installed and whether required dependencies are missing.

You can also check the Flutter and Dart versions:

```bash
flutter --version
dart --version
```

If Windows says that the `flutter` command cannot be found, the PATH setup is probably incorrect.

In that case, check:

* Did you add the correct `bin` path?
* Did you add it to the correct `Path` variable?
* Did you close and reopen the terminal?
* Did you extract the Flutter folder correctly?

## Understanding Flutter Doctor Output

At this stage, `flutter doctor` may still show errors or warnings.

That is normal.

For example, it may report that the Android toolchain is missing.

This is expected because Android Studio and the Android SDK have not been fully installed yet.

The important thing is that the `flutter` command itself works.

## Step 8: Install Android Studio

To build and test Android apps, install Android Studio.

Android Studio is Google’s official Android development environment.

Flutter uses tools from Android Studio behind the scenes, including:

* Android SDK
* Android SDK Platform
* Android SDK Build-Tools
* Android SDK Platform-Tools
* Android SDK Command-line Tools
* Android Virtual Device tools

Download Android Studio and run the installer.

During installation, accept the default options in most cases.

Make sure this option is included:

```txt
Android Virtual Device
```

This is needed to create and run an Android emulator.

## Step 9: Complete Android Studio First-Time Setup

After installing Android Studio, open it.

The first-time setup wizard will appear.

Choose:

```txt
Custom setup
```

Then make sure the following components are selected:

```txt
Android SDK
Android SDK Platform
Android Virtual Device
```

You can usually accept the default installation location.

However, if your Windows user folder contains special characters, it may be safer to choose a cleaner SDK path.

After selecting the required components, accept the license agreements and finish the setup.

## Step 10: Install SDK Tools

After Android Studio opens, go to:

```txt
More Actions → SDK Manager
```

Under **SDK Platforms**, select the latest stable Android platform.

Under **SDK Tools**, make sure these are selected:

```txt
Android SDK Build-Tools
Android SDK Platform-Tools
Android SDK Command-line Tools
Android Emulator
```

Then click:

```txt
Apply
```

Accept the licenses and wait for the installation to finish.

## Step 11: Accept Android Licenses

After installing Android Studio and SDK tools, run:

```bash
flutter doctor --android-licenses
```

Accept the required Android licenses.

This step is important because Flutter may not be able to build Android apps until the licenses are accepted.

After that, run:

```bash
flutter doctor
```

again to check the setup.

## Step 12: Create An Android Virtual Device

To test Flutter apps without a real phone, create an Android emulator.

In Android Studio, go to:

```txt
More Actions → Virtual Device Manager
```

Then click:

```txt
Create Device
```

Choose a device template, such as:

```txt
Pixel 6
```

Then select and download a system image.

After that, finish the setup.

This creates a virtual Android device blueprint.

## Step 13: Start The Android Emulator

In the Virtual Device Manager, click the play button next to the virtual device.

This starts the Android emulator.

The emulator behaves like a real Android phone running on your Windows machine.

You can use it to test Flutter apps while coding.

## Android Emulator Notes

The Android emulator can be closed when you are done working.

You can restart it later from Android Studio’s Virtual Device Manager.

Using an emulator is convenient because:

* You do not need a physical Android phone.
* You can test apps locally.
* You can reset the device easily.
* You can create multiple device profiles.
* You can test different screen sizes.

## Windows And iOS Limitation

Windows users can write Flutter code for iOS because Flutter uses one shared codebase.

However, Windows users cannot build or test iOS apps directly on Windows.

To build or test iOS apps, you need:

```txt
macOS + Xcode
```

This means:

```txt
Windows
  → Can write Flutter code
  → Can build Android apps
  → Can build web apps
  → Can build Windows desktop apps
  → Cannot build iOS apps directly
```

## Optional: Windows Desktop App Support

Flutter can also build native Windows desktop apps.

For Windows desktop support, you may need Visual Studio Build Tools with the following workload:

```txt
Desktop development with C++
```

This is not required if you only want to build Android apps.

If `flutter doctor` reports missing Visual Studio components, install the required workload through the Visual Studio Installer.

## Recommended Windows Setup Checklist

```txt
1. Open flutter.dev
2. Go to Get Started / Install / Windows
3. Install Git for Windows
4. Download Flutter SDK ZIP
5. Extract Flutter SDK
6. Move flutter folder to a clean path
7. Add flutter\bin to PATH
8. Close and reopen terminal
9. Run flutter doctor
10. Install Android Studio
11. Install Android SDK components
12. Install Android SDK Command-line Tools
13. Accept Android licenses
14. Create Android emulator
15. Start Android emulator
16. Run flutter doctor again
```

## Useful Commands

Check Flutter installation:

```bash
flutter doctor
```

Check Flutter version:

```bash
flutter --version
```

Check Dart version:

```bash
dart --version
```

Accept Android licenses:

```bash
flutter doctor --android-licenses
```

Upgrade Flutter:

```bash
flutter upgrade
```

## Common Problems

### Problem: `flutter` command not found

Possible causes:

* Flutter `bin` folder was not added to PATH.
* Wrong path was added.
* Terminal was not restarted.
* Flutter SDK was not extracted correctly.

Fix:

```txt
Check PATH and make sure it points to flutter\bin.
Then close and reopen the terminal.
```

### Problem: Android toolchain missing

Possible causes:

* Android Studio is not installed.
* Android SDK is missing.
* SDK command-line tools are missing.

Fix:

```txt
Install Android Studio and required SDK tools.
Then run flutter doctor again.
```

### Problem: Android licenses not accepted

Fix:

```bash
flutter doctor --android-licenses
```

Accept all licenses, then run:

```bash
flutter doctor
```

### Problem: Emulator runs slowly

Possible causes:

* Hardware virtualization is disabled.
* Windows Hypervisor Platform is not enabled.
* System resources are limited.

Fix:

```txt
Enable hardware virtualization in BIOS if needed.
Use Android Studio emulator settings.
Close unnecessary applications.
```

### Problem: iOS build unavailable

Cause:

```txt
iOS builds require macOS and Xcode.
```

Fix:

```txt
Use a Mac when building or publishing iOS apps.
```

## Important Notes

* Windows setup is mainly for Android and Windows development.
* iOS development cannot be completed fully on Windows.
* Git must be installed before Flutter works correctly.
* Flutter SDK should be placed in a clean path.
* PATH must point to the Flutter `bin` folder.
* Android Studio provides important Android tools.
* The Android emulator allows local app testing.
* `flutter doctor` is the main tool for checking setup problems.
* Setup only needs to be done once.

## Why This Lecture Matters

This lecture prepares Windows users for Flutter development.

Without a correct setup, students will not be able to run Flutter commands, create projects, or test apps. Installing Flutter, Android Studio, and the Android emulator correctly is the foundation for the rest of the course.

Once this setup is finished, students can create new Flutter projects and start building Android apps.

## Summary

Setting up Flutter on Windows requires installing Git, downloading and extracting the Flutter SDK, adding Flutter to PATH, installing Android Studio, configuring the Android SDK, accepting Android licenses, and creating an Android emulator.

Windows users can build and test Android Flutter apps, but they cannot build iOS apps directly because iOS development requires macOS and Xcode.

After setup, students should use `flutter doctor` to confirm that everything is installed correctly.
