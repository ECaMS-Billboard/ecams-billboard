# Git Workflow Guide

This document explains the Git workflow used for this project, including how to create branches, push code, pull updates, and merge changes properly.

---

# Branch Structure

We use three levels of branches in this repository:

## `main`
- Stable production branch
- Only updated once or twice per week
- Should always contain tested and working code

---

## `test`
- Shared testing/integration branch
- Developers merge completed work here first
- Used to test all combined features before moving to `main`

---

## Personal Feature Branches
Each developer creates their own branch from `test`.

### Examples
```bash
john-login-page
sarah-navbar-update
tony-campus-map
```

These branches are used for:
- Developing features
- Testing code safely
- Avoiding conflicts with other developers

---

# Overall Workflow

```text
main
  ↓
test
  ↓
your-feature-branch
```

Typical workflow:

```text
1. Pull latest test branch
2. Create/update your feature branch
3. Make changes
4. Commit and push your branch
5. Merge your branch into test
6. Test everything in test
7. test gets merged into main weekly
```

---

# 1. Clone the Repository

Only needed the first time.

```bash
git clone <repo-url>
cd <repo-name>
```

---

# 2. Pull the Latest `test` Branch

Before starting work, always update your local `test` branch.

```bash
git switch test
git pull origin test
```

This ensures you are working from the newest version of the shared codebase.

---

# 3. Create Your Personal Branch

Create a branch from the updated `test` branch.

```bash
git switch -b your-branch-name
```

### Example

```bash
git switch -b tony-campus-map
```

---

# 4. Make Changes

Edit files and build your feature normally.

---

# 5. Check Changed Files

```bash
git status
```

---

# 6. Add Files

Add all changed files:

```bash
git add .
```

---

# 7. Commit Your Changes

Create a commit with a clear message.

```bash
git commit -m "Added campus map hotspots"
```

### Good Commit Messages
- `"Fixed navbar spacing"`
- `"Added login validation"`
- `"Updated mobile styling"`

### Avoid
- `"stuff"`
- `"changes"`
- `"update"`

---

# 8. Push Your Branch to GitHub

```bash
git push origin your-branch-name
```

### Example

```bash
git push origin tony-campus-map
```

---

# 9. Keep Your Branch Updated

If changes were added to `test` while you were working:

## Update Local `test`

```bash
git switch test
git pull origin test
```

## Return to Your Branch

```bash
git checkout your-branch-name
```

## Merge Updated `test` Into Your Branch

```bash
git merge test
```

Resolve merge conflicts if needed.

---

# 10. Merge Your Branch Into `test`

Once your feature is complete and tested:

## Switch to `test`

```bash
git checkout test
```

## Pull Latest Updates

```bash
git pull origin test
```

## Merge Your Branch

```bash
git merge your-branch-name
```

## Push Updated `test`

```bash
git push origin test
```

---

# 11. Merge `test` Into `main`

This is usually done once or twice per week after testing is complete.

```bash
git checkout main
git pull origin main
git merge test
git push origin main
```

---

# Common Git Commands

## View Current Branch

```bash
git branch
```

---

## View Commit History

```bash
git log --oneline
```

---

## Switch Branches

```bash
git checkout branch-name
```

---

## Delete a Local Branch

```bash
git branch -d branch-name
```

---

# Important Rules

## Always Pull Before Starting Work

```bash
git pull origin test
```

---

## Never Push Directly to `main`

Only tested code should reach the `main` branch.

---

## Keep Commits Small and Descriptive

Smaller commits are easier to review and fix.

---

## Test Before Merging to `test`

Do not merge broken code into the shared branch.

---

# Example Full Workflow

```bash
# Update test branch
git checkout test
git pull origin test

# Create feature branch
git checkout -b tony-campus-map

# Make changes...

# Save work
git add .
git commit -m "Added clickable campus map hotspots"

# Push branch
git push origin tony-campus-map

# Merge into test later
git checkout test
git pull origin test
git merge tony-campus-map
git push origin test
```

---

# Recommended Branch Naming

Use clear and descriptive branch names.

## Format

```text
firstname-feature
feature-short-description
bugfix-short-description
```

## Examples

```text
tony-campus-map
john-auth-fix
sarah-dashboard-ui
```

---

# Final Notes

- Pull often
- Commit often
- Push regularly
- Keep branches focused on one feature when possible
- Ask for help when merge conflicts happen

Following this workflow helps keep the project stable, organized, and easier to manage for everyone on the team.
