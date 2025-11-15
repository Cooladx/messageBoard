import express, { Router } from "express";
import { PORT } from "../app.js";
export const indexRouter: Router = express.Router();

type message = {
  id: number;
  text: string;
  user: string;
  added: Date;
};

export const messages: message[] = [
  {
    id: 1,
    text: "Good top of the morning to you!",
    user: "Villa",
    added: new Date(),
  },
  {
    id: 2,
    text: "Wsp people!",
    user: "Linda",
    added: new Date(),
  },
  {
    id: 3,
    text: "friends of the world!",
    user: "Mike",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    PORT: PORT,
  });
});
