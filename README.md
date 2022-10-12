# Basic todo list using (MERN with REDUX)

Step by step installion for local computer

1. clone repository

2. go to repository folder

3. run <b><i>npm install</i></b> on terminal for backend libraries

4. run <b><i>npm run dev</i></b> to serve backend on local port 5000

5. go to client folder within the repository folder

6. run <b><i>npm install --legacy-peer-deps</i></b> on terminal for frontend libraries

7. run <b><i>npm run dev</i></b> to serve frontend on local port 3000

# Configuring Database

1. go to repository folder

2. open <b><i>.env</i></b> file

3. uncomment the first <b><i>ALTAS_URI</i></b> and comment the second <b><i>ALTAS_URI</i></b> (make sure you have mongodb compass installed on your computer)

# Code explanation and sequence

1. User inputs a task name and submits it.

2. Submitted task will be saved to the database then updates redux when returned as success.

3. Task will show on the list.

4. Only 5 tasks will show every page.

5. User can set the task as completed by clicking the check button.

6. Task will be updated at the database then updates redux when returned as success.

7. User can delete a task by clicking the trash button.

8. Task will be updated as deleted and will not show within the list. (I use this feature in cases that a certain entity needs to have a history list)

9. When more than 5 tasks are available, the backend will sort it out and deligate each task for a certain page.

10. When a task is deleted within a previous page but not at the last page, tasks will not auto update to reduce queries from frontend to backend.

11. When a user accesses a certain page, a loading filler will appear while fetching the tasks from the database.

# Code locations

initial files are all backend, client side is located at client folder

in backend, you can check codes in app.js and models, controller, routes folder

in frontend, you can check codes in client/src/page/home and client/src/redux

# Future updates

using JWT encryption to pass payloads from frontend to backend for security purposes when accessing Network via Developer Options
