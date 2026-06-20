# Passing Data via Functions Across Widgets

## Overview

This lecture explains how to pass data from a child widget back up to a parent widget by using callback functions.

In Flutter, data usually flows from parent widgets to child widgets through constructor parameters. However, child widgets often need to send information back to their parent.

For example, in the Quiz App, the `AnswerButton` is tapped inside the `QuestionsScreen`, but the selected answer should be stored in the parent `Quiz` widget. This is because the parent widget will later need those selected answers to show the results screen.

To solve this, we pass functions down into child widgets and call those functions with data.

---

## Goal

The goal is to store all selected answers in the parent `Quiz` widget.

When the user taps an answer button:

1. The answer button triggers a function.
2. The selected answer is passed to `QuestionsScreen`.
3. `QuestionsScreen` passes the answer up to `Quiz`.
4. `Quiz` stores the answer in a list.
5. The app moves to the next question.

---

## Key Points

* Parent widgets can pass functions to child widgets.
* Child widgets can call those functions to send data back up.
* A callback function can accept parameters.
* Function type syntax can define expected parameters.
* `void Function(String answer)` means a function that receives a `String` and returns nothing.
* Anonymous functions are useful when you need to pass arguments later.
* This pattern is called lifting state up.
* State should be stored in the lowest common ancestor that needs it.

---

## Why Store Answers in the Parent Widget?

The selected answers are created in the `QuestionsScreen`.

However, they will later be needed in the results screen.

Both screens are managed by the `Quiz` widget.

Therefore, the selected answers should be stored in `_QuizState`.

This is called lifting state up.

```text id="14v3og"
Quiz
├── QuestionsScreen
└── ResultsScreen
```

Because `Quiz` will manage both screens, it is the right place to store shared state.

---

## Creating the Selected Answers List

Inside `_QuizState`, create a list to store selected answers.

```dart id="qtwuzk"
final List<String> selectedAnswers = [];
```

This list starts empty.

The first answer added to the list belongs to the first question.

The second answer added belongs to the second question.

And so on.

---

## Why `final` Works Here

The list is marked as `final`.

```dart id="y0cpj5"
final List<String> selectedAnswers = [];
```

This means the variable cannot be reassigned.

This is not allowed:

```dart id="yau8j4"
selectedAnswers = [];
```

However, the list itself can still be changed.

This is allowed:

```dart id="yqu6x6"
selectedAnswers.add(answer);
```

That is because we are mutating the existing list object in memory, not assigning a new list to the variable.

---

## Creating the Parent Callback Function

Inside `_QuizState`, create a function that receives the selected answer.

```dart id="5haj3v"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);
}
```

This function:

1. Receives the selected answer.
2. Adds it to the `selectedAnswers` list.

---

## Passing the Function to `QuestionsScreen`

The `Quiz` widget needs to pass `chooseAnswer` to `QuestionsScreen`.

```dart id="v04lwe"
QuestionsScreen(
  onSelectAnswer: chooseAnswer,
)
```

Notice that we pass the function without parentheses.

Correct:

```dart id="0shfu0"
onSelectAnswer: chooseAnswer,
```

Incorrect:

```dart id="6dcxj8"
onSelectAnswer: chooseAnswer(),
```

The second version would execute the function immediately, which is not what we want.

---

## Accepting the Function in `QuestionsScreen`

The `QuestionsScreen` widget must accept the function through its constructor.

```dart id="fljm4m"
class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({
    super.key,
    required this.onSelectAnswer,
  });

  final void Function(String answer) onSelectAnswer;

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}
```

The type:

```dart id="7uq7xh"
void Function(String answer)
```

means:

```text id="9bskvw"
A function that receives a String and returns nothing.
```

The name `onSelectAnswer` follows Flutter’s common naming convention for callback functions.

Examples from Flutter include:

```dart id="esrb51"
onPressed
onTap
onChanged
```

---

## Accessing Widget Properties from the State Class

`QuestionsScreen` is a `StatefulWidget`, so it has two classes:

```text id="bxk8b3"
QuestionsScreen
_QuestionsScreenState
```

The `onSelectAnswer` property belongs to the widget class.

But we need to use it inside the state class.

Flutter provides the `widget` property for this.

```dart id="iat18h"
widget.onSelectAnswer(selectedAnswer);
```

The `widget` property gives the state class access to the current widget instance and its properties.

---

## Updating `answerQuestion`

The `answerQuestion` method should now receive the selected answer.

```dart id="mibzfh"
void answerQuestion(String selectedAnswer) {
  widget.onSelectAnswer(selectedAnswer);

  setState(() {
    currentQuestionIndex++;
  });
}
```

This method does two things:

1. Sends the selected answer to the parent widget.
2. Moves to the next question.

---

## Why We Need an Anonymous Function

Inside the `map()` method, we create one `AnswerButton` per answer.

```dart id="26d8mg"
...currentQuestion.getShuffledAnswers().map(
  (answer) => AnswerButton(
    answerText: answer,
    onTap: () {
      answerQuestion(answer);
    },
  ),
)
```

The `AnswerButton` expects this type:

```dart id="ltpxli"
void Function()
```

That means `onTap` expects a function with no parameters.

But `answerQuestion` expects a `String`.

```dart id="9ap4m9"
void answerQuestion(String selectedAnswer)
```

Therefore, we cannot pass it directly like this:

```dart id="mbpqz0"
onTap: answerQuestion,
```

Instead, we wrap it in an anonymous function:

```dart id="mw63p2"
onTap: () {
  answerQuestion(answer);
},
```

This anonymous function takes no parameters, so it matches what `onTap` expects.

Inside the anonymous function, we call `answerQuestion(answer)`.

---

## Understanding the Closure

This code uses a closure:

```dart id="wq0hdx"
onTap: () {
  answerQuestion(answer);
},
```

The anonymous function remembers the `answer` value from the surrounding `map()` callback.

Each generated button gets its own answer value.

So if the user taps the button for:

```dart id="2dwv9i"
'Widgets'
```

then this runs:

```dart id="knhfsw"
answerQuestion('Widgets');
```

If the user taps the button for:

```dart id="02bpuw"
'Functions'
```

then this runs:

```dart id="xxd7zi"
answerQuestion('Functions');
```

---

## Function Call Chain

When the user taps an answer button, the data moves through a chain of functions.

```text id="jqrh08"
AnswerButton tapped
        ↓
onTap anonymous function runs
        ↓
answerQuestion(answer)
        ↓
widget.onSelectAnswer(answer)
        ↓
chooseAnswer(answer)
        ↓
selectedAnswers.add(answer)
```

This is how data moves from the button back up to the parent widget.

---

## Code Example: `quiz.dart`

```dart id="0fso1c"
class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  final List<String> selectedAnswers = [];

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(
      onStartQuiz: switchScreen,
    );

    if (activeScreen == 'questions-screen') {
      screenWidget = QuestionsScreen(
        onSelectAnswer: chooseAnswer,
      );
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          child: screenWidget,
        ),
      ),
    );
  }
}
```

---

## Code Example: `questions_screen.dart`

```dart id="jyaopw"
class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({
    super.key,
    required this.onSelectAnswer,
  });

  final void Function(String answer) onSelectAnswer;

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}

class _QuestionsScreenState extends State<QuestionsScreen> {
  var currentQuestionIndex = 0;

  void answerQuestion(String selectedAnswer) {
    widget.onSelectAnswer(selectedAnswer);

    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];

    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              currentQuestion.text,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 30),
            ...currentQuestion.getShuffledAnswers().map(
              (answer) => AnswerButton(
                answerText: answer,
                onTap: () {
                  answerQuestion(answer);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## Code Example: `answer_button.dart`

```dart id="lsm55d"
class AnswerButton extends StatelessWidget {
  const AnswerButton({
    super.key,
    required this.answerText,
    required this.onTap,
  });

  final String answerText;
  final void Function() onTap;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      child: Text(
        answerText,
        textAlign: TextAlign.center,
      ),
    );
  }
}
```

---

## Why `AnswerButton.onTap` Has No Parameter

The `AnswerButton` does not need to know about the selected answer as a function parameter.

It only needs to know what function to execute when tapped.

```dart id="bmpm5m"
final void Function() onTap;
```

The selected answer is already captured in the anonymous function inside `QuestionsScreen`.

```dart id="kbbbu2"
onTap: () {
  answerQuestion(answer);
},
```

This keeps `AnswerButton` simple and reusable.

---

## Parent-to-Child vs Child-to-Parent Data Flow

### Parent to Child

Parents pass data down through constructor arguments.

```dart id="v86tu5"
AnswerButton(
  answerText: answer,
  onTap: () {
    answerQuestion(answer);
  },
)
```

Here, `answerText` flows from `QuestionsScreen` to `AnswerButton`.

---

### Child to Parent

Children send data up by calling callback functions.

```dart id="8snwgt"
widget.onSelectAnswer(selectedAnswer);
```

Here, `QuestionsScreen` sends the selected answer up to `Quiz`.

---

## Why This Pattern Matters

This pattern is common in Flutter apps.

You use it when:

* A child widget receives user input.
* The parent widget needs to store or react to that input.
* Multiple screens need access to the same data.
* State should be lifted to a shared parent.

Examples:

* A form field sends text to a parent form.
* A button sends a selected item to a parent list.
* A quiz answer is sent to a parent quiz controller.
* A child widget reports a toggle or checkbox value.

---

## Important Notes

Do not call a function immediately when passing it as a callback.

Correct:

```dart id="wjv2s6"
onTap: () {
  answerQuestion(answer);
},
```

Incorrect:

```dart id="8c1yzp"
onTap: answerQuestion(answer),
```

The incorrect version runs immediately during widget build.

The correct version creates a function that runs later when the button is tapped.

---

## Summary

This lecture showed how to pass data upward through the widget tree by using callback functions.

The selected answer starts inside the answer button UI, but it needs to be stored in the parent `Quiz` widget.

To make this work, the parent defines a function, passes it down to the child, and the child calls that function with the selected answer.

This allows Flutter apps to keep state in the right place while still letting child widgets communicate user actions back to their parents.
