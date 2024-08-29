import { sportsService } from "../services/sportsClub.service";
import { Request, Response } from "express";
import { sportClubsSchemaValidate } from "../models/sportsClub";

class sportsClubController {
  addclub = async (req: Request, res: Response) => {
    //data to be saved in database
    const data = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      published: req.body.published,
    };
    const { error, value } = sportClubsSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      //call the CreateClub function in the service and pass the data from the request
      const club = await sportsService.CreateClub(value);
      res.status(201).send(club);
    }
  };

  //get all clubs
  getAllClub = async (req: Request, res: Response) => {
    const club = await sportsService.getAll();
    res.send(club);
  };

  //get a single club
  getAClub = async (req: Request, res: Response) => {
    //get id from the parameter
    const id = req.params.id;
    const club = await sportsService.getClub(id);
    res.send(club);
  };
  //update club
  updateClub = async (req: Request, res: Response) => {
    const id = req.params.id;
    const club = await sportsService.updateClub(id, req.body);
    res.send(club);
  };

  //delete a club
  deleteClub = async (req: Request, res: Response) => {
    const id = req.params.id;
    await sportsService.deleteClub(id);
    res.send("club deleted");
  };
}
export const SportsClubController = new sportsClubController()