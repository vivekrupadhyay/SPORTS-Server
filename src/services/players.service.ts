import { Players } from "../models/players";
class PlayersService{
    async createPlayer(data:any){
        try{
            const player=await Players.create(data);
            return player;
        }catch(err){
            console.log(err);
        }
    }
    public async getAll() {
        try {
          const players = await Players.find({});
          return players;
        } catch (error) {
          console.log(error);
        }
      }
      public async getById(id: string) {
        try {
          const players = await Players.find({_id:id});
          if (!players) {
            return "this player not available.";
          }
          return players;
        } catch (error) {
          console.log(error);
        }
      }
      
}
export const playerService=new PlayersService();