Create a simple full-stack web application called PostgresEditor. The goal is to let users connect to a PostgreSQL server and view all databases in a clean UI. No need for a query editor or table data view.

Requirements:
1. Connection Screen
A form with the following fields:

Host

Port

Username

Password (with "Show Password" toggle)

A "Connect" button

A "Save Connection" option (store values in localStorage or secure browser memory)

On click of "Connect", attempt to establish a connection to the PostgreSQL server.

2. Success Screen (after successful connection)
Display a simple list or table of all databases on the connected PostgreSQL server.

Each database name should be listed clearly.

No further navigation, table viewing, or query interface is needed.

3. Tech Stack:
Frontend: React (or plain HTML + JavaScript for simplicity), styled with TailwindCSS or similar

Backend: Node.js (Express) or Python (FastAPI or Flask)

Use PostgreSQL driver (pg for Node.js or psycopg2 for Python)

Backend endpoint to:

Connect to the database

Return the list of all databases (SELECT datname FROM pg_database WHERE datistemplate = false;)

4. User Experience:
Responsive, minimal UI

Show loading and error states (e.g., invalid credentials or network issues)