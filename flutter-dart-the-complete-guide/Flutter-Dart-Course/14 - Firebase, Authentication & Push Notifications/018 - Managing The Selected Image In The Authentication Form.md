# Managing The Selected Image In The Authentication Form

## Overview
This lecture integrates the `UserImagePicker` widget into the authentication form and manages the selected image in the parent `AuthScreen` state. A `File? _selectedImage` variable in `_AuthScreenState` stores the image passed up from the picker widget. The form also validates that an image has been selected before allowing signup to proceed.

## Key Points
- Declare `File? _selectedImage` in `_AuthScreenState` to hold the image received from the picker
- Pass a callback to `UserImagePicker` that sets `_selectedImage` via `setState()`
- In `_submit()`, check if `_selectedImage == null` during signup and show a `SnackBar` if not set
- The `UserImagePicker` widget is only shown in signup mode using an `if (!_isLogin)` conditional
- The selected image file will be passed to the Firebase Storage upload logic in a later step

## Code Example
```dart
class _AuthScreenState extends State<AuthScreen> {
  File? _selectedImage;

  // ...other state variables...

  void _submit() async {
    final isValid = _formKey.currentState!.validate();
    if (!isValid) return;

    if (!_isLogin && _selectedImage == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please pick an image.')),
      );
      return;
    }

    _formKey.currentState!.save();
    // proceed with Firebase auth...
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        if (!_isLogin)
                          UserImagePicker(
                            onPickImage: (pickedImage) {
                              setState(() {
                                _selectedImage = pickedImage;
                              });
                            },
                          ),
                        // TextFormFields and buttons...
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

## Notes
The callback pattern (passing `onPickImage` from parent to child) is a standard Flutter approach for child-to-parent communication without a state management library. Using `setState()` in the callback ensures the parent rebuilds if needed (e.g., to show a preview of the selected image). Validating that `_selectedImage` is not null before allowing signup prevents users from creating accounts without a profile picture.

## Summary
Managing the selected image in the parent `AuthScreen` via a callback and a nullable `File?` state variable connects the image picker widget to the form submission logic.
