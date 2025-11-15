import express, { Router } from "express";
import { PORT } from "../app.js";
import { messages } from "./indexRouter.js";

export const messageRouter: Router = express.Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

messageRouter.post("/", (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  // Get id from the last element in the array, otherwise set it to 0 because array is empty
  let lastId: number = messages.at(-1)?.id ?? 0;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    id: lastId + 1,
  });
  res.redirect("/");
  console.log(messages);
});

messageRouter.get("/:id", (req, res) => {
  let routeId = messages.find(
    (message) => message.id === Number(req.params.id),
  );
  res.render("message", { routeId: routeId, PORT: PORT });
});
