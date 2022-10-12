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

# Code locations

initial files are all backend, client side is located at client folder

in backend, you can check codes in app.js and models, controller, routes folder

in frontend, you can check codes in client/src/page/home and client/src/redux

# Future updates

using JWT encryption to pass payloads from frontend to backend for security purposes when accessing Network via Developer Options
