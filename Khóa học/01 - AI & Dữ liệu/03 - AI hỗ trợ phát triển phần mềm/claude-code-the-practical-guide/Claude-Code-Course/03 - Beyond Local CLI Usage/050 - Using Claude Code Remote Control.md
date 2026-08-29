# 050 - Using Claude Code Remote Control

## Section

Beyond Local CLI Usage

## Main Idea

This lecture explains how to control or trigger Claude Code actions from outside the local terminal — remotely. Remote control enables triggering Claude from external systems, automation pipelines, or other interfaces without having the CLI open.

## Learning Objectives

By the end of this lecture, students should understand:

* What Claude Code remote control is.
* How remote triggering works.
* What use cases remote control enables.
* What the setup requirements are.
* What safety considerations apply to remote control.

## Key Concepts

### What Is Remote Control

Claude Code remote control is the ability to trigger Claude Code actions from external systems rather than typing directly into the CLI. This allows:

* CI/CD pipelines to trigger Claude analysis or fixes.
* Scripts to dispatch Claude tasks based on events.
* Team members to trigger Claude from non-developer interfaces.
* Scheduled systems to initiate Claude sessions at set times.

### How Remote Triggering Works

Remote triggering is typically achieved through:

**1. API invocation:**
Using the Anthropic API directly with the `claude-code` capabilities to start a task programmatically.

**2. CLI with non-interactive mode:**
Running Claude Code in non-interactive mode from a script:

```bash
claude --no-interactive -p "Inspect the repository and summarize the latest changes."
```

This can be called from CI/CD, cron jobs, or any automation system.

**3. Event-driven scripts:**
Set up a script that watches for an event (a new PR, a test failure, a tag push) and triggers Claude Code automatically.

### Remote Control Use Cases

**CI/CD integration:**

On every pull request, trigger Claude to review the code and post a comment:

```bash
# In a GitHub Actions workflow
claude --no-interactive -p "/code-review" > review_output.txt
gh pr comment $PR_NUMBER --body "$(cat review_output.txt)"
```

**Automated analysis on push:**
When code is pushed to a branch, trigger Claude to check for security issues or test coverage gaps.

**Triggered documentation updates:**
When a PR is merged, trigger Claude to update relevant documentation.

**Error-triggered debugging:**
When monitoring detects an error pattern, trigger Claude to analyze recent code changes and suggest root causes.

### Safety for Remote Control

Remote control expands the scope of what Claude can do autonomously. Critical safety rules:

* **Always use read-only operations for untriggered inputs.** Do not let external systems automatically trigger code-changing Claude sessions without review.
* **Scope permissions tightly.** Remote invocations should have the minimum permissions needed.
* **Log all remote sessions.** Know what Claude did in every automated session.
* **Review before merging.** Outputs from remote sessions should require human review before any code changes are applied.

### Notifying On Completion

Remote sessions should notify you when done:

```bash
claude --no-interactive -p "Review the code for security issues." \
  && notify-slack "#dev-alerts" "Claude security review completed"
```

Or via email, webhook, or other notification system.

## Important Notes

* Remote control is a powerful but advanced feature. Most developers do not need it for regular work.
* API-based remote control uses API credits, which may have different billing than subscription usage.
* Non-interactive Claude Code sessions have the same permissions as configured in settings. Review these before enabling remote triggering.
* Secure the remote trigger mechanism to prevent unauthorized triggering of Claude sessions.

## Why This Lecture Matters

Remote control unlocks Claude Code as part of an automated engineering workflow, not just an interactive tool. CI/CD integration, event-driven automation, and scheduled analysis are all enabled by understanding remote control. This is where Claude transitions from assistant to infrastructure component.

## Summary

Claude Code remote control allows triggering Claude from external systems using non-interactive mode or API calls. Use cases include CI/CD code review, automated security scanning, triggered documentation updates, and error-driven analysis. Safety requires scoped permissions, read-only defaults for untriggered inputs, comprehensive logging, and human review before any automated changes are merged.
