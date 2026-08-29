# Working with the Flutter DevTools

## Overview

Error messages and debug mode are very helpful when finding and fixing problems in Flutter apps. However, Flutter also provides another powerful tool: **Flutter DevTools**.

Flutter DevTools is a browser-based set of developer tools connected to your running Flutter app. It helps you inspect widgets, analyze layouts, view logs, debug network requests, examine performance, and understand what is happening inside your app while it runs.

This lecture focuses especially on the **Flutter Inspector**, which is useful for analyzing and improving Flutter user interfaces.

## Opening Flutter DevTools

When using Visual Studio Code, you may sometimes see a popup asking whether you want to open Flutter DevTools after starting your app.

You can open DevTools from that popup, but you can also open it manually.

In VS Code:

```text id="yftz8k"
View > Command Palette
```

Then search for:

```text id="x0nu2l"
Flutter DevTools
```

Choose the option:

```text id="p0bpuw"
Open DevTools in Web Browser
```

This opens Flutter DevTools in a browser window. The DevTools window is connected to your currently running Flutter app.

## Main DevTools Pages

Flutter DevTools includes several pages that help you analyze different parts of your app.

Common pages include:

* **Logging**
* **Network**
* **App Size**
* **Performance**
* **Debugger**
* **Flutter Inspector**

Each page focuses on a different aspect of app development and debugging.

## Logging Page

The Logging page shows log messages produced by your app.

It can help you inspect:

* Debug output
* Runtime messages
* Potential errors
* Console logs

This is useful when you want to understand what happened while your app was running.

## Network Page

The Network page helps you debug network requests sent by the app.

It is useful for inspecting:

* API calls
* Request URLs
* Response data
* Failed network requests
* Timing information

In the current quiz app, there are no network requests yet. However, this page becomes very useful later when building apps that communicate with APIs or backend services.

## App Size Page

The App Size page helps you analyze the size of your app.

This can be useful when you want to understand which parts of your app contribute most to the final build size.

## Performance Page

The Performance page helps you analyze how smoothly your app runs.

It can be used to investigate:

* Slow frames
* Jank
* Rendering performance
* Expensive rebuilds
* Performance bottlenecks

When analyzing performance, you should use **profile mode** instead of debug mode.

Debug mode includes many development helpers that slow down the app. Because of that, performance measurements in debug mode are not reliable.

To analyze performance more accurately, start the app in profile mode.

## Debugger Page

Flutter DevTools also includes a Debugger page.

This can be used as an alternative to the debugging features built into Visual Studio Code or Android Studio.

However, in this course section, the focus is mainly on the Flutter Inspector.

## Flutter Inspector

The Flutter Inspector is one of the most useful parts of Flutter DevTools for everyday UI development.

It allows you to inspect the currently rendered widget tree.

The widget tree shown in the Inspector represents the UI that is currently visible on the screen. It shows how widgets are nested inside each other and how they relate to one another.

This is very useful for understanding:

* Which widgets are currently visible
* How widgets are nested
* Which widget contains another widget
* Why certain UI elements appear in specific positions
* How layout constraints affect widgets

## Inspecting the Widget Tree

Inside the Flutter Inspector, you can see the live widget tree of the running app.

This tree is the actual structure Flutter is using to build the current UI.

You can select widgets in the tree to learn more about them.

For each selected widget, DevTools can show:

* Its size
* Its position
* Its parent widget
* Its child widgets
* Its properties
* Its state
* Its layout constraints

This helps you understand what Flutter is rendering behind the scenes.

## Layout Explorer

The Layout Explorer appears on the right side when inspecting widgets.

It helps you understand how a selected widget is positioned and sized relative to its parent.

For example, it can show:

* The width of the selected widget
* The height of the selected widget
* The relationship between the widget and its parent
* How available space is being used
* Alignment behavior

This is especially helpful when debugging layout problems.

## Inspecting Rows and Columns

When selecting a `Row` or `Column`, the Layout Explorer becomes interactive.

You can experiment with layout settings directly inside DevTools.

For example, you can change:

* `mainAxisAlignment`
* `crossAxisAlignment`

This allows you to quickly test how different alignment settings affect your UI.

For example, you can switch between:

```text id="dciopy"
start
center
end
```

And immediately see how the selected widget moves on the screen.

This is useful because it lets you experiment visually before changing the actual code.

## Editing Layout in Code

Even though DevTools allows you to experiment with layout settings, permanent changes should still be made in your source code.

For example, if you find the correct alignment in DevTools, you should update your widget code:

```dart id="t0c9c5"
Row(
  crossAxisAlignment: CrossAxisAlignment.center,
  mainAxisAlignment: MainAxisAlignment.start,
  children: [
    // widgets
  ],
)
```

After saving the file, Flutter updates the UI automatically through hot reload.

## Widget Details Tree

The Widget Details Tree allows you to inspect the internal properties of a selected widget.

For example, if you select a `Text` widget, you can inspect:

* The text value
* The text style
* The color
* The font size
* Automatically derived values
* Other widget configuration details

This is helpful when you want to understand why a widget looks or behaves a certain way.

## Selecting Widgets from the Screen

Sometimes the widget tree is very long, and finding a specific widget manually can be difficult.

Flutter Inspector provides a tool that lets you select a widget directly from the app screen.

You can enable widget selection mode, then click a widget in the running app.

DevTools will automatically select the corresponding widget in the widget tree.

This is useful when you know which visual element you want to inspect, but you do not know where it is located in the widget tree.

For example, if you want to inspect a selected quiz answer, you can click that answer on the screen, and DevTools will highlight the matching widget in the tree.

## Visual Layout Helpers

Flutter DevTools also includes visual tools that help you understand layout behavior.

These tools can show:

* Layout guidelines
* Widget boundaries
* Text baselines
* Alignment information
* Relationships between UI elements

These visual overlays help explain why certain widgets are positioned the way they are.

## Text Baselines

The text baseline tool helps you check whether text elements are aligned correctly.

This is useful when you have multiple text widgets and want to make sure they line up visually.

## Highlighting Oversized Images

Flutter DevTools can also help detect images that are larger than necessary.

If an image file is much larger than the size at which it is displayed, the app may waste memory by loading an unnecessarily large image.

DevTools can highlight such images and help you identify assets that should be resized or optimized.

This is useful for improving memory usage and app performance.

## Key Points

* Flutter DevTools is a browser-based tool connected to your running Flutter app
* DevTools can be opened from VS Code through the Command Palette
* The Logging page shows app logs and error messages
* The Network page helps inspect API requests
* The Performance page helps analyze app smoothness and rendering behavior
* Performance testing should be done in profile mode, not debug mode
* The Flutter Inspector shows the live widget tree
* The Layout Explorer helps analyze widget size, alignment, and parent-child relationships
* Rows and columns can be inspected interactively
* The Widget Details Tree shows widget properties and configuration
* Widgets can be selected directly from the running app screen
* Visual layout helpers can show guidelines, baselines, and oversized images

## Notes

Flutter DevTools is especially useful for understanding user interface problems.

While error messages and debug mode help you find runtime bugs, the Flutter Inspector helps you understand layout structure and widget behavior.

It is a practical tool for answering questions such as:

* Why is this widget positioned here?
* Which widget is responsible for this part of the UI?
* How large is this widget?
* What parent widget controls this layout?
* Which alignment setting affects this element?
* Is this image larger than necessary?

Together with error messages and debugging mode, DevTools gives you a strong set of tools for building, analyzing, and fixing Flutter apps.

## Summary

This lecture introduces Flutter DevTools and focuses on the Flutter Inspector. DevTools provides multiple pages for logging, networking, performance analysis, debugging, app size inspection, and UI inspection. The Flutter Inspector is especially useful for exploring the live widget tree, analyzing layouts, selecting widgets from the screen, inspecting widget properties, and experimenting with alignment settings. Combined with error messages and debug mode, DevTools helps developers understand and fix Flutter apps more effectively.
