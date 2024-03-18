const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

let comments = [
  {
    id: uuid(),
    author: "User-1",
    comment: "Backend is easy",
  },
  {
    id: uuid(),
    author: "User-2",
    comment: "Backend is medium",
  },
  {
    id: uuid(),
    author: "User-3",
    comment: "Backend is hard",
  },
];

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/blogs", (req, res) => {
  res.render("index", { comments });
});

router.get("/blogs/new", (req, res) => {
  res.render("new");
});

router.post("/blogs", (req, res) => {
  let { author, comment } = req.body;
  comments.push({ author, comment, id: uuid() });
  res.redirect("/blogs");
});

router.get("/blogs/:id", (req, res) => {
  let { id } = req.params;
  let foundProduct = comments.find((item) => item.id === id);
  res.render("show", { foundProduct });
});

router.get("/blogs/:id/edit", (req, res) => {
  let { id } = req.params;
  let foundProduct = comments.find((item) => item.id === id);
  res.render("edit", { foundProduct });
});

router.patch("/blogs/:id", (req, res) => {
  let { id } = req.params;
  let { comment } = req.body;
  let foundProduct = comments.find((item) => item.id === id);
  foundProduct.comment = comment;
  res.redirect("/blogs");
});

router.delete("/blogs/:id", (req, res) => {
  let { id } = req.params;
  comments = comments.filter((item) => {
    return item.id === id;
  });
  res.redirect("/blogs");
});

module.exports = router;
