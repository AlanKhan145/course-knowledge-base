# Adding Buttons and Modes to the Authentication Screen

## Overview
This lecture extends the authentication screen by adding submit and toggle buttons that switch the form between Login and Signup modes. A boolean state variable controls which mode is active, dynamically changing button labels and form behavior. This single-screen approach avoids the need for separate login and signup screens.

## Key Points
- Use a `bool _isLogin` state variable to toggle between login and signup modes
- The submit button label changes between "Login" and "Signup" based on `_isLogin`
- A `TextButton` below the submit button lets users switch modes with `setState()`
- `ElevatedButton` is used for the primary action, styled with the theme's color scheme
- Conditionally show the username field only in signup mode using an `if (!_isLogin)` check

## Code Example
```dart
class _AuthScreenState extends State<AuthScreen> {
  final _formKey = GlobalKey<FormState>();
  bool _isLogin = true;

  void _submit() {
    final isValid = _formKey.currentState!.validate();
    if (!isValid) return;
    _formKey.currentState!.save();
    // TODO: perform auth
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Card(
                margin: const EdgeInsets.all(20),
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        TextFormField(
                          decoration: const InputDecoration(labelText: 'Email'),
                        ),
                        TextFormField(
                          decoration: const InputDecoration(labelText: 'Password'),
                          obscureText: true,
                        ),
                        const SizedBox(height: 12),
                        ElevatedButton(
                          onPressed: _submit,
                          child: Text(_isLogin ? 'Login' : 'Signup'),
                        ),
                        TextButton(
                          onPressed: () => setState(() => _isLogin = !_isLogin),
                          child: Text(_isLogin
                              ? 'Create an account'
                              : 'I already have an account'),
                        ),
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
Using a single screen with a mode toggle reduces code duplication compared to maintaining two separate screens. The `setState()` call inside the `TextButton`'s `onPressed` triggers a rebuild that swaps the labels and conditionally shows extra fields. The `_submit` method will be connected to Firebase Auth in a later lecture.

## Summary
A single boolean state variable elegantly switches the auth screen between Login and Signup modes, keeping the code DRY and the user experience seamless.
