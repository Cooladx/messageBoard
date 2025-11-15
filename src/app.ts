import express from "express";
import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { indexRouter } from "./routes/indexRouter.js";
import { messageRouter } from "./routes/messageRouter.js";

const app = express();

// allows the parse for the form data into req.body
app.use(express.urlencoded({ extended: true }));

// Because dirname is through cjs, this is a fix to import dirname directly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "../public");
app.use(express.static(assetsPath));

// Main page for indexRouter
app.use("/", indexRouter);

// Pages for sending message and viewing specific id message
app.use("/new", messageRouter);

export const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
