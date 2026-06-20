# Showing a Loading Spinner Whilst Uploading

## Overview
This lecture adds a loading spinner to the authentication screen that displays while Firebase authentication and image upload are in progress. A boolean `_isAuthenticating` state variable controls the spinner visibility, replacing the form buttons with a `CircularProgressIndicator` during async operations. This prevents duplicate submissions and improves perceived performance.

## Key Points
- Use a `bool _isAuthenticating = false` state variable to track loading status
- Set `_isAuthenticating = true` at the start of `_submit()` and `false` in the `finally` block
- Replace the action buttons with a `CircularProgressIndicator` when `_isAuthenticating` is `true`
- Using a `finally` block ensures the spinner is always hidden even if an error occurs
- The `if (_isAuthenticating) ... else ...` pattern in the widget tree swaps the UI reactively

## Code Example
```dart
class _AuthScreenState extends State<AuthScreen> {
  bool _isAuthenticating = false;

  void _submit() async {
    // ... validation ...

    setState(() => _isAuthenticating = true);

    try {
      // Firebase auth + storage upload...
    } on FirebaseAuthException catch (error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(error.message ?? 'Authentication failed.')),
      );
    } finally {
      setState(() => _isAuthenticating = false);
    }
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
                        // ... form fields ...
                        const SizedBox(height: 12),
                        if (_isAuthenticating)
                          const CircularProgressIndicator()
                        else ...[
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
The `finally` block in the try-catch-finally pattern runs regardless of whether the async operation succeeded or failed, making it the correct place to reset the loading state. Disabling buttons during loading (or hiding them as done here) prevents users from accidentally submitting the form multiple times. For a more polished UX, consider overlaying the spinner on top of the form using a `Stack` widget.

## Summary
A `bool _isAuthenticating` state variable with `setState()` calls at the start and in `finally` provides clean loading state management during async Firebase operations.
