# Letting Flutter do the Work with TextEditingController

## Overview
This lecture introduces `TextEditingController` as a superior alternative to `onChanged` for managing text field input. A controller is linked to a `TextField` and always holds the current value, supports programmatic text manipulation, and can be read at any point without storing keystroke-by-keystroke state. Proper disposal of controllers prevents memory leaks.

## Key Points
- `TextEditingController` is attached to a `TextField` via its `controller` property
- Access the current text with `_controller.text` at any time
- Controllers must be created in `initState` or as class-level declarations
- Always call `_controller.dispose()` in the `dispose()` method to free memory

## Code Example
```dart
class _NewExpenseState extends State<NewExpense> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();

  @override
  void dispose() {
    _titleController.dispose();
    _amountController.dispose();
    super.dispose();
  }

  void _submitExpenseData() {
    final enteredTitle = _titleController.text;
    final enteredAmount = double.tryParse(_amountController.text);
    // validate and use the values...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: _titleController,
          decoration: const InputDecoration(label: Text('Title')),
        ),
        TextField(
          controller: _amountController,
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          decoration: const InputDecoration(
            prefixText: '\$ ',
            label: Text('Amount'),
          ),
        ),
      ],
    );
  }
}
```

## Notes
`TextEditingController` also supports listening for changes via `addListener`, giving even more flexibility than `onChanged`. Forgetting to dispose controllers is a common Flutter memory leak — always override `dispose()` when using them. The `controller.text` property returns an empty string if the user has not typed anything.

## Summary
`TextEditingController` simplifies input management by always holding the current field value and requiring only a single read when the form is submitted.
