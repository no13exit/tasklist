# Task Manager — HW_42

A simple task manager built with **React** and **Vite** as part of a React homework assignment.

## Features

- Display a list of tasks with their current status
- Add a new task with a predefined title (`New Task`)
- Mark tasks as completed or pending
- Delete individual tasks
- Delete all completed tasks or clear the entire list
- Show total and completed task counts
- Filter tasks by **All**, **Completed**, or **Pending**
- Show different empty-state messages for an empty list and an empty filter result

## Tech stack

- React (functional components, `useState`, props)
- JavaScript and JSX
- Vite
- CSS

## Getting started

Requires Node.js and npm.

```bash
git clone https://github.com/no13exit/tasklist.git
cd tasklist
npm install
npm run dev
```

Open the local URL printed by Vite.

### Other commands

```bash
npm run build
npm run preview
npm run lint
```

## Project structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── TaskStatistics.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── Footer.jsx
├── data/
│   └── initialTasks.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

`App.jsx` owns the task list, filter state, task handlers, and statistics. `TaskList` renders the visible tasks using `map()`, and `TaskItem` displays each task and its actions.

## Notes

- New tasks currently use the predefined title `New Task`; text input is outside the scope of this assignment.
- Task IDs are generated using `crypto.randomUUID()`.
- Data is stored in React state only. Changes reset on page reload.
- Statistics always refer to **all tasks**, regardless of the active filter.

## Assignment

**HW_42 — Task Manager**, including the optional completed-task cleanup and advanced task filtering.
