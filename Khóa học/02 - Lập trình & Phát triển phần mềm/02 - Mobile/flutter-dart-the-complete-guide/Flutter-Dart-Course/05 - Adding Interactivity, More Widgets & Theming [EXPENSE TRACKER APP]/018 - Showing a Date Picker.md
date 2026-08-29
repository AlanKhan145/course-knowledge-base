# Showing a Date Picker

## Overview

In this lecture, we add a date input to the `NewExpense` form.

Instead of using another `TextField`, we will create an input-like row with:

* A text label showing the selected date
* A calendar icon button
* A built-in Flutter date picker dialog

Flutter provides the `showDatePicker` function, which opens a calendar overlay and lets the user choose a date.

---

## Goal

The expense form currently has:

* A title input field
* An amount input field
* Cancel and Save buttons

Now we want to add a date picker so the user can select the date of the expense.

The amount input does not need an entire row because amounts are usually short. Therefore, the amount field and the date picker can share the same row.

---

## Wrapping the Amount Field in a `Row`

First, wrap the amount `TextField` inside a `Row`.

```dart
Row(
  children: [
    TextField(
      controller: _amountController,
      keyboardType: const TextInputType.numberWithOptions(
        decimal: true,
      ),
      decoration: const InputDecoration(
        prefixText: '\$ ',
        label: Text('Amount'),
      ),
    ),
  ],
)
```

However, placing a `TextField` directly inside a `Row` can cause layout problems because `TextField` wants to take as much horizontal space as possible.

To fix this, wrap the `TextField` with `Expanded`.

```dart
Expanded(
  child: TextField(
    controller: _amountController,
    keyboardType: const TextInputType.numberWithOptions(
      decimal: true,
    ),
    decoration: const InputDecoration(
      prefixText: '\$ ',
      label: Text('Amount'),
    ),
  ),
)
```

---

## Why Use `Expanded`?

`Expanded` tells Flutter that the child widget should take the available space inside a `Row`, but not more than it is allowed to take.

This prevents layout errors when using widgets like `TextField` inside a `Row`.

---

## Adding Spacing Between Inputs

Add a `SizedBox` between the amount input and the date input.

```dart
const SizedBox(width: 16),
```

This adds horizontal spacing between the two parts of the row.

---

## Creating the Date Input UI

The date input will be created with a small `Row` containing:

* A `Text` widget
* An `IconButton`

```dart
Expanded(
  child: Row(
    children: [
      const Text('Selected Date'),
      IconButton(
        onPressed: () {},
        icon: const Icon(Icons.calendar_month),
      ),
    ],
  ),
)
```

At this point, the text is only a placeholder.

Later, it will show the actual selected date.

---

## Aligning the Date Input

To push the date text and calendar button to the right, set `mainAxisAlignment`.

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.end,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    const Text('Selected Date'),
    IconButton(
      onPressed: () {},
      icon: const Icon(Icons.calendar_month),
    ),
  ],
)
```

### `mainAxisAlignment`

In a `Row`, the main axis is horizontal.

```dart
mainAxisAlignment: MainAxisAlignment.end
```

pushes the row content to the right.

### `crossAxisAlignment`

In a `Row`, the cross axis is vertical.

```dart
crossAxisAlignment: CrossAxisAlignment.center
```

centers the children vertically.

---

## Updated Amount and Date Row

```dart
Row(
  children: [
    Expanded(
      child: TextField(
        controller: _amountController,
        keyboardType: const TextInputType.numberWithOptions(
          decimal: true,
        ),
        decoration: const InputDecoration(
          prefixText: '\$ ',
          label: Text('Amount'),
        ),
      ),
    ),
    const SizedBox(width: 16),
    Expanded(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text('Selected Date'),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.calendar_month),
          ),
        ],
      ),
    ),
  ],
)
```

---

## Creating the Date Picker Method

Instead of writing the date picker logic directly inside `onPressed`, create a separate method in the `_NewExpenseState` class.

```dart
void _presentDatePicker() {
  // show date picker here
}
```

Then connect it to the calendar button.

```dart
IconButton(
  onPressed: _presentDatePicker,
  icon: const Icon(Icons.calendar_month),
)
```

Again, we pass the function reference without parentheses.

---

## Using `showDatePicker`

Flutter provides a built-in function called `showDatePicker`.

```dart
showDatePicker(
  context: context,
  initialDate: DateTime.now(),
  firstDate: DateTime(2025),
  lastDate: DateTime.now(),
);
```

This opens a calendar dialog where the user can choose a date.

---

## Required Parameters

`showDatePicker` requires several important parameters.

### `context`

```dart
context: context
```

The context tells Flutter where the picker should be displayed in the widget tree.

### `initialDate`

```dart
initialDate: now
```

This is the date selected by default when the picker opens.

### `firstDate`

```dart
firstDate: firstDate
```

This is the earliest date the user is allowed to select.

### `lastDate`

```dart
lastDate: now
```

This is the latest date the user is allowed to select.

---

## Creating Date Helper Variables

Inside `_presentDatePicker`, create a `now` variable.

```dart
final now = DateTime.now();
```

This stores the current date and time.

Then create a `firstDate` variable that represents one year before today.

```dart
final firstDate = DateTime(
  now.year - 1,
  now.month,
  now.day,
);
```

This creates a date using:

* Current year minus one
* Current month
* Current day

So the user can only select dates from the past year up to today.

---

## Complete Date Picker Method

```dart
void _presentDatePicker() {
  final now = DateTime.now();
  final firstDate = DateTime(
    now.year - 1,
    now.month,
    now.day,
  );

  showDatePicker(
    context: context,
    initialDate: now,
    firstDate: firstDate,
    lastDate: now,
  );
}
```

---

## Result

After connecting `_presentDatePicker` to the calendar icon button, tapping the icon opens Flutter’s built-in date picker dialog.

The user can:

* Navigate between months
* Select a date
* Confirm the selection
* Cancel the picker

At this stage, the selected date is not stored yet. The current goal is only to show the date picker.

---

## Storing the Selected Date

`showDatePicker` returns a `Future<DateTime?>`.

This means the selected date will be available later, after the user closes the picker.

The result may also be `null` if the user cancels.

A later version will store the result in a nullable state variable.

```dart
DateTime? _selectedDate;
```

Then the picker result can be stored with `setState`.

```dart
void _presentDatePicker() async {
  final now = DateTime.now();
  final firstDate = DateTime(
    now.year - 1,
    now.month,
    now.day,
  );

  final pickedDate = await showDatePicker(
    context: context,
    initialDate: now,
    firstDate: firstDate,
    lastDate: now,
  );

  setState(() {
    _selectedDate = pickedDate;
  });
}
```

---

## Handling Nullable Dates

Because the user can cancel the picker, the result type is nullable.

```dart
DateTime?
```

This means the value can either be:

* A selected `DateTime`
* `null`

Later, the UI should check whether a date has been selected before displaying it.

---

## Complete Example

```dart
class _NewExpenseState extends State<NewExpense> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();

  DateTime? _selectedDate;

  void _presentDatePicker() async {
    final now = DateTime.now();
    final firstDate = DateTime(
      now.year - 1,
      now.month,
      now.day,
    );

    final pickedDate = await showDatePicker(
      context: context,
      initialDate: now,
      firstDate: firstDate,
      lastDate: now,
    );

    setState(() {
      _selectedDate = pickedDate;
    });
  }

  @override
  void dispose() {
    _titleController.dispose();
    _amountController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextField(
            controller: _titleController,
            maxLength: 50,
            decoration: const InputDecoration(
              label: Text('Title'),
            ),
          ),
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _amountController,
                  keyboardType: const TextInputType.numberWithOptions(
                    decimal: true,
                  ),
                  decoration: const InputDecoration(
                    prefixText: '\$ ',
                    label: Text('Amount'),
                  ),
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      _selectedDate == null
                          ? 'No date selected'
                          : formatter.format(_selectedDate!),
                    ),
                    IconButton(
                      onPressed: _presentDatePicker,
                      icon: const Icon(Icons.calendar_month),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Row(
            children: [
              TextButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('Cancel'),
              ),
              ElevatedButton(
                onPressed: () {},
                child: const Text('Save Expense'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

---

## Important Notes

### `showDatePicker`

`showDatePicker` opens Flutter’s built-in calendar dialog.

It is useful when users need to select a date.

---

### `Future<DateTime?>`

The return value of `showDatePicker` is asynchronous.

```dart
Future<DateTime?>
```

This means the result is not available immediately.

The selected date will be returned later, after the user selects or cancels.

---

### `async` and `await`

To wait for the result, mark the method as `async`.

```dart
void _presentDatePicker() async {
  final pickedDate = await showDatePicker(...);
}
```

`await` pauses the function until the date picker is closed.

---

### `DateTime.now()`

`DateTime.now()` gives the current date and time.

```dart
final now = DateTime.now();
```

In this app, it is used as:

* The initially selected date
* The latest selectable date

---

### `firstDate`

The first selectable date is set to one year before today.

```dart
final firstDate = DateTime(
  now.year - 1,
  now.month,
  now.day,
);
```

This prevents users from selecting very old dates.

---

### `lastDate`

The last selectable date is set to today.

```dart
lastDate: now
```

This prevents users from selecting future dates for past expenses.

---

## Summary

In this lecture, we added the user interface and logic for showing a date picker.

We learned how to:

* Put the amount field and date input in the same row
* Use `Expanded` to avoid layout problems inside a `Row`
* Use `SizedBox` for spacing
* Use `IconButton` with a calendar icon
* Open a date picker with `showDatePicker`
* Configure `initialDate`, `firstDate`, and `lastDate`
* Prepare for storing the selected date with `DateTime?`

The next step is to store and display the selected date in the form.
