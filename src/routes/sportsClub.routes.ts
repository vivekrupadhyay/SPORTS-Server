import express from "express";
import { SportsClubController } from "../controllers/sportsClub.controller";
//initiating the router
export const router = express.Router();

//club routes
router.post("/", SportsClubController.addclub);
router.get("/", SportsClubController.getAllClub);
router.get("/:id", SportsClubController.getAClub);
router.put("/:id", SportsClubController.updateClub);
router.delete("/:id", SportsClubController.deleteClub);
