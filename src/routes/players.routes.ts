import express from "express";
import { PlayersController } from "../controllers/players.controller";
//initiating the router
export const playersRoute = express.Router();

//Players routes
playersRoute.post("/create", PlayersController.addPlayer);
playersRoute.get("/get-all", PlayersController.getAll);
playersRoute.get("/get/:id", PlayersController.getById);
playersRoute.get("/get/:name", PlayersController.getByName);
