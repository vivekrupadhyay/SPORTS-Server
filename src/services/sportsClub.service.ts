import { SportsClub } from "../models/sportsClub";

 class sportsClubService {
   async CreateClub(data: any) {
    try {
      const newClub = await SportsClub.create(data);
      return newClub;
    } catch (err) {
      console.log(err);
    }
  }
  public async getAll() {
    try {
      const clubs = await SportsClub.find({});
      return clubs;
    } catch (error) {
      console.log(error);
    }
  }
  public async getClub(id: string) {
    try {
      const clubs = await SportsClub.findById({ _id: id });
      if (!clubs) {
        return "club not available";
      }
      return clubs;
    } catch (error) {
      console.log(error);
    }
  }
  public async updateClub(id: string, data: any) {
    try {
      //pass the id of the object you want to update
      //data is for the new body you are updating the old one with
      //new:true, so the dats being returned, is the update one
      const clubs = await SportsClub.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!clubs) {
        return "club not available";
      }
      return clubs;
    } catch (error) {
      console.log(error);
    }
  }
  public async deleteClub(id: string) {
    try {
      const club = await SportsClub.findByIdAndDelete(id);
      if (!club) {
        return "club not available";
      }
    } catch (error) {
      console.log(error);
    }
  }
}
//export the class
export const sportsService = new sportsClubService();
