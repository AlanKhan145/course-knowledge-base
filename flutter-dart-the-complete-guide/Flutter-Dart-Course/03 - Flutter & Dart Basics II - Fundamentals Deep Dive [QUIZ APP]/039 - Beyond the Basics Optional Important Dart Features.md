# Beyond the Basics: Optional Important Dart Features

## Overview

This lecture introduces three optional but important Dart features that are commonly seen in Flutter projects:

1. private identifiers with a leading underscore,
2. getters,
3. arrow functions.

These features are not required to complete the quiz app, but they help make Dart and Flutter code cleaner, shorter, and easier to understand.

You will also see these features used in many real Flutter projects and throughout the rest of the course.

## Key Points

* A leading underscore `_` makes a Dart identifier private to its library.
* In most Flutter files, this effectively means the class, property, or method is only usable inside that file.
* Getters allow methods without parameters to be accessed like properties.
* A getter uses the `get` keyword.
* Arrow functions provide a shorter syntax for functions that only return one expression.
* Arrow functions use the `=>` syntax.
* These features are optional, but they are common in Dart and Flutter codebases.

## 1. Private Identifiers with `_`

In Dart, adding an underscore `_` in front of a name makes it private.

For example:

```dart id="jwtxum"
class _QuizState extends State<Quiz> {
  // ...
}
```

The class name starts with an underscore:

```dart id="k9ri4d"
_QuizState
```

This means the class is intended to be used only inside the file where it is defined.

## Why `_QuizState` Is Private

A `StatefulWidget` is usually split into two classes:

```dart id="0osabx"
class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  // State logic goes here
}
```

The public widget is:

```dart id="7b0ql8"
Quiz
```

The private state class is:

```dart id="wsfs1e"
_QuizState
```

This makes sense because `_QuizState` belongs to the `Quiz` widget and should not be used directly from other files.

Other files can import and use `Quiz`, but they should not directly use `_QuizState`.

## Private Properties and Methods

The underscore can also be used for properties and methods.

Example:

```dart id="xwwg2e"
class _QuizState extends State<Quiz> {
  final List<String> _selectedAnswers = [];

  void _chooseAnswer(String answer) {
    _selectedAnswers.add(answer);
  }
}
```

Here, both `_selectedAnswers` and `_chooseAnswer` are private.

This communicates that they are only meant to be used inside this file.

## Important Note About Dart Privacy

Dart privacy is based on the library, not the class.

In a normal Flutter app, each Dart file is usually its own library.

So in practice, a leading underscore often means:

```txt id="1fybsq"
Only usable inside this file.
```

This is different from some other languages where privacy is based directly on the class.

## 2. Getters

A getter is a special kind of method that can be accessed like a property.

Getters are useful when a method:

* takes no parameters,
* computes or derives some data,
* returns a value based on existing class properties.

## Before: Normal Method

In the results screen, we originally have a method like this:

```dart id="fyx9lj"
List<Map<String, Object>> getSummaryData() {
  final summary = <Map<String, Object>>[];

  for (var i = 0; i < questions.length; i++) {
    summary.add({
      'question_index': i,
      'question': questions[i].text,
      'correct_answer': questions[i].answers[0],
      'user_answer': chosenAnswers[i],
    });
  }

  return summary;
}
```

This method is called with parentheses:

```dart id="3v2oar"
final summaryData = getSummaryData();
```

## After: Getter

Since this method does not take any parameters and only derives data, it can be converted into a getter.

```dart id="g4v4ru"
List<Map<String, Object>> get summaryData {
  final summary = <Map<String, Object>>[];

  for (var i = 0; i < questions.length; i++) {
    summary.add({
      'question_index': i,
      'question': questions[i].text,
      'correct_answer': questions[i].answers[0],
      'user_answer': chosenAnswers[i],
    });
  }

  return summary;
}
```

The method name becomes more property-like:

```dart id="89pit8"
summaryData
```

The parentheses are removed.

The `get` keyword is added before the name.

## Using a Getter

A getter is accessed like a property:

```dart id="htm88z"
QuestionsSummary(summaryData)
```

Not like a method:

```dart id="u7vsm3"
QuestionsSummary(summaryData())
```

This would be incorrect because `summaryData` is now a getter, not a normal method.

## Getter Example in the Results Screen

```dart id="fhsyta"
class ResultsScreen extends StatelessWidget {
  const ResultsScreen({
    super.key,
    required this.chosenAnswers,
  });

  final List<String> chosenAnswers;

  List<Map<String, Object>> get summaryData {
    final summary = <Map<String, Object>>[];

    for (var i = 0; i < questions.length; i++) {
      summary.add({
        'question_index': i,
        'question': questions[i].text,
        'correct_answer': questions[i].answers[0],
        'user_answer': chosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(BuildContext context) {
    final numTotalQuestions = questions.length;

    final numCorrectQuestions = summaryData.where((data) {
      return data['user_answer'] == data['correct_answer'];
    }).length;

    return Column(
      children: [
        Text(
          'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!',
        ),
        QuestionsSummary(summaryData),
      ],
    );
  }
}
```

## Why Use a Getter?

A getter is useful when you want code to look like property access, even though Dart still runs a method internally.

This makes the code more readable.

Instead of this:

```dart id="4kyqlm"
getSummaryData()
```

you can write this:

```dart id="mtzxpg"
summaryData
```

This works well for computed values based on existing class properties.

## Another Getter Example: Shuffled Answers

In the `quiz_question.dart` file, you may have a method like this:

```dart id="8si3y7"
List<String> getShuffledAnswers() {
  final shuffledList = List.of(answers);
  shuffledList.shuffle();
  return shuffledList;
}
```

This method can also be converted into a getter:

```dart id="cx473r"
List<String> get shuffledAnswers {
  final shuffledList = List.of(answers);
  shuffledList.shuffle();
  return shuffledList;
}
```

Now it can be used like a property:

```dart id="vug7fe"
currentQuestion.shuffledAnswers
```

Instead of this:

```dart id="9jmwxb"
currentQuestion.getShuffledAnswers()
```

## Important Getter Note

A getter still runs code when it is accessed.

So this:

```dart id="a4dwx6"
summaryData
```

may look like a simple property, but internally Dart executes the getter body.

For small calculations, this is fine.

For expensive calculations, you may still want to store the result in a local variable.

## 3. Arrow Functions

Arrow functions provide a shorter syntax for functions that only return one expression.

They use this arrow syntax:

```dart id="7pnryu"
=>
```

Arrow functions are useful for short callbacks, especially with list methods such as:

* `map()`,
* `where()`,
* `forEach()`.

## Before: Regular Anonymous Function

In the results screen, we may have this code:

```dart id="j3bzwk"
final numCorrectQuestions = summaryData.where((data) {
  return data['user_answer'] == data['correct_answer'];
}).length;
```

The function passed to `where()` only returns one expression.

That makes it a good candidate for an arrow function.

## After: Arrow Function

The same logic can be written like this:

```dart id="w8pjo2"
final numCorrectQuestions = summaryData.where(
  (data) => data['user_answer'] == data['correct_answer'],
).length;
```

This is shorter and easier to read once you are familiar with the syntax.

## How Arrow Functions Work

This regular function:

```dart id="2sopg3"
(data) {
  return data['user_answer'] == data['correct_answer'];
}
```

can be rewritten as:

```dart id="8krn62"
(data) => data['user_answer'] == data['correct_answer']
```

When using an arrow function:

* remove the curly braces,
* remove the `return` keyword,
* remove the semicolon after the returned expression,
* place the expression after `=>`.

## When to Use Arrow Functions

Use arrow functions when the function body contains only one expression.

Good example:

```dart id="i3vtww"
final doubled = numbers.map((number) => number * 2).toList();
```

Another good example:

```dart id="m9272d"
final correctAnswers = summaryData.where(
  (data) => data['user_answer'] == data['correct_answer'],
).length;
```

## When Not to Use Arrow Functions

Do not use arrow functions when the function body contains multiple statements.

For example, this should stay as a normal function:

```dart id="d59dnx"
final summary = summaryData.map((data) {
  final questionIndex = data['question_index'] as int;
  final question = data['question'] as String;

  return '$questionIndex: $question';
}).toList();
```

Because there is more than one statement, the regular function syntax is clearer and required.

## Full Example Using Getter and Arrow Function

```dart id="3nptep"
class ResultsScreen extends StatelessWidget {
  const ResultsScreen({
    super.key,
    required this.chosenAnswers,
  });

  final List<String> chosenAnswers;

  List<Map<String, Object>> get summaryData {
    final summary = <Map<String, Object>>[];

    for (var i = 0; i < questions.length; i++) {
      summary.add({
        'question_index': i,
        'question': questions[i].text,
        'correct_answer': questions[i].answers[0],
        'user_answer': chosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(BuildContext context) {
    final numTotalQuestions = questions.length;

    final numCorrectQuestions = summaryData.where(
      (data) => data['user_answer'] == data['correct_answer'],
    ).length;

    return Column(
      children: [
        Text(
          'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!',
        ),
        QuestionsSummary(summaryData),
      ],
    );
  }
}
```

## Notes

These Dart features are optional.

You can build Flutter apps without using them, but they are common in real projects.

Private identifiers make it clear which classes, properties, and methods are only meant for internal use.

Getters make computed data easier to access and read.

Arrow functions make short functions more concise.

Together, these features help make Dart code cleaner and more idiomatic.

## Summary

This lecture introduces three optional but important Dart features.

First, a leading underscore `_` makes identifiers private to their Dart library:

```dart id="zlr322"
class _QuizState extends State<Quiz> {}
```

Second, getters allow methods without parameters to be accessed like properties:

```dart id="41kz0y"
List<Map<String, Object>> get summaryData {
  return [];
}
```

Third, arrow functions provide a shorter syntax for functions that immediately return one expression:

```dart id="l6wl79"
(data) => data['user_answer'] == data['correct_answer']
```

These features are not mandatory, but they are useful and commonly used in Flutter and Dart projects.
