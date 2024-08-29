import { playerService } from "../services/players.service";
import { Request, Response } from "express";
import { Players, playersSchemaValivation } from "../models/players";

class playersController {
  addPlayer = async (req: Request, res: Response) => {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      rank: req.body.rank,
    };
    const {error,value}=playersSchemaValivation.validate(data);
    if(error){
        res.send(error.message)
    }
    else{
        const player=await playerService.createPlayer(value);
        res.status(201).send(player);
    }
  };
  getAll = async (req: Request, res: Response) => {
    const result = await playerService.getAll();
    res.send(result);
  };
  getById = async (req: Request, res: Response) => {
    const result = await playerService.getAll();
    res.send(result);
  };
  getByName = async (req: Request, res: Response) => {
    const {firstName,lastName}=req.body.player;
    const player= await Players.findOne({firstName:firstName,lastName:lastName})
    res.send(player);
  };
}
export const PlayersController =new playersController()
