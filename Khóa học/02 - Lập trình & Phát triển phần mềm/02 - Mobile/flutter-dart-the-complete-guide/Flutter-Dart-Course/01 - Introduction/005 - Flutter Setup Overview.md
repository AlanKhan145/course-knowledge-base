# 005 - Flutter Setup Overview

## Section

Setup

## Main Idea

Before writing Flutter code, students need to install and configure several development tools.

This lecture gives a high-level overview of the Flutter setup process. It does not go into every operating-system-specific detail yet. Instead, it explains the main tools needed for Flutter development and why each tool is required.

The detailed setup steps for Windows and macOS are covered in the following lectures.

## Why Setup Is Needed

Flutter allows developers to build apps for multiple platforms, but the development environment must be configured correctly first.

To build and preview Flutter apps, students need:

* The Flutter SDK
* Git
* Platform-specific tools
* A code editor
* Virtual devices or simulators
* A working Flutter environment verified by `flutter doctor`

## Step 1: Install The Flutter SDK

The first required tool is the Flutter SDK.

SDK stands for **Software Development Kit**.

The Flutter SDK includes:

* The Flutter framework
* Flutter command-line tools
* Dart support
* Tools for creating and running Flutter projects
* Tools for building apps for supported platforms

Without the Flutter SDK, developers cannot create or run Flutter apps.

## Step 2: Install Git

Git is a version control system.

It is not only used by Flutter developers. It is a general development tool used to track code changes, create snapshots, and return to older versions of a project if something goes wrong.

Flutter also uses Git internally, so Git must be installed for Flutter tooling to work correctly.

Git is useful because it allows developers to:

* Track project history
* Save code versions
* Restore previous code states
* Work with remote repositories
* Collaborate with other developers

## Step 3: Install Platform-Specific Tools

Installing Flutter is enough to write Flutter code, but it is not enough to build and preview apps for every platform.

To run apps on specific platforms, students also need platform-specific development tools.

## Android Development Tools

To build and test Android apps, students need Android Studio.

Android Studio provides:

* Android SDK
* Android build tools
* Android emulator
* Device manager
* Android platform tools

Android Studio can be installed on:

* Windows
* macOS
* Linux

This means Android Flutter apps can be built and tested on all major desktop operating systems.

## iOS Development Tools

To build and test iOS apps, students need Xcode.

Xcode is Apple’s development tool for iOS and macOS apps.

Xcode is only available on macOS.

This means:

```txt id="p68l22"
Windows or Linux
  → Can write Flutter code for iOS
  → Cannot build or test final iOS apps locally

macOS
  → Can write Flutter code for iOS
  → Can build and test iOS apps locally
```

This is why a macOS device is required for serious iOS Flutter development.

## Step 4: Set Up Virtual Devices

After installing platform tools, students should set up virtual devices.

Virtual devices allow developers to preview and test apps without using a real phone.

Examples include:

* Android Emulator
* iOS Simulator

Virtual devices are useful because they are easy to reset, recreate, and use for testing.

They help developers test their Flutter apps while coding.

## Android Emulator

The Android Emulator allows developers to run an Android device virtually on their computer.

It is useful for testing Android Flutter apps locally.

## iOS Simulator

The iOS Simulator allows developers to run iPhone or iPad simulations on a macOS machine.

It is useful for testing iOS Flutter apps locally.

The iOS Simulator requires macOS and Xcode.

## Step 5: Set Up A Code Editor

Students also need a code editor to write Flutter and Dart code.

Common choices include:

* Visual Studio Code
* Android Studio

The editor should have Flutter and Dart plugins installed so that it can provide:

* Code completion
* Syntax highlighting
* Error detection
* Debugging support
* Flutter project tools

## Step 6: Run `flutter doctor`

After installing the required tools, students should run:

```bash id="7ln3o5"
flutter doctor
```

This command checks the Flutter development environment and reports missing dependencies or configuration problems.

`flutter doctor` helps identify issues such as:

* Missing Flutter SDK setup
* Missing Android SDK
* Missing Xcode
* Missing licenses
* Missing editor plugins
* Device or emulator issues

It is one of the most important commands when setting up Flutter.

## Setup Checklist

```txt id="ztwe05"
1. Install Flutter SDK
2. Add Flutter to system PATH
3. Install Git
4. Install Android Studio
5. Install Android SDK and emulator
6. Install Xcode if using macOS for iOS development
7. Install a code editor
8. Install Flutter and Dart editor plugins
9. Create virtual devices or simulators
10. Run flutter doctor
11. Fix any reported issues
```

## Platform Setup Summary

| Tool                     | Required For                        | Platform Notes                  |
| ------------------------ | ----------------------------------- | ------------------------------- |
| Flutter SDK              | All Flutter development             | Required on every system        |
| Git                      | Flutter tooling and version control | Required                        |
| Android Studio           | Android builds and emulator         | Works on Windows, macOS, Linux  |
| Xcode                    | iOS and macOS builds                | macOS only                      |
| Android Emulator         | Android testing                     | Provided through Android Studio |
| iOS Simulator            | iOS testing                         | Requires macOS and Xcode        |
| VS Code / Android Studio | Writing code                        | Needs Flutter and Dart plugins  |
| `flutter doctor`         | Setup verification                  | Used after installation         |

## Important Notes

* Flutter setup requires multiple tools.
* The Flutter SDK is the core requirement.
* Git must be installed because Flutter tools depend on it.
* Android Studio is required for Android development.
* Xcode is required for iOS development.
* Xcode only works on macOS.
* Virtual devices are useful for testing apps without a real phone.
* `flutter doctor` should be used to verify the setup.
* The next lectures explain Windows and macOS setup in detail.

## Why This Lecture Matters

This lecture prepares students for the practical setup process.

Instead of immediately installing tools without context, students first learn what each tool does and why it is needed. This makes the following setup lectures easier to understand.

The most important idea is that Flutter development requires both the Flutter SDK and the platform-specific tools needed to build apps for Android or iOS.

## Summary

Setting up Flutter requires installing the Flutter SDK, Git, platform-specific tools such as Android Studio or Xcode, a code editor, and virtual devices for testing.

Android apps can be developed and tested on Windows, macOS, or Linux. iOS apps require macOS because Xcode is only available on macOS.

After installation, students should run `flutter doctor` to check whether the Flutter environment is configured correctly.
