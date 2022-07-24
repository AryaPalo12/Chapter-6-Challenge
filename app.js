const express = require("express");
const userRouter = require("./src/users/usersRouter");
const app = express();
const port = 8001;

//Needed to parse Json provided in the body
app.use(express.json());

//This will show if the setting is correct and using the localhost "/" path
app.get("/", (req, res) => {
  res.send("Server is on");
});

//This app will use the user Router provided in the src folder
app.use(userRouter);

//Console log if the app is correctly set up
app.listen(port, () =>
  console.log(`Server is Up and listening from port ${port}`)
);
