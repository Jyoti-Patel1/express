# Complete Coding by Prashant

This repository contains a set of sample Node.js/Express projects and utilities collected together in one workspace.

## Projects

- `calculator for sum/`
  - A simple sum calculator example with `app.js`, `handler.js`, and `sumHandler.js`.

- `dummy middleware log request/`
  - A basic Express app demonstrating middleware for logging incoming requests.

- `project airbnb/`
  - An Express-based project with route organization.
  - Contains `app.js` and a `routes/` directory with `hostRouter` and `userRouter`.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the app (root-level package scripts expect `app.js` in root):
   ```bash
   npm start
   ```

## Notes

- The repository currently includes `node_modules/` in the workspace root, but a `.gitignore` file already excludes it from git tracking.
- You can explore each project folder individually for different examples and demos.

## Dependencies

- `express`
- `body-parser`
- `nodemon`
