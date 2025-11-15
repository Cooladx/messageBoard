import express, { Router } from "express";

export const messageRouter: Router = express.Router();

type message = {
  text: string,
  user: string,
  added: Date
}

const messages: message[] = [
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

messageRouter.get("/", (req, res) => {
    res.render("index", {  title: "Mini Messageboard", messages: messages });
})