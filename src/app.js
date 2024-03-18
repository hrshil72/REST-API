const express = require("express");
const app = express();
const PORT = 3000;
const apiRoutes = require("./routes/index");
const methodOverride = require("method-override");
const path = require("path");

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("App is running on port 3000");
});
