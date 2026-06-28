# 051 - Using Claude Code Channels - Telegram

## Section

Beyond Local CLI Usage

## Main Idea

This lecture explains how to use Telegram as an interface for Claude Code tasks. With a Telegram integration, you can send tasks to Claude and receive results through a Telegram channel or bot, making Claude accessible from anywhere you can use Telegram.

## Learning Objectives

By the end of this lecture, students should understand:

* What the Claude Code Telegram channel integration is.
* How to set it up.
* What kinds of tasks work well through Telegram.
* How to receive results and notifications through Telegram.
* What the limitations and safety considerations are.

## Key Concepts

### Why Telegram as an Interface

Telegram is a widely used messaging platform with:

* Fast mobile and desktop apps.
* Bot API for automation.
* Group channels for team collaboration.
* Excellent notification support.
* Available on all platforms.

Using Telegram as a Claude Code interface means:

* You can send tasks from your phone via Telegram.
* Results arrive as Telegram messages.
* Team channels can receive Claude notifications.
* No need to open a browser or specific Claude app — just Telegram.

### How Claude Code Telegram Integration Works

The integration is built using:

1. A Telegram bot connected to the Claude API.
2. The bot listens to messages in configured channels or chats.
3. Messages are forwarded as prompts to Claude.
4. Claude's response is sent back as a Telegram message.

**Architecture:**

```
You (Telegram) → Telegram Bot → Claude API → Response → You (Telegram)
```

### Setting Up a Telegram Claude Bot

High-level setup:

1. Create a Telegram bot via BotFather.
2. Get the bot token.
3. Set up a server or Lambda function that bridges Telegram messages to Claude API calls.
4. Configure the bot to trigger Claude Code with the appropriate settings.

**Example bot handler (simplified):**

```javascript
bot.on('message', async (msg) => {
  const userMessage = msg.text;
  const claudeResponse = await claude.messages.create({
    model: 'claude-sonnet-4-6',
    messages: [{ role: 'user', content: userMessage }]
  });
  bot.sendMessage(msg.chat.id, claudeResponse.content[0].text);
});
```

### Using a Team Channel

A team Telegram channel can serve as a shared Claude interface:

* Team members send questions or tasks to the channel.
* The bot processes them and posts responses.
* Everyone sees the question and the response.
* Claude's analysis becomes a shared team resource.

**Example team channel uses:**

* "Summarize what changed in the repo today."
* "Is there a security issue in this code snippet? [paste code]"
* "What is the status of open PRs?"

### Safety Considerations for Telegram Integration

* Restrict which Telegram users can send commands to the bot.
* For code-changing tasks, require explicit confirmation before applying changes.
* Do not expose API keys or sensitive project data through Telegram.
* Log all bot interactions for audit purposes.

## Important Notes

* This integration requires some setup and server infrastructure (or serverless functions).
* The Telegram bot API is free to use. Claude API calls use normal API credits.
* For team usage, clearly communicate what the bot can and cannot do.
* Claude Code through Telegram has the same model capabilities as any other interface.

## Why This Lecture Matters

Telegram integration demonstrates that Claude Code's interface is not fixed to a CLI. Any system that can call an API can become an interface for Claude. This lecture opens students' minds to building their own custom Claude Code integrations beyond the built-in tools.

## Summary

Claude Code can be used through Telegram by building a bot that bridges Telegram messages to the Claude API. This enables task dispatch and result delivery from anywhere Telegram is available. Team channels make Claude's responses a shared resource. Setting up the integration requires basic server or serverless infrastructure and Telegram bot configuration. Always restrict bot access and require confirmation for code-changing actions.
