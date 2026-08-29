# 004 - One Codebase Multiple Platforms

## Section

Introduction

## Main Idea

Flutter allows developers to write one shared Dart codebase and use it to build apps for multiple target platforms.

This is one of Flutter’s biggest advantages. Instead of creating separate projects for Android, iOS, web, Windows, macOS, and Linux, developers can write one Flutter project and reuse most of the same code across platforms.

However, it is important to understand the difference between **writing the code** and **building the final app package**. You can write Flutter code on different operating systems, but some platforms require specific machines to build or test the final app.

## What Does “One Codebase” Mean?

A codebase is the collection of source code files that make up an application.

With Flutter, developers can create one shared codebase and use it to target multiple platforms.

```txt id="l2xgrd"
One Dart + Flutter codebase
        ↓
Flutter tooling
        ↓
Android / iOS / Web / Windows / macOS / Linux
```

This means the same core app logic and user interface code can be reused across different platforms.

## Supported Target Platforms

Flutter can be used to build apps for several platforms, including:

* Android
* iOS
* Web
* Windows
* macOS
* Linux

Flutter originally focused on mobile app development for Android and iOS. Even today, mobile development is still one of Flutter’s strongest and most common use cases.

## Course Focus

Although Flutter can target many platforms, this course focuses mainly on building mobile apps.

The primary target platforms in this course are:

* Android
* iOS

The knowledge learned in the course can still help with web and desktop Flutter development, but those platforms are not the main focus.

If a student is mainly interested in Flutter for web or desktop apps, this specific course may not be the best fit.

## Writing Code vs Building Apps

A very important distinction is:

```txt id="2ubxau"
Writing Flutter code ≠ Building the final app package
```

Because Flutter uses one shared codebase, developers can write the same Flutter code on different machines.

However, generating the final app package for certain platforms may require a specific operating system.

## Platform Build Restrictions

| Target Platform | Can Write Code Anywhere? | Build Requirement        |
| --------------- | -----------------------: | ------------------------ |
| Android         |                      Yes | macOS, Windows, or Linux |
| Web             |                      Yes | macOS, Windows, or Linux |
| iOS             |                      Yes | macOS required           |
| macOS           |                      Yes | macOS required           |
| Windows         |                      Yes | Windows required         |
| Linux           |                      Yes | Linux required           |

## iOS And macOS Restrictions

Developers can write iOS and macOS Flutter code on a Windows or Linux machine because the codebase is shared.

However, they cannot build the final iOS or macOS app package on Windows or Linux.

To build and test iOS or macOS apps properly, a macOS device is required.

For example:

```txt id="k2zohq"
Windows machine
  → Can write Flutter code for iOS
  → Cannot build final iOS app package

macOS machine
  → Can write Flutter code for iOS
  → Can build final iOS app package
```

This matters when preparing an app for the App Store.

## Android And Web Restrictions

Android and web apps are more flexible.

You can write, test, and build Android or web Flutter apps on:

* macOS
* Windows
* Linux

This makes Android and web development easier to start with if you do not have a macOS device.

## Why One Codebase Is Valuable

Maintaining one shared codebase has several advantages:

* Less duplicate code
* Faster development
* Easier maintenance
* Shared business logic
* Shared UI structure
* Faster bug fixing
* Easier testing
* One development team can target multiple platforms

Instead of building and maintaining separate apps for each platform, a team can work on one Flutter project and adapt it where needed.

## Platform-Specific Features

Even though Flutter uses one shared codebase, apps may still need platform-specific features.

Examples include:

* Camera
* GPS
* File system
* Push notifications
* Native permissions
* Device sensors
* Platform-specific UI behavior

Flutter can access these features through plugins and platform-specific integration tools.

## Important Notes

* Flutter allows developers to write one codebase for many platforms.
* Mobile apps for Android and iOS are the main focus of this course.
* Flutter can also target web and desktop platforms.
* Writing code for a platform is not the same as building the final app package.
* iOS and macOS apps require a macOS machine to build and test properly.
* Windows apps require a Windows machine to build.
* Linux apps require a Linux machine to build.
* Android and web apps can be built on macOS, Windows, or Linux.

## Mental Model

A useful way to think about Flutter is:

```txt id="q4mlnx"
Shared Flutter code
        ↓
Platform-specific build process
        ↓
Final app for each target platform
```

The code can be shared, but the final build process still depends on the target platform.

## Why This Lecture Matters

This lecture explains both the power and the practical limitations of Flutter’s cross-platform model.

The power is that developers can write one codebase and target multiple platforms.

The limitation is that some final app builds still require specific operating systems, especially iOS and macOS builds.

Understanding this early helps students plan their development setup correctly.

## Summary

Flutter allows developers to build apps for multiple platforms from one shared Dart codebase. This reduces development time and makes app maintenance easier.

However, while Flutter code can be written on different machines, building final app packages has some platform restrictions. Android and web apps can be built on macOS, Windows, or Linux, but iOS and macOS builds require a macOS device.

This course focuses mainly on mobile app development for Android and iOS.
