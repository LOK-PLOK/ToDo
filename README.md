## ToDo

A todo application built using the PERN stack(PostgreSQL, Express, React,and Node.js) where:

1. **Backend**:
    - **PostgreSQL** is used as the database to store tasks, including fields such as task title, description, priority, and completion status.
    - **Node.js** and **Express** handle the server-side logic, providing RESTful APIs for creating, reading,updating,and deleting task(CRUD operations).

2. **Frontend**:
    - **React** is used to build the interactive user interface, while **Vite** is used as the development server and build tool to ensure fast compilation and hot module replacement.
    - **Features of the Frontend**:
      - **Add New Task**: Users can input task details through a form and submit them to the database.
      - **View Task**: a list of all task is displayed, Optional: tasks categorized by priority or status.
      - **Update Tasks**: Users can mark a tasks as completed or edit task details.
      - **Delete Task**: Users can remove tasks tat are no longer relevant.
      - Optional: **Filter Task**: users can filter task based on their status or priority.

3. Database:
   - **PostgreSQL** stores the task data in a table, with fields for task ID, title, description, priority, and status (boolean for completed or not).
   - The app uses **SQL queries** to retrieve, insert, update, and delete task records efficiently.

4. Server:
   - The **Node.js** server handles API requests from the frontend, interacts with the PostgreSQL database, and sends JSON responses back to React.
   - **Express** defines the backend routes for operations like retrieving tasks (`/tasks`), updating tasks (`/tasks/:id`), or deleting tasks.

5. Deployment:
   - To be planned
