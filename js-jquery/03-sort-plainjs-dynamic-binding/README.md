# Sort (Plain JS) — Dynamic Binding Example

Overview

This small demo shows how to sort a simple list of student names using plain JavaScript and how to bind a click handler dynamically (no inline `onclick` attributes).

Files

- `index.html` — Minimal page with a button (`#btnSort`) and an unordered list (`#students`).
- `sortscript.js` — JavaScript that implements the sorting logic and attaches event listeners.

How the code works

1. `sorBtnHandler()`
   - Reads all `<li>` items inside `#students`.
   - Copies their visible text into an array (`itemsArr`).
   - Calls `itemsArr.sort()` to sort the strings lexicographically.
   - Clears the original list and rebuilds it from the sorted array.
   - Logs original and sorted arrays to the console for debugging.

2. `bindings()`
   - Finds the button with id `btnSort` and attaches a `click` event listener that calls `sorBtnHandler`.
   - Logs whether binding succeeded or failed (button not found).

3. `window.onload = bindings;`
   - Ensures `bindings()` runs after the page and resources finish loading, so elements exist when the code runs.

Notes and possible improvements

- `innerText` is used to read and write visible text. You may prefer `textContent` for a small performance gain and to avoid CSS-influenced text extraction.
- `itemsArr.sort()` does a simple lexicographic sort. To sort case-insensitively and respecting locale, use:
  `itemsArr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));`
- The script rebuilds the list from plain strings. If list items contain HTML or attributes you want to preserve, copy and sort the elements themselves rather than their text.

How to run

Open `index.html` in a browser and click the "Sort Students" button. Check the browser console to see debug output.

License / Attribution

Example code for learning and demonstration purposes.
