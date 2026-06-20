# Validating User Input

## Overview
This lecture adds client-side validation to the authentication form fields to ensure users provide valid data before submission. Each `TextFormField` receives a `validator` callback that returns an error string when input is invalid or `null` when valid. The `_formKey.currentState!.validate()` call triggers all validators at once.

## Key Points
- The `validator` property on `TextFormField` accepts a function `(String? value) => String?`
- Return a non-null string to display an error message; return `null` to indicate valid input
- Validate that the email contains `@` and the password is at least 6 characters long
- Use the `onSaved` callback to extract and store form values into local variables
- Call `_formKey.currentState!.save()` after successful validation to trigger all `onSaved` callbacks

## Code Example
```dart
String _enteredEmail = '';
String _enteredPassword = '';

// Inside Form widget:
TextFormField(
  decoration: const InputDecoration(labelText: 'Email Address'),
  keyboardType: TextInputType.emailAddress,
  autocorrect: false,
  textCapitalization: TextCapitalization.none,
  validator: (value) {
    if (value == null || value.trim().isEmpty || !value.contains('@')) {
      return 'Please enter a valid email address.';
    }
    return null;
  },
  onSaved: (value) {
    _enteredEmail = value!;
  },
),
TextFormField(
  decoration: const InputDecoration(labelText: 'Password'),
  obscureText: true,
  validator: (value) {
    if (value == null || value.trim().length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  },
  onSaved: (value) {
    _enteredPassword = value!;
  },
),

// In _submit():
void _submit() {
  final isValid = _formKey.currentState!.validate();
  if (!isValid) return;
  _formKey.currentState!.save();
  // _enteredEmail and _enteredPassword are now ready
}
```

## Notes
Flutter displays the error message returned by `validator` directly below the `TextFormField` in red text. Always call `validate()` before `save()` — `save()` should only run when inputs are confirmed valid. For production apps, consider more robust email validation using a package like `email_validator`.

## Summary
Form validation with `validator` and `onSaved` callbacks ensures user input is correct before any Firebase authentication request is made.
