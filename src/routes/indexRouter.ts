// src/routes/indexRouter.ts

import express, { Router } from "express";
import { getMessages } from "../controllers/userController.js";
export const indexRouter: Router = express.Router();


indexRouter.get("/", getMessages);
