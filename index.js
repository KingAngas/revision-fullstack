import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import itemsRoutes from "./routes/students.routes.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Servir le dossier public
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (_, res) => res.redirect("/index"));
app.use("/students", itemsRoutes);
app.listen(3000, () =>
  console.log("API running on http://localhost:3000")
);

