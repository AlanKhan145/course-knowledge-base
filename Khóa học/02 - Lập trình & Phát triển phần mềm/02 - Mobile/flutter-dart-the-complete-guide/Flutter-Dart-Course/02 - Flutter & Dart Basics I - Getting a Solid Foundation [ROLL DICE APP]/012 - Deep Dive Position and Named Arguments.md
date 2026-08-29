# Deep Dive: Positional and Named Arguments

## Overview

This lecture takes a deeper look at **positional** and **named** arguments in Dart.

Arguments are used to pass values into a function. The function can then use those values to perform a task, such as displaying text on the screen, calculating a result, creating a widget, or passing data to another function.

Since Flutter uses Dart, understanding how Dart handles arguments is essential for writing Flutter code correctly.

---

## 1. Parameters vs Arguments

The terms **parameter** and **argument** are often used together, but they are slightly different.

A **parameter** is defined in the function declaration.

```dart
void greet(String name) {
  print('Hello, $name');
}
```

Here, `name` is a parameter.

An **argument** is the actual value passed when calling the function.

```dart
greet('Alice');
```

Here, `'Alice'` is an argument.

In many lessons, these terms may be used interchangeably.

---

## 2. Positional Arguments

A **positional argument** is matched to a function parameter based on its position.

The first argument goes to the first parameter, the second argument goes to the second parameter, and so on.

### Example

```dart
void add(int a, int b) {
  print(a + b);
}

add(5, 10);
```

In this example:

```dart
add(5, 10);
```

means:

```dart
a = 5
b = 10
```

The position matters.

If you change the order of the values, the result may change.

```dart
void subtract(int a, int b) {
  print(a - b);
}

subtract(10, 5); // 5
subtract(5, 10); // -5
```

---

## 3. Named Arguments

A **named argument** is matched to a parameter by name instead of by position.

Named parameters are defined using curly braces `{}`.

### Example

```dart
void add({required int a, required int b}) {
  print(a + b);
}

add(a: 10, b: 5);
add(b: 5, a: 10);
```

Both calls work because the arguments are identified by name.

```dart
add(a: 10, b: 5);
add(b: 5, a: 10);
```

The order does not matter.

---

## 4. Required and Optional Behavior

There is an important difference between positional and named parameters.

By default:

* Positional parameters are required.
* Named parameters are optional.

### Required Positional Parameters

```dart
void add(int a, int b) {
  print(a + b);
}

add(5, 10); // valid
```

This would be invalid:

```dart
add(5); // error
add();  // error
```

Because both `a` and `b` are required positional parameters.

---

## 5. Optional Positional Parameters

You can make positional parameters optional by wrapping them in square brackets `[]`.

### Example

```dart
void add(int a, [int? b]) {
  print(b == null ? a : a + b);
}

add(10);     // valid
add(10, 5);  // valid
```

In this example, `b` is optional.

Because `b` might not be provided, it is marked as nullable using `int?`.

---

## 6. Optional Positional Parameters with Default Values

Optional positional parameters can also have default values.

### Example

```dart
void add(int a, [int b = 5]) {
  print(a + b);
}

add(10);    // 15
add(10, 6); // 16
```

In this example:

```dart
[int b = 5]
```

means that `b` is optional, and if no value is provided, Dart will use `5`.

So this call:

```dart
add(10);
```

is the same as:

```dart
add(10, 5);
```

---

## 7. Optional Named Parameters

Named parameters are optional by default.

### Example

```dart
void createUser({String? name}) {
  print(name);
}

createUser(name: 'Alice');
createUser();
```

Both calls are valid.

Because `name` is optional, it can be omitted.

If no value is provided, `name` will be `null`.

---

## 8. Named Parameters with Default Values

Named parameters can also have default values.

### Example

```dart
void add({int a = 0, int b = 5}) {
  print(a + b);
}

add();          // 5
add(a: 10);     // 15
add(b: 10);     // 10
add(a: 10, b: 6); // 16
```

In this example:

```dart
int a = 0
int b = 5
```

means that both named parameters are optional, but they have default values.

If the caller does not provide a value, Dart uses the default value.

---

## 9. Required Named Parameters

Although named parameters are optional by default, you can make them required by using the `required` keyword.

### Example

```dart
void add({required int a, required int b}) {
  print(a + b);
}

add(a: 10, b: 5);
```

This is valid because both required arguments are provided.

This would be invalid:

```dart
add(a: 10); // error
add();      // error
```

Because both `a` and `b` are required.

---

## 10. Mixing Positional and Named Parameters

A function can use both positional and named parameters.

This pattern is common in Flutter.

### Example

```dart
void showMessage(String message, {String prefix = 'Info'}) {
  print('$prefix: $message');
}

showMessage('App started');
showMessage('User logged in', prefix: 'Success');
```

In this example:

```dart
String message
```

is a positional parameter.

```dart
{String prefix = 'Info'}
```

is a named parameter with a default value.

---

## 11. Flutter Example

Many Flutter widgets use a mix of positional and named arguments.

### Example

```dart
Text(
  'Hello Flutter',
  style: TextStyle(
    fontSize: 20,
  ),
  textAlign: TextAlign.center,
)
```

In this example:

```dart
'Hello Flutter'
```

is a positional argument.

These are named arguments:

```dart
style: TextStyle(...)
textAlign: TextAlign.center
```

The positional argument provides the main text content, while the named arguments configure the widget.

---

## 12. Function Example with Optional Positional Parameter

```dart
String buildGreeting(String name, [String greeting = 'Hello']) {
  return '$greeting, $name!';
}

print(buildGreeting('Alice'));
print(buildGreeting('Bob', 'Welcome'));
```

Output:

```text
Hello, Alice!
Welcome, Bob!
```

Here:

```dart
String name
```

is a required positional parameter.

```dart
[String greeting = 'Hello']
```

is an optional positional parameter with a default value.

---

## 13. Function Example with Required and Optional Named Parameters

```dart
Widget buildCard({
  required String title,
  String? subtitle,
  int elevation = 2,
}) {
  return Card(
    elevation: elevation.toDouble(),
    child: ListTile(
      title: Text(title),
      subtitle: subtitle != null ? Text(subtitle) : null,
    ),
  );
}
```

In this example:

```dart
required String title
```

is a required named parameter.

```dart
String? subtitle
```

is an optional named parameter that can be `null`.

```dart
int elevation = 2
```

is an optional named parameter with a default value.

---

## 14. Calling the Function

You can call the function with only the required argument:

```dart
buildCard(title: 'Flutter');
```

You can also provide all arguments:

```dart
buildCard(
  title: 'Dart',
  subtitle: 'Deep Dive',
  elevation: 4,
);
```

Because these are named arguments, the order can vary:

```dart
buildCard(
  elevation: 4,
  subtitle: 'Deep Dive',
  title: 'Dart',
);
```

This is still valid.

---

## Key Points

* Arguments pass values into functions.
* Positional arguments are matched by order.
* Named arguments are matched by name.
* Positional parameters are required by default.
* Named parameters are optional by default.
* Optional positional parameters are wrapped in square brackets `[]`.
* Named parameters are wrapped in curly braces `{}`.
* The `required` keyword makes a named parameter mandatory.
* Default values can be assigned to optional parameters.
* Flutter widgets often combine positional and named arguments.

---

## Comparison Table

| Type                | Syntax                      | Required by Default? | Can Have Default Value? | Example                |
| ------------------- | --------------------------- | -------------------: | ----------------------: | ---------------------- |
| Positional          | `(String name)`             |                  Yes |     No, unless optional | `greet('Alice')`       |
| Optional Positional | `([String name = 'Guest'])` |                   No |                     Yes | `greet()`              |
| Named               | `({String? name})`          |                   No |                     Yes | `greet(name: 'Alice')` |
| Required Named      | `({required String name})`  |                  Yes |                 No need | `greet(name: 'Alice')` |

---

## Summary

Dart supports both positional and named arguments.

**Positional arguments** are matched by order and are required by default.

**Named arguments** are matched by name and are optional by default.

You can change the default behavior by making positional parameters optional with square brackets `[]`, or by making named parameters required with the `required` keyword.

Default values make functions easier and safer to use because callers do not always need to provide every value.

Flutter uses this argument system extensively, especially named arguments, because widgets usually have many configuration options.
