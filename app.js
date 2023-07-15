const express = require("express");
const appRoute = require("./routes/route");

const app = express();
let PORT = 5000 || process.env.PORT;

app.use(express.json());

// routes
app.use("/api", appRoute);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am on the server  http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
