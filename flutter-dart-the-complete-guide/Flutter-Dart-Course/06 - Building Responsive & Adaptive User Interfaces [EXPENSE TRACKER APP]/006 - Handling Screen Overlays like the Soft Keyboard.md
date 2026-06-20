# Handling Screen Overlays like the Soft Keyboard

## Overview
This lecture explains how to handle screen overlays, particularly the soft (on-screen) keyboard, which reduces the available screen space when it appears. Flutter provides tools via `MediaQuery` to detect the keyboard inset and adjust your layout accordingly so content is not obscured. Proper keyboard handling is crucial for forms and text-input-heavy screens.

## Key Points
- `MediaQuery.of(context).viewInsets.bottom` gives the height of the keyboard overlay
- Using `Padding` with `viewInsets` prevents the keyboard from covering input fields
- `SingleChildScrollView` allows content to scroll when the keyboard is shown
- The `resizeToAvoidBottomInset` property on `Scaffold` (defaults to `true`) automatically resizes the body
- Setting `resizeToAvoidBottomInset: false` gives you manual control over keyboard handling

## Code Example
```dart
class AddExpenseModal extends StatelessWidget {
  const AddExpenseModal({super.key});

  @override
  Widget build(BuildContext context) {
    // Get the keyboard height via viewInsets
    final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;

    return Padding(
      // Add bottom padding equal to keyboard height so content shifts up
      padding: EdgeInsets.fromLTRB(16, 16, 16, keyboardSpace + 16),
      child: SingleChildScrollView(
        child: Column(
          children: [
            const TextField(
              decoration: InputDecoration(label: Text('Title')),
            ),
            const TextField(
              decoration: InputDecoration(label: Text('Amount')),
              keyboardType: TextInputType.number,
            ),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Save Expense'),
            ),
          ],
        ),
      ),
    );
  }
}
```

## Notes
When displaying a bottom sheet (e.g., `showModalBottomSheet`), the keyboard can overlap input fields if not handled properly. Wrapping content in a `SingleChildScrollView` and adding `viewInsets.bottom` as padding is the standard pattern. Remember that `viewInsets` reports the portion of the screen obscured by system UI elements, so it updates dynamically as the keyboard appears and disappears.

## Summary
Use `MediaQuery.of(context).viewInsets.bottom` to detect the soft keyboard height and add dynamic padding so your form content is never hidden behind the keyboard.
