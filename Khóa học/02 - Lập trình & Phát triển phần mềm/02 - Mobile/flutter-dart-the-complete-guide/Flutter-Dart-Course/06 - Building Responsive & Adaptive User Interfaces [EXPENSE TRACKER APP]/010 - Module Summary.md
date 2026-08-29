# Module Summary: Responsive and Adaptive Flutter UI

## Overview

This module covered how to build Flutter apps that work well across different screen sizes, orientations, overlays, device shapes, and platforms.

Using the Expense Tracker app as the main example, we improved the UI step by step so it could adapt to:

* portrait and landscape mode
* narrow and wide screens
* soft keyboard overlays
* device notches and camera cutouts
* Android and iOS platform conventions

The main goal of this module was to move beyond fixed layouts and build user interfaces that respond intelligently to their environment.

---

## Big Picture

Flutter apps should not assume that every device has the same screen size, shape, orientation, or platform style.

A good Flutter UI should adapt to both:

```text
Available space
Platform conventions
```

```mermaid
flowchart TD
    A[Flutter UI] --> B[Responsive Design]
    A --> C[Adaptive Design]

    B --> D[Adapts to screen size]
    B --> E[Adapts to orientation]
    B --> F[Adapts to available constraints]

    C --> G[Adapts to platform]
    C --> H[Android Material style]
    C --> I[iOS Cupertino style]
```

---

## Responsive vs Adaptive UI

| Concept       | Meaning                                 | Flutter Tools                                         |
| ------------- | --------------------------------------- | ----------------------------------------------------- |
| Responsive UI | Layout changes based on available space | `MediaQuery`, `LayoutBuilder`, `Expanded`, `Flexible` |
| Adaptive UI   | UI style changes based on platform      | `Platform`, Cupertino widgets, adaptive constructors  |

Responsive design asks:

```text
How much space do I have?
```

Adaptive design asks:

```text
Which platform am I running on?
```

---

# 1. Locking Device Orientation

At the beginning of the module, one simple solution was introduced: locking the app to a specific orientation.

This can be done with `SystemChrome`.

```dart
SystemChrome.setPreferredOrientations([
  DeviceOrientation.portraitUp,
]);
```

This prevents the app from rotating into landscape mode.

However, this is usually not the best long-term solution.

---

## Why Locking Orientation Is Limited

Locking orientation can avoid layout problems, but it does not truly solve them.

```mermaid
flowchart TD
    A[Layout breaks in landscape] --> B[Lock orientation]
    B --> C[Problem is hidden]
    C --> D[App still not responsive]

    A --> E[Build responsive layout]
    E --> F[Problem is solved properly]
```

A better approach is to build layouts that work in different orientations and screen sizes.

---

# 2. Updating the UI Based on Available Space

The first major responsive improvement was changing the Expense Tracker layout based on available width.

In portrait mode, the chart and list work well vertically.

```text
Portrait Layout

+----------------------+
| Chart                |
+----------------------+
| Expense List         |
|                      |
+----------------------+
```

In landscape mode, the vertical layout wastes space.

A better layout is horizontal:

```text
Landscape Layout

+----------------------+----------------------+
| Chart                | Expense List         |
|                      |                      |
+----------------------+----------------------+
```

---

## Using MediaQuery

`MediaQuery` allows us to read the size of the screen.

```dart
final width = MediaQuery.of(context).size.width;
```

Then we can conditionally render a different layout.

```dart
body: width < 600
    ? Column(
        children: [
          ExpenseChart(),
          Expanded(child: ExpenseList()),
        ],
      )
    : Row(
        children: [
          Expanded(child: ExpenseChart()),
          Expanded(child: ExpenseList()),
        ],
      ),
```

---

## MediaQuery Layout Flow

```mermaid
flowchart TD
    A[Build method runs] --> B[Read screen width with MediaQuery]
    B --> C{Width < 600?}

    C -->|Yes| D[Use Column]
    D --> E[Chart above list]

    C -->|No| F[Use Row]
    F --> G[Chart beside list]
```

The important lesson is that responsive design should often depend on **available width**, not just orientation.

A tablet in portrait mode might still have enough width for a side-by-side layout.

---

# 3. Understanding Size Constraints

Flutter layout is based on constraints.

The golden rule is:

```text
Constraints go down.
Sizes go up.
Parent sets position.
```

This means:

1. A parent sends size constraints to its child.
2. The child chooses a size within those constraints.
3. The child reports its size back to the parent.
4. The parent decides where to place the child.

```mermaid
flowchart TD
    A[Parent Widget] -->|Sends constraints down| B[Child Widget]
    B -->|Chooses size| C[Child Size]
    C -->|Reports size up| A
    A -->|Sets position| D[Final Layout]
```

---

## Why Expanded Is Important

Some widgets want as much space as possible.

For example:

```dart
Container(
  width: double.infinity,
)
```

This can cause problems inside a `Row`, because the `Row` also tries to manage horizontal space for multiple children.

```mermaid
flowchart TD
    A[Row] --> B[Chart wants infinite width]
    A --> C[List also needs width]
    B --> D[Layout conflict]
    C --> D
    D --> E[Wrap widgets with Expanded]
    E --> F[Flutter divides available width]
```

Correct version:

```dart
Row(
  children: [
    Expanded(child: ExpenseChart()),
    Expanded(child: ExpenseList()),
  ],
)
```

`Expanded` gives children clear constraints inside a `Row` or `Column`.

---

# 4. Handling Screen Overlays Like the Soft Keyboard

The next problem was the soft keyboard.

When a user taps a `TextField`, the keyboard appears from the bottom and covers part of the screen.

This is especially problematic in landscape mode because the screen height is already small.

```text
Screen with Keyboard

+--------------------------+
| Form content             |
| Some fields visible      |
+--------------------------+
| Keyboard covers bottom   |
+--------------------------+
```

---

## Using viewInsets.bottom

Flutter exposes keyboard overlay height through:

```dart
MediaQuery.of(context).viewInsets.bottom
```

Example:

```dart
final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;
```

When the keyboard is closed:

```text
keyboardSpace = 0
```

When the keyboard is open:

```text
keyboardSpace = keyboard height
```

---

## Keyboard-Safe Modal Pattern

```dart
final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;

return SizedBox(
  height: double.infinity,
  child: SingleChildScrollView(
    child: Padding(
      padding: EdgeInsets.fromLTRB(
        16,
        16,
        16,
        keyboardSpace + 16,
      ),
      child: Column(
        children: [
          // form fields
        ],
      ),
    ),
  ),
);
```

This combines three ideas:

```mermaid
flowchart TD
    A[Keyboard appears] --> B[Read viewInsets.bottom]
    B --> C[Add bottom padding]
    C --> D[Wrap form with SingleChildScrollView]
    D --> E[User can scroll to all inputs]
```

Padding alone is not enough.
The content also needs to be scrollable.

---

# 5. Understanding Safe Areas

Safe areas protect content from device-specific screen intrusions, such as:

* camera cutouts
* notches
* status bars
* rounded corners
* home indicator bars

Flutter provides the `SafeArea` widget for this.

```dart
SafeArea(
  child: Column(
    children: [
      Text('Safe content'),
    ],
  ),
)
```

---

## SafeArea Concept

```mermaid
flowchart TD
    A[Device Screen] --> B[Unsafe Areas]
    A --> C[Safe Area]

    B --> D[Notch]
    B --> E[Status Bar]
    B --> F[Home Indicator]

    C --> G[App Content]
```

Instead of guessing fixed padding values, Flutter can calculate the correct safe area automatically.

---

## Modal Bottom Sheet Safe Area

For modal bottom sheets, we can enable safe area handling with:

```dart
showModalBottomSheet(
  context: context,
  useSafeArea: true,
  builder: (ctx) {
    return const NewExpense();
  },
);
```

This prevents the modal content from overlapping the camera cutout or system UI.

---

# 6. Using the LayoutBuilder Widget

`MediaQuery` reads the full screen size.

`LayoutBuilder` reads the constraints provided by the parent widget.

This makes `LayoutBuilder` better for reusable components.

```dart
LayoutBuilder(
  builder: (context, constraints) {
    final width = constraints.maxWidth;

    if (width >= 600) {
      return WideLayout();
    }

    return NarrowLayout();
  },
)
```

---

## MediaQuery vs LayoutBuilder

| Tool            | Reads                                   | Best For                                |
| --------------- | --------------------------------------- | --------------------------------------- |
| `MediaQuery`    | Full screen size and device information | Page-level layout, keyboard, safe areas |
| `LayoutBuilder` | Parent constraints                      | Component-level responsive layout       |

```mermaid
flowchart TD
    A[Responsive Decision] --> B{What information is needed?}

    B -->|Full screen/device info| C[Use MediaQuery]
    B -->|Parent-provided space| D[Use LayoutBuilder]

    C --> E[Screen size, keyboard, safe area]
    D --> F[Reusable widget layout]
```

---

## LayoutBuilder in the Expense Modal

In the modal form, `LayoutBuilder` was used to place fields differently depending on available width.

Narrow layout:

```text
Title
Amount
Date
Category
Buttons
```

Wide layout:

```text
Title + Amount
Category + Date
Buttons
```

```mermaid
flowchart TD
    A[LayoutBuilder] --> B[Read constraints.maxWidth]
    B --> C{Width >= 600?}

    C -->|Yes| D[Wide Form Layout]
    D --> E[Title and Amount in one row]
    D --> F[Category and Date in one row]

    C -->|No| G[Narrow Form Layout]
    G --> H[Fields stacked vertically]
```

---

# 7. Building Adaptive Widgets

Responsive design changes layout based on space.

Adaptive design changes UI based on platform.

Flutter can detect the current platform using:

```dart
import 'dart:io';

Platform.isIOS
Platform.isAndroid
```

This allows us to show different widgets on different platforms.

---

## Material vs Cupertino

| Platform | Style           | Flutter Widgets                                                    |
| -------- | --------------- | ------------------------------------------------------------------ |
| Android  | Material Design | `AlertDialog`, `Switch`, `Scaffold`                                |
| iOS      | Cupertino style | `CupertinoAlertDialog`, `CupertinoSwitch`, `CupertinoPageScaffold` |

Example:

```dart
if (Platform.isIOS) {
  showCupertinoDialog(...);
} else {
  showDialog(...);
}
```

---

## Adaptive Dialog Flow

```mermaid
flowchart TD
    A[User submits invalid form] --> B[Show error dialog]
    B --> C{Platform is iOS?}

    C -->|Yes| D[Show CupertinoAlertDialog]
    C -->|No| E[Show Material AlertDialog]
```

---

## Built-In Adaptive Constructors

Flutter also provides adaptive constructors.

Example:

```dart
Switch.adaptive(
  value: true,
  onChanged: (value) {},
)
```

Other examples include:

```dart
CircularProgressIndicator.adaptive()
```

Use built-in adaptive constructors when available.
Create custom adaptive widgets when you need more control.

---

# Complete Module Flow

```mermaid
flowchart TD
    A[Responsive and Adaptive UI Module] --> B[Screen Size]
    A --> C[Constraints]
    A --> D[Keyboard Overlays]
    A --> E[Safe Areas]
    A --> F[LayoutBuilder]
    A --> G[Platform Adaptiveness]

    B --> B1[MediaQuery size]
    B1 --> B2[Column or Row]

    C --> C1[Constraints go down]
    C1 --> C2[Expanded fixes layout conflicts]

    D --> D1[MediaQuery viewInsets.bottom]
    D1 --> D2[Padding + SingleChildScrollView]

    E --> E1[SafeArea]
    E1 --> E2[useSafeArea in modal bottom sheet]

    F --> F1[Parent constraints]
    F1 --> F2[Reusable responsive widgets]

    G --> G1[Platform.isIOS]
    G1 --> G2[Cupertino widgets]
```

---

# Practical Rules

## Use MediaQuery when you need full screen information

Use `MediaQuery` for:

* screen width
* screen height
* keyboard height
* safe area padding
* full-page responsive layout

```dart
final width = MediaQuery.of(context).size.width;
final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;
```

---

## Use LayoutBuilder when you need local constraints

Use `LayoutBuilder` for:

* reusable widgets
* cards
* charts
* forms inside modals
* widgets inside a `Row` or `Column`
* components that should adapt to parent size

```dart
LayoutBuilder(
  builder: (context, constraints) {
    final width = constraints.maxWidth;
    return width >= 600 ? WideLayout() : NarrowLayout();
  },
)
```

---

## Use Expanded when children need bounded space

Use `Expanded` inside:

* `Row`
* `Column`
* flexible layouts
* layouts with `ListView`
* layouts with `TextField`
* layouts with `double.infinity`

```dart
Row(
  children: [
    Expanded(child: FirstWidget()),
    Expanded(child: SecondWidget()),
  ],
)
```

---

## Use SafeArea for screen intrusions

Use `SafeArea` or `useSafeArea: true` when content might be hidden by:

* notch
* status bar
* camera cutout
* home indicator

```dart
SafeArea(
  child: MyContent(),
)
```

```dart
showModalBottomSheet(
  context: context,
  useSafeArea: true,
  builder: (ctx) => const NewExpense(),
);
```

---

## Use viewInsets for keyboard overlays

Use this when handling input forms:

```dart
final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;
```

Then apply it as bottom padding:

```dart
padding: EdgeInsets.fromLTRB(
  16,
  16,
  16,
  keyboardSpace + 16,
)
```

---

## Use Platform checks for adaptive behavior

Use platform checks when the app should use native-looking UI.

```dart
if (Platform.isIOS) {
  return CupertinoWidget();
}

return MaterialWidget();
```

Use adaptive constructors when available:

```dart
Switch.adaptive(
  value: value,
  onChanged: onChanged,
)
```

---

# Recommended Responsive and Adaptive Strategy

```mermaid
flowchart TD
    A[Build Flutter UI] --> B{Does layout depend on screen size?}
    B -->|Yes| C[Use MediaQuery]
    B -->|No| D{Does layout depend on parent size?}

    D -->|Yes| E[Use LayoutBuilder]
    D -->|No| F[Use normal widgets]

    C --> G{Can widgets overflow?}
    E --> G

    G -->|Yes| H[Use Expanded, Flexible, SizedBox, or scrolling]
    G -->|No| I[Keep layout simple]

    H --> J{Does keyboard appear?}
    J -->|Yes| K[Use viewInsets.bottom + SingleChildScrollView]
    J -->|No| L{Any notches or system bars?}

    K --> L
    L -->|Yes| M[Use SafeArea]
    L -->|No| N{Need platform-specific style?}

    M --> N
    N -->|Yes| O[Use Platform checks or adaptive constructors]
    N -->|No| P[Final UI]
    O --> P
```

---

# Key Takeaways

* Responsive UI adapts to available space.
* Adaptive UI adapts to platform conventions.
* `MediaQuery` is useful for full-screen and device-level information.
* `LayoutBuilder` is useful for parent-based responsive decisions.
* Flutter layout is controlled by constraints.
* `Expanded` helps resolve unbounded width or height problems.
* `MediaQuery.viewInsets.bottom` helps handle the soft keyboard.
* `SingleChildScrollView` keeps form content reachable.
* `SafeArea` protects content from notches, cameras, and system UI.
* Cupertino widgets help create native-feeling iOS experiences.
* Built-in adaptive constructors can simplify platform-specific widgets.

---

# Final Summary

This module introduced the core tools for building responsive and adaptive Flutter apps.

You learned how to use `MediaQuery` to read screen dimensions, keyboard overlays, and safe area information.

You learned how Flutter constraints work and why widgets like `Expanded`, `Flexible`, and `SizedBox` are important for controlling layout.

You also learned how `LayoutBuilder` enables component-level responsiveness by giving widgets access to the constraints from their parent.

Finally, you learned how to build adaptive platform-aware UI by using `Platform` checks, Cupertino widgets, and Flutter’s built-in adaptive constructors.

Together, these techniques help you build Flutter apps that feel polished, flexible, and natural across phones, tablets, orientations, Android, and iOS.

```mermaid
flowchart LR
    A[Good Flutter UI] --> B[Responsive]
    A --> C[Adaptive]
    B --> D[Works across screen sizes]
    B --> E[Handles overlays and constraints]
    C --> F[Feels native on each platform]
    C --> G[Uses platform-aware widgets]
```
