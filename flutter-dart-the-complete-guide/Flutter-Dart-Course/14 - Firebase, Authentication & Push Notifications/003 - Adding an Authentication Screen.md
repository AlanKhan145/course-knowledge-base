# Adding an Authentication Screen

## Overview
This lecture focuses on building the UI for the authentication screen that handles both login and signup flows. You will create a new Dart file with a `StatefulWidget` that displays a form with email and password fields. The screen acts as the entry point for unauthenticated users.

## Key Points
- Create an `AuthScreen` widget as a `StatefulWidget` to manage form state
- Use a `Scaffold` with a centered `Card` widget to create a clean, elevated form layout
- Add `TextFormField` widgets inside a `Form` widget for email and password inputs
- The `Form` widget requires a `GlobalKey<FormState>` to trigger validation and data retrieval
- Use `SingleChildScrollView` to prevent overflow on smaller screens or when the keyboard appears

## Code Example
```dart
import 'package:flutter/material.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Card(
                margin: const EdgeInsets.all(20),
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        TextFormField(
                          decoration: const InputDecoration(labelText: 'Email Address'),
                          keyboardType: TextInputType.emailAddress,
                          autocorrect: false,
                          textCapitalization: TextCapitalization.none,
                        ),
                        TextFormField(
                          decoration: const InputDecoration(labelText: 'Password'),
                          obscureText: true,
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
Setting `autocorrect: false` and `textCapitalization: TextCapitalization.none` on the email field prevents unwanted auto-corrections. The `Card` widget provides a material design elevated container that visually separates the form from the background. This screen will later be conditionally shown based on the user's authentication state.

## Summary
The authentication screen provides a reusable form UI for both login and signup, built with Flutter's `Form`, `TextFormField`, and `Card` widgets.
