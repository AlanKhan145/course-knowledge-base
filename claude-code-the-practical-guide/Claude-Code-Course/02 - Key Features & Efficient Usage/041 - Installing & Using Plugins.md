# 041 - Installing & Using Plugins

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains plugins in Claude Code — extensions that add new capabilities, workflows, or integrations beyond what is available by default. Students learn what plugins are, how to install them, and how to evaluate whether a plugin is useful or safe.

## Learning Objectives

By the end of this lecture, students should understand:

* What plugins are in the context of Claude Code.
* How plugins differ from MCP servers.
* How to install and manage plugins.
* What types of plugins exist.
* How to evaluate a plugin before using it.

## Key Concepts

### What Are Plugins

Plugins extend Claude Code's functionality by adding new commands, integrations, behaviors, or workflows. They can be thought of as packages for Claude Code itself.

Plugins may provide:

* New slash commands.
* Pre-built skills or subagents.
* Integration with external tools.
* Custom UI features.
* Workflow automations.

### Plugins vs MCP Servers

| Feature | Plugin | MCP Server |
|---|---|---|
| Purpose | Extends Claude Code features | Connects Claude to external tools |
| Provides | Commands, skills, automations | Tool functions (search, database, browser) |
| Integration | Inside Claude Code | External service Claude calls |
| Example | A PR review plugin | A GitHub MCP server |

They complement each other. A plugin might provide commands that use an MCP server internally.

### Types of Plugins

**Productivity plugins:**
Add useful commands and skills that improve daily development workflows.

**Integration plugins:**
Connect Claude Code to specific platforms like Linear, Jira, Notion, or Slack.

**Framework-specific plugins:**
Add awareness of specific frameworks (React, Next.js, Django) and provide framework-appropriate commands.

**Team plugins:**
Shared plugins a team builds to standardize their Claude Code workflows.

### Installing a Plugin

Plugin installation typically involves:

1. Adding the plugin package or configuration to Claude Code settings.
2. The plugin registers its commands and configurations.
3. New commands become available immediately.

The exact installation process depends on the plugin. Check the plugin's documentation.

### Evaluating a Plugin Before Use

Before installing a plugin:

* **Read what it does.** Understand all commands and behaviors it adds.
* **Check permissions.** Does it require unusual permissions or network access?
* **Check the source.** Is it from a trusted developer or organization?
* **Review the code if possible.** Open-source plugins can be inspected directly.
* **Test in a safe environment.** Install in a test project before using in production.

### Building Your Own Plugin

If existing plugins do not meet your needs:

* Combine skills, subagents, commands, hooks, and MCP servers into a shareable package.
* Document clearly what the plugin does.
* Share with your team or the community.

## Important Notes

* The plugin ecosystem for Claude Code is actively evolving. Check official documentation for the current plugin API and available plugins.
* Be cautious with third-party plugins that request broad permissions.
* Plugins are distinct from MCP servers — do not confuse the two.
* Team plugins should be version-controlled alongside the project configuration.

## Why This Lecture Matters

Plugins represent the higher-level extension mechanism that allows teams and communities to package and share complete Claude Code workflows. Students who understand plugins can take advantage of existing work from the community and eventually build their own contributions.

## Summary

Plugins extend Claude Code by adding new commands, integrations, and workflows. They differ from MCP servers in that they extend Claude Code itself rather than connecting it to external tools. Evaluate plugins carefully for safety and relevance before installing. The plugin ecosystem is evolving — check official Claude Code documentation for current options and installation methods.
