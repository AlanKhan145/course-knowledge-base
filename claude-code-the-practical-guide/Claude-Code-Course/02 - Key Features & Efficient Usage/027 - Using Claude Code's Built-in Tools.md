# 027 - Using Claude Code's Built-in Tools

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains the built-in tools that Claude Code uses internally to interact with your project. Understanding these tools helps students know what Claude can do without any additional setup and how to use them effectively.

## Learning Objectives

By the end of this lecture, students should understand:

* What built-in tools Claude Code has access to.
* How to ask Claude to use specific tools.
* What each tool is good for.
* How tools interact with the project.

## Key Concepts

### What Are Built-in Tools

Claude Code comes with a set of built-in tools that allow it to interact with your development environment. These are the primary mechanisms through which Claude reads files, searches code, makes edits, and runs commands.

### Core Built-in Tools

**Read (file reading)**

Claude can read individual files or ranges of lines within files:

```text
Read the file src/services/orderService.ts and explain the checkout flow.
Read lines 100 to 150 of src/routes/user.ts.
```

**Glob (file search by pattern)**

Claude can find files matching patterns:

```text
Find all TypeScript files in the src/components directory.
List all files matching *.test.ts in the project.
```

**Grep (content search)**

Claude can search for patterns or strings across files:

```text
Find all files that import from @/lib/db.
Search for all uses of the deprecated getUserById function.
```

**Edit (file editing)**

Claude makes targeted edits to files:

```text
In src/utils/format.ts, update the formatCurrency function to use locale formatting.
```

**Write (file creation)**

Claude creates new files:

```text
Create a new file src/services/emailService.ts with the email sending logic.
```

**Bash (command execution)**

Claude runs shell commands:

```text
Run npm test and show me the output.
Run git status to see what changed.
```

### Directing Tool Use

You can ask Claude to use specific tools by describing what you need:

```text
Search the codebase for all occurrences of the string "deprecated".
Then read each file that contains it and tell me which ones need updating.
```

You do not need to know the internal tool names. Describing what you want Claude to do is enough.

### Tool Output in the Session

When Claude uses a tool, the result appears in the session:

* File contents are shown when reading.
* Search results list matching files and lines.
* Command output is shown after execution.
* Edit diffs show what changed.

### Combining Tools

Claude often uses multiple tools in sequence:

1. Glob to find relevant files.
2. Read to understand their contents.
3. Grep to find specific patterns.
4. Edit to make changes.
5. Bash to run tests and verify.

## Important Notes

* Claude decides which tools to use based on your request. You rarely need to specify tools by name.
* Be aware that command execution via Bash requires appropriate permissions.
* Reading many files in one session can fill up the context window quickly.
* Some tool outputs (especially long files or command output) are summarized to save context.

## Why This Lecture Matters

Understanding the built-in tools helps students frame requests more effectively. Knowing that Claude can search files, grep for patterns, and run commands means students can ask for more complex, multi-step workflows and trust that Claude can execute them.

## Summary

Claude Code's built-in tools include file reading (Read), file pattern search (Glob), content search (Grep), file editing (Edit), file creation (Write), and command execution (Bash). These tools are used internally by Claude when you make requests. You direct them by describing what you need — Claude selects and sequences the appropriate tools automatically.
