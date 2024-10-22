const express = require(`express`);
require(`dotenv`).config();
const connectDB = require(`./config/db`);
const todoRoutes = require(`./routes/todoRoutes`);

// connect to database
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/todos", todoRoutes);

// start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*
    To get started first "cd server" and install the necessary dependencies
    like express and optionally mongodb/mongoose (if we're going to use it)

    also install nodemon if you want to use it but it's optional
    if you decide to use it, run "nodemon index.js".

    else just run "node index.js"
    (but it will not watch for any changes in the code)
*/

// const express = require("express");
// const app = express();
// app.use(express.json());
