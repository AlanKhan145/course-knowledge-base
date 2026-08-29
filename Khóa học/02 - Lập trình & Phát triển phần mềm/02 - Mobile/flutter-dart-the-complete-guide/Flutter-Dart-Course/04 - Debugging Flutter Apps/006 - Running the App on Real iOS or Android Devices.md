# Running the App on Real iOS or Android Devices

## Overview

Throughout this course, the app is mainly run on virtual devices, such as the Android Emulator or the iOS Simulator.

Virtual devices are very convenient during development because they are easy to start, changes are reflected quickly, and you can use your computer keyboard and development tools efficiently.

However, at some point, you should also test your Flutter app on real physical devices.

Real devices can reveal issues that virtual devices may not show, such as hardware-specific behavior, real performance limitations, screen differences, platform permissions, and device-specific bugs.

## Why Test on Real Devices?

Running your app on a physical Android or iOS device helps you test the app in a more realistic environment.

Real-device testing can help you discover:

* Performance issues on actual hardware
* Screen size and resolution differences
* Touch behavior differences
* Platform permission behavior
* Camera, microphone, GPS, and sensor behavior
* Device-specific rendering issues
* Problems that do not appear in emulators or simulators

Virtual devices are great for daily development, but real devices are important for final testing and quality assurance.

## Running on Android Devices

To run a Flutter app on a real Android device, you need to connect the device to your computer and enable developer-related settings.

Typical Android setup steps include:

1. Open the device settings
2. Go to **About Phone**
3. Tap **Build Number** several times to enable Developer Options
4. Go back to settings and open **Developer Options**
5. Enable **USB Debugging**
6. Connect the Android device to your computer with a USB cable
7. Confirm any trust or debugging prompt shown on the device

After setup, Flutter should be able to detect the device.

You can check connected devices with:

```bash id="nzd4nw"
flutter devices
```

To run the app on a specific device, use:

```bash id="k2ysbz"
flutter run -d <device-id>
```

## Running on iOS Devices

Running a Flutter app on a real iOS device requires macOS.

Even though your Flutter source code is the same across platforms, iOS apps can only be built and run from a Mac because Apple’s build tools and code signing system require macOS and Xcode.

Typical iOS setup steps include:

1. Use a macOS computer
2. Install Xcode
3. Connect the iPhone or iPad with a USB cable
4. Open Xcode and confirm that the device is recognized
5. Configure signing if required
6. Trust the development computer on the iOS device
7. Run the app from Flutter or Xcode

You can check connected devices with:

```bash id="jl8t5x"
flutter devices
```

And run the app with:

```bash id="smdwy9"
flutter run -d <device-id>
```

## Important iOS Note

You can only build and run iOS apps from a macOS device.

This means:

* You can write Flutter code on Windows, macOS, or Linux
* The same Flutter code can target Android and iOS
* But building and running the iOS version requires macOS and Xcode

This is a platform limitation caused by Apple’s tooling requirements.

## Official Flutter Documentation

The course provides links to the official Flutter documentation for step-by-step setup instructions.

When following the documentation, make sure to select the **Physical device** tab.

Useful setup pages include:

* [Run on Android devices](https://docs.flutter.dev/get-started/install/windows#set-up-your-android-device)
* [Run on iOS devices](https://docs.flutter.dev/get-started/install/macos#deploy-to-ios-devices)

These guides explain the exact setup steps for connecting and running Flutter apps on real devices.

## Hot Reload on Real Devices

Hot Reload and Hot Restart also work on physical devices.

This means you can still:

* Change your code
* Save the file
* See UI updates quickly
* Restart app state when needed

The workflow is very similar to using an emulator or simulator, but now the app is running on real hardware.

## Flutter Supports More Platforms

Flutter is not limited to Android and iOS.

Flutter can also be used to build apps for platforms such as:

* Windows
* macOS
* Linux
* Web

However, this course focuses on building mobile apps for Android and iOS.

If you want to explore other platforms, you can use the official Flutter documentation to learn how to run Flutter apps on desktop or web.

## Key Points

* Virtual devices are convenient for everyday development
* Real devices should also be used for testing
* Android devices require Developer Options and USB Debugging
* iOS devices require macOS, Xcode, and signing setup
* Use `flutter devices` to list connected devices
* Use `flutter run -d <device-id>` to run the app on a specific device
* Hot Reload works on real devices
* iOS apps can only be built and run from macOS
* Flutter supports more platforms, but this course focuses on Android and iOS

## Tips

* Test on real devices before publishing your app
* Use physical devices to check performance and platform-specific behavior
* Use `flutter doctor` if Flutter does not detect your device
* On Android, confirm that USB Debugging is enabled
* On iOS, check Xcode signing settings if deployment fails
* Test permission-related features on real hardware whenever possible

## Notes

Testing on real devices should become part of your normal Flutter development workflow.

Emulators and simulators are excellent for fast development, but they cannot perfectly represent all real-world conditions. A real phone may have different performance, screen behavior, permission prompts, or hardware capabilities.

By testing on real Android and iOS devices, you can make your app more stable and reliable for actual users.

## Summary

This lecture explains why and how to run Flutter apps on real Android and iOS devices. Virtual devices are convenient during development, but real devices are important for testing performance, permissions, hardware behavior, and platform-specific issues. Android devices require Developer Options and USB Debugging, while iOS devices require macOS, Xcode, and signing setup. Real-device testing helps ensure that your Flutter app works correctly in real-world conditions.
