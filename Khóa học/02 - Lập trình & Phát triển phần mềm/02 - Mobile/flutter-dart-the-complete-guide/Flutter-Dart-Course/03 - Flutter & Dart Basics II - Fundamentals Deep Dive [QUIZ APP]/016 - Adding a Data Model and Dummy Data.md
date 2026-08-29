# Adding a Data Model and Dummy Data

## Overview

This lecture introduces the concept of data models in Dart and explains how to use them in a Flutter Quiz App.

So far, classes have mainly been used to create custom widgets. However, Dart classes can also be used to create blueprints for other kinds of objects. In this case, we use a class to define the structure of a quiz question.

A quiz question should contain:

* The question text
* A list of possible answers

By creating a `QuizQuestion` model class, we can group this related data into one reusable structure. After that, we create dummy question data that can be used to power the questions screen.

---

## Goal

The goal of this part of the app is to prepare the data needed for the quiz.

The app needs to:

1. Display a question.
2. Display multiple possible answers.
3. Allow the user to choose one answer.
4. Store the selected answer.
5. Move to the next question.
6. Show a results screen after all questions are answered.

Before building all of that UI logic, we first need a structured way to store quiz questions and answers.

---

## Key Points

* A data model class groups related data into one structure.
* A model class does not need to extend `StatelessWidget` or `StatefulWidget`.
* Dart classes can be used for more than widgets.
* `final` fields are useful for immutable data models.
* A `const` constructor allows constant model objects.
* Dummy data is hardcoded data used during development.
* The correct answer is stored as the first item in the answers list.
* Answers can be shuffled later before being displayed.
* Separating models and data from UI code keeps the project organized.

---

## Project Structure

A clean project structure may look like this:

```text
lib/
├── data/
│   └── questions.dart
├── models/
│   └── quiz_question.dart
├── questions_screen.dart
├── start_screen.dart
└── main.dart
```

The `models/` folder stores data model classes.

The `data/` folder stores dummy data or static app data.

---

## Creating the Quiz Question Model

Create a new file:

```text
lib/models/quiz_question.dart
```

Inside this file, define a `QuizQuestion` class.

```dart
class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;
}
```

This class defines the blueprint for a quiz question object.

Each quiz question has:

```dart
final String text;
```

This stores the question text.

```dart
final List<String> answers;
```

This stores a list of possible answers.

---

## Why This Class Does Not Extend Anything

The `QuizQuestion` class is not a widget.

Therefore, it does not extend:

```dart
StatelessWidget
```

or:

```dart
StatefulWidget
```

It is just a normal Dart class used to structure data.

```dart
class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;
}
```

This class simply groups related data together.

---

## Constructor Explanation

The constructor looks like this:

```dart
const QuizQuestion(this.text, this.answers);
```

This constructor receives two positional arguments:

1. The question text
2. The list of answers

Example:

```dart
const QuizQuestion(
  'What are the main building blocks of Flutter UIs?',
  [
    'Widgets',
    'Components',
    'Blocks',
    'Functions',
  ],
);
```

The first argument is assigned to:

```dart
text
```

The second argument is assigned to:

```dart
answers
```

---

## Using `final` Fields

The properties are marked as `final`:

```dart
final String text;
final List<String> answers;
```

This means the values cannot be reassigned after the object is created.

This is useful because quiz question data should not change while the app is running.

---

## Using a `const` Constructor

The constructor is marked with `const`:

```dart
const QuizQuestion(this.text, this.answers);
```

This allows quiz questions to be created as compile-time constants.

Example:

```dart
const QuizQuestion(
  'What are the main building blocks of Flutter UIs?',
  [
    'Widgets',
    'Components',
    'Blocks',
    'Functions',
  ],
);
```

Using `const` can improve performance because Dart can reuse constant objects.

---

## Adding a Helper Method to Shuffle Answers

In the app, the correct answer is always stored as the first answer.

However, we do not want the correct answer to always appear first on the screen.

To solve this, we can add a method that returns a shuffled copy of the answers list.

```dart
class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> getShuffledAnswers() {
    final shuffledList = List.of(answers);
    shuffledList.shuffle();
    return shuffledList;
  }
}
```

The method:

```dart
List.of(answers)
```

creates a copy of the original answers list.

Then:

```dart
shuffledList.shuffle();
```

randomly changes the order of the copied list.

The original `answers` list stays unchanged, so the correct answer is still stored at index `0`.

---

## Final Model File

```dart
// lib/models/quiz_question.dart

class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> getShuffledAnswers() {
    final shuffledList = List.of(answers);
    shuffledList.shuffle();
    return shuffledList;
  }
}
```

---

# Creating Dummy Data

After creating the model class, we need some quiz questions to use in the app.

Create a new file:

```text
lib/data/questions.dart
```

This file stores the dummy quiz data.

Dummy data is hardcoded data used while developing and testing the app before connecting it to a real backend, database, or API.

---

## Importing the Model

Inside `questions.dart`, import the model class:

```dart
import 'package:adv_basics/models/quiz_question.dart';
```

This allows the file to create `QuizQuestion` objects.

---

## Creating the Questions List

```dart
const questions = [
  QuizQuestion(
    'What are the main building blocks of Flutter UIs?',
    [
      'Widgets',
      'Components',
      'Blocks',
      'Functions',
    ],
  ),
];
```

The `questions` constant stores a list of `QuizQuestion` objects.

Each object contains:

1. A question string
2. A list of answer strings

---

## Important Convention

In this course, the correct answer is always the first item in the answers list.

Example:

```dart
QuizQuestion(
  'What are the main building blocks of Flutter UIs?',
  [
    'Widgets',
    'Components',
    'Blocks',
    'Functions',
  ],
),
```

Here, the correct answer is:

```dart
'Widgets'
```

It is placed first in the list.

Later, the app can shuffle the answers before displaying them so that the correct answer does not always appear first.

---

## Final Dummy Data File

```dart
// lib/data/questions.dart

import 'package:adv_basics/models/quiz_question.dart';

const questions = [
  QuizQuestion(
    'What are the main building blocks of Flutter UIs?',
    [
      'Widgets',
      'Components',
      'Blocks',
      'Functions',
    ],
  ),
  QuizQuestion(
    'How are Flutter UIs built?',
    [
      'By combining widgets in code',
      'By combining widgets in a visual editor',
      'By defining widgets in config files',
      'By using XCode for iOS and Android Studio for Android',
    ],
  ),
  QuizQuestion(
    'What\'s the purpose of a StatefulWidget?',
    [
      'Update UI as data changes',
      'Update data as UI changes',
      'Ignore data changes',
      'Render UI that does not depend on data',
    ],
  ),
  QuizQuestion(
    'Which widget should you try to use more often: StatelessWidget or StatefulWidget?',
    [
      'StatelessWidget',
      'StatefulWidget',
      'Both are equally good',
      'None of the above',
    ],
  ),
  QuizQuestion(
    'What happens if you change data in a StatelessWidget?',
    [
      'The UI is not updated',
      'The UI is updated',
      'The closest StatefulWidget is updated',
      'Any nested StatefulWidgets are updated',
    ],
  ),
  QuizQuestion(
    'How should you update data inside of StatefulWidgets?',
    [
      'By calling setState()',
      'By calling updateData()',
      'By calling updateUI()',
      'By calling updateState()',
    ],
  ),
];
```

---

## Why Use a Data Model?

Without a data model, quiz data might be stored in separate lists.

Example:

```dart
final questionTexts = [
  'Question 1',
  'Question 2',
];

final answers = [
  ['Answer A', 'Answer B'],
  ['Answer C', 'Answer D'],
];
```

This can become difficult to manage because related data is separated.

A model class keeps related data together:

```dart
QuizQuestion(
  'Question 1',
  [
    'Answer A',
    'Answer B',
  ],
);
```

This is cleaner, safer, and easier to use.

---

## Separation of Concerns

Separating the model, data, and UI follows the principle of separation of concerns.

The model file defines the data structure:

```text
lib/models/quiz_question.dart
```

The data file stores the actual question data:

```text
lib/data/questions.dart
```

The UI files display the data:

```text
lib/questions_screen.dart
```

This makes the app easier to maintain as it grows.

---

## Notes

The `QuizQuestion` model acts as a blueprint for creating quiz question objects.

The dummy data in `questions.dart` gives the app real content to display before connecting to a real data source.

The first answer in each answer list is treated as the correct answer. This convention is important because the results screen will later need to compare the user’s selected answer with the correct answer.

To avoid making the quiz predictable, answers should be shuffled before they are displayed to the user.

---

## Summary

This lecture introduced data models and dummy data in Dart.

A `QuizQuestion` class was created to represent each quiz question with a question text and a list of answers.

Dummy questions were then added in a separate `questions.dart` file.

This gives the Quiz App a structured data source and prepares the app for displaying questions, showing answers, storing user selections, and eventually generating a results screen.
