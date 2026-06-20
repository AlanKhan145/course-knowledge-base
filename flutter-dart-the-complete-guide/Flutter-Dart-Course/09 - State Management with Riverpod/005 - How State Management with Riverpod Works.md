# How State Management with Riverpod Works

## Overview
This lecture explains the core mental model behind Riverpod: providers hold and expose state, widgets watch providers and rebuild automatically when state changes, and the ProviderScope stores all provider instances. Understanding this flow is essential before writing any Riverpod code.

## Key Points
- A **Provider** is an object that encapsulates a piece of state or logic and exposes it to the widget tree
- Widgets use `ref.watch(provider)` to subscribe to a provider — they rebuild when the provider's value changes
- Widgets use `ref.read(provider)` to access a provider once without subscribing (useful in callbacks)
- Riverpod providers live outside the widget tree, making them independently testable
- State changes flow automatically: provider updates -> subscribed widgets rebuild

## Code Example
```dart
// Conceptual flow diagram in code form

// 1. Provider holds state
final myProvider = Provider<String>((ref) => 'Hello Riverpod');

// 2. Widget watches the provider
class MyWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Subscribes to myProvider — rebuilds when value changes
    final value = ref.watch(myProvider);
    return Text(value);
  }
}

// 3. For one-time reads (e.g., in a button callback), use ref.read
// ref.read(myProvider) — no rebuild subscription
```

## Notes
Riverpod's key advantage over InheritedWidget-based solutions is that providers are declared as global constants outside the widget tree, enabling compile-time safety — you cannot accidentally reference a non-existent provider. The `ProviderScope` intercepts these global references at runtime and returns the correct scoped instance. This architecture also makes unit testing providers trivial since they do not depend on a widget tree.

## Summary
Riverpod works by having widgets watch providers for state changes, with the ProviderScope managing all provider instances and triggering targeted widget rebuilds automatically.
