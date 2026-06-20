# Adding Icons to Buttons

## Overview

This lecture explains how to add icons to Flutter buttons. Instead of displaying only text inside a button, Flutter allows you to combine text with an icon by using special `.icon` named constructors.

This is useful when you want to make buttons more visually descriptive and easier for users to understand.

## Key Points

* Flutter provides `.icon` constructors for common button widgets.
* `OutlinedButton.icon`, `ElevatedButton.icon`, and `TextButton.icon` can be used to create buttons with icons.
* When using `.icon`, the text content is provided through the `label` argument instead of `child`.
* The `icon` argument is used to define the icon displayed inside the button.
* The `icon` argument accepts any widget, but it is usually set to an `Icon` widget.
* `Icon` is a regular Flutter widget and can also be used outside of buttons.
* Flutter provides many built-in icons through the `Icons` class.
* The `const` keyword should be used for icons when the icon does not change at runtime.

## Why Add Icons to Buttons?

Icons can make a user interface more intuitive.

For example, a button that says `Start Quiz` becomes clearer when it also includes an arrow icon. The text explains the action, while the icon provides a quick visual cue.

## Using `OutlinedButton.icon`

To add an icon to an `OutlinedButton`, use the `OutlinedButton.icon` constructor.

Before:

```dart id="n4slun"
OutlinedButton(
  onPressed: startQuiz,
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  child: const Text('Start Quiz'),
)
```

After:

```dart id="le3wep"
OutlinedButton.icon(
  onPressed: startQuiz,
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  icon: const Icon(Icons.arrow_right_alt),
  label: const Text('Start Quiz'),
)
```

## Important Difference: `child` vs `label`

When using a normal button, you usually provide the button content through the `child` argument.

```dart id="prmhcd"
child: const Text('Start Quiz')
```

When using an `.icon` constructor, the text part is provided through the `label` argument instead.

```dart id="gk4tun"
label: const Text('Start Quiz')
```

The icon is provided separately through the `icon` argument.

```dart id="3isq5m"
icon: const Icon(Icons.arrow_right_alt)
```

## The `Icon` Widget

Flutter provides an `Icon` widget for displaying icons.

```dart id="77ipe8"
const Icon(Icons.arrow_right_alt)
```

The `Icon` widget needs icon data. This icon data tells Flutter which icon should be displayed.

Flutter provides built-in icon data through the `Icons` class.

```dart id="d1v51n"
Icons.arrow_right_alt
```

## The `Icons` Class

`Icons` is a Flutter utility class that contains many predefined Material Design icons.

Examples:

```dart id="hmrwz0"
Icons.arrow_right_alt
Icons.play_arrow
Icons.quiz
Icons.home
Icons.settings
Icons.favorite
```

In many code editors, such as Visual Studio Code, you can preview icons while choosing them, which makes it easier to find the right one.

## Example: `OutlinedButton.icon`

```dart id="54req5"
OutlinedButton.icon(
  onPressed: startQuiz,
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  icon: const Icon(Icons.arrow_right_alt),
  label: const Text('Start Quiz'),
)
```

This creates an outlined button with:

* A white foreground color
* An arrow icon
* A text label saying `Start Quiz`
* A callback function that runs when the button is pressed

## Other Button Types with Icons

The same `.icon` pattern can be used with other Flutter button widgets.

### `ElevatedButton.icon`

```dart id="p7qa3h"
ElevatedButton.icon(
  onPressed: () {},
  icon: const Icon(Icons.play_arrow),
  label: const Text('Play'),
)
```

### `TextButton.icon`

```dart id="a77qhu"
TextButton.icon(
  onPressed: () {},
  icon: const Icon(Icons.info),
  label: const Text('More Info'),
)
```

## Standalone Icon Usage

The `Icon` widget can also be used by itself, not only inside buttons.

```dart id="29d4x1"
const Icon(
  Icons.quiz,
  size: 60,
  color: Colors.white70,
)
```

This is useful when you want to display an icon as part of a layout without making it clickable.

## Code Example

```dart id="nfsjn7"
OutlinedButton.icon(
  onPressed: startQuiz,
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  icon: const Icon(Icons.arrow_right_alt),
  label: const Text('Start Quiz'),
)
```

## Notes

The `.icon` constructors are convenient because Flutter automatically handles the layout and spacing between the icon and the label.

Although the `icon` argument accepts any widget, it is usually best to use the `Icon` widget for clear and consistent UI design.

If the icon should be clickable by itself, you can use widgets such as `IconButton`. If the icon should be part of a button with text, use constructors like `OutlinedButton.icon`, `ElevatedButton.icon`, or `TextButton.icon`.

## Summary

This lecture shows how to add icons to buttons in Flutter using `.icon` named constructors. By replacing `OutlinedButton` with `OutlinedButton.icon`, the button can display both an icon and a text label. Flutter’s built-in `Icons` class makes it easy to choose from many Material Design icons and create clearer, more visually helpful user interfaces.
