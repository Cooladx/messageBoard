import express, { Router } from "express";
import { PORT } from "../app.js";
import { messages } from "./indexRouter.js";

import { getUserForm, createUsernamePost, getUserId } from "../controllers/userController.js";


export const messageRouter: Router = express.Router();



// Routes to controller for rendering form on /new
messageRouter.get("/", getUserForm); 

// Routes to controller for posting username and message on /new
messageRouter.post("/", createUsernamePost);


messageRouter.get("/:id", getUserId);
