# Styling Chat Message Bubbles

## Overview
This lecture creates a `MessageBubble` widget that displays individual chat messages in a WhatsApp-style bubble layout. Messages sent by the current user appear on the right side in a primary color bubble, while messages from others appear on the left in a lighter color. The widget also shows the sender's username and profile image for the first message in a group from the same user.

## Key Points
- Create a `MessageBubble` widget accepting `message`, `isMe`, `userName`, `userImage`, and `nextUserIsSame` parameters
- Use `Align` widget with `alignment: isMe ? Alignment.centerRight : Alignment.centerLeft` to position bubbles
- Apply different `BoxDecoration` colors for own messages vs others' messages using `isMe`
- Show the sender's `CircleAvatar` only when `!nextUserIsSame` to avoid repeating avatars in a message group
- Use `BorderRadius.only(...)` to create the characteristic chat bubble shape (no corner on the sender's side)

## Code Example
```dart
class MessageBubble extends StatelessWidget {
  const MessageBubble({
    super.key,
    required this.message,
    required this.isMe,
    required this.userName,
    required this.userImage,
    required this.nextUserIsSame,
  });

  final String message;
  final bool isMe;
  final String userName;
  final String userImage;
  final bool nextUserIsSame;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Stack(
      children: [
        Row(
          mainAxisAlignment: isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
          children: [
            Container(
              decoration: BoxDecoration(
                color: isMe
                    ? theme.colorScheme.primaryContainer
                    : theme.colorScheme.secondaryContainer,
                borderRadius: BorderRadius.only(
                  topLeft: const Radius.circular(12),
                  topRight: const Radius.circular(12),
                  bottomLeft: isMe ? const Radius.circular(12) : Radius.zero,
                  bottomRight: isMe ? Radius.zero : const Radius.circular(12),
                ),
              ),
              constraints: const BoxConstraints(maxWidth: 200),
              padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 14),
              margin: const EdgeInsets.symmetric(vertical: 4, horizontal: 12),
              child: Column(
                crossAxisAlignment:
                    isMe ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                children: [
                  if (!nextUserIsSame)
                    Text(
                      userName,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: isMe
                            ? theme.colorScheme.onPrimaryContainer
                            : theme.colorScheme.onSecondaryContainer,
                      ),
                    ),
                  Text(
                    message,
                    style: TextStyle(
                      color: isMe
                          ? theme.colorScheme.onPrimaryContainer
                          : theme.colorScheme.onSecondaryContainer,
                    ),
                    softWrap: true,
                  ),
                ],
              ),
            ),
          ],
        ),
        if (!nextUserIsSame)
          Positioned(
            top: 0,
            left: isMe ? null : 8,
            right: isMe ? 8 : null,
            child: CircleAvatar(
              backgroundImage: NetworkImage(userImage),
              radius: 23,
            ),
          ),
      ],
    );
  }
}
```

## Notes
The `Stack` and `Positioned` widgets allow the avatar to overlap the bubble, creating the modern chat UI look. Using `theme.colorScheme.primaryContainer` instead of hardcoded colors ensures the chat bubbles respect the app's theme and support dark mode. The `maxWidth: 200` constraint on the bubble `Container` prevents very long messages from stretching across the entire screen.

## Summary
The `MessageBubble` widget creates styled chat bubbles with directional alignment, sender info, and profile avatars using `Stack`, `Container` decoration, and `BorderRadius`.
