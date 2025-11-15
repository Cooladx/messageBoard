import express from "express";
import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import {messageRouter} from "./routes/index.js";

const app = express();

// Because dirname is through cjs, this is a fix to import dirname directly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "../public");
app.use(express.static(assetsPath));


app.use("/", messageRouter)

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
