# 055 - Day 4 - Setting Up GitHub MCP Server & Featured Dev Plugin in Claude Code

## Lesson Information

| Item     | Details                                                                 |
| -------- | ----------------------------------------------------------------------- |
| Lesson   | 055                                                                     |
| Duration | 12 min                                                                  |
| Week     | Week 2 - Claude Code & Vibe Engineering                                 |
| Module   | Week 2 Day 4 - Jira, GitHub, Professional Workflow                      |
| Topic    | Setting up GitHub MCP Server and the Featured Dev Plugin in Claude Code |

---

## Main Focus

This lesson shows how to connect Claude Code to GitHub through the official GitHub MCP Server, verify repository access, create issues, update files, open pull requests, and install the **FeatureDev** plugin for a more disciplined feature development workflow.

By the end of this lesson, learners should understand how Claude Code can interact with GitHub as part of a professional software development workflow.

---

## Learning Objectives

After completing this lesson, learners will be able to:

* Set up the GitHub MCP Server inside Claude Code.
* Connect Claude Code to GitHub using a personal access token.
* Verify that Claude Code has access to GitHub tools.
* Use Claude Code to create GitHub issues.
* Use Claude Code to update repository files and raise pull requests.
* Understand how to install and use the FeatureDev plugin.
* Prepare a repository for a disciplined issue-to-PR workflow.

---

## Why This Lesson Matters

In professional software development, GitHub is usually the central place for code, commits, branches, issues, and pull requests.

Claude Code becomes much more powerful when it can interact directly with GitHub. Instead of only editing local files, Claude can help manage the full development workflow:

```text
Issue → Code Change → Commit → Push → Pull Request → Review → Merge
```

This lesson is important because it connects Claude Code to real team-style development practices.

---

## Big Picture Workflow

```mermaid
flowchart TD
    A[Open Project in VS Code] --> B[Install GitHub MCP Server]
    B --> C[Authenticate with GitHub Token]
    C --> D[Start Claude Code]
    D --> E[Check Available GitHub Tools]
    E --> F[Create GitHub Issue]
    F --> G[Update README Locally]
    G --> H[Commit and Push Changes]
    H --> I[Create Pull Request]
    I --> J[Merge Pull Request]
    J --> K[Return to Main Branch]
    K --> L[Install FeatureDev Plugin]
    L --> M[Create .gitignore]
    M --> N[Commit and Push Setup Files]
```

---

## Key Concepts

### 1. GitHub MCP Server

The GitHub MCP Server allows Claude Code to communicate with GitHub through MCP tools.

With this integration, Claude Code can perform GitHub-related actions such as:

* Reading repository information
* Creating issues
* Creating or updating files
* Creating pull requests
* Working with branches
* Supporting repository workflows

In this lesson, the GitHub MCP Server is added as a remote HTTP MCP server.

---

### 2. GitHub Personal Access Token

Claude Code needs permission to access GitHub.

A GitHub personal access token is used for authentication. The token must be copied carefully and kept secure.

The token is passed as a header when configuring the GitHub MCP Server.

Example structure:

```bash
claude mcp add github \
  --transport http \
  --url https://api.githubcopilot.com/mcp \
  --header "Authorization: Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
```

> Replace `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` with your real GitHub token.

Important security reminders:

* Do not share your token.
* Do not commit your token into GitHub.
* Use fine-grained permissions where possible.
* Only grant the minimum permissions needed.

---

### 3. Verifying GitHub Tools in Claude Code

After installing the MCP Server, Claude Code should be started inside the project directory.

Then the available context and tools can be checked with:

```text
/context
```

If the setup is successful, Claude Code should show GitHub-related tools.

This confirms that Claude can communicate with GitHub through the MCP Server.

---

## Practical Demo Summary

### Step 1: Open the Project

The instructor opens the project in VS Code and confirms that the project is trusted.

```text
File → Open Project → Select Project Folder → Trust Authors
```

The project used in the demo is called:

```text
pre-legal
```

---

### Step 2: Open the Terminal

Inside VS Code, open the terminal.

Common shortcut:

```text
Command + Backtick
```

Then install the GitHub MCP Server using the command from the course resources.

---

### Step 3: Add GitHub MCP Server

Claude Code is configured to connect to GitHub through a remote MCP server.

The server URL used in the lesson is:

```text
https://api.githubcopilot.com/mcp
```

The GitHub personal access token is passed in the request header.

Conceptually:

```text
Claude Code
   ↓
GitHub MCP Server
   ↓
GitHub Repository
```

---

## GitHub MCP Connection Diagram

```mermaid
flowchart LR
    A[Claude Code] --> B[GitHub MCP Server]
    B --> C[GitHub API]
    C --> D[Repository]
    C --> E[Issues]
    C --> F[Pull Requests]
    C --> G[Branches]
```

---

## Step 4: Start Claude Code

After adding the GitHub MCP Server, start Claude Code inside the project.

Claude Code may ask whether you trust the project.

Choose:

```text
Yes
```

Then run:

```text
/context
```

This allows you to confirm that GitHub tools are available.

---

## Step 5: Create a GitHub Issue

The instructor asks Claude Code:

```text
Please write an issue to GitHub that the README needs to be updated.
```

Claude Code uses the GitHub MCP tool to create an issue.

The created issue is:

```text
Update README
```

Issue description:

```text
The README needs to be updated to reflect the current state of the project.
```

This confirms that Claude Code can create GitHub issues directly from the terminal.

---

## Step 6: Update README and Raise a Pull Request

Next, the instructor asks Claude Code:

```text
Please update the README to reflect that the project is in progress and will be completed in one week. Then raise a PR for this to be merged.
```

Claude Code performs several actions:

1. Reads the README file.
2. Updates the README content.
3. Creates a new branch.
4. Commits the change.
5. Pushes the branch to GitHub.
6. Opens a pull request.

The pull request contains a summary such as:

```text
Add status section to README
```

This demonstrates a complete GitHub workflow controlled through Claude Code.

---

## Pull Request Workflow

```mermaid
sequenceDiagram
    participant User
    participant Claude as Claude Code
    participant Local as Local Git Repo
    participant GitHub

    User->>Claude: Update README and raise PR
    Claude->>Local: Edit README
    Claude->>Local: Create branch
    Claude->>Local: Commit changes
    Claude->>GitHub: Push branch
    Claude->>GitHub: Create pull request
    GitHub-->>User: PR ready for review
```

---

## Step 7: Merge the Pull Request

After Claude Code creates the pull request, the instructor opens GitHub in the browser.

The PR is reviewed and merged manually through GitHub.

After merging, the updated README appears on the main branch.

This is an important workflow pattern:

```text
Claude Code can prepare the change.
The human still reviews and merges it.
```

---

## Step 8: Return to the Main Branch

After merging the pull request, the local project may still be on the feature branch.

The instructor runs:

```bash
git checkout main
```

Then checks the status:

```bash
git status
```

This returns the project to the main branch.

---

## Git Branch Workflow

```mermaid
gitGraph
    commit id: "Initial project"
    branch update-readme
    checkout update-readme
    commit id: "Update README"
    checkout main
    merge update-readme
    commit id: "README updated on main"
```

---

## Step 9: Install the FeatureDev Plugin

After setting up Jira and GitHub MCP Servers, the lesson introduces Claude Code plugins.

The instructor opens the plugin menu:

```text
/plugin
```

From the plugin list, the instructor chooses:

```text
FeatureDev
```

FeatureDev is an official Anthropic plugin designed to guide Claude Code through a disciplined feature development process.

---

## What Is FeatureDev?

FeatureDev is a structured development plugin for Claude Code.

It helps guide software development through a more rigorous workflow.

The plugin includes support for:

* Codebase exploration
* Architecture planning
* Implementation guidance
* Quality review
* Specialized development agents
* Structured feature delivery

The instructor describes it as the opposite of a highly autonomous chaotic loop. Instead of letting Claude freely try many things, FeatureDev keeps the process organized and controlled.

---

## FeatureDev Workflow Concept

```mermaid
flowchart TD
    A[Understand Feature Request] --> B[Explore Codebase]
    B --> C[Design Architecture]
    C --> D[Plan Implementation]
    D --> E[Write Code]
    E --> F[Review Quality]
    F --> G[Prepare for Merge]
```

---

## Step 10: Install FeatureDev at Project Scope

The plugin can be installed with different scopes:

| Scope         | Meaning                                           |
| ------------- | ------------------------------------------------- |
| User scope    | Installed only for the current user               |
| Project scope | Installed for all collaborators in the repository |

In the lesson, the instructor chooses:

```text
Project scope
```

This means the plugin configuration is added to the repository so other collaborators can use it too.

Installing the plugin creates a Claude-related configuration folder in the project.

Conceptually:

```text
project/
├── .claude/
│   └── plugin configuration
├── README.md
└── LICENSE
```

---

## Step 11: Create a Boilerplate `.gitignore`

After installing the plugin, the project has new configuration files that should be committed.

The instructor also asks Claude Code to create a standard `.gitignore` file.

Prompt used:

```text
Please create a boilerplate .gitignore for this new project for a typical Python FastAPI Next.js web app development and then commit and push to GitHub.
```

Claude Code then:

1. Creates `.gitignore`.
2. Adds sensible Python ignores.
3. Adds sensible JavaScript / Next.js ignores.
4. Includes `.env`.
5. Commits the new files.
6. Pushes them to GitHub.

---

## Example `.gitignore` Categories

A good `.gitignore` for a Python FastAPI + Next.js app should usually include:

```gitignore
# Environment variables
.env
.env.local

# Python
__pycache__/
*.pyc
.venv/
venv/

# Node / Next.js
node_modules/
.next/
out/

# Logs
*.log

# OS files
.DS_Store

# IDE files
.vscode/
.idea/
```

The key point is that `.env` should be ignored so secrets are not committed to GitHub.

---

## Final Repository State

By the end of the lesson, the repository contains:

```text
pre-legal/
├── .claude/
├── .gitignore
├── LICENSE
└── README.md
```

The repository is now prepared for a more professional development workflow.

Claude Code can work with:

* Jira issues
* GitHub issues
* GitHub branches
* Pull requests
* Repository files
* FeatureDev structured workflows

---

## Professional Workflow After This Setup

```mermaid
flowchart TD
    A[Jira Issue] --> B[Claude Code Reads Task]
    B --> C[FeatureDev Guides Planning]
    C --> D[Claude Edits Code]
    D --> E[Claude Commits Changes]
    E --> F[Claude Pushes Branch]
    F --> G[Claude Creates GitHub PR]
    G --> H[Human Reviews]
    H --> I[Merge to Main]
```

---

## Best Practices

### 1. Keep Tokens Secure

Never paste personal access tokens into files that will be committed.

Use environment variables or secure configuration where possible.

---

### 2. Use Fine-Grained GitHub Permissions

Only grant the permissions Claude Code actually needs.

For example:

* Read repository contents
* Write issues
* Create branches
* Create pull requests

Avoid giving unnecessary admin permissions.

---

### 3. Review Before Approving Tool Use

When Claude Code asks for permission to use a tool, review the action carefully.

For example:

```text
Create issue?
Push branch?
Open pull request?
Modify repository file?
```

Do not approve blindly.

---

### 4. Let Claude Prepare, But Let Humans Review

Claude Code can automate many parts of the development workflow, but humans should still review pull requests before merging.

Recommended pattern:

```text
Claude writes → Human reviews → Human merges
```

---

### 5. Commit Project-Level Plugin Configuration

If a plugin is installed at project scope, its configuration should be committed so the team can share the same workflow.

---

## Common Commands Mentioned

### Open Claude Code Context

```text
/context
```

### Open Plugin Menu

```text
/plugin
```

### Check Git Status

```bash
git status
```

### Return to Main Branch

```bash
git checkout main
```

### Add GitHub MCP Server

```bash
claude mcp add github \
  --transport http \
  --url https://api.githubcopilot.com/mcp \
  --header "Authorization: Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
```

---

## Key Takeaways

* GitHub MCP Server allows Claude Code to interact directly with GitHub.
* Claude Code can create issues, update files, push branches, and open pull requests.
* The GitHub personal access token must be handled securely.
* The `/context` command helps verify available MCP tools.
* FeatureDev is a structured plugin for disciplined feature development.
* Installing FeatureDev at project scope helps standardize workflow across a repository.
* A `.gitignore` file is essential for preventing secrets and unnecessary files from being committed.
* This setup prepares the project for professional Jira-to-GitHub development workflows.

---

## Short Summary

In this lesson, learners set up the GitHub MCP Server in Claude Code using a GitHub personal access token. They verify that Claude Code can access GitHub tools, create a GitHub issue, update the README, create a branch, push changes, and open a pull request. After merging the PR, they install the official FeatureDev plugin at project scope and create a standard `.gitignore` file for a Python FastAPI and Next.js project.

The lesson prepares learners to use Claude Code as part of a professional development workflow involving Jira, GitHub, issues, pull requests, and structured feature delivery.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
