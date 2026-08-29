# Displaying Images and Using Multiple Constructor Functions

## Overview

This lecture explains how to display images in a Flutter app and how Dart supports multiple constructor functions in the same class.

In the Roll Dice app, the next step is to show a dice image on the screen. Later, this image will change when the user presses a button.

To display local images, we need to:

1. Add image files to the project.
2. Register those files in `pubspec.yaml`.
3. Use Flutter's `Image` widget.
4. Load the image with `Image.asset()`.

This lecture also introduces **named constructors**, such as `Image.asset()`, which are alternative constructor functions provided by a class.

---

## 1. Why Add Images?

The app we are building is a dice rolling app.

Therefore, we need to display dice images such as:

```text id="5oh16w"
dice-1.png
dice-2.png
dice-3.png
dice-4.png
dice-5.png
dice-6.png
```

Later, the app will dynamically switch between these images when the user rolls the dice.

---

## 2. Adding Image Files to the Project

First, create an `assets` folder in the project.

Inside that folder, create an `images` subfolder.

Recommended structure:

```text id="i9odam"
project/
├── lib/
│   └── main.dart
├── assets/
│   └── images/
│       ├── dice-1.png
│       ├── dice-2.png
│       ├── dice-3.png
│       ├── dice-4.png
│       ├── dice-5.png
│       └── dice-6.png
└── pubspec.yaml
```

The folder name `assets` is not required, but it is a common and clear convention.

The `images` subfolder is also optional, but it helps keep the project organized.

---

## 3. Registering Assets in `pubspec.yaml`

Adding the images to the folder is not enough.

Flutter must also know that these images should be bundled with the app.

To do that, register them in `pubspec.yaml`.

Example:

```yaml id="ya4pym"
flutter:
  assets:
    - assets/images/dice-1.png
    - assets/images/dice-2.png
    - assets/images/dice-3.png
    - assets/images/dice-4.png
    - assets/images/dice-5.png
    - assets/images/dice-6.png
```

The paths are relative to the project root.

---

## 4. Registering a Whole Folder

Instead of listing every image one by one, you can register the whole folder.

Example:

```yaml id="e5ev9i"
flutter:
  assets:
    - assets/images/
```

This tells Flutter to include all files inside `assets/images/`.

This is often more convenient when you have many images.

---

## 5. YAML Indentation Matters

`pubspec.yaml` uses YAML syntax.

YAML is indentation-sensitive.

This means spacing is important.

Correct:

```yaml id="6pxjsb"
flutter:
  assets:
    - assets/images/
```

Incorrect:

```yaml id="3hvtp1"
flutter:
assets:
- assets/images/
```

If indentation is wrong, Flutter may not read the file correctly.

After changing `pubspec.yaml`, run:

```bash id="xlnrbg"
flutter pub get
```

In many editors, saving `pubspec.yaml` may also trigger this automatically.

---

## 6. Displaying an Image with `Image.asset()`

Flutter provides a built-in `Image` widget.

To load an image from local assets, use:

```dart id="awacso"
Image.asset('assets/images/dice-2.png')
```

This creates an image widget that displays the file located at:

```text id="63rpmg"
assets/images/dice-2.png
```

The path must match the real file path exactly.

---

## 7. Example: Showing a Dice Image

```dart id="lgk96l"
Image.asset(
  'assets/images/dice-2.png',
)
```

If the path is wrong, the image will not appear.

For example, this is incorrect if the folder is named `images`:

```dart id="7z2m35"
Image.asset('assets/image/dice-2.png')
```

Correct:

```dart id="u6714a"
Image.asset('assets/images/dice-2.png')
```

---

## 8. Replacing Text with an Image

Before, the app displayed text:

```dart id="vyru9t"
const Center(
  child: StyledText('Hello World!'),
)
```

Now we can replace that text with a dice image:

```dart id="p7ov98"
Center(
  child: Image.asset(
    'assets/images/dice-2.png',
  ),
)
```

The dice image now appears on the screen.

---

## 9. Controlling Image Size

The image might be too large by default.

You can control its size with the `width` parameter.

Example:

```dart id="lkze9m"
Image.asset(
  'assets/images/dice-2.png',
  width: 200,
)
```

This displays the image with a width of `200` pixels.

You can also use `height`:

```dart id="f6l2ge"
Image.asset(
  'assets/images/dice-2.png',
  width: 200,
  height: 200,
)
```

---

## 10. Using `BoxFit`

The `fit` parameter controls how the image should fit inside its available space.

Example:

```dart id="wprkih"
Image.asset(
  'assets/images/dice-2.png',
  width: 200,
  fit: BoxFit.contain,
)
```

Common `BoxFit` values:

| Value              | Meaning                                     |
| ------------------ | ------------------------------------------- |
| `BoxFit.contain`   | Show the full image without cropping        |
| `BoxFit.cover`     | Fill the available space, possibly cropping |
| `BoxFit.fill`      | Stretch the image to fill the space         |
| `BoxFit.fitWidth`  | Fit the image to the available width        |
| `BoxFit.fitHeight` | Fit the image to the available height       |

---

## 11. Updated `GradientContainer`

```dart id="hl4loz"
import 'package:flutter/material.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer(
    this.color1,
    this.color2, {
    super.key,
  });

  final Color color1;
  final Color color2;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            color1,
            color2,
          ],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: Center(
        child: Image.asset(
          'assets/images/dice-2.png',
          width: 200,
        ),
      ),
    );
  }
}
```

The `StyledText` import can be removed if `StyledText` is no longer used in this file.

---

## 12. Why Remove `const`?

When adding `Image.asset()`, you may need to remove `const` from the surrounding widget.

For example, this may cause an error:

```dart id="cldqe9"
const Center(
  child: Image.asset(
    'assets/images/dice-2.png',
  ),
)
```

The `Image.asset()` constructor is not always treated as a constant widget in this context.

So use:

```dart id="yp87kb"
Center(
  child: Image.asset(
    'assets/images/dice-2.png',
    width: 200,
  ),
)
```

The code editor will usually suggest when `const` should be added or removed.

---

## 13. What Is a Constructor?

A constructor is a special function used to create an object from a class.

Example:

```dart id="yj3bvk"
Image()
```

This calls the default constructor of the `Image` class.

But Flutter also provides additional constructors for `Image`.

---

## 14. Named Constructors

Dart allows a class to have multiple constructor functions.

These are called **named constructors**.

A named constructor uses this syntax:

```dart id="7oqb4v"
ClassName.constructorName()
```

Example:

```dart id="hc031j"
Image.asset()
```

Here:

```dart id="rig2ia"
Image
```

is the class.

```dart id="4vf8w3"
asset
```

is the named constructor.

---

## 15. Why Use Named Constructors?

Named constructors make object creation more readable and specific.

For example:

```dart id="pja9kc"
Image.asset('assets/images/dice-2.png')
```

clearly means:

```text id="u8rm7v"
Create an image from a local asset.
```

Another example:

```dart id="npqcgm"
Image.network('https://example.com/image.png')
```

clearly means:

```text id="nk0qcg"
Create an image from a network URL.
```

The constructor name describes the purpose.

---

## 16. Common `Image` Named Constructors

Flutter's `Image` widget provides several named constructors.

### `Image.asset()`

Loads an image bundled with the app.

```dart id="kgw6rm"
Image.asset('assets/images/dice-2.png')
```

Use this for local project assets.

---

### `Image.network()`

Loads an image from the internet.

```dart id="i4m132"
Image.network('https://example.com/dice.png')
```

Use this when the image is hosted online.

---

### `Image.file()`

Loads an image from a file on the device.

```dart id="w5qruq"
Image.file(file)
```

Use this when working with files selected or stored on the device.

---

### `Image.memory()`

Loads an image from raw bytes in memory.

```dart id="079cow"
Image.memory(bytes)
```

Use this when image data is stored as bytes.

---

## 17. Example: `Image.network()`

```dart id="pc65tm"
Image.network(
  'https://example.com/dice.png',
  width: 100,
)
```

For network images, you can also show a loading indicator.

```dart id="152wu5"
Image.network(
  'https://example.com/dice.png',
  width: 100,
  loadingBuilder: (context, child, progress) {
    if (progress == null) {
      return child;
    }

    return const CircularProgressIndicator();
  },
)
```

---

## 18. Multiple Constructors in Your Own Classes

You can also define multiple constructors in your own classes.

For example, `GradientContainer` can have a default constructor and a named constructor.

```dart id="gc5fy6"
class GradientContainer extends StatelessWidget {
  const GradientContainer(
    this.color1,
    this.color2, {
    super.key,
  });

  const GradientContainer.purple({super.key})
      : color1 = Colors.deepPurple,
        color2 = Colors.indigo;

  final Color color1;
  final Color color2;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            color1,
            color2,
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Center(
        child: Image.asset(
          'assets/images/dice-2.png',
          width: 200,
        ),
      ),
    );
  }
}
```

Now you can use either constructor.

Default constructor:

```dart id="m0buq4"
const GradientContainer(
  Colors.deepPurple,
  Colors.purple,
)
```

Named constructor:

```dart id="6x22d1"
const GradientContainer.purple()
```

The named constructor provides predefined colors.

---

## 19. Why This Is Useful

Named constructors are useful when a class can be created in different ways.

Example with `Image`:

```dart id="lqkgm2"
Image.asset()
Image.network()
Image.file()
Image.memory()
```

Each constructor creates an `Image` widget, but the source of the image is different.

Example with your own widget:

```dart id="e9n64x"
GradientContainer()
GradientContainer.purple()
GradientContainer.blue()
```

Each constructor creates a `GradientContainer`, but with different default colors.

---

## 20. Full Example: `main.dart`

```dart id="0rdwdf"
import 'package:flutter/material.dart';

import 'gradient_container.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(
          Color.fromARGB(255, 26, 2, 80),
          Color.fromARGB(255, 45, 7, 98),
        ),
      ),
    ),
  );
}
```

Alternative using the named constructor:

```dart id="c59vef"
import 'package:flutter/material.dart';

import 'gradient_container.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer.purple(),
      ),
    ),
  );
}
```

---

## 21. Common Mistakes

### Wrong Asset Path

Incorrect:

```dart id="gk8g9i"
Image.asset('assets/image/dice-2.png')
```

Correct:

```dart id="4xbk2b"
Image.asset('assets/images/dice-2.png')
```

---

### Forgetting to Register Assets

Adding files to the project folder is not enough.

You must also register them in `pubspec.yaml`.

```yaml id="jtv5sk"
flutter:
  assets:
    - assets/images/
```

---

### Incorrect YAML Indentation

Incorrect:

```yaml id="o4zrah"
flutter:
assets:
- assets/images/
```

Correct:

```yaml id="0gbbc2"
flutter:
  assets:
    - assets/images/
```

---

### Keeping `const` Where It No Longer Works

Incorrect:

```dart id="4udjd7"
const Center(
  child: Image.asset('assets/images/dice-2.png'),
)
```

Correct:

```dart id="z0q57l"
Center(
  child: Image.asset(
    'assets/images/dice-2.png',
    width: 200,
  ),
)
```

---

## Key Points

* Local images should be stored in an assets folder.
* Assets must be registered in `pubspec.yaml`.
* YAML indentation is important.
* Use `Image.asset()` to load local app images.
* Use `Image.network()` to load images from the internet.
* `Image.file()` and `Image.memory()` are used for other image sources.
* `Image.asset()` is a named constructor.
* Dart classes can have multiple constructor functions.
* Named constructors provide purpose-specific ways to create objects.
* The `width`, `height`, and `fit` parameters control image display.
* Remove `const` when an object depends on non-constant values.

---

## Summary

To display a local image in Flutter, first add the image files to your project and register them in `pubspec.yaml`.

Example:

```yaml id="5tf00a"
flutter:
  assets:
    - assets/images/
```

Then display the image with `Image.asset()`:

```dart id="xgnfc2"
Image.asset(
  'assets/images/dice-2.png',
  width: 200,
)
```

`Image.asset()` is a named constructor. Flutter's `Image` class also provides other named constructors such as `Image.network()`, `Image.file()`, and `Image.memory()`.

Named constructors are a Dart feature that allows one class to provide multiple ways of creating objects. This same pattern can also be used in your own custom classes, such as creating a `GradientContainer.purple()` constructor with predefined colors.
