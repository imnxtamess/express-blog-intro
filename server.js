const express = require("express");
const app = express();
const port = 3000;

// server starts listening on port 3000
app.listen(port, () => {
  console.log(`The server is currently running on port http://localhost:${port}`)
})

app.get("/", () => {
  console.log("Home route started");

  res.send("Server del mio blog")
})