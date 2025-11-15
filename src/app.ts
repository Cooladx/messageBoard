import express from "express";
import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

// Because dirname is through cjs, this is a fix to import dirname directly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "../public");
app.use(express.static(assetsPath));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Good top of the morning to you!",
    user: "Villa",
    added: new Date(),
  },
  {
    text: "Wsp people!",
    user: "Linda",
    added: new Date(),
  },
  {
    text: "friends of the world!",
    user: "Mike",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
