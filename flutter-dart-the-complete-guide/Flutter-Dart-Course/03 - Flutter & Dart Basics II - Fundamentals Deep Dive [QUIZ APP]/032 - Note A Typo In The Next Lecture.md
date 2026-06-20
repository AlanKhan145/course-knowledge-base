# Note: A Typo in the Next Lecture

## Overview

This is a short note to inform students about a typo that appears in the next lecture. The typo is found in the `questions_summary.dart` file.

This correction will help you follow along with the lecture more easily and avoid confusion if your code does not work as expected.

## Key Points

* There is a typo in the next lecture’s code.
* The typo appears in the `questions_summary.dart` file.
* The incorrect key is `question`.
* The correct key should be `question_index`.
* This is a small code typo and does not affect the main concept of the lecture.

## The Typo

In the next lecture, the instructor writes:

```dart id="jwwb8f"
Text(((data['question'] as int) + 1).toString()),
```

However, this is incorrect because the map does not use the key `question` for the question number.

## Correct Code

You should write:

```dart id="uvq9wf"
Text(((data['question_index'] as int) + 1).toString()),
```

## Explanation

The value that stores the question number is saved under the key `question_index`, not `question`.

Therefore, using `data['question']` will not give the correct value and may cause an error or unexpected behavior.

The corrected version accesses the proper key:

```dart id="r7irab"
data['question_index']
```

Then it adds `1` to display the question number starting from `1` instead of `0`.

## Tips

* Read this note before watching the next lecture.
* Use `question_index` instead of `question`.
* If your code does not work, check whether you used the correct map key.
* Remember that map keys must match exactly in Dart.

## Summary

In the next lecture, there is a typo in the `questions_summary.dart` file.

Instead of using:

```dart id="vd6ksl"
data['question']
```

you should use:

```dart id="ch9l3t"
data['question_index']
```

This small correction ensures that the question number is displayed correctly.
