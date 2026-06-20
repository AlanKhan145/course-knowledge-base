# Understanding Classes

## Overview

This lecture introduces **classes** in Dart.

Classes are one of the most important concepts in Dart because Dart is an object-oriented language. In Dart, objects are created from classes, and Flutter widgets are also objects created from classes.

Understanding classes is necessary before creating custom Flutter widgets.

---

## 1. Objects Recap

In previous lectures, we learned that widgets are objects.

Examples:

```dart
MaterialApp()
Scaffold()
Container()
Text('Hello World!')
```

These are all widget objects.

But widgets are not the only objects in Dart.

Other values are objects too.

Examples:

```dart
'Hello World!'
29
Colors.deepPurple
Color.fromARGB(255, 26, 2, 80)
TextStyle(fontSize: 28)
```

All these values are objects in memory.

---

## 2. What Is an Object?

An object is a data structure stored in memory.

Objects can contain:

* Data
* Properties
* Variables
* Functions
* Methods

For example, a `Color` object may store information about:

```text
red
green
blue
alpha
```

A `TextStyle` object may store information about:

```text
fontSize
fontWeight
color
letterSpacing
```

A widget object may store configuration about what should appear on the screen.

---

## 3. What Is a Class?

A **class** is a blueprint for creating objects.

You can think of a class as a plan or template.

The class defines what kind of data and behavior an object should have.

Example:

```dart
class Dice {
  
}
```

This defines a class called `Dice`.

The class itself is not yet an actual dice object. It is only the blueprint.

To create an actual object, you instantiate the class.

---

## 4. Classes Create Objects

Objects are created by calling a class constructor.

Example:

```dart
Dice()
```

This creates an object from the `Dice` class.

This process is called:

```text
class instantiation
```

or:

```text
object instantiation
```

It means creating an object based on a class.

---

## 5. Simple Class Example

```dart
class Dice {
  int sides;
  String color;

  Dice(this.sides, this.color);

  int roll() {
    return 1;
  }

  String describe() {
    return 'A $color $sides-sided dice';
  }
}
```

This class defines a blueprint for dice objects.

It contains:

* Properties
* A constructor
* Methods

---

## 6. Properties

Properties are data stored inside an object.

Example:

```dart
int sides;
String color;
```

These properties describe the dice.

A dice object can have:

```text
6 sides
red color
```

Another dice object can have:

```text
20 sides
blue color
```

Each object created from the class can store different data.

---

## 7. Constructor

A constructor is a special function that creates an object from a class.

Example:

```dart
Dice(this.sides, this.color);
```

This constructor receives values and stores them in the object.

Example:

```dart
var redDice = Dice(6, 'red');
```

This creates a dice object with:

```text
sides = 6
color = red
```

---

## 8. Methods

Methods are functions that belong to a class.

Example:

```dart
int roll() {
  return 1;
}
```

This method belongs to the `Dice` class.

Another example:

```dart
String describe() {
  return 'A $color $sides-sided dice';
}
```

This method uses the object's properties to return a description.

---

## 9. Creating Objects from a Class

```dart
void main() {
  var redDice = Dice(6, 'red');
  var blueDice = Dice(20, 'blue');

  print(redDice.describe());
  print(blueDice.sides);
}
```

Output:

```text
A red 6-sided dice
20
```

Here:

```dart
redDice
```

and:

```dart
blueDice
```

are two different objects created from the same class.

They share the same blueprint, but they store different data.

---

## 10. Class vs Object

A class is the blueprint.

An object is the actual thing created from that blueprint.

Example:

```text
Class  → Dice
Object → redDice
Object → blueDice
```

Another example:

```text
Class  → Text
Object → Text('Hello World!')
```

Another example:

```text
Class  → Color
Object → Color.fromARGB(255, 26, 2, 80)
```

---

## 11. Built-in Flutter Classes

Flutter provides many built-in classes.

Examples:

```dart
MaterialApp
Scaffold
Container
Center
Text
BoxDecoration
LinearGradient
Color
TextStyle
EdgeInsets
```

When you write:

```dart
Text('Hello World!')
```

you are creating an object from the `Text` class.

When you write:

```dart
BoxDecoration(...)
```

you are creating an object from the `BoxDecoration` class.

When you write:

```dart
LinearGradient(...)
```

you are creating an object from the `LinearGradient` class.

---

## 12. Constructor Calls in Flutter

Flutter code often looks like function calls.

Example:

```dart
Text('Hello World!')
```

But this is actually a constructor call.

It creates a `Text` object.

Another example:

```dart
Container(
  child: Text('Hello'),
)
```

This creates a `Container` object.

The `Container` object receives a `Text` object as its child.

---

## 13. Named Constructors

Some classes provide named constructors.

Example:

```dart
Color.fromARGB(255, 26, 2, 80)
```

Here:

```dart
fromARGB
```

is a named constructor of the `Color` class.

It creates a `Color` object based on alpha, red, green, and blue values.

Another example:

```dart
EdgeInsets.all(16)
```

This creates an `EdgeInsets` object with the same spacing on all sides.

Another example:

```dart
BorderRadius.circular(16)
```

This creates a `BorderRadius` object with rounded corners.

---

## 14. Dot Syntax

The dot `.` is used to access data or functions that belong to an object or class.

Example:

```dart
Colors.deepPurple
```

This accesses a predefined color value.

Example:

```dart
Color.fromARGB(...)
```

This accesses a named constructor.

Example:

```dart
Alignment.topLeft
```

This accesses a predefined alignment value.

Example:

```dart
redDice.describe()
```

This calls a method on the `redDice` object.

---

## 15. Properties and Methods in Objects

Objects can contain both properties and methods.

A property stores data.

Example:

```dart
redDice.sides
```

A method performs an action.

Example:

```dart
redDice.describe()
```

The dot syntax is used for both.

```dart
object.property
object.method()
```

---

## 16. Objects Organize Data and Logic

Objects help organize data and logic together.

For example, a dice object stores data:

```text
sides
color
```

and can also have logic:

```text
roll()
describe()
```

This means the data and the functions that work with that data are grouped together.

This is one of the main ideas of object-oriented programming.

---

## 17. Dart Is Object-Oriented

Dart is an object-oriented language.

This means that classes and objects are central to how Dart programs are structured.

In Dart, you often work with:

* Classes
* Objects
* Properties
* Methods
* Constructors
* Inheritance

Flutter is built on top of this object-oriented model.

That is why widgets are classes and widget instances are objects.

---

## 18. Classes in Flutter Documentation

When you read Flutter documentation, you will often see pages named after classes.

Examples:

```text
Text class
Container class
LinearGradient class
BoxDecoration class
Color class
```

These are all blueprints provided by Flutter.

You use them in your code to create objects.

Example:

```dart
LinearGradient(
  colors: [
    Color.fromARGB(255, 26, 2, 80),
    Color.fromARGB(255, 45, 7, 98),
  ],
)
```

This creates a `LinearGradient` object from the `LinearGradient` class.

---

## 19. Inheritance

Dart classes can inherit from other classes.

Inheritance means that one class can extend another class and receive its features.

The keyword used for inheritance is:

```dart
extends
```

Example:

```dart
class MyWidget extends StatelessWidget {
  
}
```

This means `MyWidget` is a custom widget that extends `StatelessWidget`.

It receives the base behavior of a stateless Flutter widget.

---

## 20. Flutter Widgets Are Classes

Every Flutter widget is defined as a class.

Examples:

```dart
class Text extends StatelessWidget {
  
}
```

```dart
class Container extends StatelessWidget {
  
}
```

```dart
class Scaffold extends StatefulWidget {
  
}
```

The exact implementation is more complex, but the important idea is:

```text
Widgets are classes.
Widget objects are created from those classes.
```

---

## 21. Custom Widgets Are Also Classes

When you create your own custom widget, you also create a class.

Example:

```dart
class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [
            Color.fromARGB(255, 26, 2, 80),
            Color.fromARGB(255, 45, 7, 98),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: const Center(
        child: Text('Hello World!'),
      ),
    );
  }
}
```

Here:

```dart
GradientContainer
```

is a custom class.

Because it extends `StatelessWidget`, Flutter can use it as a widget.

---

## 22. Why Classes Matter for Custom Widgets

To create a custom widget, you need a class because Flutter widgets are class-based.

The built-in widgets are classes.

Your custom widgets are also classes.

Example:

```dart
class DiceRoller extends StatelessWidget {
  
}
```

This defines a new widget blueprint.

Then you can create an object from it:

```dart
DiceRoller()
```

And use it in your widget tree:

```dart
Scaffold(
  body: DiceRoller(),
)
```

---

## 23. Full Dice Class Example

```dart
class Dice {
  int sides;
  String color;

  Dice(this.sides, this.color);

  int roll() {
    return 1;
  }

  String describe() {
    return 'A $color $sides-sided dice';
  }
}

void main() {
  var redDice = Dice(6, 'red');
  var blueDice = Dice(20, 'blue');

  print(redDice.describe());
  print(blueDice.describe());
  print(blueDice.sides);
}
```

Output:

```text
A red 6-sided dice
A blue 20-sided dice
20
```

---

## Key Points

* Dart is an object-oriented language.
* Objects are data structures stored in memory.
* A class is a blueprint for creating objects.
* Objects are created by calling constructors.
* Creating an object from a class is called instantiation.
* Classes can contain properties and methods.
* Properties store data.
* Methods are functions that belong to a class.
* The dot `.` is used to access properties and methods.
* Flutter widgets are classes.
* Configuration objects are also created from classes.
* Custom widgets are created by defining your own classes.
* Flutter custom widgets usually extend `StatelessWidget` or `StatefulWidget`.

---

## Summary

Classes are blueprints for creating objects in Dart.

An object stores data and can contain methods that work with that data.

Flutter is built around classes and objects. Built-in widgets like `Text`, `Container`, `Scaffold`, and `MaterialApp` are classes. Configuration objects like `Color`, `TextStyle`, `BoxDecoration`, and `LinearGradient` are classes too.

When you call a constructor such as `Text('Hello')` or `Color.fromARGB(...)`, you create an object from a class.

Because Flutter widgets are classes, your custom widgets must also be defined as classes. This is the foundation for building reusable custom widgets in Flutter.
