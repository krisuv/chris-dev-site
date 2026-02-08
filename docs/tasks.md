# Task Management for the Personal Website

This document describes a lightweight system to manage work on this personal site (blog, contact form, about page, etc.) without needing a full
Jira‑style tool.

The goals:

- Keep tasks small, clear, and easy to track.
- Tie every task directly to a Git branch.
- Make it obvious what to work on next and what is done.

———

## 1. Task structure

Each task should have:

- ID: A unique code like CHRIS_DEV-2.
- Title: Short summary, e.g. “Implement contact form backend”.
- Type: One of:
  - feat – new user-facing functionality.
  - fix – bug fix.
  - chore – maintenance, tooling, config.
  - docs – documentation only.
  - refactor – internal code improvements without behavior changes.
- Status:
  - todo → in-progress → review (optional) → done (or blocked).
- Description:
  - What the task changes and why it matters.
- Acceptance criteria:
  - Bullet list of conditions to consider the task “done”.

Recommended template:

- ID: CHRIS_DEV-2
- Title: Implement contact form backend
- Type: feat
- Status: todo
- Branch: feat/CHRIS_DEV-2

### Description

- ...

### Acceptance criteria

- [ ] Form submission sends an email to my inbox
- [ ] Invalid email addresses show a clear error
- [ ] Success message is localized in all supported languages

You can keep each task as a separate section in this file or as rows in a table (see Section 6).

———

## 2. Task IDs and branch naming

### 2.1 Task ID convention

Use a project prefix plus an incrementing number that matches your external task system (e.g. Trello):

- Format: CHRIS_DEV-<number>
  - CHRIS_DEV – short code for this project.
  - <number> – integer, starting at 1.
- Example IDs:
  - CHRIS_DEV-1, CHRIS_DEV-2, CHRIS_DEV-10, CHRIS_DEV-101, …

This format is compatible with common tooling and matches the IDs used in your task board.

### 2.2 Branch naming convention

Every task must be implemented on its own branch.

Branch name format:

<type>/CHRIS_DEV-<number>

Where:

- <type> is one of: feat, fix, chore, docs, refactor.
- CHRIS_DEV-<number> is the task ID, e.g. CHRIS_DEV-3.

Examples:

- feat/CHRIS_DEV-1
- feat/CHRIS_DEV-2
- feat/CHRIS_DEV-3
- feat/CHRIS_DEV-4
- fix/CHRIS_DEV-7
- chore/CHRIS_DEV-9
- docs/CHRIS_DEV-10

Rules:

- One branch per task (no mixing unrelated changes).
- Branch always includes the task ID.
- Commit messages on task branches must include the task ID and type, e.g.:
  - feat(CHRIS_DEV-3): add about page layout
  - fix(CHRIS_DEV-7): show email validation error

———

## 3. Workflow

This is the intended loop for each task:

1. Create a task entry
   - Add a new task to docs/tasks.md (or your task board) with:
     - Unique CHRIS_DEV-<number> ID.
     - Title, Type, Status=todo, and Acceptance criteria.
2. Create a branch
   - From main (or develop, if you use it):
     - Create branch following the naming convention from Section 2.2.
   - Update the task entry with the branch name.
3. Implement the task
   - Make only the changes that belong to this task.
   - Keep commits small and related to the task.
4. Review & test
   - Ensure acceptance criteria are met.
   - Run relevant tests or manual checks.
   - Update Status to review (if you want a manual review step) or directly to done once you’re satisfied.
5. Merge & clean up
   - Merge the branch back into main (prefer a clean history).
   - Delete the branch if it’s no longer needed.
   - Update docs/tasks.md Status to done.

———

## 4. Organization levels (epics vs tasks)

Even for a small site, grouping tasks helps keep a clear roadmap.

- Theme / Epic – a bigger goal grouping several tasks:
  - Example: “MVP Public Site”, “Blog System”, “Contact & Analytics”.
- Task (CHRIS_DEV-<number>) – a concrete, independently shippable piece of work:
  - Example: “CHRIS_DEV-4: Blog post page layout”.

You can represent themes as headings with tasks under them.

Example:

## Theme: MVP Public Site

- CHRIS_DEV-1 – Layout and typography
- CHRIS_DEV-2 – i18n base setup
- CHRIS_DEV-3 – About page

## Theme: Blog System

- CHRIS_DEV-4 – Blog list page
- CHRIS_DEV-5 – Blog post page
- CHRIS_DEV-6 – MDX/Markdown content pipeline

Themes do not need their own branches; only tasks do.

———

## 5. Status definitions

Use a small, clear set of statuses:

- todo – Defined but not started.
- in-progress – You have a branch, and you’re actively working on it.
- review – Implementation is done; you’re doing self-review, tests, or asking someone to look.
- blocked – Cannot move on because of another dependency (e.g. waiting for design or external service).
- done – Merged to main and deployed (or ready to deploy).

You can track status either as text or with checkboxes:

- Status: in-progress

or

- Status:
  - [x] todo
  - [x] in-progress
  - [ ] review
  - [ ] done

For a personal project, a simple text status is usually enough.

———

## 6. Suggested task table for this project

Below is an initial backlog tailored to this site (blog, contact, about page, i18n). You can add/remove/update rows as you refine the plan.

### 6.1 Foundation & layout

| ID          | Title                          | Type | Status | Branch           |
| ----------- | ------------------------------ | ---- | ------ | ---------------- |
| CHRIS_DEV-1 | Base layout, fonts, theme      | feat | todo   | feat/CHRIS_DEV-1 |
| CHRIS_DEV-2 | i18n routing & locale switcher | feat | todo   | feat/CHRIS_DEV-2 |
| CHRIS_DEV-3 | Global navigation & footer     | feat | todo   | feat/CHRIS_DEV-3 |

### 6.2 Public pages

| ID          | Title                            | Type | Status | Branch           |
| ----------- | -------------------------------- | ---- | ------ | ---------------- |
| CHRIS_DEV-4 | About page structure & content   | feat | todo   | feat/CHRIS_DEV-4 |
| CHRIS_DEV-5 | Contact page UI                  | feat | todo   | feat/CHRIS_DEV-5 |
| CHRIS_DEV-6 | Contact form validation & submit | feat | todo   | feat/CHRIS_DEV-6 |

### 6.3 Blog system

| ID          | Title                      | Type | Status | Branch           |
| ----------- | -------------------------- | ---- | ------ | ---------------- |
| CHRIS_DEV-7 | Blog listing page (index)  | feat | todo   | feat/CHRIS_DEV-7 |
| CHRIS_DEV-8 | Blog post page             | feat | todo   | feat/CHRIS_DEV-8 |
| CHRIS_DEV-9 | Markdown/MDX post pipeline | feat | todo   | feat/CHRIS_DEV-9 |

### 6.4 Polish, docs & maintenance

| ID           | Title                          | Type     | Status | Branch                |
| ------------ | ------------------------------ | -------- | ------ | --------------------- |
| CHRIS_DEV-10 | i18n messages and translations | feat     | todo   | feat/CHRIS_DEV-10     |
| CHRIS_DEV-11 | Improve accessibility (a11y)   | refactor | todo   | refactor/CHRIS_DEV-11 |
| CHRIS_DEV-12 | Extend project documentation   | docs     | todo   | docs/CHRIS_DEV-12     |

You can:

- Start by picking a theme (e.g. Foundation & layout).
- Take the lowest numbered todo task.
- Create the branch as specified in the table.
- Update this file as you progress.

———

## 7. How to add a new task

1. Pick the next number:
   - If the last task is CHRIS_DEV-12, the next is CHRIS_DEV-13.
2. Decide on:
   - Type (feat, fix, chore, docs, refactor).
   - Title and brief description.
3. Add it under the relevant theme/table (or in your task board) with:
   - ID, Title, Type, Status=todo, and a planned Branch name.
4. When starting work:
   - Create the branch using the Branch name.
   - Change Status to in-progress.
5. When finished and merged:
   - Update Status to done.

———

## 8. Commit messages and Git hook

To keep history tied to tasks, this repository enforces a commit message convention via a `commit-msg` Git hook (implemented with Husky).

### 8.1 Commit message format

On task branches (branches named `<type>/CHRIS_DEV-<number>`):

- Branch name must look like:
  - `<type>/CHRIS_DEV-<number>`
  - where `<type>` is one of: `feat`, `fix`, `chore`, `docs`, `refactor`.
- Commit messages must use:
  - `<type>(CHRIS_DEV-<number>): <subject>`

Examples:

- Branch: `feat/CHRIS_DEV-2`
  - Commit: `feat(CHRIS_DEV-2): project setup`
- Branch: `fix/CHRIS_DEV-7`
  - Commit: `fix(CHRIS_DEV-7): correct contact form validation`

Rules enforced by the hook:

- `<type>` in the commit message must be one of: `feat`, `fix`, `chore`, `docs`, `refactor`.
- The `<type>` in the commit message must match the `<type>` in the branch name.
- The `CHRIS_DEV-<number>` in the commit message must match the task ID in the branch name.
- The `<subject>` must be non-empty and not just `"wip"`.
- Merge and revert commits (starting with `Merge ` or `Revert `) are allowed without these checks.

On non-task branches (for example `main` or experimental branches), the hook only checks that the first line of the commit message is not empty or whitespace.

### 8.2 How the hook is wired

- Husky is configured in `package.json` (`"prepare": "husky"`), so running `npm install` will install the Git hooks.
- The validation logic for commit messages lives directly in `.husky/commit-msg`.
- If hooks ever need to be reinstalled manually, run:
  - `npx husky install`

Once this is set up, any commit made on a `feat/CHRIS_DEV-<number>`, `fix/CHRIS_DEV-<number>`, `chore/CHRIS_DEV-<number>`, `docs/CHRIS_DEV-<number>`, or `refactor/CHRIS_DEV-<number>` branch will be validated against the conventions above.
