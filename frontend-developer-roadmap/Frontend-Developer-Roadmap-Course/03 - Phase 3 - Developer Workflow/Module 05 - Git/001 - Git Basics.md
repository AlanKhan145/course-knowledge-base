# 001 - Git Basics

## Section
Phase 5 — Git and Tooling

## Learning Objectives

- Initialize a Git repository and make commits
- Understand staging, the working tree, and the commit history
- Work with branches
- Merge, rebase, and resolve conflicts
- Write good commit messages

---

## 1. What Is Git?

Git is a **distributed version control system** — it tracks every change to your files over time, so you can:
- Revert to any previous state
- Work on features in parallel (branches)
- Collaborate with others without overwriting each other's work

---

## 2. Git Setup

```bash
# Set your identity (required for commits)
git config --global user.name "Nguyen Van A"
git config --global user.email "nguyenvana@example.com"

# Set default branch name to main
git config --global init.defaultBranch main

# Set VS Code as your default editor
git config --global core.editor "code --wait"

# View all config
git config --list
```

---

## 3. Core Workflow

```
Working Directory   →   Staging Area   →   Repository
  (files you edit)      (git add)           (git commit)
```

```bash
# 1. Initialize a new repo
git init

# 2. Check status — shows modified, staged, untracked files
git status

# 3. Stage files
git add index.html            # stage one file
git add src/                  # stage a folder
git add .                     # stage everything (be careful)
git add -p                    # interactively stage chunks

# 4. Commit staged files
git commit -m "Add hero section to homepage"

# 5. View commit history
git log
git log --oneline             # compact view
git log --oneline --graph     # with branch graph
```

---

## 4. The Three States

```
Modified   — file changed but not yet staged
Staged     — file added to staging area, ready to commit
Committed  — file saved in the local repository
```

---

## 5. Branches

```bash
# List branches
git branch
git branch -a    # include remote branches

# Create a new branch
git branch feature/add-dark-mode

# Switch to branch
git checkout feature/add-dark-mode
git switch feature/add-dark-mode     # modern syntax (Git 2.23+)

# Create and switch in one command
git checkout -b feature/add-dark-mode
git switch -c feature/add-dark-mode  # modern syntax

# Rename current branch
git branch -m new-name

# Delete branch (safe — prevents deleting unmerged branches)
git branch -d feature/add-dark-mode

# Force delete
git branch -D feature/add-dark-mode
```

---

## 6. Merging

```bash
# Merge feature branch into main
git checkout main
git merge feature/add-dark-mode

# Fast-forward merge (no merge commit) — happens when main has no new commits
# Three-way merge (creates merge commit) — happens when both branches diverged

# Merge with a commit (no fast-forward)
git merge --no-ff feature/add-dark-mode
```

### Resolving Merge Conflicts

When two branches modify the same lines, Git marks the conflict:

```
<<<<<<< HEAD
  background: white;    ← your branch
=======
  background: #0f172a;  ← incoming branch
>>>>>>> feature/dark-mode
```

1. Edit the file to keep what you want
2. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. `git add` the resolved file
4. `git commit`

---

## 7. Undoing Changes

```bash
# Discard uncommitted changes in working directory
git restore index.html       # single file
git restore .                # all files

# Unstage a file (keep changes in working directory)
git restore --staged index.html

# Amend the last commit message (before pushing)
git commit --amend -m "Fix: correct hero section layout"

# Undo a commit but keep changes staged
git reset --soft HEAD~1

# Undo a commit and unstage changes (keep files modified)
git reset HEAD~1

# Revert a commit (creates a new undo commit — safe for shared branches)
git revert abc1234
```

---

## 8. Viewing Changes

```bash
# Diff of unstaged changes
git diff

# Diff of staged changes
git diff --staged

# Diff between branches
git diff main feature/dark-mode

# Show what a specific commit changed
git show abc1234

# Blame — who last modified each line
git blame index.html
```

---

## 9. Stashing

Save work in progress without committing:

```bash
# Stash current changes
git stash

# Stash with a description
git stash push -m "WIP: dark mode toggle"

# List stashes
git stash list

# Apply most recent stash (keeps stash)
git stash apply

# Apply and remove from stash
git stash pop

# Drop a stash
git stash drop stash@{0}
```

---

## 10. Writing Good Commit Messages

### Format

```
<type>: <short summary in present tense>

<optional body — explains WHY, not WHAT>
```

### Types

| Type | When |
|------|------|
| `feat` | New feature |
| `fix` | Bug fix |
| `style` | CSS/formatting, no logic change |
| `refactor` | Restructure without changing behavior |
| `test` | Adding or fixing tests |
| `docs` | Documentation only |
| `chore` | Build tools, dependencies |

### Good vs Bad

```bash
# Bad — too vague
git commit -m "fix"
git commit -m "update stuff"
git commit -m "changes"

# Good — specific and imperative
git commit -m "feat: add dark mode toggle to header"
git commit -m "fix: prevent form submission with empty description"
git commit -m "style: increase contrast on disabled button states"
git commit -m "refactor: extract transaction calculations to utils.js"
```

---

## Practice Exercises

### Exercise 1: Init and Commit

```bash
mkdir my-project && cd my-project
git init
# Create index.html with basic structure
git add index.html
git commit -m "feat: initial HTML structure"

# Add styles.css
git add styles.css
git commit -m "style: add base CSS reset and typography"

# View the history
git log --oneline
```

### Exercise 2: Branch Workflow

```bash
# Start a feature branch
git switch -c feature/navbar

# Make some changes and commit
git add .
git commit -m "feat: add responsive navbar"

# Merge back to main
git switch main
git merge feature/navbar

# Delete the feature branch
git branch -d feature/navbar
```

---

## Summary

| Command | Action |
|---------|--------|
| `git init` | Initialize a repository |
| `git add <file>` | Stage a file |
| `git commit -m` | Commit staged changes |
| `git status` | Show current state |
| `git log --oneline` | Compact history |
| `git branch -c name` | Create branch |
| `git switch name` | Switch branch |
| `git merge name` | Merge branch into current |
| `git restore <file>` | Discard working tree changes |
| `git stash` | Save uncommitted work temporarily |

---

## Next Lesson

`002 - GitHub and Pull Request Workflow.md` — remote repos, push/pull, pull requests, code review
