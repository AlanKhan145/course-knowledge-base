# 012 - Prompting Cursor to Build an iOS App with Expo

## Section

Module 6: Turning the Project into an iOS App

## Duration

2:08

## Main Idea

Moves the project from a web prototype to an installable iOS app. The presenter starts a fresh
Cursor chat (to keep this task separate from the web-build context) and asks it to build an iOS
app using ReactJS/React Native, previewable in the iOS Simulator via Expo. Expo and Xcode are
introduced as the two supporting tools needed: Expo previews/simulates the app on macOS, while
Xcode (downloaded separately from the App Store) provides the actual iOS Simulator. If a tool like
Expo isn't installed yet, Cursor will offer to install it directly and ask for confirmation before
proceeding; Xcode, by contrast, has to be installed manually beforehand. The presenter notes Cursor
produces a to-do list for this conversion and has to be confirmed step-by-step before it runs the
build.

## Key Topics Mentioned

* Starting a new Cursor chat/context for the iOS conversion task
* Target stack: ReactJS/React Native app, previewed via Expo
* Expo: previews/simulates the app on macOS
* Xcode: provides the iOS Simulator, must be downloaded from the App Store manually
* Cursor can offer to auto-install missing tooling (e.g., Expo) with user confirmation
* Cursor generates a to-do list and requires confirmation before running the build

## Prompt Used

```
Build an iOS app using ReactJS.
For this project, I need to be able to preview it in the simulator using Expo.
```

## Tooling Required

* Cursor
* Expo
* Xcode
* iOS Simulator
* Node.js
* npm

## Review Questions

1. Why does the presenter start a brand-new chat in Cursor for this stage instead of continuing
   the same conversation?
2. What is the difference in role between Expo and Xcode in this workflow?
3. Which of the two tools (Expo, Xcode) can Cursor offer to auto-install, and which must be
   installed manually — and why might that distinction exist?

## Summary

Kicks off the iOS conversion in a fresh Cursor chat with a short prompt asking for a ReactJS-based
iOS app previewable via Expo in the Simulator. Introduces Expo (macOS-side preview/simulation) and
Xcode (provides the actual Simulator, manual App Store install) as the two new tools required, and
notes that Cursor will propose a to-do list and can offer to install missing tooling like Expo on
its own.
