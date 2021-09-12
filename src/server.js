import express from "express";
import path from "path";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => res.render("home"));

const handleListen = () => console.log("Listening on http://127.0.0.1:3000");
app.listen(3000, handleListen);
