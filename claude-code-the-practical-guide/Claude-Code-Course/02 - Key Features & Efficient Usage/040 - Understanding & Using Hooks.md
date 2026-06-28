# 040 - Understanding & Using Hooks

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains hooks — automated actions that run at specific points in the Claude Code workflow. Hooks allow developers to automate quality checks, enforce rules, run tools, and create consistent behavior without having to remember to do it manually every session.

## Learning Objectives

By the end of this lecture, students should understand:

* What hooks are in Claude Code.
* When hooks run.
* What types of actions hooks can trigger.
* How to configure hooks.
* Practical examples of useful hooks.

## Key Concepts

### What Are Hooks

Hooks are shell commands or scripts configured to run automatically at specific events in the Claude Code workflow. They are triggered by what Claude does, not by what you type.

Think of hooks as automated rules: "Every time Claude finishes editing a file, run the formatter."

### When Hooks Run

Claude Code supports several hook events:

| Hook Event | When It Triggers |
|---|---|
| `PreToolUse` | Before Claude uses a tool |
| `PostToolUse` | After Claude uses a tool |
| `Stop` | When Claude finishes a response |
| `Notification` | When Claude has a notification to show |

### Practical Hook Examples

**1. Auto-format after every file edit:**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run format -- $CLAUDE_TOOL_RESULT_FILE"
          }
        ]
      }
    ]
  }
}
```

**2. Run tests after implementation:**

```json
{
  "hooks": {
    "Stop": [
      {
        "type": "command",
        "command": "npm test -- --silent"
      }
    ]
  }
}
```

**3. Block dangerous commands:**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo $CLAUDE_TOOL_INPUT | grep -q 'rm -rf' && exit 1 || exit 0"
          }
        ]
      }
    ]
  }
}
```

If the hook exits with a non-zero code, Claude Code cancels the action.

**4. Log all Claude actions:**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "type": "command",
        "command": "echo \"$(date): $CLAUDE_TOOL_NAME\" >> ~/.claude/claude-action-log.txt"
      }
    ]
  }
}
```

### Hook Configuration Location

Hooks are configured in Claude Code settings files:

* Global hooks: `~/.claude/settings.json`
* Project hooks: `.claude/settings.json`

### Hook Environment Variables

Hooks have access to context about what Claude was doing:

| Variable | Content |
|---|---|
| `$CLAUDE_TOOL_NAME` | Name of the tool Claude used |
| `$CLAUDE_TOOL_INPUT` | Input Claude sent to the tool |
| `$CLAUDE_TOOL_RESULT_FILE` | File path if the tool was a file edit |

## Important Notes

* Hooks that run on every action can slow down Claude Code. Keep hook commands fast.
* Test hooks carefully before adding them to production settings. A badly written hook can block all Claude actions.
* PreToolUse hooks that exit non-zero block the action. Use this for safety enforcement only.
* Hooks are executed in the user's shell environment. Make sure the commands in hooks are available.
* Hooks run synchronously. Long-running hooks will delay Claude Code responses.

## Use Cases Summary

* **Code quality:** Auto-format after edits.
* **Safety:** Block dangerous commands before execution.
* **Automation:** Run tests after Claude finishes a task.
* **Observability:** Log Claude's actions for audit trails.
* **Project rules:** Enforce naming conventions or file structure rules after edits.

## Why This Lecture Matters

Hooks are where Claude Code starts to feel truly integrated into a development workflow. With the right hooks, the project stays formatted, tests always run after changes, and dangerous operations are blocked automatically — without any manual effort or reminders.

## Summary

Hooks are automated shell commands triggered by Claude Code events such as before/after tool use or when Claude stops. They enable auto-formatting, automatic test runs, safety blocks, and action logging. Hooks are configured in settings files and run in the user's shell environment. Use PreToolUse hooks for blocking actions and PostToolUse hooks for cleanup and automation.
