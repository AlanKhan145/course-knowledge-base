# 007 - macOS Setup

## Section

Setup

## Main Idea

This lecture explains how to install and configure Flutter on macOS.

macOS is the most complete development environment for Flutter because it can be used to build and test apps for iOS, macOS, Android, and web from one machine.

Unlike Windows, macOS can support both Android development and Apple platform development because it can run Xcode.

## Who Should Watch This Lecture?

This lecture is for students using a macOS device.

If you are using Windows, you can skip this lecture and follow the Windows setup lecture instead.

## Why macOS Setup Is Special

macOS is unique because it can support:

* Android development
* iOS development
* macOS desktop development
* Web development

This makes macOS the most flexible Flutter development platform.

The main reason is that Xcode, Apple’s official development tool, is only available on macOS.

## Big Picture

To set up Flutter on macOS, students need to install and configure:

```txt
1. Flutter SDK
2. PATH environment variable
3. Xcode
4. Xcode command-line tools
5. Xcode license agreement
6. iOS Simulator
7. CocoaPods
8. Android Studio
9. Android SDK
10. Android Emulator
11. flutter doctor verification
```

## Step 1: Visit The Official Flutter Website

Go to:

```txt
flutter.dev
```

Then select:

```txt
Get Started → Install → macOS
```

When choosing macOS, you are choosing the operating system you are developing on.

You are not choosing the final platform you want to build for.

For example:

```txt
Choose macOS because your computer is a Mac.
Do not choose Android just because you want to build Android apps.
```

The official Flutter documentation should always be checked because setup steps may change over time.

## Step 2: Check Your Mac CPU Type

Before downloading Flutter, check whether your Mac uses:

* Apple Silicon: M1, M2, M3, M4, etc.
* Intel processor

This matters because Flutter provides different SDK downloads depending on CPU architecture.

Choose the Flutter SDK version that matches your Mac.

```txt
Apple Silicon Mac → Download Apple Silicon / ARM64 Flutter SDK
Intel Mac → Download Intel Flutter SDK
```

## Step 3: Apple Silicon Extra Step

On Apple Silicon Macs, some tools may require additional compatibility support.

In some setup versions, this requires Rosetta 2.

A common command is:

```bash
softwareupdate --install-rosetta --agree-to-license
```

This may not always be required in the future, so students should check the official Flutter documentation when setting up a new machine.

## Step 4: Download The Flutter SDK

Download the Flutter SDK for macOS from the official Flutter documentation.

The Flutter SDK contains:

* Flutter framework
* Flutter command-line tools
* Dart SDK
* Project creation tools
* Build tools

After downloading, unzip the package.

## Step 5: Move Flutter SDK To A Permanent Folder

After unzipping the Flutter SDK, move it to a central location on your system.

Example folder structure:

```txt
~/develop/flutter
```

or:

```txt
~/tools/flutter
```

The exact folder name is up to you.

The important idea is that Flutter should be stored in a stable location where it will not be accidentally deleted.

Avoid putting the Flutter SDK in temporary folders such as Downloads.

## Step 6: Add Flutter To PATH

After installing the Flutter SDK, macOS must know where the Flutter command-line tools are located.

This is done by adding Flutter’s `bin` folder to the PATH environment variable.

The PATH entry should point to:

```txt
<flutter-sdk-location>/bin
```

Example:

```txt
$HOME/develop/flutter/bin
```

## Step 7: Check Your Shell

Open Terminal and run:

```bash
echo $SHELL
```

This tells you which shell your terminal uses.

Common results:

```txt
/bin/zsh
/bin/bash
```

Modern macOS versions usually use Zsh by default.

## Step 8: Update PATH Permanently

For Zsh, the official Flutter documentation commonly uses:

```txt
~/.zprofile
```

Open or create the file:

```bash
nano ~/.zprofile
```

Then add this line at the end:

```bash
export PATH="$HOME/develop/flutter/bin:$PATH"
```

Change the path if your Flutter SDK is stored somewhere else.

For example, if Flutter is stored in `~/tools/flutter`, use:

```bash
export PATH="$HOME/tools/flutter/bin:$PATH"
```

Save the file, close the terminal, and open a new terminal window.

## Step 9: Verify Flutter PATH

After reopening the terminal, run:

```bash
which flutter
```

If the setup is correct, this should show the path to the Flutter tool.

Example:

```txt
/Users/yourname/develop/flutter/bin/flutter
```

Then run:

```bash
flutter --version
dart --version
```

If these commands work, Flutter has been added to PATH successfully.

## Step 10: Run Flutter Doctor

Run:

```bash
flutter doctor
```

or:

```bash
flutter doctor -v
```

The first time this command runs, Flutter may download extra dependencies.

`flutter doctor` checks whether the system is ready for Flutter development.

It may show missing tools at this stage. That is normal because Xcode and Android Studio may not be fully configured yet.

## Step 11: Install Xcode

To build iOS and macOS apps, install Xcode.

The easiest way is through the Mac App Store.

Xcode is required for:

* iOS app development
* iOS Simulator
* macOS app development
* Apple platform build tools
* Swift and Objective-C tooling

Xcode is large, so installation may take time.

## Step 12: Configure Xcode Command-Line Tools

After installing Xcode, configure the command-line tools.

A common command is:

```bash
sudo sh -c 'xcode-select -s /Applications/Xcode.app/Contents/Developer && xcodebuild -runFirstLaunch'
```

This tells macOS which Xcode installation should be used by command-line tools.

If Xcode is installed in another location, the path must be adjusted.

## Step 13: Accept The Xcode License

After installing Xcode, accept the license agreement:

```bash
sudo xcodebuild -license
```

Read through the license, move to the end, then type:

```txt
agree
```

and press Enter.

Flutter cannot properly use Xcode until the license has been accepted.

## Step 14: Download iOS Platform Support

To make sure iOS platform support and simulator runtimes are available, run:

```bash
xcodebuild -downloadPlatform iOS
```

This helps prepare the system for iOS simulator development.

## Step 15: Install CocoaPods

CocoaPods is a dependency manager used by iOS and macOS projects.

Flutter plugins that use native iOS or macOS code often depend on CocoaPods.

A common installation command is:

```bash
sudo gem install cocoapods
```

If CocoaPods is already installed, keep it updated.

CocoaPods is important because many Flutter packages rely on native iOS dependencies.

Examples include packages for:

* Camera
* Maps
* Firebase
* Permissions
* Notifications
* Device APIs

## Step 16: Open The iOS Simulator

After Xcode is installed and configured, open the iOS Simulator:

```bash
open -a Simulator
```

This starts a virtual iPhone or iPad on your Mac.

The iOS Simulator lets you preview and test Flutter apps without a physical iPhone.

## Step 17: Install Android Studio

To build Android apps on macOS, install Android Studio.

Android Studio provides:

* Android SDK
* Android SDK Platform
* Android SDK Build-Tools
* Android SDK Platform-Tools
* Android SDK Command-line Tools
* Android Emulator

Download Android Studio from the official Android Studio website.

Make sure you download the correct version for your Mac:

```txt
Apple Silicon Mac → Apple Silicon version
Intel Mac → Intel version
```

After downloading, drag Android Studio into the Applications folder.

## Step 18: Complete Android Studio Setup

Open Android Studio.

The setup wizard will guide you through installing the required Android components.

Make sure the following are installed:

```txt
Android SDK
Android SDK Platform
Android Virtual Device
```

Accept the license agreements and finish the installation.

## Step 19: Install Android SDK Tools

In Android Studio, go to:

```txt
More Actions → SDK Manager
```

Under **SDK Platforms**, select the latest stable Android platform.

Under **SDK Tools**, make sure these tools are installed:

```txt
Android SDK Build-Tools
Android SDK Platform-Tools
Android SDK Command-line Tools
Android Emulator
```

Then apply the changes and accept any required licenses.

## Step 20: Accept Android Licenses

After installing the Android SDK tools, run:

```bash
flutter doctor --android-licenses
```

Accept all required Android licenses by typing:

```txt
y
```

when prompted.

Then run:

```bash
flutter doctor
```

again.

## Step 21: Create An Android Emulator

Open Android Studio and go to:

```txt
More Actions → Virtual Device Manager
```

Click:

```txt
Create Device
```

Choose a device template, such as:

```txt
Pixel 6
```

Then choose an Android system image and download it if needed.

Keep most default settings.

For emulator performance, hardware acceleration is recommended when available.

## Step 22: Start The Android Emulator

After creating the virtual device, click the Play button in the Virtual Device Manager.

This launches an Android emulator on your Mac.

The emulator can be used to test Flutter apps as Android apps.

## Step 23: Verify Full Setup

After setting up Flutter, Xcode, CocoaPods, Android Studio, and emulators, run:

```bash
flutter doctor -v
```

Ideally, you should see successful checks for:

```txt
Flutter
Xcode
Android toolchain
Android Studio
Connected devices
```

If `flutter doctor` reports problems, follow its instructions.

## macOS Setup Checklist

```txt
1. Visit flutter.dev
2. Choose macOS setup instructions
3. Check whether your Mac is Apple Silicon or Intel
4. Download the correct Flutter SDK
5. Extract the Flutter SDK
6. Move Flutter to a permanent folder
7. Add Flutter bin folder to PATH
8. Reopen terminal
9. Run which flutter
10. Run flutter doctor
11. Install Xcode
12. Configure Xcode command-line tools
13. Accept Xcode license
14. Download iOS platform support
15. Install CocoaPods
16. Open iOS Simulator
17. Install Android Studio
18. Install Android SDK tools
19. Accept Android licenses
20. Create Android emulator
21. Run flutter doctor again
```

## Useful Commands

Check shell:

```bash
echo $SHELL
```

Edit Zsh profile:

```bash
nano ~/.zprofile
```

Add Flutter to PATH:

```bash
export PATH="$HOME/develop/flutter/bin:$PATH"
```

Check Flutter path:

```bash
which flutter
```

Check Flutter version:

```bash
flutter --version
```

Check Dart version:

```bash
dart --version
```

Run Flutter doctor:

```bash
flutter doctor
```

Run detailed doctor check:

```bash
flutter doctor -v
```

Configure Xcode:

```bash
sudo sh -c 'xcode-select -s /Applications/Xcode.app/Contents/Developer && xcodebuild -runFirstLaunch'
```

Accept Xcode license:

```bash
sudo xcodebuild -license
```

Download iOS platform support:

```bash
xcodebuild -downloadPlatform iOS
```

Open iOS Simulator:

```bash
open -a Simulator
```

Install CocoaPods:

```bash
sudo gem install cocoapods
```

Accept Android licenses:

```bash
flutter doctor --android-licenses
```

## Common Problems

### Problem: `flutter` command not found

Possible causes:

* Flutter was not added to PATH.
* Wrong shell file was edited.
* Terminal was not restarted.
* The path points to the wrong folder.

Fix:

```txt
Check your Flutter SDK path.
Add the correct flutter/bin path to ~/.zprofile.
Close and reopen Terminal.
Run which flutter again.
```

### Problem: Xcode not detected

Possible causes:

* Xcode is not installed.
* Xcode command-line tools are not configured.
* Xcode license was not accepted.

Fix:

```bash
sudo sh -c 'xcode-select -s /Applications/Xcode.app/Contents/Developer && xcodebuild -runFirstLaunch'
sudo xcodebuild -license
flutter doctor
```

### Problem: CocoaPods issue

Possible causes:

* CocoaPods is not installed.
* CocoaPods is outdated.
* Ruby environment has issues.

Fix:

```bash
sudo gem install cocoapods
```

Then run:

```bash
flutter doctor
```

### Problem: Android toolchain missing

Possible causes:

* Android Studio is not installed.
* Android SDK tools are missing.
* Android licenses are not accepted.

Fix:

```bash
flutter doctor --android-licenses
flutter doctor
```

### Problem: iOS Simulator not available

Possible causes:

* Xcode setup is incomplete.
* iOS platform support is missing.
* Simulator runtime is not installed.

Fix:

```bash
xcodebuild -downloadPlatform iOS
open -a Simulator
```

## Important Notes

* macOS can support both iOS and Android Flutter development.
* Xcode is required for iOS and macOS builds.
* Android Studio is required for Android builds.
* CocoaPods is important for iOS and macOS Flutter plugins.
* Apple Silicon users should choose the Apple Silicon Flutter SDK.
* The Flutter SDK should be stored in a stable folder.
* The PATH should point to the Flutter `bin` directory.
* `flutter doctor` is the main tool for checking setup problems.
* Setup only needs to be done once.

## Why This Lecture Matters

This lecture prepares Mac users for full Flutter development.

With macOS, students can build and test Flutter apps for both major mobile platforms: Android and iOS. This makes macOS especially powerful for Flutter development.

Once the setup is complete, students can create Flutter projects and run them on both Android emulators and iOS simulators.

## Summary

Setting up Flutter on macOS requires installing the Flutter SDK, adding it to PATH, installing Xcode for iOS and macOS development, installing CocoaPods for native Apple dependencies, and installing Android Studio for Android development.

macOS is the only operating system that supports building Flutter apps for iOS, macOS, Android, and web from the same machine.

After completing setup, students should run `flutter doctor -v` to confirm that Flutter, Xcode, Android Studio, and the required toolchains are configured correctly.
