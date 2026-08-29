# Adding a Dropdown Button

## Overview

In this lecture, we finish the main structure of the `NewExpense` form by adding a dropdown button.

The dropdown allows the user to select an expense category from a predefined list.

Instead of letting users type the category manually, we use the `Category` enum values that already exist in the `expense.dart` model file.

This gives us a clean, type-safe way to let users choose between options such as:

* Food
* Travel
* Leisure
* Work

---

## Goal

The form currently has:

* A title input field
* An amount input field
* A date picker
* Cancel and Save buttons

Now we want to add a category selector.

This category selector will be placed in the same row as the buttons.

---

## Using `DropdownButton`

Flutter provides a built-in widget called `DropdownButton`.

```dart
DropdownButton(
  items: [],
  onChanged: (value) {},
)
```

A `DropdownButton` displays a button that opens a dropdown menu when tapped.

The user can then select one of the available options.

---

## Adding the Dropdown to the Button Row

The dropdown should be added to the row that already contains the Cancel and Save buttons.

```dart
Row(
  children: [
    DropdownButton(
      items: [],
      onChanged: (value) {},
    ),
    TextButton(
      onPressed: () {
        Navigator.pop(context);
      },
      child: const Text('Cancel'),
    ),
    ElevatedButton(
      onPressed: _submitExpenseData,
      child: const Text('Save Expense'),
    ),
  ],
)
```

At this point, the dropdown exists, but it does not have any menu items yet.

---

## Getting All Category Values

The `Category` enum contains all available expense categories.

```dart
enum Category {
  food,
  travel,
  leisure,
  work,
}
```

Dart automatically provides a `values` property for enums.

```dart
Category.values
```

This returns a list of all enum values:

```dart
[
  Category.food,
  Category.travel,
  Category.leisure,
  Category.work,
]
```

This is useful because we can generate dropdown items from the enum instead of hardcoding each option manually.

---

## Creating Dropdown Menu Items

The `items` parameter expects a list of `DropdownMenuItem` widgets.

Since `Category.values` is a list of enum values, we need to transform each category into a `DropdownMenuItem`.

For that, we use `map`.

```dart
items: Category.values.map((category) {
  return DropdownMenuItem(
    value: category,
    child: Text(category.name.toUpperCase()),
  );
}).toList(),
```

---

## Why Use `map()`?

`map()` transforms each item in a list into another type of item.

Here, it transforms each `Category` value into a `DropdownMenuItem`.

```dart
Category.food
```

becomes:

```dart
DropdownMenuItem(
  value: Category.food,
  child: Text('FOOD'),
)
```

After mapping, we call:

```dart
.toList()
```

because `map()` returns an `Iterable`, but `items` expects a `List`.

---

## Using `category.name`

Each enum value has a `name` property.

```dart
category.name
```

For example:

```dart
Category.food.name
```

returns:

```text
food
```

To make it look better in the dropdown, convert it to uppercase:

```dart
category.name.toUpperCase()
```

This displays:

```text
FOOD
TRAVEL
LEISURE
WORK
```

---

## Setting the Dropdown Item Value

Each `DropdownMenuItem` needs a `value`.

```dart
value: category
```

This value is not directly shown to the user.

Instead, it is the internal value that Flutter gives us when the user selects an item.

The visible part is the `child`.

```dart
child: Text(category.name.toUpperCase())
```

---

## Storing the Selected Category

Unlike `TextField`, `DropdownButton` does not use a `TextEditingController`.

Instead, we manage the selected value manually with a state variable.

```dart
Category _selectedCategory = Category.leisure;
```

This sets the initial selected category to `Category.leisure`.

---

## Updating the Selected Category

The `onChanged` function runs whenever the user selects a new dropdown item.

```dart
onChanged: (value) {
  if (value == null) {
    return;
  }

  setState(() {
    _selectedCategory = value;
  });
},
```

Because the value can technically be `null`, we check for that first.

If the value is `null`, we return early.

If it is not `null`, we update `_selectedCategory` inside `setState`.

---

## Why Use `setState`?

The selected category is shown in the dropdown.

When the user selects a different category, the UI must update to show the new value.

Therefore, we need `setState`.

```dart
setState(() {
  _selectedCategory = value;
});
```

Without `setState`, the value might change internally, but the UI would not update.

---

## Setting the Current Dropdown Value

To make the dropdown show the currently selected category, set the `value` parameter.

```dart
value: _selectedCategory,
```

This tells Flutter which item should be displayed as selected.

Without this, the dropdown may appear empty or fail to visually update.

---

## Complete Dropdown Example

```dart
DropdownButton(
  value: _selectedCategory,
  items: Category.values.map((category) {
    return DropdownMenuItem(
      value: category,
      child: Text(category.name.toUpperCase()),
    );
  }).toList(),
  onChanged: (value) {
    if (value == null) {
      return;
    }

    setState(() {
      _selectedCategory = value;
    });
  },
)
```

---

## Type-Safe Version

A cleaner version is to explicitly type the dropdown as `DropdownButton<Category>`.

```dart
DropdownButton<Category>(
  value: _selectedCategory,
  items: Category.values.map((category) {
    return DropdownMenuItem<Category>(
      value: category,
      child: Text(category.name.toUpperCase()),
    );
  }).toList(),
  onChanged: (value) {
    if (value == null) {
      return;
    }

    setState(() {
      _selectedCategory = value;
    });
  },
)
```

This makes it clear that this dropdown works with `Category` values.

---

## Adding Spacing Between the Dropdown and Buttons

To push the buttons to the right, add a `Spacer`.

```dart
const Spacer(),
```

The row can now look like this:

```dart
Row(
  children: [
    DropdownButton<Category>(
      value: _selectedCategory,
      items: Category.values.map((category) {
        return DropdownMenuItem<Category>(
          value: category,
          child: Text(category.name.toUpperCase()),
        );
      }).toList(),
      onChanged: (value) {
        if (value == null) {
          return;
        }

        setState(() {
          _selectedCategory = value;
        });
      },
    ),
    const Spacer(),
    TextButton(
      onPressed: () {
        Navigator.pop(context);
      },
      child: const Text('Cancel'),
    ),
    ElevatedButton(
      onPressed: _submitExpenseData,
      child: const Text('Save Expense'),
    ),
  ],
)
```

The `Spacer` takes up the available space between the dropdown and the buttons.

This pushes the Cancel and Save buttons to the right.

---

## Adding Vertical Spacing

To add spacing between the amount/date row and the dropdown/button row, use a `SizedBox`.

```dart
const SizedBox(height: 16),
```

Place it before the final row.

```dart
const SizedBox(height: 16),
Row(
  children: [
    DropdownButton<Category>(
      value: _selectedCategory,
      items: Category.values.map((category) {
        return DropdownMenuItem<Category>(
          value: category,
          child: Text(category.name.toUpperCase()),
        );
      }).toList(),
      onChanged: (value) {
        if (value == null) {
          return;
        }

        setState(() {
          _selectedCategory = value;
        });
      },
    ),
    const Spacer(),
    TextButton(
      onPressed: () {
        Navigator.pop(context);
      },
      child: const Text('Cancel'),
    ),
    ElevatedButton(
      onPressed: _submitExpenseData,
      child: const Text('Save Expense'),
    ),
  ],
)
```

---

## Complete Example

```dart
import 'package:flutter/material.dart';

import '../models/expense.dart';

class NewExpense extends StatefulWidget {
  const NewExpense({super.key});

  @override
  State<NewExpense> createState() {
    return _NewExpenseState();
  }
}

class _NewExpenseState extends State<NewExpense> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();

  DateTime? _selectedDate;
  Category _selectedCategory = Category.leisure;

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

    if (pickedDate == null) {
      return;
    }

    setState(() {
      _selectedDate = pickedDate;
    });
  }

  void _submitExpenseData() {
    print(_titleController.text);
    print(_amountController.text);
    print(_selectedDate);
    print(_selectedCategory);
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
          const SizedBox(height: 16),
          Row(
            children: [
              DropdownButton<Category>(
                value: _selectedCategory,
                items: Category.values.map((category) {
                  return DropdownMenuItem<Category>(
                    value: category,
                    child: Text(category.name.toUpperCase()),
                  );
                }).toList(),
                onChanged: (value) {
                  if (value == null) {
                    return;
                  }

                  setState(() {
                    _selectedCategory = value;
                  });
                },
              ),
              const Spacer(),
              TextButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('Cancel'),
              ),
              ElevatedButton(
                onPressed: _submitExpenseData,
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

## What Happens When the User Selects a Category?

When the user opens the dropdown and selects a category:

1. Flutter calls the `onChanged` function
2. The selected `Category` value is passed into the function
3. The value is checked for `null`
4. `_selectedCategory` is updated inside `setState`
5. The UI rebuilds
6. The newly selected category appears in the dropdown

---

## Important Notes

### `DropdownButton`

`DropdownButton` creates a button that opens a dropdown menu.

It is useful for choosing from a limited list of values.

---

### `DropdownMenuItem`

Each dropdown option must be wrapped in a `DropdownMenuItem`.

```dart
DropdownMenuItem(
  value: category,
  child: Text(category.name.toUpperCase()),
)
```

The `value` is the internal selected value.

The `child` is what the user sees.

---

### `Category.values`

Enums automatically provide a `values` list.

```dart
Category.values
```

This gives all enum options and avoids manual hardcoding.

---

### `value`

The `value` parameter tells the dropdown which item is currently selected.

```dart
value: _selectedCategory
```

This value must match one of the item values.

---

### `onChanged`

`onChanged` runs when the user selects a different dropdown item.

```dart
onChanged: (value) {
  if (value == null) {
    return;
  }

  setState(() {
    _selectedCategory = value;
  });
}
```

---

## Common Mistakes

### Forgetting `.toList()`

Incorrect:

```dart
items: Category.values.map((category) {
  return DropdownMenuItem(
    value: category,
    child: Text(category.name.toUpperCase()),
  );
}),
```

Correct:

```dart
items: Category.values.map((category) {
  return DropdownMenuItem(
    value: category,
    child: Text(category.name.toUpperCase()),
  );
}).toList(),
```

`map()` returns an `Iterable`, but `items` needs a `List`.

---

### Not Setting the Dropdown Value

Incorrect:

```dart
DropdownButton(
  items: Category.values.map((category) {
    return DropdownMenuItem(
      value: category,
      child: Text(category.name.toUpperCase()),
    );
  }).toList(),
  onChanged: (value) {},
)
```

Correct:

```dart
DropdownButton(
  value: _selectedCategory,
  items: Category.values.map((category) {
    return DropdownMenuItem(
      value: category,
      child: Text(category.name.toUpperCase()),
    );
  }).toList(),
  onChanged: (value) {},
)
```

Without `value`, the dropdown may not show the selected item.

---

### Forgetting `setState`

Incorrect:

```dart
onChanged: (value) {
  _selectedCategory = value!;
}
```

Correct:

```dart
onChanged: (value) {
  if (value == null) {
    return;
  }

  setState(() {
    _selectedCategory = value;
  });
}
```

Without `setState`, the UI will not update correctly.

---

## Current Form Status

The form now supports:

* Title input
* Amount input
* Date selection
* Category selection
* Cancel button
* Save button

The remaining tasks are:

* Validate user input
* Show an error message for invalid input
* Add the new expense to the list
* Improve keyboard handling inside the modal
* Style the UI
* Build the chart

---

## Summary

In this lecture, we added a dropdown button for selecting an expense category.

We learned how to:

* Use `DropdownButton`
* Create `DropdownMenuItem` widgets
* Generate dropdown items from `Category.values`
* Use `map()` and `.toList()`
* Display enum names with `category.name.toUpperCase()`
* Store the selected category in state
* Update the UI with `setState`
* Use `Spacer` and `SizedBox` for layout spacing

The form is now almost complete and ready for validation.
