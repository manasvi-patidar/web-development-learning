const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); //v4 -> version 4
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "JS Mastery",
    content:
      "Created and deployed a new Full-stack project on vercel today. Go and check it out!",
  },
  {
    id: uuidv4(),
    username: "Manasvi Patidar",
    content: "Your future is built by what you do today, not tomorrow.",
  },
  {
    id: uuidv4(),
    username: "Vandan",
    content: "I got selected for my 1st Internship at Jane Street!",
  },
  {
    id: uuidv4(),
    username: "Nishant Chahar",
    content:
      "Launching a new AIML course on youtube soon. You'll definitely love it. Stay connected!",
  },
];

app.get("/posts", (req, res) => {
  //localhost:8080/
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  //localhost:8080/posts/new
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  //localhost:8080/posts/1a
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("Listening to port : 8080");
});

//cd "C:\Users\dell\Web Development\Rest"
//nodemon index.js
