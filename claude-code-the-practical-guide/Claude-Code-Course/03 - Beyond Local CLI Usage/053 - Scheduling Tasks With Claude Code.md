# 053 - Scheduling Tasks With Claude Code

## Section

Beyond Local CLI Usage

## Main Idea

This lecture explains how to schedule Claude Code tasks to run automatically at defined times. Scheduled tasks allow Claude to perform regular work such as daily summaries, weekly code reviews, and recurring report generation without manual triggering.

## Learning Objectives

By the end of this lecture, students should understand:

* What scheduled Claude Code tasks are.
* How to set up scheduled task execution.
* What types of tasks are good candidates for scheduling.
* How to handle outputs from scheduled tasks.
* What safety considerations apply to scheduled tasks.

## Key Concepts

### What Are Scheduled Tasks

Scheduled tasks are Claude Code sessions that run automatically at pre-defined times or intervals, without any manual trigger.

**Examples:**

* Every morning at 8:00 AM: Summarize what changed in the codebase since the last workday.
* Every Friday at 5:00 PM: Generate a weekly report of open PRs and blockers.
* Every night: Run a security scan on the latest code.
* Every Monday: Check open issues and categorize them by priority.

### How to Schedule Claude Code Tasks

**Method 1: Cron jobs (Linux/macOS)**

```bash
# Run Claude every day at 8 AM to generate a daily summary
0 8 * * 1-5 /usr/local/bin/claude --no-interactive \
  -p "Summarize what changed in the git log since yesterday. Format as bullet points." \
  >> ~/logs/claude-daily-summary.log 2>&1
```

**Method 2: Windows Task Scheduler**
Use Windows Task Scheduler to run a script at a defined time that calls `claude --no-interactive`.

**Method 3: GitHub Actions scheduled workflow**

```yaml
name: Weekly Code Review
on:
  schedule:
    - cron: '0 17 * * 5'  # Every Friday at 5 PM UTC

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Claude Code Review
        run: |
          claude --no-interactive -p "/code-review" > review.md
      - name: Post to Slack
        run: |
          curl -X POST $SLACK_WEBHOOK -d "{\"text\": \"$(cat review.md)\"}"
```

**Method 4: Claude Code built-in scheduling**
Claude Code may provide a built-in `/schedule` or `ScheduleWakeup` command for simpler scheduling without external tools.

### Good Candidates for Scheduled Tasks

**Daily tasks:**

* Git log summary of the last day's changes.
* Check for new failing tests in CI.
* Summarize new comments or reviews on open PRs.

**Weekly tasks:**

* Code quality trend report.
* Security dependency scan.
* Documentation freshness check.
* PR backlog review.

**Monthly tasks:**

* Dependency update review.
* Architecture review of significant changes.
* Onboarding documentation update.

### Handling Scheduled Task Output

Scheduled tasks should produce their output in a useful place:

* **Saved to file:** Write output to a log or report file.
* **Posted to Slack/Teams:** Use webhooks to share results with the team.
* **Committed to the repository:** For reports or documentation updates.
* **Sent by email:** For regular stakeholder reports.

### Safety for Scheduled Tasks

Scheduled tasks that run unattended need strict guardrails:

* **Read-only by default:** Scheduled tasks should only read and report, not make changes.
* **Change review required:** If changes are needed, output a patch or PR for human review.
* **Error notifications:** Alert when a scheduled task fails or produces unexpected output.
* **Iteration limits:** Do not allow unbounded agentic loops in scheduled tasks.
* **Sandboxing:** Run scheduled tasks in limited permission environments.

## Important Notes

* Always test a scheduled task manually before automating it.
* Monitor scheduled tasks periodically to ensure they are producing useful output.
* Scheduled tasks use API credits even when you are not watching. Track costs.
* Be mindful of sensitive data in scheduled task outputs — reports may contain code snippets or sensitive project information.

## Why This Lecture Matters

Scheduled tasks transform Claude Code from a tool you use to a background service that works for you. Daily summaries, weekly reviews, and automated reporting reduce the burden of routine tasks and ensure important information reaches the team consistently. This is the final step in building Claude into the development workflow infrastructure.

## Summary

Scheduled Claude Code tasks run automatically using cron, Windows Task Scheduler, GitHub Actions, or Claude Code's built-in scheduling features. They are best suited for read-only analysis, summary generation, and reporting tasks. Outputs should be sent to useful destinations (Slack, email, reports, log files). Safety requires strict permissions, review processes for any changes, error notifications, and usage cost monitoring.
