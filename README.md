## CRUD Operations in a virtual book store.

Learn MERN stack: Learning by Doing.
(https://www.youtube.com/watch?v=-42K44A1oMA)


### Purpose of the project

This is a project where I am learning the MERN stack. 
While I have worked with these frameworks separately, I have not delved deep into them and worked on them from End-to-end as much as I'd like. 
Thus, this is a project where I intend to work quickly on learning the MERN stack.

The following are my focus points:
1. Speed. This is a project that I have wanted to work on for a long time, but has always been postponed. 
2. Learning by doing: Hands-on work with MERN stack, along with JS will help build expertise in this coveted tech stack.  
3. Abandoning code quality: While this goes against fundamental software development principles and my own views on the same, I am taking this stance to avoid any delays while working on this project. Like many personal projects, especially those at a small scale, this is an acceptable stance to take.
4. Daily commit principle: Commits to track my own progress, build accountability. It is a short deadline.


### Timeline

Deadline: 30th July. 6 Days. Intense focus expected.
Actual:
25th July, 2 AM: Backend Completed. (Within 20 hours; with breaks and chilling as one does during vacation).



### Steps For BackEnd: (done before frontend)

1. npm init -y (Add package.json)
2. adding "type": "module" to package.json.
3. Install Express and Nodemon: npm i express nodemon. (Express for framework; Nodemon for auto-restarting server)
4. Adding scripts: npm start, npm run dev etc.
5. Add first route. A simple app.get('', () => {}) works.
6. Connect to MongoDB. Use the connection string from mongoDB site while creating DB, create a variable in config.js and then proceed. 
7. Create Models from Schema.
8. Implement CRUD Operations.
9. Refactor Code: Add Express Router to avoid monolithic index.js file. (for eg: 8 Models, 5 Routes each would make index.js very huge)
10. Allow CORS. For this, install cors library. Then use middleware for handling cors in index.js (app.use(cors(...)))


### Steps For FrontEnd: 

1. Initialize React project. (Using Vite or npm create-react-app). Install Extensions: react code snippets (rafce functionality).
2. Tailwind CSS: SETUP Tailwind CSS (Framework Guides Steps, follow React steps): https://tailwindcss.com/docs/installation/framework-guides
3. Adding SPA(SinglePageApplication) + Routes: Install react-dom-router. Use <BrowserRouter> tags in main.jsx (Containing the App). Then import {Routes, Route} in App.jsx. Then Proceed to define <Routes> and <Route> in App.jsx.
