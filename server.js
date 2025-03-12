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

app.get("/api/v1/posts", (res, req) => {

  const posts = [
    {
      id: 1,
      title: "post 1",
      body: "lorem ipsum",
      img: "./images/img1.jpg",
      tags: ["lorem", "picsum", "ipsum", "dorime", "adapare"]
    },
    {
      id: 2,
      title: "post 2",
      body: "lorem ipsum",
      img: "./images/img2.jpg",
      tags: ["lorem", "picsum", "ipsum", "dorime", "adapare"]
    },
    {
      id: 3,
      title: "post 3",
      body: "lorem ipsum",
      img: "./images/img3.jpg",
      tags: ["lorem", "picsum", "ipsum", "dorime", "adapare"]
    },
    {
      id: 4,
      title: "post 4",
      body: "lorem ipsum",
      img: "./images/img4.jpg",
      tags: ["lorem", "picsum", "ipsum", "dorime", "adapare"]
    },
    {
      id: 5,
      title: "post 5",
      body: "lorem ipsum",
      img: "./images/img5.jpg",
      tags: ["lorem", "picsum", "ipsum", "dorime", "adapare"]
    },
  ]

  res.json(posts)

})