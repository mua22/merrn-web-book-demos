# Simple ToDo CRUD (DOM-only example)

Overview

This small demo implements a minimal ToDo list UI using only plain JavaScript and DOM manipulation. It intentionally stores the ToDo items in the HTML (table rows) rather than in a JavaScript array to demonstrate event-binding behavior.

Files

- `index.html` — Page markup with a form to add todos and a table to display todos. Three example todos are provided as initial HTML rows.
- `todoscript.js` — JavaScript that binds the existing delete buttons individually and handles adding new todos by inserting rows into the table. New rows are created without delete event handlers on purpose.

Key behavior and teaching points

- Adding todos: The form at the top lets the user add a new todo. When submitted the script inserts a new `<tr>` into the `<tbody>` with the todo text.

- Deleting todos: The initial todos (provided in HTML) have Delete buttons that the script binds individually on load. Clicking these deletes the corresponding row.

- Important demonstration: Newly added todos do NOT have their Delete buttons bound (the code intentionally does not attach click handlers for rows created after load). This shows students why event delegation is useful: without delegation, handlers added at load time won’t affect later DOM nodes.

- No edit functionality: This demo intentionally omits editing to keep the example small and focused on binding and DOM-only storage.

Notes and possible improvements

- To make Delete work for newly added rows without binding each button individually, use event delegation: attach a single click handler to the table body and check event.target to detect Delete clicks.

- To persist todos between page loads, use `localStorage` or a server.

- For production use prefer progressive enhancement and better accessibility (e.g., managing focus after delete, confirming destructive actions).

How to run

Open `index.html` in your browser and try adding and deleting todos. Observe that Delete works for initial rows but not for newly added rows (intended for demonstration).
