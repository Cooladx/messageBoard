// src/controllers/userController.ts

import type { Request, Response } from "express";
// import { messages } from "../routes/indexRouter.js";
import { PORT } from "../app.js";
import { getAllMessages } from "../models/queries.js";

const getMessages = async (req: Request, res: Response) => {

  const messages = await getAllMessages()
  console.log(messages)
    res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    PORT: PORT,
  });

}


const getUserForm = async (req: Request, res: Response) => {
    res.render("form");
}

// const createUsernamePost = async (req: Request, res: Response) => {
//   console.log(messages)   const {messageUser, messageText} = req.body;
//
//  // Get id from the last element in the array, otherwise set it to 0 because array is empty
//  let lastId: number = messages.at(-1)?.id ?? 0;
//
//  messages.push({
//    text: messageText,
//    user: messageUser,
//    added: new Date(),
//    id: lastId + 1,
//  });
//  res.redirect("/");
//  console.log(messages);
// }
//
//const getUserId = async (req: Request, res: Response) => {
//  let routeId = messages.find(
//    (message) => message.id === Number(req.params.id),
//  );
//  res.render("message", { routeId: routeId, PORT: PORT });
// }
//
export {getUserForm, getMessages};