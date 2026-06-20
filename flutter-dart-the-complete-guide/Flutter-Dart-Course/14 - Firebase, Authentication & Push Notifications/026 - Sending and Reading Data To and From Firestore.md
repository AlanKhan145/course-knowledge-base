# Sending and Reading Data To and From Firestore

## Overview
This lecture implements the actual sending of chat messages to Firestore when the user taps the send button in `NewMessage`. The message document includes the text content, a server timestamp, the sender's user ID, and username. It also begins wiring up reading of messages from Firestore for display in the chat list.

## Key Points
- Use `FirebaseFirestore.instance.collection('chat').add({...})` to send a new message document
- Include `'createdAt': Timestamp.now()` so messages can be sorted chronologically
- Include the sender's `uid` from `FirebaseAuth.instance.currentUser!` to identify who sent each message
- Fetch the sender's username from the `users` Firestore collection using their UID before sending
- Clear the `TextEditingController` after sending to reset the input field

## Code Example
```dart
// In NewMessage._submitMessage():
void _submitMessage() async {
  final enteredMessage = _messageController.text;
  if (enteredMessage.trim().isEmpty) return;

  FocusScope.of(context).unfocus(); // dismiss keyboard
  _messageController.clear();

  final user = FirebaseAuth.instance.currentUser!;

  // Fetch current user's username from Firestore
  final userData = await FirebaseFirestore.instance
      .collection('users')
      .doc(user.uid)
      .get();

  // Add message to Firestore
  await FirebaseFirestore.instance.collection('chat').add({
    'text': enteredMessage,
    'createdAt': Timestamp.now(),
    'userId': user.uid,
    'username': userData.data()!['username'],
    'userImage': userData.data()!['image_url'],
  });
}
```

## Notes
Fetching the username from Firestore on every message send is simple but not the most efficient approach — an alternative is caching user data locally after login. `FocusScope.of(context).unfocus()` dismisses the keyboard after sending, which improves UX on mobile. The `chat` collection will be queried with `orderBy('createdAt')` when displaying messages to show them in chronological order.

## Summary
Chat messages are sent to Firestore's `chat` collection with text, timestamp, user ID, username, and profile image URL, enabling rich message display.
