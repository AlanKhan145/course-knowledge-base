# Creating a Fullscreen Modal

## Overview
This lecture shows how to make the modal bottom sheet expand to fill the full screen, improving usability especially on smaller devices where the default half-screen sheet may feel cramped. The `isScrollControlled` parameter and `useSafeArea` option control how the modal behaves. You will also handle keyboard insets so the form fields are not hidden behind the soft keyboard.

## Key Points
- Set `isScrollControlled: true` in `showModalBottomSheet` to allow the sheet to fill the full height
- `useSafeArea: true` ensures the modal respects the device's safe area (notch, home indicator)
- Add `Padding` with `MediaQuery.viewInsets` to push the form above the keyboard
- `SingleChildScrollView` can be added to make the form scrollable when the keyboard is open

## Code Example
```dart
void _openAddExpenseOverlay() {
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,  // allow fullscreen height
    useSafeArea: true,          // respect safe area
    builder: (ctx) => NewExpense(onAddExpense: _addExpense),
  );
}

// Inside NewExpense build(), wrap with keyboard-aware padding:
@override
Widget build(BuildContext context) {
  final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;

  return SingleChildScrollView(
    child: Padding(
      padding: EdgeInsets.fromLTRB(16, 16, 16, keyboardSpace + 16),
      child: Column(
        children: [
          // form fields...
        ],
      ),
    ),
  );
}
```

## Notes
Without `isScrollControlled: true`, the sheet is limited to half the screen height. `MediaQuery.viewInsets.bottom` gives the height of the on-screen keyboard, allowing you to add enough bottom padding to keep form fields visible. `useSafeArea` is available from Flutter 3.7 and replaces manual safe area calculations.

## Summary
Setting `isScrollControlled: true` and handling `MediaQuery.viewInsets` creates a fullscreen, keyboard-aware modal form that provides a much better user experience on all device sizes.
