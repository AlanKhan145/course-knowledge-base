# Adding ChatMessages and Input Widgets

## Overview
This lecture builds the chat screen UI with two main components: a `ChatMessages` widget that displays the list of messages and a `NewMessage` widget that provides the text input and send button. These are created as separate files and composed together in the `ChatScreen` scaffold. The widgets are UI-only at this stage, with Firestore integration added in the next lecture.

## Key Points
- Create `chat_messages.dart` with a `ChatMessages` `StatelessWidget` for displaying messages in a `ListView`
- Create `new_message.dart` with a `NewMessage` `StatefulWidget` containing a `TextField` and send `IconButton`
- Use a `Column` in `ChatScreen` with `ChatMessages` wrapped in `Expanded` and `NewMessage` below it
- The `TextField` in `NewMessage` uses a `TextEditingController` to read and clear the input
- Store the message text in state and enable/disable the send button based on whether input is non-empty

## Code Example
```dart
// new_message.dart
class NewMessage extends StatefulWidget {
  const NewMessage({super.key});
  @override
  State<NewMessage> createState() => _NewMessageState();
}

class _NewMessageState extends State<NewMessage> {
  final _messageController = TextEditingController();

  @override
  void dispose() {
    _messageController.dispose();
    super.dispose();
  }

  void _submitMessage() async {
    final enteredMessage = _messageController.text;
    if (enteredMessage.trim().isEmpty) return;
    _messageController.clear();
    // TODO: send to Firestore
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 15, right: 1, bottom: 14),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: _messageController,
              textCapitalization: TextCapitalization.sentences,
              autocorrect: true,
              enableSuggestions: true,
              decoration: const InputDecoration(labelText: 'Send a message...'),
            ),
          ),
          IconButton(
            color: Theme.of(context).colorScheme.primary,
            icon: const Icon(Icons.send),
            onPressed: _submitMessage,
          ),
        ],
      ),
    );
  }
}
```

## Notes
Always call `_messageController.dispose()` in the `dispose()` method to prevent memory leaks from `TextEditingController`. Using `Expanded` around `ChatMessages` in the `Column` allows it to take all available vertical space while `NewMessage` stays at the bottom. The send button can be made responsive to input by adding a `onChanged` listener on the `TextField` and calling `setState()`.

## Summary
The chat screen is composed of a `ChatMessages` list widget and a `NewMessage` input widget, each in separate files for clean separation of concerns.
