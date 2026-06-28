# 048 - Don't Forget To Configure

## Section

Beyond Local CLI Usage

## Main Idea

This lecture is a reminder that as students expand their Claude Code usage to web, desktop, mobile, and remote contexts, configuration remains important. Each new environment or integration requires appropriate setup to work safely and effectively.

## Learning Objectives

By the end of this lecture, students should understand:

* Which configuration areas need attention when expanding beyond the local CLI.
* How to audit current configuration before adopting new usage modes.
* What the risks of skipping configuration are in new environments.
* What a configuration checklist looks like for expanding Claude Code usage.

## Key Concepts

### Why Configuration Matters More As You Expand

In local CLI usage, mistakes usually affect only your local machine and project. As you expand to:

* **Desktop app:** Connects to external tools via MCP with potentially broader access.
* **Claude Code Web:** May interact with cloud repositories and connected services.
* **Mobile dispatch:** Sends tasks remotely, potentially to long-running autonomous sessions.
* **Remote control:** Allows external triggering of Claude actions.
* **Scheduled tasks:** Claude acts autonomously on a schedule.

The blast radius of misconfiguration increases at each step. Good configuration is more critical, not less.

### Configuration Checklist for Each Environment

**Local CLI (foundation):**
- [ ] Model configured to appropriate choice.
- [ ] Permissions set with principle of least privilege.
- [ ] Deny list includes dangerous commands.
- [ ] Project-level `CLAUDE.md` created and up to date.
- [ ] Git checkpoint habit established.

**Desktop App:**
- [ ] MCP servers configured with minimal required permissions.
- [ ] API keys stored securely (not in the config file directly).
- [ ] Project workspaces set up with appropriate instructions.

**Claude Code Web:**
- [ ] Repository connections reviewed — does Claude need access to all repos?
- [ ] Permissions scoped to needed operations only.
- [ ] Sensitive repositories excluded if not needed.

**Remote and Scheduled Tasks (covered in later lectures):**
- [ ] Stopping conditions defined for all autonomous sessions.
- [ ] Notification mechanisms set up.
- [ ] Review process defined before changes from autonomous sessions are merged.

### Model Selection in New Environments

When using Claude Code in new contexts:

* Reconsider model selection. Automated or unattended workflows may not need the most powerful model.
* Lighter models cost less per request and may be sufficient for simple scheduled tasks.
* Reserved Opus for complex planning; use Sonnet or Haiku for routine autonomous tasks.

### Permission Review Process

Before enabling any new Claude Code integration:

1. List what the integration can access.
2. List what it can do.
3. Ask: Is each permission actually needed?
4. Remove unnecessary permissions.
5. Document what is enabled and why.

## Important Notes

* Configuration done once does not stay correct forever. Projects change, teams change, usage patterns change.
* Review configuration whenever adding a new Claude Code integration.
* When in doubt, use more restrictive permissions and loosen only when needed.
* The Desktop app, Web, and CLI may have separate configuration. Changes in one do not automatically apply to another.

## Why This Lecture Matters

It is tempting to skip configuration when trying out new features. This lecture is a deliberate pause to remind students that the discipline of good configuration is not optional — it prevents accidents and data exposure that are harder to recover from in more automated contexts.

## Summary

As Claude Code usage expands beyond the local CLI, configuration becomes more critical. Each new environment (Desktop, Web, remote, scheduled) increases the potential blast radius of misconfiguration. Use the checklist approach to verify permissions, model selection, and access scope before enabling each new integration. Review configuration regularly — it needs to keep pace with changing usage patterns.
